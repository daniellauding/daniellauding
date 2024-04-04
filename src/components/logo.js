import React from 'react';
import classNames from 'classnames';
import { about } from '../constant';

const goHome = () => {
	window.location.href = '/';
};

const Logo = ({ className }) => {
	return (
		<div className="sm:rounded-full sm:bg-black sm:w-32 sm:h-32 overflow-hidden flex items-center mx-auto">
			{about.map((intro) => (
				<div
					className={classNames(
						'logo sm:w-24 sm:h-24 mx-auto cursor-pointer',
						className
					)}
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
		</div>
	);
};

export default Logo;
