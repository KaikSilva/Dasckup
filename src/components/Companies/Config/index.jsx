import React ,{memo} from "react";
import {Card} from "components/Content";
import {DefaultContentPage , DefaultTitlePage} from "components/Content";
import styles from "./Config.module.scss";
import {BiPaintRoll , BiCurrentLocation} from "react-icons/bi";
import {BsMailbox2, BsInputCursor, BsFillPhoneVibrateFill, BsInputCursorText} from "react-icons/bs";
import {FaMoneyBillWave} from "react-icons/fa";
import {TbDragDrop} from "react-icons/tb";
import {IoLogoWhatsapp} from "react-icons/io";
import {FiAtSign, FiDollarSign, FiInbox, FiMap, FiPenTool, FiPhoneCall} from "react-icons/fi";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import {AreaDeTexto, Descricao, Label} from "../../Content";
import SelectCountry from "../../SelectCountry";

function MenuConfig({setContent}){

    return (

        <Card border={true}>
            <ul className={styles.menu}>

                <li onClick={() => setContent(<Geral/>)}>
                    <FiPenTool size={19}/> <span>Geral</span>
                </li>

                <li onClick={() => setContent(<Endereco/>)}>
                    <FiMap size={19}/> <span>Endereço</span>
                </li>

                <li onClick={() => setContent(<SMTP/>)}>
                    <FiAtSign size={18}/> <span>SMTP</span>
                </li>

                <li onClick={() => setContent(<FormasDePagamento/>)}>
                    <FiDollarSign size={18}/> <span>Formas de Pagamento</span>
                </li>

                <li onClick={() => setContent(<CamposObrigatorios/>)}>
                    <BsInputCursorText size={20}/> <span>Campos Obrigatórios</span>
                </li>

                <li onClick={() => setContent(<Contatos/>)}>
                    <FiPhoneCall size={18}/> <span>Contatos</span>
                </li>

                <li onClick={() => setContent(<Leads/>)}>
                    <TbDragDrop size={20}/> <span>Leads</span>
                </li>

                <li onClick={() => setContent(<Whatsapp/>)}>
                    <AiOutlineWhatsApp size={20}/> <span>Whatsapp</span>
                </li>

            </ul>
        </Card>

    )

}

export default memo(MenuConfig);



export function Geral(){
    return (
        <>
            <DefaultTitlePage>
                Configurações Gerais
            </DefaultTitlePage>
            <div>Olha ele ai bixo</div>
        </>
    )
}

export function Endereco(){
    return (
        <>
            <DefaultTitlePage>
                Configurações de Endereço
            </DefaultTitlePage>

            <Descricao>
                Atenção! , a edições dos dados abaixo teram alto impacto no funcionamento do sistema , portanto, altere apenas sendo um Admin-master ou tendo a permissão do mesmo
            </Descricao>

            <Tabs defaultActiveKey="Address" id="uncontrolled-tab-example" className="mb-3 mt-3">
                <Tab eventKey="Address" title="Endereço">

                    <Row>
                        <Col className="mb-2" sm={2}>
                            <Label require>CEP</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>Cidade</Label>
                            <input type="text" className="form-control mt-1" readOnly={true}/>
                        </Col>
                        <Col className="mb-2" sm={1}>
                            <Label require>UF</Label>
                            <input type="text" className="form-control mt-1" readOnly={true}/>
                        </Col>
                        <Col className="mb-2" sm={4}>
                            <Label require>Endereço</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={2}>
                            <Label require>Num.</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mb-2" sm={3}>
                            <Label require>Bairro</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>Complemento</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>IBGE</Label>
                            <input type="text" className="form-control mt-1" readOnly={true}/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>País</Label>
                            <SelectCountry addClass="mt-1"/>
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="AddressForDoc" title="Endereço para documentos">

                    <Row>
                        <Col className="mb-2" sm={2}>
                            <Label require>CEP</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>Cidade</Label>
                            <input type="text" className="form-control mt-1" readOnly={true}/>
                        </Col>
                        <Col className="mb-2" sm={1}>
                            <Label require>UF</Label>
                            <input type="text" className="form-control mt-1" readOnly={true}/>
                        </Col>
                        <Col className="mb-2" sm={4}>
                            <Label require>Endereço</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={2}>
                            <Label require>Num.</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mb-2" sm={3}>
                            <Label require>Bairro</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>Complemento</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>IBGE</Label>
                            <input type="text" className="form-control mt-1" readOnly={true}/>
                        </Col>
                        <Col className="mb-2" sm={3}>
                            <Label require>País</Label>
                            <SelectCountry addClass="mt-1"/>
                        </Col>
                    </Row>

                </Tab>
            </Tabs>

        </>
    )
}


