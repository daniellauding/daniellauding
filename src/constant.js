const about = [
	{
		id: 0,
		name: 'Daniel Lauding',
		email: 'daniel@lauding.se',
		logo: '/images/logo.svg',
		hero: '/images/me.jpg',
		description:
			'I am a hybrid* designer who enjoys prototyping, conceptualizing and designing interfaces',
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
        ]
      },
    ]
	},
];

const work = [
  {
		id: 0,
		client: 'Asteria',
		role: 'Co-Founder & Lead Product Design',
		date: '2017 – Present',
		location: 'Remote / Sweden',
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/asteria/bg_asteria.png',
		url: 'https://www.spotify.com',
	},
	{
		id: 1,
		client: 'Spotify',
		role: 'Product Design Consultant',
		date: '2017',
		location: 'Brazil / Sweden',
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/spotify/bg_spotify.jpeg',
		url: 'https://www.spotify.com',
    index: true,
		cases: [
			// eller är dessa cases knutna clients / work? vad är bäst
			{
				id: 0,
        case: 'growth-test',
				title: 'Optimize product value for existing markets with growth potential',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
				protected: true,
				content: [
        // index: false 
					// Sections
					{
            id: 1,
						title: 'Optimize product value for existing markets with growth potential',
						lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
						columns: 3,
						gap: 2,
						variant: 'hero',
					},
					{
						// Section
            id: 2,
						section: 'brief',
						title: 'Optimize product value for existing markets with growth potential',
						lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
					},
					{
						// Section
            id: 3,
						section: 'discovery',
						title: 'Identify ways to attract new freemium users',
						lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
					},
					{
						// Section
            id: 4,
						section: 'solution',
						title: 'asdf',
						lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
					},
					{
						// Section
            id: 5,
						section: 'validation',
						title: 'asdf',
						lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
					},
					{
						// Section
            id: 6,
						section: 'takeaways',
						title: 'Optimize product value for existing markets with growth potential',
						lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
						columns: 3,
						gap: 2,
						groups: [
							// Groups
							{
								// Group
                id: 0,
								colStart: 1,
								colEnd: 1,
								title: {
									variant: 'large',
									value: 'Takeaway #1',
								},
								text: {
									variant: 'large',
									value: 'Nunc sed sagittis arcu, eget fringilla tellus.',
								},
							},
              {
								// Group
                id: 1,
								colStart: 2,
								colEnd: 2,
								title: {
									variant: 'large',
									value: 'Takeaway #2',
								},
								text: {
									variant: 'large',
									value: 'PELLE.',
								},
                columns: 3,
                gap: 2,
                groups: [
                  // Groups
                  {
                    // Group
                    id: 0,
                    colStart: 1,
                    colEnd: 1,
                    title: {
                      variant: 'large',
                      value: 'Takeaway #1',
                    },
                    text: {
                      variant: 'large',
                      value: 'Nunc sed sagittis arcu, eget fringilla tellus.',
                    },
                  },
                  {
                    // Group
                    id: 1,
                    colStart: 2,
                    colEnd: 2,
                    title: {
                      variant: 'large',
                      value: 'Takeaway #2',
                    },
                    text: {
                      variant: 'large',
                      value: 'PELLE.',
                    },
                  },
                ],
							},
						],
					},
				],
			},
			{
				id: 1,
				title: 'Synlig göra radio i spotify',
				protected: false,
        index: false,
				content: [
					// Sections
					{
						title: 'Share story as music',
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
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/recordunion/bg_recordunion.png',
		url: 'https://www.recordunion.com',
    index: true,
	},
  {
		id: 3,
		client: 'Länsförsäkringar',
		role: 'Art Director Consultant',
		date: '2016 – 2017',
		location: 'Stockholm / Sweden',
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/lansforsakringar/bg_lf.png',
		url: 'https://www.lansforsakringar.se',
	},
  {
		id: 4,
		client: 'Instinctly',
		role: 'Senior Product Design ConsultantSenior',
		date: '2007 – Present',
		location: 'Remote / Sweden',
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/instinctly/bg_instinctly.png',
		url: 'https://www.daniellauding.se',
	},
  {
		id: 5,
		client: 'Backbase',
		role: 'Lead Visual Designer Consultant',
		date: '2012 – 2017',
		location: 'Remote / Amsterdam, Netherlands',
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/backbase/bg_backbase.png',
		url: 'https://www.backbase.com',
    index: true,
	},
  {
		id: 6,
		client: 'Playground',
		role: 'Some fun stuff',
		date: 'Never and forever',
		location: 'www',
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/backbase/bg_backbase.png',
		url: 'https://www.backbase.com',
    index: false,
	},
];

export { about, work };