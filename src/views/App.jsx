import React from 'react';
import Menu from "../componenets/layout/Menu";
import {BrowserRouter } from "react-router-dom";
import Conteudo from "../componenets/layout/Conteudo";

const App = props => (
    <div>
       <BrowserRouter>
           <Menu/>
           <Conteudo/>
       </BrowserRouter>
    </div>
)

export default App
