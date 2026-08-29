import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader-top">
        <span>IIT MANDI</span>
        <span>2026</span>
      </div>

      <div className="loader-center">

        <motion.div
          className="loader-line"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.4 }}
        />

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >
          RAN
          <br />
          <em>NEETI</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
        >
          LOADING THE ARENA...
        </motion.p>

      </div>

      <div className="loader-bottom">
        <span>SPORTS FEST</span>
        <span>01 / 01</span>
      </div>

    </motion.div>
  );
}