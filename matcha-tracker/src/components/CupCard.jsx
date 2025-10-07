import { motion } from "framer-motion";

export default function CupCard({ type, energy }) {
  const colors = {
    latte: "#b8d8a9",
    iced: "#a8d5ba",
    ceremonial: "#9cc69b",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="rounded-2xl shadow-md p-4 w-40 text-center"
      style={{ backgroundColor: colors[type] }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-4xl"
      >
        🍵
      </motion.div>
      <p className="mt-2 font-semibold capitalize">{type}</p>
      <p className="text-sm text-gray-700">Energy: {energy}/5</p>
    </motion.div>
  );
}
