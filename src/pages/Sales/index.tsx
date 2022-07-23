import React, {useState, memo} from "react";
import {Col, Row} from "react-bootstrap";
import {
    DefaultContentPage,
    DefaultTitlePage
} from "components/Content";
import {Card} from "components/Content";
import {
    ButtonsOnSumits,
    DetalhesPedido,
    FichaCliente,
    PlusDetalhes,
    Produtos,
} from "components/Sales";
import styles from "../Client/Cliente.module.scss";
import {LinkButton} from "components/Content";
import SalesTable from "class/Sales";

function  Sales(){

    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    Todos os pedidos
                </DefaultTitlePage>

                <div className="w-50">
                    <Row>
                        <Col>
                            <LinkButton link="/vendas/novo" btn="primary" >Novo pedido</LinkButton>
                        </Col>
                    </Row>
                </div>

                <SalesTable/>


            </Card>
        </DefaultContentPage>
    )
}

export default memo(Sales);



export function NewSales(){

    const [ListItens , SetListItens] = useState([]);
    const [ClientSelected , SetClientSelected] = useState(false)

    return (
        <DefaultContentPage>
            <Row>
                <FichaCliente SetListItens={SetListItens} SetClientSelected={SetClientSelected} ClientSelected={ClientSelected}/>
                <Produtos ClientSelected={ClientSelected} ListItens={ListItens} SetListItens={SetListItens}/>
            </Row>

            {/*Detalhes*/}
            <Row className="mb-4">
                <DetalhesPedido ListItens={ListItens} SetListItens={SetListItens}/>
            </Row>

            {/*Nota-Lembrete-Anexo*/}
            <Row className="mb-5">
                <PlusDetalhes/>
            </Row>

            {/*Footer*/}
            <div className={styles.footerBtn}>
                <ButtonsOnSumits ListItens={ListItens} ClientSelected={ClientSelected} SetClientSelected={SetClientSelected} SetListItens={SetListItens}/>
            </div>

        </DefaultContentPage>
    )
}



