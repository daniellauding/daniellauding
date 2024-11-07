import React, { useState } from 'react';
import { work } from '../constant';
import classNames from 'classnames';
import Experience from './experience';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

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

const ExperienceWithProjects = ({ item }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const hasMultipleProjects = item.cases && item.cases.length > 1;
	const hasProjects = item.cases && item.cases.length > 0;

	return (
		<div className="experience-container">
			<div className="flex items-center w-full">
				<Experience item={item} onHover={() => {}} />
				{hasMultipleProjects && (
					<button
						onClick={(e) => {
							e.stopPropagation();
							setIsExpanded(!isExpanded);
						}}
						className="ml-2 p-2 hover:bg-gray-100 rounded-full transition-all collapse-button"
					>
						{isExpanded ? (
							<ChevronUpIcon className="h-4 w-4 text-gray-500" />
						) : (
							<ChevronDownIcon className="h-4 w-4 text-gray-500" />
						)}
					</button>
				)}
			</div>

			{isExpanded && hasProjects && (
				<ul className="ml-8 mt-2 border-l-2 border-gray-200">
					{item.cases.map((project) => (
						<li key={project.id} className="pl-4">
							<Experience
								item={{
									...project,
									client: project.title || project.case,
									role: project.tags?.join(', '),
									date: project.date || item.date,
									slug: `${item.slug}/${project.case}`,
									isSubItem: true,
								}}
								onHover={() => {}}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

const Experiences = ({ showExperiencesFull, active, selectedChanged }) => {
	return (
		<>
			{showExperiencesFull ? (
				<div className="experiences">
					<div
						className={classNames(
							'flex relative flex-col border-gray-200 dark:border-gray-700 h-full'
						)}
					>
						<ul className="experiences flex flex-col justify-start align-center px-8 md:px-16 mt-4 mb-4 md:overflow-y-auto md:mx-4 w-full gap-4 sm:gap-0">
							{work
								.filter((item) => item.index !== false)
								.map((item) => (
									<ExperienceWithProjects
										key={item.id}
										item={item}
										active={active === item.id}
										selectedChanged={selectedChanged}
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

const ExperiencesShort = ({ setPreviewCase }) => {
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
