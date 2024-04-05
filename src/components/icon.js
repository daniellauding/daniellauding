import React from 'react';

const Icon = ({ icon, size, className, customClass, style }) => {
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

	const wrapperClassName = `svg-wrapper ${className || ''} ${
		customClass || ''
	}`;

	// Use optional chaining to handle undefined style
	const fillStyle = style?.fill || 'currentColor'; // Default to currentColor if fill is not provided in style

	// Render SVG icon
	const SvgIcon = () => (
		<div className={wrapperClassName}>
			<svg
				className={sizeClass}
				style={{ fill: fillStyle }} // Set fill style
				aria-hidden="true"
				dangerouslySetInnerHTML={{ __html: icon }}
			/>
		</div>
	);

	return <SvgIcon />;
};

export default Icon;
