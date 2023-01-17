import React, { useState, useCallback } from 'react';
import CaseSelector, { Case } from './case';
import Soon from './soon';

const Client = ({ item, clearActive }) => {
	const { cases = [] } = item;
	const [selected, setCase] = useState(null);

	const clearSelected = useCallback(() => {
		setCase(null);
	}, []);

	if (selected) {
		return <Case item={selected} clearActive={clearSelected} />;
	}

	return (
		<div>
			<button
				onClick={clearActive}
				className="fixed top-8 left-8 pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light">
				← Back
			</button>
			{!cases?.length && <Soon item={item} />}
			{/* Visa "soon" om item.index !== false */}

			{!cases?.length < 1 && (
				<div className="case-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden">
					{cases
						.filter((item) => item.index !== false)
						.map((item) => (
							<CaseSelector
								onSelect={setCase}
								key={item.id}
								item={item}
								clearActive={clearActive}
							/>
						))}
				</div>
			)}
		</div>
	);
};

export default Client;
