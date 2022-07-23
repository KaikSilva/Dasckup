import React, {Component, memo} from "react";
import api from "services/api";
import {TableClients} from "components/Client/Table";



class ClientsTable extends Component<any, any>{


    state = {
        clientes: [],
    }

    async componentDidMount() {
        const response = await api.post('clientes/table/get');
        this.setState({ clientes: response.data });
    }


    render() {

        const { clientes } = this.state;


        return <TableClients clientes={clientes}/>
    }

}

export default memo(ClientsTable);


