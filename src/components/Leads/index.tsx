import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {CgPlayListAdd} from "react-icons/cg";
import styles from "../../pages/Leads/Leads.module.scss";
import classNames from "classnames";
import api from "../../services/api";
import {DefaultTitlePage, Label} from "../Content";
import {FiEdit, FiSave, FiX} from "react-icons/fi";


export const ChooseYourState = ({NewState , SetStateStatus, StateStatus}:any) => {

    const [AllStatus , SetAllStatus] = useState([]);

    api.post('/leads/get/status/all')
        .then((response) => {
            SetAllStatus(response.data)
        })

    return (
    !NewState ?
        <select name="" className="form-control mt-1" id="">
            {
                AllStatus.length === 0 ?
                    <option value="">Nenhum status econtrado</option>
                    :
                    AllStatus.map((item: any) => (
                        <option value={item.title}>{item.title}</option>
                    ))
            }
        </select>
        :
        <Row>
            <Col sm={8}>
                <input defaultValue={StateStatus.value}
                       onChange={(event) => SetStateStatus({title: event.target.value, color: StateStatus.color})}
                       type="text" className={"mt-1 form-control"}/>
            </Col>
            <Col sm={4}>
                <input defaultValue={StateStatus.color}
                       onChange={(event) => SetStateStatus({title: StateStatus.title, color: event.target.value})}
                       type="color" className={"mt-1 form-control"}/>
            </Col>
        </Row>
    );
}

export const ChooseYourFonte = ({NewFonte , SetStateFonte , StateFonte}:any) => {

    const [AllFonte , SetAllFonte] = useState([]);

    api.post('/leads/get/fonte/all')
       .then((response) => {
           SetAllFonte(response.data)
       })


    return (
    !NewFonte ?
        <select name="" className="form-control mt-1" id="">
            {
                AllFonte.length === 0 ?
                    <option value="">Nenhuma fonte econtrada</option>
                    :
                    AllFonte.map((item: any) => (
                        <option value={item.title}>{item.title}</option>
                    ))
            }
        </select>
        :
        <Row>
            <Col sm={8}>
                <input defaultValue={StateFonte.title}
                       onChange={(event) => SetStateFonte({title: event.target.value, color: StateFonte.color})}
                       type="text" className={"mt-1 form-control"}/>
            </Col>
            <Col sm={4}>
                <input defaultValue={StateFonte.color}
                       onChange={(event) => SetStateFonte({title: StateFonte.title, color: event.target.value})}
                       type="color" className={"mt-1 form-control"}/>
            </Col>
        </Row>
    );
}

const SaveThisStatus = async (StateStatus:any , SetNewState:any) => {

    if(!StateStatus.title){
        alert("Preenche ai");
        return;
    }

    const request = await api.post('leads/status/novo' , StateStatus)

    SetNewState(false);
}

export const AddNewState = ({SetNewState , NewState , StateStatus}:any) => (
    !NewState?
    <span className="text-primary cursor-pointer text-decoration-underline" onClick={() => SetNewState(!NewState)}>novo status</span>
    :
    <span>
        <span className="text-primary cursor-pointer text-decoration-underline" onClick={() => SaveThisStatus(StateStatus , SetNewState)}>adicionar novo</span>
        <span className="text-danger cursor-pointer text-decoration-underline ms-2" onClick={() => SetNewState(!NewState)}>cancelar</span>
    </span>
)

const SaveThisFonte = async (StateFonte:any , SetNewFonte:any) => {

    if(!StateFonte.title){
        alert("Preenche ai");
        return;
    }

    const request = await api.post('leads/fonte/novo' , StateFonte)

    SetNewFonte(false);

}

export const AddNewFonte = ({SetNewFonte , NewFonte , StateFonte}:any) => (

    !NewFonte?
    <span className="text-primary cursor-pointer text-decoration-underline" onClick={() => SetNewFonte(!NewFonte)}>nova fonte</span>
    :
    <span>
        <span className="text-primary cursor-pointer text-decoration-underline" onClick={() => SaveThisFonte(StateFonte , SetNewFonte)}>adicionar novo</span>
        <span className="text-danger cursor-pointer text-decoration-underline ms-2" onClick={() => SetNewFonte(!NewFonte)}>cancelar</span>
    </span>
)

export function iconListAdd(){
    return (
        <CgPlayListAdd size={16} color="var(--bs-primary)"/>
    )
}





//Choose product


