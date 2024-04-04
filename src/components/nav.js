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

const Nav = ({
	setShowProfile,
	// showExperiencesFull,
	// setShowExperiencesFull,
	// setShowOffert,
	// setShowContact,
}) => {
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
							onClick={() => setShowProfile(false)}
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
	clearActive,
	selectedChanged,
	selectedCaseChanged,
	authenticated,
}) => {
	const clients = work.filter((item) => item.index !== false);
	const currIndex = clients.findIndex((c) => c === item);
	const prevIndex = currIndex > 0 ? currIndex - 1 : clients.length - 1;
	const nextIndex = (currIndex + 1) % (clients.length - 1);

	const { cases = [] } = item;

	const [toggleNav, setToggleNav] = useState(false);

	const nextClient = () => {
		selectedChanged(clients[nextIndex].id);
	};

	const prevClient = () => {
		selectedChanged(clients[prevIndex].id);
	};

	const handleCaseSelect = (selectedCase) => {
		// Do something with the selected case here
		console.log('Selected case:', selectedCase); // For debugging
		selectedCaseChanged(selectedCase); // If this makes sense for your application
	};

	{
		cases.map((item, index) => {
			console.log('Item at index', index, 'is', item);
			// Example rendering, assuming `item` has a `name` property
			return <div key={index}>{item.name}</div>;
		});
	}

	const selectedCaseOption = workCase
		? { value: workCase.id, label: workCase.title }
		: null;

	const casesOptions = useMemo(() => {
		return [{ value: null, label: 'Choose' }].concat(
			cases
				.filter((item) => item.index !== false)
				.map((caseItem) => ({
					value: caseItem.id, // Using the 'id' field as the value
					label: caseItem.title, // Using the 'title' field as the label
				}))
		);
	}, [cases, authenticated]);

	{
		cases.map((caseItem, index) => {
			console.log(index, caseItem.id, caseItem.title);
		});
	}

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
								onClick={clearActive}
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
											value: client.id, // Assuming 'id' is a property of a client object
											label: client.client, // Assuming 'client' is a property of a client object for the label
										}))}
										option={{
											value: item.id,
											label: item.client,
										}}
										onSelect={selectedChanged}
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

const NavCase = ({
	workCase,
	item,
	clearActive,
	selectedChanged,
	selectedCaseChanged,
}) => {
	const clients = work.filter((item) => item.index !== false);
	const currIndex = clients.findIndex((c) => c === item);
	const prevIndex = currIndex > 0 ? currIndex - 1 : clients.length - 1;
	const nextIndex = (currIndex + 1) % (clients.length - 1);

	const { cases = [] } = item;

	const [toggleNav, setToggleNav] = useState(false);

	const nextClient = () => {
		selectedChanged(clients[nextIndex].id);
	};

	const prevClient = () => {
		selectedChanged(clients[prevIndex].id);
	};

	const handleCaseSelect = (selectedCase) => {
		// Do something with the selected case here
		console.log('Selected case:', selectedCase); // For debugging
		selectedCaseChanged(selectedCase); // If this makes sense for your application
	};

	const selectedCaseOption = workCase
		? { value: workCase.id, label: workCase.title }
		: null;

	{
		cases.map((item, index) => {
			console.log('Item at index', index, 'is', item);
			// Example rendering, assuming `item` has a `name` property
			return <div key={index}>{item.name}</div>;
		});
	}

	const casesOptions = useMemo(() => {
		return cases
			.filter((item) => item.index !== false)
			.map((caseItem) => ({
				value: caseItem.id, // Using the 'id' field as the value
				label: caseItem.title, // Using the 'title' field as the label
			}));
	}, [cases]);

	{
		cases.map((caseItem, index) => {
			console.log(index, caseItem.id, caseItem.title);
		});
	}

	console.log(clients);

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
								onClick={clearActive}
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
											value: client.id, // Assuming 'id' is a property of a client object
											label: client.client, // Assuming 'client' is a property of a client object for the label
										}))}
										option={{
											value: item.id,
											label: item.client,
										}}
										onSelect={selectedChanged}
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
export { NavClient };
export { NavCase };
