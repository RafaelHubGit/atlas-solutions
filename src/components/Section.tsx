import type { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}
export function Section({
  id,
  number,
  label,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-intro">
        <div className="eyebrow">
          <span>{number}</span>
          {label}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section-content">{children}</div>
    </motion.section>
  );
}
