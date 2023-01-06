import React from 'react';
// import DummyImage from 'react-dummy-image';
//import classNames from 'classnames';

const Cover = ({cover}) => {
        return (
            // <img className="mt-4 mb-4" src={value} alt="" />

            <div className="section w-full h-screen">
                {/* <DummyImage text="Image" color="#101827" textColor="#9ca3af" className={'object-cover w-full h-full'} format={'png'} width={"1920"} height={"1050"} /> */}
                <img className="mt-4 mb-4" src={cover} alt="" />
            </div>
        )

};

export default Cover;