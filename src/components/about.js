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
import Logo from './logo';
import Contact, { Offert } from './contact';
import Groups from './groups';
import Tooltip from './tooltip';

import Text, { Title } from './typography';

import {
	EnvelopeIcon,
	ClipboardDocumentListIcon,
} from '@heroicons/react/24/solid';

const About = ({ setShowProfile, active, selectedChanged }) => {
	const [showExperiencesFull, setShowExperiencesFull] = useState(null);
	const [showOffert, setShowOffert] = useState(false);
	const [showContact, setShowContact] = useState(false);

	const opacitySteps = [
		// 'bg-opacity-0',
		// 'bg-opacity-5',
		// 'bg-opacity-10',
		'bg-opacity-20',
		'bg-opacity-25',
		'bg-opacity-30',
		'bg-opacity-40',
		'bg-opacity-50',
		'bg-opacity-60',
		'bg-opacity-70',
		'bg-opacity-75',
		'bg-opacity-80',
		'bg-opacity-90',
		'bg-opacity-95',
		'bg-opacity-100',
	];

	const textColorSteps = [
		'text-opacity-0',
		'text-opacity-5',
		'text-opacity-10',
		'text-opacity-20',
		'text-opacity-25',
		'text-opacity-30',
		'text-opacity-40',
		'text-opacity-50',
		'text-opacity-60',
		'text-opacity-70',
		'text-opacity-75',
		'text-opacity-80',
		'text-opacity-90',
		'text-opacity-95',
		'text-opacity-100',
	];

	return (
		<div className="section-wrapper align-center items-center flex flex-col">
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

			<div className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
				<Tooltip content="Ive got a project" direction="top">
					<button
						onClick={() => setShowOffert(true)}
						className="bg-black w-12 h-12 text-white font-bold flex align-middle items-center justify-center rounded-full"
					>
						<ClipboardDocumentListIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
					</button>
				</Tooltip>

				<Tooltip content="Contact me" direction="top">
					<button
						onClick={() => setShowContact(true)}
						className="bg-black w-12 h-12 text-white font-bold flex align-middle items-center justify-center rounded-full"
					>
						<EnvelopeIcon className="h-5 w-5 dark:text-gray-400 text-gray-500" />
					</button>
				</Tooltip>
			</div>

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

			<Avatar className="w-96 h-96 rounded-full overflow-hidden" />
			<Logo className="w-96 h-96" />
			<div
				className={classNames(
					'content align-center sticky z-10 md:relative dark:bg-black light:bg-white md:light:bg-transparent md:dark:bg-transparent'
				)}
			>
				<div className="flex flex-col py-8 gap-4">
					{/* <Profile /> */}

					{about.map((intro) => (
						<div key={intro.id}>
							{/* <h1 className="pt-0 mt-4 mb-0 text-3xl text-center dark:text-white text-black lg:font-bold">
								{intro.name}
							</h1>
							<p className="pt-0 mb-0 text-center dark:text-gray-500 text-black lg:font-light">
								<a href={`mailto:${intro.email}`}>
									{intro.email}
								</a>
							</p> */}
							{/* <p className="pt-0 mb-4 sm:mx-8 mx-8 md:mx-32 mt-8 text-center dark:text-gray-100 text-black lg:font-light text-3xl md:text-4xl leading-snug font-serif">
								{intro.description}
							</p> */}

							{console.log(intro)}
							{console.log(intro.content, 'content')}
							{console.log(intro.content[0].groups, 'groups')}
							{console.log(
								intro.content[0].groups[0].groups,
								'groups groups'
							)}
							{console.log(intro.content.groups, 'content 2')}

							{intro.content.map((content, index) => (
								<div key={index}>
									{content.groups.map((groups, index) => (
										<div key={index}>
											<div
												className={classNames(
													`groups grid gap-0 md:gap-16 auto-rows-auto md:grid-flow-col pt-96 md:p-0 md:auto-cols-fr mt-8 h-full`,
													{
														[`grid-cols-${groups.columns}`]:
															groups.columns,
														[`grid-rows-${groups.rows}`]:
															groups.rows,
														[`gap-${groups.gap}`]:
															groups.gap,
														[`gap-y-${groups.gapY}`]:
															groups.gapY,
														[`gap-x-${groups.gapX}`]:
															groups.gapX,
													}
												)}
											>
												{groups?.title && (
													<Title
														value={
															groups?.title?.value
														}
														variant={
															groups?.title
																?.variant
														}
														style={
															groups?.title?.style
														}
														color={
															groups?.title?.color
														}
														fill={
															groups?.title?.fill
														}
														align={
															groups?.title?.align
														}
														family={
															groups?.title
																?.family
														}
														weight={
															groups?.title
																?.weight
														}
														className={
															groups?.title
																?.className
														}
													/>
												)}
												{groups?.text &&
												Array.isArray(groups?.text) ? (
													<div className="space-y-4 flex flex-col">
														{groups?.text.map(
															(
																textBlock,
																index
															) => (
																<Text
																	key={index}
																	value={
																		textBlock.value
																	}
																	size={
																		textBlock.size
																	}
																	style={
																		textBlock.style
																	}
																	color={
																		textBlock?.color
																	}
																	fill={
																		textBlock?.fill
																	}
																	align={
																		textBlock?.align
																	}
																	className={
																		textBlock?.className
																	}
																	family={
																		textBlock?.family
																	}
																	weight={
																		textBlock?.weight
																	}
																/>
															)
														)}
													</div>
												) : (
													<Text
														value={
															groups?.text?.value
														}
														size={
															groups?.text?.size
														}
														style={
															groups?.text?.style
														}
														color={
															groups?.text?.color
														}
														fill={
															groups?.text?.fill
														}
														align={
															groups?.text?.align
														}
														className={
															groups?.text
																?.className
														}
														family={
															groups?.text?.family
														}
														weight={
															groups?.text?.weight
														}
													/>
												)}

												{groups?.lead && (
													<Text
														size="large"
														value={groups?.lead}
														color={
															groups?.lead?.color
														}
														fill={
															groups?.text?.fill
														}
													/>
												)}
											</div>
										</div>
									))}
								</div>
							))}

							{intro.content.map((contentItem, index) => (
								<div key={index}>
									{contentItem.groups.map(
										(section, index) => (
											<Groups
												key={index}
												section={section.groups}
											/>
										)
									)}
								</div>
							))}
						</div>
					))}

					{console.log(work)}

					<ul className="bg-white experiences flex flex-col justify-start align-center px-0 mt-4 mb-4 md:overflow-y-auto md:mx-4">
						{work.map((item, index) => (
							<li
								key={item?.id}
								// className={`bg-[#85496A] bg-opacity-${
								// 	index * 20
								// }`}
								className={`bg-[#85496A] flex p-4 h-20 items-center ${
									opacitySteps[index % opacitySteps.length]
								}`}
							>
								<p
									className={`col-span-3 pt-0 mb-0 text-left text-grey-700 text-2xl md:text-base md:font-medium sm:w-24 md:w-40 ${
										textColorSteps[
											Math.min(
												index,
												textColorSteps.length - 1
											)
										]
									} `}
								>
									{item?.client}
								</p>
								<p
									className={`col-span-2 pt-0 mb-0 md:ml-8 text-xs md:text-base md:text-center text-grey-700 lg:font-light ${
										textColorSteps[
											Math.min(
												index,
												textColorSteps.length - 1
											)
										]
									} `}
								>
									{item?.role}
								</p>
								<p
									className={`col-span-1 pt-0 mb-0 ml-auto text-right text-xs md:text-base md:text-center text-grey-700 lg:font-light ${
										textColorSteps[
											Math.min(
												index,
												textColorSteps.length - 1
											)
										]
									} `}
								>
									{item?.date}
								</p>
							</li>
						))}
					</ul>
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
