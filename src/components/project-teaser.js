import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

const ProjectTeaser = ({ teaser }) => {
	const {
		title,
		subtitle,
		date,
		description,
		image,
		screenshots,
		tags,
		buttons,
		className,
	} = teaser;

	return (
		<div
			className={classNames(
				'group relative p-8',
				'bg-gradient-to-b from-gray-900/50 to-black/50',
				'backdrop-blur-xl backdrop-saturate-200',
				'border border-white/10 rounded-[2.5rem]',
				'transition-all duration-500',
				'hover:border-white/20 hover:shadow-2xl',
				className
			)}
		>
			<div className="flex flex-col h-full">
				{/* Header */}
				<div className="mb-8 relative z-10">
					<p className="text-sm text-gray-400 mb-2 font-medium">
						{date}
					</p>
					<h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
						{title}
					</h3>
					<p className="text-base text-gray-400">{subtitle}</p>
				</div>

				{/* Single Image or Screenshots Grid */}
				{screenshots ? (
					<div className="relative mb-4 grid grid-cols-12 auto-rows-[100px] gap-3 overflow-hidden">
						{screenshots.map((screenshot, index) => {
							// Define different layout patterns based on index to match Apple's style
							const layoutClasses =
								[
									'col-span-8 row-span-4', // Large hero (Dynamic Island)
									'col-span-4 row-span-2', // Small square (Camera)
									'col-span-4 row-span-2', // Small square (A16)
									'col-span-6 row-span-3', // Wide rectangle (Battery)
									'col-span-6 row-span-3', // Wide rectangle (Bottom)
								][index] || 'col-span-4 row-span-2';

							return (
								<div
									key={index}
									className={classNames(
										'relative overflow-hidden',
										'rounded-[2rem] bg-gradient-to-b from-gray-900/90 to-black/90',
										'backdrop-blur-xl backdrop-saturate-200',
										'border border-white/10',
										'transition-all duration-500 hover:scale-[1.02]',
										'group/image shadow-lg',
										'flex flex-col justify-between p-6',
										layoutClasses
									)}
								>
									<div className="absolute inset-0">
										<img
											src={screenshot.src}
											alt={
												screenshot.alt ||
												`Screenshot ${index + 1}`
											}
											className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
										/>
										<div
											className={classNames(
												'absolute inset-0',
												'bg-gradient-to-b from-transparent via-black/20 to-black/50',
												'group-hover/image:opacity-70 transition-opacity duration-500'
											)}
										/>
									</div>
								</div>
							);
						})}
					</div>
				) : image ? (
					<div className="relative mb-4 overflow-hidden rounded-[2rem]">
						{Array.isArray(image) ? (
							// Handle array of images
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{image.map((img, index) => (
									<div
										key={index}
										className={classNames(
											'relative overflow-hidden',
											'rounded-[2rem] bg-gradient-to-b from-gray-900/90 to-black/90',
											'backdrop-blur-xl backdrop-saturate-200',
											'border border-white/10',
											'transition-all duration-500 hover:scale-[1.02]',
											'group/image shadow-lg',
											'aspect-video'
										)}
									>
										<img
											src={img.src}
											alt={
												img.alt || `Image ${index + 1}`
											}
											className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
										/>
										<div
											className={classNames(
												'absolute inset-0',
												'bg-gradient-to-b from-transparent via-black/20 to-black/50',
												'group-hover/image:opacity-70 transition-opacity duration-500'
											)}
										/>
									</div>
								))}
							</div>
						) : (
							// Handle single image
							<div
								className={classNames(
									'relative overflow-hidden',
									'rounded-[2rem] bg-gradient-to-b from-gray-900/90 to-black/90',
									'backdrop-blur-xl backdrop-saturate-200',
									'border border-white/10',
									'transition-all duration-500 hover:scale-[1.02]',
									'group/image shadow-lg',
									'aspect-video'
								)}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
								/>
								<div
									className={classNames(
										'absolute inset-0',
										'bg-gradient-to-b from-transparent via-black/20 to-black/50',
										'group-hover/image:opacity-70 transition-opacity duration-500'
									)}
								/>
							</div>
						)}
					</div>
				) : null}

				{/* Description */}
				<p className="text-base text-gray-300/90 mb-6 flex-grow leading-relaxed">
					{description}
				</p>

				{/* Tags */}
				{tags && (
					<div className="flex flex-wrap gap-2 mb-6">
						{tags.map((tag, index) => (
							<span
								key={index}
								className="text-xs px-3 py-1.5 rounded-full 
										 bg-white/5 text-gray-300 
										 border border-white/10"
							>
								{tag}
							</span>
						))}
					</div>
				)}

				{/* Buttons */}
				{buttons && (
					<div className="flex gap-4 mt-auto">
						{buttons.map((button, index) =>
							button.type === 'internal' ? (
								<Link
									key={index}
									to={button.href}
									className="text-sm font-medium text-primary 
										 hover:text-white transition-colors
										 flex items-center gap-2"
								>
									{button.text}
									<ArrowLongRightIcon className="w-5 h-5" />
								</Link>
							) : (
								<a
									key={index}
									href={button.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm font-medium text-primary hover:text-white transition-colors"
								>
									{button.text}
								</a>
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectTeaser;
