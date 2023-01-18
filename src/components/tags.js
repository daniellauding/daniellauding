import classNames from 'classnames';
import React from 'react';

const Tag = ({ tag, active, onClick = () => {} }) => {
	return (
		<li>
			<button
				className={classNames(
					'tag px-4 py-1 mb-2 md:mb-0 ml-0 text-left text-black lg:font-light rounded-full dark:bg-gray-900 bg-gray-100 hover:bg-gray-200 dark:hover:dark:bg-gray-700',
					{
						'dark:hover:dark:bg-gray-700 bg-gray-200': active,
					}
				)}
				onClick={() => onClick(tag)}
			>
				<p className="text-xs dark:text-gray-400 text-gray-500 font-bold">
					{tag}
				</p>
			</button>
		</li>
	);
};

const TagsList = ({ className, selectedChanged, tags = [], active }) => {
	if (!tags) {
		return null;
	}

	return (
		<ul
			className={classNames(
				'flex flex-wrap gap-4 justify-center align-center',
				className
			)}
		>
			{tags.map((tag) => (
				<Tag
					tag={tag}
					key={tag}
					onClick={selectedChanged}
					active={active === tag}
				/>
			))}
		</ul>
	);
};

export default TagsList;
