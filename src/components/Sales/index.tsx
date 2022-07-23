import React, {useEffect, useState} from "react";
import styles from "./Sales.module.scss";
import {Col, Row} from "react-bootstrap";
import {FiCheck, FiChevronDown, FiEdit, FiImage, FiSave, FiTrash, FiX} from "react-icons/fi";
import {
    Card,
    DefaultTitlePage,
    Label,
    AreaDeTexto
} from "components/Content";
import api from "services/api";
import classNames from "classnames";
import style from "Client/Cliente.module.scss";


export function AddressClient({ThisClient}:any){

    const AddressFat = ThisClient.endereco;
    const AddressEnd = ThisClient.endereco;

    const [ListAddressFat , SetListAddressFat] = useState(<AddressInvoice Endereco={AddressEnd}/>)
    const [ListAddressEnd , SetListAddressEnd] = useState(<AddressDelivery Endereco={AddressFat}/>)




    function setEnd(){
        SetListAddressEnd(<AddressForm Endereco={AddressEnd}/>)
        SetAddressEditButtonEnd(<span className={styles.btn_edited} onClick={() => SetListAddressEnd(<AddressDelivery Endereco={AddressFat}/>)}><FiSave/></span>)
    }

    function setFat(){
        SetListAddressFat(<AddressForm Endereco={AddressEnd}/>)
        SetAddressEditButtonFat(<span className={styles.btn_edited} onClick={() => SetListAddressFat(<AddressInvoice Endereco={AddressEnd}/>)}><FiSave/></span>)
    }



    const buttonFat = (
        <ButtonEditAddressFatForm set={setFat} SetListAddressFat={SetListAddressFat} AddressEnd={ListAddressFat}/>
    )

    const buttonEnd = (
        <ButtonEditAddressEndForm set={setEnd} SetListAddressEnd={SetListAddressEnd} AddressEnd={AddressEnd}/>
    )

    const [AddressEditButtonFat , SetAddressEditButtonFat] = useState(buttonFat)
    const [AddressEditButtonEnd , SetAddressEditButtonEnd] = useState(buttonEnd)


    return (
        <Row>
            <Col sm={6}>
                <p className={styles.listTitle}>
                    <span>Fatura para</span>
                    {AddressEditButtonEnd}
                </p>
                <ul className={styles.list}>
                    {ListAddressEnd}
                </ul>
            </Col>
            <Col sm={6}>
                <p className={styles.listTitle}>
                    <span>Entrega para</span>
                    {AddressEditButtonFat}
                </p>
                <ul className={styles.list}>
                    {ListAddressFat}
                </ul>
            </Col>
        </Row>
    )

}

export function ButtonEditAddressFatForm({set , SetListAddressFat , AddressEnd , SetAddressEditButtonFat}:any){
    return (
        <span className={styles.btn_edited} onClick={() => set()}><FiEdit/></span>
    )
}

export function ButtonEditAddressEndForm({set , SetListAddressEnd , AddressEnd , SetAddressEditButtonEnd}:any){
    return (
        <span className={styles.btn_edited} onClick={() => set()}><FiEdit/></span>
    )
}


