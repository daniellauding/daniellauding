import React, { useState, useCallback, useEffect } from 'react';
import CaseSelector, { Case } from './case';
import Soon from './soon';
import Logo from './logo';
import classNames from 'classnames';

const Client = ({ item, clearActive, selectedCase, selectedChanged }) => {
	const { cases = [] } = item;
	const [selected, setCase] = useState(null);

	useEffect(() => {
		if (selectedCase) {
			setCase(selectedCase);
		}
	}, []);

	const clearSelected = useCallback(() => {
		setCase(null);
	}, []);

	if (selected) {
		return (
			<Case
				item={selected}
				clearActive={clearSelected}
				selectedChanged={selectedChanged}
			/>
		);
	}
	return (
		<div className="client-overview ">
			{!cases?.length && (
				<>
					<div className="client-header top-8 left-8 fixed flex flex-row p-6 gap-8">
						<Logo />
						<button
							onClick={clearActive}
							className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
						>
							← Back
						</button>
					</div>
					<Soon item={item} />
				</>
			)}
			{/* Visa "soon" om item.index !== false */}

			{!cases?.length < 1 && (
				<>
					<div className="client-header top-8 left-8 fixed flex flex-row p-6 gap-8">
						<Logo />
						<button
							onClick={clearActive}
							className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
						>
							← Back
						</button>

						{item?.client && (
							<h3
								className={classNames(
									`case-client pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold`
								)}
							>
								{item?.url ? (
									<a href={item?.url}>{item?.client}</a>
								) : (
									item?.client
								)}
							</h3>
						)}

						{item?.date && (
							<h3
								className={classNames(
									`case-date pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold`
								)}
							>
								{item?.date}
							</h3>
						)}

						{item?.role && (
							<h3
								className={classNames(
									`case-role pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold`
								)}
							>
								{item?.role}
							</h3>
						)}

						{item?.location && (
							<h3
								className={classNames(
									`case-location pt-0 mt-8 mb-2 text-4xl md:text-2xl text-left text-primary font-bold`
								)}
							>
								{item?.location}
							</h3>
						)}
					</div>
					<div className="case-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden">
						{cases
							.filter((item) => item.index !== false)
							.map((item) => (
								<CaseSelector
									onSelect={setCase}
									key={item.id}
									item={item}
									clearActive={clearActive}
									selectedChanged={selectedChanged}
								/>
							))}
					</div>
				</>
			)}
		</div>
	);
};

export default Client;
