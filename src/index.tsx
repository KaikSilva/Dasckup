import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import './index.scss';
import Routers from "./router";
import Header from "./components/Main/Header";
import "antd/dist/antd.css";
import {AuthProvider} from "./context/AuthProvider";

ReactDOM.render(
    <AuthProvider>
        <Routers/>
    </AuthProvider>,
    document.getElementById('root')
);