export function AddressForm({Endereco}:any){

    return (
        <>
            <li>
                Cep
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    value={Endereco.ClienteCep}
                /></span>
            </li>
            <li>
                Cidade
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    onChange={(evento) => {Endereco.ClienteCidade = evento.target.value}}
                    value={Endereco.ClienteCidade}
                /></span>
            </li>
            <li>
                Estado
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    onChange={(evento) => {Endereco.ClienteEstado = evento.target.value}}
                    value={Endereco.ClienteEstado}
                /></span>
            </li>
            <li>
                Endereço
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    onChange={(evento) => {Endereco.ClienteRua = evento.target.value}}
                    value={Endereco.ClienteRua}
                /></span>
            </li>
            <li>
                Número
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    onChange={(evento) => {Endereco.ClienteNum = evento.target.value}}
                    value={Endereco.ClienteNum}
                /></span>
            </li>
            <li>
                Bairro
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    onChange={(evento) => {Endereco.ClienteBairro = evento.target.value}}
                    value={Endereco.ClienteBairro}
                /></span>
            </li>
            <li>
                IBGE
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    onChange={(evento) => {Endereco.ClienteIBGE = evento.target.value}}
                    value={Endereco.ClienteIBGE}
                /></span>
            </li>
            <li>
                Complemento
                <span><input
                    type="text"
                    className={styles["form-control-simple"]}
                    onChange={(evento) => {Endereco.ClienteComponente = evento.target.value}}
                    value={Endereco.ClienteComponente}
                /></span>
            </li>
        </>
    )
}



export function AddressInvoice({Endereco}:any){
    return (
        <>
            <li>Cep <span>{Endereco.ClienteCep}</span></li>
            <li>Cidade <span>{Endereco.ClienteCidade}</span></li>
            <li>Estado <span>{Endereco.ClienteEstado}</span></li>
            <li>Endereço <span>{Endereco.ClienteRua}</span></li>
            <li>Número <span>{Endereco.ClienteNum}</span></li>
            <li>Bairro <span>{Endereco.ClienteBairro}</span></li>
            <li>IBGE <span>{Endereco.ClienteIBGE}</span></li>
            <li>Complemento <span>{Endereco.ClienteComponente}</span></li>
        </>
    )
}

export function AddressDelivery({Endereco}:any){
    return (
        <>
            <li>Cep <span>{Endereco.ClienteCep}</span></li>
            <li>Cidade <span>{Endereco.ClienteCidade}</span></li>
            <li>Estado <span>{Endereco.ClienteEstado}</span></li>
            <li>Endereço <span>{Endereco.ClienteRua}</span></li>
            <li>Número <span>{Endereco.ClienteNum}</span></li>
            <li>Bairro <span>{Endereco.ClienteBairro}</span></li>
            <li>IBGE <span>{Endereco.ClienteIBGE}</span></li>
            <li>Complemento <span>{Endereco.ClienteComponente}</span></li>
        </>
    )
}


export function DateClient({SetClientSelected , ThisClient ,SetListItens}:any) {

    if(ThisClient==''){
        SetClientSelected(false)
    }

    function CancelThisClient(){
        SetClientSelected(false);
        SetListItens([]);
    }

    return (
        <Row>
            <Col>
                <div className={`${styles.card__client} position-relative`}>
                    <div className={styles.card__client__information}>
                        <h4 className={styles.card__client__information__name}>{ThisClient.NomeCliente} {ThisClient.SobreNomeCliente}</h4>
                        <span className={styles.card__client__information__id}>#{ThisClient.id}</span>
                    </div>
                    <div className={styles.card__client__contact}>
                        <div>
                            {ThisClient.contato.ClienteTelefone!=='-'?ThisClient.contato.ClienteTelefone+" - ":<></>}{ThisClient.contato.ClienteCelular}
                        </div>
                        <div>
                            {ThisClient.contato.ClienteEmail}
                        </div>
                    </div>
                    <span onClick={CancelThisClient} className={styles.card__client__close}>
                        <FiX/>
                    </span>
                </div>
            </Col>
        </Row>
    )

}

export function Client({SetClientSelected , SelectThisClient , SetListItens}:any){

    return (
        <>
            <DateClient SetListItens={SetListItens} ThisClient={SelectThisClient} SetClientSelected={SetClientSelected}/>
            <AddressClient ThisClient={SelectThisClient}/>
        </>
    )

}

export function FixaClientDefault({SetClientSelected , SetThisClient}:any){

    return (
        <div>
            <SelectClient SetThisClient={SetThisClient} SetClientSelected={SetClientSelected}/>
            <AddressClientDefault/>
        </div>
    )

}

