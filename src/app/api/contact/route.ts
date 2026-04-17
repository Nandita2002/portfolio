import { promises as fs } from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  source?: string;
};

type StoredContactSubmission = ContactPayload & {
  id: string;
  submittedAt: string;
  ip: string | null;
  userAgent: string | null;
};

const DEFAULT_STORAGE_PATH = "/tmp/portfolio-contact-submissions.json";
const MAX_STORED_SUBMISSIONS = 500;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getStoragePath(): string {
  const configuredPath = process.env.CONTACT_STORAGE_PATH?.trim();
  if (configuredPath) {
    return path.isAbsolute(configuredPath)
      ? configuredPath
      : path.join(process.cwd(), configuredPath);
  }

  return DEFAULT_STORAGE_PATH;
}

async function readSubmissions(filePath: string): Promise<StoredContactSubmission[]> {
  try {
    const rawData = await fs.readFile(filePath, "utf-8");
    const parsedData = JSON.parse(rawData) as unknown;

    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData as StoredContactSubmission[];
  } catch {
    return [];
  }
}

async function writeSubmission(
  filePath: string,
  submission: StoredContactSubmission
): Promise<void> {
  const directoryPath = path.dirname(filePath);
  await fs.mkdir(directoryPath, { recursive: true });

  const existingSubmissions = await readSubmissions(filePath);
  const updatedSubmissions = [submission, ...existingSubmissions].slice(
    0,
    MAX_STORED_SUBMISSIONS
  );

  await fs.writeFile(filePath, JSON.stringify(updatedSubmissions, null, 2), "utf-8");
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name) {
    return NextResponse.json(
      { ok: false, message: "Name is required." },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Valid email is required." },
      { status: 400 }
    );
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { ok: false, message: "Message must be at least 10 characters long." },
      { status: 400 }
    );
  }

  const submission: StoredContactSubmission = {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    source: payload.source ?? "portfolio-contact-form",
    submittedAt: new Date().toISOString(),
    ip: request.headers.get("x-forwarded-for") ?? null,
    userAgent: request.headers.get("user-agent") ?? null,
  };

  try {
    await writeSubmission(getStoragePath(), submission);
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to save submission right now." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks! Your message has been received.",
  });
}
