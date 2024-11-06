import React, { useMemo, useState } from 'react';
import Logo from './logo';
import Select from './select';
import classNames from 'classnames';
import { work } from '../constant';
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	Bars3BottomRightIcon,
	ArrowLongLeftIcon,
	XMarkIcon,
} from '@heroicons/react/24/solid';
import Tooltip from './tooltip';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const navigate = useNavigate();

	return (
		<div className="navigation z-30 relative">
			<div
				className={classNames(
					'top-2 fixed flex flex-row py-0 px-8 bg-black items-center rounded-full shadow left-1/2 -translate-x-1/2 h-20 sm:h-24 overflow-hidden'
				)}
			>
				<div className="app-logo flex flex-row items-center gap-4 sm:gap-0">
					<Tooltip content="Back to overview" direction="top">
						<button
							onClick={() => navigate(-1)}
							className="pt-0 mb-0 mt-0 items-center text-center dark:text-gray-500 text-black text-base lg:font-light"
						>
							<ArrowLongLeftIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
						</button>
					</Tooltip>

					{/* <Logo /> */}

					<Logo />

					{/* <Avatar className="w-96 h-96 rounded-full overflow-hidden" /> */}
					{/* <Logo className="w-96 h-96" /> */}

					{/* {setShowProfile && (
						<>
							<button
								onClick={() => setShowOffert(true)}
								className="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full"
							>
								Ive got a project
							</button>

							<button
								onClick={() => setShowContact(true)}
								className="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full"
							>
								Contact me
							</button>
						</>
					)} */}

					{/* {showExperiencesFull ? (
						<button
							onClick={() => setShowExperiencesFull(false)}
							className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
						>
							<XMarkIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
						</button>
					) : (
						<button
							onClick={() => setShowExperiencesFull(true)}
							className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
						>
							<Bars3BottomRightIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
						</button>
					)} */}
				</div>
			</div>
		</div>
	);
};

