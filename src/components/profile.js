import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tooltip from './tooltip';
import { about } from '../constant';
import Logo from './logo';

const Profile = ({ openContactModal }) => {
	const navigate = useNavigate();

	const handleNavigation = (key) => {
		switch (key) {
			case 'h':
				navigate('/');
				break;
			case 'a':
				navigate('/about');
				break;
			case 'w':
				navigate('/work');
				break;
			case 'c':
				openContactModal();
				break;
			default:
				break;
		}
	};

	const navigationItems = [
		{ key: 'h', tooltip: 'Go to Home' },
		{ key: 'a', tooltip: 'Go to About' },
		{ key: 'w', tooltip: 'Go to Work' },
		{ key: 'c', tooltip: 'Contact Me' },
	];

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
					<ul className="flex gap-3 content-center justify-center py-2">
						{navigationItems.map((item) => (
							<li key={item.key}>
								<Tooltip content={item.tooltip} direction="top">
									<div
										onClick={() =>
											handleNavigation(item.key)
										}
										className="h-6 w-6 border rounded-md justify-center items-center content-center flex text-xs opacity-50 hover:opacity-100 cursor-pointer"
									>
										{item.key.toUpperCase()}
									</div>
								</Tooltip>
							</li>
						))}
					</ul>
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
