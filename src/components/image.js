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
import {
	XMarkIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
} from '@heroicons/react/24/solid';

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
						className="tooltip-tip z-10 w-96 opacity-80"
						style={{ top: tooltip.y, left: tooltip.x }}
						onClick={() => setTooltip(false)}
					>
						<button
							className="btn-medium btn-link btn absolute right-4 top-4"
							type="button"
							onClick={() => setTooltip(false)}
						>
							<XMarkIcon className="h-5 w-5 dark:text-gray-300 dark:hover:dark:text-white" />
						</button>
						<div className="tooltip-inner w-full whitespace-normal p-4">
							{tooltip.area.title && (
								<Title value={tooltip.area.title} size="base" />
							)}
							{tooltip.area.description && (
								<Text
									value={tooltip.area.description}
									size="base"
								/>
							)}
							{tooltip.area.image && (
								<img
									src={tooltip.area.image}
									alt={tooltip.area.title}
								/>
							)}
						</div>
						{/* add tour like behavior, click to open next? */}
						{/* position of tooltip */}
						{/* BUG: have to resize screen before it can be visible? */}
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
								`w-full flex justify-center gap-4 flex-col items-center h-full`,
								{
									active: indexOfImages === index,
									'not-active': indexOfImages !== index,
								}
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
					<div
						tabIndex="-1"
						aria-hidden="true"
						className={classNames(
							'fixed inset-0 z-10 overflow-y-auto'
						)}
					>
						<div className="modal modal-enter-access-code flex min-h-full items-end justify-center p-12 text-center sm:items-center h-screen">
							<div className="modal-wrapper z-20 relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all h-full max-w-2xl">
								<div className="modal-header relative p-10 pb-4 mx-auto">
									<button
										// onClick={clearActive}
										onClick={() => setShowModal(false)}
										type="button"
										className="absolute top-4 right-4 ml-auto btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
										data-bs-dismiss="modal"
										aria-label="Close"
									>
										<XMarkIcon className="h-5 w-5 text-black" />
									</button>
								</div>
								<div className="modal-body h-full relative pt-0 py-4 px-10 mx-auto">
									{images.map((image, index) => (
										<div
											key={image?.id}
											className={classNames(
												`w-full h-full justify-center gap-4 flex-col items-center overflow-y-auto`,
												{
													'active block':
														indexOfImages ===
														images.length,
													'not-active hidden':
														indexOfImages !== index,
												}
											)}
										>
											<div className="gallery-image w-full h-full overflow-y-auto flex flex-1">
												<img
													src={image.src}
													alt={image.title}
													// className="object-cover mx-auto w-full max-w-full max-h-full"
													className="object-cover mx-auto w-full max-w-full max-h-full"
												/>
											</div>
											<div className="gallery-content w-full">
												{image.title && (
													<Title
														value={image?.title}
													/>
												)}
												{image.text && (
													<Text value={image?.text} />
												)}
											</div>
										</div>
									))}

									<div className="flex">
										<button
											onClick={() =>
												setIndexOfImages(
													(indexOfImages +
														images.length -
														1) %
														images.length
												)
											}
											type="button"
											className="absolute top-1/2 left-0 btn-prev box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
											data-bs-dismiss="modal"
											aria-label="Previous"
										>
											<ArrowLeftIcon className="h-5 w-5 text-black" />
										</button>
										<button
											onClick={() =>
												setIndexOfImages(
													(indexOfImages +
														images.length +
														1) %
														images.length
												)
											}
											type="button"
											className="absolute top-1/2 right-0 btn-next box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
											data-bs-dismiss="modal"
											aria-label="Next"
										>
											<ArrowRightIcon className="h-5 w-5 text-black" />
										</button>
									</div>

									<p>
										{indexOfImages} / {images.length}
									</p>
								</div>
							</div>
							<div
								onClick={() => setShowModal(false)}
								className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
							/>
						</div>
					</div>
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
