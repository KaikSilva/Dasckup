import React, {memo, useState} from "react";
import Board from "@asseinfo/react-kanban/dist/index.js"
// import '@asseinfo/react-kanban/dist/styles.css'
import {AreaDeTexto, Card, DefaultContentPage, DefaultTitlePage, Label} from "../../components/Content";
import {FiBookmark, FiFilter, FiLink, FiMenu, FiX} from "react-icons/fi";
import {Link} from "react-router-dom";
import {BiNote} from "react-icons/bi";
import {Col, Row} from "react-bootstrap";
import {TiChartAreaOutline} from "react-icons/ti";
import {CgPlayListAdd} from "react-icons/cg";
import {
    AddNewFonte,
    AddNewState,
    ChooseYourFonte,
    ChooseYourState, GetPrecoTotal,
    ItsDetailsProduct,
    SelectProduct
} from "../../components/Leads"
import styles from "./Leads.module.scss";
import classNames from "classnames";
import {DetailsProduct} from "../../components/Sales";
import api from "../../services/api";

export const TitleKanban = (props) => (
    <div style={{background: props.color}}>
        <FiMenu color="#fff"/> {props.title} (R${props.precoTotal},00) de {props.quantidadeLeads} Leads
    </div>
)

export const InfoLead = (props) => (
    <div className="p-0">
        <ul className="p-0 mt-2">
            <li>Fonte: <span>{props.fonte?props.fonte:"Consultor"}</span></li>
            <li>Ultimo contato: <span>{props.ultimoContato?props.ultimoContato:"10 minutos atrás"}</span></li>
            <li>Criado: <span>{props.ultimoContato?props.ultimoContato:"20 minutos atrás"}</span></li>
            <li className="mt-1"><span></span><b><FiBookmark size={13}/><FiLink size={13}/></b></li>
        </ul>
    </div>
)

