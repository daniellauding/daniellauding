import React from 'react';
// import classNames from 'classnames';

const Button = ({
	variant = 'default',
	children,
	onClick,
	href,
	className = '',
	...rest
}) => {
	const baseClasses =
		'transition-all font-bold p-2 px-4 text-center mx-auto w-auto rounded-full h-auto flex items-center gap-2';

	const variantClasses = {
		'btn-primary':
			'light:text-white light:bg-primary light:hover:text-white light:hover:bg-primary dark:text-white dark:bg-primary dark:hover:text-white dark:hover:bg-primary border-2 border-primary',
		'btn-default':
			'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600',
		'btn-secondary':
			'light:text-primary light:hover:text-white light:hover:bg-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary border-2 border-primary',
		'btn-link':
			'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300',
	};

	const variantClass =
		variantClasses[`btn-${variant}`] || variantClasses['btn-default'];

	if (variant === 'link') {
		return (
			<a
				href={href}
				className={`${baseClasses} ${variantClass} ${className}`}
				{...rest}
			>
				{children}
			</a>
		);
	} else {
		return (
			<button
				onClick={onClick}
				className={`${baseClasses} ${variantClass} ${className}`}
				{...rest}
			>
				{children}
			</button>
		);
	}
};

export default Button;
