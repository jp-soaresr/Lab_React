import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";


export default function At01() {
  return (
    <>
        <h2>semana 1</h2>

        <Relogio/>
        <Letreiro/>

        <Link to="/">Voltar</Link>
    </>
  );
}
