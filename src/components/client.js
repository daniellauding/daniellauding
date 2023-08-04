import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import CaseSelector, { Case } from './case';
import Soon from './soon';
import { NavClient } from './nav';

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
		<div className={classNames('client', `client-${item?.case}`)}>
			<NavClient
				item={item}
				clearActive={clearActive}
				selectedCase={selectedCase}
				selectedChanged={selectedChanged}
			/>

			{!cases?.length && cases?.soon && (
				<>
					<Soon item={item} />
				</>
			)}

			{item?.soon && <Soon item={item} />}

			{!cases?.length < 1 && (
				<div className="client-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden p-12">
					<div className="rounded-2xl overflow-hidden flex">
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
				</div>
			)}
		</div>
	);
};

export default Client;