export function ItsListProduct({ItsSearchProduct , SetProductsFromLead , ProductsFromLead}:any){

    const [Products , SetProducts] = useState([]);
    const [List , SetList] = useState([]);


    useEffect(() => {
        api.post('/produtos/todos')
            .then((response) => {
                SetProducts(response.data);
            })
    }, []);


    function testaBusca(title:any){
        const regex = new RegExp(ItsSearchProduct , 'i');
        return regex.test(title);
    }

    useEffect(() => {
        ItsSearchProduct===''?SetList([]):
            SetList(Products.filter((item:any) => testaBusca(item.title) || testaBusca(item.id)));
    }, [ItsSearchProduct])


    return (
        <>
            {
                List.length>0?
                    List.map((item:any) => (
                        <li onClick={() => SetProductsFromLead([...ProductsFromLead , item])} key={item.id}>#{item.id} - {item.title}</li>
                    ))
                    :
                    <li>Nenhum resultado foi encontrado</li>
            }
        </>
    )

}

export function ListProducts({ItsSearchProduct , SetProductsFromLead , ProductsFromLead}:any){

    return (
        <div className={`${styles.product}`}>
            <ul className={`p-0 m-0 ${styles.product__list}`}>
               <ItsListProduct ProductsFromLead={ProductsFromLead} SetProductsFromLead={SetProductsFromLead} ItsSearchProduct={ItsSearchProduct}/>
            </ul>
        </div>
    )

}

export function SearchProduct({SetItsSearchProduct}:any){

    return (
        <header className={`p-1 ${styles.product__search}`}>
            <input onChange={(event) => SetItsSearchProduct(event.target.value)} type="text" className="form-control"/>
        </header>
    )

}

export function SelectProduct({SelectProductsFromLead, SetSelectProductsFromLead , SetProductsFromLead , ProductsFromLead}:any){
    const [ItsSearchProduct , SetItsSearchProduct] = useState('');


    return (
        <div className="position-relative">
            <div onClick={() => SetSelectProductsFromLead(!SelectProductsFromLead)} className={`form-control ${styles.product__click}`}>
                Clique aqui para selecionar um produto/serviço
            </div>
            <div className={classNames({
                ['d-none']:SelectProductsFromLead,
                ['w-100']:true,
                ['position-absolute']:true
            })}>
                <SearchProduct SetItsSearchProduct={SetItsSearchProduct}/>
                <ListProducts ProductsFromLead={ProductsFromLead} SetProductsFromLead={SetProductsFromLead} ItsSearchProduct={ItsSearchProduct} />
            </div>
        </div>
    )
}



export function ItsDetailsProduct({ProductsFromLead, SetProductsFromLead}:any){

    return (
        <ul className="mt-2 mb-3 p-0">
            <li>
                {
                ProductsFromLead.length === 0 ?
                    <Label>Nenhum produto</Label>
                    :
                    ProductsFromLead.map((item:any) => (
                        <ProdSelecionado ProductsFromLead={ProductsFromLead} SetProductsFromLead={SetProductsFromLead} item={item}/>
                    ))
                }
            </li>
        </ul>
    )

}

export function ProdSelecionado({item , SetProductsFromLead , ProductsFromLead}:any){

    item.quantidade = 1;

    function handleRemove(id:string|number|null){
        const newList = ProductsFromLead.filter((item:any) => item.id !== id);
        SetProductsFromLead(newList);
    }

    const [Quantidade , SetQuantidade] = useState(item.quantidade)

    useEffect(() => {
        item.quantidade = Quantidade==0||!Quantidade?1:Quantidade;
    } , [Quantidade])

    const [EditQuantidade , SetEditQuantidade] = useState(false);


    return (
        <Label addClass="mt-2 d-flex align-items-center" key={item.id}>

            <span onClick={() => handleRemove(item.id)}><FiX size={14} color="var(--bs-danger)"/></span>

            {
                !EditQuantidade?
                    <span onClick={()=>SetEditQuantidade(true)} className="ms-1"><FiEdit size={12} color="var(--bs-primary)"/></span>
                :
                    <span onClick={()=>SetEditQuantidade(false)} className="ms-1"><FiSave size={12} color="var(--bs-primary)"/></span>
            }


            {
                !EditQuantidade ?
                    <span className="ms-1 me-2">{Quantidade}x</span>
                    :
                    <span className="ms-1 me-2" style={{maxWidth: "10%"}}>
                        <input defaultValue={Quantidade} onChange={(event) => SetQuantidade(parseInt(event.target.value))} style={{minHeight: "20px",maxHeight: "20px"}} type="text" className="text-center p-0 form-control"/>
                    </span>
            }
            <span>{item.title}</span>
        </Label>
    )

}



export function GetPrecoTotal({ListItens}:any){

    function getArraySum(a:any){
        var total=0;
        for(var i in a) {
            total += a[i].quantidade*parseFloat(a[i].preco.replaceAll('.' , '').replaceAll(',' , '.'));
        }
        return total;
    }

    useEffect(() => {
        getArraySum(ListItens)
    } , [ListItens])

    return (
        <>
            <DefaultTitlePage>
                Valor do lead: <span className="text-success">{getArraySum(ListItens).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </DefaultTitlePage>
        </>
    )
}





















