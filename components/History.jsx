import React, { useContext, useEffect, useRef } from "react";

import { HistoryContext } from "../utils/HistoryProvider";

function History() {
  const { history } = useContext(HistoryContext);
  const bottom = useRef();
  useEffect(() => {
    bottom.current.scrollIntoView({ behaviour: "smooth" });
  });
  return (
    <div>
      {history.map((e) => {
        return (
          <div key={e.date} className="whitespace-pre-wrap">
            <span>
              <span className="text-andromedagreen">guest@vaibhavtekk.tech</span>:
              <span className="text-andromedacyan">~</span>$ {e.command}
            </span>
            <br />
            {e.output}
          </div>
        );
      })}
      <div ref={bottom}></div>
    </div>
  );
}

export default History;
