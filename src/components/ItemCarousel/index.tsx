import React from 'react';
import './ItemCarousel.css'
const ItemCarousel = ({children}: { children: JSX.Element }) => {
    return (
      <main className="ItemCarousel flex content-around">
          {children}
      </main>
    );
};

export {ItemCarousel};
