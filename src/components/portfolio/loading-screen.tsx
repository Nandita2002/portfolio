"use client";

import { motion } from "framer-motion";

type LoadingScreenProps = {
  loading: boolean;
};

export function LoadingScreen({ loading }: LoadingScreenProps) {
  if (!loading) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-white via-emerald-50 to-green-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#16a34a] to-[#22c55e] shadow-[0_12px_35px_-14px_rgba(22,163,74,0.9)]"
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.03, 0.97, 1] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.p
          className="text-sm font-medium tracking-wide text-slate-700 dark:text-slate-300"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 1.1, repeat: Number.POSITIVE_INFINITY }}
        >
          Crafting premium experience...
        </motion.p>
      </div>
    </motion.div>
  );
}