export function SelectClient({SetClientSelected , SetThisClient}:any){

    const [MenuSelectClient , SetMenuSelectClient] = useState(true);

    function ThisClient(client:any){
        SetClientSelected(true);
        SetThisClient(client);
    }

    return (
        <Row className="mb-3">
            <Col>
                <Label require>Cliente</Label>
                <div className={`mt-1 position-relative ${styles.card__client__select}`}>
                    <div  onClick={() => SetMenuSelectClient(!MenuSelectClient)} className="form-control d-flex">
                        <p className={`mb-0 mt-1 ${styles.card__client__select__input}`}>
                            <span>Clique aqui para selecionar o cliente</span>
                            <span><FiChevronDown/></span>
                        </p>
                    </div>
                    <div className={classNames({
                        [styles.card__client__select__dropdown]:true,
                        ['d-none']:MenuSelectClient
                    })}>
                        <SearchClientHeader SetMenuSelectClient={SetMenuSelectClient} ThisClient={ThisClient}/>
                    </div>
                </div>
            </Col>
        </Row>
    )
}




export function SearchClientHeader({SetMenuSelectClient , ThisClient}:any){

    const [SearchClient , SetSearchClient] = useState('');


    return (
        <>
            <div className={styles.card__client__select__header}>
                <input value={SearchClient} onChange={(event) => {SetSearchClient(event.target.value)}} onBlur={() => SetMenuSelectClient(true)} id="search-client" type="text" className="form-control"/>
            </div>
            <div className={styles.card__client__select__list}>
                <ul className={styles.card__client__select__list__item}>
                    <ListClients SearchClient={SearchClient} ThisClient={ThisClient}/>
                </ul>
            </div>
        </>
    )
}


export function ListClients({SearchClient , ThisClient}:any){


    const [Clients , SetClients] = useState([]);
    const [List , SetList] = useState([]);


    useEffect(() => {
        api.post('/clientes/todos')
            .then((response) => {
                SetClients(response.data);
            })
    }, []);

    function testaBusca(title:string){
        const regex = new RegExp(SearchClient , 'i');
        return regex.test(title);
    }

    useEffect(() => {
        SearchClient==''?SetList([]):
        SetList(Clients.filter((item:any) => testaBusca(item.NomeCliente+' '+item.SobreNomeCliente) || testaBusca(item.id) || testaBusca(item.email)));
    }, [SearchClient])


    return (
        <>
            {
                List.length>0?
                List.map((item:any) => (
                    <li onClick={() => ThisClient(item)} key={item.id}>#{item.id} - {item.NomeCliente} {item.SobreNomeCliente}</li>
                ))
                    :
                <li>Nenhum resultado foi encontrado</li>
            }
        </>
    )

}


export function AddressClientDefault(){

    return (
        <Row>
            <Col sm={6}>
                <p className={styles.listTitle}>
                    <span>Fatura para</span>
                </p>
                <ul className={styles.list}>
                    <li>Cep <span>-</span></li>
                    <li>Cidade <span>-</span></li>
                    <li>Estado <span>-</span></li>
                    <li>Endereço <span>-</span></li>
                    <li>Número <span>-</span></li>
                    <li>Bairro <span>-</span></li>
                    <li>IBGE <span>-</span></li>
                    <li>Complemento <span>-</span></li>
                </ul>
            </Col>
            <Col sm={6}>
                <p className={styles.listTitle}>
                    <span>Entrega para</span>
                </p>
                <ul className={styles.list}>
                    <li>Cep <span>-</span></li>
                    <li>Cidade <span>-</span></li>
                    <li>Estado <span>-</span></li>
                    <li>Endereço <span>-</span></li>
                    <li>Número <span>-</span></li>
                    <li>Bairro <span>-</span></li>
                    <li>IBGE <span>-</span></li>
                    <li>Complemento <span>-</span></li>
                </ul>
            </Col>
        </Row>
    )

}





