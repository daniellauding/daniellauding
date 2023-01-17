import classNames from 'classnames';
import React from 'react';

const Tag = ({ tag, onClick }) => {
	return (
		<li
			className="px-4 py-1 mb-2 md:mb-0 ml-0 text-left text-black lg:font-light rounded-full dark:bg-gray-900 bg-gray-100"
			onClick={() => onClick(tag)}
		>
			<p className="text-xs dark:text-gray-400 text-gray-500 font-bold">
				{tag}
			</p>
		</li>
	);
};

const TagsList = ({ className, selectedChanged, tags = [] }) => {
	if (!tags) {
		return null;
	}

	return (
		<ul
			className={classNames(
				'flex-wrap flex md:flex-row w-auto py-0 mb-8 gap-2',
				className
			)}
		>
			{tags.map((tag) => (
				<Tag tag={tag} key={tag} onClick={selectedChanged} />
			))}
		</ul>
	);
};

export default TagsList;
