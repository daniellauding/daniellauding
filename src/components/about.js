import React, { useState, useCallback } from 'react';
import classNames from 'classnames';
import { about, cases } from '../constant';
import Experience from './experience';

const Image = () => {
	const [previewCase, setPreviewCase] = useState(null);

	const heroImg = about.map((intro) => intro.hero);

	const [active, setActive] = useState(null);

	const selectedChanged = useCallback(
		(value) => {
			setActive(value || null);
			setPreviewCase(null);
		},
		[setActive],
	);
	return (
		<div className={classNames('cover bg-cover', active ? 'col-span-2' : 'md:w-1/2')}>
			<img
				src={active?.bg || previewCase?.bg || heroImg}
				className={classNames('object-cover', active ? 'w-full h-auto' : 'w-full h-full')}
				alt=""
				onClick={() => selectedChanged(previewCase || null)}
			/>
		</div>
	);
};

const Experiences = ({ active }) => {
	// const Experiences = ({ item, active, setActive, onHover }) => {
	// const onClick = useCallback(
	// 	(e) => {
	// 		e.preventDefault();
	// 		setActive(item);
	// 	},
	// 	[item, setActive],
	// );

	// const setPreview = useCallback(
	// 	(e) => {
	// 		e.stopPropagation();
	// 		onHover(item);
	// 	},
	// 	[item, onHover],
	// );

	// const clearPreview = useCallback(
	// 	(e) => {
	// 		e.stopPropagation();
	// 		onHover(null);
	// 	},
	// 	[onHover],
	// );
	return (
		<ul className="flex flex-col justify-center align-center px-8 md:px-16 mt-16">
			{cases.map((item) => (
				<Experience
					key={item.id}
					item={item}
					active={active === item.id}
					// setActive={selectedChanged}
					// onHover={setPreviewCase}
				/>
			))}
		</ul>
	);
};

const Profile = () => {
	return (
		<>
			{about.map((intro) => (
				<div key={intro.id}>
					<img src={intro.logo} className="logo mx-auto" alt="logo" />
					<h1 className="pt-0 mt-8 mb-0 text-3xl text-center dark:text-white text-black lg:font-bold">
						{intro.name}
					</h1>
					<p className="pt-0 mb-0 text-center dark:text-gray-500 text-black lg:font-light">
						<a href={`mailto:${intro.email}`}>{intro.email}</a>
					</p>
					<p className="pt-0 mb-8 sm:mx-8 mx-8 md:mx-32 mt-16 text-center dark:text-gray-100 text-black lg:font-light text-3xl md:text-4xl leading-snug font-serif">
						{intro.text}
					</p>
				</div>
			))}
		</>
	);
};

const About = () => {
	return (
		<>
			<Image />

			<div
				className={classNames(
					'content align-center md:w-1/2 flex md:flex-col items-center justify-center',
				)}>
				<div className="md:overflow-y-scroll md:h-100 py-8">
					<Profile />
					<Experiences />
				</div>
			</div>
		</>
	);
};

export default About;
