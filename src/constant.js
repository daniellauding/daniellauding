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
										value: '* I love to build and design. part designer & part developer – the unicorn of the internet Solving problems and creating new visual languages is my favorite part of the job. My main focus is designing large scale web projects, tools and experiences that lots of people will use for a very long time. I am an advocate for a proper user experience, structured design and extremely detailed execution. I have a background as a Digital Media student at Hyper Island and as a front-end developer. I draw inspiration from many different sources, travel, the internet, the streets or just a casual drink with friends. During my career I ́ve lived and worked in Stockholm, Gothenburg, New York, Amsterdam and Singapore.',
									},
								],
							},
							{
								text: [
									{
										value: 'The work below has been done either as a consultant or as a freelancer with direct contact to clients.',
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
		// add so that "coming soon" is a setting so i can build content on the way
	},
	{
		id: 1,
		client: 'Spotify',
		role: 'Product Design Consultant',
		date: '2017',
		location: 'Brazil / Sweden',
		bg: '/images/case/spotify/bg_spotify.jpeg',
		url: 'https://www.spotify.com',
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
				goals: [
					{
						// Setup hero icons import { XMarkIcon } from '@heroicons/react/24/solid';
						id: 0,
						title: 'Goal #1',
						text: 'Enable more free users in emerging markets',
					},
					{
						id: 1,
						title: 'Goal #2',
						text: 'Cras dictum ultrices quam quis ultrices',
					},
					{
						id: 2,
						title: 'Goal #3',
						text: 'Curabitur convallis orci nec feugiat malesuada',
					},
				],
				insights: [
					{
						id: 0,
						title: 'Insight #1',
						text: 'People dont do shit',
					},
					{
						id: 1,
						title: 'Insight #2',
						text: 'Dogs are crazy',
					},
					{
						id: 2,
						title: 'Insight #3',
						text: 'We won',
					},
				],
				outcomes: [
					{
						id: 0,
						title: 'Outcome #1',
						text: 'It just works',
					},
					{
						id: 1,
						title: 'Outcome #2',
						text: 'No more',
					},
					{
						id: 2,
						title: 'Outcome #3',
						text: 'We won',
					},
				],
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
						section: 'discovery',
						title: 'Identify ways to attract new freemium users',
						lead: 'We understood that free users on year class phones (older androids) still where downloading mp3s and was afraid of streaming when not on Wi-Fi. A hypothesis to gain trust to stream on cellular was to build a solution that uses less data consumption.',
						style: 'hero',
						groups: [
							{
								id: 0,
								animate: true,
								title: {
									variant: 'medium',
									value: 'Jag är en rubrik i en grupp',
								},
								text: {
									variant: 'large',
									value: 'Jag är texten i denna grupp',
								},
							},
						],
					},
					{
						id: 7,
						section: 'solution',
						title: 'Consume 1% of data',
						lead: 'One of our solutions we ran A/B tests on would serve 4 playlists on-demand and when playing songs from those it only consumed 1% of their data. The design is branded with dark-blue to build awareness throughtout the flow.',
						style: 'hero',
					},
					{
						id: 6,
						section: 'designs',
						title: 'Designs',
						groups: [
							{
								id: 0,
								image: {
									variant: 'dummy',
									text: 'Bild #1',
									width: 784,
									height: 1353,
									color: '#20232a',
									textColor: '#737373',
									format: 'png',
								},
							},
							{
								id: 1,
								title: {
									variant: 'medium',
									value: 'Jag är en rubrik i en grupp',
								},
								text: {
									variant: 'large',
									value: 'Jag är texten i denna grupp',
								},
								image: {
									variant: 'dummy',
									text: 'Bild #2',
									width: 784,
									height: 1353,
									color: '#20232a',
									textColor: '#737373',
									format: 'png',
								},
								groups: [
									{
										id: 1,
										image: {
											variant: 'dummy',
											text: 'Bild #2',
											width: 784,
											height: 1353,
											color: '#20232a',
											textColor: '#737373',
											format: 'png',
										},
									},
									{
										id: 2,
										image: {
											variant: 'dummy',
											text: 'Bild #3',
											width: 784,
											height: 1353,
											color: '#20232a',
											textColor: '#737373',
											format: 'png',
										},
									},
									{
										id: 3,
										image: {
											variant: 'dummy',
											text: 'Bild #4',
											width: 784,
											height: 1353,
											color: '#20232a',
											textColor: '#737373',
											format: 'png',
										},
									},
								],
							},
						],
					},
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
	},
	{
		id: 4,
		client: 'Instinctly',
		role: 'CEO & Senior Product Design Consultant',
		date: '2007 – Present',
		location: 'Remote / Sweden',
		bg: '/images/case/instinctly/bg_instinctly.png',
		url: 'https://www.daniellauding.se',
		index: true,
		cases: [
			// {
			// 	id: 0,
			// 	case: 'klm',
			// 	date: '2015',
			// 	location: 'Amsterdam, Netherlands',
			// 	tags: ['UX', 'UI', 'Prototyping', 'User testing'],
			// 	title: 'New experience for travelers',
			// 	lead: 'I was hired by AKQA Amsterdam, as a Senior designer consultant for the dutch airline KLM new web platform.',
			// 	library: {
			// 		folder: 'instinctly/klm',
			// 	},
			// content: [
			// 	{
			// 		id: 1,
			// 		section: 'brief',
			// 		title: 'Design sprint',
			// 		lead: 'For two months I worked together with a User Experience designer from AKQA in the headquarters of KLM. Every two weeks we had sprints together with a team of developers. In the end of each sprints we had demo presentation for the stakeholders of KLM',
			// 	},
			// 	{
			// 		id: 1,
			// 		section: 'deliverables',
			// 		title: 'deliverables',
			// 		lead: 'All the flows was prototyped with Proto.io. I handed over prototypes to the developers, together with my sketch files and with Zeplin.',
			// 	},
			// ],
			// },
			// {
			// 	id: 1,
			// 	case: 'mrusta',
			// 	date: '2015',
			// 	location: '',
			// 	title: 'mrUsta',
			// 	lead: '',
			// 	library: {
			// 		folder: 'instinctly/mrusta',
			// 	},
			// },
			// {
			// 	id: 2,
			// 	case: 'abro',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Åbro website & CMS',
			// 	lead: 'I was hired together with my team Producks by Folkets Stockholm, to design and develop a custom CMS and a new web for Åbro bryggeri. Producks was responsible for the user experience, interface design and development. The new web was released in beginning of 2015. Check it out on www.abro.se',
			// 	library: {
			// 		folder: 'instinctly/abro',
			// 	},
			// },
			// {
			// 	id: 3,
			// 	case: 'actic',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Actic',
			// 	lead: '',
			// 	library: {
			// 		folder: 'instinctly/actic',
			// 	},
			// },
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
			// 	id: 5,
			// 	case: 'resrobot',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Resrobot',
			// 	lead: '',
			// 	library: {
			// 		folder: 'instinctly/resrobot',
			// 	},
			// },
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
			{
				id: 7,
				case: 'leosoderberg',
				client: 'Mobb learning',
				date: '2014',
				location: 'Remote',
				title: 'Leo Söderberg',
				lead: '',
				library: {
					folder: 'instinctly/leosoderberg',
				},
				index: false,
			},
			{
				id: 8,
				case: 'producks',
				date: '2014',
				client: 'Producks',
				location: 'Remote',
				title: 'Producks',
				lead: 'Donec quis lacinia lectus. Morbi vel est eget ligula blandit pellentesque nec eu erat.',
				excerpt: 'Donec quis lacinia lectus.',
				desc: 'Donec quis lacinia lectus. Morbi vel est eget ligula blandit pellentesque nec eu erat. Etiam sit amet sem et massa condimentum viverra. Quisque hendrerit ex at dictum aliquam. Quisque vehicula mi eros, in posuere neque condimentum a. In interdum porttitor sagittis. Fusce dictum mattis ex eget laoreet.',
				library: {
					folder: 'producks',
				},
				content: [
					{
						id: 1,
						section: 'testar',
						title: 'Olle',
					},
				],
				tags: ['UX', 'UI'],
			},
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
