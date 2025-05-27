import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import At01 from "./At01";
import At02 from "./At02";
import At03 from "./At03";
import At04 from "./At04";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={(<Home/>)}></Route>
                <Route path="/At01" element={(<At01/>)}></Route>
                <Route path="/At02" element={(<At02/>)}></Route>
                <Route path="/At03" element={(<At03/>)}></Route>
                <Route path="/At04" element={(<At04/>)}></Route>
                

            </Routes>
        </BrowserRouter>
    );
}