export function SMTP(){
    return (
        <>
            <DefaultTitlePage>
                Configurações de SMTP
            </DefaultTitlePage>

            <Descricao>
                Atenção! , a edições dos dados abaixo teram alto impacto no funcionamento do sistema , portanto, altere apenas sendo um Admin-master ou tendo a permissão do mesmo
            </Descricao>

            <Row className="mt-3">
                <Col className="mb-2" sm={3}>
                    <Label>Criptografia de E-mail</Label>
                    <input type="text" className="form-control mt-1"/>
                </Col>
                <Col className="mb-2" sm={2}>
                    <Label>Sevidor SMTP</Label>
                    <input type="text" className="form-control mt-1" />
                </Col>
                <Col className="mb-2" sm={1}>
                    <Label>Porta</Label>
                    <input type="text" className="form-control mt-1" />
                </Col>
                <Col className="mb-2" sm={6}>
                    <Label>E-mail</Label>
                    <input type="text" className="form-control mt-1"/>
                </Col>
            </Row>

            <Row>
                <Col className="mb-2" sm={3}>
                    <Label>Usuário</Label>
                    <input type="text" className="form-control mt-1"/>
                </Col>
                <Col className="mb-2" sm={3}>
                    <Label>Senha</Label>
                    <input type="text" className="form-control mt-1" />
                </Col>
                <Col className="mb-2" sm={4}>
                    <Label>Criptografia do E-mail</Label>
                    <input type="text" className="form-control mt-1" />
                </Col>
                <Col className="mb-2" sm={2}>
                    <Label>CCC</Label>
                    <input type="text" className="form-control mt-1"/>
                </Col>
            </Row>

            <Row>
                <Col className="mb-2" sm={12}>
                    <Label>Assinatura de E-mail</Label>
                    <AreaDeTexto altura={4} addClass="mt-1"/>
                </Col>
            </Row>

        </>
    )
}

export function FormasDePagamento(){
    return (
        <>
            <DefaultTitlePage>
                Formas de Pagamentos
            </DefaultTitlePage>

            <Descricao>
                Atenção! , a edições dos dados abaixo teram alto impacto no funcionamento do sistema , portanto, altere apenas sendo um Admin-master ou tendo a permissão do mesmo
            </Descricao>

            <Tabs defaultActiveKey="gerencianet" id="uncontrolled-tab-example" className="mb-3 mt-3">
                <Tab eventKey="gerencianet" title="Gerencianet">
                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label require>Nome</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mb-2" sm={6}>
                            <Label require>ID de Usuario em Produção </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={6}>
                            <Label require>ID Secreto de Usuario em Produção</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={6}>
                            <Label require>ID de Usuario Desenvolvedor</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={6}>
                            <Label require>ID Secreto de Usuario Desenvolvedor </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>


                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input mt-1"/> <span className="ms-1">Verificar Boleto existente , caso exista , redirecionar , do contrário um novo será gerado</span>
                            </Label>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label>Descrição do pagamento do GateWay Dashboard</Label>
                            <AreaDeTexto altura={4} addClass="mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label require>Moeda</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="paypal" title="PayPal">


                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input" defaultChecked={true}/> <span className="ms-1">Ativo</span>
                            </Label>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label require>Nome</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mb-2" sm={6}>
                            <Label require>API do usuário PayPal  </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={6}>
                            <Label require>Senha API PayPal  </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label require>Assinatura API</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>



                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label>Descrição do pagamento do GateWay Dashboard</Label>
                            <AreaDeTexto altura={4} addClass="mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label require>Moeda</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input"/> <span className="ms-1">Selecionar por padrão no pedido</span>
                            </Label>
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="paypalSmartCheckout" title="PayPal Smart Checkout">


                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input" defaultChecked={true}/> <span className="ms-1">Ativo</span>
                            </Label>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label require>Nome</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={6}>
                            <Label require>Cliente ID  </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={6}>
                            <Label require>Chave Secreta  </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>


                    <Row >
                        <Col className="mb-2" sm={12}>
                            <Label>Descrição do pagamento do GateWay Dashboard</Label>
                            <AreaDeTexto altura={4} addClass="mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label require>Moeda</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input"/> <span className="ms-1">Selecionar por padrão no pedido</span>
                            </Label>
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="stripCheckout" title="StripCheckout">


                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input" defaultChecked={true}/> <span className="ms-1">Ativo</span>
                            </Label>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label require>Nome</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={6}>
                            <Label require>Chave Secreta API </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={6}>
                            <Label require>Chave Publica API </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label>Descrição do pagamento do GateWay Dashboard</Label>
                            <AreaDeTexto altura={4} addClass="mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label require>Moeda</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input"/> <span className="ms-1">Selecionar por padrão no pedido</span>
                            </Label>
                        </Col>
                    </Row>

                </Tab>
                <Tab eventKey="pagSeguro" title="PagSeguro">


                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input" defaultChecked={true}/> <span className="ms-1">Ativo</span>
                            </Label>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label require>Nome</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mb-2" sm={6}>
                            <Label require>API do usuário PagSeguro </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                        <Col className="mb-2" sm={6}>
                            <Label require>Senha API PagSeguro </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label require>Assinatura API </Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>


                    <Row>
                        <Col className="mb-2" sm={12}>
                            <Label>Descrição do pagamento do GateWay Dashboard</Label>
                            <AreaDeTexto altura={4} addClass="mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label require>Moeda</Label>
                            <input type="text" className="form-control mt-1"/>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-2" sm={12}>
                            <Label addClass="form-check-label d-flex ">
                                <input type="checkbox" className="form-check-input"/> <span className="ms-1">Selecionar por padrão no pedido</span>
                            </Label>
                        </Col>
                    </Row>

                </Tab>
            </Tabs>

        </>
    )
}

export function CamposObrigatorios(){
    return (
        <>
            <DefaultTitlePage>
                Campos Obrigatórios
            </DefaultTitlePage>
            <div>Olha ele ai bixo</div>
        </>
    )
}

export function Contatos(){
    return (
        <>
            <DefaultTitlePage>
                Contatos
            </DefaultTitlePage>
            <div>Olha ele ai bixo</div>
        </>
    )
}

export function Leads(){
    return (
        <>
            <DefaultTitlePage>
                Leads
            </DefaultTitlePage>
            <div>Olha ele ai bixo</div>
        </>
    )
}

export function Whatsapp(){
    return (
        <>
            <DefaultTitlePage>
                Whatsapp
            </DefaultTitlePage>
            <div>Olha ele ai bixo</div>
        </>
    )
}