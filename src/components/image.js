import React from 'react';
import DummyImage from 'react-dummy-image';
//import classNames from 'classnames';

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
	const { variant, color, format, width, height, text, textColor, value } =
		item;
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

	return <img className="mt-4 mb-4" src={value} alt="" />;
};

export default Image;

export { DummyImage };
