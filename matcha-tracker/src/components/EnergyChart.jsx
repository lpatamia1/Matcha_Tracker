import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useContext } from "react";
import { TrackerContext } from "../context/TrackerContext";

export default function EnergyChart() {
  const { entries } = useContext(TrackerContext);

  // ✅ Use the actual date field
  const data = entries.map((e) => ({
    name: new Date(e.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    energy: e.energy,
  }));

  if (data.length === 0) return null;

  return (
    <div className="bg-[#f6f3ec] rounded-2xl p-4 shadow-md mt-8 w-[90%] sm:w-[600px]">
      <h2 className="text-xl font-semibold mb-3 text-center">Energy Trend 🌿</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#7aa76f"
            strokeWidth={3}
            dot={{ fill: "#b8d8a9", r: 6 }}
            activeDot={{ r: 8 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
