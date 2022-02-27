import React from 'react';
import classNames from 'classnames';

const Slider = ({slides}) => {
	return (
		<div className={classNames('slider')}>
            {slides.map((slide, index) => (
                <div key={index}>
                    {slide.asset}
                </div>
            ))}
		</div>
	);
};

export default Slider;