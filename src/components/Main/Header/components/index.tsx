import React from "react";
import {Link} from "react-router-dom";
import logo from "assets/web/images/logo/logo-dasckup.png";
import logoSmall from "assets/web/images/logo/logo-dasckupSmall.png";
import {MenuHeader} from "./menu";
import {useAuth} from "context/AuthProvider/useAuth";
import {
    FiBell,
    FiCalendar,
    FiClipboard,
    FiFolder, FiLifeBuoy, FiMenu, FiMessageCircle,
    FiMoon, FiPhoneCall, FiPieChart,
    FiSearch,
    FiShoppingCart,
    FiSmile,
    FiSun, FiTag,
    FiTool, FiTrello,
    FiUsers
} from "react-icons/fi";
import {TbListSearch} from "react-icons/tb";
import {BiArrowToLeft, BiRun} from "react-icons/bi";
import {FaRunning} from "react-icons/fa";



export function HeaderLogo(){
    return (
        <div className="sidebar-header">
            <div className="padding-10">
                <img src={logo} className="logo-icon" alt="logo icon" />
            </div>
            <div>
                <img src={logoSmall} className="logo-icon small-logo" alt="logo icon"/>
            </div>
            <div className="toggle-icon ms-auto padding-10">
                <BiArrowToLeft/>
            </div>
        </div>
    )
}

export function BuscadorHeader(){
    return (
        <li className="label-input-search-header">
            <input type="text" name="" id="" placeholder="Buscar menu" className="form-control mb-2 search-header" /><TbListSearch size={17} color="var(--bs-primary)" className="SearchIconHeader"/>
            <div className="parent-icon icon-search-header text-center">
                <FiSearch  size={18}/>
            </div>
        </li>
    )
}

export function ButtonBuscadorHeaderClient(){
    return (
        <li className="nav-item mobile-search-icon">
            <a className="nav-link " href="#">
                <FiSearch size={18} color="var(--bs-primary)"/>
            </a>
        </li>
    )
}

export function BuscadorHeaderClient(){
    return (
        <div className="position-relative search-bar-box">
            <form>
                <input type="text" className="form-control search-control" autoFocus
                       placeholder="Type to search..." /> <span
                className="position-absolute top-50 search-show translate-middle-y"><i
                className='bx bx-search'></i></span>
                <span className="position-absolute top-50 search-close translate-middle-y"><i
                    className='bx bx-x'></i></span>
            </form>
        </div>
    )
}

export function EasyLinks(){
    return (
        <ul className="nav">

            <li className="nav-item">
                <Link to="/vendas/todos" className="nav-link">
                    <FiShoppingCart size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="cliente/todos">
                    <FiSmile size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/leads/todos/kanban">
                    <FiTrello size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/suporte/">
                    <FiLifeBuoy size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/calendario">
                    <FiCalendar size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/">
                    <FiPieChart size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/produtos/todos">
                    <FiTag size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to="/colaboradores/todos">
                    <FiUsers size={18} color="var(--bs-primary)"/>
                </Link>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#">
                    <FiSun size={18} color="var(--bs-primary)"/>
                </a>
            </li>
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link " href="#"><FiMoon size={19}/></a>*/}
            {/*</li>*/}
            {/*<FiSun size={18}/>*/}
        </ul>
    )
}

export function NotificationsHeader(){
    return (
        <li className="nav-item dropdown dropdown-large">
            <a className="nav-link position-relative " href="#"
               id="BellDropdown" data-bs-toggle="dropdown" aria-expanded="false"> <span
                className="alert-count">7</span>
                <FiBell size={18} color="var(--bs-primary)"/>
            </a>
            <div className="dropdown-menu" aria-labelledby="BellDropdown">
                <a href="#">
                    <div className="msg-header">
                        <p className="msg-header-title">Notifications</p>
                        <p className="msg-header-clear ms-auto">Marks all as read</p>
                    </div>
                </a>
                <div className="header-notifications-list">
                </div>
                <a href="#">
                    <div className="text-center msg-footer">View All Notifications</div>
                </a>
            </div>
        </li>
    )
}

