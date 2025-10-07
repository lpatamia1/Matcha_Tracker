import { motion } from "framer-motion";

export default function FloatingLeaves() {
  const leaves = Array.from({ length: 6 });

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * window.innerWidth, y: -100, opacity: 0 }}
          animate={{
            y: [0, window.innerHeight + 100],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
          className="absolute text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            color: "#7aa76f",
          }}
        >
          🍃
        </motion.div>
      ))}
    </div>
  );
}
