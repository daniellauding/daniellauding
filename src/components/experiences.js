import React from 'react';
import { work } from '../constant';
import classNames from 'classnames';
// import { XMarkIcon } from '@heroicons/react/24/solid';
import Experience from './experience';

const DownloadCV = () => {
	return (
		<a
			href="https://www.daniellauding.se/work/cv_daniellauding_2024.pdf"
			download="CV_DaniellaUding_2024.pdf"
		>
			<button className="transition-all light:text-primary light:hover:text-black light:hover:border-black dark:text-primary dark:hover:text-white dark:hover:border-white font-bold p-1 px-0 text-center mx-auto w-auto border-b-2 border-primary h-auto gap-2 items-center flex text-xxs">
				Download CV
			</button>
		</a>
	);
};

const Experiences = ({
	showExperiencesFull,
	// setShowExperiencesFull,
	active,
	selectedChanged,
}) => {
	return (
		<>
			{showExperiencesFull ? (
				<div className="experiences">
					{/* <button
						onClick={() => setShowExperiencesFull(false)}
						className="text-white font-bold p-2 w-2 h-2 rounded-full fixed top-4 right-8"
					>
						<XMarkIcon className="h-5 w-5 dark:text-gray-300 dark:hover:dark:text-white" />
					</button> */}
					<div
						className={classNames(
							'flex relative flex-col border-gray-200 dark:border-gray-700 h-full'
						)}
					>
						<ul className="experiences flex flex-col justify-start align-center px-8 md:px-16 mt-4 mb-4 md:overflow-y-auto md:mx-4 w-full gap-4 sm:gap-0">
							{work
								.filter((item) => item.index !== false)
								.map((item) => (
									<Experience
										key={item.id}
										item={item}
										active={active === item.id}
										setActive={selectedChanged}
									/>
								))}
						</ul>
						<DownloadCV />
					</div>
				</div>
			) : null}
		</>
	);
};

const ExperiencesShort = ({ active, selectedChanged, setPreviewCase }) => {
	return (
		<>
			<ul className="experiences flex flex-col justify-start align-center px-8 md:px-16 mt-4 mb-4 md:overflow-y-auto md:mx-4">
				{work
					.filter((item) => item.index !== false)
					.filter((item) => item.featured == true)
					.map((item) => (
						<Experience
							key={item.id}
							item={item}
							active={active === item.id}
							setActive={selectedChanged}
							onHover={setPreviewCase}
						/>

						// List more like a longer one, a cv, maybe list projects as a accordion, a full page view / sidebar / replace traditional cv
					))}
			</ul>
		</>
	);
};

export default ExperiencesShort;
export { Experiences };
