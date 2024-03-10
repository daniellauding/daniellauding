import React from 'react';
import { work } from '../constant';
import classNames from 'classnames';
// import { XMarkIcon } from '@heroicons/react/24/solid';
import Experience from './experience';

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
							'flex relative border-l border-gray-200 dark:border-gray-700 h-full '
						)}
					>
						<ul className="experiences flex flex-col justify-start align-center px-8 md:px-16 mt-4 mb-4 md:overflow-y-auto md:mx-4">
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
					</div>
				</div>
			) : null}
		</>
	);
};

const ExperiencesShort = ({ active, selectedChanged, setPreviewCase }) => {
	return (
		<ul className="experiences flex flex-col justify-start align-center px-8 md:px-16 mt-4 mb-4 md:overflow-y-auto md:mx-4">
			{work
				.filter((item) => item.index !== false)
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
	);
};

export default ExperiencesShort;
export { Experiences };
