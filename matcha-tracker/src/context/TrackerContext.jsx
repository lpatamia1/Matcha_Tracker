import { createContext, useState, useEffect } from "react";

export const TrackerContext = createContext();

export const TrackerProvider = ({ children }) => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("matchaEntries");
    return saved ? JSON.parse(saved) : [];
  });

  const addEntry = (cup) => setEntries([...entries, { ...cup, id: Date.now() }]);

  useEffect(() => {
    localStorage.setItem("matchaEntries", JSON.stringify(entries));
  }, [entries]);

  return (
    <TrackerContext.Provider value={{ entries, addEntry }}>
      {children}
    </TrackerContext.Provider>
  );
};
