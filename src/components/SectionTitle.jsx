import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, number }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      <div className="eyebrow">
        <span>{number}</span> {eyebrow}
      </div>

      <h2 dangerouslySetInnerHTML={{ __html: title }} />
    </motion.div>
  );
}