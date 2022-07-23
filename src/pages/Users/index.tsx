import React from "react";
import {FormNewUser} from "components/Users";
import {
    DefaultContentPage,
    DefaultTitlePage,
    Card
} from "components/Content";


export function Users(){
    return (
        <DefaultContentPage>
            <Card sm={8} mb={5} border={true}>
                <DefaultTitlePage>
                    Todos Colaborador
                </DefaultTitlePage>
            </Card>
        </DefaultContentPage>
    )
}

export function Users_create(){

        return (
            <DefaultContentPage>
                <Card sm={8} mb={5} border={true}>
                    <DefaultTitlePage>
                        Adicionar Colaborador
                    </DefaultTitlePage>

                    <FormNewUser/>

                </Card>
            </DefaultContentPage>
        )

}

