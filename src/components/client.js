import React, { useState, useCallback, useEffect } from 'react';
import CaseSelector, { Case } from './case';
import Soon from './soon';
import Logo from './logo';
import Select from './select';
import classNames from 'classnames';
import { work } from '../constant';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Tooltip from './tooltip';

// const clients = [
// 	{ key: '1', text: 'Option 1', value: 'option_1' },
// 	{ key: '2', text: 'Option 2', value: 'option_2' },
// 	{ key: '3', text: 'Option 3', value: 'option_3' },
// ];

const Client = ({ item, clearActive, selectedCase, selectedChanged }) => {
	const clients = work.filter((item) => item.index !== false);
	// console.log('clients loop', clients);

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

	const nextClient = () => {
		const handleNextClient = (item.id + 1) % clients.length;
		setCase(handleNextClient);
		console.log('nästa kund', handleNextClient);
	};

	const prevClient = () => {
		const handlePrevClient = (item.id - 1) % clients.length;
		setCase(handlePrevClient);
		console.log('nästa kund', handlePrevClient);
	};

	if (selected) {
		return (
			<Case
				item={selected}
				clearActive={clearSelected}
				selectedChanged={selectedChanged}
			/>
		);
	}

	console.log('vart är vi nu', item);
	console.log('nästa kund är', item);
	console.log(
		'föregående kund är',
		clients.map((client, index) => clients[index - 1])
	);

	return (
		<div className="case-overview ">
			<div className="case-header top-0 left-0 fixed flex flex-row p-0 gap-8 w-full pr-12 bg-black items-center">
				<div className="app-logo flex flex-row items-center">
					<button
						onClick={clearActive}
						className="pt-0 mb-0 mt-0 w-12 h-16 align-end justify-center text-right dark:text-gray-500 text-black text-base lg:font-light"
					>
						←
					</button>
					<Logo />
				</div>

				{item?.client && (
					<h3
						className={classNames(
							`case-client text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
						)}
					>
						<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
							Client
						</span>
						<Select
							options={clients}
							option={item}
							onSelect={selectedChanged}
						/>
						{/* {item?.url ? (
									<a href={item?.url}>{item?.client}</a>
								) : (
									item?.client
								)} */}
					</h3>
				)}

				<div className="case-client-selector flex flex-row">
					<Tooltip
						content={`Go to prev client ${item.client}`}
						direction="top"
					>
						<button
							className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
							onClick={prevClient}
						>
							<ArrowLeftIcon className="h-5 w-5 text-white" />
						</button>
					</Tooltip>
					<Tooltip
						content={`Go to next client ${item.client}`}
						direction="top"
					>
						<button
							className="pt-0 mb-0 mt-0 text-center dark:text-gray-500 text-black text-sm lg:font-light"
							onClick={nextClient}
						>
							<ArrowRightIcon className="h-5 w-5 text-white" />
						</button>
					</Tooltip>
				</div>

				{item?.role && (
					<h3
						className={classNames(
							`case-role text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
						)}
					>
						<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
							Role
						</span>
						{item?.role}
					</h3>
				)}
				<h3
					className={classNames(
						`case-cases text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
					)}
				>
					<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
						Cases
					</span>
					{
						cases.filter((c) => {
							return c.index !== false;
						}).length
					}
				</h3>
				{/* .filter((item) => item.index !== false) */}
				{item?.location && (
					<h3
						className={classNames(
							`case-location text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start ml-auto`
						)}
					>
						<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
							Location
						</span>
						{item?.location}
					</h3>
				)}
				{item?.date && (
					<h3
						className={classNames(
							`case-date text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
						)}
					>
						<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
							Date
						</span>
						{item?.date}
					</h3>
				)}
			</div>

			{!cases?.length && (
				<>
					<Soon item={item} />
				</>
			)}

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
								selectedChanged={selectedChanged}
							/>
						))}
				</div>
			)}
		</div>
	);
};

export default Client;
