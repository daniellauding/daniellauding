import React from 'react';
import classNames from 'classnames';

const Text = ({ size, value, className, color, fill }) => {
	// return (
	// 	<p
	// 		className={classNames(
	// 			`pt-0 mb-2 text-1xl md:text-2xl dark:text-gray-300 text-black lg:font-light`,
	// 			size === 'xl' ? 'text-2xl md:text-4xl' : undefined,
	// 			size === 'large' ? 'text-2xl md:text-5xl' : undefined,
	// 			size === 'medium' ? 'text-1xl md:text-2xl' : undefined,
	// 			size === 'small' ? 'text-sm' : undefined,
	// 			size === 'xs' ? 'text-xs' : undefined,
	// 			className
	// 		)}
	// 	>
	// 		{value}
	// 	</p>
	// );
	if (size === 'xl') {
		return (
			<p
				className={classNames(
					`text-2xl md:text-4xl pt-0 mb-2`,
					!color && !fill ? 'text-text' : '',
					'lg:font-light',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</p>
		);
	}
	if (size === 'large') {
		return (
			<p
				className={classNames(
					`text-2xl md:text-5xl pt-0 mb-2`,
					!color && !fill ? 'text-text' : '',
					'lg:font-light',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</p>
		);
	}
	if (size === 'medium') {
		return (
			<p
				className={classNames(
					`text-1xl md:text-2xl pt-0 mb-2`,
					!color && !fill ? 'text-text' : '',
					'lg:font-light',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</p>
		);
	}
	if (size === 'base') {
		return (
			<p
				className={classNames(
					`text-base md:text-base pt-0 mb-2`,
					!color && !fill ? 'text-text' : '',
					'lg:font-light',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</p>
		);
	}
	if (size === 'small') {
		return (
			<p
				className={classNames(
					`text-xs pt-0 mb-2`,
					!color && !fill ? 'text-text' : '',
					'lg:font-light',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</p>
		);
	}
	if (size === 'xs') {
		return (
			<p
				className={classNames(
					`text-sm pt-0 mb-2`,
					!color && !fill ? 'text-text' : '',
					'lg:font-light',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</p>
		);
	}
	return (
		<p
			className={classNames(
				`text-base md:text-base pt-0 mb-2`,
				!color && !fill ? 'text-text' : '',
				'lg:font-light',
				className,
				color?.trim()
			)}
			style={fill ? { color: fill.trim() } : undefined}
		>
			{value}
		</p>
	);
};

const Title = ({ size = 'medium', value, className, color, fill }) => {
	if (size === 'xl') {
		return (
			<h1
				className={classNames(
					`pt-0 mt-8 mb-16 text-8xl text-left`,
					!color && !fill ? 'text-text' : '',
					'lg:font-bold',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</h1>
		);
	}
	if (size === 'large') {
		return (
			<h1
				className={classNames(
					`pt-0 mt-0 mb-2 text-4xl`,
					!color && !fill ? 'text-text' : '',
					'lg:font-bold',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</h1>
		);
	}
	if (size === 'medium') {
		return (
			<h2
				className={classNames(
					`pt-0 mt-0 mb-2 text-3xl`,
					!color && !fill ? 'text-text' : '',
					'lg:font-bold',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</h2>
		);
	}
	if (size === 'base') {
		return (
			<h2
				className={classNames(
					'pt-0 mt-0 mb-2 text-base',
					!color && !fill ? 'text-text' : '',
					'lg:font-bold',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</h2>
		);
	}
	if (size === 'small') {
		return (
			<h3
				className={classNames(
					`pt-0 mt-0 mb-2 text-1xl`,
					!color && !fill ? 'text-text' : '',
					'lg:font-bold',
					className,
					color?.trim()
				)}
				style={fill ? { color: fill.trim() } : undefined}
			>
				{value}
			</h3>
		);
	}
	return null;
};

export default Text;

export { Title };
