import React, { useState, useCallback, useEffect } from 'react';
import CaseSelector, { Case } from './case';
import Soon from './soon';
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
	showExperiencesFull,
	setShowExperiencesFull,
}) => {
	return (
		<div className="navigation">
			<div
				className={classNames(
					'nav top-2 fixed flex flex-row py-0 px-8 bg-black items-center rounded-full shadow left-1/2 -translate-x-1/2'
				)}
			>
				<div className="app-logo flex flex-row items-center">
					<Tooltip content="Back to overview" direction="top">
						<button
							onClick={() => setShowProfile(false)}
							className="pt-0 mb-0 mt-0 items-center text-center dark:text-gray-500 text-black text-base lg:font-light"
						>
							<ArrowLongLeftIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
						</button>
					</Tooltip>

					<Logo />

					{!showExperiencesFull && (
						<button
							onClick={() => setShowExperiencesFull(true)}
							className="pt-0 mb-0 mt-0 text-center items-center dark:text-gray-500 text-black text-sm lg:font-light"
						>
							<Bars3BottomRightIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

const NavClient = ({ item, clearActive, selectedCase, selectedChanged }) => {
	const clients = work.filter((item) => item.index !== false);
	const currIndex = clients.findIndex((c) => c === item);
	const prevIndex = currIndex > 0 ? currIndex - 1 : clients.length - 1;
	const nextIndex = (currIndex + 1) % (clients.length - 1);

	const { cases = [] } = item;
	const [selected, setCase] = useState(null);

	const [toggleNav, setToggleNav] = useState(false);

	useEffect(() => {
		if (selectedCase) {
			setCase(selectedCase);
		}
	}, []);

	const clearSelected = useCallback(() => {
		setCase(null);
	}, []);

	const nextClient = () => {
		selectedChanged(clients[nextIndex]);
	};

	const prevClient = () => {
		selectedChanged(clients[prevIndex]);
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

	return (
		<div className="navigation">
			<div
				className={classNames(
					'nav top-2 fixed flex flex-row py-0 px-8 bg-black items-center rounded-full shadow left-1/2 -translate-x-1/2',
					toggleNav ? 'w-8/12 mx-auto rounded-none' : ''
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
						<h3
							className={classNames(
								`client-client text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
							)}
						>
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

					{item?.role && (
						<h3
							className={classNames(
								`client-role text-xs md:text-base md:text-center dark:text-gray-300 text-black lg:font-light flex flex-col items-start`
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
					</h3>
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
							{item?.location}
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
							{item?.date}
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

			{!cases?.length && (
				<>
					<Soon item={item} />
				</>
			)}

			{item?.soon && <Soon item={item} />}

			{!cases?.length < 1 && (
				<div className="case-wrapper grid grid-flow-col gap-16 auto-cols-fr h-screen max-h-screen overflow-hidden p-12">
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

export default Nav;
export { NavClient };
