import { useState } from "react";

export const Circulo = (props) => {
  const [seleccionado, setSeleccionado] = useState(false);
  const toggle = () => {
    setSeleccionado(!seleccionado);
  };
  return (
    <>
      <li
        className={`circulo ${seleccionado ? "on" : ""}`}
        onClick={toggle}
      ></li>
    </>
  );
};
