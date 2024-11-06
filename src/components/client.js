import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames';
import CaseSelector, { Case } from './case';
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
	const [authenticated, setAuthenticated] = useState(false);
	const sliderRef = useRef(null);
	const [scrollX, setScrollX] = useState(0);

	useEffect(() => {
		setAuthenticated(!item.protected);
	}, [item]);

	const scrollToNextCase = (direction) => {
		const container = sliderRef.current;
		if (!container) return;

		const caseWidth =
			container.querySelector('.case-wrapper')?.offsetWidth || 0;
		const isAtEnd =
			scrollX + container.clientWidth >= container.scrollWidth;

		let targetScrollX;

		if (direction === 'left') {
			targetScrollX = Math.max(scrollX - caseWidth, 0);
		} else if (direction === 'right') {
			targetScrollX = isAtEnd
				? 0
				: Math.min(
						scrollX + caseWidth,
						container.scrollWidth - container.clientWidth
				  );
		}

		container.scrollTo({
			left: targetScrollX,
			behavior: 'smooth',
		});
		setScrollX(targetScrollX);
	};

	// If only one case, render Case component directly
	if (cases.length === 1) {
		const clientCase = cases[0];
		return (
			<div
				className={classNames(
					'client-single',
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
				<Protected item={item} onAuthenticated={setAuthenticated}>
					<Case
						item={clientCase}
						work={item}
						clearActive={clearActive}
						selectedChanged={selectedChanged}
						selectedCaseChanged={selectedCaseChanged}
					/>
				</Protected>
			</div>
		);
	}

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

			{cases.length > 0 && (
				<Protected item={item} onAuthenticated={setAuthenticated}>
					<div className="client-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden p-12">
						{/* Left Arrow */}
						{cases.length > 3 && scrollX > 0 && (
							<div
								className="absolute left-0 top-0 bottom-0 w-10 h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
								onClick={() => scrollToNextCase('left')}
							>
								<button className="text-white text-3xl">
									&#9664;
								</button>
							</div>
						)}
						<div
							className="slider-container flex space-x-4 px-4 py-4"
							style={{ transform: `translateX(-${scrollX}px)` }}
							ref={sliderRef}
						>
							{cases.map((clientCase) => (
								<CaseSelector
									key={clientCase.id}
									client={item}
									clientCase={clientCase}
									clearActive={clearActive}
									selectedChanged={selectedChanged}
								/>
							))}
						</div>
						{/* Right Arrow - Always show */}
						{cases.length > 3 && (
							<div
								className="absolute right-0 top-0 bottom-0 w-10 h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
								onClick={() => scrollToNextCase('right')}
							>
								<button className="text-white text-3xl">
									&#9654;
								</button>
							</div>
						)}
					</div>
				</Protected>
			)}
		</div>
	);
};

export default Client;
