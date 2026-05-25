import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "background" | "muted" | "card";
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  bg = "background",
}: SectionWrapperProps) {
  const bgClass =
    bg === "muted"
      ? "bg-muted/30"
      : bg === "card"
        ? "bg-card"
        : "bg-background";

  return (
    <section id={id} className={`${bgClass} py-20 lg:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
