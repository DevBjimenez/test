import { Outlet} from "react-router-dom";
import * as React from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {Background} from "../Background";

import './Layout.css'

function Layout() {

    return (
        <Background>
            <section className="Layout">
                <Header/>
                <main  className="Layout__main flex content-around">
                    <Outlet/>
                </main>
                <Footer/>
            </section>
        </Background>

    );
}

export {Layout}
