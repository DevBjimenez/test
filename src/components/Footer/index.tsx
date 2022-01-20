import React from 'react';
import logo from "../../assets/images/logo-completo.svg"
import './Footer.css'
const Footer = () => {
    return (
        <main className="Footer flex content-around">
            <img className="Footer_img" src={logo} alt=""/>
        </main>
    );
};

export {Footer};