// Search Products


export function SelectNewProduct({SetListItens , ListItens , ClientSelected}:any){

    const [MenuSelectProduct , SetMenuSelectProduct] = useState(true);

    return (
        <>
            <Label require>Produto</Label>
            <div className={`mt-1 position-relative ${styles.card__product__select}`}>
                <div onClick={() => SetMenuSelectProduct(!MenuSelectProduct)} className="form-control d-flex">
                    <p className={`mb-0 mt-1 ${styles.card__product__select__input}`}>
                        <span>Clique aqui para selecionar o produto</span>
                        <span><FiChevronDown/></span>
                    </p>
                </div>
                <div className={classNames({
                    [styles.card__product__select__dropdown]:true,
                    ["d-none"]:MenuSelectProduct,
                })}>
                    <InputSearchProducts ClientSelected={ClientSelected} ListItens={ListItens} SetListItens={SetListItens} DropdownShowProduct={SetMenuSelectProduct}/>
                </div>
            </div>
        </>
    )

}



function InputSearchProducts({ClientSelected , DropdownShowProduct , SetListItens , ListItens}:any){

    const [SearchProduct , SetSearchProduct] = useState('');

    return (
        <>
            <div className={styles.card__product__select__header}>
                <input value={SearchProduct} onChange={(event) => SetSearchProduct(event.target.value)} id="search-client" type="text" className="form-control"/>
            </div>
            <div className={styles.card__product__select__list}>
                <ul className={styles.card__product__select__list__item}>
                    <ListProducts ClientSelected={ClientSelected} ListItens={ListItens} SetListItens={SetListItens} SearchProduct={SearchProduct}/>
                </ul>
            </div>
        </>
    )
}



function ListProducts({SearchProduct , SetListItens , ListItens , ClientSelected}:any){

    const [Products , SetProducts] = useState([]);
    const [List , SetList] = useState([]);


    useEffect(() => {
        api.post('/produtos/todos')
            .then((response) => {
                SetProducts(response.data);
            })
    }, []);

    function testaBusca(title:string){
        const regex = new RegExp(SearchProduct , 'i');
        return regex.test(title);
    }

    useEffect(() => {
        SearchProduct==''?SetList([]):
            SetList(Products.filter((item:any) => testaBusca(item.title) || testaBusca(item.id)));
    }, [SearchProduct])


    return (
        <>
            {
                List.length>0?
                    List.map((item:any) => (
                        <li onClick={() => {ClientSelected?SetListItens([...ListItens , item]):alert("selecione um cliente primeiro")}} key={item.id}>#{item.id} - {item.title}</li>
                    ))
                    :
                    <li>Nenhum resultado foi encontrado</li>
            }
        </>
    )

}



export function ButtonEditQuant({SetQuantidade ,Quantidade, SetLabelQuantidade , SetOptionEdit}:any){

    function NewQuant(){
        SetLabelQuantidade(<input type="number" onChange={(event) => {SetQuantidade(parseInt(event.target.value))}} defaultValue={Quantidade} className="form-control form-edit-quant" style={{maxWidth: "50%"}}/>);
        SetOptionEdit(false);
    }

    return (
        <a onClick={() => NewQuant()} className="text-primary m-1"><FiEdit size={16}/></a>
    )
}

export function ButtonThisQuant({SetQuantidade ,Quantidade, SetLabelQuantidade , SetOptionEdit}:any) {

    function SaveNewQuant(){
        SetLabelQuantidade(<>x{Quantidade}</>);
        SetOptionEdit(true);
    }

    return (
        <a onClick={()=>SaveNewQuant()} className="text-primary m-1"><FiSave size={16}/></a>
    )
}


