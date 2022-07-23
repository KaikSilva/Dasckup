import Columns from "json/Clients/colunas.json";
import {MDBDataTable} from "mdbreact";
import React from "react";
import {NameClient, NameUser, Preco, Status, TitleTable, Vencimento} from "../../Sales/Table";
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";

export function TableClients({clientes}:any){
    function getRows(){

        const order = [];

        for (var i = 0 ; clientes.length > i ; i++ ){
            order.push({
                cliente: <ThisNameClient client={clientes[i].cliente}/>,
                company: <ThisNameCompany company={clientes[i].company}/>,
                email: <EmailClient email={clientes[i].email}/>,
                celular: <CelularClient celular={clientes[i].celular}/>,
                active: <Active ativo={clientes[i].ativo}/>,
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
            entries={10}
            data={data}
            materialSearch
        />
    );

}

export function ThisNameClient({client}:any){
    return (
        <div style={{minHeight: "20px"}} className="w-100 h-100 d-flex align-items-center">
            <Link className="text-secondary" to="/" >{client}</Link>
        </div>
    )
}

export function ThisNameCompany({company}:any){
    return (
        <div style={{minHeight: "20px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Link className="text-secondary" to="/" >{company}</Link>
        </div>
    )
}

export function EmailClient({email}:any){
    return (
        <div style={{minHeight: "20px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <span>{email}</span>
        </div>
    )
}

export function CelularClient({celular}:any){
    return (
        <div style={{minHeight: "20px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <span>{celular}</span>
        </div>
    )
}

export function Active({ativo}:any){
    return (
        <div style={{minHeight: "20px"}} className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Form.Check
                type="switch"
                id="custom-switch"
                defaultChecked={ativo==="K"?true:false}
            />
        </div>
    )
}
