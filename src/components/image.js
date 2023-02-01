import React, {
	useRef,
	useState,
	useEffect,
	useLayoutEffect,
	// useCallback,
} from 'react';
import DummyImage from 'react-dummy-image';
//import classNames from 'classnames';
import Text, { Title } from './typography';
import ImageMapper from 'react-img-mapper';
// import Modal from './modal';
import classNames from 'classnames';

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
		images,
		// imgWidth,
		// responsive,
		// parentWidth,
	} = item;

	// const [showModal, setShowModal] = useState(false);
	// const [activeImg = 0, setActiveImg] = useState(0);

	const [indexOfImages, setIndexOfImages] = useState(0);
	const [showModal, setShowModal] = useState(false);

	const openModalAndSetIndex = (index) => {
		setIndexOfImages(index);
		setShowModal(true);
		return;
	};

	const ref = useRef(null);

	const [w, setWidth] = useState(0);
	const [tooltip, setTooltip] = useState(null);
	// const [h, setHeight] = useState(0);

	// console.log(item);

	// const onClick = useCallback(
	// 	(e) => {
	// 		e.preventDefault();
	// 		// setActive(active);
	// 		setShowModal(true);
	// 	},
	// 	[item, setActive]
	// );

	useLayoutEffect(() => {
		// console.log(ref.current);
		if (!ref.current) {
			return;
		}
		// console.log(ref.current.offsetWidth);
		setWidth(ref.current.offsetWidth);
		// setHeight(ref.current.offsetHeight);
	}, [ref.current]);

	useEffect(() => {
		function handleWindowResize() {
			if (!ref.current) {
				return;
			}
			setWidth(ref.current.clientWidth);
			// setHeight(ref.current.clientHeight);
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	if (variant === 'loop') {
		const images = files.filter((image) => image.includes(item.folder));

		return (
			<div className="image-loop grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
				{images.map((src, index) => (
					<div
						key={index}
						className="w-full flex justify-center flex-col items-center h-full"
					>
						<img
							src={`/images/case/${src}`}
							alt={`/images/case/${src}`}
							className="object-cover mx-auto w-full max-w-full max-h-full"
						/>
					</div>
				))}
			</div>
		);
	}

	// https://bobbyhadz.com/blog/react-get-width-of-element
	// https://www.npmjs.com/package/react-use-measure

	if (variant === 'mapper') {
		return (
			<div ref={ref} className="w-full h-full">
				{tooltip && (
					<div
						className="tooltip absolute z-10"
						style={{ top: tooltip.y, left: tooltip.x }}
					>
						{tooltip.area.title}
					</div>
				)}
				<ImageMapper
					src={src}
					map={map}
					width={(d) => {
						// console.log(d.naturalWidth);
						return d.naturalWidth;
					}}
					height={(d) => {
						// console.log(d.naturalHeight);
						return d.naturalHeight;
					}}
					// imgWidth={imgWidth}
					natural
					responsive
					parentWidth={w}
					onClick={(area, index, event) =>
						setTooltip({
							x: event.pageX,
							y: event.pageY,
							area: area,
						})
					}
				/>
			</div>
		);
	}

	// if (variant === 'compare') {
	// 	return (

	// 	);
	// }

	if (variant === 'gallery') {
		return (
			<div className="gallery grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
				{/* {activeImg} */}
				{images.map((image, index) => (
					<>
						{/* <p>klickad på {activeImg}</p> */}
						<div
							key={image.id}
							className={classNames(
								`w-full flex justify-center gap-4 flex-col items-center h-full`
								// {
								// 	active: activeImg === index,
								// 	'not-active': activeImg !== index,
								// }
							)}
							onClick={() => openModalAndSetIndex(index)}
						>
							<div className="gallery-image w-full h-full">
								<img
									src={image.src}
									alt={image.title}
									// className="object-cover mx-auto w-full max-w-full max-h-full"
									className="object-cover mx-auto w-full max-w-full max-h-full"
								/>
							</div>
							<div className="gallery-content w-full h-full">
								{image.title && <Title value={image?.title} />}
								{image.text && <Text value={image?.text} />}
							</div>
						</div>
					</>
				))}

				{showModal && (
					<>
						{images.map((image) => (
							<div
								key={image?.id}
								className="modal fixed top-0 left-0 botton-0 right-0 modal-contact z-90 flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 bg-neutral-800 bg-opacity-70 flex flex-col"
							>
								<p>
									testar, visas på img click, jag ska eg visa
									bilden som jag klickade på {indexOfImages}{' '}
									{image[indexOfImages]}
								</p>
								<img src={image[indexOfImages]} alt="testar" />
								<span
									onClick={() =>
										setIndexOfImages(
											(indexOfImages + image.length + 1) %
												image.length
										)
									}
								>
									Visa nästa
								</span>
								<span
									onClick={() =>
										setIndexOfImages(
											(indexOfImages + image.length - 1) %
												image.length
										)
									}
								>
									Visa föregående
								</span>
								<span onClick={() => setShowModal(false)}>
									Stäng
								</span>
								<p>1 av 3</p>
							</div>
						))}
					</>
				)}
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

	// images (slider?)

	return <img className="mt-4 mb-4" src={src} alt="" />;
};

export default Image;

export { DummyImage };
