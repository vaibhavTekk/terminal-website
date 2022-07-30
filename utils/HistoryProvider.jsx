import { createContext, useState } from "react";

export const HistoryContext = createContext();

export function HistoryProvider(props) {
  const [history, setHistory] = useState([]);
  return <HistoryContext.Provider value={{ history, setHistory }}>{props.children}</HistoryContext.Provider>;
}
