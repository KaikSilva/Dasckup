import React from 'react'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";
import Notfound from "./components/Main/Notfound";
import Home from "./pages/Home";
import Sales from "./pages/Sales";

function Routers() {

    return (
        <Router>
            <Header/>
            <Routes>

                /**
                Home
                */
                <Route path='/' element={<Home/>} />

                /**
                Vendas
                */
                <Route path='/vendas/todos' element={<Sales/>} />












                /**
                NotFound
                */
                <Route path='*' element={<Notfound/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routers
