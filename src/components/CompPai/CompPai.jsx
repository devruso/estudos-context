import { useState } from "react";
import { InfoContext } from "../../contexts/ApiContext";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import "./CompPai.css";

export function CompPai() {
  const [info, setInfo] = useState(0);
   function add(){

    setInfo(info + 1);
  }
  return (

  <div className="pai">
      <h3>PAI</h3>
      <button className="btn btn-dark" onClick={add}> clique!</button>
      <InfoContext.Provider value={info}>
      <CompFilhoA />
      <CompFilhoB/>
      </InfoContext.Provider>

  </div>);
}
