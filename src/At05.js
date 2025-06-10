import { Link } from "react-router-dom";
import Accordion from "./Componentes-list5/Accordion";
import ContactList from "./Componentes-list5/ContactList";
import Chat from "./Componentes-list5/Chat";
import FormQuiz from "./Componentes-list5/FormQuiz";
import FormTicket from "./Componentes-list5/FormTicket";
import App from "./Componentes-list5/App";


export default function At04() {
    return (
        <>
            <h1>Atividade 5</h1>
            <FormQuiz/>
            <FormTicket/>
            <Accordion/>
            <App/>
            {/* <Chat/>
            <ContactList/> */}

            



            <Link to="/">Voltar</Link>
        </>
    );
}