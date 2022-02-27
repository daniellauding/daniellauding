import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

const Pagination = ({slides, activeSlide, setActiveSlide, index}) => {

	return (
		<div className="slide-pagination">
			<p className="slide-pagination-steps-overview">
				{index + 1} of {slides.length}
                {/* NaN of X */}
			</p>

			<ul
				className={classNames(
					`slides-steps`,
                    'flex flex-row gap-2',
				)}
			>
				{slides.map((slide, index) => (
					<li
						key={index}
						className={classNames(
							'slides-steps-step',
							`slides-steps-step-${index}`,
							{
								'slides-steps-step-active':
									activeSlide === index,
							},
						)}
					>
						<button
							type="button"
							role="tab"
							tabIndex="0"
							onClick={() => setActiveSlide(index)}
						>
                            <span
                                className="rounded-full bg-white w-4 h-4 flex"
                                //Sätt aktiv färg osv
                            />
                        </button>
					</li>
				))}
			</ul>
		</div>
	);
};

const Slider = ({slides, index}) => {
    const [activeSlide = 0, setActiveSlide] = useState(0);

    // const doAction = useCallback(
	// 	(button) => {
	// 		const { action } = button;
	// 		if (!action) {
	// 			return;
	// 		}
	// 		if (action === 'next') {
	// 			setActiveSlide(activeSlide + 1);
	// 		} else if (action === 'prev') {
	// 			setActiveSlide(activeSlide - 1);
	// 		}
	// 	},
	// 	[activeSlide],
	// );

	return (
		<div className={classNames('slider')}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={classNames(
                        'slider-item',
                        `slider-item-${index}`,
                        {
                            'slider-item-active': activeSlide === index,
                            'visible': activeSlide === index,
                            'hidden': activeSlide !== index,
                        },
                    )}
                >
                    <img src={slide.asset} alt="" />
                </div>
            ))}
            <Pagination
                activeSide={activeSlide}
                setActiveSlide={setActiveSlide}
                index={index}
                slides={slides}
            />

            {/* {question.navigation.map((button, index) => (
                <Button
                    key={index}
                    variant={button.variant}
                    label={button.label}
                    size={button.size}
                    onClick={() => doAction(button)}
                />
            ))} */}
		</div>
	);
};

export default Slider;