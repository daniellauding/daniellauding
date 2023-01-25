import React from 'react';
import DummyImage from 'react-dummy-image';
//import classNames from 'classnames';

import ImageMapper from 'react-img-mapper';

const files = [];

function importAll(r) {
	// r.keys().forEach((key) => (cache[key] = r(key)));

	r.keys().forEach((key) => {
		files.push(key.substring(2));
	});
}

importAll(
	require.context('../../public/images/case/', true, /\.(png|jpe?g|svg)$/)
);

const Image = ({ item = {} }) => {
	const {
		variant,
		color,
		format,
		width,
		height,
		text,
		textColor,
		src,
		map,
		imgWidth,
		natural,
		responsive,
		parentWidth,
	} = item;
	if (variant === 'loop') {
		const images = files.filter((image) => image.includes(item.folder));

		return (
			<div className="">
				{images.map((src, index) => (
					<img key={index} src={`/images/case/${src}`} alt="Beer" />
				))}
			</div>
		);
	}

	// https://bobbyhadz.com/blog/react-get-width-of-element
	// https://www.npmjs.com/package/react-use-measure

	if (variant === 'mapper') {
		return (
			<ImageMapper
				src={src}
				map={map}
				width={width}
				height={height}
				imgWidth={imgWidth}
				natural={natural}
				responsive={responsive}
				parentWidth={parentWidth}
			/>
		);
	}

	if (variant === 'dummy') {
		return (
			<DummyImage
				color={color}
				format={format}
				width={width}
				height={height}
				text={text}
				textColor={textColor}
			/>
		);
	}

	// images (slider?)

	return <img className="mt-4 mb-4" src={src} alt="" />;
};

export default Image;

export { DummyImage };
