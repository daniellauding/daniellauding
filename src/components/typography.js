import React from 'react';
import classNames from 'classnames';

const Text = ({ size, value, className }) => {
	return (
		<p
			className={classNames(
				`pt-0 mb-2 text-1xl md:text-2xl dark:text-gray-300 text-black lg:font-light`,
				size === 'xl' ? 'text-2xl md:text-4xl' : undefined,
				size === 'large' ? 'text-2xl md:text-3xl' : undefined,
				size === 'medium' ? 'text-1xl md:text-2xl' : undefined,
				size === 'small' ? 'text-sm' : undefined,
				className
			)}
		>
			{value}
		</p>
	);
};

const Title = ({ size = 'medium', value, className }) => {
	if (size === 'xl') {
		return (
			<h1
				className={classNames(
					`pt-0 mt-8 mb-16 text-4xl text-left dark:text-gray-200 text-black lg:font-bold`,
					className
				)}
			>
				{value}
			</h1>
		);
	}
	if (size === 'large') {
		return (
			<h1
				className={classNames(
					`pt-0 mt-0 mb-2 text-4xl dark:text-gray-200 text-black lg:font-bold`,
					className
				)}
			>
				{value}
			</h1>
		);
	}
	if (size === 'medium') {
		return (
			<h2
				className={classNames(
					`pt-0 mt-0 mb-2 text-3xl dark:text-gray-200 text-black lg:font-bold`,
					className
				)}
			>
				{value}
			</h2>
		);
	}
	if (size === 'small') {
		return (
			<h3
				className={classNames(
					`pt-0 mt-0 mb-2 text-1xl dark:text-gray-200 text-black lg:font-bold`,
					className
				)}
			>
				{value}
			</h3>
		);
	}
	return null;
};

export default Text;

export { Title };
