import React , {memo}from "react";
import paises from "./pais.json";

function SelectCountry(props){
    return (
        <select className={`form-control ${props.addClass}`} name={props.nome} id={props.id} >
        {
            paises.map((pais , index) => (
                <option key={index} value={pais.sigla}>{pais.nome_pais}</option>
            ))
        }
        </select>
    )
}

export default memo(SelectCountry);