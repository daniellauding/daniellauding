import React, { useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
// import UIfx from 'uifx'
// import testAudio from '../sounds/test.wav'

// const test = new UIfx(
//   testAudio,
//   {
//     volume: 0.0, // number between 0.0 ~ 1.0
//     throttleMs: 100
//   }
// );

import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const Experience = ({ item, active, setActive, onHover }) => {
	const [isHovering, setIsHovering] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleMouseOver = () => {
		setIsHovering(true);
		// test.play();
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	const onClick = useCallback(
		(e) => {
			e.preventDefault();
			setActive(item?.id);
			// test.play();
		},
		[item, setActive]
	);

	const setPreview = useCallback(
		(e) => {
			e.stopPropagation();
			onHover(item);
		},
		[item, onHover]
	);

	const clearPreview = useCallback(
		(e) => {
			e.stopPropagation();
			onHover(null);
		},
		[onHover]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(
				(prevSlide) =>
					(prevSlide + 1) %
					(Array.isArray(item.thumbnail) ? item.thumbnail.length : 1)
			);
		}, 2000);

		return () => clearInterval(interval); // Clean up the interval
	}, [item.thumbnail]);

	return (
		<li
			key={item?.id}
			className={classNames(
				`experience grid grid-cols-4 grid-rows-1 group/item h-16 items-center transition-all h-16`,
				active
					? 'bg-gray-100 text-gray-900'
					: 'block h-4 py-2 text-sm text-gray-700',
				isHovering ? 'hovering cursor-pointer' : 'no-hover'
			)}
			onClick={onClick}
			onMouseEnter={setPreview}
			onMouseLeave={clearPreview}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<p
				className={classNames(
					`col-span-1 pt-0 mb-0 text-left text-2xl md:text-base md:font-medium h-full`
				)}
			>
				<a
					href={item?.url}
					onClick={onClick}
					className="flex items-center gap-2 px-4 h-full transition-all border-2 border-transparent light:text-primary light:group-hover/item:text-white light:group-hover/item:bg-primary dark:text-primary dark:group-hover/item:text-primary dark:group-hover/item:border-primary rounded-full w-fit"
				>
					{item?.client}

					<ArrowLongRightIcon className="h-5 w-5 invisible group-hover/item:visible" />
				</a>
			</p>
			<p className="col-span-2 pt-0 mb-0 md:ml-8 text-xs md:text-base md:text-left dark:text-gray-300 text-black lg:font-light">
				{item?.role}
			</p>
			<p className="col-span-1 pt-0 mb-0 ml-auto text-right text-xs md:text-base md:text-right dark:text-gray-300 text-black lg:font-light">
				{item?.date}
			</p>
			{isHovering && item.thumbnail && (
				<div className="fixed bottom-4 right-4 p-2 bg-white border rounded shadow w-96 h-64 z-10">
					{Array.isArray(item.thumbnail) ? (
						<img
							src={item.thumbnail[currentSlide]}
							alt={item.title}
							className="h-full mx-auto my-auto transform translate-x-0 transition-transform duration-300 ease-in-out"
						/>
					) : (
						<img
							src={item.thumbnail}
							alt={item.title}
							className="h-full mx-auto my-auto"
						/>
					)}
				</div>
			)}
			{/* <p className="pt-0 mb-0 fontregular text-center text-black lg:font-light">Add description here, problems, market, why, achivements</p> */}
		</li>
	);
};

export default Experience;
