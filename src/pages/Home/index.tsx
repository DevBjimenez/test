import React from 'react';
import './Home.css'
import {Rectangle} from "../../components/Rectangle";
import americaNew from '@assets/images/america-new.svg'
import {HeaderHome} from "../../components/HeaderHome";
import {FooterHome} from "../../components/FooterHome";



const HomePage = () => {
    return (
        <main className="home ">
           <HeaderHome/>
            <Rectangle render={() => (
                <div className="Rectangle__content">
                    <figure className="Rectangle__figure">
                        <img className="Rectangle__figure-image" src={americaNew} alt=""/>
                    </figure>
                </div>
            )}/>
            <FooterHome/>
        </main>
    );
};

export {HomePage};
