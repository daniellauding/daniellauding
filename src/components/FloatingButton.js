import React, { useState, useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const FloatingButton = ({
	openContactModal,
	openOffertModal,
	stopMovement,
}) => {
	const [position, setPosition] = useState({ x: 50, y: 50 });
	const [velocity, setVelocity] = useState({ x: 2, y: 2 });
	const [showButton, setShowButton] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [currentBlobIndex, setCurrentBlobIndex] = useState(0);
	const buttonRef = useRef(null);
	const animationFrameRef = useRef();
	const [squishDirection, setSquishDirection] = useState({ x: 1, y: 1 });
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
	const [isReturningSlow, setIsReturningSlow] = useState(false);
	const [hasMoved, setHasMoved] = useState(false);

	const blobPaths = [
		'M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z',
		'M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z',
		'M449.05134,329.9003Q409.80059,409.80059,329.9003,451.15995Q250,492.5193,162.89881,458.36084Q75.79762,424.20238,65.04837,337.10119Q54.29911,250,85.74629,183.59673Q117.19347,117.19347,183.59673,88.1905Q250,59.18753,328.8549,75.73886Q407.7098,92.2902,448.00594,171.1451Q488.30208,250,449.05134,329.9003Z',
		'M446.86448,329.36764Q408.73529,408.73529,329.36764,419.76576Q250,430.79624,166.60504,423.79308Q83.21008,416.78992,69.36975,333.39496Q55.52942,250,96.13341,193.3687Q136.7374,136.7374,193.3687,119.10083Q250,101.46426,313.50105,112.23108Q377.00211,122.99789,430.99789,186.49895Q484.99368,250,446.86448,329.36764Z',
		'M395.5,320Q390,390,320,400Q250,410,172,408Q94,406,59,328Q24,250,70.5,183.5Q117,117,183.5,108Q250,99,335,89.5Q420,80,410.5,165Q401,250,395.5,320Z',
	];

	useEffect(() => {
		const animate = () => {
			if (!showButton || stopMovement || showModal) return;
			if (isDragging) return;

			setPosition((prevPos) => {
				const buttonRect = buttonRef.current.getBoundingClientRect();
				const windowWidth = window.innerWidth - buttonRect.width;
				const windowHeight = window.innerHeight - buttonRect.height;

				let newX = prevPos.x + velocity.x;
				let newY = prevPos.y + velocity.y;
				let newVelX = velocity.x;
				let newVelY = velocity.y;

				// Bounce off edges while preserving directional momentum better
				if (newX <= 0 || newX >= windowWidth) {
					newVelX = -velocity.x * 0.98; // Increased bounce preservation
					if (!isReturningSlow) {
						setCurrentBlobIndex(
							(prev) => (prev + 1) % blobPaths.length
						);
						setSquishDirection(() => ({
							x: newX <= 0 ? 0.8 : 1.2,
							y: 1,
						}));
						setTimeout(
							() => setSquishDirection({ x: 1, y: 1 }),
							300
						);
					}
				}
				if (newY <= 0 || newY >= windowHeight) {
					newVelY = -velocity.y * 0.98; // Increased bounce preservation
					if (!isReturningSlow) {
						setCurrentBlobIndex(
							(prev) => (prev + 1) % blobPaths.length
						);
						setSquishDirection(() => ({
							x: 1,
							y: newY <= 0 ? 0.8 : 1.2,
						}));
						setTimeout(
							() => setSquishDirection({ x: 1, y: 1 }),
							300
						);
					}
				}

				// Reduced friction for more linear movement
				if (isReturningSlow) {
					const friction = 0.998; // Very slight friction for more linear movement
					newVelX *= friction;
					newVelY *= friction;

					// Only reset to normal if practically stopped
					if (Math.abs(newVelX) < 0.05 && Math.abs(newVelY) < 0.05) {
						setIsReturningSlow(false);
						newVelX = 2;
						newVelY = 2;
					}
				}

				setVelocity({ x: newVelX, y: newVelY });

				return {
					x: Math.max(0, Math.min(newX, windowWidth)),
					y: Math.max(0, Math.min(newY, windowHeight)),
				};
			});

			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [
		velocity,
		showButton,
		stopMovement,
		showModal,
		isDragging,
		isReturningSlow,
	]);

	useEffect(() => {
		const handleGlobalMouseUp = (e) => {
			if (isDragging) {
				handleMouseUp(e);
			}
		};

		window.addEventListener('mouseup', handleGlobalMouseUp);
		return () => {
			window.removeEventListener('mouseup', handleGlobalMouseUp);
		};
	}, [isDragging]);

	useEffect(() => {
		if (isDragging) {
			document.body.classList.add('dragging');
		} else {
			document.body.classList.remove('dragging');
		}

		return () => {
			document.body.classList.remove('dragging');
		};
	}, [isDragging]);

	const handleClick = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const dismiss = () => {
		setShowButton(false);
	};

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setHasMoved(false);
		setVelocity({ x: 0, y: 0 });
		setIsReturningSlow(false);
		setDragStart({
			x: e.clientX - position.x,
			y: e.clientY - position.y,
		});
	};

	const handleMouseMove = (e) => {
		if (isDragging) {
			const buttonRect = buttonRef.current.getBoundingClientRect();
			const windowWidth = window.innerWidth - buttonRect.width;
			const windowHeight = window.innerHeight - buttonRect.height;

			// Calculate new position
			const newX = e.clientX - dragStart.x;
			const newY = e.clientY - dragStart.y;

			// Only set hasMoved if we've moved more than a few pixels
			const moveThreshold = 5;
			const deltaX = Math.abs(newX - position.x);
			const deltaY = Math.abs(newY - position.y);

			if (deltaX > moveThreshold || deltaY > moveThreshold) {
				setHasMoved(true);
			}

			// Constrain position within window bounds
			setPosition({
				x: Math.max(0, Math.min(newX, windowWidth)),
				y: Math.max(0, Math.min(newY, windowHeight)),
			});
		}
	};

	const handleMouseUp = (e) => {
		if (isDragging && hasMoved) {
			// Calculate the movement vector from drag start to release point
			const moveX = e.clientX - dragStart.x - position.x;
			const moveY = e.clientY - dragStart.y - position.y;

			// Calculate magnitude of the throw
			const magnitude = Math.sqrt(moveX * moveX + moveY * moveY);

			if (magnitude > 0) {
				// Calculate direction - this will give us a pure linear direction
				const directionX = moveX / magnitude;
				const directionY = moveY / magnitude;

				// Calculate speed based on throw magnitude - increased for more noticeable movement
				const speed = Math.min(magnitude * 1.2, 50);

				// Set velocity directly in the throw direction
				setVelocity({
					x: directionX * speed,
					y: directionY * speed,
				});

				setIsReturningSlow(true);

				// Extend the time before returning to normal speed
				setTimeout(() => {
					setIsReturningSlow(false);
					setVelocity({ x: 2, y: 2 });
				}, 4000);
			}
		}
		setIsDragging(false);
		setHasMoved(false);
	};

	return showButton ? (
		<>
			<div
				ref={buttonRef}
				className={`fixed z-50 ${
					isDragging ? 'cursor-grabbing' : 'cursor-grab'
				} transform select-none floating-button`}
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					transform: `scale(${squishDirection.x}, ${squishDirection.y})`,
					transition: isDragging
						? 'none'
						: 'transform 300ms ease-out',
					userSelect: 'none',
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<div className="relative group w-40 h-40">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 500 500"
						className="w-full h-full"
					>
						<defs>
							<linearGradient
								id="blob-gradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="100%"
							>
								<stop
									offset="0%"
									style={{
										stopColor: 'var(--color-primary)',
										stopOpacity: 1,
									}}
								/>
								<stop
									offset="100%"
									style={{
										stopColor: 'var(--color-primary)',
										stopOpacity: 0.8,
									}}
								/>
							</linearGradient>
						</defs>
						<path
							fill="url(#blob-gradient)"
							className="transition-all duration-500"
							d={blobPaths[currentBlobIndex]}
						>
							<animate
								attributeName="d"
								dur="1500ms"
								repeatCount="indefinite"
								values={blobPaths.join(';')}
							/>
						</path>
					</svg>
					<div className="absolute inset-0 flex items-center justify-center text-white">
						<span
							className="text-sm font-medium cursor-pointer hover:opacity-80"
							onClick={(e) => {
								e.stopPropagation();
								if (!hasMoved && !isDragging) {
									handleClick();
								}
							}}
						>
							Work with me
						</span>
					</div>
					{!isDragging && (
						<button
							onClick={(e) => {
								e.stopPropagation();
								dismiss();
								closeModal();
							}}
							className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
							aria-label="Dismiss"
						>
							<XMarkIcon className="h-4 w-4" />
						</button>
					)}
				</div>
			</div>

			{showModal && (
				<div
					className="fixed inset-0 z-[9999] overflow-hidden"
					style={{ pointerEvents: 'auto' }}
				>
					<div
						className="absolute inset-0 bg-black/30 backdrop-blur-sm"
						onClick={closeModal}
					></div>
					<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full shadow-xl">
						<h2 className="text-2xl font-bold mb-4">
							Let&apos;s Work Together!
						</h2>
						<p className="mb-6">
							I&apos;m currently available for new projects and
							opportunities. Whether you have a specific project
							in mind or just want to discuss possibilities,
							I&apos;d love to hear from you.
						</p>
						<div className="flex gap-4">
							<button
								onClick={() => {
									closeModal();
									openContactModal();
								}}
								className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90"
							>
								Contact Me
							</button>
							<button
								onClick={() => {
									closeModal();
									openOffertModal();
								}}
								className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90"
							>
								Submit Project
							</button>
							<button
								onClick={closeModal}
								className="border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	) : null;
};

export default FloatingButton;
