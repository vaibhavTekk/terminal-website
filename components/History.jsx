import React, { useContext } from "react";
import { HistoryContext } from "../utils/HistoryProvider";

function History() {
  const { history, setHistory } = useContext(HistoryContext);
  console.log(history);
  return (
    <div>
      {history.map((e) => {
        return (
          <>
            <span>guest@vaibhavtekk.tech$ ~ {e.command}</span>
            <br />
            <span>{e.output}</span>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default History;
