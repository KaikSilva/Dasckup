import React from "react";
import {AreaDeTexto, Card, DefaultTitlePage, Label} from "../Content";
import {Col, Row} from "react-bootstrap";
import SelectCountry from "../SelectCountry";

export function FormCompany(props){

    return (
        <Card addClass={props.addClass} mt={4} sm={8}>
            <DefaultTitlePage>
                Dados da Empresa
            </DefaultTitlePage>

            <>
                <Row>
                    <Col sm={3}>
                        <Label require>Nome da Empresa</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                    <Col sm={3}>
                        <Label require>Nome Fantasia</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                    <Col sm={3}>
                        <Label require>CNPJ</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                    <Col sm={3}>
                        <Label>Inscrição estadual</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={2}>
                        <Label require>CEP</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                    <Col sm={3}>
                        <Label require>Cidade</Label>
                        <input className="form-control mt-1" type="text" readOnly={true}/>
                    </Col>
                    <Col sm={1}>
                        <Label require>UF</Label>
                        <input className="form-control mt-1" type="text" readOnly={true}/>
                    </Col>
                    <Col sm={4}>
                        <Label require>Endereço</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                    <Col sm={2}>
                        <Label require>Número</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                </Row>

                <Row className="mt-2">
                    <Col sm={2}>
                        <Label require>Bairro</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                    <Col sm={2}>
                        <Label>Complemento</Label>
                        <input className="form-control mt-1" type="text"/>
                    </Col>
                    <Col sm={2}>
                        <Label require>IBGE</Label>
                        <input className="form-control mt-1" type="text" readOnly={true}/>
                    </Col>
                    <Col>
                        <Label require>País</Label>
                        <SelectCountry addClass="mt-1"/>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        <Label>Nota</Label>
                        <AreaDeTexto altura={5} addClass="mt-1"/>
                    </Col>
                    <Col>
                        <Label>Lembrete</Label>
                        <AreaDeTexto altura={5} addClass="mt-1"/>
                    </Col>
                </Row>

            </>

        </Card>
    )

}

export function FormClient(){

    return (
        <>
            <Row>
                <Col sm={3}>
                    <Label require>Nome</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={3}>
                    <Label require>Sobrenome</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col>
                    <Label require>Data de nascimento</Label>
                    <input className="form-control mt-1" type="date"/>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Label require>E-mail</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={3}>
                    <Label require>Celular</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={3}>
                    <Label>Telefone</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col sm={3}>
                    <Label require>Celular</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={3}>
                    <Label>Telefone</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>

                <Col sm={2}>
                    <Label require>CEP</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={3}>
                    <Label require>Cidade</Label>
                    <input className="form-control mt-1" type="text" readOnly={true}/>
                </Col>
                <Col sm={1}>
                    <Label require>UF</Label>
                    <input className="form-control mt-1" type="text" readOnly={true}/>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col sm={4}>
                    <Label require>Endereço</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={2}>
                    <Label require>Número</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={2}>
                    <Label require>Bairro</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={2}>
                    <Label>Complemento</Label>
                    <input className="form-control mt-1" type="text"/>
                </Col>
                <Col sm={2}>
                    <Label require>IBGE</Label>
                    <input className="form-control mt-1" type="text" readOnly={true}/>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <Label require>País</Label>
                    <SelectCountry addClass="mt-1"/>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col>
                    <Label>Nota</Label>
                    <AreaDeTexto altura={5} addClass="mt-1"/>
                </Col>
                <Col>
                    <Label>Lembrete</Label>
                    <AreaDeTexto altura={5} addClass="mt-1"/>
                </Col>
            </Row>
        </>
    )

}