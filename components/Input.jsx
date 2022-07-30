import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("");
  function onSubmit(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(input);
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
