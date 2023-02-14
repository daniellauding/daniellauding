import React from 'react';
import classNames from 'classnames';
import Text, { Title } from './typography';
import { about } from '../constant';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Time = ({ item, direction }) => {
	return (
		<div className={classNames('mb-10 ml-6')}>
			{direction === 'horizontal' && (
				<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
					<svg
						aria-hidden="true"
						className="w-3 h-3 text-blue-800 dark:text-blue-300"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clipRule="evenodd"
						></path>
					</svg>
				</span>
			)}
			{direction === 'vertical' && (
				<span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
					<svg
						aria-hidden="true"
						className="w-3 h-3 text-blue-800 dark:text-blue-300"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clipRule="evenodd"
						></path>
					</svg>
					horizontella pelle
				</span>
			)}
			<Title size="medium" value={item.title} />
			<time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
				{item.date}
			</time>
			<Text size="xs" value={item.text} />
		</div>
	);
};

const Timeline = ({ direction, resize, showTimeline, setShowTimeline }) => {
	return (
		<>
			{showTimeline ? (
				<div className="timeline">
					<button
						onClick={() => setShowTimeline(false)}
						className="text-white font-bold p-2 w-2 h-2 rounded-full fixed top-4 right-8"
					>
						<XMarkIcon className="h-5 w-5 dark:text-gray-300 dark:hover:dark:text-white" />
					</button>
					<div
						className={classNames(
							'flex relative border-l border-gray-200 dark:border-gray-700 h-full ',
							resize === 'x' && 'resize-x overflow-x-auto',
							resize === 'y' && 'resize-y overflow-y-auto',
							resize === 'both' && 'resize overflow-auto'
							// How do we make other elements follow and set width auto to dragging size
						)}
					>
						{about.map((item) => {
							return (
								<div
									key={item.id}
									className={classNames(
										'flex flex-col',
										direction
											? 'h-screen'
											: 'w-full overflow-hidden'
									)}
								>
									<div
										className={classNames(
											'flex flex-grow-1 flex-shrink-0',
											direction
												? 'flex-col overflow-y-auto h-full'
												: 'flex-row overflow-x-auto h-full'
										)}
									>
										<div
											className={classNames(
												'grid',
												direction
													? 'grid-flow-row auto-rows-fr relative border-l border-gray-200 dark:border-gray-700'
													: 'grid-flow-col auto-cols-max'
											)}
										>
											{item.timeline.map((item) => {
												return (
													<Time
														key={item.id}
														item={item}
														direction={direction}
													/>
												);
											})}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			) : null}
		</>
	);
};

export default Timeline;
