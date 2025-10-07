import { useContext, useState } from "react";
import { TrackerContext } from "../context/TrackerContext";

export default function AddEntryForm() {
  const { addEntry } = useContext(TrackerContext);
  const [type, setType] = useState("latte");
  const [energy, setEnergy] = useState(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ type, energy });
  };

  return (
    <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 p-4 bg-[#f6f3ec] rounded-xl shadow-md border border-[#b8d8a9] w-full max-w-md mx-auto"
        >

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 rounded-md border border-[#d3d3d3]"
      >
        <option value="latte">Latte 🍵</option>
        <option value="iced">Iced 🧊</option>
        <option value="ceremonial">Ceremonial 🌿</option>
      </select>

      <input
        type="number"
        value={energy}
        min="1"
        max="5"
        onChange={(e) => setEnergy(Number(e.target.value))}
        className="p-2 rounded-md border border-[#d3d3d3] w-24"
        placeholder="Energy"
      />

      <button
        type="submit"
        className="bg-[#b8d8a9] hover:bg-[#9cc69b] p-2 rounded-lg transition font-semibold"
      >
        Add Cup
      </button>
    </form>
  );
}
