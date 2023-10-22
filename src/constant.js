const about = [
	{
		id: 0,
		name: 'Daniel Lauding',
		email: 'daniel@lauding.se',
		logo: '/images/logo.svg',
		logoMov: '/images/logoH.mov',
		hero: '/images/me.jpg',
		description:
			'I am a hybrid* designer who enjoys prototyping, conceptualizing and designing interfaces',
		content: [
			{
				groups: [
					{
						group: [
							{
								text: [
									{
										value: 'I am a Lead Product Designer with a passion for bringing creative concepts to life through intricate design and efficient prototyping. Often regarded as a hybrid designer, I find fulfillment in delving deep into multiple facets of the design process, continuously pushing boundaries and challenging norms.',
									},
								],
							},
							{
								text: [
									{
										value: `What sets me apart is my penchant for exploration. I'm at my best when charting unfamiliar terrains, whether it's designing a new feature, creating an innovative prototype, or shaping an entire design system. This exploratory zeal is where my creativity meets purpose, resulting in designs that not only look appealing but also function seamlessly.`,
									},
								],
							},
							{
								text: [
									{
										value: `Over the years, I have developed comprehensive design systems, utilizing various design tools to provide cohesive, user-centric experiences. My skill set also extends to frontend development, with proficiency in React and basic HTML, underscoring my ability to understand and implement technical aspects of design.`,
									},
								],
							},
							{
								text: [
									{
										value: `In essence, I am a design enthusiast driven by the thrill of creation and the satisfaction of seeing my prototypes come to life. My work is a fusion of aesthetics, functionality, and innovation - a testament to my commitment towards creating impactful user experiences.`,
									},
								],
							},
						],
					},
				],
			},
		],
		timeline: [
			{
				id: 0,
				date: '9 December 1986',
				title: 'Im born',
				text: 'Born in Västerås, Sweden',
			},
			{
				id: 1,
				date: '13 February 2023',
				title: 'Im sitting in India learning how to make a timeline',
				text: 'Goal with this timeline is to be able to quickly see my career throughtout my professional career. Be able to click to view a project that is in this portfolio.',
			},
			{
				id: 2,
				date: '14 February 2023',
				title: 'TODO',
				text: 'ADD EXPERIENCES FROM LINKEDIN + PERSONAL GOALS + ACTIVE STATE + KLICK TO GO TO A CASE',
			},
			{
				id: 3,
				date: '14 February 2023',
				title: 'TODO',
				text: 'Nunc dignissim vel neque a sodales. Nulla ornare finibus massa sed dignissim. Sed at facilisis augue, non maximus odio. Vestibulum rhoncus est sapien, at vehicula sapien lobortis quis. Morbi in orci eget odio tempor lacinia nec eget justo. Duis non diam lorem. Aliquam erat volutpat. Donec gravida at nisi at rhoncus. Suspendisse potenti.',
			},
			{
				id: 4,
				date: '14 February 2023',
				title: 'TODO',
				text: 'Nunc dignissim vel neque a sodales. Nulla ornare finibus massa sed dignissim. Sed at facilisis augue, non maximus odio. Vestibulum rhoncus est sapien, at vehicula sapien lobortis quis. Morbi in orci eget odio tempor lacinia nec eget justo. Duis non diam lorem. Aliquam erat volutpat. Donec gravida at nisi at rhoncus. Suspendisse potenti.',
			},
			{
				id: 5,
				date: '14 February 2023',
				title: 'TODO',
				text: 'Nunc dignissim vel neque a sodales. Nulla ornare finibus massa sed dignissim. Sed at facilisis augue, non maximus odio. Vestibulum rhoncus est sapien, at vehicula sapien lobortis quis. Morbi in orci eget odio tempor lacinia nec eget justo. Duis non diam lorem. Aliquam erat volutpat. Donec gravida at nisi at rhoncus. Suspendisse potenti.',
			},
			{
				id: 6,
				date: '14 February 2023',
				title: 'TODO',
				text: 'Nunc dignissim vel neque a sodales. Nulla ornare finibus massa sed dignissim. Sed at facilisis augue, non maximus odio. Vestibulum rhoncus est sapien, at vehicula sapien lobortis quis. Morbi in orci eget odio tempor lacinia nec eget justo. Duis non diam lorem. Aliquam erat volutpat. Donec gravida at nisi at rhoncus. Suspendisse potenti.',
			},
			{
				id: 7,
				date: '14 February 2023',
				title: 'TODO',
				text: 'Nunc dignissim vel neque a sodales. Nulla ornare finibus massa sed dignissim. Sed at facilisis augue, non maximus odio. Vestibulum rhoncus est sapien, at vehicula sapien lobortis quis. Morbi in orci eget odio tempor lacinia nec eget justo. Duis non diam lorem. Aliquam erat volutpat. Donec gravida at nisi at rhoncus. Suspendisse potenti.',
			},
		],
		skills: [
			{
				design: [
					{
						name: 'User Experience',
						rank: 5,
					},
					{
						name: 'Figma',
						rank: 5,
					},
				],
				development: [
					{
						name: 'HTML & CSS',
						rank: 5,
					},
					{
						name: 'React JS',
						rank: 3,
					},
					{
						name: 'Javascript',
						rank: 2,
					},
				],
				software: [
					{
						name: 'Figma',
						rank: 5,
					},
				],
			},
		],
	},
];

