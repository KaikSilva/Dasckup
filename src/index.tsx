import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import './index.css';
import Routers from "./router";

ReactDOM.render(
    <React.StrictMode>
        <Routers/>
    </React.StrictMode>,
    document.getElementById('root')
);



