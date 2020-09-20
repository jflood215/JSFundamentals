import React from "react";
import "./App.css";
import MortyCards from "./MortyCards";

function App() {
  const charUrl = "https://rickandmortyapi.com/api/character/";
  return (
    <div>
      <MortyCards url={charUrl} />
    </div>
  );
}

export default App;
