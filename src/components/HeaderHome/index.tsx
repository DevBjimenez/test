import React from 'react';
import wacoText from "@assets/images/WACO-TEXT.png";
import './HeaderHome.css'
const HeaderHome = () => {
    return (
        <>
            <div className=" content-around flex">
                <div className="home__message">
                    <div className="home__message-text">
                        Bienvenido a tu <br/>
                        <strong>Entrevista Tecnica</strong> en <br/>
                        <figure>
                            <img src={wacoText} alt=""/>
                        </figure>
                    </div>
                </div>

            </div>
        </>
    );
};

export {HeaderHome};