const work = [
	{
		id: 0,
		client: 'Asteria',
		role: 'Co-Founder & Lead Product Design',
		date: '2017 – Present',
		location: 'Remote / Sweden',
		bg: '/images/case/asteria/bg_asteria.png',
		url: 'https://www.spotify.com',
		soon: true,
	},
	{
		id: 1,
		client: 'Spotify',
		role: 'Product Design Consultant',
		date: '2017',
		location: 'Brazil / Sweden',
		bg: '/images/case/spotify/bg_spotify.jpeg',
		url: 'https://www.spotify.com',
		protected: true,
		index: true,
		cases: [
			{
				id: 0,
				client: 'Spotify',
				case: 'growth-enable-more-free-users-emerging-markets',
				title: 'Optimize product value for existing markets with growth potential',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
				bg: '/images/case/spotify/bg_favela.jpg',
				image: {
					src: '/images/case/spotify/bg_spotify.jpeg',
				},
				tags: [
					'UX',
					'UI',
					// {
					// 	id: '0',
					// 	name: 'UX',
					// 	tooltip: 'How it feels',
					// },
					// {
					// 	id: '1',
					// 	name: 'UI',
					// 	tooltip: 'How it shines',
					// },
					// {
					// 	id: '2',
					// 	name: 'Prototyping',
					// 	tooltip: 'Put some duct tape around it',
					// },
					// {
					// 	id: '2',
					// 	name: 'Prototyping',
					// 	tooltip: 'Put some duct tape around it',
					// },
					// 'User testing',
					// 'Field research',
				],
				library: {
					folder: 'spotify',
				},
				protected: true,
				content: [
					{
						id: 0,
						bg: '/images/case/spotify/bg_favela.jpg',
						variant: 'full',
					},
					{
						id: 4,
						section: 'image-gallery',
						image: {
							variant: 'gallery',
							images: [
								{
									id: 0,
									src: '/images/case/spotify/looptest/01.png',
									title: 'Test image title #1',
									text: 'Här har vi gjort lite tester för att se hur användarna tycker',
								},
								{
									id: 1,
									src: '/images/case/spotify/looptest/02.png',
									title: 'Test image title #2',
									text: 'Asdf lite test',
								},
								{
									id: 2,
									src: '/images/case/spotify/looptest/03.png',
									title: 'Test image title #3',
									text: 'Asdf lite test',
								},
								{
									id: 3,
									src: '/images/case/spotify/looptest/04.png',
									title: 'Test image title #4',
									text: 'Hej hej hemskt mycket hej',
								},
							],
						},
					},
					{
						id: 5,
						section: 'scene-imagery',
						variant: 'full',
						image: {
							variant: 'mapper',
							src: '/images/case/spotify/bg_favela.jpg',
							map: {
								name: 'my-map',
								areas: [
									{
										name: '0',
										areaKeyName: 'me',
										shape: 'circle',
										coords: [1016, 393, 4],
										preFillColor: 'rgba(0,0,0,0.8)',
										strokeColor: '#fff',
										lineWidth: 4,
										fillColor: 'rgba(0,0,0,0.8)',
										title: 'Just me in Action',
										description:
											'Im trying to understand the pain points and if we can help serving music to all homes',
										// image: '/images/case/spotify/04.png',
									},
									{
										name: '1',
										areaKeyName: 'tester',
										// shape: 'poly',
										// coords: [
										// 	1141, 465, 1172, 448, 1206, 500,
										// 	1168, 509,
										// ],
										shape: 'circle',
										coords: [1171, 475, 4],
										preFillColor: 'rgba(0,0,0,0.8)',
										fillColor: 'rgba(0,0,0,0.8)',
										strokeColor: '#fff',
										lineWidth: 4,
										title: 'Interacting with a early prototype while being interviewed',
										description:
											'This is a description of the area',
										image: '/images/case/spotify/04.png',
									},
								],
							},
						},
					},
					{
						id: 6,
						section: 'problem',
						title: 'The problem',
						lead: `In 2017, Spotify was grappling with the challenge of broadening its reach among free users in emerging markets. The issue was deeply rooted in users' mobile data consumption fears, and their preference for downloading mp3s over streaming, especially among individuals with older Android phones - a phenomenon we termed "year class phones." Users were hesitant to stream content when not connected to Wi-Fi, resulting in limited user growth in these markets.`,
						text: 'problem va',
						variant: 'description',
					},
					// {
					// 	id: 6,
					// 	section: 'discovery',
					// 	title: 'Identify ways to attract new freemium users',
					// 	text: 'asdf',
					// 	lead: 'We understood that free users on year class phones (older androids) still where downloading mp3s and was afraid of streaming when not on Wi-Fi. A hypothesis to gain trust to stream on cellular was to build a solution that uses less data consumption.',
					// 	style: 'hero',
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			animate: true,
					// 			title: {
					// 				variant: 'medium',
					// 				value: 'Jag är en rubrik i en grupp',
					// 			},
					// 			text: {
					// 				variant: 'large',
					// 				value: 'Jag är texten i denna grupp',
					// 			},
					// 		},
					// 	],
					// },
					// {
					// 	id: 7,
					// 	section: 'solution',
					// 	title: 'Consume 1% of data',
					// 	lead: 'One of our solutions we ran A/B tests on would serve 4 playlists on-demand and when playing songs from those it only consumed 1% of their data. The design is branded with dark-blue to build awareness throughtout the flow.',
					// 	style: 'hero',
					// },
					{
						id: 7,
						section: 'goal',
						title: 'Goal',
						lead: `Our main objective was to alleviate users' concerns about high data consumption during streaming and transform their music listening behavior from downloading mp3s to streaming songs on Spotify. The end goal was to expand Spotify's user base and increase engagement in emerging markets, specifically Brazil.`,
						variant: 'description',
					},
					{
						id: 8,
						section: 'insights',
						title: 'Insights',
						lead: `My team and I embarked on a two-week local field research trip to Brazil to gain a firsthand understanding of our users and their behavior. This involved conducting in-home interviews and user testing on various prototypes. Through these rigorous investigations, we discovered the users' concern about mobile data consumption and their need for a streaming solution that was both data-efficient and trustworthy.`,
						variant: 'description',
					},
					{
						id: 9,
						section: 'approach',
						title: 'The Approach',
						lead: `Based on our insights, we formulated a hypothesis - if we could design a feature that ensured minimal data consumption, we could gain the users' trust and encourage them to stream over cellular networks. We rapidly iterated potential solutions and developed prototypes for testing.`,
						variant: 'description',
					},
					{
						id: 10,
						section: 'outcome',
						title: 'Outcome',
						lead: `One solution we conceived and tested was a feature that allowed users to access four on-demand playlists, and when songs were played from these, it only consumed 1% of their data. The design was given a distinct dark-blue branding for easy identification and to build awareness throughout the user flow. We conducted A/B testing on this feature to evaluate its effectiveness. By providing users with a low data consumption solution, we addressed their concerns and provided a user-friendly solution that facilitated streaming even when not connected to Wi-Fi. This initiative significantly contributed to Spotify's efforts in expanding its reach to free users in emerging markets.`,
						variant: 'description',
					},
					// {
					// 	id: 6,
					// 	section: 'designs',
					// 	title: 'Designs',
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #1',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			title: {
					// 				variant: 'medium',
					// 				value: 'Jag är en rubrik i en grupp',
					// 			},
					// 			text: {
					// 				variant: 'large',
					// 				value: 'Jag är texten i denna grupp',
					// 			},
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 			groups: [
					// 				{
					// 					id: 1,
					// 					image: {
					// 						variant: 'dummy',
					// 						text: 'Bild #2',
					// 						width: 784,
					// 						height: 1353,
					// 						color: '#20232a',
					// 						textColor: '#737373',
					// 						format: 'png',
					// 					},
					// 				},
					// 				{
					// 					id: 2,
					// 					image: {
					// 						variant: 'dummy',
					// 						text: 'Bild #3',
					// 						width: 784,
					// 						height: 1353,
					// 						color: '#20232a',
					// 						textColor: '#737373',
					// 						format: 'png',
					// 					},
					// 				},
					// 				{
					// 					id: 3,
					// 					image: {
					// 						variant: 'dummy',
					// 						text: 'Bild #4',
					// 						width: 784,
					// 						height: 1353,
					// 						color: '#20232a',
					// 						textColor: '#737373',
					// 						format: 'png',
					// 					},
					// 				},
					// 			],
					// 		},
					// 	],
					// },
				],
			},
		],
	},
	{
		id: 2,
		client: 'Record Union',
		role: 'Senior Product Design Consultant',
		date: '2017 – 2018',
		location: 'Remote / Sweden',
		bg: '/images/case/recordunion/bg_recordunion.png',
		url: 'https://www.recordunion.com',
		protected: true,
		index: true,
		cases: [
			{
				id: 0,
				case: 'growth-enable-more-free-users-emerging-markets',
				title: 'Release your music. Get discovered',
				lead: '',
				tags: ['UX', 'UI', 'Prototyping'],
				protected: true,
				library: {
					folder: 'recordunion',
				},
				content: [
					{
						id: 1,
						section: 'problem',
						title: 'The problem',
						lead: `Record Union, in its quest to provide a platform for artists to distribute their music across popular digital stores, identified that their existing user interface was becoming dated. This realization posed a challenge, especially in a saturated market where user experience could significantly impact an artist's choice of platform.`,
						variant: 'description',
					},
					{
						id: 2,
						section: 'goal',
						title: 'Goal',
						lead: `The primary aim was to rejuvenate the user interface and cultivate a cohesive design system that would resonate with both newcomers and seasoned artists. Beyond just a visual refresh, the intention was to infuse innovation and structure into the design to bolster user engagement and efficiency.`,
						variant: 'description',
					},
					{
						id: 3,
						section: 'insights',
						title: 'Insights',
						lead: `The existing interface, while functional, lacked modern design cues and fluidity. The absence of a cohesive design system meant inconsistency across various parts of the platform. The challenge was to collaborate with the in-house art director, ensuring the revamped design echoed the brand's essence while bringing fresh perspectives.`,
						variant: 'description',
					},
					{
						id: 4,
						section: 'approach',
						title: 'The Approach',
						lead: `Upon being contacted by Record Union, I worked hand-in-hand with their art director, focusing on brainstorming innovative ideas while structuring a fresh design. Our collaborative efforts led to the development of a cohesive design system. Using Sketch, I revamped the older UI and prototyped both web and mobile portals, constantly iterating based on feedback and ensuring that the design remained aligned with our envisioned structure.`,
						variant: 'description',
					},
					{
						id: 5,
						section: 'outcome',
						title: 'Outcome',
						lead: `The collaborative effort resulted in a refreshed and streamlined user interface for Record Union. The cohesive design system brought uniformity across the platform, enhancing the user experience. Artists, both new and experienced, found the revamped platform more intuitive and engaging, further solidifying Record Union's position in the market.`,
						variant: 'description',
					},
				],
			},
		],
	},
	{
		id: 3,
		client: 'Länsförsäkringar',
		role: 'Art Director Consultant',
		date: '2016 – 2017',
		location: 'Stockholm / Sweden',
		bg: '/images/case/lansforsakringar/bg_lf.png',
		protected: true,
		index: true,
		url: 'https://www.lansforsakringar.se',
		// cases: [
		// 	{
		// 		id: 0,
		// 		case: 'digital-identity',
		// 		title: 'New multi-channel digital visual identity',
		// 		lead: 'I was hired by Identity Works, as a Senior designer consultant for the swedish insurance & bank company Länsförsäkringar AB. Identity Works was working on the new brand identity.',
		// 		tags: ['UX', 'UI', 'Prototyping', 'User testing'],
		// 		library: {
		// 			folder: 'lansforsakringar',
		// 		},
		// 		protected: true,
		// content: [
		// 	{
		// 		id: 1,
		// 		section: 'brief',
		// 		title: 'Design sprint',
		// 		lead: 'The challenge was for five weeks to work on the new digital visual identity (convert from an new updated analog idenity created by Identity Works). Each week was a new platform. During this weeks we worked on the public facing website, banking environment, mobile app and for the watch.',
		// 	},
		// 	{
		// 		id: 2,
		// 		section: 'deliverables',
		// 		title: 'Execution & deliverables',
		// 		lead: 'After the first phase Länsförsäkringar hired me as a Art Director consultant. My role was to make sure we kept the new visual identity across all platforms and teams while working closely with the developers and stakeholders.',
		// 	},
		// 	{
		// 		id: 3,
		// 		section: 'outcome',
		// 		title: 'Launched 2016',
		// 		lead: 'The new visual identity was released in Q4 of 2016 on various platforms and are still available for customers of Länsförsäkringar',
		// 	},
		// ],
		// 	},
		// ],
		cases: [
			{
				id: 0,
				date: '2015',
				case: 'revamping-their-brand-identity',
				title: 'Revamping their brand identity',
				// tags: {
				// 	default: true,
				// 	roles: ['UX', 'UI'],
				// },
				tags: ['UX', 'UI'],
				theme: 'lf',
				hero: {
					gap: 32,
					columns: 3,
					rows: 2,
					// class: 'heroclass',
					description: {
						colStart: 1,
						colEnd: 4,
						columns: 3,
						rowStart: 1,
						title: {
							value: 'Revamping their brand identity',
							colStart: 1,
							colEnd: 3,
						},
						lead: {
							value: 'I was brought onboard by Identity Works as a Senior Designer Consultant to work for Länsförsäkringar AB, a leading Swedish insurance and banking company.',
							colStart: 1,
							colEnd: 1,
						},
						desc: {
							value: 'tjoho ja de är väl en desc',
							colStart: 1,
							colEnd: 1,
						},
					},
					image: {
						src: '/images/case/lansforsakringar/devices.png',
						// imgClass: 'mt-4 mb-4 absolute right-0 bottom-0',
						columns: 2,
						colStart: 2,
						rowStart: 2,
						margin: '-132px auto 0',
					},
				},
				// bg: '/images/case/spotify/bg_favela.jpg',
				// image: {
				// 	src: '/images/case/spotify/bg_spotify.jpeg',
				// },
				// leadClass: 'leadclass',
				// heroClass: 'heroclass',
				// columns: 2,
				// colStart: 1,
				// gap: 4,

				image: {
					src: '/images/case/lansforsakringar/hero_dark.png',
					// imgClass: 'mt-4 mb-4 absolute right-0 bottom-0',
					// colStart: 2,
				},

				// convert to hero object, have image, title, desc, etc and then do all specific classes or placements there
				// or just use conten group to behave the same, try with below
				content: [
					{
						id: 0,
						bg: '/images/case/lansforsakringar/intro.png',
						variant: 'full',
						class: 'bg-contain bg-fixed bg-no-repeat bg-center',
						backgroundColor: '#F3F3F3',
					},
					{
						id: 1,
						section: 'problem',
						anchor: '#problem',
						columns: 3,
						gap: 4,
						// tabs: [
						// 	{
						// 		section: 'Overview',
						// 		title: 'Introduction',
						// 		lead: 'This is the overview section.',
						// 		active: true,
						// 	},
						// 	{
						// 		section: 'Details',
						// 		title: 'Details',
						// 		lead: 'This is the details section.',
						// 		groups: [
						// 			{
						// 				id: 0,
						// 				columns: 1,
						// 				title: {
						// 					value: 'Tabbed group content',
						// 				},
						// 			},
						// 			{
						// 				id: 1,
						// 				columns: 2,
						// 				text: {
						// 					value: 'Etiam eu dolor eget lorem imperdiet pretium. Quisque sed elementum neque, non egestas ante. Sed imperdiet, mauris in lacinia vehicula, magna elit ornare tortor, quis sagittis libero nunc eu ipsum. Ut sit amet arcu',
						// 					size: 'large',
						// 				},
						// 			},
						// 		],
						// 	},
						// 	// Add more tabs as needed
						// ],
						groups: [
							{
								id: 0,
								columns: 1,
								title: {
									value: 'The problem',
								},
							},
							{
								id: 1,
								columns: 2,
								text: {
									value: `I was brought onboard by Identity Works as a Senior Designer Consultant to work for Länsförsäkringar AB, a leading Swedish insurance and banking company. The company was facing a challenging task of completely revamping their brand identity and establishing a cohesive, modern, and visually appealing digital presence across various platforms, including their public-facing website, banking environment, mobile app, and watch interface.`,
									size: 'large',
								},
							},
						],
					},
					{
						id: 2,
						bg: '/images/case/lansforsakringar/lfui-map@2x.png',
						variant: 'full',
						class: 'bg-cover bg-local bg-no-repeat bg-center',
						backgroundColor: '#fff',
					},
					{
						id: 3,
						section: 'goal',
						anchor: '#goal',
						columns: 3,
						gap: 4,
						// accordion: [
						// 	{
						// 		section: 'Overview',
						// 		title: 'Introduction',
						// 		lead: 'This is the overview section.',
						// 	},
						// 	{
						// 		section: 'Details',
						// 		title: 'Details',
						// 		lead: 'This is the details section.',
						// 		groups: [
						// 			{
						// 				id: 0,
						// 				columns: 1,
						// 				title: {
						// 					value: 'Tabbed group content',
						// 				},
						// 			},
						// 			{
						// 				id: 1,
						// 				columns: 2,
						// 				text: {
						// 					value: 'Etiam eu dolor eget lorem imperdiet pretium. Quisque sed elementum neque, non egestas ante. Sed imperdiet, mauris in lacinia vehicula, magna elit ornare tortor, quis sagittis libero nunc eu ipsum. Ut sit amet arcu',
						// 					size: 'large',
						// 				},
						// 			},
						// 		],
						// 	},
						// 	// Add more tabs as needed
						// ],
						groups: [
							{
								id: 0,
								columns: 1,
								title: {
									value: 'Goal',
								},
							},
							{
								id: 1,
								columns: 2,
								text: {
									value: `The primary objective was to create and implement a fresh and unified digital visual identity for Länsförsäkringar AB, thereby enhancing user experience and interaction across all digital touchpoints. The new identity needed to embody the brand’s ethos and values while being adaptable and visually consistent across platforms.`,
									size: 'large',
								},
							},
						],
					},
					{
						id: 4,
						section: 'insights',
						anchor: '#insights',
						columns: 3,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 1,
								title: {
									value: 'Insights',
								},
							},
							{
								id: 1,
								columns: 2,
								text: {
									value: `Over a period of five weeks, each week dedicated to a different platform, we delved into the existing brand aesthetics, user engagement patterns, and digital interfaces. The intention was to understand the elements that resonate with their audience and identify areas of inconsistency and potential improvement.`,
									size: 'large',
								},
								groups: [
									{
										id: 0,
										title: {
											value: 'Watch',
										},
										text: {
											value: 'Lorem ipsum',
										},
									},
									{
										id: 1,
										title: {
											value: 'Mobile',
										},
										text: {
											value: 'Lorem ipsum',
										},
									},
									{
										id: 1,
										title: {
											value: 'Web',
										},
										text: {
											value: 'Lorem ipsum',
										},
									},
									{
										id: 1,
										title: {
											value: 'Insurance',
										},
										text: {
											value: 'Lorem ipsum',
										},
									},
									{
										id: 1,
										title: {
											value: 'Banking',
										},
										text: {
											value: 'Lorem ipsum',
										},
									},
								],
							},
						],
					},
					// {
					// 	id: 5,
					// 	section: 'platforms',
					// 	anchor: '#platforms',
					// 	columns: 6,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			title: {
					// 				value: 'Watch',
					// 			},
					// 			text: {
					// 				value: 'Lorem ipsum',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			title: {
					// 				value: 'Mobile',
					// 			},
					// 			text: {
					// 				value: 'Lorem ipsum',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			title: {
					// 				value: 'Web',
					// 			},
					// 			text: {
					// 				value: 'Lorem ipsum',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			title: {
					// 				value: 'Insurance',
					// 			},
					// 			text: {
					// 				value: 'Lorem ipsum',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			title: {
					// 				value: 'Banking',
					// 			},
					// 			text: {
					// 				value: 'Lorem ipsum',
					// 			},
					// 		},
					// 	],
					// },
					{
						id: 5,
						section: 'test',
						anchor: '#test',
						columns: 2,
						gap: 4,
						class: 'h-screen relative',
						container: 'h-full relative container',
						groups: [
							{
								id: 0,
								columns: 1,
								class: 'h-full relative',
								image: {
									src: '/images/case/lansforsakringar/open/Home_desktop.png',
									// width: 784,
									// height: 1353,
									imgClass: 'object-fill',
									variant: 'scrollimg',
								},
							},
							{
								id: 1,
								columns: 1,
								class: 'h-full relative',
								title: {
									value: 'Homepage',
									fill: 'red',
									className: 'pelle',
								},
								text: [
									{
										value: `Morbi finibus, ligula nec mattis laoreet, lacus velit tincidunt purus, eget fermentum magna neque quis erat. Duis tempus quam eu elit fringilla, id dignissim metus faucibus. Donec quam mi, congue nec erat ac, porttitor dictum augue. Aenean sit amet sollicitudin purus, sed malesuada nisi. Nulla venenatis, purus et tincidunt sodales, mi urna ornare mauris, quis suscipit metus massa ac nulla. Quisque finibus, augue eu consectetur consectetur, elit risus ullamcorper ipsum, vel porttitor ante nisl vel elit. Etiam tempor, purus non tincidunt egestas, eros nulla tempus diam, quis sodales metus velit et metus. Duis nec elementum nulla, eu dictum augue.`,
										size: 'medium',
									},
									{
										value: `hur får jag vänstra delen scrolla när jag scrollar här med, textblocket, funkar ej`,
										size: 'medium',
									},
								],
							},
						],
					},
					{
						id: 6,
						section: 'test',
						anchor: '#test',
						columns: 2,
						gap: 4,
						class: 'h-screen relative',
						container: 'h-full relative container',
						groups: [
							{
								id: 0,
								columns: 1,
								class: 'h-full relative',
								text: {
									value: `test`,
									size: 'large',
								},
							},
							{
								id: 1,
								columns: 1,
								class: 'h-full relative',
								image: {
									folder: 'lansforsakringar/mobile/',
									variant: 'imgscrollloop',
								},
							},
						],
					},
					{
						id: 7,
						image: {
							variant: 'scrollimghorizontal',
							src: '/images/case/lansforsakringar/mobile/01.00 login.png',
						},
						backgroundColor: '#e5eff7',
						class: 'items-center justify-center',
					},
					{
						id: 8,
						variant: 'scrollHorizontally',
						title: 'Scroll me horizontally',
						backgroundColor: '#e5eff7',
						// class: 'items-center justify-center',
					},
					{
						id: 9,
						section: 'approach',
						anchor: '#approach',
						columns: 3,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 1,
								title: {
									value: 'The Approach',
								},
							},
							{
								id: 1,
								columns: 2,
								text: {
									value: `Building on the insights, we worked on crafting a new digital visual identity. Ensuring the visual language was consistent and adaptable across different platforms was crucial. Following the design phase, Länsförsäkringar AB hired me as an Art Director consultant. My primary responsibility was to oversee the accurate application of the new visual identity across all platforms and teams, closely collaborating with developers and stakeholders to ensure the maintenance of visual integrity.`,
									size: 'large',
								},
							},
						],
					},
					{
						id: 10,
						section: 'outcome',
						columns: 3,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 1,
								title: {
									value: 'Outcome',
								},
							},
							{
								id: 1,
								columns: 2,
								text: {
									value: `The new visual identity, finalized and ready for implementation, was scheduled to be launched in Q4 of 2016 across multiple platforms. The unified and revitalized digital brand identity was a significant milestone in enhancing Länsförsäkringar AB's digital user experience. My role as the Art Director consultant played a pivotal part in ensuring the successful and consistent roll-out of the new identity, paving the way for the brand's modernized digital presence.`,
									size: 'large',
								},
							},
						],
					},
					{
						id: 11,
						section: 'image-loop',
						image: {
							variant: 'loop',
							folder: 'lansforsakringar/mobile/',
							// Click to open a image in modal
						},
					},
					// {
					// 	id: 9,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 2,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 2,
					// 			title: {
					// 				variant: 'large',
					// 				value: 'The problem',
					// 			},
					// 			lead: `I was brought onboard by Identity Works as a Senior Designer Consultant to work for Länsförsäkringar AB, a leading Swedish insurance and banking company. The company was facing a challenging task of completely revamping their brand identity and establishing a cohesive, modern, and visually appealing digital presence across various platforms, including their public-facing website, banking environment, mobile app, and watch interface.`,
					// 		},
					// 	],
					// },
					// {
					// 	id: 10,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 2,
					// 			title: {
					// 				variant: 'large',
					// 				value: 'The problem',
					// 			},
					// 			lead: `I was brought onboard by Identity Works as a Senior Designer Consultant to work for Länsförsäkringar AB, a leading Swedish insurance and banking company. The company was facing a challenging task of completely revamping their brand identity and establishing a cohesive, modern, and visually appealing digital presence across various platforms, including their public-facing website, banking environment, mobile app, and watch interface.`,
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 2,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 	],
					// },
					// {
					// 	id: 10,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	container: 'fluid',
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 2,
					// 			title: {
					// 				variant: 'large',
					// 				value: 'The problem',
					// 			},
					// 			style: 'px-8',
					// 			lead: `I was brought onboard by Identity Works as a Senior Designer Consultant to work for Länsförsäkringar AB, a leading Swedish insurance and banking company. The company was facing a challenging task of completely revamping their brand identity and establishing a cohesive, modern, and visually appealing digital presence across various platforms, including their public-facing website, banking environment, mobile app, and watch interface.`,
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 2,
					// 			image: {
					// 				src: '/images/case/spotify/bg_spotify.jpeg',
					// 				width: 784,
					// 				height: 1353,
					// 				imgClass: 'object-fill',
					// 			},
					// 		},
					// 	],
					// },
					// {
					// 	id: 12,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 2,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 	],
					// },
					// {
					// 	id: 13,
					// 	section: 'testar 123',
					// 	columns: 4,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 2,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 3,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 	],
					// },
					// {
					// 	id: 14,
					// 	section: 'testar 123',
					// 	columns: 2,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 			},
					// 		},
					// 	],
					// },
					// {
					// 	id: 15,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 1,
					// 			title: {
					// 				variant: 'small',
					// 				value: 'The problem',
					// 			},
					// 			lead: 'The problem',
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 2,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 				imgClass: 'object-fill w-full',
					// 			},
					// 		},
					// 	],
					// },
					// {
					// 	id: 16,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 1,
					// 			columns: 2,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 				imgClass: 'object-fill w-full',
					// 			},
					// 		},
					// 		{
					// 			id: 0,
					// 			columns: 1,
					// 			title: {
					// 				variant: 'small',
					// 				value: 'The problem',
					// 			},
					// 			lead: 'The problem',
					// 		},
					// 	],
					// },
					// {
					// 	id: 17,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 1,
					// 			title: {
					// 				variant: 'large',
					// 				value: 'The problem',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 2,
					// 			lead: `I was brought onboard by Identity Works as a Senior Designer Consultant to work for Länsförsäkringar AB, a leading Swedish insurance and banking company. The company was facing a challenging task of completely revamping their brand identity and establishing a cohesive, modern, and visually appealing digital presence across various platforms, including their public-facing website, banking environment, mobile app, and watch interface.`,
					// 		},
					// 	],
					// },
					// {
					// 	id: 18,
					// 	section: 'testar 123',
					// 	columns: 3,
					// 	rows: 3,
					// 	gap: 4,
					// 	groups: [
					// 		{
					// 			id: 0,
					// 			columns: 1,
					// 			rowStart: 3,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 				imgClass: 'object-fill w-full',
					// 			},
					// 		},
					// 		{
					// 			id: 1,
					// 			columns: 2,
					// 			rowStart: 1,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 				imgClass: 'object-fill w-full',
					// 			},
					// 		},
					// 		{
					// 			id: 2,
					// 			columns: 3,
					// 			colStart: 1,
					// 			rowStart: 2,
					// 			image: {
					// 				variant: 'dummy',
					// 				text: 'Bild #2',
					// 				width: 784,
					// 				height: 1353,
					// 				color: '#20232a',
					// 				textColor: '#737373',
					// 				format: 'png',
					// 				imgClass: 'object-fill w-full',
					// 			},
					// 		},
					// 	],
					// },
				],
			},
		],
	},
	{
		id: 4,
		client: 'Instinctly',
		role: 'CEO & Senior Product Design Consultant',
		date: '2007 – Present',
		location: 'Remote / Sweden',
		bg: '/images/case/instinctly/bg_instinctly.png',
		url: 'https://www.daniellauding.se',
		protected: true,
		index: true,
		cases: [
			{
				id: 0,
				case: 'klm',
				date: '2015',
				location: 'Amsterdam, Netherlands',
				tags: ['UX', 'UI', 'Prototyping', 'User testing'],
				title: 'New experience for travelers',
				lead: 'I was hired by AKQA Amsterdam, as a Senior designer consultant for the dutch airline KLM new web platform.',
				library: {
					folder: 'instinctly/klm',
				},
				content: [
					{
						id: 1,
						section: 'problem',
						title: 'The problem',
						lead: `I was contracted as a Senior Designer Consultant by AKQA Amsterdam to work on the Dutch airline company, KLM's new web platform. The task was to reimagine and revitalize KLM's digital presence. The existing web platform needed a comprehensive overhaul to meet modern user expectations and enhance the overall user experience.`,
						variant: 'description',
					},
					{
						id: 2,
						section: 'goal',
						title: 'Goal',
						lead: `The primary objective was to design a new, intuitive, and user-friendly web platform that would offer a superior customer experience while embodying KLM's brand identity. The ultimate goal was to improve user engagement and satisfaction, streamline online processes, and elevate KLM's digital touchpoints.`,
						variant: 'description',
					},
					{
						id: 3,
						section: 'insights',
						title: 'Insights',
						lead: `To gain a holistic understanding of the project, I collaborated closely with a User Experience Designer from AKQA and the in-house team at KLM's headquarters. Through biweekly sprints, we were able to gauge the specific needs, challenges, and expectations, ensuring our design solutions were firmly rooted in user-centered design principles.`,
						variant: 'description',
					},
					{
						id: 4,
						section: 'approach',
						title: 'The Approach',
						lead: `Over two months, we engaged in iterative design processes, involving regular sprints, each culminating with a demo presentation for KLM's stakeholders. This process fostered transparency, real-time feedback, and facilitated adjustments as needed. All workflow processes were prototyped using Proto.io, and I handed over the final design prototypes to developers along with the sketch files using Zeplin. This ensured a smooth and efficient transition from design to development.`,
						variant: 'description',
					},
					{
						id: 5,
						section: 'outcome',
						title: 'Outcome',
						lead: `The newly designed web platform was scheduled to be launched in early 2016 at beta.klm.com. With this update, KLM aimed to provide an improved user experience that aligns with modern customer needs and expectations. My role in this project, bridging the gap between design and development, was instrumental in ensuring a consistent and high-quality user experience across the new platform.`,
						variant: 'description',
					},
				],
			},
			{
				id: 1,
				case: 'mrusta',
				date: '2015',
				location: '',
				title: 'mrUsta',
				lead: '',
				library: {
					folder: 'instinctly/mrusta',
				},
				content: [
					{
						id: 1,
						section: 'problem',
						title: 'The problem',
						lead: `I was recruited by mrUsta, a Dubai-based startup dedicated to connecting users with the right service providers for various tasks, ranging from automotive help to plumbing services. As a nascent platform, mrUsta needed to build a user-friendly and intuitive application that would embody its newly formulated brand guidelines and provide a seamless user experience.`,
						variant: 'description',
					},
					{
						id: 2,
						section: 'goal',
						title: 'Goal',
						lead: `The goal of this project was to design an intuitive and user-centric interface that made finding and hiring the right service provider a smooth and hassle-free process. The app design needed to resonate with mrUsta's brand ethos and guidelines, ensuring consistency and creating a recognizable brand identity.`,
						variant: 'description',
					},
					{
						id: 3,
						section: 'insights',
						title: 'Insights',
						lead: `I began by thoroughly understanding the mrUsta brand guidelines and the unique needs of the target user demographic. I identified key elements for the app's UX/UI design that would enhance the process of searching for, selecting, and hiring a service provider.`,
						variant: 'description',
					},
					{
						id: 4,
						section: 'approach',
						title: 'The Approach',
						lead: `Building on these insights, I designed the user experience and interface of the app. I employed Pixate for prototyping, enabling the creation of interactive and high-fidelity prototypes to visualize and test the user flow. Once the design was refined and finalized, I handed over the prototypes to the developers along with the sketch files, using Zeplin to ensure a seamless handoff.`,
						variant: 'description',
					},
					{
						id: 5,
						section: 'outcome',
						title: 'Outcome',
						lead: `The design and launch of the mrUsta app marked a significant milestone in the company's journey. The user-centric design approach significantly improved the ease of finding and hiring service providers through the platform. The app embodied the new brand guidelines, creating a consistent brand identity across the digital touchpoints. My work in UX/UI design and close collaboration with the developers played a crucial role in creating a user-friendly and brand-consistent app that meets the users' needs.`,
						variant: 'description',
					},
				],
			},
			{
				id: 2,
				case: 'abro',
				date: '2014',
				location: 'Remote',
				title: 'Åbro website & CMS',
				lead: 'I was hired together with my team Producks by Folkets Stockholm, to design and develop a custom CMS and a new web for Åbro bryggeri. Producks was responsible for the user experience, interface design and development. The new web was released in beginning of 2015. Check it out on www.abro.se',
				library: {
					folder: 'instinctly/abro',
				},
				content: [
					{
						id: 1,
						section: 'problem',
						title: 'The problem',
						lead: `Folkets Stockholm recruited me and my team at Producks for an important task - redesigning and developing a new website and a custom Content Management System (CMS) for Åbro Bryggeri, one of the most renowned breweries in Sweden. The existing digital infrastructure of Åbro Bryggeri needed an overhaul to offer an improved user experience and streamline their content management process.`,
						variant: 'description',
					},
					{
						id: 2,
						section: 'goal',
						title: 'Goal',
						lead: `Our primary objective was twofold - to build a user-friendly, visually appealing, and intuitive website that aligns with Åbro Bryggeri's brand and to develop a custom CMS that would provide a streamlined platform for managing their digital content.`,
						variant: 'description',
					},
					{
						id: 3,
						section: 'insights',
						title: 'Insights',
						lead: `We delved into Åbro Bryggeri's brand, their digital presence, and the unique requirements of their content management process. Understanding these elements helped us identify key features and functionalities that needed to be incorporated into the website and the CMS.`,
						variant: 'description',
					},
					{
						id: 4,
						section: 'approach',
						title: 'The Approach',
						lead: `As a team, Producks was responsible for managing all aspects of the project, including user experience, interface design, and development. We used our insights to craft a comprehensive digital solution that addressed the needs of Åbro Bryggeri. By creating iterative designs and leveraging our development skills, we ensured a cohesive, user-centric, and brand-consistent outcome.`,
						variant: 'description',
					},
					{
						id: 5,
						section: 'outcome',
						title: 'Outcome',
						lead: `The new website, along with the custom CMS, was successfully launched in early 2015 (www.abro.se). This marked a significant improvement in Åbro Bryggeri's digital presence, enhancing the user experience and making content management more efficient. Our holistic approach to design and development played a crucial role in achieving a successful outcome that met Åbro Bryggeri's specific needs and expectations.`,
						variant: 'description',
					},
				],
			},
			{
				id: 3,
				case: 'actic',
				date: '2014',
				location: 'Remote',
				title: 'Actic',
				lead: '',
				library: {
					folder: 'instinctly/actic',
				},
			},
			// {
			// 	id: 4,
			// 	case: 'recurify',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Recurify',
			// 	lead: '',
			// 	library: {
			// 		folder: 'instinctly/recurify',
			// 	},
			// },
			// {
			// 	id: ,
			// 	case: 'Instinctly as app',
			// },
			// {
			// 	id: ,
			// 	case: 'MDH',
			// },
			// {
			// 	id: ,
			// 	case: 'Resrobot',
			// },
			// {
			// 	id: ,
			// 	case: 'Prolounge',
			// },
			// {
			// 	id: ,
			// 	case: 'samsung',
			// },
			// {
			// 	id: ,
			// 	case: 'Prolounge',
			// },
			{
				id: 5,
				case: 'resrobot',
				date: '2014',
				location: 'Remote',
				title: 'Resrobot',
				lead: '',
				library: {
					folder: 'instinctly/resrobot',
				},
			},
			// {
			// 	id: 6,
			// 	case: 'nexus',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Nexus',
			// 	lead: '',
			// 	library: {
			// 		folder: 'instinctly/nexus',
			// 	},
			// },
			// {
			// 	id: 7,
			// 	case: 'leosoderberg',
			// 	client: 'Mobb learning',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Leo Söderberg',
			// 	lead: '',
			// 	library: {
			// 		folder: 'instinctly/leosoderberg',
			// 	},
			// 	index: false,
			// },
			// {
			// 	id: 8,
			// 	case: 'producks',
			// 	date: '2014',
			// 	client: 'Producks',
			// 	location: 'Remote',
			// 	title: 'Producks',
			// 	soon: true,
			// 	lead: 'Donec quis lacinia lectus. Morbi vel est eget ligula blandit pellentesque nec eu erat.',
			// 	excerpt: 'Donec quis lacinia lectus.',
			// 	desc: 'Donec quis lacinia lectus. Morbi vel est eget ligula blandit pellentesque nec eu erat. Etiam sit amet sem et massa condimentum viverra. Quisque hendrerit ex at dictum aliquam. Quisque vehicula mi eros, in posuere neque condimentum a. In interdum porttitor sagittis. Fusce dictum mattis ex eget laoreet.',
			// 	library: {
			// 		folder: 'producks',
			// 	},
			// 	content: [
			// 		{
			// 			id: 1,
			// 			section: 'testar',
			// 			title: 'Olle',
			// 		},
			// 	],
			// 	tags: ['UX', 'UI'],
			// },
			{
				id: 9,
				case: 'steem',
				client: 'Steem',
				date: '2014',
				location: 'Remote',
				title: 'Steem',
				lead: '',
				protected: true,
				library: {
					folder: 'steem',
				},
				content: [
					{
						id: 1,
						section: 'problem',
						title: 'The problem',
						lead: `By 2011, many Swedish organizations, especially big names like political parties, struggled to easily customize and order their marketing materials online.`,
						variant: 'description',
					},
					{
						id: 2,
						section: 'goal',
						title: 'Goal',
						lead: `Our aim was to create a platform that would simplify the ordering and personalizing process for marketing materials.`,
						variant: 'description',
					},
					{
						id: 3,
						section: 'insights',
						title: 'Insights',
						lead: `To ensure we hit the mark, we traveled across Sweden, getting companies to test our initial platform. Their feedback was invaluable, pointing out both the strengths and areas needing improvement.`,
						variant: 'description',
					},
					{
						id: 4,
						section: 'approach',
						title: 'The Approach',
						lead: `With the feedback in hand, we developed an online storefront for customers to view and select print products. Simultaneously, we provided admins a backend tool, allowing them to upload design templates and mark specific parts as "editable" for the end-users.`,
						variant: 'description',
					},
					{
						id: 5,
						section: 'outcome',
						title: 'Outcome',
						lead: `Our platform became quite popular. It was even adopted by big parties, like 'Centerpartiet', for their marketing needs. And as a recognition of our hard work, Steem was nominated as Sweden's best Web to Print tool at the Graphic Awards in November 2011.`,
						variant: 'description',
					},
				],
			},
			// {
			// 	id: 10,
			// 	case: 'tripppen',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Tripppen',
			// 	lead: '',
			// 	library: {
			// 		folder: 'tripppen',
			// 	},
			// },
			// {
			// 	id: 11,
			// 	case: 'misc',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Misc',
			// 	lead: '',
			// 	library: {
			// 		folder: 'misc',
			// 	},
			// },
		],
	},
	{
		id: 5,
		client: 'Backbase',
		role: 'Lead Visual Designer Consultant',
		date: '2012 – 2017',
		location: 'Remote / Amsterdam, Netherlands',
		bg: '/images/case/backbase/bg_backbase.png',
		url: 'https://www.backbase.com',
		protected: true,
		index: true,
		cases: [
			{
				id: 0,
				case: '',
				title: '',
				lead: '',
				protected: true,
				library: {
					folder: 'backbase',
				},
				content: [
					{
						id: 1,
						section: 'problem',
						title: 'The problem',
						lead: `Backbase, a global leader in digital banking solutions, faced the challenge of crafting sales and implementation-ready UI/UX for major banking clients worldwide. These clients had diverse requirements and tight timelines, necessitating swift design turnarounds. The existing platform required enhancement to cater to the emerging needs of a modern banking ecosystem, integrating a comprehensive user experience across devices.`,
						variant: 'description',
					},
					{
						id: 2,
						section: 'goal',
						title: 'Goal',
						lead: `To rapidly design and implement robust, responsive UI/UX solutions for key banking clients, including ABN Amro, UniCredit, Standard Chartered, and UOB. Another objective was to breathe life into "Launchpad", an internal platform aimed at streamlining the online and mobile project delivery timeline, with the added complexity of ensuring a consistent user experience across multiple devices.`,
						variant: 'description',
					},
					{
						id: 3,
						section: 'insights',
						title: 'Insights',
						lead: `Considering the evolving landscape of digital banking and the need for a flexible yet consistent user experience, there was a requirement to bridge the gap between core banking systems and a modern front-end. Furthermore, the banking personnel needed an intuitive CMS platform, enabling them to tailor the content and user interface effortlessly.`,
						variant: 'description',
					},
					{
						id: 4,
						section: 'approach',
						title: 'The Approach',
						lead: `Working in high-paced environments, I quickly responded to design requests, often within 3-4 days, leveraging Photoshop to craft design solutions and establishing a design system. For certain projects, I developed working HTML and CSS prototypes to give stakeholders a tangible feel of the final product.
            I played a pivotal role in the development of "Launchpad," ensuring it delivered a consistent UX across devices. This platform integrated the latest in design innovation, ensuring easy management by the e-business and digital teams. Furthermore, I contributed to the Backbase CMS, focusing on its drag-and-drop widget functionality, simplifying the process for banking and content teams. My involvement also extended to redesigning the Backbase website to better market their innovative solutions.`,
						variant: 'description',
					},
					{
						id: 5,
						section: 'outcome',
						title: 'Outcome',
						lead: `My contributions led to the successful delivery of UI/UX designs for prominent banking clients on stringent timelines. "Launchpad" emerged as a groundbreaking tool, optimizing time-to-market for online and mobile projects and cementing Backbase's reputation as an innovator in the banking technology sector. The revamped CMS provided banking personnel with a more intuitive platform, while the redesigned website bolstered Backbase's market presence. My association with Backbase didn't end with my full-time role, as I continued to provide freelance services remotely for over five years, fostering a lasting relationship.`,
						variant: 'description',
					},
					{
						id: 6,
						section: 'image-loop',
						container: 'fluid',
						image: {
							variant: 'loop',
							folder: 'backbase/screens/',
							// Click to open a image in modal
							style: 'horizontal',
						},
					},
				],
			},
		],
	},
	{
		id: 6,
		client: 'Playground',
		role: 'Some fun stuff',
		date: 'Never and forever',
		location: 'www',
		bg: '/images/case/backbase/bg_backbase.png',
		url: 'https://www.backbase.com',
		index: false,
	},
];

export { about, work };
