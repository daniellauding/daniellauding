import React from 'react';
import { about } from '../constant';

const goHome = () => {
	window.location.href = '/';
};

const Logo = () => {
	return (
		<>
			{about.map((intro) => (
				<div
					className="logo w-20 h-20 mx-auto cursor-pointer"
					key={intro.id}
					onClick={goHome}
				>
					<video
						loop
						muted
						autoPlay
						controls=""
						className="hidden md:flex"
					>
						<source src={intro.logoMov} type="video/mp4" />
					</video>
					<img
						src={intro.logo}
						className="logo mx-auto md:hidden"
						alt="logo"
					/>
				</div>
			))}
		</>
	);
};

export default Logo;
