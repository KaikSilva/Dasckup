import React from "react";
import styles from "./content.module.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";
import Header from "../Main/Header";
import Footer from "../Main/Footer";
import {ProtectLayout} from "../ProtectLayout";

    export const DefaultContentPage = (props) => (
        <>
            <ProtectLayout>
                    <div className="page-wrapper">
                        <div className="page-content">
                            <div className="dash-wrapper"></div>
                                {props.children}
                        </div>
                    </div>
            </ProtectLayout>
        </>
    );


    export const DefaultTitlePage = (props) => (
        <div className="title">
            {props.children}
        </div>
    );

    export const Card = (props) => (
        <div className={`col-sm-${props.sm?props.sm:12}${props.mb?` mb-${props.mb} `:``}${props.mt?` mt-${props.mt} `:``}${props.ms?` ms-${props.ms} `:``}${props.me?` me-${props.me} `:``} card ${props.border?` border-top border-0 border-4 border-${props.borderColor?props.borderColor:`primary`} `:``}${props.addClass?props.addClass:``}`}>
            {props.children}
        </div>
    )

    export const Table = (props) => (
        <table className="table">
            <thead>
                <tr>
                    {props.colunas.map((coluna , index) => (
                        <th key={index}>{coluna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {props.rows.length !== 0 ?
                props.rows.map((elements, index) => (
                    <tr key={index}>{
                        <td className="text-center" key={index}>{elements.row.nome}</td>
                    }</tr>
                ))
            :
                <tr>
                    <td colSpan="100%" className="text-center">Nenhum conteúdo encontrado</td>
                </tr>
            }
            </tbody>
        </table>
    )

    export const Botao = (props) => (

        <button type={props.tipo ? props.tipo : "button"} className={`btn btn-${props.btn} ${props.addClass}`} onClick={props.onClick} >{props.children}</button>

    )

    export const LinkButton = (props) => (

        <Link to={props.link} className={`btn btn-${props.btn}`}>{props.children}</Link>

    )

    export const Label = (props) => (
        <label className={`${props.addClass} ${classNames({[styles.formLabel]:true,['col-sm-12']:true})}`} htmlFor={props.from}>{props.children} {props.require ? (<code>*</code>) : null} </label>
    )

    export const Descricao = (props) => (

        <div className={styles.formLabel__description} >{props.children}</div>

    )

    export const Input = (props) => (
        <input value={props.valor} type={props.tipo} name={!props.nome ? 'input[]' : props.nome} id={props.id} className={`form-control ${props.addClass}`} onChange={props.change} readOnly={props.readonly} />
    )

    export const AreaDeTexto = (props) => (
        <textarea name={props.nome ? 'textarea[]' : props.nome} id={props.id} cols={props.largura} rows={props.altura} className={`form-control ${props.addClass}`}>{props.texto}</textarea>
    )





