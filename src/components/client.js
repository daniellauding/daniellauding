import React, { useState, useCallback, useEffect } from 'react';
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
	const [selected, setCase] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);

	useEffect(() => {
		setCase(null);
		setAuthenticated(!item.protected);
	}, [item]);

	useEffect(() => {
		if (selectedCase) {
			setCase(selectedCase);
		}
	}, [selectedCase]);

	const clearSelected = useCallback(() => {
		setCase(null);
	}, []);

	if (selected) {
		return (
			<Case
				item={selected}
				clearActive={clearSelected}
				selectedChanged={selectedChanged}
				work={item}
				selectedCaseChanged={selectedCaseChanged}
			/>
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

			{!cases?.length && cases?.soon && (
				<>
					<Soon item={item} />
				</>
			)}

			{item?.soon && <Soon item={item} />}

			{!cases?.length < 1 && (
				<Protected item={item} onAuthenticated={setAuthenticated}>
					<div className="client-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden p-12">
						<div className="rounded-2xl overflow-hidden flex">
							{cases
								.filter((item) => item.index !== false)
								.map((item) => (
									<CaseSelector
										onSelect={setCase}
										key={item.id}
										item={item}
										work={item}
										clearActive={clearActive}
										selectedChanged={selectedChanged}
									/>
								))}
						</div>
					</div>
				</Protected>
			)}
		</div>
	);
};

export default Client;
