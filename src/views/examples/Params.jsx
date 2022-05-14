import React from 'react';
import {useParams} from "react-router-dom";

const Params = (props) => {
    //forma de pegar os parametros da rota.. /params/12312 <vai pegar esse numero
    const {id} = useParams();
    return (
        <div>
        <span>Params: {id}</span>
        </div>
    );
};

export default Params;
