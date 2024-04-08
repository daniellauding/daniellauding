import React from 'react';

const ICONS = {
	'jobs-done': `<svg viewBox="0 0 16 22" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2639 11.94L11.0239 10.32C12.3139 9.32 13.1439 7.76 13.1439 6C13.1439 2.97 10.6739 0.5 7.64385 0.5C4.61385 0.5 2.14385 2.97 2.14385 6C2.14385 8.13 3.36385 9.98 5.14385 10.89V14.15L3.30385 13.76L3.20385 13.74C3.10385 13.72 3.00385 13.71 2.88385 13.71C2.35385 13.71 1.85385 13.92 1.47385 14.3L0.0738525 15.72L5.16385 20.81C5.59385 21.25 6.19385 21.5 6.81385 21.5H13.1139C14.0939 21.5 14.9239 20.8 15.0839 19.83L15.8839 15.12C16.1039 13.82 15.4539 12.54 14.2639 11.94ZM13.9139 14.79L13.1139 19.5H6.81385C6.72385 19.5 6.64385 19.46 6.57385 19.4L2.89385 15.72L7.14385 16.61V6C7.14385 5.72 7.36385 5.5 7.64385 5.5C7.92385 5.5 8.14385 5.72 8.14385 6V12H9.90385L13.3639 13.73C13.7639 13.93 13.9839 14.36 13.9139 14.79ZM7.64385 2.5C5.71385 2.5 4.14385 4.07 4.14385 6C4.14385 6.95 4.52385 7.81 5.14385 8.44V6C5.14385 4.62 6.26385 3.5 7.64385 3.5C9.02385 3.5 10.1439 4.62 10.1439 6V8.44C10.7639 7.81 11.1439 6.95 11.1439 6C11.1439 4.07 9.57385 2.5 7.64385 2.5Z"/></svg>`,
	'design-leadership': `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.51 4.49 20 10 20C11.38 20 12.5 18.88 12.5 17.5C12.5 16.89 12.27 16.3 11.86 15.83C11.78 15.73 11.73 15.62 11.73 15.5C11.73 15.22 11.95 15 12.23 15H14C17.31 15 20 12.31 20 9C20 4.04 15.51 0 10 0C4.49 0 0 4.49 0 10ZM2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.14 18 9C18 11.21 16.21 13 14 13H12.23C10.85 13 9.73 14.12 9.73 15.5C9.73 16.1 9.95 16.69 10.36 17.15C10.42 17.22 10.5 17.34 10.5 17.5C10.5 17.78 10.28 18 10 18C5.59 18 2 14.41 2 10ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM6 5.5C6 4.67157 6.67157 4 7.5 4C8.32843 4 9 4.67157 9 5.5C9 6.32843 8.32843 7 7.5 7C6.67157 7 6 6.32843 6 5.5ZM12.5 4C11.6716 4 11 4.67157 11 5.5C11 6.32843 11.6716 7 12.5 7C13.3284 7 14 6.32843 14 5.5C14 4.67157 13.3284 4 12.5 4ZM14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5Z"/></svg>`,
	'purposeful-innovation': `<svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.94 10C19.48 5.83 16.17 2.52 12 2.06V0H10V2.06C5.83 2.52 2.52 5.83 2.06 10H0V12H2.06C2.52 16.17 5.83 19.48 10 19.94V22H12V19.94C16.17 19.48 19.48 16.17 19.94 12H22V10H19.94ZM11 7C8.79 7 7 8.79 7 11C7 13.21 8.79 15 11 15C13.21 15 15 13.21 15 11C15 8.79 13.21 7 11 7ZM4 11C4 14.87 7.13 18 11 18C14.87 18 18 14.87 18 11C18 7.13 14.87 4 11 4C7.13 4 4 7.13 4 11Z"/></svg>
`,
};

const Icon = ({ icon, size, className, customClass }) => {
	if (!icon || !size) {
		console.error('Invalid icon or size:', icon, size);
		return null;
	}

	const sizes = {
		small: 'h-6 w-6',
		medium: 'h-8 w-8',
		large: 'h-12 w-12',
	};

	const sizeClass = sizes[size] || 'h-6 w-6';

	let wrapperClassName = `svg-wrapper ${className || ''} ${
		customClass || ''
	} ${icon?.className || ''} flex align-center justify-center items-center`;

	// Use optional chaining to handle undefined style
	const fillStyle = icon.fill || 'currentColor'; // Default to 'currentColor' if icon.fill is not provided

	if (fillStyle !== 'currentColor') {
		// If fillStyle is not 'currentColor', add it as a class
		wrapperClassName += ` ${fillStyle}`;
	} else {
		// If fillStyle is 'currentColor', add the default dark:fill-white light:fill-black classes
		wrapperClassName += ` dark:fill-white light:fill-black`;
	}

	if (icon && icon.iconName && ICONS[icon.iconName]) {
		// Render predefined icon if it exists
		return (
			<div className={`${sizeClass} ${wrapperClassName}`}>
				<svg
					className={`${className} w-full h-full`}
					aria-hidden="true"
					dangerouslySetInnerHTML={{ __html: ICONS[icon.iconName] }}
				/>
			</div>
		);
	} else if (icon && icon.svgCode) {
		// Render custom SVG code if svgCode is provided
		return (
			<div className={`${sizeClass} ${wrapperClassName}`}>
				<svg
					className={`${className} w-full h-full`}
					aria-hidden="true"
					dangerouslySetInnerHTML={{ __html: icon.svgCode }}
				/>
			</div>
		);
	} else {
		console.error('Invalid icon:', icon);
		return null;
	}
};

export default Icon;
