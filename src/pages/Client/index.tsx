import React , {useState , memo} from "react";
import {Card, DefaultContentPage , DefaultTitlePage} from "components/Content";
import {Col, Row} from "react-bootstrap";
import {Label} from "components/Content";
import styles from "./Cliente.module.scss";
import {FormCompany , FormClient} from "components/Client";
import {Botao} from "components/Content";
import ClientsTable from "../../class/Clients";
import {LinkButton} from "../../components/Content";


function Client() {
    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    todos os clientes
                </DefaultTitlePage>


                <div className="w-50">
                    <Row>
                        <Col>
                            <LinkButton link="/cliente/novo" btn="primary" >Novo Cliente</LinkButton>
                        </Col>
                    </Row>
                </div>

                <ClientsTable/>


            </Card>
        </DefaultContentPage>
    )
}

export default memo(Client);


export function NewClient(){

    const [company , SetCompany] = useState('none');

    return (
        <form>
            <DefaultContentPage>
                <Card border={true} sm={8}>
                    <DefaultTitlePage>
                        Escolha uma das opções
                    </DefaultTitlePage>

                    <Row>
                        <Col sm={6}>
                            <Label addClass={styles.label__opicoes}>
                                <input className="form-check-input" onClick={() => SetCompany('none')} type="radio" name="OPCAO[]" id=""/> Comum
                            </Label>
                        </Col>
                        <Col sm={6}>
                            <Label addClass={styles.label__opicoes}>
                                <input className="form-check-input" onClick={() => SetCompany('success')} type="radio" name="OPCAO[]" id=""/> Juridico
                            </Label>
                        </Col>
                    </Row>

                </Card>

                <Card mt={4} sm={8}>
                    <DefaultTitlePage>
                        Dados do cliente
                    </DefaultTitlePage>

                    <FormClient/>
                </Card>

                {company != 'none' ?<FormCompany addClass="mb-5" />:<></>}

            </DefaultContentPage>

            <div className={styles.footerBtn}>
                <Botao btn="primary">Cadastrar cliente {company != 'none' ? "Juridico":"Comum"}</Botao>
            </div>
        </form>
    )
}



