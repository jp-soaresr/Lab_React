import { Link } from "react-router-dom";
import Toolbar from "./Componentes-list4/Toolbar";
import Gallery from "./Componentes-list4/Gallery";
import Counter from "./Componentes-list4/Counter";
import Form from "./Componentes-list4/Form";
import MovingDot from "./Componentes-list4/MovingDot";
import Form2 from "./Componentes-list4/Form2";
import Form3 from "./Componentes-list4/Form3";
import List from "./Componentes-list4/List";
import List2 from "./Componentes-list4/List2";
import CounterList from "./Componentes-list4/CounterList";
import List3 from "./Componentes-list4/List3";
import List4 from "./Componentes-list4/List4";
import ShapeEditor from "./Componentes-list4/ShapeEditor";
import BucketList from "./Componentes-list4/BucketList";


export default function At04() {
    return (
        <>
            <h1>Atividade 4</h1>
            <Toolbar />
            <Gallery />
            <Counter/>
            <Form/>
            <MovingDot/>
            <Form2/>
            <Form3/>
            <List/>
            <List2/>
            <ShapeEditor/>
            <CounterList/>
            <List3/>
            <List4/>
            <BucketList/>



            <Link to="/">Voltar</Link>
        </>
    );
}