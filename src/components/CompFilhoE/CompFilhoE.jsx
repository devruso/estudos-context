import { InfoContext } from "../../contexts/ApiContext";
import { useContext } from "react";
import "./CompFilhoE.css";

export function CompFilhoE() {

  const resultado = useContext(InfoContext);
  return <div className="filho-e">
    <h3>Filho E</h3>
    <p>
      <b>valor: </b>
      {resultado}
    </p>
  </div>;
}
