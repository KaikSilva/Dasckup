import {Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import state from "./form.json";
import {
    Botao,
    Label,
    Descricao,
    Input,
    AreaDeTexto,
} from "../Content";

import styles from "../../pages/Users/Users.module.scss"

export function FormNewUser(){

    function useFormik({
                           initialValues,
                           validate
                       }) {
        const [touched, setTouchedFields] = useState({});
        const [errors, setErrors] = useState({});
        const [values, setValues] = useState(initialValues);

        useEffect(() => {
            validateValues(values);
        }, [values]);

        function handleChange(event) {
            event.target.classList.remove('is-invalid');
            const fieldName = event.target.getAttribute('name');
            const { value } = event.target;

            if(value === ''){
                event.target.classList.add('is-invalid');
            }

            setValues({
                ...values,
                [fieldName]: value,
            });
        }

        function handleBlur(event) {
            event.target.classList.remove('is-invalid');
            const fieldName = event.target.getAttribute('name');
            const { value } = event.target;

            if(value === ''){
                event.target.classList.add('is-invalid');
            }

            setTouchedFields({
                ...touched,
                [fieldName]: true,
            })
        }

        function validateValues(values) {
            setErrors(validate(values));
        }

        return {
            values,
            errors,
            touched,
            handleBlur,
            setErrors,
            handleChange,
        };
    }


    const formik = useFormik({
        initialValues: state,
        validate: function (values) {
            const errors = {};
            return errors;
        }
    });


    return (
        <form  encType="multipart/form-data" method="POST">


            <div className={styles.subTitle}>
                <span>Dados</span>
                <hr/>
            </div>

            <Row className="mb-2">
                <Col  sm={3}>
                    <Label require from="nome">Nome</Label>
                    <input
                        name="nome"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.nome}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Sobre Nome</Label>
                    <input
                        name="sobrenome"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.sobrenome}
                    />
                </Col>
                <Col  sm={6}>
                    <Label require from="data_nascimento">Data de Nascimento</Label>
                    <input
                        name="data_nascimento"
                        type="date"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.data_nascimento}
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={6}>
                    <Label require from="email">E-mail</Label>
                    <input
                        name="email"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="celular">Celular</Label>
                    <input
                        name="celular"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.celular}
                    />
                </Col>
                <Col  sm={3}>
                    <Label from="telefone">Telefone</Label>
                    <input
                        name="telefone"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.telefone}
                    />
                </Col>
            </Row>


            <Row className="mb-5">
                <Col >
                    <Label require from="image_user">Foto de usuário</Label>
                    <Input  tipo="file" addClass="mt-1"/>
                </Col>
            </Row>




            <div className={styles.subTitle}>
                <span>Endereço</span>
                <hr/>
            </div>

            <Row className="mb-2">
                <Col  sm={2}>
                    <Label require from="image_user">CEP</Label>
                    <input
                        name="cep"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.cep}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Cidade</Label>
                    <input
                        name="cidade"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.cidade}
                    />
                </Col>
                <Col  sm={1}>
                    <Label require from="image_user">UF</Label>
                    <input
                        name="estado"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.estado}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Endereço</Label>
                    <input
                        name="endereco"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.endereco}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Número</Label>
                    <input
                        name="numero"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.numero}
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={3}>
                    <Label require from="image_user">Bairro</Label>
                    <input
                        name="bairro"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.bairro}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Complemento</Label>
                    <input
                        name="complemento"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.complemento}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">IBGE</Label>
                    <input
                        name="ibge"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.ibge}
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">País</Label>
                    <select className="form-control">
                        <option value="BR">Brasil</option>
                    </select>
                </Col>
            </Row>


            <Row className="mb-5">
                <Col >
                    <Label require from="image_user">Imagem de comprovante de residência</Label>
                    <Input tipo="file" addClass="mt-2"/>
                </Col>
            </Row>




            <div className={styles.subTitle}>
                <span>Documentos</span>
                <hr/>
            </div>

            <Row className="mb-2">
                <Col  sm={6}>
                    <Label require from="image_user">RG</Label>
                    <input
                        name="rg"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.rg}
                    />
                </Col>
                <Col  sm={6}>
                    <Label require from="image_user">CPF</Label>
                    <input
                        name="cpf"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.cpf}
                    />
                </Col>
            </Row>

            <Row className="mb-2">
                <Col  sm={6}>
                    <Label from="image_user">Nome do pai</Label>
                    <input
                        name="nome_pai"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.nome_pai}
                    />
                </Col>
                <Col  sm={6}>
                    <Label from="image_user">Nome da mãe</Label>
                    <input
                        name="nome_mae"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.nome_mae}
                    />
                </Col>
            </Row>


            <Row className="mb-5">
                <Col >
                    <Label require from="image_user">Imagem de documentos</Label>
                    <Descricao>RG frente e verso e CPF frente e verso</Descricao>
                    <Input tipo="file" addClass="mt-1"/>
                </Col>
            </Row>











            <div className={styles.subTitle}>
                <span>Recursos Humanos</span>
                <hr/>
            </div>

            <Row className="mb-2">
                <Col  sm={6}>
                    <Label require from="image_user">Data de admissão</Label>
                    <input
                        name="data_adimissao"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.data_adimissao}
                    />
                </Col>
                <Col  sm={6}>
                    <Label require from="image_user">Sálario</Label>
                    <input
                        name="salario"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.salario}
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={6}>
                    <Label from="image_user">Complemento de Sálario</Label>
                    <input
                        name="complemento_salario"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.complemento_salario}
                    />
                </Col>
                <Col  sm={6}>
                    <Label from="image_user">Comissão</Label>
                    <input
                        name="comissao"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.comissao}
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={6}>
                    <Label from="image_user">Adiantamento de Sálario</Label>
                    <input
                        name="adiantamento"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.adiantamento}
                    />
                </Col>
                <Col  sm={6}>
                    <Label require from="image_user">PIS</Label>
                    <input
                        name="pis"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.pis}
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={4}>
                    <Label require from="image_user">Carteira de trabalho</Label>
                    <input
                        name="carteira_trabalho"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.carteira_trabalho}
                    />
                </Col>
                <Col  sm={2}>
                    <Label require from="image_user">Seríe</Label>
                    <input
                        name="serie"
                        type="text"
                        className="form-control mt-1"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.serie}
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={3}>
                    <Label require from="image_user">Horario de entrada</Label>
                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Horario de saída do almoço</Label>

                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Horario de entrada do almoço</Label>
                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
                <Col  sm={3}>
                    <Label require from="image_user">Horario de fim de expediente</Label>
                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={6}>
                    <Label require from="image_user">Quantidade de horas mensal</Label>
                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
            </Row>


            <Row className="mb-2">
                <Col  sm={6}>
                    <Label require from="image_user">Senha</Label>
                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
                <Col  sm={6}>
                    <Label require from="image_user">Confirmar senha</Label>
                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col >
                    <Label require from="image_user">Função</Label>
                    <input
                        type="text"
                        className="form-control mt-1"
                    />
                </Col>
            </Row>

            <Row className="mb-2">
                <Col >
                    <Label from="image_user">Notas</Label>
                    <AreaDeTexto altura={6} addClass="mt-1"/>
                </Col>

                <Col >
                    <Label from="image_user">Lembretes</Label>
                    <AreaDeTexto altura={6} addClass="mt-1"/>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col sm={1}>
                    <Botao tipo="submit" btn="primary">Cadastrar</Botao>
                </Col>
            </Row>



        </form>
    );
}