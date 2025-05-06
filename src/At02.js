import { Link } from "react-router-dom";
import ContadorGenero from "./Contador";

export default function At02() {
    return (
      <>
          <h2>semana 2</h2>

          <ContadorGenero/>

          <Link to="/">Voltar</Link>
      </>
    );
  }
  