const NavClient = ({
	workCase,
	item,
	selectedChanged,
	selectedCaseChanged,
	authenticated,
}) => {
	const clients = work.filter(
		(item) => item.index !== false && !item.isExternal
	);
	const currIndex = clients.findIndex((c) => c === item);
	const prevIndex = currIndex > 0 ? currIndex - 1 : clients.length - 1;
	const nextIndex = (currIndex + 1) % clients.length;

	const { cases = [] } = item;

	const [toggleNav, setToggleNav] = useState(false);

	const nextClient = () => {
		if (selectedChanged) {
			const nextClientId = clients[nextIndex]?.id;
			console.log('Next client:', nextClientId);
			selectedChanged(nextClientId);
		}
	};

	const prevClient = () => {
		if (selectedChanged) {
			const prevClientId = clients[prevIndex]?.id;
			console.log('Previous client:', prevClientId);
			selectedChanged(prevClientId);
		}
	};

	const handleClientSelect = (value) => {
		if (selectedChanged) {
			console.log('Selected client from dropdown:', value);
			selectedChanged(value);
		}
	};

	const handleCaseSelect = (selectedCase) => {
		if (selectedCaseChanged) {
			console.log('Selected case from dropdown:', selectedCase);
			selectedCaseChanged(selectedCase);
		}
	};

	const casesOptions = useMemo(() => {
		const filteredCases = cases.filter((item) => item.index !== false);
		// If we have no filtered cases but have a workCase, include it
		if (filteredCases.length === 0 && workCase) {
			return [
				{
					value: workCase.id,
					label: workCase.title,
				},
			];
		}
		return filteredCases.map((caseItem) => ({
			value: caseItem.id,
			label: caseItem.title,
		}));
	}, [cases, workCase]);

	const selectedCaseOption = useMemo(() => {
		if (workCase) {
			return {
				value: workCase.id,
				label: workCase.title,
			};
		}
		// If we have only one case, select it by default
		if (casesOptions.length === 1) {
			return casesOptions[0];
		}
		return null;
	}, [workCase, casesOptions]);

	const navigate = useNavigate();

	// Add case navigation handlers
	const handleNextCase = () => {
		const filteredCases = cases.filter((c) => c.index !== false);
		if (!filteredCases.length || filteredCases.length === 1) return;

		const currentCaseIndex = filteredCases.findIndex(
			(c) => c.id === workCase?.id
		);

		// If current case not found or at the end, go to first case
		const nextCaseIndex =
			currentCaseIndex === -1 ||
			currentCaseIndex === filteredCases.length - 1
				? 0
				: currentCaseIndex + 1;

		const nextCase = filteredCases[nextCaseIndex];

		if (nextCase?.id && selectedCaseChanged) {
			console.log(
				'Next case:',
				nextCase.id,
				'Current index:',
				currentCaseIndex,
				'Next index:',
				nextCaseIndex,
				'Total cases:',
				filteredCases.length,
				'Current cases:',
				filteredCases.map((c) => c.title)
			);
			selectedCaseChanged(nextCase.id);
		}
	};

	const handlePrevCase = () => {
		const filteredCases = cases.filter((c) => c.index !== false);
		if (!filteredCases.length || filteredCases.length === 1) return;

		const currentCaseIndex = filteredCases.findIndex(
			(c) => c.id === workCase?.id
		);

		// If current case not found or at the beginning, go to last case
		const prevCaseIndex =
			currentCaseIndex <= 0
				? filteredCases.length - 1
				: currentCaseIndex - 1;

		const prevCase = filteredCases[prevCaseIndex];

		if (prevCase?.id && selectedCaseChanged) {
			console.log(
				'Previous case:',
				prevCase.id,
				'Current index:',
				currentCaseIndex,
				'Prev index:',
				prevCaseIndex,
				'Total cases:',
				filteredCases.length,
				'Current cases:',
				filteredCases.map((c) => c.title)
			);
			selectedCaseChanged(prevCase.id);
		}
	};

	// Add a check for single case
	const hasMultipleCases = useMemo(() => {
		const filteredCases = cases.filter((c) => c.index !== false);
		return filteredCases.length > 1;
	}, [cases]);

	return (
		<div className="navigation z-30 relative">
			<div
				className={classNames(
					'nav top-2 fixed flex flex-row py-0 px-8 bg-black items-center rounded-full shadow left-1/2 -translate-x-1/2 h-20 sm:h-24 overflow-hidden',
					toggleNav ? 'w-full mx-auto rounded-none' : ''
				)}
			>
				<div className="app-logo flex flex-row items-center gap-4 sm:gap-0">
					<Tooltip content="Back to overview" direction="top">
						<button
							onClick={() => navigate(-1)}
							className="pt-0 mb-0 mt-0 items-center text-center dark:text-gray-500 text-black text-base lg:font-light"
						>
							<ArrowLongLeftIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
						</button>
					</Tooltip>
					<Logo />
					{!toggleNav && (
						<Tooltip content="Navgation" direction="top">
							<button
								className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
								onClick={() => setToggleNav(!toggleNav)}
							>
								<Bars3BottomRightIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
							</button>
						</Tooltip>
					)}
				</div>

				<div
					className={classNames(
						'client-overview w-full gap-8',
						toggleNav ? 'flex' : 'hidden'
					)}
				>
					{item?.client && (
						<div
							className={classNames(
								`client-client flex flex-row items-start gap-8`
							)}
						>
							<div className="flex flex-col items-center">
								<div className="flex items-center w-full">
									<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase mr-auto">
										Client
									</span>
									<div className="flex ml-auto gap-1">
										<Tooltip
											content={`Previous client`}
											direction="top"
										>
											<button
												className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
												onClick={prevClient}
											>
												<ArrowLeftIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
											</button>
										</Tooltip>
										<Tooltip
											content={`Next client`}
											direction="top"
										>
											<button
												className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
												onClick={nextClient}
											>
												<ArrowRightIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
											</button>
										</Tooltip>
									</div>
								</div>
								<Select
									options={clients.map((client) => ({
										value: client.id,
										label: client.client,
									}))}
									option={{
										value: item.id,
										label: item.client,
									}}
									onSelect={handleClientSelect}
								/>
								{/* {item?.url ? (
									<a href={item?.url}>{item?.client}</a>
								) : (
									item?.client
								)} */}
							</div>
							{item?.role && (
								<h3
									className={classNames(
										`client-role text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
									)}
								>
									<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
										Role
									</span>
									<span className="text-white">
										{item?.role}
									</span>
								</h3>
							)}
							<div className="flex flex-col items-center">
								<div className="flex items-center w-full">
									<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase mr-auto">
										Case
									</span>
									<div className="flex ml-auto gap-1">
										<Tooltip
											content="Previous case"
											direction="top"
										>
											<button
												className={classNames(
													'pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light',
													hasMultipleCases
														? 'opacity-100 cursor-pointer'
														: 'opacity-30 cursor-not-allowed'
												)}
												onClick={
													hasMultipleCases
														? handlePrevCase
														: undefined
												}
												disabled={!hasMultipleCases}
											>
												<ArrowLeftIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
											</button>
										</Tooltip>
										<Tooltip
											content="Next case"
											direction="top"
										>
											<button
												className={classNames(
													'pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light',
													hasMultipleCases
														? 'opacity-100 cursor-pointer'
														: 'opacity-30 cursor-not-allowed'
												)}
												onClick={
													hasMultipleCases
														? handleNextCase
														: undefined
												}
												disabled={!hasMultipleCases}
											>
												<ArrowRightIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
											</button>
										</Tooltip>
									</div>
								</div>
								<Select
									options={casesOptions}
									option={selectedCaseOption}
									onSelect={handleCaseSelect}
									disabled={!authenticated}
									hasMultipleCases={hasMultipleCases}
								/>
							</div>
						</div>
					)}

					{/* <h3
						className={classNames(
							`client-cases text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
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
					</h3> */}
					{/* .filter((item) => item.index !== false) */}
					{item?.location && (
						<h3
							className={classNames(
								`client-location text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start ml-auto`
							)}
						>
							<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
								Location
							</span>
							<span className="text-white">{item?.location}</span>
						</h3>
					)}
					{item?.date && (
						<h3
							className={classNames(
								`client-date text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
							)}
						>
							<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
								Date
							</span>
							<span className="text-white">{item?.date}</span>
						</h3>
					)}
					<Tooltip content="Hide" direction="top">
						<button
							className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
							onClick={() => setToggleNav(!toggleNav)}
						>
							<XMarkIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
						</button>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

const NavCase = ({ workCase, item, selectedChanged, selectedCaseChanged }) => {
	const clients = work.filter(
		(item) => item.index !== false && !item.isExternal
	);
	const currIndex = clients.findIndex((c) => c === item);
	const prevIndex = currIndex > 0 ? currIndex - 1 : clients.length - 1;
	const nextIndex = (currIndex + 1) % clients.length;

	const { cases = [] } = item;

	const [toggleNav, setToggleNav] = useState(false);

	const nextClient = () => {
		if (selectedChanged) {
			const nextClientId = clients[nextIndex]?.id;
			console.log('Next client:', nextClientId);
			selectedChanged(nextClientId);
		}
	};

	const prevClient = () => {
		if (selectedChanged) {
			const prevClientId = clients[prevIndex]?.id;
			console.log('Previous client:', prevClientId);
			selectedChanged(prevClientId);
		}
	};

	const handleClientSelect = (value) => {
		if (selectedChanged) {
			console.log('Selected client from dropdown in NavCase:', value);
			selectedChanged(value);
		}
	};

	const handleCaseSelect = (selectedCase) => {
		if (selectedCaseChanged) {
			console.log('Selected case from dropdown:', selectedCase);
			selectedCaseChanged(selectedCase);
		}
	};

	const casesOptions = useMemo(() => {
		const filteredCases = cases.filter((item) => item.index !== false);
		// If we have no filtered cases but have a workCase, include it
		if (filteredCases.length === 0 && workCase) {
			return [
				{
					value: workCase.id,
					label: workCase.title,
				},
			];
		}
		return filteredCases.map((caseItem) => ({
			value: caseItem.id,
			label: caseItem.title,
		}));
	}, [cases, workCase]);

	const selectedCaseOption = useMemo(() => {
		if (workCase) {
			return {
				value: workCase.id,
				label: workCase.title,
			};
		}
		// If we have only one case, select it by default
		if (casesOptions.length === 1) {
			return casesOptions[0];
		}
		return null;
	}, [workCase, casesOptions]);

	const navigate = useNavigate();

	const handleNextCase = () => {
		const filteredCases = cases.filter((c) => c.index !== false);
		if (!filteredCases.length || filteredCases.length === 1) return;

		const currentCaseIndex = filteredCases.findIndex(
			(c) => c.id === workCase?.id
		);

		// If current case not found or at the end, go to first case
		const nextCaseIndex =
			currentCaseIndex === -1 ||
			currentCaseIndex === filteredCases.length - 1
				? 0
				: currentCaseIndex + 1;

		const nextCase = filteredCases[nextCaseIndex];

		if (nextCase?.id && selectedCaseChanged) {
			console.log(
				'Next case:',
				nextCase.id,
				'Current index:',
				currentCaseIndex,
				'Next index:',
				nextCaseIndex,
				'Total cases:',
				filteredCases.length,
				'Current cases:',
				filteredCases.map((c) => c.title)
			);
			selectedCaseChanged(nextCase.id);
		}
	};

	const handlePrevCase = () => {
		const filteredCases = cases.filter((c) => c.index !== false);
		if (!filteredCases.length || filteredCases.length === 1) return;

		const currentCaseIndex = filteredCases.findIndex(
			(c) => c.id === workCase?.id
		);

		// If current case not found or at the beginning, go to last case
		const prevCaseIndex =
			currentCaseIndex <= 0
				? filteredCases.length - 1
				: currentCaseIndex - 1;

		const prevCase = filteredCases[prevCaseIndex];

		if (prevCase?.id && selectedCaseChanged) {
			console.log(
				'Previous case:',
				prevCase.id,
				'Current index:',
				currentCaseIndex,
				'Prev index:',
				prevCaseIndex,
				'Total cases:',
				filteredCases.length,
				'Current cases:',
				filteredCases.map((c) => c.title)
			);
			selectedCaseChanged(prevCase.id);
		}
	};

	// Add the same check for single case
	const hasMultipleCases = useMemo(() => {
		const filteredCases = cases.filter((c) => c.index !== false);
		return filteredCases.length > 1;
	}, [cases]);

	return (
		<>
			<div className="navigation z-10 relative">
				<div
					className={classNames(
						'nav top-2 fixed flex flex-row py-0 px-8 bg-black items-center rounded-full shadow left-1/2 -translate-x-1/2',
						toggleNav ? 'w-full mx-auto rounded-none' : ''
					)}
				>
					<div className="app-logo flex flex-row items-center">
						<Tooltip content="Back to overview" direction="top">
							<button
								onClick={() => navigate(-1)}
								className="pt-0 mb-0 mt-0 items-center text-center dark:text-gray-500 text-black text-base lg:font-light"
							>
								<ArrowLongLeftIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
							</button>
						</Tooltip>
						<Logo />
						{!toggleNav && (
							<Tooltip content="Navgation" direction="top">
								<button
									className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
									onClick={() => setToggleNav(!toggleNav)}
								>
									<Bars3BottomRightIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
								</button>
							</Tooltip>
						)}
					</div>

					<div
						className={classNames(
							'client-overview w-full gap-8',
							toggleNav ? 'flex' : 'hidden'
						)}
					>
						{item?.client && (
							<div
								className={classNames(
									`client-client flex flex-row items-start gap-8`
								)}
							>
								<div className="flex flex-col items-center">
									<div className="flex items-center w-full">
										<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase mr-auto">
											Client
										</span>
										<div className="flex ml-auto gap-1">
											<Tooltip
												content={`Previous client`}
												direction="top"
											>
												<button
													className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
													onClick={prevClient}
												>
													<ArrowLeftIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
												</button>
											</Tooltip>
											<Tooltip
												content={`Next client`}
												direction="top"
											>
												<button
													className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
													onClick={nextClient}
												>
													<ArrowRightIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
												</button>
											</Tooltip>
										</div>
									</div>
									<Select
										options={clients.map((client) => ({
											value: client.id,
											label: client.client,
										}))}
										option={{
											value: item.id,
											label: item.client,
										}}
										onSelect={handleClientSelect}
									/>
								</div>
								{item?.role && (
									<h3
										className={classNames(
											`client-role text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
										)}
									>
										<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
											Role
										</span>
										<span className="text-white">
											{item?.role}
										</span>
									</h3>
								)}
								<div className="flex flex-col items-center">
									<div className="flex items-center w-full">
										<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase mr-auto">
											Case
										</span>
										<div className="flex ml-auto gap-1">
											<Tooltip
												content="Previous case"
												direction="top"
											>
												<button
													className={classNames(
														'pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light',
														hasMultipleCases
															? 'opacity-100 cursor-pointer'
															: 'opacity-30 cursor-not-allowed'
													)}
													onClick={
														hasMultipleCases
															? handlePrevCase
															: undefined
													}
													disabled={!hasMultipleCases}
												>
													<ArrowLeftIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
												</button>
											</Tooltip>
											<Tooltip
												content="Next case"
												direction="top"
											>
												<button
													className={classNames(
														'pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light',
														hasMultipleCases
															? 'opacity-100 cursor-pointer'
															: 'opacity-30 cursor-not-allowed'
													)}
													onClick={
														hasMultipleCases
															? handleNextCase
															: undefined
													}
													disabled={!hasMultipleCases}
												>
													<ArrowRightIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
												</button>
											</Tooltip>
										</div>
									</div>
									<Select
										options={casesOptions}
										option={selectedCaseOption}
										onSelect={handleCaseSelect}
									/>
								</div>
							</div>
						)}

						{/* <h3
							className={classNames(
								`client-cases text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
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
						</h3> */}
						{/* .filter((item) => item.index !== false) */}
						{item?.location && (
							<h3
								className={classNames(
									`client-location text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start ml-auto`
								)}
							>
								<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
									Location
								</span>
								<span className="text-white">
									{item?.location}
								</span>
							</h3>
						)}
						{item?.date && (
							<h3
								className={classNames(
									`client-date text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
								)}
							>
								<span className="text-xs dark:text-gray-400 text-gray-500 font-bold uppercase">
									Date
								</span>
								<span className="text-white">{item?.date}</span>
							</h3>
						)}
						<Tooltip content="Hide" direction="top">
							<button
								className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
								onClick={() => setToggleNav(!toggleNav)}
							>
								<XMarkIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
							</button>
						</Tooltip>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
export { NavClient, NavCase };
