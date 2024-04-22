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

import { useLocation, useNavigate } from 'react-router-dom';

import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

const Experience = ({ item, onHover }) => {
	const [isHovering, setIsHovering] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);

	const handleMouseOver = () => {
		setIsHovering(true);
		// test.play();
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	const navigate = useNavigate();

	const onClick = useCallback(
		(e) => {
			// Prevent the default action to handle it manually
			e.preventDefault();
			// Check if the item is marked as external
			if (item?.isExternal) {
				// Open the URL in a new tab
				window.open(item.url, '_blank');
			} else {
				// Set the active item as before
				// setActive(item?.id);
				navigate(`/${item.slug}`);
			}
			// Optionally play a sound or perform other actions here
			// test.play();
		},
		[item, navigate]
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

	const location = useLocation();

	return (
		<li
			key={item?.id}
			className={classNames(
				`experience grid grid-cols-3 sm:grid-cols-4 grid-rows-2 md:grid-rows-1 grid-rows-1 group/item items-center transition-all h-16 gap-2 sm:gap-0`,
				location.pathname === `/${item.slug}`
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
					`col-span-1 pt-0 mb-0 text-left text-2xl md:text-base md:font-medium h-full row-start-1 md:row-start-1 md:row-end-1`
				)}
			>
				<span className="flex items-center gap-2 sm:px-4 h-full transition-all border-2 border-transparent light:text-primary light:group-hover/item:border-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary dark:group-hover/item:border-primary light:hover:bg-primary light:hover:text-white rounded-full min-w-max sm:w-fit">
					{item?.client}

					<ArrowLongRightIcon className="h-5 w-5 invisible group-hover/item:visible" />
				</span>
			</p>
			<p className="col-span-2 pt-0 mb-0 md:ml-8 text-xs md:text-base md:text-left dark:text-gray-300 text-black lg:font-light row-start-2 md:row-start-1 md:row-end-1 min-w-max">
				{item?.role}
			</p>
			<p className="col-span-1 pt-0 mb-0 ml-auto text-right text-xs md:text-base md:text-right dark:text-gray-300 text-black lg:font-light row-start-2 md:row-start-1 md:row-end-1 col-start-4 min-w-max">
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
