import React , {memo} from "react";
import {Card, DefaultContentPage, DefaultTitlePage ,Label , AreaDeTexto, Input, Table , Descricao} from "components/Content";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {Botao} from "../../components/Content";

function Inventory() {
    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    Todos os estoque
                </DefaultTitlePage>
            </Card>
        </DefaultContentPage>
    )
}

export default memo(Inventory);

export function NewInventory() {
    return (
        <DefaultContentPage>

            <Card border={true} mb={5} sm={6}>
                <DefaultTitlePage>
                    Cadastrar Estoque
                </DefaultTitlePage>


                <Tabs defaultActiveKey="info" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="info" title="1º passo - Informações Básicas">
                        <Row>
                            <Col className="mb-3" sm={12}>
                                <Label from="nome">Imagem do estoque</Label>
                                <Input tipo="file" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={12}>
                                <Label require from="nome">Nome do estoque</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="2º passo - Estrutura">
                        <Row>
                            <Col className="mb-3" sm={6}>
                                <Label require from="nome">Número de Ruas</Label>
                                <Input tipo="number" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={6}>
                                <Label require from="nome">Número de Colunas</Label>
                                <Input tipo="number" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={6}>
                                <Label require from="nome">Número de Níveis</Label>
                                <Input tipo="number" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={6}>
                                <Label require from="nome">Número de Departamentos</Label>
                                <Input tipo="number" addClass="mt-1"/>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="3º passo - Localização">
                        <Row>
                            <Col className="mb-3" sm={6}>
                                <Label require from="nome">CEP</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={4}>
                                <Label require from="nome">Cidade</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={2}>
                                <Label require from="nome">UF</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-3" sm={4}>
                                <Label require from="nome">Endereço</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={2}>
                                <Label require from="nome">Num.</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={6}>
                                <Label from="nome">Complemento</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={6}>
                                <Label from="nome">Bairro</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                            <Col className="mb-3" sm={6}>
                                <Label from="nome">IBGE</Label>
                                <Input tipo="text" addClass="mt-1"/>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col sm={12}>
                                <Botao tipo="submit" btn="primary">Cadastrar Estoque</Botao>
                            </Col>
                        </Row>

                    </Tab>
                </Tabs>

            </Card>

        </DefaultContentPage>
    )
}


