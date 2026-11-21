import { motion } from "motion/react";
import { cn } from "~/lib/utils";

interface SectionHeadingProps {
  chapter: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/** Cabeçalho de "capítulo", com ornamento dourado. */
export function SectionHeading({
  chapter,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
      className={cn("mx-auto mb-14 max-w-3xl text-center", className)}
    >
      <p className="font-cinzel text-xs uppercase tracking-[0.5em] text-gold/80">
        {chapter}
      </p>
      <div className="mx-auto my-4 flex items-center justify-center gap-3">
        <span className="glow-line w-16 sm:w-24" />
        <Ornament />
        <span className="glow-line w-16 sm:w-24" />
      </div>
      <h2 className="rune-title text-3xl sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-lg italic text-moon/70 sm:text-xl">{subtitle}</p>
      )}
    </motion.header>
  );
}

export function Ornament({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 text-gold", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
