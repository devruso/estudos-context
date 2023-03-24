import { CompFilhoD } from "../CompFilhoD/CompFilhoD";
import { CompFilhoE } from "../CompFilhoE/CompFilhoE";
import "./CompFilhoC.css";

export function CompFilhoC({valor}) {
  return(<div className="filho-c">
    <h3>Filho C</h3>
    <CompFilhoD/>
    <CompFilhoE valor={valor}/>
  </div>);
}
