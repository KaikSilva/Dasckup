import React , {memo} from "react";
import {Card, DefaultContentPage, DefaultTitlePage} from "components/Content";
import {Col, Row} from "react-bootstrap";
import {AreaDeTexto, Botao, Descricao, Input, Label} from "../../components/Content";
import SelectCountry from "../../components/SelectCountry";

function Companies(){
    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    Todas as Empresas
                </DefaultTitlePage>
            </Card>
        </DefaultContentPage>
    )
}

export default memo(Companies);


export function NewCompanies(){
    return (
        <DefaultContentPage>
            <Card border={true} sm={8}>
                <DefaultTitlePage>
                    NOVA EMPRESA
                </DefaultTitlePage>

                <Row className="mb-3">
                     <Col sm={6}>
                         <Label from="">Logo da Empresa</Label>
                         <Descricao>Essa logo servirá como identificação da empresa no sistema</Descricao>
                         <Input tipo="file" addClass="mt-1"/>
                     </Col>
                     <Col sm={6}>
                         <Label from="">Logo para Documentos</Label>
                         <Descricao>Essa logo aparecera em documentos de compras,vendas,contratos,etc..</Descricao>
                         <Input tipo="file" addClass="mt-1"/>
                     </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Label require from="">Nome da Empresa</Label>
                        <Input tipo="text" addClass="mt-1"/>
                    </Col>
                    <Col>
                        <Label require from="">Nome Fantasia</Label>
                        <Input tipo="text" addClass="mt-1"/>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={4}>
                        <Label require from="">CNPJ</Label>
                        <Input tipo="text" addClass="mt-1"/>
                    </Col>
                    <Col sm={2}>
                        <Label require from="">Inscrição Estadual</Label>
                        <Input tipo="text" addClass="mt-1"/>
                    </Col>
                    <Col>
                        <Label require from="">Site</Label>
                        <Input tipo="text" addClass="mt-1" />
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={2}>
                        <Label require from="">CEP</Label>
                        <Input tipo="text" addClass="mt-1"/>
                    </Col>
                    <Col sm={3}>
                        <Label require from="">Cidade</Label>
                        <Input tipo="text" addClass="mt-1" readonly={true}/>
                    </Col>
                    <Col sm={1}>
                        <Label require from="">UF</Label>
                        <Input tipo="text" addClass="mt-1" readonly={true}/>
                    </Col>
                    <Col>
                        <Label require from="">Endereço</Label>
                        <Input tipo="text" addClass="mt-1"/>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col sm={1}>
                        <Label require from="">Num.</Label>
                        <Input tipo="text" addClass="mt-1"/>
                    </Col>
                    <Col sm={2}>
                        <Label require from="">Bairro</Label>
                        <Input tipo="text" addClass="mt-1" readonly={true}/>
                    </Col>
                    <Col sm={3}>
                        <Label from="">Complemento</Label>
                        <Input tipo="text" addClass="mt-1" readonly={true}/>
                    </Col>
                    <Col sm={3}>
                        <Label require from="">IBGE</Label>
                        <Input tipo="text" addClass="mt-1" readonly={true}/>
                    </Col>
                    <Col sm={3}>
                        <Label require from="pais">País</Label>
                        <SelectCountry nome="pais" id="pais" addClass="mt-1"/>
                    </Col>
                </Row>


                <Row className="mb-4">
                    <Col className="mb-2" sm={6}>
                        <Label  from="">Notas</Label>
                        <AreaDeTexto altura={4} addClass="mt-1"/>
                    </Col>
                    <Col sm={6}>
                        <Label  from="">Lembretes</Label>
                        <AreaDeTexto altura={4} addClass="mt-1"/>
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <Botao tipo="submit" btn="primary">Cadastrar Empresa</Botao>
                    </Col>
                </Row>


            </Card>
        </DefaultContentPage>
    )
}


