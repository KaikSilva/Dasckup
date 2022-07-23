import React , {memo} from "react";
import {Card, DefaultContentPage, DefaultTitlePage , Label} from "components/Content";
import {Col, Row} from "react-bootstrap";
import {AreaDeTexto, Botao} from "../../../components/Content";

function Attributes(){
    return (
        <DefaultContentPage>
            <Card sm={12} border={true}>
                <DefaultTitlePage>
                    Todos os atributos
                </DefaultTitlePage>

            </Card>
        </DefaultContentPage>
    )
}

export default memo(Attributes)

export function NewAttributes(){
    return (
        <DefaultContentPage>
            <Card sm={5} border={true}>
                <DefaultTitlePage>
                    Novo atributos
                </DefaultTitlePage>

                <Row>
                    <Col sm={12}>
                        <Label require>Nome do Atributo</Label>
                        <input type="text" className="form-control mt-1"/>
                    </Col>
                    <Label addClass="mt-2">
                        Preço <code>*</code>
                        <Row>
                            <Col sm={3}>
                                <input type="text" className="form-control mt-1"/>
                            </Col>
                            <Col sm={9}>
                                <input type="text" className="form-control mt-1"/>
                            </Col>
                        </Row>
                    </Label>

                    <Col className="mt-2">
                        <Label>Descrição</Label>
                        <AreaDeTexto altura={4} addClass="mt-1"/>
                    </Col>

                    <Col sm={12} className="mt-4">
                        <Botao addClass="float-right" btn="primary">Cadastrar Atributo</Botao>
                    </Col>
                </Row>

            </Card>
        </DefaultContentPage>
    )
}