export function DetailsProduct({Prod , index , ListItens , SetListItens , SetPrecoTotal , PrecoTotal}:any){
    const [Quantidade , SetQuantidade] = useState(1);
    const [LabelQuantidade , SetLabelQuantidade] = useState(<>x{Quantidade}</>);
    const [OptionEdit , SetOptionEdit] = useState(true);

    function handleRemove(id:string|number|null){
        const newList = ListItens.filter((item:any) => item.id !== id);
        SetListItens(newList);
    }

    return (
        <tr key={index}>
            <td className="center">
                {OptionEdit?
                    <ButtonEditQuant
                        SetOptionEdit={SetOptionEdit}
                        SetQuantidade={SetQuantidade}
                        SetLabelQuantidade={SetLabelQuantidade}
                        Quantidade={Quantidade}
                    />
                    :
                    <ButtonThisQuant
                        SetOptionEdit={SetOptionEdit}
                        SetQuantidade={SetQuantidade}
                        SetLabelQuantidade={SetLabelQuantidade}
                        Quantidade={Quantidade}
                    />
                }
                <a onClick={() => handleRemove(Prod.id)} className="text-danger m-1"><FiTrash size={16}/></a>
            </td>
            <td className="center position-relative">
                {LabelQuantidade}
            </td>
            <td className="center"><img src="https://dasckup.com/app/frontend/assets/images/explorer/1653574240.png" width="20px" alt=""/></td>
            <td>{Prod.title}</td>
            <td className="center">R$ {Prod.preco}</td>
            <td className="center">R$ 0,00</td>
            <td></td>
        </tr>
    )
}



export function ButtonsOnSumits({SetClientSelected , SetListItens , ListItens , ClientSelected}:any){

    function eventClickForButtonTest(event:any){
        event.preventDefault();

        if(ListItens.length == 0 || !ClientSelected){
            alert(
                "Complete o pedido para continuar"
            )
        }else{
            alert("PERA!")
        }

    }

    return (
        <>
            <button onClick={() => {
                SetListItens([])
                SetClientSelected(false)
            }} className="btn btn-secondary me-2">
                Cancelar
            </button>
            <button onClick={(event) => eventClickForButtonTest(event)} className="btn btn-primary">
                Criar pedido
            </button>
        </>
    )
}


export function FichaCliente({ClientSelected , SetClientSelected , SetListItens}:any){

    const [ThisClient , SetThisClient] = useState([])

    return (
        <Col className="mb-4">
            <Card border={true}>
                <DefaultTitlePage>
                    Ficha do Cliente
                </DefaultTitlePage>

                {
                    !ClientSelected?<FixaClientDefault SetThisClient={SetThisClient} SetClientSelected={SetClientSelected}/>:<Client SetListItens={SetListItens} SelectThisClient={ThisClient} SetClientSelected={SetClientSelected}/>
                }
            </Card>
        </Col>
    )
}

export function Produtos({ListItens  ,SetListItens , ClientSelected}:any){

    return (
        <Col className="mb-4">
            <Card border={true}>
                <DefaultTitlePage>
                    Produtos
                </DefaultTitlePage>

                <Row className="mb-3">
                    <Col>
                        <Label require>Data de vencimento</Label>
                        <input type="date" className="form-control mt-1"/>
                    </Col>
                </Row>

                <Row>
                    <FaturaRecorrente/>
                </Row>
                <Row>
                    <Col className="mb-2" sm={12}>
                        <SelectNewProduct ClientSelected={ClientSelected} ListItens={ListItens} SetListItens={SetListItens}/>
                    </Col>
                </Row>

            </Card>
        </Col>
    )
}

export function FaturaRecorrente(){
    const [Undetermined , SetUndetermined] = useState(true);

    return (
        <Col>
            <Label require>Fatura recorrente?</Label>
            <Row>
                <Col className="mb-2" sm={3}>
                    <select name="" id="" className="form-control mt-1">
                        <option value="não">Não</option>
                        <option value="sim">Sim</option>
                    </select>
                </Col>
                <Col className="mb-2" sm={9}>
                    <input type="text" className="form-control mt-1" readOnly={Undetermined}/>
                </Col>
                <Col  className="align-items-center d-flex mb-3">
                    <Label addClass="d-flex flex-row" >
                        <input type="checkbox" className="form-check-input me-1" onClick={() => SetUndetermined(!Undetermined)} defaultChecked={true}/> Tempo inderterminado
                    </Label>
                </Col>
            </Row>
        </Col>
    )
}

