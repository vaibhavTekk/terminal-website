import React, { useState, useContext } from "react";
import { HistoryContext } from "../utils/HistoryProvider";

function Input() {
  const [input, setInput] = useState("");
  const { history, setHistory } = useContext(HistoryContext);

  function onSubmit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const historyPayload = { date: new Date(), command: input, output: "PlaceHolder Output" };
      setHistory([...history, historyPayload]);
      setInput("");
    }
  }
  return (
    <div className="inline">
      <span>guest@vaibhavtekk.tech$ ~ </span>
      <input
        type="textarea"
        className="inline focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onSubmit}
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
}

export default Input;
