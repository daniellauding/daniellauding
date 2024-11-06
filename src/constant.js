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
								{
									id: 2,
									src: '/images/about/young.jpg',
								},
								{
									id: 3,
									src: '/images/about/workshoppin.jpg',
								},
								{
									id: 4,
									src: '/images/about/cuba.jpg',
								},
								{
									id: 5,
									src: '/images/about/cuba2.jpg',
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
				anchorNav: true,
				anchorName: 'Experience',
				// rows: 2,
				rows: {
					sm: 2,
					md: 2,
					lg: 2,
				},
				columns: {
					sm: 1,
					md: 4,
					lg: 6,
				},
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
						// columns: 1,
						columns: {
							sm: 1,
							md: 4,
							lg: 6,
						},
						// rowStart: 1,
						// colStart: 2,
						colStart: {
							sm: 2,
							md: 2,
							lg: 2,
						},
						image: {
							src: '/images/me.jpg',
							imgClass: 'rounded-lg',
						},
					},
					{
						id: 2,
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
				rows: 2,
				gap: 2,
				anchorNav: true,
				anchorName: 'Past',
				groups: [
					{
						id: 1,
						columns: 2,
						colStart: 1,
						rowStart: 1,
						class: 'mt-32',
						text: [
							{
								value: `Driven by a passion for music, Daniel crafted a low-data solution for Spotify in Brazil, aiding the platform's expansion in emerging markets. The team conducted rapid testing with users in Brazilian favelas to refine designs and prototypes.`,
								size: 'large',
							},
							{
								value: `Additionally, his work with Record Union streamlined the process of releasing music across multiple platforms.`,
								size: 'medium',
							},
						],
					},
					{
						id: 1,
						columns: 2,
						colStart: 2,
						rowStart: 2,
						text: [
							{
								value: `Daniel also designed a cross-platform user-friendly design system for Länsförsäkringar, ensuring seamless experiences across various platforms, with the system still in active use today.`,
								size: 'medium',
							},
						],
					},
					{
						id: 2,
						columns: 2,
						rowStart: 1,
						colStart: 3,
						class: 'w-full ml-24',
						image: {
							src: '/images/about/spotify.png',
							imgClass: 'rounded-lg',
						},
					},
					{
						id: 3,
						columns: 2,
						rowStart: 2,
						colStart: 1,
						class: 'w-full ml-24 mt-64',
						image: {
							src: '/images/about/lf.jpg',
							imgClass: 'rounded-lg',
						},
					},
					// {
					// 	id: 4,
					// 	columns: 1,
					// 	rowStart: 3,
					// 	colStart: 2,
					// 	class: 'w-full ml-24 mt-64',
					// 	image: {
					// 		src: '/images/about/klm.png',
					// 		imgClass: 'rounded-lg',
					// 	},
					// },
				],
			},
			{
				id: 4,
				section: 'design-philosophy',
				anchor: '',
				columns: 3,
				gap: 4,
				// anchorNav: true,
				// anchorName: 'Design Philosophy',
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
				rows: 3,
				gap: 2,
				// anchorNav: true,
				// anchorName: 'Nomading',
				padding: 'pt-40',
				groups: [
					{
						id: 1,
						columns: 2,
						colStart: 1,
						rowStart: 1,
						image: {
							src: '/images/about/nomadcruise.jpg',
							imgClass: 'rounded-lg',
						},
					},
					{
						id: 2,
						columns: 2,
						colStart: 2,
						rowStart: 2,
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
						],
						buttons: [
							{
								variant: 'link',
								type: 'external',
								href: 'https://nomadlist.com/@daniellauding',
								text: 'Trips',
							},
						],
					},
					{
						id: 3,
						columns: 1,
						rowStart: 3,
						colStart: 3,
						class: 'w-64 ml-24',
						image: {
							src: '/images/about/wifitribe.jpg',
							imgClass: 'rounded-lg',
						},
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
				padding: 'pt-40 pb-40',
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
				// anchorName: `Experiences`,
				// anchorNav: true,
				anchor: '',
				padding: 'py-0 px-16',
				groups: [
					{
						id: 2,
						title: [
							{
								value: `Experiences`,
								size: 'medium',
								className: 'leading-snug font-serif text-left',
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
		id: 1,
		client: 'Asteria',
		slug: 'asteria',
		role: 'Co-Founder & Lead Product Design',
		date: '2017 – Present',
		location: 'Remote / Sweden',
		featured: true,
		background: {
			image: '/images/case/asteria/bg_asteria.png',
		},
		thumbnail: [
			'/images/case/asteria/thumbnail/01.png',
			'/images/case/asteria/thumbnail/02.png',
			'/images/case/asteria/thumbnail/03.png',
			'/images/case/asteria/thumbnail/04.png',
			'/images/case/asteria/thumbnail/05.png',
		],
		url: 'https://www.asteria.ai',
		// soon: true,
		cases: [
			{
				id: 0,
				case: 'foretagskollen',
				title: 'Företagskollen – Swedbank',
				tags: ['UX', 'UI'],
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Integrating cash flow management into the everyday banking activities of small businesses`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `2017 – Present`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Stockholm / Remote`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Swedbank`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, Concepting, UX, UI, Development, Prototyping`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/asteria/foretagskollen/bg_foretagskollen.png',
						},
					},
					{
						id: 2,
						section: 'description',
						// columns: 3,
						// colStart: 2,
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/asteria/foretagskollen/laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `Together with Swedbank, we embarked on creating Företagskollen, a tool designed to fit snugly into the online banking scene, aimed at making financial management straightforward and clear for over 400,000 business clients.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We realized that small business owners often found cash flow management complex and expressed a need for a simpler, digital solution.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our mission was to integrate cash flow management into the everyday banking activities of small businesses, offering them a clear, visual snapshot of their financial health.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Företagskollen pulls transactions and balances from company accounts, sorting and forecasting them to present an easy-to-understand visual of future cash flow, all within the digital banking experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Starting from the ground up, I led the design process, getting involved in everything from coding to feature refinement and user interface improvements. Collaboration was key, working closely with both Swedbank and our Asteria team, drawing on user feedback to continuously enhance our solution.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Företagskollen was successfully rolled out to Swedbank's SME clientele, backed by a robust marketing campaign. Now a versatile tool beyond Swedbank's platform, it's reaching more users, with plans to expand its accessibility, especially on mobile devices.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project was a great reminder of the impact thoughtful design can have on simplifying complex processes like financial management for small businesses. Being involved in every step, from the technical coding to the final design touches, and seeing the positive response from users has been incredibly fulfilling. Knowing we're making a real difference in helping business owners navigate their financial landscape more easily is the ultimate reward.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						// container: 'fluid',
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'asteria/foretagskollen/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
			{
				id: 1,
				case: 'invoice-portal-payex',
				title: 'Invoice Portal – PayEx',
				tags: ['Product Design'],
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Streamlining invoice administration and factoring processes for SMEs across the Nordic region`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `2023 – Present`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Stockholm`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `PayEx`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI, Development, System Integration`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/asteria/payex/bg_payex.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/asteria/payex/laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `In collaboration with PayEx, Asteria developed a portal designed to streamline the invoice administration and factoring needs of SMEs, improving workflow efficiency across the Nordic region.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `PayEx's SME customers needed an efficient and simple system for invoice administration and factoring to save time and reduce complexity.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to create a customer journey that simplified obtaining factoring services, providing SMEs with an intuitive experience from sign-up to invoice submission for financial processing.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Through deep analysis of SME needs, we developed a user-centric portal and admin interface that effectively streamlined invoice and factoring processes.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We designed a comprehensive user portal and partner admin section for PayEx, featuring automated invoice mapping and data transmission for financial processing, ensuring a seamless user experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The solution was successfully launched with two major banks, providing SMEs with an efficient, streamlined experience for managing their factoring and invoicing needs.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project deepened my understanding of the financial needs of SMEs and emphasized the importance of seamless system integrations. Being part of the support team provided valuable insights, contributing to the continued refinement of the platform.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'asteria/payex/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
		],
	},
	{
		id: 2,
		client: 'Furuboda',
		slug: 'furuboda',
		role: 'Music Production',
		date: '2023 – 2024',
		location: 'Remote / Yngsjö, Sweden',
		featured: false,
		url: 'https://www.furuboda.se',
		protected: true,
		index: true,
		isExternal: true,
	},
	{
		id: 3,
		client: 'Spotify',
		slug: 'spotify',
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
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Reducing data usage for Spotify users in emerging markets to improve access to streaming`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `MAR – JUN, 2017`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Stockholm / Brazil`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Spotify`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, User Research, UX, UI`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/spotify/bg_spotify.png',
						},
					},
					{
						id: 3,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/spotify/phones@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `In collaboration with PayEx, Asteria developed a portal designed to streamline the invoice administration and factoring needs of SMEs, improving workflow efficiency across the Nordic region.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 4,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Many users were hesitant to stream music due to high data costs and lack of Wi-Fi, especially in regions like Brazil. Spotify needed a data-efficient solution.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to enable users to stream music without heavy data usage, particularly on older devices still prevalent in emerging markets.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `During field research in Brazil, we tested various prototypes with users to tailor our solution for maximum data efficiency and usability.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We created a feature allowing users to play on-demand playlists using just 1% of their data. The dark-blue theme indicated a data-saving mode to build user confidence in streaming on the go.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `A successful launch of the data-saving feature increased user confidence and encouraged more people to stream music on Spotify, especially in data-conscious regions like Brazil.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project highlighted the importance of regional user research and tailored digital solutions for emerging markets. Fieldwork and engaging directly with users provided critical insights that shaped the success of the feature.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 10,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'spotify/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
		],
	},
	{
		id: 4,
		client: 'Record Union',
		slug: 'record-union',
		role: 'Senior Product Design Consultant',
		date: '2017 – 2018',
		location: 'Remote',
		featured: false,
		url: 'https://www.recordunion.com',
		index: true,
		isExternal: true,
	},
	{
		id: 5,
		client: 'Länsförsäkringar',
		slug: 'lansforsakringar',
		role: 'Art Director Consultant',
		date: '2016 – 2017',
		location: 'Stockholm / Sweden',
		featured: true,
		background: {
			image: '/images/case/lansforsakringar/bg_lf.png',
		},
		// protected: true,
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
		// funkar ej om det är max 1,
		cases: [
			// {
			// 	id: 0,
			// 	date: '2015',
			// 	case: 'improving-lansforsakringars-brand-identity',
			// 	title: `Improving Länsförsäkringar's Brand Identity`,
			// 	tags: ['UX', 'UI'],
			// 	theme: 'lf',
			// 	// protected: true,
			// 	// fix protected per case, dont show up now
			// 	hero: {
			// 		gap: 32,
			// 		columns: 3,
			// 		rows: 2,
			// 		description: {
			// 			colStart: 1,
			// 			colEnd: 4,
			// 			columns: 3,
			// 			rowStart: 2,
			// 			rows: 3,
			// 			title: {
			// 				value: `Improving Länsförsäkringar's Brand Identity`,
			// 				rowStart: 1,
			// 				colStart: 1,
			// 				colEnd: 2,
			// 			},
			// 			lead: {
			// 				value: 'Länsförsäkringar',
			// 				colStart: 1,
			// 				colEnd: 1,
			// 				class: 'mb-0',
			// 			},
			// 			desc: {
			// 				value: 'Art Director Consultant, 2016 – 2017',
			// 				colStart: 1,
			// 				colEnd: 1,
			// 			},
			// 		},
			// 		image: {
			// 			src: '/images/case/lansforsakringar/logo@2x.png',
			// 			columns: 2,
			// 			rows: 3,
			// 			colStart: 2,
			// 			rowStart: 2,
			// 			rowEnd: 3,
			// 			imgClass: 'w-7/12 mx-auto my-auto mt-64',
			// 		},
			// 	},
			// 	image: {
			// 		src: '/images/case/lansforsakringar/hero_dark.png',
			// 	},
			// 	content: [
			// 		{
			// 			id: 0,
			// 			background: {
			// 				image: '/images/case/lansforsakringar/intro.png',
			// 				color: '#F3F3F3',
			// 			},
			// 			variant: 'full',
			// 			class: 'bg-contain bg-fixed bg-no-repeat bg-center',
			// 		},
			// 		{
			// 			id: 1,
			// 			section: '#intro',
			// 			anchor: '#intro',
			// 			// padding: 'py-32',
			// 			text: [
			// 				{
			// 					value: `In 2016, I worked as an Art Director Consultant for Identity Works on a project with Länsförsäkringar AB, a major Swedish insurance and banking company.`,
			// 					size: 'large',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 				{
			// 					value: `Länsförsäkringar has a rich history and stands apart with its local ownership, emphasizing its unique local approach.`,
			// 					size: 'large',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 2,
			// 			background: {},
			// 			variant: 'scrollVertically',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/devices.png',
			// 				imgClass: 'w-9/12 mx-auto',
			// 			},
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			container: {
			// 				height: 'h-screen',
			// 				align: {
			// 					horizontal: 'center',
			// 					vertical: 'center',
			// 				},
			// 			},
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 3,
			// 			section: 'problem',
			// 			anchor: '#problem',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'The problem',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `Länsförsäkringar needed to update their brand for the digital age. They wanted a modern look and feel for their website, mobile app, and other digital platforms while staying connected to their local roots.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 					groups: [
			// 						{
			// 							id: 0,
			// 							columns: 2,
			// 							title: {
			// 								value: 'The problem',
			// 								weight: 'font-regular',
			// 								family: 'font-serif',
			// 								className: 'leading-snug',
			// 							},
			// 						},
			// 						{
			// 							id: 1,
			// 							columns: 2,
			// 							text: [
			// 								{
			// 									value: `Länsförsäkringar needed to update their brand for the digital age. They wanted a modern look and feel for their website, mobile app, and other digital platforms while staying connected to their local roots.`,
			// 									size: 'large',
			// 								},
			// 							],
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 4,
			// 			background: {},
			// 			variant: 'scrollVertically',
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			image: {
			// 				src: '/images/case/lansforsakringar/lfui/lfui-map@2x.png',
			// 				imgClass: 'w-9/12 mx-auto',
			// 			},
			// 			container: {
			// 				height: 'h-screen',
			// 				align: {
			// 					horizontal: 'center',
			// 					vertical: 'center',
			// 				},
			// 			},
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 5,
			// 			background: {},
			// 			variant: 'scrollVertically',
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			video: {
			// 				src: '/images/case/lansforsakringar/lfui/lfui-craft-480p.mov',
			// 				controls: true,
			// 				showControls: false,
			// 			},
			// 			image: {
			// 				src: '/images/case/lansforsakringar/lfui/lfui-craft.gif',
			// 				imgClass: 'w-9/12 mx-auto',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Sketch runner, Abstract working like a charm!`,
			// 					size: 'large',
			// 				},
			// 			],
			// 			container: {
			// 				height: 'h-screen',
			// 				align: {
			// 					horizontal: 'center',
			// 					vertical: 'center',
			// 				},
			// 			},
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 44444,
			// 			section: 'goal',
			// 			anchor: '#goal',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'Setting the Goal',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `Our main goal was clear: create a unified digital look for Länsförsäkringar that would make it easier for customers to interact with their services online. We wanted to keep the brand's essence while making it work well on different devices.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 6,
			// 			section: 'insights',
			// 			anchor: '#insights',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'Gaining Insights',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `In the initial five weeks, we held a design sprint to generate ideas and prototypes for various digital platforms, including the homepage, mobile app, bank portal, and insurance services. We actively involved Länsförsäkringar employees, seeking their feedback on our design concepts. Their input helped us identify design directions that resonated with users. We also prioritized accessibility. To ensure our designs were user-friendly for everyone, we collaborated with Funka, an accessibility consultancy, to integrate expert insights into the design process. This ensured inclusivity and usability for all users.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 					groups: [
			// 						{
			// 							id: 0,
			// 							title: {
			// 								value: 'Watch',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 1,
			// 							title: {
			// 								value: 'Mobile',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 2,
			// 							title: {
			// 								value: 'Web',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 3,
			// 							title: {
			// 								value: 'Insurance',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 4,
			// 							title: {
			// 								value: 'Banking',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 7,
			// 			section: 'approach',
			// 			anchor: '#approach',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'The Approach',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `Using what we learned, we started designing a new digital look for Länsförsäkringar. We wanted it to be consistent and easy to use on different devices. After the design phase, I became an Art Director consultant, ensuring that the new look was used correctly by all teams.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 8,
			// 			section: 'outcome',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'The Outcome',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `The new look was ready to launch in late 2016 across different platforms. It improved the digital experience for Länsförsäkringar's customers. My role as an Art Director consultant was crucial in making sure everyone used the new look correctly.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 1011,
			// 			section: 'ui-component-navigation',
			// 			variant: 'scrollVertically',
			// 			height: 'h-screen',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/ui/big-menu@2x.png',
			// 				imgClass: 'w-9/12 mx-auto mt-32 -order-1',
			// 			},
			// 			text: [
			// 				{
			// 					value: `The navigation for the public facing website. Applied updated brand and iconography for feeling of personality and warmth.`,
			// 					size: 'small',
			// 					className: 'mt-16 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 			background: {
			// 				color: '#e5eff7',
			// 				class: 'bg-wavy',
			// 			},
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 		},
			// 		{
			// 			id: 1119,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			class: 'relative',
			// 			container: 'h-full relative container flex flex-col',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/open/Home_desktop.png',
			// 				// width: 784,
			// 				// height: 1353,
			// 				imgClass:
			// 					'object-fill mx-auto -order-1 border border-gray-300 w-3/4',
			// 			},
			// 			title: {
			// 				value: 'Homepage',
			// 				// fill: 'red',
			// 				// className: 'pelle',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-16',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Morbi finibus, ligula nec mattis laoreet, lacus velit tincidunt purus, eget fermentum magna neque quis erat. Duis tempus quam eu elit fringilla, id dignissim metus faucibus. Donec quam mi, congue nec erat ac, porttitor dictum augue.`,
			// 					size: 'medium',
			// 					className: 'mt-16 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 				{
			// 					value: `hur får jag vänstra delen scrolla när jag scrollar här med, textblocket, funkar ej`,
			// 					size: 'medium',
			// 					className: 'mt-16 order-4',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 9,
			// 			section: 'collaboration',
			// 			anchor: '#collaboration',
			// 			columns: 4,
			// 			gap: 4,
			// 			title: [
			// 				{
			// 					value: `Key Collaborations`,
			// 				},
			// 			],
			// 			text: [
			// 				{
			// 					value: `Valtech and Tieto EVRY: Worked together on the website design. - Common Ground: Improved the Internet banking experience. - Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `Common Ground: Improved the Internet banking experience. - Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 10,
			// 			section: 'recognition',
			// 			anchor: '#recognition',
			// 			columns: 4,
			// 			gap: 4,
			// 			title: [
			// 				{
			// 					value: `Recognition and Awards`,
			// 				},
			// 			],
			// 			text: [
			// 				{
			// 					value: `Länsförsäkringar received awards, including Best Bank and Insurance Site at the Swedish IDG Internetworld Top 100 in 2017. This recognized our successful work. Our project with Länsförsäkringar wasn't just about a new look; it was about adapting to the digital age while keeping local values intact. Through careful design and teamwork, we achieved this balance, showing how tradition and modernity can coexist.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `This project was about more than just rebranding; it was about reshaping a company's image for the digital world. Länsförsäkringar's success story illustrates the power of smart design and collaboration.`,
			// 					size: 'medium',
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 11,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			columns: 2,
			// 			gap: 4,
			// 			class: 'relative',
			// 			container: 'relative container',
			// 			variant: 'scrollVertically',

			// 			height: 'h-screen',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/ui/forms@2x.png',
			// 				imgClass: 'w-full mx-auto mt-32 -order-1',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Form fields used cross-platform`,
			// 					size: 'small',
			// 					className: 'mt-0 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 		},
			// 		{
			// 			id: 12,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			class: 'relative',
			// 			container: 'h-full relative container flex flex-col',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/nim/nim-dashboard@2x.png',
			// 				imgClass:
			// 					'object-fill mx-auto -order-1 border border-gray-300 w-3/4',
			// 			},
			// 			title: {
			// 				value: 'Internet banking',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-16',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Morbi finibus, ligula nec mattis laoreet, lacus velit tincidunt purus, eget fermentum magna neque quis erat. Duis tempus quam eu elit fringilla, id dignissim metus faucibus. Donec quam mi, congue nec erat ac, porttitor dictum augue.`,
			// 					size: 'medium',
			// 					className: 'mt-16 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 13,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			columns: 2,
			// 			gap: 4,
			// 			class: 'relative',
			// 			container: 'relative container',
			// 			variant: 'scrollVertically',

			// 			height: 'h-screen',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/ui/nim-nav@2x.png',
			// 				imgClass: 'w-1/2 mx-auto mt-32 -order-1',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Navigation variant stacked for portal`,
			// 					size: 'small',
			// 					className: 'mt-0 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 		},
			// 		{
			// 			id: 14,
			// 			section: 'watch-animation',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/watch/watch-transfer.gif',
			// 				class: 'h-auto max-w-sm mx-auto',
			// 				imgClass:
			// 					'h-auto max-w-sm mx-auto rounded-3xl shadow-2xl',
			// 			},
			// 			title: {
			// 				value: `Effortless Money Transfers at Your Fingertips`,
			// 				size: 'large',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-16 order-2',
			// 			},
			// 			text: {
			// 				value: `Experience the watch app for seamless money transfers, aligned with Länsförsäkringar's new digital brand`,
			// 				size: 'medium',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-0 order-3',
			// 			},
			// 			background: {
			// 				color: '#fff',
			// 			},
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			// container: {
			// 			// 	height: 'h-screen',
			// 			// 	align: {
			// 			// 		horizontal: 'center',
			// 			// 		vertical: 'center',
			// 			// 	},
			// 			// },
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 15,
			// 			section: 'image-loop',
			// 			container: 'fluid',
			// 			image: {
			// 				variant: 'loop',
			// 				folder: 'lansforsakringar/mobile/',
			// 				style: 'horizontal',
			// 			},
			// 		},
			// 		{
			// 			id: 16,
			// 			section: 'image-loop',
			// 			image: {
			// 				variant: 'loop',
			// 				folder: 'lansforsakringar/mobile/',
			// 			},
			// 		},
			// 	],
			// },
			// {
			// 	id: 1,
			// 	date: '2015',
			// 	case: 'test-1',
			// 	title: `test-1`,
			// 	tags: ['UX', 'UI'],
			// 	theme: 'lf',
			// 	protected: true,
			// 	// fix protected per case, dont show up now
			// 	hero: {
			// 		gap: 32,
			// 		columns: 3,
			// 		rows: 2,
			// 		description: {
			// 			colStart: 1,
			// 			colEnd: 4,
			// 			columns: 3,
			// 			rowStart: 2,
			// 			rows: 3,
			// 			title: {
			// 				value: `Improving Länsförsäkringar's Brand Identity`,
			// 				rowStart: 1,
			// 				colStart: 1,
			// 				colEnd: 2,
			// 			},
			// 			lead: {
			// 				value: 'Länsförsäkringar',
			// 				colStart: 1,
			// 				colEnd: 1,
			// 				class: 'mb-0',
			// 			},
			// 			desc: {
			// 				value: 'Art Director Consultant, 2016 – 2017',
			// 				colStart: 1,
			// 				colEnd: 1,
			// 			},
			// 		},
			// 		image: {
			// 			src: '/images/case/lansforsakringar/logo@2x.png',
			// 			columns: 2,
			// 			rows: 3,
			// 			colStart: 2,
			// 			rowStart: 2,
			// 			rowEnd: 3,
			// 			imgClass: 'w-7/12 mx-auto my-auto mt-64',
			// 		},
			// 	},
			// 	image: {
			// 		src: '/images/case/lansforsakringar/hero_dark.png',
			// 	},
			// 	content: [
			// 		{
			// 			id: 0,
			// 			background: {
			// 				image: '/images/case/lansforsakringar/intro.png',
			// 				color: '#F3F3F3',
			// 			},
			// 			variant: 'full',
			// 			class: 'bg-contain bg-fixed bg-no-repeat bg-center',
			// 		},
			// 		{
			// 			id: 1,
			// 			section: '#intro',
			// 			anchor: '#intro',
			// 			// padding: 'py-32',
			// 			text: [
			// 				{
			// 					value: `In 2016, I worked as an Art Director Consultant for Identity Works on a project with Länsförsäkringar AB, a major Swedish insurance and banking company.`,
			// 					size: 'large',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 				{
			// 					value: `Länsförsäkringar has a rich history and stands apart with its local ownership, emphasizing its unique local approach.`,
			// 					size: 'large',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 2,
			// 			background: {},
			// 			variant: 'scrollVertically',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/devices.png',
			// 				imgClass: 'w-9/12 mx-auto',
			// 			},
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			container: {
			// 				height: 'h-screen',
			// 				align: {
			// 					horizontal: 'center',
			// 					vertical: 'center',
			// 				},
			// 			},
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 3,
			// 			section: 'problem',
			// 			anchor: '#problem',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'The problem',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `Länsförsäkringar needed to update their brand for the digital age. They wanted a modern look and feel for their website, mobile app, and other digital platforms while staying connected to their local roots.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 					groups: [
			// 						{
			// 							id: 0,
			// 							columns: 2,
			// 							title: {
			// 								value: 'The problem',
			// 								weight: 'font-regular',
			// 								family: 'font-serif',
			// 								className: 'leading-snug',
			// 							},
			// 						},
			// 						{
			// 							id: 1,
			// 							columns: 2,
			// 							text: [
			// 								{
			// 									value: `Länsförsäkringar needed to update their brand for the digital age. They wanted a modern look and feel for their website, mobile app, and other digital platforms while staying connected to their local roots.`,
			// 									size: 'large',
			// 								},
			// 							],
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 4,
			// 			background: {},
			// 			variant: 'scrollVertically',
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			image: {
			// 				src: '/images/case/lansforsakringar/lfui/lfui-map@2x.png',
			// 				imgClass: 'w-9/12 mx-auto',
			// 			},
			// 			container: {
			// 				height: 'h-screen',
			// 				align: {
			// 					horizontal: 'center',
			// 					vertical: 'center',
			// 				},
			// 			},
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 5,
			// 			background: {},
			// 			variant: 'scrollVertically',
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			video: {
			// 				src: '/images/case/lansforsakringar/lfui/lfui-craft-480p.mov',
			// 				controls: true,
			// 				showControls: false,
			// 			},
			// 			image: {
			// 				src: '/images/case/lansforsakringar/lfui/lfui-craft.gif',
			// 				imgClass: 'w-9/12 mx-auto',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Sketch runner, Abstract working like a charm!`,
			// 					size: 'large',
			// 				},
			// 			],
			// 			container: {
			// 				height: 'h-screen',
			// 				align: {
			// 					horizontal: 'center',
			// 					vertical: 'center',
			// 				},
			// 			},
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 44444,
			// 			section: 'goal',
			// 			anchor: '#goal',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'Setting the Goal',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `Our main goal was clear: create a unified digital look for Länsförsäkringar that would make it easier for customers to interact with their services online. We wanted to keep the brand's essence while making it work well on different devices.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 6,
			// 			section: 'insights',
			// 			anchor: '#insights',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'Gaining Insights',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `In the initial five weeks, we held a design sprint to generate ideas and prototypes for various digital platforms, including the homepage, mobile app, bank portal, and insurance services. We actively involved Länsförsäkringar employees, seeking their feedback on our design concepts. Their input helped us identify design directions that resonated with users. We also prioritized accessibility. To ensure our designs were user-friendly for everyone, we collaborated with Funka, an accessibility consultancy, to integrate expert insights into the design process. This ensured inclusivity and usability for all users.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 					groups: [
			// 						{
			// 							id: 0,
			// 							title: {
			// 								value: 'Watch',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 1,
			// 							title: {
			// 								value: 'Mobile',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 2,
			// 							title: {
			// 								value: 'Web',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 3,
			// 							title: {
			// 								value: 'Insurance',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 						{
			// 							id: 4,
			// 							title: {
			// 								value: 'Banking',
			// 							},
			// 							text: {
			// 								value: 'Lorem ipsum',
			// 							},
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 7,
			// 			section: 'approach',
			// 			anchor: '#approach',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'The Approach',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `Using what we learned, we started designing a new digital look for Länsförsäkringar. We wanted it to be consistent and easy to use on different devices. After the design phase, I became an Art Director consultant, ensuring that the new look was used correctly by all teams.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 8,
			// 			section: 'outcome',
			// 			columns: 4,
			// 			gap: 4,
			// 			groups: [
			// 				{
			// 					id: 0,
			// 					columns: 2,
			// 					title: {
			// 						value: 'The Outcome',
			// 						weight: 'font-regular',
			// 						family: 'font-serif',
			// 						className: 'leading-snug',
			// 					},
			// 				},
			// 				{
			// 					id: 1,
			// 					columns: 2,
			// 					text: [
			// 						{
			// 							value: `The new look was ready to launch in late 2016 across different platforms. It improved the digital experience for Länsförsäkringar's customers. My role as an Art Director consultant was crucial in making sure everyone used the new look correctly.`,
			// 							size: 'large',
			// 						},
			// 					],
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 1011,
			// 			section: 'ui-component-navigation',
			// 			variant: 'scrollVertically',
			// 			height: 'h-screen',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/ui/big-menu@2x.png',
			// 				imgClass: 'w-9/12 mx-auto mt-32 -order-1',
			// 			},
			// 			text: [
			// 				{
			// 					value: `The navigation for the public facing website. Applied updated brand and iconography for feeling of personality and warmth.`,
			// 					size: 'small',
			// 					className: 'mt-16 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 			background: {
			// 				color: '#e5eff7',
			// 				class: 'bg-wavy',
			// 			},
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 		},
			// 		{
			// 			id: 1119,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			class: 'relative',
			// 			container: 'h-full relative container flex flex-col',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/open/Home_desktop.png',
			// 				// width: 784,
			// 				// height: 1353,
			// 				imgClass:
			// 					'object-fill mx-auto -order-1 border border-gray-300 w-3/4',
			// 			},
			// 			title: {
			// 				value: 'Homepage',
			// 				// fill: 'red',
			// 				// className: 'pelle',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-16',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Morbi finibus, ligula nec mattis laoreet, lacus velit tincidunt purus, eget fermentum magna neque quis erat. Duis tempus quam eu elit fringilla, id dignissim metus faucibus. Donec quam mi, congue nec erat ac, porttitor dictum augue.`,
			// 					size: 'medium',
			// 					className: 'mt-16 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 				{
			// 					value: `hur får jag vänstra delen scrolla när jag scrollar här med, textblocket, funkar ej`,
			// 					size: 'medium',
			// 					className: 'mt-16 order-4',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 9,
			// 			section: 'collaboration',
			// 			anchor: '#collaboration',
			// 			columns: 4,
			// 			gap: 4,
			// 			title: [
			// 				{
			// 					value: `Key Collaborations`,
			// 				},
			// 			],
			// 			text: [
			// 				{
			// 					value: `Valtech and Tieto EVRY: Worked together on the website design. - Common Ground: Improved the Internet banking experience. - Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `Common Ground: Improved the Internet banking experience. - Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `Daresay (formerly known as Screen Interaction): Developed the mobile app. - Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `Identity Works: Collaborated on the initial design phase.`,
			// 					size: 'medium',
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 10,
			// 			section: 'recognition',
			// 			anchor: '#recognition',
			// 			columns: 4,
			// 			gap: 4,
			// 			title: [
			// 				{
			// 					value: `Recognition and Awards`,
			// 				},
			// 			],
			// 			text: [
			// 				{
			// 					value: `Länsförsäkringar received awards, including Best Bank and Insurance Site at the Swedish IDG Internetworld Top 100 in 2017. This recognized our successful work. Our project with Länsförsäkringar wasn't just about a new look; it was about adapting to the digital age while keeping local values intact. Through careful design and teamwork, we achieved this balance, showing how tradition and modernity can coexist.`,
			// 					size: 'medium',
			// 				},
			// 				{
			// 					value: `This project was about more than just rebranding; it was about reshaping a company's image for the digital world. Länsförsäkringar's success story illustrates the power of smart design and collaboration.`,
			// 					size: 'medium',
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 11,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			columns: 2,
			// 			gap: 4,
			// 			class: 'relative',
			// 			container: 'relative container',
			// 			variant: 'scrollVertically',

			// 			height: 'h-screen',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/ui/forms@2x.png',
			// 				imgClass: 'w-full mx-auto mt-32 -order-1',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Form fields used cross-platform`,
			// 					size: 'small',
			// 					className: 'mt-0 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 		},
			// 		{
			// 			id: 12,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			class: 'relative',
			// 			container: 'h-full relative container flex flex-col',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/nim/nim-dashboard@2x.png',
			// 				imgClass:
			// 					'object-fill mx-auto -order-1 border border-gray-300 w-3/4',
			// 			},
			// 			title: {
			// 				value: 'Internet banking',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-16',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Morbi finibus, ligula nec mattis laoreet, lacus velit tincidunt purus, eget fermentum magna neque quis erat. Duis tempus quam eu elit fringilla, id dignissim metus faucibus. Donec quam mi, congue nec erat ac, porttitor dictum augue.`,
			// 					size: 'medium',
			// 					className: 'mt-16 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 		},
			// 		{
			// 			id: 13,
			// 			section: 'test',
			// 			anchor: '#test',
			// 			columns: 2,
			// 			gap: 4,
			// 			class: 'relative',
			// 			container: 'relative container',
			// 			variant: 'scrollVertically',

			// 			height: 'h-screen',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/ui/nim-nav@2x.png',
			// 				imgClass: 'w-1/2 mx-auto mt-32 -order-1',
			// 			},
			// 			text: [
			// 				{
			// 					value: `Navigation variant stacked for portal`,
			// 					size: 'small',
			// 					className: 'mt-0 order-3',
			// 					align: {
			// 						horizontal: 'center',
			// 					},
			// 				},
			// 			],
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 		},
			// 		{
			// 			id: 14,
			// 			section: 'watch-animation',
			// 			image: {
			// 				src: '/images/case/lansforsakringar/watch/watch-transfer.gif',
			// 				class: 'h-auto max-w-sm mx-auto',
			// 				imgClass:
			// 					'h-auto max-w-sm mx-auto rounded-3xl shadow-2xl',
			// 			},
			// 			title: {
			// 				value: `Effortless Money Transfers at Your Fingertips`,
			// 				size: 'large',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-16 order-2',
			// 			},
			// 			text: {
			// 				value: `Experience the watch app for seamless money transfers, aligned with Länsförsäkringar's new digital brand`,
			// 				size: 'medium',
			// 				align: {
			// 					horizontal: 'center',
			// 				},
			// 				className: 'mt-0 order-3',
			// 			},
			// 			background: {
			// 				color: '#fff',
			// 			},
			// 			align: {
			// 				horizontal: 'center',
			// 				vertical: 'center',
			// 			},
			// 			// container: {
			// 			// 	height: 'h-screen',
			// 			// 	align: {
			// 			// 		horizontal: 'center',
			// 			// 		vertical: 'center',
			// 			// 	},
			// 			// },
			// 			height: 'h-screen',
			// 		},
			// 		{
			// 			id: 15,
			// 			section: 'image-loop',
			// 			container: 'fluid',
			// 			image: {
			// 				variant: 'loop',
			// 				folder: 'lansforsakringar/mobile/',
			// 				style: 'horizontal',
			// 			},
			// 		},
			// 		{
			// 			id: 16,
			// 			section: 'image-loop',
			// 			image: {
			// 				variant: 'loop',
			// 				folder: 'lansforsakringar/mobile/',
			// 			},
			// 		},
			// 	],
			// },
			{
				id: 3,
				case: 'lansforsakringar',
				title: 'Länsförsäkringar',
				tags: ['Art Direction'],
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Redesigning Länsförsäkringar's digital presence for the modern age while preserving its local roots`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `2016 – 2017`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Stockholm`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Länsförsäkringar AB`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Art Direction, Branding, UI/UX Design`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/lansforsakringar/bg_lf.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/lansforsakringar/devices@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `As an Art Director Consultant, I helped Länsförsäkringar, one of Sweden's leading insurance and banking companies, refresh its digital presence while maintaining a strong connection to its local roots.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Länsförsäkringar needed to update its brand for the digital age by modernizing its website, mobile app, and other digital platforms while staying true to its local identity.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to create a unified digital design that would maintain the essence of Länsförsäkringar's brand while enhancing the online customer experience across devices.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We conducted a five-week design sprint to generate ideas and prototypes for digital platforms, working closely with Länsförsäkringar's team. We also collaborated with Funka, an accessibility consultancy, to ensure that our designs were user-friendly for everyone.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Using the insights we gained, I worked on developing a new digital visual identity for Länsförsäkringar that would be consistent across platforms. After the design phase, I served as a consultant, ensuring that the brand's new look was implemented correctly by various teams.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The new digital design was successfully launched across Länsförsäkringar's platforms in late 2016. It improved the user experience and helped customers easily access the company's services online.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project reinforced the importance of accessibility and consistency in design. I learned how to balance a brand’s identity with modern digital trends, and how to collaborate effectively across teams to ensure successful implementation of a new design system.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'lansforsakringar/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
		],
	},
	{
		id: 6,
		client: 'KLM Royal Dutch Airlines',
		slug: 'klm',
		role: 'Senior Product Design Consultant',
		date: '2015',
		location: 'Amsterdam, Netherlands',
		featured: false,
		url: 'https://www.klm.com',
		protected: true,
		index: true,
		cases: [
			{
				id: 1,
				case: 'klm-royal-dutch-airlines',
				title: 'KLM Royal Dutch Airlines',
				tags: ['Product Design'],
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Redesigning KLM's web platform to enhance the online travel experience`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `AUG – OCT, 2015`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Amsterdam`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `KLM Royal Dutch Airlines`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/instinctly/klm/bg_klm.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/instinctly/klm/laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `In collaboration with AKQA Amsterdam, I worked as a Senior Designer Consultant to redesign KLM's web platform, making it easier and more enjoyable for customers to plan their travels.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `KLM needed to refresh their online platform to ensure the digital experience matched the ease and comfort of their flights.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to design a website that reflected KLM’s warm and efficient service, making the trip planning experience simple and enjoyable for all users.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We conducted deep research with KLM’s team to understand traveler needs and align the design with those expectations, ensuring a seamless user experience for booking and trip planning.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Through agile design sprints, we developed and refined a user-friendly interface, making flight bookings, information access, and trip management easier and more intuitive.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We completed the full design set, which was prepared for launch in early 2016 at beta.klm.com. However, KLM decided to take a different direction, and the project was ultimately cancelled.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project taught me about the complexity of the aviation industry and the importance of intuitive designs that cater to the diverse needs of travelers. The experience reinforced the value of flexible design systems that can handle the intricate nature of travel planning.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'instinctly/klm/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
		],
	},
	{
		id: 7,
		client: 'Instinctly',
		slug: 'instinctly',
		role: 'CEO & Senior Product Design Consultant',
		date: '2007 – Present',
		location: 'Remote / Sweden',
		background: {
			image: '/images/case/instinctly/bg_instinctly.png',
		},
		url: 'https://www.daniellauding.se',
		protected: true,
		featured: true,
		index: true,
		thumbnail: [
			'/images/case/instinctly/klm/thumbnail/01.png',
			'/images/case/instinctly/klm/thumbnail/02.png',
			'/images/case/instinctly/klm/thumbnail/03.png',
			'/images/case/instinctly/klm/thumbnail/04.png',
			'/images/case/instinctly/klm/thumbnail/05.png',
			'/images/case/instinctly/klm/thumbnail/06.png',
		],
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
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Designing an intuitive and user-friendly app for mrUsta, connecting users with essential services in Dubai`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `NOV, 2015`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Dubai`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `mrUsta`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/instinctly/mrusta/bg_abro.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/instinctly/mrusta/devices@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `In late 2015, I collaborated with mrUsta, a startup in Dubai focused on connecting users with a wide range of service providers, such as car repair shops, plumbers, and more. The goal was to transition from their website to a new mobile app, enhancing the user experience and making it easier for people to find and book services on the go.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `mrUsta needed to develop a seamless and user-friendly mobile app that would help users quickly find and connect with service providers, improving the overall customer experience and expanding their reach.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to design a mobile app that was intuitive, visually appealing, and easy to use, providing a smooth experience for users as they searched for and booked services through mrUsta.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `I immersed myself in mrUsta's service model and conducted extensive user research to understand what customers were looking for in a service booking app. This research helped shape the app’s design, ensuring it met user expectations and provided a delightful experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We focused on crafting a user-friendly interface that would streamline the process of finding and booking services. This involved simplifying navigation, improving search functionality, and designing a visually cohesive look that aligned with mrUsta’s branding.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We delivered a set of designs that were ready for the development phase, providing a strong foundation for mrUsta’s new app. The app was designed to be the go-to solution for finding and booking a wide variety of services, from car repairs to household maintenance.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project gave me a deeper understanding of the unique challenges of the service industry and taught me how to design flexible, intuitive user experiences that cater to a broad audience. I also learned the importance of balancing visual appeal with functional efficiency to create a user-friendly app that meets the needs of both service providers and users.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'instinctly/mrusta/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
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
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Revamping Åbro Bryggeri's online presence to better connect with customers`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `AUG, 2014`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Sweden`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Åbro Bryggeri`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/instinctly/abro/bg_abro.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/instinctly/abro/laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `In 2014, I collaborated with Producks and Folkets Stockholm to give Åbro Bryggeri’s website a fresh new look, ensuring it was more welcoming and easier to navigate while capturing the spirit of the brand.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Åbro needed a revamped website that was more user-friendly and showcased the brewery’s unique character, while also making it easy for users to explore and engage with the brand online.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our primary goal was to design a website that felt like Åbro—welcoming, easy to navigate, and full of character—while providing a smooth user experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We spent a lot of time getting to know Åbro’s team and their customers, ensuring that the new site would reflect the brewery’s unique identity while being easy to use.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We focused on creating a user-friendly site that captured Åbro's spirit. A custom CMS was developed to support future growth and keep the site running smoothly.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The new website was successfully launched in early 2015, showcasing Åbro’s products and history while offering a much-improved user experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project taught me the importance of balancing visual appeal with functionality. Creating a custom CMS also reinforced the value of future-proofing design systems to accommodate growth and new content.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'instinctly/abro/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
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
			{
				id: 4,
				case: 'addictive-keys-xln-audio',
				title: 'Addictive Keys – XLN Audio',
				tags: ['Product Design'],
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Redesigning XLN Audio's Addictive Keys to enhance usability and streamline the creative process`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `2023`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Stockholm`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `XLN Audio`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI, Prototyping`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/instinctly/xln/bg_xln.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/instinctly/xln/laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `The redesign of XLN Audio's Addictive Keys aimed to create a more engaging and intuitive experience, focusing on streamlining sound selection and enhancing the platform's overall functionality for music producers.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Users were struggling with a complex interface and spending too much time finding the right sounds, particularly in the standalone version of Addictive Keys.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The goal was to streamline the sound selection process with AI-driven recommendations, unify the interface for ease of use, and adapt the platform to fit individual creative workflows more effectively.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Research into VST interface trends indicated the need for a modern, responsive design that balanced skeuomorphic elements with flat design principles for a more intuitive user experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The redesign featured an AI-based sound recommendation engine, a simplified instrument library for quick access, and a refreshed flat design with skeuomorphic details to enhance the overall user experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The concept was well-received by XLN Audio, who appreciated the innovative approach and its potential to significantly improve the creative experience for music producers using Addictive Keys.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project emphasized the importance of integrating AI to address specific user needs, the value of flexible design, and the impact of engaging users throughout the development process to create a product that resonates with its audience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'instinctly/xln/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
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
			// {
			// 	id: 9,
			// 	case: 'steem',
			// 	client: 'Steem',
			// 	date: '2014',
			// 	location: 'Remote',
			// 	title: 'Steem',
			// 	lead: '',
			// 	protected: true,
			// 	library: {
			// 		folder: 'steem',
			// 	},
			// },
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
			{
				id: 6,
				case: 'klm-royal-dutch-airlines',
				title: 'KLM Royal Dutch Airlines',
				tags: ['Product Design'],
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Redesigning KLM's web platform to enhance the online travel experience`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `AUG – OCT, 2015`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Amsterdam`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `KLM Royal Dutch Airlines`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/instinctly/klm//bg_klm.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/instinctly/klm/klm_laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `In collaboration with AKQA Amsterdam, I worked as a Senior Designer Consultant to redesign KLM's web platform, making it easier and more enjoyable for customers to plan their travels.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `KLM needed to refresh their online platform to ensure the digital experience matched the ease and comfort of their flights.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to design a website that reflected KLM’s warm and efficient service, making the trip planning experience simple and enjoyable for all users.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We conducted deep research with KLM’s team to understand traveler needs and align the design with those expectations, ensuring a seamless user experience for booking and trip planning.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Through agile design sprints, we developed and refined a user-friendly interface, making flight bookings, information access, and trip management easier and more intuitive.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We completed the full design set, which was prepared for launch in early 2016 at beta.klm.com. However, KLM decided to take a different direction, and the project was ultimately cancelled.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project taught me about the complexity of the aviation industry and the importance of intuitive designs that cater to the diverse needs of travelers. The experience reinforced the value of flexible design systems that can handle the intricate nature of travel planning.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'instinctly/klm/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
		],
	},
	{
		id: 8,
		client: 'Backbase',
		slug: 'backbase',
		role: 'Lead Visual Designer Consultant',
		date: '2012 – 2017',
		location: 'Remote / Amsterdam, Netherlands',
		featured: true,
		background: {
			image: '/images/case/backbase/bg_backbase.png',
		},
		url: 'https://www.backbase.com',
		protected: false,
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
				case: 'backbase',
				title: 'Backbase',
				lead: 'At Backbase, a front-runner in digital banking platforms, we tackled the task of providing top-tier global banks with ready-to-implement UI/UX solutions. This was crucial for meeting the diverse demands of clients like ABN Amro and UniCredit under tight schedules, enhancing the platform to suit the modern banking ecosystem with seamless cross-device experiences.',
				// protected: true,
				library: {
					folder: 'backbase',
				},
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Delivering adaptable UI/UX solutions for global banks through the Backbase platform`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `2012 – 2017`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Amsterdam`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Backbase`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI, Development`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/backbase/bg_backbase.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/backbase/laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `At Backbase, we focused on creating top-tier, ready-to-implement UI/UX solutions for global banks. This included enhancing the platform to support modern banking experiences across various devices for clients like ABN Amro and UniCredit.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The challenge was to evolve the platform to meet the complex needs of digital banking while ensuring consistent user experiences across multiple devices.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to deliver responsive and adaptable UI/UX solutions for leading banks, enhancing the digital banking journey across devices while supporting diverse client needs.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The project required bridging traditional banking systems with a modern, intuitive interface, ensuring a consistent experience across all devices and creating a themeable platform for customization.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `I was responsible for rapidly delivering design requests, often within days, while developing a themeable platform that allowed partners to customize their interfaces with ease. Additionally, I contributed to crafting an admin panel for platform management and traveled for proof of concepts to support the sales process.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `The development of "Launchpad" streamlined the delivery of online and mobile banking projects, ensuring consistent UX across platforms. Enhancements to the CMS and website bolstered Backbase's market position, and my continued freelance work has cemented a lasting partnership.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This experience underscored the value of adaptability in design, the need for customizable platforms to meet diverse user needs, and the impact of hands-on prototyping in sales. My travels for proof of concepts provided invaluable opportunities to directly present solutions to clients and influence the sales strategy.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'backbase/screens',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
		],
	},
	{
		id: 9,
		client: 'Steem',
		slug: 'steem',
		role: 'UX & UI Designer',
		date: '2011 – 2012',
		location: 'Västerås, Sweden',
		featured: false,
		// url: 'https://www.klm.com',
		protected: false,
		index: true,
		cases: [
			{
				id: 1,
				case: 'navii-web2print',
				title: 'Navii – Web2Print',
				tags: ['Product Design'],
				content: [
					{
						id: 0,
						section: 'intro',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center',
						padding: 'pt-48 pb-8',
						text: {
							value: `Launching Steem: Revolutionizing the Web2Print sector for Swedish organizations`,
							size: 'xl',
							align: {
								horizontal: 'center',
							},
						},
						groups: {
							class: 'pt-0 mt-16',
							items: [
								{
									id: 0,
									class: 'pt-0',
									text: [
										{
											value: `When`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `2011 – 2012`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 1,
									text: [
										{
											value: `Location`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Västerås`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 2,
									text: [
										{
											value: `Client`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Navii – Steem`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
								{
									id: 3,
									text: [
										{
											value: `Type of work`,
											size: 'small',
											className: 'mt-0 mb-0',
										},
										{
											value: `Product Design, UX, UI, Prototyping`,
											size: 'medium',
											className: 'mt-0 mb-0',
										},
									],
								},
							],
						},
					},
					{
						id: 1,
						section: 'bg-brand',
						class: 'bg-cover bg-fixed bg-no-repeat bg-center h-screen',
						background: {
							image: '/images/case/steem/bg_steem.png',
						},
					},
					{
						id: 2,
						section: 'description',
						class: 'w-6/12 mx-auto',
						image: {
							src: '/images/case/steem/laptop@2x.png',
							imgClass: 'mt-16',
						},
						text: [
							{
								value: `In 2011, within Navii, we launched Steem, a startup aiming to revolutionize the Web2Print sector. The platform simplified the customization and ordering of marketing materials online for Swedish organizations like 'Centerpartiet'.`,
								size: 'large',
								align: {
									horizontal: 'center',
								},
							},
						],
					},
					{
						id: 3,
						section: 'the-problem',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Problem`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Existing systems were too rigid for personalizing marketing communications, making customization difficult for users.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 4,
						section: 'setting-the-goal',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Setting the Goal`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Our goal was to develop a platform that made it easy for users to personalize and order marketing materials online, providing an improved user experience.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 5,
						section: 'gaining-insights',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Gaining Insights`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We conducted hands-on demos and testing with customers across Sweden, gathering invaluable feedback to refine the platform.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 6,
						section: 'the-approach',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Approach`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `We built an online storefront and a backend system for admins to upload customizable templates, defining editable sections for end-users.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 7,
						section: 'the-outcome',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `The Outcome`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `Steem was embraced by major organizations, including 'Centerpartiet', and was nominated for Best Web2Print Tool at the Graphic Awards in 2011.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 8,
						section: 'learnings',
						groups: {
							items: [
								{
									id: 0,
									columns: 2,
									text: {
										value: `Learnings`,
										size: 'small',
										className: 'mt-0 mb-0',
									},
								},
								{
									id: 1,
									columns: 2,
									text: [
										{
											value: `This project underscored the importance of hands-on demos, balancing user customization with brand standards, and refining designs based on direct user feedback.`,
											size: 'large',
										},
									],
								},
							],
						},
					},
					{
						id: 9,
						section: 'image-loop',
						background: {
							color: '#FAFAFA',
						},
						container: 'h-full relative container flex flex-col',
						image: {
							variant: 'loop',
							folder: 'steem/screens/2x',
							style: 'vertical',
							imageClasses: 'testar',
						},
					},
				],
			},
		],
	},
	{
		id: 10,
		client: 'Burt',
		slug: 'burt',
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
		isExternal: true,
	},
	{
		id: 11,
		client: 'Pod1',
		role: 'Junior Interactive Designer',
		date: '2010 – 2011',
		location: 'New York, US',
		featured: false,
		url: 'https://www.pod1.com',
		protected: true,
		index: true,
		isExternal: true,
	},
	{
		id: 12,
		client: 'Futurniture',
		role: 'Front End Web Developer',
		date: '2009',
		location: 'Stockholm, Sweden',
		featured: false,
		url: 'https://www.futurniture.se',
		protected: true,
		index: true,
		isExternal: true,
	},
	{
		id: 13,
		client: 'Hyper Island',
		role: 'Digital Media',
		date: '2009 – 2011',
		location: 'Stockholm, Sweden',
		featured: false,
		url: 'https://www.hyperisland.se',
		protected: true,
		index: true,
		isExternal: true,
	},
	{
		id: 14,
		client: 'Drumedar',
		role: 'Front End Web Developer',
		date: '2008 – 2009',
		location: 'Västerås, Sweden',
		featured: false,
		url: 'https://www.drumedar.se',
		protected: true,
		index: true,
		isExternal: true,
	},
	{
		id: 15,
		client: 'Loopia',
		role: 'Technician Engineer',
		date: '2007 – 2008',
		location: 'Västerås, Sweden',
		featured: false,
		url: 'https://www.loopia.se',
		protected: true,
		index: true,
		isExternal: true,
	},
];

export { about, work };
