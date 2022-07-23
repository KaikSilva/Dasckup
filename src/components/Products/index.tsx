import classNames from "classnames";
import styles from "../../pages/Products/Produtos.module.scss";
import React, {useEffect, useState} from "react";
import api from "../../services/api";




export function SearchGroup({SetThisSearchGroup}:any){
    return (
        <header className={styles.product__group__search}>
            <input onChange={(event) => SetThisSearchGroup(event.target.value)} type="text" className="form-control"/>
        </header>
    )
}

export function ItsListGroup({SetWantThisProduct , ThisSearchGroup , SetSelectGroup}:any){

    const [Group , SetGroup] = useState([]);
    const [List , SetList] = useState([]);


    useEffect(() => {
        api.post('api/produtos/gruposdeitens/get')
            .then((response) => {
                SetGroup(response.data);
            })
    }, []);


    function testaBusca(title:any){
        const regex = new RegExp(ThisSearchGroup , 'i');
        return regex.test(title);
    }

    useEffect(() => {
        ThisSearchGroup===''?SetList([]):
            SetList(Group.filter((item:any) => testaBusca(item.title) || testaBusca(item.id)));
    }, [ThisSearchGroup])


    return (
        <>
            {
                List.length>0?
                    List.map((item:any) => (
                        <>
                            <li onClick={() => {
                                SetWantThisProduct(
                                        {
                                            title:item.title,
                                            id:item.id,
                                            preco:FormatCoin(item.total)
                                        }
                                );
                                SetSelectGroup(false);
                            }
                            } key={item.id}>#{item.id} - {item.title} (<ConvertMoney item={FormatCoin(item.total)}/>)</li>
                        </>
                    ))
                    :
                    <li>Nenhum resultado foi encontrado</li>
            }
        </>
    )
}

export function ListGroups({SetWantThisProduct , ThisSearchGroup , SetSelectGroup}:any){
    return (
        <div className={styles.product__group__list}>
            <ul className={styles.product__group__list__item}>
                <ItsListGroup SetWantThisProduct={SetWantThisProduct} SetSelectGroup={SetSelectGroup} ThisSearchGroup={ThisSearchGroup}/>
            </ul>
        </div>
    )
}


export function ThisSelectGroup({WantThisProduct , SetWantThisProduct , SelectGroup , SetSelectGroup}:any){

    const [ThisSearchGroup , SetThisSearchGroup] = useState('');

    return (
        <div className="position-relative">
            <div onClick={() => SetSelectGroup(!SelectGroup)} className={`mt-1 form-control ${styles.product__group}`}>
                {
                    WantThisProduct.title?
                        <>#{WantThisProduct.id} {WantThisProduct.title} (<ConvertMoney item={WantThisProduct.preco}/>)</>
                        :
                        <>Clique aqui para selecionar um grupo de item</>
                }
            </div>
            <div className={classNames({
                [styles.product__group__all]:true,
                ['d-none']:!SelectGroup,
            })}>
                <SearchGroup SetThisSearchGroup={SetThisSearchGroup}/>
                <ListGroups SetSelectGroup={SetSelectGroup} SetWantThisProduct={SetWantThisProduct} ThisSearchGroup={ThisSearchGroup}/>
            </div>
        </div>
    )
}


export function getArraySum(a:any , e:any){
    var total=0;
    for(var i in a) {

        let valor = parseFloat(a[i].preco.replaceAll('.' , '').replaceAll(',' , '.'));

        if(a[i].tipo === 'A'){
            total += valor;
        }else{
            let porcentagem = (100 * valor) / e
            total += porcentagem + e;
        }
    }
    return total;
}


export function SearchAttributes({SetThisSearchAttributes}:any){
    return (
        <header className={styles.product__attr__search}>
            <input onChange={(event) => SetThisSearchAttributes(event.target.value)} type="text" className="form-control"/>
        </header>
    )
}


export function ItsListAttributes({Atributos , SetAtributos , ThisSearchAttributes , SetSelectAtributos , WantThisProduct}:any){


    const [Attributes , SetAttributes] = useState([]);
    const [List , SetList] = useState([]);


    useEffect(() => {
        api.post('/produtos/atributos/get')
            .then((response) => {
                SetAttributes(response.data);
            })
    }, []);

    function NewAttr(item:any){
        const ThisAttr = [...Atributos.attr , item];
        SetAtributos({attr: ThisAttr, total:getArraySum(Atributos.attr , WantThisProduct.preco)});
    }

    function testaBusca(title:any){
        const regex = new RegExp(ThisSearchAttributes , 'i');
        return regex.test(title);
    }

    useEffect(() => {
        ThisSearchAttributes===''?SetList([]):
            SetList(Attributes.filter((item:any) => testaBusca(item.nome) || testaBusca(item.id)));
    }, [ThisSearchAttributes])


    return (
        <>
            {
                List.length>0?
                    List.map((item:any) => (
                        <li onClick={() => {NewAttr(item); SetSelectAtributos(false)}} key={item.id}>#{item.id} - {item.nome} ({item.tipo==='A'?'R$'+item.preco: item.preco+'%'})</li>
                    ))
                    :
                    <li>Nenhum resultado foi encontrado</li>
            }
        </>
    )
}

export function ListAttributes({Atributos , SetAtributos , ThisSearchAttributes , SetSelectAtributos , WantThisProduct}:any){
    return (
        <div className={styles.product__attr__list}>
            <ul className={styles.product__attr__list__item}>
                <ItsListAttributes WantThisProduct={WantThisProduct} SetSelectAtributos={SetSelectAtributos} Atributos={Atributos} SetAtributos={SetAtributos} ThisSearchAttributes={ThisSearchAttributes}/>
            </ul>
        </div>
    )
}



export function ThisSelectAttr({WantThisProduct , SetAtributos , Atributos , SelectAtributos , SetSelectAtributos}:any){

    const [ThisSearchAttributes , SetThisSearchAttributes] = useState('');

    return (
        <div className="position-relative">
            <div onClick={() => !WantThisProduct.title? alert("Talvez você queira escolher o grupo de item primeiro") :SetSelectAtributos(!SelectAtributos)} className={`mt-1 form-control ${styles.product__attr}`}>
                Clique aqui para selecionar um atributo
            </div>
            <div className={classNames({
                [styles.product__attr__all]:true,
                ['d-none']:!SelectAtributos,
            })}>
                <SearchAttributes SetThisSearchAttributes={SetThisSearchAttributes}/>
                <ListAttributes WantThisProduct={WantThisProduct} SetSelectAtributos={SetSelectAtributos} Atributos={Atributos} SetAtributos={SetAtributos} ThisSearchAttributes={ThisSearchAttributes}/>
            </div>
        </div>
    )
}





export function FormatCoin(total:any) {
    return total!==null?parseFloat(total.replaceAll('.', '').replaceAll(',', '.')):0;
}

export function ConvertMoney({item}:any){
    return (
        <>
            {item.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        </>
    )
}





















































