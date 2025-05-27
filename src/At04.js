import { Link } from "react-router-dom";
import Toolbar from "./Componentes-list4/Toolbar";
import Gallery from "./Componentes-list4/Gallery";
import Counter from "./Componentes-list4/Counter";


export default function At04() {
    return (
        <>
            <h1>Atividade 4</h1>
            <Toolbar />
            <Gallery />
            <Counter/>

            <Link to="/">Voltar</Link>
        </>
    );
}