const board = {
    columns: [
        {
            id: 1,
            title: <TitleKanban quantidadeLeads="8" precoTotal="100" title="Vendas" color="#841cc8"/>,
            cards: [
                {
                    id: 1,
                    title: <Link className="NameClient" to="/">#32 - Kaikzera Silva</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 4,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 7,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 31,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 15,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 98,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 21,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 18,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                }
            ]
        },
        {
            id: 2,
            title: <TitleKanban quantidadeLeads="4" precoTotal="100" title="Negação" color="#f3271a"/>,
            cards: [
                {
                    id: 2342,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 2522,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 15324,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 22341,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
            ]
        },
        {
            id: 4,
            title: <TitleKanban quantidadeLeads="4" precoTotal="100" title="Negação" color="#f3271a"/>,
            cards: [
                {
                    id: 342,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 2552,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 2644,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 2751,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
            ]
        },
        {
            id: 5,
            title: <TitleKanban quantidadeLeads="4" precoTotal="100" title="Negação" color="#f3271a"/>,
            cards: [
                {
                    id: 762,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 45622,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 5424,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 64521,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
            ]
        },
        {
            id: 32,
            title: <TitleKanban quantidadeLeads="4" precoTotal="100" title="Negação" color="#f3271a"/>,
            cards: [
                {
                    id: 287,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 242,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 34524,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
                {
                    id: 5621,
                    title: <Link className="NameClient" to="/">#312 - Miguel Dendasck</Link>,
                    description: <InfoLead fonte="google"/>
                },
            ]
        }
    ]
}

function LeadsKanban(){
    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    Todos os Leads
                </DefaultTitlePage>
                <Row>
                    <Col>
                        <Link to="/leads/novo" className="btn btn-primary me-2">Novo Lead</Link>
                        <Link to="" className="btn btn-primary me-2"><TiChartAreaOutline size="18"/></Link>
                        <Link to="" className="btn btn-primary me-2"><FiFilter size="16"/></Link>
                        <Link to="" className="btn btn-primary me-2">Mudar para modo lista</Link>
                        <hr className="text-primary"/>
                    </Col>
                </Row>
                <Board initialBoard={board} />
            </Card>
        </DefaultContentPage>
    )
}

export default memo(LeadsKanban)


export function NewLeads(){
    
    const [StateStatus , SetStateStatus] = useState({title:"",color:"#000"});
    const [NewState , SetNewState] = useState(false);


    const [StateFonte , SetStateFonte] = useState({title:"",color:"#000"});
    const [NewFonte , SetNewFonte] = useState(false);


    const [ProductsFromLead , SetProductsFromLead] = useState([]);
    const [SelectProductsFromLead , SetSelectProductsFromLead] = useState(true);

    return (
        <DefaultContentPage>
            <Row>
                <Col sm={6}>
                    <Card  mb={3} border={true}>
                        <DefaultTitlePage>
                            Novo Lead
                        </DefaultTitlePage>

                        <Row>
                            <Col sm={6}>
                                <Label addClass="d-flex justify-content-between">
                                    <span>Status<code>*</code></span> <AddNewState  StateStatus={StateStatus}  NewState={NewState} SetNewState={SetNewState}/>
                                </Label>
                                <ChooseYourState SetStateStatus={SetStateStatus} StateStatus={StateStatus} NewState={NewState}/>
                            </Col>
                            <Col sm={6}>
                                <Label addClass="d-flex justify-content-between">
                                    <span>Fonte<code>*</code></span> <AddNewFonte StateFonte={StateFonte} NewFonte={NewFonte} SetNewFonte={SetNewFonte}/>
                                </Label>
                                <ChooseYourFonte SetStateFonte={SetStateFonte} StateFonte={StateFonte} NewFonte={NewFonte}/>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col sm={6}>
                                <Label require>Nome</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={6}>
                                <Label>Sobrenome</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col sm={6}>
                                <Label>E-mail</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={3}>
                                <Label>Celular</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={3}>
                                <Label>Telefone</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col sm={2}>
                                <Label>CEP</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={3}>
                                <Label>Cidade</Label>
                                <input type="text" className={"mt-1 form-control"} readOnly={true}/>
                            </Col>
                            <Col sm={1}>
                                <Label>UF</Label>
                                <input type="text" className={"mt-1 form-control"} readOnly={true}/>
                            </Col>
                            <Col sm={4}>
                                <Label>Endereço</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={2}>
                                <Label>Número</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col sm={3}>
                                <Label>Bairro</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={3}>
                                <Label>IBGE</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={6}>
                                <Label>Complemento</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col sm={3}>
                                <Label>Idioma</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={3}>
                                <Label>País</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col sm={6}>
                                <Label>Website</Label>
                                <input type="text" className={"mt-1 form-control"}/>
                            </Col>
                            <Col className="mt-4">
                                <Label require>Produtos/Serviços</Label>
                                <SelectProduct ProductsFromLead={ProductsFromLead} SetProductsFromLead={SetProductsFromLead} SelectProductsFromLead={SelectProductsFromLead} SetSelectProductsFromLead={SetSelectProductsFromLead}/>
                            </Col>
                        </Row>

                    </Card>
                </Col>
                <Col sm={3}>
                    <Card  border={true}>
                        <DefaultTitlePage>
                            Detalhes do Lead
                        </DefaultTitlePage>

                        <Label>
                            Lista de produtos/serviços:
                        </Label>

                        <ItsDetailsProduct ProductsFromLead={ProductsFromLead} SetProductsFromLead={SetProductsFromLead}/>

                        <GetPrecoTotal ListItens={ProductsFromLead}/>


                        <Row>
                            <Col sm={12}>
                                <Label>Nota</Label>
                                <AreaDeTexto altura={4} addClass="mt-1"/>
                            </Col>
                            <Col className="mt-2" sm={12}>
                                <Label>Lembrete</Label>
                                <AreaDeTexto altura={4} addClass="mt-1"/>
                            </Col>
                        </Row>


                        <div className={"mt-5"}>
                            <button className="btn btn-secondary w-100">
                                Cancelar
                            </button>
                            <button className="btn btn-primary w-100">
                                Finalizar Lead
                            </button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </DefaultContentPage>
    )
}
