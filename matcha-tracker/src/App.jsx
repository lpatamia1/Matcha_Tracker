import { TrackerProvider } from "./context/TrackerContext";
import AddEntryForm from "./components/AddEntryForm";
import CupCard from "./components/CupCard";
import EnergyChart from "./components/EnergyChart";
import FloatingLeaves from "./components/FloatingLeaves";
import { useContext } from "react";
import { TrackerContext } from "./context/TrackerContext";
import "./styles/globals.css";

function Dashboard() {
  const { entries } = useContext(TrackerContext);
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {entries.map((e) => (
        <CupCard key={e.id} type={e.type} energy={e.energy} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <TrackerProvider>
      <div className="relative min-h-screen bg-[#f6f3ec] text-[#3b3b3b] flex flex-col items-center py-8 overflow-hidden">
        <FloatingLeaves />
        <h1 className="text-4xl font-bold mb-4">🍵 Matcha Tracker</h1>
        <AddEntryForm />
        <Dashboard />
        <EnergyChart />
      </div>
    </TrackerProvider>
  );
}
