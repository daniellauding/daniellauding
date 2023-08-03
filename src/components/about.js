import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import lodash from 'lodash';

import Avatar from './avatar';
import Profile from './profile';
import ExperiencesShort, { Experiences } from './experiences';
import { about, work } from '../constant';
import TagsList from './tags';
import Social from './social';
import Nav from './nav';
import Contact, { Offert } from './contact';

const About = ({ setShowProfile, active, selectedChanged }) => {
	const [showExperiencesFull, setShowExperiencesFull] = useState(null);
	const [showOffert, setShowOffert] = useState(false);
	const [showContact, setShowContact] = useState(false);
	return (
		<div className="section-wrapper">
			<div
				className={classNames(
					'nav top-8 left-8 fixed flex flex-row p-6 gap-8 z-10'
				)}
			>
				<Nav
					setShowProfile={setShowProfile}
					showExperiencesFull={showExperiencesFull}
					setShowExperiencesFull={setShowExperiencesFull}
				/>
			</div>

			<Experiences
				showExperiencesFull={showExperiencesFull}
				setShowExperiencesFull={setShowExperiencesFull}
				selectedChanged={selectedChanged}
				active={active}
			/>

			<button
				onClick={() => setShowOffert(true)}
				className="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full"
			>
				Ive got a project
			</button>

			<button
				onClick={() => setShowContact(true)}
				className="bg-primary hover:primary text-white font-bold py-5 px-8 rounded-full"
			>
				Contact me
			</button>

			{showContact && (
				<Contact
					showContactModal
					closeContactModal={() => setShowContact(false)}
				/>
			)}

			{showOffert && (
				<Offert
					showOffertModal
					closeOffertModal={() => setShowOffert(false)}
				/>
			)}

			<Avatar />

			<div
				className={classNames(
					'content align-center sticky z-10 md:relative dark:bg-black light:bg-white md:light:bg-transparent md:dark:bg-transparent'
				)}
			>
				<div className="md:h-100 md:h-screen flex flex-col py-8 gap-4">
					<Profile />

					{about.map((intro) => (
						<div key={intro.id}>
							<h1 className="pt-0 mt-4 mb-0 text-3xl text-center dark:text-white text-black lg:font-bold">
								{intro.name}
							</h1>
							<p className="pt-0 mb-0 text-center dark:text-gray-500 text-black lg:font-light">
								<a href={`mailto:${intro.email}`}>
									{intro.email}
								</a>
							</p>
							<p className="pt-0 mb-4 sm:mx-8 mx-8 md:mx-32 mt-8 text-center dark:text-gray-100 text-black lg:font-light text-3xl md:text-4xl leading-snug font-serif">
								{intro.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const AboutShort = ({
	previewCase,
	setPreviewCase,
	active,
	selectedChanged,
	clearPreview,
	setShowProfile,
	showProfile,
}) => {
	// const [active, setActive] = useState(null);
	const tags = useMemo(() => {
		return lodash.uniq(
			work.flatMap(({ cases = [] }) => {
				return cases.flatMap(({ tags = [] }) => tags);
			})
		);
	}, []);

	return (
		<>
			<Avatar
				previewCase={previewCase}
				selectedChanged={selectedChanged}
				active={active}
			/>

			<div
				className={classNames(
					'content align-center sticky z-10 md:relative dark:bg-black light:bg-white md:light:bg-transparent md:dark:bg-transparent',
					active
						? 'justify-start'
						: 'flex md:flex-col justify-center rounded-2xl md:rounded-none md:h-screen'
				)}
				onMouseEnter={clearPreview}
			>
				<div className="md:h-100 md:h-screen flex flex-col py-8 gap-4">
					<Profile />

					{!showProfile && (
						<button
							onClick={() => setShowProfile(true)}
							className="text-white font-bold p-2 w-2 h-2 text-center mx-auto w-auto"
						>
							Read more
						</button>
					)}

					<ExperiencesShort
						selectedChanged={selectedChanged}
						setPreviewCase={setPreviewCase}
						active={active}
						previewCase={previewCase}
					/>

					<TagsList tags={tags} selectedChanged={selectedChanged} />

					<Social />
				</div>
			</div>
		</>
	);
};

export default AboutShort;
export { About };
