import React, { useState, useContext } from "react";
import { HistoryContext } from "../utils/HistoryProvider";
import checkCommand from "../utils/Commands";

function Input() {
  const [input, setInput] = useState("");
  const { history, setHistory } = useContext(HistoryContext);
  const [commandList, setCommandList] = useState([]);
  const [commandIndex, setCommandIndex] = useState(0);

  function onSubmit(e) {
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      if (input === "clear") {
        setHistory([]);
      } else {
        const historyPayload = { date: new Date(), command: input, output: checkCommand(input) };
        setHistory([...history, historyPayload]);
        setCommandList([...commandList, input]);
        setCommandIndex(commandList.length);
      }
      setInput("");
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandIndex > 0) {
        setInput(commandList.at(commandIndex));
        setCommandIndex(commandIndex - 1);
      } else if (commandIndex === 0) {
        setInput(commandList.at(commandIndex));
      } else {
        setInput("");
      }
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex < commandList.length) {
        setInput(commandList.at(commandIndex));
        setCommandIndex(commandIndex + 1);
      } else if (commandIndex === commandList.length) {
        setInput(commandList.at(commandIndex));
      } else {
        setInput("");
      }
    }
  }
  return (
    <div className="inline">
      <span>
        <span className="text-green-400">guest@vaibhavtekk.tech</span>:<span className="text-blue-400">~</span>
        <span>$</span>{" "}
      </span>
      <input
        type="textarea"
        className="inline focus:outline-none bg-inherit w-1/2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onSubmit}
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        onBlur={(e) => {
          e.target.focus();
        }}
        onLoad={(e) => {
          e.target.focus();
        }}
      />
    </div>
  );
}

export default Input;
