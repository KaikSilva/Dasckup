import React, {memo, useState} from "react";
import {Card, DefaultContentPage, DefaultTitlePage , Label, AreaDeTexto, Input, Table} from "components/Content";
import {Col, Row} from "react-bootstrap";
import styles from "./Produtos.module.scss";
import classNames from "classnames";
import {ConvertMoney, getArraySum, ThisSelectAttr, ThisSelectGroup} from "../../components/Products";
import {FiXCircle} from "react-icons/fi";
import {isSet} from "util/types";

function Products() {
    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    Todos os produtos
                </DefaultTitlePage>
            </Card>
        </DefaultContentPage>
    )
}

export default memo(Products);


export function NewProduct(){

    const [Atributos , SetAtributos] = useState({attr:[], total:0});
    const [SelectAtributos , SetSelectAtributos] = useState(false);
    const [SelectGroup , SetSelectGroup] = useState(false);

    const [WantThisProduct , SetWantThisProduct] = useState({title:undefined,id:'',preco:0});


    function handleRemove(id:number|string|null){
        const newList = Atributos.attr.filter((item:any) => item.id !== id);
        SetAtributos({attr:newList , total: getArraySum(Atributos.attr , WantThisProduct.preco)});
    }


    return (
        <DefaultContentPage>

        <Row>
            <Col sm={6}>
                <Card border={true} mb={3}>
                    <DefaultTitlePage>
                         produto
                    </DefaultTitlePage>

                    <Row>
                        <Col className="mb-3" sm={12}>
                            <Label require from="nome">Nome</Label>
                            <Input id="nome" tipo="text"/>
                        </Col>
                        <Col className="mb-2" sm={12}>
                            <Label>Descrição</Label>
                            <AreaDeTexto altura={4} addClass="mt-1"/>
                        </Col>
                    </Row>

                </Card>
                <Card mb={3}>

                    <DefaultTitlePage>
                        informações
                    </DefaultTitlePage>

                    <Row>
                        <Col className="mb-3" sm={12}>
                            <Label  from="nome">Imagem do produto</Label>
                            <Input tipo="file" addClass="mt-1"/>
                        </Col>
                        <Col  sm={12}>
                            <Label require from="nome">Estoque de armazenamento</Label>
                            <select name="" id="" className="form-control mt-1">
                                <option value="">Bragança</option>
                            </select>
                        </Col>
                    </Row>

                </Card>
            </Col>
            <Col sm={5}>
                <Card border={true} mb={3}>
                    <DefaultTitlePage>
                         Grupo de itens
                    </DefaultTitlePage>

                    <Row>
                        <Col className="mb-3" sm={12}>
                            <Label require>Grupo de itens</Label>
                            <ThisSelectGroup WantThisProduct={WantThisProduct} SetWantThisProduct={SetWantThisProduct} SelectGroup={SelectGroup} SetSelectGroup={SetSelectGroup}/>
                        </Col>
                    </Row>

                </Card>
                <Card mb={3}>
                    <DefaultTitlePage>
                        Atributos
                    </DefaultTitlePage>

                    <Row>
                        <Col className="mb-3" sm={12}>
                            <Label require>Atributos</Label>
                            <div className="position-relative">
                                <ThisSelectAttr  WantThisProduct={WantThisProduct} SetAtributos={SetAtributos} Atributos={Atributos} SelectAtributos={SelectAtributos} SetSelectAtributos={SetSelectAtributos}/>
                            </div>
                        </Col>
                        <Col>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Atributo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Atributos.attr.length===0?
                                            <tr className="text-center">
                                                <td colSpan={100}>Nenhum Atributo adicionado</td>
                                            </tr>
                                        :
                                        Atributos.attr.map((attr:any , index) => (
                                            <tr>
                                                <td>
                                                    <span key={index} onClick={() => handleRemove(attr.id)} className="cursor-pointer me-3"><FiXCircle color="var(--bs-danger)" size={15}/></span>
                                                    #{attr.id} {attr.nome}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <div>
                                <Label>
                                    Total: <span className="text-primary"><ConvertMoney item={WantThisProduct.preco}/> + <ConvertMoney item={Atributos.total}/></span>
                                </Label>
                            </div>
                        </Col>
                    </Row>
                </Card>



                <Card mb={5}>
                    <DefaultTitlePage>
                        Fechamento
                    </DefaultTitlePage>

                    <Row>
                        <Col className="mb-3" sm={3}>
                            <Label require>Tipo</Label>
                            <select name="" id="" className="form-control mt-1">
                                <option value="fixo">valor fixo</option>
                                <option value="porcent">%</option>
                            </select>
                        </Col>
                        <Col className="mb-3" sm={9}>
                            <Label require>Margem de lucro</Label>
                            <Input tipo="number" addClass="mt-1"/>
                        </Col>
                        <Col className="mb-3" sm={12}>
                            <Label require>Total</Label>
                            <div className="form-control p-2 mt-1">
                                {
                                    WantThisProduct.id===''?"0,00":"kaik"
                                }
                            </div>
                        </Col>
                    </Row>

                </Card>
            </Col>
        </Row>

        </DefaultContentPage>
    )


}



