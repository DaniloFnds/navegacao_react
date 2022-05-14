import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../../views/examples/About";
import Params from "../../views/examples/Params";
import NotFound from "../../views/examples/NotFound";

const Conteudo = (props) => {
    return (
        <div>
            <main>
                <Routes>
                    <Route path={"/about"} element={<About></About>}/>
                    <Route path={"/params/:id"} element={<Params></Params>}/>
                    {/*o astericos sera o o not found, qd nao encontraZ nenhuma rota*/}
                    <Route path={"*"} element={<NotFound></NotFound>}/>
                </Routes>
            </main>
        </div>
    );
};

export default Conteudo;
