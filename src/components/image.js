import React from 'react';
//import classNames from 'classnames';

const Image = ({value, style}) => {
        if (style === 'cover') {
            return (
                <div className="section w-full h-screen">
                    <img className="mt-4 mb-4" src={value} alt="" />
                </div>
            )
        }

        return (
            <img className="mt-4 mb-4" src={value} alt="" />
        )

};

export default Image;