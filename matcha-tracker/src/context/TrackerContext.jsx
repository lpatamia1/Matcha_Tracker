import { createContext, useState, useEffect } from "react";

export const TrackerContext = createContext();

export const TrackerProvider = ({ children }) => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("matchaEntries");
    return saved ? JSON.parse(saved) : [];
  });

    const addEntry = (cup) =>
    setEntries((prev) => [
        ...prev,
        {
        ...cup,
        id: crypto.randomUUID(), // unique ID
        date: new Date().toISOString(), // ✅ save a real timestamp
        },
    ]);

  const deleteEntry = (id) => {
    console.log("🗑️ Deleting entry with ID:", id);
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("matchaEntries", JSON.stringify(entries));
  }, [entries]);

  return (
    <TrackerContext.Provider value={{ entries, addEntry, deleteEntry }}>
      {children}
    </TrackerContext.Provider>
  );
};
