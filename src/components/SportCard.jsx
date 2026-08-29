import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function SportCard({ sport, index }) {
  return (
    <motion.article
      className="sport-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.07,
        duration: 0.6
      }}
      whileHover={{ y: -10 }}
    >
      <div className="sport-number">
        0{index + 1}
      </div>

      <div className="sport-icon">
        {sport.icon}
      </div>

      <div>
        <p className="mini">
          {sport.type}
        </p>

        <h3>
          {sport.name}
        </h3>
      </div>

      <div className="sport-arrow">
        <ArrowUpRight size={21} />
      </div>

      <div className="card-line" />
    </motion.article>
  );
}