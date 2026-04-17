This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## LinkedIn Blog Section (Auto-latest)

This portfolio includes a **Blog** section that can automatically display your latest LinkedIn articles.

1. Add your LinkedIn RSS/Atom feed URL in `.env.local`:

```bash
LINKEDIN_ARTICLES_FEED_URL=https://your-feed-url.xml
```

2. If feed data is unavailable, fallback links from `src/lib/portfolio-data.ts` are shown.
3. When you publish a new LinkedIn article and your feed updates, the site will show it automatically (revalidated periodically on the server).

## Contact Form Data Collection

The contact form now submits to `POST /api/contact` and stores submissions server-side.

1. By default, submissions are stored at:

```bash
/tmp/portfolio-contact-submissions.json
```

2. To customize the storage file location, set:

```bash
CONTACT_STORAGE_PATH=./data/contact-submissions.json
```

The API validates name/email/message before saving each submission.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
