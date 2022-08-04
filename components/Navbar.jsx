import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between h-[32px] px-4 w-full bg-zinc-600 items-center rounded-t-lg">
      <span>term.vaibhavtekk.tech</span>
      <ul className="flex flex-row gap-2">
        <li className="h-4 w-4 bg-red-500 rounded-full"></li>
        <li className="h-4 w-4 bg-yellow-500 rounded-full"></li>
        <li className="h-4 w-4 bg-green-500 rounded-full"></li>
      </ul>
    </div>
  );
}

export default Navbar;
