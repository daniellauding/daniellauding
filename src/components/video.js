import React, { useState, useRef } from 'react';
import classNames from 'classnames';

const Video = ({ item = {} }) => {
	const videoRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlay = () => {
		if (videoRef.current.paused) {
			videoRef.current.play();
			setIsPlaying(true);
		} else {
			videoRef.current.pause();
			setIsPlaying(false);
		}
	};

	const {
		// width,
		// height,
		src,
		// ref,
		captionUrl,
		// videoClass,
		// imgWidth,
		// responsive,
		// parentWidth,
	} = item;

	return (
		<div className={classNames('relative')}>
			<video controls>
				<source src={src} type="video/mp4" />
				{/* Add a <track> element for captions */}
				<track
					label="English"
					kind="captions"
					src={captionUrl}
					srcLang="en"
					default
				/>
				Your browser does not support the video tag.
			</video>
			<div
				className={`${
					isPlaying ? 'hidden' : 'block'
				} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
				onClick={togglePlay}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-16 w-16 text-white opacity-75 hover:opacity-100"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</div>
			{isPlaying && (
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
					onClick={togglePlay}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-16 w-16 text-white opacity-75 hover:opacity-100"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
			)}
		</div>
	);
};

export default Video;
