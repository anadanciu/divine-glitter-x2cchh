import "./styles.css";

import React from "react";
import { Header } from "./components/header.tsx";
import { CoreConcept } from "./components/core-concepts.tsx";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <ul>
          <CoreConcept />
        </ul>
      </main>
    </div>
  );
}
