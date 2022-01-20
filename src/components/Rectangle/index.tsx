import React from 'react';
import './Rectangle.css'

const Rectangle = ({render}: Props) => {
    return <div className="Rectangle flex content-around">
        {render()}
    </div>;
};

type Props = {
    render: () => JSX.Element
}

export {Rectangle};
