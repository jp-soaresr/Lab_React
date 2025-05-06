import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Pagina inicial</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/At01">Semana 1</Link>
                    </li>
                    <li>
                        <Link to="/At02">Semana 2</Link>
                    </li>
                    <li></li>


                </ul>

            </nav>

        </div>
    );
}; export default Home;