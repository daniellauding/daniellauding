import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { about } from '../constant';

const goHome = () => {
	window.location.href = '/';
};

const Logo = ({ className }) => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // 768px is a common breakpoint for "md" in responsive design
	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="rounded-full bg-black w-32 h-32 overflow-hidden flex items-center mx-auto">
			{about.map((intro) => (
				<>
					{isDesktop ? (
						<div
							className={classNames(
								'logo mx-auto cursor-pointer h-24',
								className
							)}
							key={intro.id}
							onClick={goHome}
						>
							<video
								loop
								muted
								autoPlay
								playsInline
								className="w-full h-full object-cover"
							>
								<source src={intro.logoMov} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					) : (
						<div
							className={classNames(
								'logo mx-auto cursor-pointer w-12',
								className
							)}
							key={intro.id}
							onClick={goHome}
						>
							<img
								src={intro.logo}
								alt="logo"
								className="w-full h-full object-cover"
							/>
						</div>
					)}
				</>
			))}
		</div>
	);
};

export default Logo;
