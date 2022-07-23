import Columns from "../../../json/Sales/colunas.json";
import {MDBDataTable} from "mdbreact";
import React from "react";
import {Link} from "react-router-dom";
import {FiLink} from "react-icons/fi";

export function TableSales({pedidos}:any){

    function getRows(){

        const order = [];

        for (var i = 0 ; pedidos.length > i ; i++ ){
            order.push({
                pedido: <TitleTable title={pedidos[i]['pedido']}/>,
                user: <NameUser user={pedidos[i]['user']}/>,
                cliente: <NameClient cliente={pedidos[i]['cliente']}/>,
                preco: <Preco preco={pedidos[i]['preco']}/>,
                dataVencimento: <Vencimento vencimento={pedidos[i]['vencimento']}/>,
                status: <Status status={pedidos[i]['status']}/>,
            })
        }

        return (order)
    }

    const data = {
        columns: Columns,
        rows: getRows()
    };

    return (
        <MDBDataTable
            hover
            entries={8}
            data={data}
            materialSearch
        />
    );

}


export function TitleTable({title}:any){
    return (
            <>
                <div className="d-flex flex-column">
                    <span>{title} <Link className="text-success" to="/"><FiLink size={11} color="var(--bs-primary)"/></Link></span>
                    <span><a className="text-primary me-1" href="">Editar</a>   <a className="text-secondary" href="">Ver mais</a></span>
                </div>
            </>
    )
}

export function NameUser({user}:any){
    return (
        <div style={{minHeight: "39px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Link className="text-secondary" to="/" >{user}</Link>
        </div>
    )
}


export function NameClient({cliente}:any){
    return (
        <div style={{minHeight: "39px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Link className="text-secondary" to="/" >{cliente}</Link>
        </div>
    )
}

export function Preco({preco}:any){
    return (
        <div style={{minHeight: "39px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <span className="badge border-success text-success w-100 font-bold p-2 w-25 text-center">
                R$ {preco}
            </span>
        </div>
    )
}


export function Vencimento({vencimento}:any){
    return (
        <div style={{minHeight: "39px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <span className="badge border-secondary text-secondary w-100 font-bold p-2 w-25 text-center">
                {vencimento}
            </span>
        </div>
    )
}

export function Status({status}:any){
    return (
        <div style={{minHeight: "39px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <span className="badge border-warning text-warning w-100 font-bold p-2 w-25 text-center text-uppercase">
                {status}
            </span>
        </div>
    )
}