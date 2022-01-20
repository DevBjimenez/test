import React from 'react';
import {Carousel} from "@trendyol-js/react-carousel";
import {ArrowCarousel} from "../ArrowCarousel";

import './FooterHome.css'
import {ItemCarousel} from "../ItemCarousel";
import benefit1 from '../../assets/images/Frame 4.png'
import benefit2 from '../../assets/images/Frame 5.png'
import benefit3 from '../../assets/images/Frame 6.png'
import benefit4 from '../../assets/images/Frame 7.png'
import arrowLeft from '../../assets/images/Group 615.png'
import arrowRight from '../../assets/images/Group 616.png'
import instagramLogo from '../../assets/images/Group.svg'

interface Benefit {
    path: string,
    description?: string
}

const Benefits: Benefit[] = [
    {
        path: benefit1,
    },
    {
        path: benefit2,
    },
    {
        path: benefit3,
    },
    {
        path: benefit4,
    }
]
const FooterHome = () => {
    return (
        <main className="FooterHome content-around flex">
            <section className="FooterHome__content">
                <p className="FooterHome__content-text">Entre los <span>beneficios</span> que <br/>
                    <strong>ofrecemos</strong> se encuentran
                </p>
                <Carousel
                    leftArrow={<ArrowCarousel url={arrowLeft}/>}
                    rightArrow={<ArrowCarousel url={arrowRight}/>} show={3}
                    slide={2}>
                    {Benefits.map((item, index) =>
                        (<ItemCarousel key={index}>
                            <img src={item?.path} alt=""/>
                        </ItemCarousel>)
                    )}
                </Carousel>
                <p className="FooterHome__content-text-2">Gracias por <strong>completar el ejercicio</strong> que <br/>
                    <span>Te invitamos a ver mas información</span>
                </p>
                <div className="KnowMore flex content-around">
                    <section className="KnowMore__content flex flex-item-center">
                        <a target="_blank" rel="noopener" href="https://www.instagram.com/waconomads/">
                            <img className="KnowMore__content-img" src={instagramLogo} alt=""/>
                        </a>
                        <a target="_blank" rel="noopener" href="https://wacoservices.com/">
                            <button className="KnowMore__content-button">Conocer más</button>
                        </a>
                    </section>
                </div>
            </section>

        </main>
    );
};

export {FooterHome};
