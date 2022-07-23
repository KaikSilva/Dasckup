import React from "react";
import config from "config.json";

const date = new Date();

const Footer = () => {
    return (
        <footer className="page-footer">
            <p className="mb-0">© {date.getFullYear()} <a rel="noreferrer" className="text-primary" target="_blank" href={config.SITE_URL}>{config.NAME}</a> todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;

