import { Link } from "react-router-dom";
import Avatar from "./Componentes/Avatar";
import Gallery from "./Componentes/Gallery";
import TodoList from "./Componentes/TodoList";
import Profile from "./Componentes/Profile";
import PackingList from "./Componentes/PackingList";
import List from "./Componentes/List";
import PrepareMode from "./Componentes/Recipe";
import TeaSet from "./Componentes/Tea";

export default function At03() {
    return (
        <>
            <h1>Atividade 3</h1>
            <Gallery />
            <Avatar />
            <TodoList />
            <Profile />
            <PackingList />
            <List />
            <PrepareMode />
            <TeaSet />

            <Link to="/">Voltar</Link>
        </>
    );
}