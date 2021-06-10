import { useState } from "react";
import { Circulo } from "./componentes/Circulo";

function App() {
  const circulos = [
    {
      id: 0,
    },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <>
      {circulos.map((circulo) => (
        <Circulo key={circulo.id} />
      ))}
    </>
  );
}

export default App;
