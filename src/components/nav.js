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
		const nextClientId = clients[nextIndex]?.id;
		if (nextClientId && selectedChanged) {
			console.log('Next client:', nextClientId);
			selectedChanged(nextClientId);
		}
	};

	const prevClient = () => {
		const prevClientId = clients[prevIndex]?.id;
		if (prevClientId && selectedChanged) {
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

	const selectedCaseOption = useMemo(() => {
		if (workCase) {
			const currentCase = cases.find((c) => c.id === workCase.id);
			if (currentCase) {
				return {
					value: currentCase.id,
					label: currentCase.title,
				};
			}
		}
		return { value: null, label: 'Choose' };
	}, [workCase, cases]);

	const casesOptions = useMemo(() => {
		const availableCases = cases
			.filter((item) => item.index !== false)
			.map((caseItem) => ({
				value: caseItem.id,
				label: caseItem.title,
			}));

		return [{ value: null, label: 'Choose' }].concat(availableCases);
	}, [cases]);

	{
		cases.map((caseItem, index) => {
			console.log(index, caseItem.id, caseItem.title);
		});
	}

	const navigate = useNavigate();

	console.log(clients);

	return (
		<>
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
									</div>
									<Select
										options={casesOptions}
										option={selectedCaseOption}
										onSelect={handleCaseSelect}
										disabled={!authenticated}
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
			selectedChanged(clients[nextIndex].id);
		}
	};

	const prevClient = () => {
		if (selectedChanged) {
			selectedChanged(clients[prevIndex].id);
		}
	};

	const handleClientSelect = (value) => {
		if (selectedChanged) {
			console.log('Selected client:', value);
			selectedChanged(value);
		}
	};

	const handleCaseSelect = (selectedCase) => {
		if (selectedCaseChanged) {
			console.log('Selected case:', selectedCase);
			selectedCaseChanged(selectedCase);
		}
	};

	const selectedCaseOption = useMemo(() => {
		if (workCase) {
			const currentCase = cases.find((c) => c.id === workCase.id);
			if (currentCase) {
				return {
					value: currentCase.id,
					label: currentCase.title,
				};
			}
		}
		return { value: null, label: 'Choose' };
	}, [workCase, cases]);

	const casesOptions = useMemo(() => {
		return cases
			.filter((item) => item.index !== false)
			.map((caseItem) => ({
				value: caseItem.id,
				label: caseItem.title,
			}));
	}, [cases]);

	{
		cases.map((caseItem, index) => {
			console.log(index, caseItem.id, caseItem.title);
		});
	}

	console.log(clients);

	const navigate = useNavigate();

	const handleNextCase = () => {
		const filteredCases = cases.filter((c) => c.index !== false);
		const currentCaseIndex = filteredCases.findIndex(
			(c) => c.id === workCase?.id
		);
		const nextCaseIndex = (currentCaseIndex + 1) % filteredCases.length;
		const nextCaseId = filteredCases[nextCaseIndex]?.id;

		if (nextCaseId && selectedCaseChanged) {
			console.log('Next case:', nextCaseId);
			selectedCaseChanged(nextCaseId);
		}
	};

	const handlePrevCase = () => {
		const filteredCases = cases.filter((c) => c.index !== false);
		const currentCaseIndex = filteredCases.findIndex(
			(c) => c.id === workCase?.id
		);
		const prevCaseIndex =
			currentCaseIndex > 0
				? currentCaseIndex - 1
				: filteredCases.length - 1;
		const prevCaseId = filteredCases[prevCaseIndex]?.id;

		if (prevCaseId && selectedCaseChanged) {
			console.log('Previous case:', prevCaseId);
			selectedCaseChanged(prevCaseId);
		}
	};

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
												content={`${clients[prevIndex].client}`}
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
												content={`${clients[nextIndex].client}`}
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
													className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
													onClick={handlePrevCase}
												>
													<ArrowLeftIcon className="h-3 w-3 dark:text-gray-400 text-gray-500" />
												</button>
											</Tooltip>
											<Tooltip
												content="Next case"
												direction="top"
											>
												<button
													className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
													onClick={handleNextCase}
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
