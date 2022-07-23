import React, {memo, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha/lib/index.js";
import styles from "./Login.module.scss";
import {Col, Row, Toast, ToastContainer} from "react-bootstrap";
import {Input, Label} from "components/Content";
import logo from "assets/web/images/logo/logo-dasckup.png";
import config from "config.json";
import {useAuth} from "../../context/AuthProvider/useAuth";
import {Redirect, useNavigate} from "react-router-dom";
import {MdOutlineError} from "react-icons/md";
import {VscChromeClose} from "react-icons/vsc";

function Login(){
    const date = new Date();

    const auth = useAuth();
    const navigate = useNavigate()

    const [error , setError] = useState('d-none');
    const [errorMessage , setErrorMessage] = useState('');



    async function onFinish(values){
        values.preventDefault();

        if(values.target['g-recaptcha-response'].value){

            const response = await auth.authenticate(values.target.email.value , values.target.password.value);

            if(!auth.status){
                setError('d-flex')
                setErrorMessage('Erro Codigo [400] usuario não identificado')

                setTimeout(function (){
                    setError('d-none')
                    setErrorMessage('')
                }, 4000)

            }else{
                setError('d-none')
                setErrorMessage('')

                window.location.reload()
            }

        }else{
            setError('d-flex')
            setErrorMessage('Verifique se você não é um robo')

            setTimeout(function (){
                setError('d-none')
                setErrorMessage('')
            }, 4000)
        }
    }

    return (
        <main className={styles.content}>
            <div className={styles.content__fluid}>
                <div className={`${styles.content__fluid__card__image} image-content`}>
                    <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" width="100%" height="100%"/>
                </div>
                <div className={styles.content__fluid__card__form}>
                    <img src={logo} alt="logo icon" />
                    <form onSubmit={onFinish}>
                        <Row>
                            <Col sm={12}>
                                <Label>
                                    <span>
                                        E-mail <code>*</code>
                                    </span>
                                </Label>
                                <Input nome="email"  tipo="text" addClass="mt-2"/>
                            </Col>
                            <Col className="mt-3" sm={12}>
                                <Label>
                                    <span>
                                        Senha <code>*</code>
                                    </span>
                                    <a href="#">Esqueceu sua senha?</a>
                                </Label>
                                <Input nome="password" tipo="password" addClass="mt-2"/>
                            </Col>
                            <Col className="mt-3" sm={12}>
                                <Label>
                                    <span>
                                        <input className="form-check-input" type="checkbox" /> Lembre-se de mim
                                    </span>
                                </Label>
                            </Col>
                            <Col className="mt-3" sm={12}>
                                <ReCAPTCHA
                                    hl="pt-BR"
                                    render="explicit"
                                    sitekey="6Le2gOQZAAAAAOCWawggzXF1mFAMf1gu3V5A6t5s"
                                />
                            </Col>
                            <Col className="mt-4" sm={12}>
                                <button className="btn btn-primary w-100 ">Login</button>
                            </Col>
                            <Col className="mt-2" sm={12}>
                                <span className={styles.content__fluid__card__form__notHave}>Não tem uma conta? <a href={config.SITE_URL}>cadastrar-se</a></span>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>

            <ToastContainer className={`p-3 ${error}`} position="top-end">
                <Toast>
                    <Toast.Body  className="error-toast">
                        <MdOutlineError className="icon-toast" size={23}/> {errorMessage}
                        <a onClick={() => setError('d-none')} className="close-toast"><VscChromeClose className="icon-toast" size={14}/></a>
                    </Toast.Body>
                </Toast>
            </ToastContainer>

            <p className={styles.content__copy}>
                Copyright © {date.getFullYear()} <a target="_blank" href={config.SITE_URL} >{config.NAME}</a> todos os direitos reservados
            </p>

        </main>
    )
}

export default memo(Login);


export function Sair(){

    const auth = useAuth();
    auth.logout()

    const navigate = useNavigate()

    window.location.href = "/Dasckup";

}
