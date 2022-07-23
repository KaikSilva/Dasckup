import React from "react";
import {memo} from "react";
import {NavHeader, SidebarHeader} from "./components";

const Header = () => {
    return (
        <>
            <SidebarHeader/>
            <NavHeader/>
        </>
    );
}


export default Header;


