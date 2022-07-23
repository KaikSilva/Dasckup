import React , {memo} from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";
import Notfound from "./components/Main/Notfound";
import Home from "./pages/Home";
import Sales, {NewSales} from "./pages/Sales";
import Client , {NewClient} from "./pages/Client";
import {Users , Users_create}  from "./pages/Users";
import Products, {NewProduct} from "./pages/Products";
import Inventory, {NewInventory} from "./pages/Inventory";
import Companies, {NewCompanies} from "./pages/Companies";
import Login, {Sair} from "./pages/Login";
import {ProtectLayout} from "./components/ProtectLayout";
import {getUserLocalStorage} from "./context/AuthProvider/util";
import GroupOfItems, {NewGroupOfItems} from "./pages/Products/GroupOfItems";
import Attributes, {NewAttributes} from "./pages/Products/Attributes";
import ConfigIndex from "./pages/Companies/Config";
import LeadsKanban, {NewLeads} from "./pages/Leads";



function Routers() {
    const auth = getUserLocalStorage()

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="wrapper">

                {
                !auth ?
                    <></>
                    :
                    <Header/>
                }
                <Routes>

                    <Route>
                        {
                            !auth?
                            <Route path='/' element={<Login/>} />
                            :
                            <Route path='/' element={<Home/>} />
                        }

                        <Route path='/sair' element={<Sair/>} />

                        /**
                        Vendas
                        */
                        <Route path='/vendas/' >
                            <Route path='novo' element={<NewSales/>} />
                            <Route path='todos' element={<Sales/>} />
                        </Route>

                        /**
                        Vendas
                        */
                        <Route path='/leads/' >
                            <Route path='todos/kanban' element={<LeadsKanban/>} />
                            <Route path='novo' element={<NewLeads/>} />
                        </Route>

                        /**
                        Clientes
                        */
                        <Route path='/cliente/'>
                            <Route path='todos' element={<Client/>} />
                            <Route path='novo' element={<NewClient/>} />
                        </Route>

                        /**
                        Users
                        */
                        <Route path='/colaboradores/'>
                            <Route path='todos' element={<Users/>} />
                            <Route path='novo' element={<Users_create/>} />
                        </Route>

                        /**
                        Produtos
                        */
                        <Route path='/produtos/'>
                            <Route path='todos' element={<Products/>} />
                            <Route path='novo' element={<NewProduct/>} />

                            <Route path='grupos/'>
                                <Route path='todos' element={<GroupOfItems/>} />
                                <Route path='novo' element={<NewGroupOfItems/>} />
                            </Route>

                            <Route path='atributos/'>
                                <Route path='todos' element={<Attributes/>} />
                                <Route path='novo' element={<NewAttributes/>} />
                            </Route>
                        </Route>

                        /**
                        Estoque
                        */
                        <Route path='/estoque/'>
                            <Route path='todos' element={<Inventory/>} />
                            <Route path='novo' element={<NewInventory/>} />

                        </Route>

                        /**
                        Empresa
                        */
                        <Route path='/empresa/'>
                            <Route path='todos' element={<Companies/>} />
                            <Route path='novo' element={<NewCompanies/>} />

                            <Route path='configuracao/'>
                                <Route index element={<ConfigIndex/>} />
                            </Route>

                        </Route>


                        /**
                        NotFound
                        */
                        <Route path='*' element={<Notfound/>} />
                    </Route>


                </Routes>

                {
                !auth ?
                    <></>
                    :
                    <Footer/>
                }
            </div>
        </Router>
    )
}

export default memo(Routers)
