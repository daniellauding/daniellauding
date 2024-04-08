const about = [
	{
		id: 0,
		name: 'Daniel Lauding',
		email: 'daniel@lauding.se',
		logo: '/images/logo.svg',
		logoMov: '/images/logoH.mov',
		hero: '/images/me.jpg',
		description: `As a hands-on Lead Product Designer, I've turned ideas into successful ventures at Asteria for SMEs. Making music more accessible on Spotify and set up design systems for Länsförsäkringar, simplifying music release for artists across platforms.`,
		content: [
			// {
			// 	id: 0,
			// 	section: '00',
			// 	anchor: '',
			// 	columns: 1,
			// 	gap: 4,
			// 	groups: [
			// 		{
			// 			id: 1,
			// 			video: {
			// 				src: '/images/logoH.mov',
			// 				autoplay: true,
			// 				loop: true,
			// 				muted: true,
			// 				controls: false,
			// 				width: 96,
			// 				height: 96,
			// 			},
			// 		},
			// 	],
			// },
			{
				id: 0,
				section: 'intro',
				anchor: '',
				columns: 4,
				rows: 2,
				gap: 4,
				anchorNav: false,
				anchorName: 'Intro',
				align: {
					horizontal: 'center',
					vertical: 'center',
				},
				container: {
					height: 'h-screen',
					align: {
						horizontal: 'center',
						vertical: 'center',
					},
				},
				height: 'h-screen',
				// variant: 'full',
				groups: [
					{
						id: 0,
						columns: 2,
						rowStart: 1,
						// animate: true,
						// animateIn: 'fadeIn',
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
						// icon: {
						// 	svgCode: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						//     <g id="icon/image/adjust_24px">
						//     <path id="icon/image/adjust_24px_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z"/>
						//     </g>
						//     </svg>
						//     `,
						// 	size: 'small', // Specify the icon size
						// 	style: { fill: 'fill-primary' },
						// 	class: 'p-20 bg-white',
						// },
						text: [
							{
								value: `Daniel Lauding dances through design and globe-trots with a creative beat, spinning prototypes and visions into digital realities wherever his laptop lands.`,
								size: 'large',
								className: 'leading-snug font-serif',
							},
						],
						buttons: [
							{
								variant: 'secondary',
								type: 'scroll',
								href: '#experience',
								text: 'Read my story',
							},
							{
								variant: 'primary',
								type: 'modal',
								target: 'contactModal',
								text: 'Contact me',
							},
							{
								variant: 'primary',
								type: 'modal',
								target: 'offertModal',
								text: 'Give me an offer',
							},
						],
					},
					{
						id: 1,
						columns: 2,
						rowStart: 1,
						// image: {
						// 	src: '/images/about/nomading-spain.jpg',
						// 	imgClass: 'plektrum',
						// },
						image: {
							variant: 'plektrum',
							images: [
								{
									id: 0,
									src: '/images/about/nomading-spain.jpg',
								},
								{
									id: 1,
									src: '/images/about/nomading-spain2.jpg',
								},
							],
						},
					},
				],
			},
			{
				id: 1,
				section: 'experience',
				anchor: '',
				columns: 4,
				anchorNav: true,
				anchorName: 'Experience',
				rows: 2,
				gap: 4,
				align: {
					horizontal: 'center',
					vertical: 'center',
				},
				container: {
					height: 'h-auto',
					align: {
						horizontal: 'center',
						vertical: 'center',
					},
				},
				height: 'h-auto',
				// variant: 'full',
				groups: [
					{
						id: 1,
						columns: 2,
						rowStart: 2,
						colStart: 2,
						title: [
							{
								value: `Crafting Innovative Solutions`,
								size: 'medium',
								className: 'leading-snug font-serif',
							},
						],
						text: [
							{
								value: `Bringing over 12 years of experience in the tech industry, Daniel shapes user experiences and drives business growth with a focus on data and design thinking. With a background as a front end developer, his passion lies in crafting seamless and visually captivating products.`,
								size: 'large',
							},
							{
								value: `He excels in building prototypes, refining user experiences, and developing comprehensive design systems across various industries including finance, fashion, and music.`,
								size: 'medium',
							},
						],
					},
				],
			},
			{
				id: 2,
				section: 'current',
				anchor: '',
				columns: 4,
				gap: 4,
				anchorNav: true,
				anchorName: 'Current',
				// animate: true,
				// animateIn: 'fadeIn',
				// animateOut: 'fadeOut',
				groups: [
					{
						id: 0,
						columns: 2,
						rowStart: 1,
						colStart: 2,
						class: 'mt-16 w-96',
						// animate: true,
						// animateIn: 'fadeIn',
						// animateOut: 'fadeOut',
						image: {
							src: '/images/about/me_asteria_swedbank.jpg',
							imgClass: 'rounded-lg',
						},
					},
					{
						id: 1,
						columns: 2,
						rowStart: 1,
						colStart: 1,
						class: 'w-64 ml-24',
						image: {
							src: '/images/about/me-asteria.png',
							imgClass: 'rounded-lg',
						},
					},
					{
						id: 2,
						columns: 2,
						rowStart: 1,
						colStart: 3,
						class: 'mt-24 ml-16',
						text: [
							{
								value: `In his ongoing role at Asteria, where Daniel has been a pivotal co-founder and lead product designer for over 6 years, his collaborative ethos shines brightly.`,
								size: 'large',
							},
						],
					},
					{
						id: 2,
						columns: 2,
						rowStart: 2,
						colStart: 2,
						text: [
							{
								value: `He's been instrumental in evolving initial concepts into crucial tools for SMEs. With his team, he's successfully tackled intricate design challenges, contributing to Asteria's growth. This includes playing a key role in securing funding rounds and forging new partnerships, marking significant achievements in the fintech and banking sectors across Scandinavia.`,
								size: 'medium',
							},
						],
					},
				],
			},
			{
				id: 3,
				section: 'past',
				anchor: '',
				columns: 4,
				gap: 4,
				anchorNav: true,
				anchorName: 'Past',
				groups: [
					{
						id: 2,
						columns: 2,
						colStart: 1,
						text: [
							{
								value: `Driven by a passion for music, Daniel crafted a low-data solution for Spotify in Brazil, aiding the platform's expansion in emerging markets. The team conducted rapid testing with users in Brazilian favelas to refine designs and prototypes. `,
								size: 'large',
							},
							{
								value: `Additionally, his work with Record Union streamlined the process of releasing music across multiple platforms. Contributions to projects like KLM improved their online booking system.`,
								size: 'medium',
							},
							{
								value: `Daniel also designed a cross-platform user-friendly design system for Länsförsäkringar, ensuring seamless experiences across various platforms, with the system still in active use today.`,
								size: 'medium',
							},
						],
					},
					{
						id: 1,
						columns: 2,
					},
				],
			},
			{
				id: 4,
				section: 'design-philosophy',
				anchor: '',
				columns: 3,
				gap: 4,
				anchorNav: true,
				anchorName: 'Design Philosophy',
				groups: [
					{
						id: 1,
						columns: 1,
						colStart: 1,
						icon: {
							iconName: 'jobs-done',
							size: 'large', // Specify the icon size
							className: 'mx-auto my-8',
							fill: 'fill-primary',
						},
						title: {
							value: `Hands-On Approach`,
							size: 'small',
							className: 'leading-snug text-center font-serif',
						},
						text: {
							value: `Daniel enjoys prototyping and easily moves between design and coding. He's detail-oriented, making sure his work is both organized and effective, using React and other front-end tools to get the job done.`,
							size: 'medium',
							className: 'text-center',
						},
					},
					{
						id: 2,
						columns: 1,
						colStart: 2,
						icon: {
							iconName: 'design-leadership',
							size: 'large', // Specify the icon size
							className: 'mx-auto my-8',
							fill: 'fill-primary',
						},
						title: {
							value: `Design Leadership`,
							size: 'small',
							className: 'leading-snug text-center font-serif',
						},
						text: {
							value: `Daniel combines big-picture thinking with systematic detail, guiding designs to match project goals for total coherence and relevance.`,
							size: 'medium',
							className: 'text-center',
						},
					},
					{
						id: 3,
						columns: 1,
						colStart: 3,
						icon: {
							iconName: 'purposeful-innovation',
							size: 'large', // Specify the icon size
							className: 'mx-auto my-8',
							fill: 'fill-primary',
						},
						title: {
							value: `Purposeful Innovation`,
							size: 'small',
							className: 'leading-snug text-center font-serif',
						},
						text: {
							value: `With a focus on meaningful outcomes, Daniel employs a data-driven approach to design, prioritizing user experience and business objectives to deliver measurable improvements.`,
							size: 'medium',
							className: 'text-center',
						},
					},
				],
			},
			{
				id: 5,
				section: 'nomading',
				anchor: '',
				columns: 4,
				gap: 4,
				anchorNav: true,
				anchorName: 'Nomading',
				groups: [
					{
						id: 1,
						columns: 2,
					},
					{
						id: 2,
						columns: 2,
						title: [
							{
								value: `Deeply involved in the digital nomad scene`,
								size: 'medium',
								className: 'leading-snug font-serif',
							},
						],
						text: [
							{
								value: `Daniel's journey into merging work with global exploration began at 22, with the first flight to a London project exhibition for Hyper Island. Vibrant roles within New York's fashion industry and Amsterdam's fintech sector followed. `,
								size: 'medium',
							},
							{
								value: `With experiences from over 49 countries, he is deeply involved in the digital nomad scene, participating in communities like WiFi Tribe and Nomad Cruise.`,
								size: 'medium',
							},
							{
								value: `Remote work harnesses his design and development skills while drawing inspiration from diverse cultures.`,
								size: 'medium',
							},
							{
								variant: 'secondary',
								type: 'link',
								href: 'https://nomadlist.com/@daniellauding',
								text: 'Trips',
							},
						],
					},
					{
						variant: 'secondary',
						type: 'link',
						href: 'https://nomadlist.com/@daniellauding',
						text: 'My trips',
					},
				],
			},
			{
				id: 7,
				section: 'available',
				anchorName: `Let's Collaborate`,
				anchorNav: true,
				anchor: '',
				columns: 4,
				gap: 4,
				groups: [
					{
						id: 2,
						columns: 2,
						colStart: 2,
						title: [
							{
								value: `Ready to Bring Ambitious Concepts to Life`,
								size: 'medium',
								className: 'leading-snug font-serif',
							},
						],
						text: [
							{
								value: `Ready to lead or dive into the details, Daniel brings a perfect blend of creativity and technical expertise to every project. If you're looking for a creative mind with a tech edge to bring your ambitious concepts to life, let's embark on this journey together.`,
								size: 'medium',
							},
						],
						buttons: [
							{
								variant: 'primary',
								type: 'modal',
								target: 'contactModal',
								text: 'Contact me',
							},
							{
								variant: 'primary',
								type: 'modal',
								target: 'offertModal',
								text: 'Give me an offer',
							},
						],
					},
				],
			},
			{
				id: 8,
				section: 'experiences',
				anchorName: `Experiences`,
				anchorNav: true,
				anchor: '',
				padding: '0',
				groups: [
					{
						id: 2,
						title: [
							{
								value: `Experiences`,
								size: 'medium',
								className:
									'leading-snug font-serif text-center',
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
		featured: true,
		background: {
			image: '/images/case/asteria/bg_asteria.png',
		},
		url: 'https://www.spotify.com',
		soon: true,
	},
	{
		id: 1,
		client: 'Spotify',
		role: 'Product Design Consultant',
		date: '2017',
		location: 'Brazil / Sweden',
		featured: true,
		background: {
			image: '/images/case/spotify/bg_spotify.jpeg',
		},
		url: 'https://www.spotify.com',
		protected: true,
		index: true,
		thumbnail: [
			'/images/case/spotify/thumbnail/00.png',
			'/images/case/spotify/thumbnail/01.png',
			'/images/case/spotify/thumbnail/02.png',
			'/images/case/spotify/thumbnail/03.png',
		],
		cases: [
			{
				id: 0,
				client: 'Spotify',
				case: 'growth-enable-more-free-users-emerging-markets',
				title: 'Optimize product value for existing markets with growth potential',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
				background: {
					image: '/images/case/spotify/bg_favela.jpg',
				},
				image: {
					src: '/images/case/spotify/bg_spotify.jpeg',
				},
				tags: ['UX', 'UI'],
				library: {
					folder: 'spotify',
				},
				protected: true,
				content: [{}],
			},
		],
	},
	{
		id: 3,
		client: 'Länsförsäkringar',
		role: 'Art Director Consultant',
		date: '2016 – 2017',
		location: 'Stockholm / Sweden',
		featured: true,
		background: {
			image: '/images/case/lansforsakringar/bg_lf.png',
		},
		protected: true,
		index: true,
		thumbnail: [
			'/images/case/lansforsakringar/thumbnail/01.png',
			'/images/case/lansforsakringar/thumbnail/02.png',
			'/images/case/lansforsakringar/thumbnail/03.png',
			'/images/case/lansforsakringar/thumbnail/04.png',
			'/images/case/lansforsakringar/thumbnail/05.png',
			'/images/case/lansforsakringar/thumbnail/06.png',
			'/images/case/lansforsakringar/thumbnail/07.png',
			'/images/case/lansforsakringar/thumbnail/08.png',
			'/images/case/lansforsakringar/thumbnail/09.png',
			'/images/case/lansforsakringar/thumbnail/10.gif',
		],
		url: 'https://www.lansforsakringar.se',

		cases: [
			{
				id: 0,
				date: '2015',
				case: 'improving-lansforsakringars-brand-identity',
				title: `Improving Länsförsäkringar's Brand Identity`,
				tags: ['UX', 'UI'],
				theme: 'lf',
				hero: {
					gap: 32,
					columns: 3,
					rows: 2,
					description: {
						colStart: 1,
						colEnd: 4,
						columns: 3,
						rowStart: 2,
						rows: 3,
						title: {
							value: `Improving Länsförsäkringar's Brand Identity`,
							rowStart: 1,
							colStart: 1,
							colEnd: 2,
						},
						lead: {
							value: 'Länsförsäkringar',
							colStart: 1,
							colEnd: 1,
							class: 'mb-0',
						},
						desc: {
							value: 'Art Director Consultant, 2016 – 2017',
							colStart: 1,
							colEnd: 1,
						},
					},
					image: {
						src: '/images/case/lansforsakringar/logo@2x.png',
						columns: 2,
						rows: 3,
						colStart: 2,
						rowStart: 2,
						rowEnd: 3,
						imgClass: 'w-7/12 mx-auto my-auto mt-64',
					},
				},
				image: {
					src: '/images/case/lansforsakringar/hero_dark.png',
				},
				content: [
					{
						id: 0,
						background: {
							image: '/images/case/lansforsakringar/intro.png',
							color: '#F3F3F3',
						},
						variant: 'full',
						class: 'bg-contain bg-fixed bg-no-repeat bg-center',
					},
					{
						id: 1,
						section: '#intro',
						anchor: '#intro',
						// padding: 'py-32',
						text: [
							{
								value: `In 2016, I worked as an Art Director Consultant for Identity Works on a project with Länsförsäkringar AB, a major Swedish insurance and banking company.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
							{
								value: `Länsförsäkringar has a rich history and stands apart with its local ownership, emphasizing its unique local approach.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 2,
						background: {},
						variant: 'scrollVertically',
						image: {
							src: '/images/case/lansforsakringar/devices.png',
							imgClass: 'w-9/12 mx-auto',
						},
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
						container: {
							height: 'h-screen',
							align: {
								horizontal: 'center',
								vertical: 'center',
							},
						},
						height: 'h-screen',
					},
					{
						id: 3,
						section: 'problem',
						anchor: '#problem',
						columns: 4,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 2,
								title: {
									value: 'The problem',
									weight: 'font-regular',
									family: 'font-serif',
									className: 'leading-snug',
								},
							},
							{
								id: 1,
								columns: 2,
								text: [
									{
										value: `Länsförsäkringar needed to update their brand for the digital age. They wanted a modern look and feel for their website, mobile app, and other digital platforms while staying connected to their local roots.`,
										size: 'large',
									},
								],
								groups: [
									{
										id: 0,
										columns: 2,
										title: {
											value: 'The problem',
											weight: 'font-regular',
											family: 'font-serif',
											className: 'leading-snug',
										},
									},
									{
										id: 1,
										columns: 2,
										text: [
											{
												value: `Länsförsäkringar needed to update their brand for the digital age. They wanted a modern look and feel for their website, mobile app, and other digital platforms while staying connected to their local roots.`,
												size: 'large',
											},
										],
									},
								],
							},
						],
					},
					{
						id: 4,
						background: {},
						variant: 'scrollVertically',
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
						image: {
							src: '/images/case/lansforsakringar/lfui/lfui-map@2x.png',
							imgClass: 'w-9/12 mx-auto',
						},
						container: {
							height: 'h-screen',
							align: {
								horizontal: 'center',
								vertical: 'center',
							},
						},
						height: 'h-screen',
					},
					{
						id: 5,
						background: {},
						variant: 'scrollVertically',
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
						video: {
							src: '/images/case/lansforsakringar/lfui/lfui-craft-480p.mov',
							controls: true,
							showControls: false,
						},
						text: [
							{
								value: `Sketch runner, Abstract working like a charm!`,
								size: 'large',
							},
						],
						container: {
							height: 'h-screen',
							align: {
								horizontal: 'center',
								vertical: 'center',
							},
						},
						height: 'h-screen',
					},
					{
						id: 44444,
						section: 'goal',
						anchor: '#goal',
						columns: 4,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 2,
								title: {
									value: 'Setting the Goal',
									weight: 'font-regular',
									family: 'font-serif',
									className: 'leading-snug',
								},
							},
							{
								id: 1,
								columns: 2,
								text: [
									{
										value: `Our main goal was clear: create a unified digital look for Länsförsäkringar that would make it easier for customers to interact with their services online. We wanted to keep the brand's essence while making it work well on different devices.`,
										size: 'large',
									},
								],
							},
						],
					},
					{
						id: 6,
						section: 'insights',
						anchor: '#insights',
						columns: 4,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 2,
								title: {
									value: 'Gaining Insights',
									weight: 'font-regular',
									family: 'font-serif',
									className: 'leading-snug',
								},
							},
							{
								id: 1,
								columns: 2,
								text: [
									{
										value: `In the initial five weeks, we held a design sprint to generate ideas and prototypes for various digital platforms, including the homepage, mobile app, bank portal, and insurance services. We actively involved Länsförsäkringar employees, seeking their feedback on our design concepts. Their input helped us identify design directions that resonated with users. We also prioritized accessibility. To ensure our designs were user-friendly for everyone, we collaborated with Funka, an accessibility consultancy, to integrate expert insights into the design process. This ensured inclusivity and usability for all users.`,
										size: 'large',
									},
								],
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
										id: 2,
										title: {
											value: 'Web',
										},
										text: {
											value: 'Lorem ipsum',
										},
									},
									{
										id: 3,
										title: {
											value: 'Insurance',
										},
										text: {
											value: 'Lorem ipsum',
										},
									},
									{
										id: 4,
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
					{
						id: 7,
						section: 'approach',
						anchor: '#approach',
						columns: 4,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 2,
								title: {
									value: 'The Approach',
									weight: 'font-regular',
									family: 'font-serif',
									className: 'leading-snug',
								},
							},
							{
								id: 1,
								columns: 2,
								text: [
									{
										value: `Using what we learned, we started designing a new digital look for Länsförsäkringar. We wanted it to be consistent and easy to use on different devices. After the design phase, I became an Art Director consultant, ensuring that the new look was used correctly by all teams.`,
										size: 'large',
									},
								],
							},
						],
					},
					{
						id: 8,
						section: 'outcome',
						columns: 4,
						gap: 4,
						groups: [
							{
								id: 0,
								columns: 2,
								title: {
									value: 'The Outcome',
									weight: 'font-regular',
									family: 'font-serif',
									className: 'leading-snug',
								},
							},
							{
								id: 1,
								columns: 2,
								text: [
									{
										value: `The new look was ready to launch in late 2016 across different platforms. It improved the digital experience for Länsförsäkringar's customers. My role as an Art Director consultant was crucial in making sure everyone used the new look correctly.`,
										size: 'large',
									},
								],
							},
						],
					},
					{
						id: 1011,
						section: 'ui-component-navigation',
						variant: 'scrollVertically',
						height: 'h-screen',
						image: {
							src: '/images/case/lansforsakringar/ui/big-menu@2x.png',
							imgClass: 'w-9/12 mx-auto mt-32 -order-1',
						},
						text: [
							{
								value: `The navigation for the public facing website. Applied updated brand and iconography for feeling of personality and warmth.`,
								size: 'small',
								className: 'mt-16 order-3',
								align: {
									horizontal: 'center',
								},
							},
						],
						background: {
							color: '#e5eff7',
							class: 'bg-wavy',
						},
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
					},
					{
						id: 1119,
						section: 'test',
						anchor: '#test',
						class: 'relative',
						container: 'h-full relative container flex flex-col',
						image: {
							src: '/images/case/lansforsakringar/open/Home_desktop.png',
							// width: 784,
							// height: 1353,
							imgClass:
								'object-fill mx-auto -order-1 border border-gray-300 w-3/4',
						},
						title: {
							value: 'Homepage',
							// fill: 'red',
							// className: 'pelle',
							align: {
								horizontal: 'center',
							},
							className: 'mt-16',
						},
						text: [
							{
								value: `Morbi finibus, ligula nec mattis laoreet, lacus velit tincidunt purus, eget fermentum magna neque quis erat. Duis tempus quam eu elit fringilla, id dignissim metus faucibus. Donec quam mi, congue nec erat ac, porttitor dictum augue.`,
								size: 'medium',
								className: 'mt-16 order-3',
								align: {
									horizontal: 'center',
								},
							},
							{
								value: `hur får jag vänstra delen scrolla när jag scrollar här med, textblocket, funkar ej`,
								size: 'medium',
								className: 'mt-16 order-4',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 9,
						section: 'collaboration',
						anchor: '#collaboration',
						columns: 4,
						gap: 4,
						title: [
							{
								value: `Key Collaborations`,
							},
						],
						text: [
							{
								value: `Valtech and Tieto EVRY: Worked together on the website design. - Common Ground: Improved the Internet banking experience. - Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
								size: 'medium',
							},
							{
								value: `Common Ground: Improved the Internet banking experience. - Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
								size: 'medium',
							},
							{
								value: `Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
								size: 'medium',
							},
							{
								value: `Identity Works: Collaborated on the initial design phase.`,
								size: 'medium',
							},
						],
					},
					{
						id: 10,
						section: 'recognition',
						anchor: '#recognition',
						columns: 4,
						gap: 4,
						title: [
							{
								value: `Recognition and Awards`,
							},
						],
						text: [
							{
								value: `Länsförsäkringar received awards, including Best Bank and Insurance Site at the Swedish IDG Internetworld Top 100 in 2017. This recognized our successful work. Our project with Länsförsäkringar wasn't just about a new look; it was about adapting to the digital age while keeping local values intact. Through careful design and teamwork, we achieved this balance, showing how tradition and modernity can coexist.`,
								size: 'medium',
							},
							{
								value: `This project was about more than just rebranding; it was about reshaping a company's image for the digital world. Länsförsäkringar's success story illustrates the power of smart design and collaboration.`,
								size: 'medium',
							},
						],
					},
					{
						id: 11,
						section: 'test',
						anchor: '#test',
						columns: 2,
						gap: 4,
						class: 'relative',
						container: 'relative container',
						variant: 'scrollVertically',

						height: 'h-screen',
						image: {
							src: '/images/case/lansforsakringar/ui/forms@2x.png',
							imgClass: 'w-full mx-auto mt-32 -order-1',
						},
						text: [
							{
								value: `Form fields used cross-platform`,
								size: 'small',
								className: 'mt-0 order-3',
								align: {
									horizontal: 'center',
								},
							},
						],
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
					},
					{
						id: 12,
						section: 'test',
						anchor: '#test',
						class: 'relative',
						container: 'h-full relative container flex flex-col',
						image: {
							src: '/images/case/lansforsakringar/nim/nim-dashboard@2x.png',
							imgClass:
								'object-fill mx-auto -order-1 border border-gray-300 w-3/4',
						},
						title: {
							value: 'Internet banking',
							align: {
								horizontal: 'center',
							},
							className: 'mt-16',
						},
						text: [
							{
								value: `Morbi finibus, ligula nec mattis laoreet, lacus velit tincidunt purus, eget fermentum magna neque quis erat. Duis tempus quam eu elit fringilla, id dignissim metus faucibus. Donec quam mi, congue nec erat ac, porttitor dictum augue.`,
								size: 'medium',
								className: 'mt-16 order-3',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 13,
						section: 'test',
						anchor: '#test',
						columns: 2,
						gap: 4,
						class: 'relative',
						container: 'relative container',
						variant: 'scrollVertically',

						height: 'h-screen',
						image: {
							src: '/images/case/lansforsakringar/ui/nim-nav@2x.png',
							imgClass: 'w-1/2 mx-auto mt-32 -order-1',
						},
						text: [
							{
								value: `Navigation variant stacked for portal`,
								size: 'small',
								className: 'mt-0 order-3',
								align: {
									horizontal: 'center',
								},
							},
						],
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
					},
					{
						id: 14,
						section: 'watch-animation',
						image: {
							src: '/images/case/lansforsakringar/watch/watch-transfer.gif',
							class: 'h-auto max-w-sm mx-auto',
							imgClass:
								'h-auto max-w-sm mx-auto rounded-3xl shadow-2xl',
						},
						title: {
							value: `Effortless Money Transfers at Your Fingertips`,
							size: 'large',
							align: {
								horizontal: 'center',
							},
							className: 'mt-16 order-2',
						},
						text: {
							value: `Experience the watch app for seamless money transfers, aligned with Länsförsäkringar's new digital brand`,
							size: 'medium',
							align: {
								horizontal: 'center',
							},
							className: 'mt-0 order-3',
						},
						background: {
							color: '#fff',
						},
						align: {
							horizontal: 'center',
							vertical: 'center',
						},
						// container: {
						// 	height: 'h-screen',
						// 	align: {
						// 		horizontal: 'center',
						// 		vertical: 'center',
						// 	},
						// },
						height: 'h-screen',
					},
					{
						id: 15,
						section: 'image-loop',
						container: 'fluid',
						image: {
							variant: 'loop',
							folder: 'lansforsakringar/mobile/',
							style: 'horizontal',
						},
					},
					{
						id: 16,
						section: 'image-loop',
						image: {
							variant: 'loop',
							folder: 'lansforsakringar/mobile/',
						},
					},
				],
			},
		],
	},
	{
		id: 5,
		client: 'Backbase',
		role: 'Lead Visual Designer Consultant',
		date: '2012 – 2017',
		location: 'Remote / Amsterdam, Netherlands',
		featured: true,
		background: {
			image: '/images/case/backbase/bg_backbase.png',
		},
		url: 'https://www.backbase.com',
		protected: true,
		index: true,
		thumbnail: [
			'/images/case/backbase/thumbnail/01.png',
			'/images/case/backbase/thumbnail/02.png',
			'/images/case/backbase/thumbnail/03.png',
			'/images/case/backbase/thumbnail/04.png',
			'/images/case/backbase/thumbnail/05.png',
			'/images/case/backbase/thumbnail/06.png',
			'/images/case/backbase/thumbnail/07.png',
			'/images/case/backbase/thumbnail/08.png',
			'/images/case/backbase/thumbnail/09.png',
			'/images/case/backbase/thumbnail/10.png',
			'/images/case/backbase/thumbnail/11.png',
			'/images/case/backbase/thumbnail/12.png',
			'/images/case/backbase/thumbnail/13.png',
		],
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
							style: 'horizontal',
						},
					},
				],
			},
		],
	},
	{
		id: 6,
		client: 'Record Union',
		role: 'Senior Product Design Consultant',
		date: '2017 – 2018',
		location: 'Remote',
		featured: false,
		url: 'https://www.recordunion.com',
		protected: true,
		index: true,
	},
	{
		id: 7,
		client: 'KLM Royal Dutch Airlines',
		role: 'Senior Product Design Consultant',
		date: '2015',
		location: 'Amsterdam, Netherlands',
		featured: false,
		url: 'https://www.klm.com',
		protected: true,
		index: true,
	},
	{
		id: 8,
		client: 'Burt',
		role: 'User Interface Designer',
		date: '2011',
		location: 'Gothenburg, Sweden',
		featured: false,
		background: {
			image: '/images/case/backbase/bg_backbase.png',
		},
		url: 'https://www.burtcorp.com',
		protected: true,
		index: true,
	},
	{
		id: 9,
		client: 'Pod1',
		role: 'Junior Interactive Designer',
		date: '2010 – 2011',
		location: 'New York, US',
		featured: false,
		url: 'https://www.pod1.com',
		protected: true,
		index: true,
	},
	{
		id: 10,
		client: 'Futurniture',
		role: 'Front End Web Developer',
		date: '2009',
		location: 'Stockholm, Sweden',
		featured: false,
		url: 'https://www.futurniture.se',
		protected: true,
		index: true,
	},
	{
		id: 11,
		client: 'Drumedar',
		role: 'Front End Web Developer',
		date: '2008 – 2009',
		location: 'Västerås, Sweden',
		featured: false,
		url: 'https://www.drumedar.se',
		protected: true,
		index: true,
	},
	{
		id: 12,
		client: 'Furuboda',
		role: 'Music Production',
		date: '2023 – 2024',
		location: 'Remote / Yngsjö, Sweden',
		featured: false,
		url: 'https://www.furuboda.se',
		protected: true,
		index: true,
	},
	{
		id: 13,
		client: 'Hyper Island',
		role: 'Digital Media',
		date: '2009 – 2011',
		location: 'Remote / Yngsjö, Sweden',
		featured: false,
		url: 'https://www.furuboda.se',
		protected: true,
		index: true,
	},
];

export { about, work };
