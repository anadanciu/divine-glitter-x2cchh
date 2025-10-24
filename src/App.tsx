import "./styles.css";
// import reactImg from "./assets/react.svg";
import React from "react";

const reactDescriptions: string[] = ["Fundamental", "Core", "Crucial"];

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header className="App">
      {/* <img src={reactImg} alt="react Logo" /> */}
      <h1>Hello CodeSandbox</h1>
      <h2> {description} React concepts you will need to know</h2>
    </header>
  );
}

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
