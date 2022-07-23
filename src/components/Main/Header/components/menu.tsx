import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {RiDashboard2Fill} from "react-icons/ri"
import {FaMoneyBillWave} from "react-icons/fa"
import {AiOutlineSmile} from "react-icons/ai"
import {TiChartAreaOutline} from "react-icons/ti"
import {
    FiShoppingBag,
    FiShoppingCart,
    FiTruck,
    FiLifeBuoy,
    FiCalendar,
    FiUsers,
    FiFlag,
    FiClipboard,
    FiHome,
    FiTrello,
    FiArchive, FiCornerDownRight, FiArrowRight, FiGrid, FiLayers, FiGitBranch, FiCoffee
} from "react-icons/fi"
import {TbDragDrop} from "react-icons/tb";

export function MenuHeader(){

    return (
        <main className="menuMalado">
            <li>
                <Link to="/" aria-expanded="false">
                    <div className="parent-icon"><FiHome/></div>
                    <div className="menu-title">Painel</div>
                </Link>
            </li>


            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon"><FiShoppingCart/></div>
                    <div className="menu-title">Vendas</div>
                </a>
                <ul className="mm-collapse">
                    <li>
                        <Link to="/vendas/todos"><FiArrowRight size={12} className="me-2"/> Todos
                        </Link>
                    </li>
                    <li>
                        <Link to="/vendas/novo"><FiArrowRight size={12} className="me-2"/> Adicionar novo
                        </Link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="javascript:;" className="has-arrow">
                    <div className="parent-icon"><TbDragDrop size={19}/></div>
                    <div className="menu-title">Leads</div>
                </a>
                <ul className="mm-collapse">
                    <li>
                        <Link to="/leads/todos/kanban"><FiArrowRight size={12} className="me-2"/> Todos
                        </Link>
                    </li>
                    <li>
                        <Link to="/leads/novo"><FiArrowRight size={12} className="me-2"/>Adicionar novo
                        </Link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon"><AiOutlineSmile/></div>
                    <div className="menu-title">Clientes</div>
                </a>
                <ul className="mm-collapse">
                    <li>
                        <Link to="/cliente/todos">
                            <FiArrowRight size={12} className="me-2"/>Todos
                        </Link>
                    </li>
                    <li>
                        <Link to="/cliente/novo" >
                            <FiArrowRight size={12} className="me-2"/>Adiconar Novo
                        </Link>
                    </li>
                </ul>
            </li>


            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon"><FiShoppingBag/></div>
                    <div className="menu-title">Produtos</div>
                </a>
                <ul className="mm-collapse">
                    <li>
                        <Link to="/produtos/todos">
                            <FiArrowRight size={12} className="me-2"/>Todos
                        </Link>
                    </li>
                    <li>
                        <Link to="/produtos/novo">
                            <FiArrowRight size={12} className="me-2"/>Adicionar Novo
                        </Link>
                    </li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <FiGrid/>
                            </div>
                            <div className="menu-title">Grupos de Itens</div>
                        </a>
                        <ul className="mm-collapse">
                            <li>
                                <Link to="produtos/grupos/todos">
                                    <FiArrowRight size={12} className="me-2"/>Todos
                                </Link>
                            </li>
                            <li>
                                <Link to="produtos/grupos/novo">
                                    <FiArrowRight size={12} className="me-2"/>Adicionar Novo
                                </Link>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <FiLayers/>
                            </div>
                            <div  className="menu-title">Atributos</div>
                        </a>
                        <ul className="mm-collapse">
                            <li>
                                <Link to="produtos/atributos/todos">
                                    <FiArrowRight size={12} className="me-2"/>Todos
                                </Link>
                            </li>
                            <li>
                                <Link to="produtos/atributos/novo">
                                    <FiArrowRight size={12} className="me-2"/>Adicionar Novo
                                </Link>
                            </li>
                        </ul>
                    </li>


                </ul>
            </li>


            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon">
                        <FiArchive/>
                    </div>
                    <div className="menu-title">Estoque</div>
                </a>
                <ul className="mm-collapse">
                    <li>
                        <Link to="/estoque/todos"><FiArrowRight size={12} className="me-2"/>Todos</Link>
                    </li>
                    <li>
                        <Link to="/item/todos">
                            <FiArrowRight size={12} className="me-2"/>Todos os Itens
                        </Link>
                    </li>
                    <li>
                        <Link to="/estoque/novo">
                            <FiArrowRight size={12} className="me-2"/>Adicionar Novo
                        </Link>
                    </li>
                </ul>
            </li>

            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon">
                        <FiTruck/>
                    </div>
                    <div className="menu-title">Transportadora</div>
                </a>
                <ul className="mm-collapse">
                    <li>
                        <Link to="/estoque/todos"><FiArrowRight size={12} className="me-2"/>Todos</Link>
                    </li>
                    <li>
                        <Link to="/item/todos">
                            <FiArrowRight size={12} className="me-2"/>Todos os Itens
                        </Link>
                    </li>
                    <li>
                        <Link to="/estoque/novo">
                            <FiArrowRight size={12} className="me-2"/>Adicionar Novo
                        </Link>
                    </li>
                </ul>
            </li>


            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon"><FiLifeBuoy/></div>
                    <div className="menu-title">Suporte</div>
                </a>
                <ul className="mm-collapse">
                </ul>
            </li>

            <li>
                <a href="https://dasckup.com/app/calendario" aria-expanded="false">
                    <div className="parent-icon"><FiCalendar/></div>
                    <div className="menu-title">Calendario</div>
                </a>
            </li>


            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon"><FiUsers/></div>
                    <div className="menu-title">Recursos Humanos</div>
                </a>
                <ul className="mm-collapse">
                    <li>
                        <Link to="/colaboradores/todos">
                            <FiArrowRight size={12} className="me-2"/>Todos
                        </Link>
                    </li>
                    <li>
                        <Link to="/colaboradores/novo">
                            <FiArrowRight size={12} className="me-2"/>Adicionar Novo
                        </Link>
                    </li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <FiGitBranch/>
                            </div>
                            <div className="menu-title">Departamentos</div>
                        </a>
                        <ul className="mm-collapse">
                            <li>
                                <Link to="/departamentos/todos"><FiArrowRight size={12} className="me-2"/>Todos</Link>
                            </li>
                            <li>
                                <Link to="/departamentos/novo"><FiArrowRight size={12} className="me-2"/>Adicionar Novo</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <FiFlag/>
                            </div>
                            <div className="menu-title">Setores</div>
                        </a>
                        <ul className="mm-collapse">
                            <li>
                                <Link to="/setor/todos">
                                    <FiArrowRight size={12} className="me-2"/>Todos
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="javascript:;" className="has-arrow">
                            <div className="parent-icon">
                                <FiCoffee/>
                            </div>
                            <div className="menu-title">Funções</div>
                        </a>
                        <ul className="mm-collapse">
                            <li>
                                <Link to="/funcoes/todos">
                                    <FiArrowRight size={12} className="me-2"/>Todos
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <a href="javascript:;" className="has-arrow" aria-expanded="false">
                    <div className="parent-icon"><FiFlag/></div>
                    <div className="menu-title">Empresa</div>
                </a>

                <ul className="mm-collapse">
                    <li>
                        <Link to="empresa/todos">
                            <FiArrowRight size={12} className="me-2"/>Todos
                        </Link>
                    </li>

                    <li>
                        <Link to="empresa/novo">
                            <FiArrowRight size={12} className="me-2"/>Adicionar novo
                        </Link>
                    </li>

                    <li>
                        <Link to="empresa/configuracao/">
                            <FiArrowRight size={12} className="me-2"/>Configurações
                        </Link>
                    </li>
                </ul>
            </li>


            <li>
                <Link to="/log" aria-expanded="false">
                    <div className="parent-icon"><FiClipboard/></div>
                    <div className="menu-title">Registro de Atividades</div>
                </Link>
            </li>
        </main>
    )
}