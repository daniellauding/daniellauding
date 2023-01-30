import React from 'react';
// import classNames from 'classnames';
import { about } from '../constant';

const Profile = () => {
	return (
		<>
			{about.map((intro) => (
				<div key={intro.id}>
					<div className="logo w-20 h-20 mx-auto">
						<video
							loop
							muted
							autoPlay
							controls=""
							className="hidden md:flex"
						>
							<source src={intro.logoMov} type="video/mp4" />
						</video>
						{/* Click, enlarge logo animate out things and position of logo */}
						<img
							src={intro.logo}
							className="logo mx-auto md:hidden"
							alt="logo"
						/>
					</div>
					<h1 className="pt-0 mt-4 mb-0 text-3xl text-center dark:text-white text-black lg:font-bold">
						{intro.name}
					</h1>
					<p className="pt-0 mb-0 text-center dark:text-gray-500 text-black lg:font-light">
						<a href={`mailto:${intro.email}`}>{intro.email}</a>
					</p>
					<p className="pt-0 mb-4 sm:mx-8 mx-8 md:mx-32 mt-8 text-center dark:text-gray-100 text-black lg:font-light text-3xl md:text-4xl leading-snug font-serif">
						{intro.description}
					</p>
				</div>
			))}
		</>
		// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
	);
};

export default Profile;
