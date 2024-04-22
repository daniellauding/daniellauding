import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import CaseSelector from './case';
import Soon from './soon';
import Protected from './protected';
import { NavClient } from './nav';

const Client = ({
	item,
	clearActive,
	selectedCase,
	selectedChanged,
	selectedCaseChanged,
}) => {
	const { cases = [] } = item;
	// const [selected, setCase] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);
	const sliderRef = useRef(null);
	const [scrollX, setScrollX] = useState(0);
	const step = 300; // Adjust this value to control the scroll step

	useEffect(() => {
		// setCase(null);
		setAuthenticated(!item.protected);
	}, [item]);

	// useEffect(() => {
	// 	if (selectedCase) {
	// 		setCase(selectedCase);
	// 	}
	// }, [selectedCase]);

	useEffect(() => {
		const container = sliderRef.current;

		const handleScroll = () => {
			setScrollX(container.scrollLeft);
		};

		if (container) {
			container.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (container) {
				container.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);

	const scrollToClosestCase = (direction) => {
		const container = sliderRef.current;
		const currentScrollX = container.scrollLeft;
		const scrollPositions = Array.from(
			container.querySelectorAll('.case-wrapper')
		).map((element) => element.offsetLeft);

		let targetScrollX;

		if (direction === 'left') {
			// Find the closest element to the left
			const closestToLeft = scrollPositions
				.filter((position) => position < currentScrollX)
				.reduce((a, b) => Math.max(a, b), -Infinity);

			targetScrollX = closestToLeft;
		} else if (direction === 'right') {
			// Find the closest element to the right
			const closestToRight = scrollPositions
				.filter((position) => position > currentScrollX)
				.reduce((a, b) => Math.min(a, b), Infinity);

			targetScrollX = closestToRight + step;
		}

		if (targetScrollX !== undefined) {
			container.scrollTo({
				left: targetScrollX,
				behavior: 'smooth', // You can change this to 'auto' for instant scroll
			});

			// Update the scrollX state
			setScrollX(targetScrollX);
		}
	};

	// const clearSelected = useCallback(() => {
	// 	setCase(null);
	// }, []);

	// if (selected) {
	// 	return (
	// 		<Case
	// 			item={selected}
	// 			clearActive={clearSelected}
	// 			selectedChanged={selectedChanged}
	// 			work={item}
	// 			selectedCaseChanged={selectedCaseChanged}
	// 		/>
	// 	);
	// }

	// Render directly if there's only one case
	// if (cases.length === 1) {
	// 	const singleCase = cases[0];
	// 	return (
	// 		<Case
	// 			item={singleCase}
	// 			// clearActive={clearSelected}
	// 			selectedChanged={selectedChanged}
	// 			work={item}
	// 			selectedCaseChanged={selectedCaseChanged}
	// 		/>
	// 	);
	// }

	return (
		<div
			className={classNames(
				'client',
				`client-${item?.client.toLowerCase?.()}`
			)}
		>
			<NavClient
				item={item}
				clearActive={clearActive}
				selectedCase={selectedCase}
				selectedChanged={selectedChanged}
				selectedCaseChanged={selectedCaseChanged}
				workCase={selectedCase}
				authenticated={authenticated}
			/>

			{!cases?.length && cases?.soon && <Soon item={item} />}

			{item?.soon && <Soon item={item} />}

			{!cases?.length < 1 && (
				<Protected item={item} onAuthenticated={setAuthenticated}>
					<div className="client-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden p-12">
						<div
							className="absolute left-0 top-0 bottom-0 w-10 h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
							onClick={() => scrollToClosestCase('left')}
						>
							<button className="text-white text-3xl">
								&#9664;
							</button>
						</div>
						<div
							className="slider-container flex space-x-4 px-4 py-4 overflow-x-auto"
							style={{ transform: `translateX(-${scrollX}px)` }}
							ref={sliderRef}
						>
							{cases
								.filter((item) => item.index !== false)
								.map((clientCase) => (
									<CaseSelector
										// onSelect={setCase}
										key={clientCase.id}
										// item={item}
										// work={item}
										client={item}
										clientCase={clientCase}
										clearActive={clearActive}
										selectedChanged={selectedChanged}
									/>
								))}
						</div>
						<div
							className="absolute right-0 top-0 bottom-0 w-10 h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
							onClick={() => scrollToClosestCase('right')}
						>
							<button className="text-white text-3xl">
								&#9654;
							</button>
						</div>
					</div>
				</Protected>
			)}
		</div>
	);
};

export default Client;
