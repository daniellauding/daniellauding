import React, { useState, useEffect } from 'react';
// import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
// import lodash from 'lodash';

import Avatar from './avatar';
import Profile from './profile';
import ExperiencesShort, { Experiences } from './experiences';
import { about, work } from '../constant';
// import TagsList from './tags';
import Social from './social';
import Button from './button';
import Nav from './nav';
// import Logo from './logo';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import Contact, { Offert } from './contact';
// import Groups from './groups';
import Video from './video';
import List from './list';
import Image from './image';
import Text, { Title } from './typography';
import Icon from './icon'; // Import the Icon component

import {
	ArrowLongRightIcon,
	ArrowLongDownIcon,
} from '@heroicons/react/24/solid';

const About = ({
	setShowProfile,
	active,
	selectedChanged,
	// item,
	// setActive,
	openContactModal,
	openOffertModal,
}) => {
	const [showExperiencesFull, setShowExperiencesFull] = useState(null);
	// const [showContact, setShowContact] = useState(false);
	// const [showOffert, setShowOffert] = useState(false);

	// const onClick = useCallback(
	// 	(e) => {
	// 		e.preventDefault();
	// 		setActive(item?.id);
	// 		// test.play();
	// 		console.log(item?.id, 'klickat på item');
	// 	},
	// 	[item, setActive]
	// );

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

	const ScrollNav = ({ about }) => {
		const [activeSection, setActiveSection] = useState('');
		const [sections, setSections] = useState([]);

		useEffect(() => {
			// Filter sections with anchorNav: true from the about array
			const sectionsWithNav = about
				.map((contentGroup) => contentGroup.content)
				.flat()
				.filter((section) => section.anchorNav)
				.map((section) => ({
					id: section.section, // Section ID
					name: section.anchorName, // Anchor name to display next to the dot
				}));
			setSections(sectionsWithNav);
		}, [about]);

		const handleScroll = () => {
			let currentSection = '';
			sections.forEach(({ id }) => {
				const sectionEl = document.getElementById(id);
				const scrollPosition = window.scrollY + window.innerHeight / 2;
				if (
					sectionEl &&
					sectionEl.offsetTop <= scrollPosition &&
					sectionEl.offsetTop + sectionEl.offsetHeight >
						scrollPosition
				) {
					currentSection = id;
				}
			});
			setActiveSection(currentSection);
		};

		useEffect(() => {
			window.addEventListener('scroll', handleScroll);
			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}, [sections]);

		const scrollToSection = (id) => {
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		};

		return (
			<div className="scroll-nav-wrapper flex">
				<div className="bg-gray-400 w-px absolute right-2 top-2 bottom-2"></div>
				<ul className="scroll-nav flex flex-col gap-8 items-end ">
					{sections.map(({ id, name }) => (
						<li
							key={id}
							className={`items-center group/scroll-nav-item cursor-pointer flex gap-4 ${
								activeSection === id ? 'active' : 'default'
							}`}
							onClick={() => scrollToSection(id)}
						>
							<span
								className={`anchor-name leading-snug font-serif text-right light:group-hover/scroll-nav-item:text-black dark:group-hover/scroll-nav-item:text-white ${
									activeSection === id
										? 'text-black'
										: 'text-gray-600'
								}`}
							>
								{name}
							</span>
							<div
								className={`dot z-10 w-4 h-4 rounded-full cursor-pointer hover:bg-primary light:group-hover/scroll-nav-item:border-primary light:group-hover/scroll-nav-item:bg-white dark:group-hover/scroll-nav-item:border-primary dark:group-hover/scroll-nav-item:bg-white border-4 border-transparent ${
									activeSection === id
										? 'border-primary bg-white'
										: 'bg-gray-400'
								}`}
							></div>
						</li>
					))}
				</ul>
			</div>
		);
	};

	const scrollToSection = (sectionId) => {
		// console.log(`Attempting to scroll to ${sectionId}`);
		const section = document.querySelector(sectionId);
		// console.log('Section:', section); // Check what's found
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		} else {
			console.log(`No section found with id ${sectionId}`);
		}
	};

	const handleButtonClick = (btn) => {
		if (btn?.target === 'contactModal') {
			openContactModal();
		} else if (btn?.target === 'offertModal') {
			openOffertModal();
		}
	};

	return (
		<div className="section-wrapper align-center items-center flex flex-col">
			<div
				className={classNames(
					'nav top-8 left-8 fixed flex flex-row p-6 gap-8 z-30'
				)}
			>
				<Nav
					setShowProfile={setShowProfile}
					showExperiencesFull={showExperiencesFull}
					setShowExperiencesFull={setShowExperiencesFull}
				/>
			</div>

			<div className="fixed right-8 bottom-8 p-0 z-20">
				<ScrollNav about={about} />
			</div>

			{/* <Avatar className="w-96 h-96 rounded-full overflow-hidden" />
			<Logo className="w-96 h-96" /> */}
			<div
				className={classNames(
					'content align-center sticky z-10 md:relative dark:bg-black dark:bg-black md:light:bg-transparent md:dark:bg-transparent'
				)}
			>
				<div className="flex flex-col py-8 gap-4">
					{/* <Profile /> */}

					{about.map((intro) => (
						<div
							key={intro.id}
							className="about-wrapper overflow-x-hidden vertical flex flex-col"
						>
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

							{/* {console.log(intro)}
							{console.log(intro.content, 'content')}
							{console.log(intro.content[0].groups, 'groups')}
							{console.log(
								intro.content[0].groups.groups,
								'groups groups'
							)}
							{console.log(intro.content.groups, 'content 2')} */}

							{console.log(intro.content, 'content 2')}

							{intro.content.map((groups, index) => (
								<div
									key={index}
									id={groups?.section}
									className={classNames(
										`section`,
										{
											[`variant-${groups?.variant}`]:
												intro?.variant,
											[`${groups?.className}`]:
												groups?.className,
											'justify-start':
												groups?.align?.horizontal ===
												'left',
											'justify-center':
												groups?.align?.horizontal ===
												'center',
											'justify-end':
												groups?.align?.horizontal ===
												'right',
											'content-start':
												groups?.align?.vertical ===
												'top',
											'content-center':
												groups?.align?.vertical ===
												'center',
											'content-end':
												groups?.align?.vertical ===
												'bottom',
											'py-40': !groups?.padding,
											flex:
												groups?.container?.align
													?.horizontal ||
												groups?.container?.align
													?.vertical,
										},
										groups?.class?.trim(),
										groups?.background?.attachment?.trim(),
										groups?.background?.position?.trim(),
										groups?.background?.repeat?.trim(),
										groups?.background?.size?.trim(),
										groups?.background?.class?.trim(),
										groups?.padding?.trim(),
										groups?.margin?.trim(),
										groups?.height?.trim(),
										groups?.widht?.trim()
									)}
									style={{
										backgroundImage:
											groups?.background?.image &&
											`url(${groups?.background?.image})`,
										backgroundColor:
											groups?.background?.color,
									}}
								>
									<div
										className={classNames(
											groups?.container?.width === 'full'
												? 'container-full'
												: 'container',
											groups?.container?.height
												? groups?.container?.height
												: '',
											{
												'justify-start':
													groups?.container?.align
														?.vertical === 'top',
												'justify-center':
													groups?.container?.align
														?.vertical === 'center',
												'justify-end':
													groups?.container?.align
														?.vertical === 'bottom',
												'content-start':
													groups?.container?.align
														?.horizontal === 'left',
												'content-center':
													groups?.container?.align
														?.horizontal ===
													'center',
												'content-end':
													groups?.container?.align
														?.horizontal ===
													'right',
												'flex-col':
													groups?.container
														?.direction ===
													'vertical',
												'flex-row':
													groups?.container
														?.direction ===
													'horizontal',
												flex:
													groups?.container?.align
														?.vertical ||
													groups?.container?.align
														?.horizontal,
											},
											groups?.container?.padding?.trim(),
											groups?.container?.margin?.trim()
										)}
									>
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
											{groups.groups.map((group, index) =>
												group?.animate ? (
													<AnimationOnScroll
														key={index} // Don't forget the key prop for list items
														animateIn={
															group?.animateIn
																? group.animateIn
																: 'animate__fadeIn'
														}
														animateOut={
															group?.animateOut
														}
														delay={group?.delay}
														duration={
															group?.duration
														}
														animateOnce={
															group?.animateOnce
																? group.animateOnce
																: true
														}
													>
														<div
															key={index}
															className={classNames(
																`group`,
																{
																	[`col-span-${group.columns}`]:
																		group.columns,
																	[`col-start-${group.colStart}`]:
																		group.colStart,
																	[`col-end-${group.colEnd}`]:
																		group.colEnd,
																	[`row-span-${group.rows}`]:
																		group.rows,
																	[`row-start-${group.rowStart}`]:
																		group.rowStart,
																	[`row-end-${group.rowEnd}`]:
																		group.rowEnd,
																	[`${group.style}`]:
																		group.style,
																	'justify-start':
																		group
																			?.align
																			?.horizontal ===
																		'left',
																	'justify-center':
																		group
																			?.align
																			?.horizontal ===
																		'center',
																	'justify-end':
																		group
																			?.align
																			?.horizontal ===
																		'right',
																	'content-start':
																		group
																			?.align
																			?.vertical ===
																		'top',
																	'content-center':
																		group
																			?.align
																			?.vertical ===
																		'center',
																	'content-end':
																		group
																			?.align
																			?.vertical ===
																		'bottom',
																	'': !group?.padding,
																	flex:
																		group
																			?.container
																			?.align
																			?.horizontal ||
																		group
																			?.container
																			?.align
																			?.align
																			?.vertical,
																},
																group?.class?.trim(),
																group?.padding?.trim(),
																group?.margin?.trim()
															)}
														>
															{group?.icon && (
																<Icon
																	key={
																		group.id
																	} // Use group id as the key
																	icon={
																		group.icon
																	}
																	style={{
																		fill: group
																			.icon
																			.fill,
																	}}
																	size={
																		group
																			.icon
																			.size
																	} // Use group.icon.size for the size
																	customClass={
																		group
																			.icon
																			.class
																	} // Use group.icon.class for the customClass
																/>
															)}
															{group?.title &&
															Array.isArray(
																group?.title
															) ? (
																<div className="space-y-4 w- flex flex-col">
																	{group?.title.map(
																		(
																			titleBlock,
																			index
																		) => (
																			<Title
																				key={
																					index
																				}
																				value={
																					titleBlock.value
																				}
																				size={
																					titleBlock.size
																				}
																				style={
																					titleBlock.style
																				}
																				color={
																					titleBlock?.color
																				}
																				fill={
																					titleBlock?.fill
																				}
																				align={
																					titleBlock?.align
																				}
																				className={
																					titleBlock?.className
																				}
																				family={
																					titleBlock?.family
																				}
																				weight={
																					titleBlock?.weight
																				}
																			/>
																		)
																	)}
																</div>
															) : group?.title &&
															  group?.title
																	.value ? (
																<Title
																	value={
																		group
																			?.title
																			?.value
																	}
																	size={
																		group
																			?.title
																			?.size
																	}
																	style={
																		group
																			?.title
																			?.style
																	}
																	color={
																		group
																			?.title
																			?.color
																	}
																	fill={
																		group
																			?.title
																			?.fill
																	}
																	align={
																		group
																			?.title
																			?.align
																	}
																	className={
																		group
																			?.title
																			?.className
																	}
																	family={
																		group
																			?.title
																			?.family
																	}
																	weight={
																		group
																			?.title
																			?.weight
																	}
																/>
															) : null}
															{group?.image && (
																<Image
																	variant={
																		group
																			?.image
																			?.variant
																	}
																	color={
																		group
																			?.image
																			?.color
																	}
																	format={
																		group
																			?.image
																			?.format
																	}
																	width={
																		group
																			?.image
																			?.width
																	}
																	height={
																		group
																			?.image
																			?.height
																	}
																	text={
																		group
																			?.image
																			?.text
																	}
																	textColor={
																		group
																			?.image
																			?.textColor
																	}
																	item={
																		group?.image
																	}
																	src={
																		group
																			?.image
																			?.src
																	}
																/>
															)}
															{group?.video && (
																<Video
																	item={
																		group.video
																	} // Assuming group.video contains at least the 'src' property
																	muted={
																		group
																			?.video
																			?.muted ||
																		true
																	} // Turn off sound
																	loop={
																		group
																			?.video
																			?.loop ||
																		true
																	} // Make the video loop
																	autoPlay={
																		group
																			?.video
																			?.autoPlay ||
																		true
																	} // Autoplay the video
																	controls={
																		group
																			?.video
																			?.controls ||
																		false
																	} // Hide video controls
																	className={
																		group
																			?.video
																			?.videoClass
																	} // Apply any additional class for styling
																	width={
																		group
																			?.video
																			?.width
																	} // Optional: Set video width
																	height={
																		group
																			?.video
																			?.height
																	} // Optional: Set video height
																	showControls={
																		group
																			?.video
																			?.showControls ||
																		false
																	}
																/>
															)}

															{group?.text &&
															Array.isArray(
																group?.text
															) ? (
																<div className="space-y-4 w- flex flex-col">
																	{group?.text.map(
																		(
																			textBlock,
																			index
																		) => (
																			<Text
																				key={
																					index
																				}
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
															) : group?.text &&
															  group?.text
																	.value ? (
																<Text
																	value={
																		group
																			?.text
																			?.value
																	}
																	size={
																		group
																			?.text
																			?.size
																	}
																	style={
																		group
																			?.text
																			?.style
																	}
																	color={
																		group
																			?.text
																			?.color
																	}
																	fill={
																		group
																			?.text
																			?.fill
																	}
																	align={
																		group
																			?.text
																			?.align
																	}
																	className={
																		group
																			?.text
																			?.className
																	}
																	family={
																		group
																			?.text
																			?.family
																	}
																	weight={
																		group
																			?.text
																			?.weight
																	}
																/>
															) : null}

															{group?.lead && (
																<Text
																	size="large"
																	value={
																		group?.lead
																	}
																	color={
																		group
																			?.lead
																			?.color
																	}
																	fill={
																		group
																			?.text
																			?.fill
																	}
																/>
															)}

															{Array.isArray(
																group?.list
															) && (
																<div className="list">
																	{group.list.map(
																		(
																			item,
																			index
																		) => (
																			<List
																				key={
																					index
																				}
																				items={[
																					item,
																				]}
																			/>
																		)
																	)}
																</div>
															)}

															{group?.buttons && (
																<div className="btns flex gap-4 mt-8">
																	{group.buttons.map(
																		(
																			btn,
																			idx
																		) => (
																			<div
																				key={
																					idx
																				}
																				className="btn"
																			>
																				{btn?.type ===
																					'scroll' && (
																					<Button
																						onClick={() =>
																							scrollToSection(
																								btn?.href
																							)
																						}
																						// className="transition-all light:text-primary light:hover:text-white light:hover:bg-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary font-bold p-2 px-4 text-center mx-auto w-auto border-2 rounded-full border-primary h-auto gap-2 items-center flex"
																						variant={
																							btn?.variant
																						}
																					>
																						{
																							btn?.text
																						}
																						<ArrowLongDownIcon className="h-5 w-5" />
																					</Button>
																				)}

																				{btn?.type ===
																					'modal' && (
																					<Button
																						onClick={() =>
																							handleButtonClick(
																								btn
																							)
																						}
																						variant={
																							btn?.variant
																						}
																					>
																						{
																							btn?.text
																						}
																					</Button>
																				)}

																				{btn?.type ===
																					'external' && (
																					<a
																						href={
																							btn?.href
																						}
																						target="_blank"
																						rel="noopener noreferrer"
																						className="transition-all light:text-primary light:hover:text-white light:hover:bg-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary font-bold p-2 px-4 text-center mx-auto w-auto border-2 rounded-full border-primary h-auto gap-2 items-center flex"
																					>
																						{
																							btn?.text
																						}
																					</a>
																				)}
																			</div>
																		)
																	)}
																</div>
															)}
														</div>
													</AnimationOnScroll>
												) : (
													<div
														key={index}
														className={classNames(
															`group`,
															{
																[`col-span-${group.columns}`]:
																	group.columns,
																[`col-start-${group.colStart}`]:
																	group.colStart,
																[`col-end-${group.colEnd}`]:
																	group.colEnd,
																[`row-span-${group.rows}`]:
																	group.rows,
																[`row-start-${group.rowStart}`]:
																	group.rowStart,
																[`row-end-${group.rowEnd}`]:
																	group.rowEnd,
																[`${group.style}`]:
																	group.style,
																'justify-start':
																	group?.align
																		?.horizontal ===
																	'left',
																'justify-center':
																	group?.align
																		?.horizontal ===
																	'center',
																'justify-end':
																	group?.align
																		?.horizontal ===
																	'right',
																'content-start':
																	group?.align
																		?.vertical ===
																	'top',
																'content-center':
																	group?.align
																		?.vertical ===
																	'center',
																'content-end':
																	group?.align
																		?.vertical ===
																	'bottom',
																'': !group?.padding,
																flex:
																	group
																		?.container
																		?.align
																		?.horizontal ||
																	group
																		?.container
																		?.align
																		?.align
																		?.vertical,
															},
															group?.class?.trim()
														)}
													>
														{group?.icon && (
															<Icon
																key={group.id} // Use group id as the key
																icon={
																	group.icon
																}
																style={{
																	fill: group
																		.icon
																		.fill,
																}}
																size={
																	group.icon
																		.size
																} // Use group.icon.size for the size
																customClass={
																	group.icon
																		.class
																} // Use group.icon.class for the customClass
															/>
														)}
														{group?.title &&
														Array.isArray(
															group?.title
														) ? (
															<div className="space-y-4 w- flex flex-col">
																{group?.title.map(
																	(
																		titleBlock,
																		index
																	) => (
																		<Title
																			key={
																				index
																			}
																			value={
																				titleBlock.value
																			}
																			size={
																				titleBlock.size
																			}
																			style={
																				titleBlock.style
																			}
																			color={
																				titleBlock?.color
																			}
																			fill={
																				titleBlock?.fill
																			}
																			align={
																				titleBlock?.align
																			}
																			className={
																				titleBlock?.className
																			}
																			family={
																				titleBlock?.family
																			}
																			weight={
																				titleBlock?.weight
																			}
																		/>
																	)
																)}
															</div>
														) : group?.title &&
														  group?.title.value ? (
															<Title
																value={
																	group?.title
																		?.value
																}
																size={
																	group?.title
																		?.size
																}
																style={
																	group?.title
																		?.style
																}
																color={
																	group?.title
																		?.color
																}
																fill={
																	group?.title
																		?.fill
																}
																align={
																	group?.title
																		?.align
																}
																className={
																	group?.title
																		?.className
																}
																family={
																	group?.title
																		?.family
																}
																weight={
																	group?.title
																		?.weight
																}
															/>
														) : null}
														{group?.image && (
															<Image
																variant={
																	group?.image
																		?.variant
																}
																color={
																	group?.image
																		?.color
																}
																format={
																	group?.image
																		?.format
																}
																width={
																	group?.image
																		?.width
																}
																height={
																	group?.image
																		?.height
																}
																text={
																	group?.image
																		?.text
																}
																textColor={
																	group?.image
																		?.textColor
																}
																item={
																	group?.image
																}
																src={
																	group?.image
																		?.src
																}
															/>
														)}
														{group?.video && (
															<Video
																item={
																	group.video
																} // Assuming group.video contains at least the 'src' property
																muted={
																	group?.video
																		?.muted ||
																	true
																} // Turn off sound
																loop={
																	group?.video
																		?.loop ||
																	true
																} // Make the video loop
																autoPlay={
																	group?.video
																		?.autoPlay ||
																	true
																} // Autoplay the video
																controls={
																	group?.video
																		?.controls ||
																	false
																} // Hide video controls
																className={
																	group?.video
																		?.videoClass
																} // Apply any additional class for styling
																width={
																	group?.video
																		?.width
																} // Optional: Set video width
																height={
																	group?.video
																		?.height
																} // Optional: Set video height
																showControls={
																	group?.video
																		?.showControls ||
																	false
																}
															/>
														)}

														{group?.text &&
														Array.isArray(
															group?.text
														) ? (
															<div className="space-y-4 w- flex flex-col">
																{group?.text.map(
																	(
																		textBlock,
																		index
																	) => (
																		<Text
																			key={
																				index
																			}
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
														) : group?.text &&
														  group?.text.value ? (
															<Text
																value={
																	group?.text
																		?.value
																}
																size={
																	group?.text
																		?.size
																}
																style={
																	group?.text
																		?.style
																}
																color={
																	group?.text
																		?.color
																}
																fill={
																	group?.text
																		?.fill
																}
																align={
																	group?.text
																		?.align
																}
																className={
																	group?.text
																		?.className
																}
																family={
																	group?.text
																		?.family
																}
																weight={
																	group?.text
																		?.weight
																}
															/>
														) : null}

														{group?.lead && (
															<Text
																size="large"
																value={
																	group?.lead
																}
																color={
																	group?.lead
																		?.color
																}
																fill={
																	group?.text
																		?.fill
																}
															/>
														)}

														{Array.isArray(
															group?.list
														) && (
															<div className="list">
																{group.list.map(
																	(
																		item,
																		index
																	) => (
																		<List
																			key={
																				index
																			}
																			items={[
																				item,
																			]}
																		/>
																	)
																)}
															</div>
														)}

														{group?.buttons && (
															<div className="btns flex gap-4 mt-8">
																{group.buttons.map(
																	(
																		btn,
																		idx
																	) => (
																		<div
																			key={
																				idx
																			}
																			className="btn"
																		>
																			{btn?.type ===
																				'scroll' && (
																				<Button
																					onClick={() =>
																						scrollToSection(
																							btn?.href
																						)
																					}
																					// className="transition-all light:text-primary light:hover:text-white light:hover:bg-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary font-bold p-2 px-4 text-center mx-auto w-auto border-2 rounded-full border-primary h-auto gap-2 items-center flex"
																					variant={
																						btn?.variant
																					}
																				>
																					{
																						btn?.text
																					}
																					<ArrowLongDownIcon className="h-5 w-5" />
																				</Button>
																			)}

																			{btn?.type ===
																				'modal' && (
																				<Button
																					onClick={() =>
																						handleButtonClick(
																							btn
																						)
																					}
																					variant={
																						btn?.variant
																					}
																				>
																					{
																						btn?.text
																					}
																				</Button>
																			)}

																			{btn?.type ===
																				'external' && (
																				<a
																					href={
																						btn?.href
																					}
																					target="_blank"
																					rel="noopener noreferrer"
																					className="transition-all light:text-primary light:hover:text-white light:hover:bg-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary font-bold p-2 px-4 text-center mx-auto w-auto border-2 rounded-full border-primary h-auto gap-2 items-center flex"
																				>
																					{
																						btn?.text
																					}
																				</a>
																			)}
																		</div>
																	)
																)}
															</div>
														)}
													</div>
												)
											)}
										</div>
									</div>
								</div>
							))}

							{/* {intro.content.map((contentItem, index) => (
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
							))} */}
						</div>
					))}

					{/* {console.log(work)} */}

					<Experiences
						showExperiencesFull={true}
						setShowExperiencesFull={setShowExperiencesFull}
						selectedChanged={selectedChanged}
						active={active}
					/>

					<ul className="bg-white experiences flex flex-col justify-start align-center px-0 mt-4 mb-4 md:overflow-y-auto md:mx-4 hidden">
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
									className={`col-span-3 pt-0 mb-0 text-left text-slate-700 text-2xl md:text-base md:font-medium sm:w-24 md:w-40 ${
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
									className={`col-span-2 pt-0 mb-0 md:ml-8 text-xs md:text-base md:text-center text-slate-700 lg:font-light ${
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
									className={`col-span-1 pt-0 mb-0 ml-auto text-right text-xs md:text-base md:text-center text-slate-700 lg:font-light ${
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
	openContactModal,
}) => {
	// const [active, setActive] = useState(null);
	// const tags = useMemo(() => {
	// 	return lodash.uniq(
	// 		work.flatMap(({ cases = [] }) => {
	// 			return cases.flatMap(({ tags = [] }) => tags);
	// 		})
	// 	);
	// }, []);

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
					<Profile openContactModal={openContactModal} />

					{!showProfile && (
						<button
							onClick={() => setShowProfile(true)}
							className="transition-all light:text-primary light:hover:text-white light:hover:bg-primary dark:text-primary dark:hover:text-white dark:hover:bg-primary font-bold p-2 px-4 text-center mx-auto w-auto border-2 rounded-full border-primary h-auto gap-2 items-center flex"
						>
							Read more
							<ArrowLongRightIcon className="h-5 w-5" />
						</button>
					)}

					<ExperiencesShort
						selectedChanged={selectedChanged}
						setPreviewCase={setPreviewCase}
						active={active}
						previewCase={previewCase}
					/>

					{/* <TagsList tags={tags} selectedChanged={selectedChanged} /> */}

					<Social openContactModal={openContactModal} />
				</div>
			</div>
		</>
	);
};

export default AboutShort;
export { About };
