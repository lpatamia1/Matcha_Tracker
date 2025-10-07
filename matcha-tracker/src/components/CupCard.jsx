import { motion } from "framer-motion";
import { useContext } from "react";
import { TrackerContext } from "../context/TrackerContext";

export default function CupCard({ id, type, energy }) {
  const { deleteEntry } = useContext(TrackerContext);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteEntry(id);
  };

  const gradients = {
    latte: "linear-gradient(135deg, #dfeecb, #cde0b6)",
    iced: "linear-gradient(135deg, #d2f5e3, #bfe6ca)",
    ceremonial: "linear-gradient(135deg, #c9f2c2, #a7d7b0)",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl w-36 sm:w-40 text-center overflow-hidden shadow-lg"
      style={{
        background: gradients[type] || gradients.latte,
        border: "1px solid rgba(184, 216, 169, 0.4)",
      }}
    >
      {/* ✖ delete button */}
      <div className="absolute top-0 right-0 p-2">
        <button
          onClick={handleDelete}
          className="text-gray-700 hover:text-red-500 font-bold text-lg leading-none z-20"
          title={`Delete ${type} cup`}
        >
          ✖
        </button>
      </div>

      {/* content area */}
      <div className="flex flex-col items-center justify-center px-4 py-6">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-5xl select-none pointer-events-none mb-2"
        >
          🍵
        </motion.div>

        <p className="font-semibold text-[#2f2f2f] capitalize">{type}</p>
        <p className="text-sm text-gray-600">Energy: {energy}/5</p>
      </div>

      {/* shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>
    </motion.div>
  );
}
