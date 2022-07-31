import React, { useContext, useState } from "react";
import { HistoryContext } from "../utils/HistoryProvider";

function History() {
  const { history } = useContext(HistoryContext);
  return (
    <div>
      {history.map((e) => {
        return (
          <div key={e.date} className="whitespace-pre-wrap">
            <span>
              <span className="text-green-400">guest@vaibhavtekk.tech</span>:<span className="text-blue-400">~</span>${" "}
              {e.command}
            </span>
            <br />
            {e.output}
          </div>
        );
      })}
    </div>
  );
}

export default History;