export function DetalhesPedido({ListItens  ,SetListItens}:any){

    const [PrecoTotal , SetPrecoTotal] = useState([0]);

    return (
        <Col>
            <Card border={true}>
                <DefaultTitlePage>
                    Detalhes do Pedido
                </DefaultTitlePage>

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <HeaderOfTable/>
                        </thead>
                        <tbody>
                        {
                            ListItens.length == 0?
                                <tr>
                                    <td colSpan={100} className="text-center">Nenhum conteúdo encontrado</td>
                                </tr>
                                :
                                ListItens.map((item:any) => (
                                    <DetailsProduct SetPrecoTotal={SetPrecoTotal} PrecoTotal={PrecoTotal} SetListItens={SetListItens} ListItens={ListItens} Prod={item} index={item.id}/>
                                ))
                        }
                        <AdditionalFromTable ListItens={ListItens}/>
                        </tbody>
                    </table>
                </div>

            </Card>
        </Col>
    )
}

export function GetPrecoTotal({ListItens}:any){

    function getArraySum(a:any){
        var total=0;
        for(var i in a) {
            total += parseFloat(a[i].preco.replaceAll('.' , '').replaceAll(',' , '.'));
        }
        return total;
    }

    return (
        <>
            {getArraySum(ListItens).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </>
    )
}


export function PlusDetalhes(){
    return (
        <Col>
            <Card border={true}>
                <Row>
                    <Col className="mb-3" sm={12}>
                        <Label>Anexo</Label>
                        <input type='file' className='form-control mt-1'/>
                    </Col>
                    <Col sm={6}>
                        <Label>Nota</Label>
                        <AreaDeTexto addClass="mt-1" altura={4}/>
                    </Col>
                    <Col sm={6}>
                        <Label>Lembrete</Label>
                        <AreaDeTexto addClass="mt-1" altura={4}/>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}


export function Desconto(){
    return (
        <td className="center-right border-0 " colSpan={100}>
            <label className="d-flex align-items-center justify-content-end mt-4">
                Desconto
                <select name="" className="ms-1 form-control w-auto float-right" id="">
                    <option value="">0%</option>
                    <option value="1">1%</option>
                    <option value="2">2%</option>
                    <option value="3">3%</option>
                    <option value="4">4%</option>
                    <option value="5">5%</option>
                    <option value="6">6%</option>
                    <option value="7">7%</option>
                    <option value="8">8%</option>
                    <option value="9">9%</option>
                    <option value="10">10%</option>
                </select>
            </label>
        </td>
    )
}

export function AdditionalFromTable({ListItens}:any){
    return (
        <>
            <tr>
                <Desconto/>
            </tr>
            <tr>
                <td className="center-right border-0 mt-0" colSpan={100}>
                    <div className="mt-0">
                        <GetPrecoTotal ListItens={ListItens}/>
                    </div>
                </td>
            </tr>
        </>
    )
}

export function HeaderOfTable(){
    return (
        <tr>
            <th style={{maxWidth: "5%"}}>Opções</th>
            <th style={{maxWidth: "5%"}}>Quantidade</th>
            <th style={{width: "10%"}}>
                <FiImage size={20}/>
            </th>
            <th style={{maxWidth: "35%"}}>Produto</th>
            <th style={{maxWidth: "20%"}}>Preço unitario</th>
            <th style={{maxWidth: "15%"}}>Frete</th>
            <th style={{maxWidth: "15%"}}>Total</th>
        </tr>
    )
}





