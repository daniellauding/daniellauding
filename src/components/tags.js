import classNames from 'classnames';
import React from 'react';

const Tag = ({ tag, active, onClick = () => {} }) => {
	return (
		<li
			className={classNames(
				'px-4 py-1 mb-2 md:mb-0 ml-0 text-left text-black lg:font-light rounded-full dark:bg-gray-900 bg-gray-100',
				{
					'bg-blue-400': active,
				}
			)}
			onClick={() => onClick(tag)}
		>
			<p className="text-xs dark:text-gray-400 text-gray-500 font-bold">
				{tag}
			</p>
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
				'flex-wrap flex md:flex-row w-auto py-0 mb-8 gap-2 hidden',
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
