import React from 'react';
import './ArrowCarousel.css'
const ArrowCarousel = ({url}: {url: string}) => {
    return (
        <div className="ArrowCarousel">
            <img className="ArrowCarousel__img" src={url} alt=""/>
        </div>
    );
};

export {ArrowCarousel};
