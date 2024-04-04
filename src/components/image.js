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
		imgClass,
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

	const handleScroll = (e) => {
		// Use the scroll event to update the Y-axis transformation
		const scrollY = e.target.scrollTop;
		const element = e.target.querySelector('.scrollable-image');

		// Adjust the translation value based on scroll position
		const translateY = -scrollY;
		element.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
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

	if (variant === 'scrollimg') {
		return (
			<div className="image-scrollimg-container absolute inset-0 overflow-y-scroll">
				<div
					onScroll={handleScroll}
					className="image-scrollimg min-h-full"
				>
					<div className="image-scrollimg-item"></div>
				</div>
			</div>
		);
	}

	if (variant === 'splatted') {
		return (
			<div className="splatted">
				<div
					className="splatted-image"
					style={{ '--img': `url(${src})` }}
				></div>
			</div>
		);
	}

	if (variant === 'full-circle') {
		return (
			<div className="full-circle">
				<div
					className="full-circle-image"
					style={{ '--img': `url(${src})` }}
				></div>
			</div>
		);
	}

	if (variant === 'scrollimghorizontal') {
		const imageRef = useRef(null);
		const [inViewport, setInViewport] = useState(false);
		const [startX, setStartX] = useState(0); // Initialize the initial X position

		useEffect(() => {
			const observer = new IntersectionObserver(
				([entry]) => {
					setInViewport(entry.isIntersecting);
				},
				{ root: null, rootMargin: '0px', threshold: 0.5 }
			);

			if (imageRef.current) {
				observer.observe(imageRef.current);
			}

			// Clean up the observer when the component unmounts
			return () => {
				if (imageRef.current) {
					observer.unobserve(imageRef.current);
				}
			};
		}, []);

		const handleScroll = (e) => {
			if (inViewport) {
				const element = imageRef.current;
				const scrollAmount = e.deltaY; // Use e.deltaY directly
				const transformValue =
					element.style.transform || `translateX(${startX}px)`;
				const currentX = parseFloat(transformValue.match(/-?\d+/));
				let newX = currentX + scrollAmount; // Use "+" to move in the opposite direction

				// Add a threshold for the maximum panning (adjust as needed)
				const maxPanning = 100;
				if (newX < -maxPanning) {
					newX = -maxPanning;
				} else if (newX > maxPanning) {
					newX = maxPanning;
				}

				element.style.transform = `translateX(${newX}px)`;

				// Update the start position to the new X position
				setStartX(newX);
			}
		};
		// Add an event listener for mouse leave
		useEffect(() => {
			const handleMouseLeave = () => {
				// Mouse has left the image container, set inViewport to false
				setInViewport(false);
			};

			// Add the mouse leave event listener to the document body
			document.body.addEventListener('mouseleave', handleMouseLeave);

			// Clean up the event listener when the component unmounts
			return () => {
				document.body.removeEventListener(
					'mouseleave',
					handleMouseLeave
				);
			};
		}, []);

		return (
			<>
				<div
					className="image-scrollimghorizontal-container overflow-x-auto items-center justify-center flex"
					onWheel={handleScroll}
					style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
				>
					<div
						className={`image-scrollimghorizontal ${
							inViewport ? 'in-viewport' : ''
						}`}
					>
						<div
							className="image-scrollimghorizontal-item"
							ref={imageRef}
						>
							<img
								src={src}
								alt=""
								className="scrollable-image cursor-zoom-in"
								onClick={() => openModalAndSetIndex(src)} // Open modal on click
							/>
						</div>
					</div>
				</div>
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
								<div className="modal-body h-full relative pt-0 py-4 px-10 mx-auto">
									<div
										className={classNames(
											`w-full h-full justify-center gap-4 flex-col items-center overflow-y-auto flex py-16`
										)}
									>
										<div className="gallery-image w-full h-full overflow-y-auto flex flex-1">
											<img
												src={src}
												alt=""
												// className="object-cover mx-auto w-full max-w-full max-h-full"
												className="object-cover mx-auto w-full max-w-full max-h-full"
											/>
										</div>
										{/* <div className="gallery-content w-full">
											{image.title && (
												<Title value={image?.title} />
											)}
											{image.text && (
												<Text value={image?.text} />
											)}
										</div> */}
									</div>
								</div>
							</div>
							<div
								onClick={() => setShowModal(false)}
								className="modal-backdrop w-full h-full min-h-full fixed top-0 left-0 bottom-0 right-0 z-10 bg-opacity-90 bg-neutral-800 backdrop-blur"
							/>
						</div>
					</div>
				)}
			</>
		);
	}

	if (variant === 'loop') {
		const images = files.filter((image) => image.includes(item.folder));

		let containerClasses;
		let imageClasses;
		let innerDivClasses;
		if (item?.style === 'horizontal') {
			containerClasses = 'flex overflow-x-scroll space-x-4 h-64';
			imageClasses = 'object-cover w-full h-full cursor-zoom-in';
			innerDivClasses =
				'relative flex-shrink-0 w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/5 ml-[-20px] hover:scale-110 transition-transform';
		} else if (item?.style === 'vertical') {
			containerClasses = '';
			imageClasses =
				'object-cover w-32 h-32 cursor-pointer transform hover:scale-110 transition-transform duration-300 cursor-zoom-in';
			innerDivClasses = 'relative flex-shrink-0';
		} else {
			// Handle the case when item?.style is not set or has an unexpected value
			containerClasses =
				'image-loop grid gap-2 mx-auto grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3'; // Replace with your default classes
			imageClasses = 'default-image-classes cursor-zoom-in';
			innerDivClasses = 'default-inner-div-classes';
		}

		const [selectedImageSrc, setSelectedImageSrc] = useState('');

		// Function to open the modal and set the selected image source
		const openModalAndSetIndex = (index) => {
			// Set the selected image source
			setSelectedImageSrc(`/images/case/${images[index]}`);
			// Set the index of the selected image
			setIndexOfImages(index);
			// Open the modal
			setShowModal(true);
		};

		const handleNextClick = () => {
			const nextIndex = (indexOfImages + 1) % images.length;
			setSelectedImageSrc(`/images/case/${images[nextIndex]}`);
			setIndexOfImages(nextIndex);
		};

		const handlePrevClick = () => {
			const prevIndex =
				(indexOfImages + images.length - 1) % images.length;
			setSelectedImageSrc(`/images/case/${images[prevIndex]}`);
			setIndexOfImages(prevIndex);
		};

		const containerRef = React.useRef(null);

		const handleScrollRight = () => {
			if (containerRef.current) {
				containerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
			}
		};

		const handleScrollLeft = () => {
			if (containerRef.current) {
				containerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
			}
		};

		const isHorizontal = item?.style === 'horizontal';

		return (
			<div className="image-loop-container">
				<div
					ref={containerRef}
					className={classNames(containerClasses, {
						'overflow-x-scroll': isHorizontal,
						'whitespace-nowrap': isHorizontal,
					})}
				>
					{images.map((src, index) => (
						<div key={index} className={innerDivClasses}>
							<img
								src={`/images/case/${src}`}
								alt={`/images/case/${src}`}
								className={imageClasses}
								onClick={() => openModalAndSetIndex(index)} // Open modal on click
							/>
						</div>
					))}
				</div>
				{isHorizontal && (
					<div className="relative">
						<button
							onClick={handleScrollLeft}
							className="absolute bg-white top-1/2 left-4 transform -translate-y-1/2 p-2 text-primary font-semibold hover:underline focus:outline-none"
						>
							<ArrowLeftIcon className="h-5 w-5 text-black" />
						</button>
						<button
							onClick={handleScrollRight}
							className="absolute bg-white top-1/2 right-4 transform -translate-y-1/2 p-2 text-primary font-semibold hover:underline focus:outline-none"
						>
							<ArrowRightIcon className="h-5 w-5 text-black" />
						</button>
					</div>
				)}

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
								<div className="modal-body h-full relative pt-0 py-4 px-10 mx-auto">
									<div
										className={classNames(
											`w-full h-full justify-center gap-4 flex-col items-center overflow-y-auto flex py-16`
											// {
											// 	'active block':
											// 		indexOfImages ===
											// 		images.length,
											// 	'not-active hidden':
											// 		indexOfImages !== index,
											// }
										)}
									>
										<div className="gallery-image w-full h-full overflow-y-auto flex flex-1">
											<img
												src={selectedImageSrc}
												alt="SelectedImage"
												// className="object-cover mx-auto w-full max-w-full max-h-full"
												className="object-cover mx-auto w-full max-w-full max-h-full"
											/>
										</div>
									</div>

									<div className="flex">
										<button
											onClick={handlePrevClick} // Handle "Previous" button click
											type="button"
											className="absolute top-1/2 left-0 btn-prev box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
											data-bs-dismiss="modal"
											aria-label="Previous"
										>
											<ArrowLeftIcon className="h-5 w-5 text-black" />
										</button>
										<button
											onClick={handleNextClick} // Handle "Next" button click
											type="button"
											className="absolute top-1/2 right-0 btn-next box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
											data-bs-dismiss="modal"
											aria-label="Next"
										>
											<ArrowRightIcon className="h-5 w-5 text-black" />
										</button>
									</div>

									<p>
										{indexOfImages + 1} / {images.length}
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

	if (variant === 'imgscrollloop') {
		const images = files.filter((image) => image.includes(item.folder));

		const containerClasses =
			'image-scrollloop-container absolute inset-0 overflow-y-scroll';
		const imageClasses =
			'object-cover w-64 h-64 cursor-pointer transform hover:scale-110 transition-transform duration-300 cursor-zoom-in';
		const innerDivClasses = 'relative flex-shrink-0';

		const [selectedImageSrc, setSelectedImageSrc] = useState('');
		const [showModal, setShowModal] = useState(false);
		const [indexOfImages, setIndexOfImages] = useState(0);

		const openModalAndSetIndex = (index) => {
			setSelectedImageSrc(`/images/case/${images[index]}`);
			setIndexOfImages(index);
			setShowModal(true);
		};

		const handleNextClick = () => {
			const nextIndex = (indexOfImages + 1) % images.length;
			setSelectedImageSrc(`/images/case/${images[nextIndex]}`);
			setIndexOfImages(nextIndex);
		};

		const handlePrevClick = () => {
			const prevIndex =
				(indexOfImages + images.length - 1) % images.length;
			setSelectedImageSrc(`/images/case/${images[prevIndex]}`);
			setIndexOfImages(prevIndex);
		};

		const containerRef = useRef(null);

		return (
			<div className={containerClasses}>
				<div ref={containerRef} className="image-scrollloop-stack">
					{images.map((src, index) => (
						<div key={index} className={innerDivClasses}>
							<img
								src={`/images/case/${src}`}
								alt={`/images/case/${src}`}
								className={imageClasses}
								onClick={() => openModalAndSetIndex(index)}
							/>
						</div>
					))}
				</div>

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
								<div className="modal-body h-full relative pt-0 py-4 px-10 mx-auto">
									<div
										className={classNames(
											`w-full h-full justify-center gap-4 flex-col items-center overflow-y-auto flex py-16`
											// {
											// 	'active block':
											// 		indexOfImages ===
											// 		images.length,
											// 	'not-active hidden':
											// 		indexOfImages !== index,
											// }
										)}
									>
										<div className="gallery-image w-full h-full overflow-y-auto flex flex-1">
											<img
												src={selectedImageSrc}
												alt="SelectedImage"
												// className="object-cover mx-auto w-full max-w-full max-h-full"
												className="object-cover mx-auto w-full max-w-full max-h-full"
											/>
										</div>
									</div>

									<div className="flex">
										<button
											onClick={handlePrevClick} // Handle "Previous" button click
											type="button"
											className="absolute top-1/2 left-0 btn-prev box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
											data-bs-dismiss="modal"
											aria-label="Previous"
										>
											<ArrowLeftIcon className="h-5 w-5 text-black" />
										</button>
										<button
											onClick={handleNextClick} // Handle "Next" button click
											type="button"
											className="absolute top-1/2 right-0 btn-next box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline z-20"
											data-bs-dismiss="modal"
											aria-label="Next"
										>
											<ArrowRightIcon className="h-5 w-5 text-black" />
										</button>
									</div>

									<p>
										{indexOfImages + 1} / {images.length}
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
								<div className="modal-body h-full relative pt-0 py-4 px-10 mx-auto">
									{images.map((image, index) => (
										<div
											key={image?.id}
											className={classNames(
												`w-full h-full justify-center gap-4 flex-col items-center overflow-y-auto flex py-16`,
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
				className={imgClass}
			/>
		);
	}

	// images (slider?)

	return (
		<img
			className={classNames(`mt-4 mb-4`, {
				[imgClass?.trim()]: imgClass, // Add the class conditionally
			})}
			src={src}
			alt=""
		/>
	);
};

export default Image;

export { DummyImage };