export function MessagesHeader(){
    return (
        <li className="nav-item dropdown dropdown-large">
            <a className="nav-link dropdown-toggle-nocaret position-relative "
               href="#" id="commentDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="alert-count">8</span>
                <FiMessageCircle size={18} color="var(--bs-primary)"/>
            </a>
            <div className="dropdown-menu" aria-labelledby="commentDropdown">
                <a href="#">
                    <div className="msg-header">
                        <p className="msg-header-title">Messages</p>
                        <p className="msg-header-clear ms-auto">Marks all as read</p>
                    </div>
                </a>
                <div className="header-message-list">
                </div>
                <a href="#">
                    <div className="text-center msg-footer">View All Messages</div>
                </a>
            </div>
        </li>
    )
}

export function UserHeaderView(){
    return (
        <div className="user-box dropdown">
            <a href="#" className="d-flex align-items-center nav-link" id="showMiniMenu"
               data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://dasckup.com/app/frontend/assets/images/explorer/1655315140.png"
                     className="user-img" alt="user avatar" />
                <div className="user-info">
                    <p className="user-name mb-0 ">
                        Kaik Silva
                        <i className=" text-warning lni lni-crown"></i>
                    </p>
                    <p className="designattion mb-0">Admin-master</p>
                </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/minha-conta">
                        <FiUsers size={14}/><span className="ms-2">Minha conta</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/arquivos">
                        <FiFolder size={14}/><span className="ms-2">Meus Arquivos</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/cliente">
                        <FiSmile size={14}/><span className="ms-2">Clientes</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/empresas/config">
                        <FiTool size={14}/><span className="ms-2">Configurações</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/vendas/pedidos">
                        <FiShoppingCart size={14}/><span className="ms-2">Pedidos</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/log">
                        <FiClipboard size={14}/><span className="ms-2">Registro de Atividades</span>
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/calendario">
                        <FiCalendar size={14}/><span className="ms-2">Calendário</span></a>
                </li>
                <li>
                    <a className="dropdown-item" href="https://dasckup.com/app/log">
                        <FiPhoneCall size={14}/><span className="ms-2">Meus contatos</span>
                    </a>
                </li>
                <li>
                    <div className="dropdown-divider mb-0"></div>
                </li>
                <li className="mt-1 mb-1">
                    <Link className="dropdown-item" to="/sair">
                        <FaRunning size={16}/><span className="ms-2">Sair</span></Link>
                </li>
            </ul>
        </div>
    )
}

export function SidebarHeader(){
    return (
        <div className="sidebar-wrapper" data-simplebar="true">
            <HeaderLogo/>

            <ul className="metismenu mm-show" id="menu">
                <BuscadorHeader/>
                <MenuHeader/>
            </ul>
            <div className="MyCompanies d-flex">
                <img src="https://dasckup.com/app/frontend/assets/images/explorer/1653940085.png" className="user-img"
                     alt="user avatar"/>
                <div className="user-info nome-empresa-atual-header ps-2">
                    <p className="user-name mb-0 ">Núcleo do Conhecimento</p>
                    <p className="designattion mb-0">44.381.853/0001-96</p>
                </div>
            </div>
        </div>
    )
}

export function NavHeader(){
    return (
        <header>
            <div className="topbar d-flex align-items-center shadow-none">
                <nav className="navbar navbar-expand">
                    <div className="mobile-toggle-menu  me-3">
                        <FiMenu color="var(--bs-primary)" size={18}/>
                    </div>
                    <div className="top-menu-left d-none d-lg-block">
                        <EasyLinks/>
                    </div>
                    <div className="search-bar flex-grow-1">
                        <BuscadorHeaderClient/>
                    </div>

                    <div className="top-menu ms-auto">
                        <ul className="navbar-nav align-items-center">
                            <ButtonBuscadorHeaderClient/>
                            <NotificationsHeader/>
                            <MessagesHeader/>
                        </ul>
                    </div>
                    <UserHeaderView/>
                </nav>
            </div>
        </header>
    )
}
