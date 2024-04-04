import React from 'react';
// import classNames from 'classnames';
import { about } from '../constant';
import Logo from './logo';

const Profile = ({ openContactModal }) => {
	return (
		<>
			{about.map((intro) => (
				<div key={intro.id}>
					<Logo />
					<h1 className="pt-0 mt-4 mb-0 text-3xl text-center dark:text-white text-black lg:font-bold">
						{intro.name}
					</h1>
					<p className="pt-0 mb-0 text-center dark:text-gray-500 text-black lg:font-light">
						<button
							onClick={openContactModal}
							className="dark:text-gray-500 text-black lg:font-light light:hover:text-primary light:hover:border-primary dark:hover:text-primary dark:hover:border-primary border-b border-b-transparent h-auto gap-2"
						>
							{intro.email}
						</button>
					</p>
					<p className="pt-0 mb-4 sm:mx-8 mx-8 md:mx-32 mt-8 text-center dark:text-gray-100 text-black lg:font-light text-2xl md:text-3xl leading-snug font-serif">
						{intro.description}
					</p>
				</div>
			))}
		</>
		// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
	);
};

export default Profile;
