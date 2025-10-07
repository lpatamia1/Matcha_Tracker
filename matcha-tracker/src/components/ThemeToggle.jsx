import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark(!dark)}
      className="absolute top-4 right-4 bg-[#b8d8a9] dark:bg-[#4a5933] text-[#3b3b3b] dark:text-[#f6f3ec] rounded-full px-3 py-2 shadow-md hover:scale-105 transition"
    >
      {dark ? "🌙 Night Matcha" : "☀️ Day Matcha"}
    </motion.button>
  );
}
