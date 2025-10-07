import { TrackerProvider } from "./context/TrackerContext";
import AddEntryForm from "./components/AddEntryForm";
import CupCard from "./components/CupCard";
import EnergyChart from "./components/EnergyChart";
import FloatingLeaves from "./components/FloatingLeaves";
import ThemeToggle from "./components/ThemeToggle";
import { useContext } from "react";
import { TrackerContext } from "./context/TrackerContext";
import { AnimatePresence } from "framer-motion";
import "./styles/globals.css";

// 🧩 Dashboard component
function Dashboard() {
  const { entries } = useContext(TrackerContext);
  console.log("📊 Dashboard rendering entries:", entries);

  return (
    <div className="w-full flex justify-center px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center">
        <AnimatePresence>
          {entries.map((entry) => (
            <CupCard
              key={entry.id}
              id={entry.id}
              type={entry.type}
              energy={entry.energy}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

// 🌿 Main App component
export default function App() {
  return (
    <TrackerProvider>
      <div className="relative min-h-screen bg-[#f6f3ec] dark:bg-[#2d2e26] text-[#3b3b3b] dark:text-[#f6f3ec] flex flex-col items-center py-10 px-6 overflow-hidden transition-colors duration-500">
        <ThemeToggle />
        <FloatingLeaves />

        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
          🍵 Matcha Tracker
        </h1>

        {/* Form container */}
<div className="bg-[#d9e7c6] dark:bg-[#3a3a30] rounded-xl shadow-md p-6 w-full max-w-md flex flex-col items-center text-center">
  <AddEntryForm />

  {/* Energy scale guide */}
  <div className="mt-6 bg-[#f6f3ec] dark:bg-[#2d2e26] border border-[#c7dfb7] rounded-2xl p-6 shadow-md text-sm text-gray-700 dark:text-gray-200 max-w-sm mx-auto">
    <h3 className="font-semibold text-lg mb-3 text-[#2f2f2f] flex items-center justify-center gap-2">
      🍃 Energy Scale (1–5)
    </h3>
    <ul className="space-y-1 text-left leading-relaxed">
      <li><strong>1</strong> — very calm, barely a buzz 😴</li>
      <li><strong>2</strong> — mild boost, gentle focus ☁️</li>
      <li><strong>3</strong> — balanced energy, productive calm 🌱</li>
      <li><strong>4</strong> — strong clarity and focus ⚡</li>
      <li><strong>5</strong> — intense alertness, almost jittery 😳</li>
    </ul>
  </div>
</div>


        {/* Divider */}
        <div className="w-full max-w-4xl border-t border-[#b8d8a9] mt-8 mb-6 opacity-60"></div>

        {/* Dashboard grid */}
        <div className="w-full flex justify-center">
          <Dashboard />
        </div>

        {/* Energy trend chart */}
        <div className="mt-10 w-full max-w-3xl">
          <EnergyChart />
        </div>
      </div>
    </TrackerProvider>
  );
}
