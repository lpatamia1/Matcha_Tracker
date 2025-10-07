import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const leafEmojis = ["🍃", "🌿", "🪷", "🌸"];

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      emoji: leafEmojis[Math.floor(Math.random() * leafEmojis.length)],
      left: Math.random() * 100, // spread across the screen
      delay: Math.random() * 6,
      duration: 14 + Math.random() * 10,
      size: 26 + Math.random() * 20,
      drift: Math.random() * 40 - 20, // wider side drift
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none z-10">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          initial={{
            y: -100,
            x: `${leaf.left}vw`,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: ["-10vh", "110vh"], // full vertical travel
            x: [
              `${leaf.left + leaf.drift}vw`,
              `${leaf.left - leaf.drift}vw`,
              `${leaf.left}vw`,
            ],
            opacity: [0, 0.9, 0.9, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity, // ✅ ensures continuous looping
            repeatType: "loop", // ✅ ensures each leaf restarts smoothly
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            fontSize: `${leaf.size}px`,
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.15))",
            userSelect: "none",
          }}
        >
          {leaf.emoji}
        </motion.div>
      ))}
    </div>
  );
}
