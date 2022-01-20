import React from 'react';
import './Background.css'
const Background = ({children}: { children: JSX.Element }) => {
    return (
        <section id="content-background">
            <div id="up"></div>
            <div id="main">
                {children}
            </div>
        </section>
    );
};

export {Background};
