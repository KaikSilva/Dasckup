import React, {Component, memo} from "react";
import api from "services/api";
import {TableSales} from "../../components/Sales/Table";



class SalesTable extends Component<any, any>{


    state = {
        pedidos: [],
    }

    async componentDidMount() {
        const response = await api.post('pedidos/table/get');
        this.setState({ pedidos: response.data });
    }


    render() {

        const { pedidos } = this.state;


        return <TableSales pedidos={pedidos}/>
    }

}

export default memo(SalesTable);


