import React from "react";

import { genRandomInt } from "../utils.tsx";

export function Header() {
  const reactDescriptions: string[] = ["Fundamental", "Core", "Crucial"];
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header className="App">
      {/* <img src="../assets/react.svg" alt="react Logo" /> */}
      <h1>Hello CodeSandbox</h1>
      <h2> {description} React concepts you will need to know</h2>
    </header>
  );
}
