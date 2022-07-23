import React, {memo, useState} from "react";
import {Card, DefaultContentPage, DefaultTitlePage} from "components/Content";
import {Col, Row} from "react-bootstrap";
import {Label, Table} from "components/Content";
import {Botao} from "../../../components/Content";

function GroupOfItems(){
    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    Todos os grupos de itens
                </DefaultTitlePage>
            </Card>
        </DefaultContentPage>
    )
}

export default memo(GroupOfItems)

export function NewGroupOfItems(){

    const [ListItens , SetListItens] = useState([]);

    return (
        <DefaultContentPage>
            <Card sm={6} border={true}>
                <DefaultTitlePage>
                    Novo grupo de itens
                </DefaultTitlePage>

                <Row>
                    <Col sm={12}>
                        <Label require>Nome do grupo</Label>
                        <input type="text" className="form-control mt-1"/>
                    </Col>
                </Row>

                <Row className="mt-2 mb-4">
                    <Col sm={6}>
                        <Label require>Item</Label>
                        <input type="text" className="form-control mt-1"/>
                    </Col>
                    <Col sm={2}>
                        <Label require>Tipo</Label>
                        <input type="text" className="form-control mt-1"/>
                    </Col>
                    <Col sm={4}>
                        <Label require>Quantidade</Label>
                        <input type="text" className="form-control mt-1"/>
                    </Col>
                </Row>

                <Row className="mb-5">
                    <Col>
                        <Botao btn="primary">
                            Adicionar item a lista
                        </Botao>
                    </Col>
                </Row>

                <Table
                    colunas={
                        [
                            'Opções' ,
                            'Quantiadade' ,
                            'Item' ,
                            'Preço Unitário' ,
                            'Total'
                        ]
                    }
                    rows={ListItens}
                />

            </Card>
        </DefaultContentPage>
    )
}
