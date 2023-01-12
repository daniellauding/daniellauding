const about = [
	{
		id: 0,
		name: 'Daniel Lauding',
		email: 'daniel@lauding.se',
		logo: '/images/logo.svg',
		hero: '/images/me.jpg',
		description:
			'I am a hybrid* designer who enjoys prototyping, conceptualizing and designing interfaces',
		content: [
			{
				type: 'h1',
				value: 'Jag gjorde det här åt spotify',
			},
			{
				type: 'p',
				value: 'Lorem ipsum dolor sit amet, nullam eruditi assueverit id per. Sed te hinc philosophia. Facer consulatu sea et, alii gloriatur et eum, noster aliquip viderer te eam. Primis adipisci suscipiantur sea ad.',
			},
			{
				type: 'h2',
				value: 'sub-rub',
			},
			{
				type: 'p',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'p',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'p',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'h3',
				value: 'Sen detta',
			},
			{
				type: 'p',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'img',
				value: '/bg_asteria.png',
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
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/asteria/bg_asteria.png',
		url: 'https://www.spotify.com',
    request: true,
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
		protected: true,
		cases: [
			// eller är dessa cases knutna clients / work? vad är bäst
			{
				id: 0,
        case: 'growth-test',
				title: 'Optimize product value for existing markets with growth potential',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
				protected: true,
				content: [
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
		protected: false,
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
		protected: false,
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
		protected: false,
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
		protected: false,
	},
];

const cases = [
	{
		id: 0,
		client: 'Asteria',
		role: 'Co-Founder & Lead Product Design',
		date: '2017 – Present',
		location: 'Stockholm, Sweden',
		url: 'https://www.asteria.ai',
		desc: 'We deliver smart cash flow forecasting to help you keep track of invoicing. With Artificial Intelligence and big data, we analyse payment patterns and can suggest improvements to get better cash flow.',
		protected: true,
		content: [
			{
				type: 'slider',
				slides: [
					{
						text: 'hej hej',
						asset: 'https://dummyimage.com/600x400/000/fff',
					},
					{
						text: 'hej hej',
						asset: 'https://dummyimage.com/600x400/fff/000',
					},
				],
			},
			{
				type: 'title',
				value: 'Jag gjorde det här åt spotify',
			},
			{
				type: 'text',
				value: 'Lorem ipsum dolor sit amet, nullam eruditi assueverit id per. Sed te hinc philosophia. Facer consulatu sea et, alii gloriatur et eum, noster aliquip viderer te eam. Primis adipisci suscipiantur sea ad.',
			},
			{
				type: 'title',
				size: 'medium',
				value: 'sub-rub',
			},
			{
				type: 'textp',
				size: 'small',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'text',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'text',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'title',
				value: 'Sen detta',
			},
			{
				type: 'text',
				value: 'At case partiendo quo, at his melius democritum, prima feugait ut has. Bonorum dolores in duo. Audiam euismod abhorreant usu ad, falli qualisque ne eam, sea detraxit conclusionemque id. Vix nisl putant qualisque no, assum deleniti eam te, iudico cetero nam at. Eu nonumy doctus efficiendi per, regione fabulas definitionem mei ex. Et cum modo populo. Quaeque delenit est ne, eu eum stet aliquando consetetur.',
			},
			{
				type: 'img',
				value: '/bg_asteria.png',
			},
		],
		bg: '/images/case/asteria/bg_asteria.png',
	},
	{
		// Case
		id: 1,
		client: 'Spotify',
		role: 'Product Design Consultant',
		date: '2017',
		location: 'Stockholm, Sweden',
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Field research'],
		bg: '/images/case/spotify/bg_spotify.jpeg',
		url: 'https://www.spotify.com',
		protected: true,
		content: [
			// Sections
			{
				title: 'Optimize product value for existing markets with growth potential',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
				columns: 3,
				gap: 2,
				variant: 'hero',
			},
			{
				// Section
				section: 'brief',
				title: 'Optimize product value for existing markets with growth potential',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
			},
			{
				// Section
				section: 'discovery',
				title: 'Identify ways to attract new freemium users',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
			},
			{
				// Section
				section: 'solution',
				title: 'asdf',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
			},
			{
				// Section
				section: 'validation',
				title: 'asdf',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
			},
			{
				// Section
				section: 'takeaways',
				title: 'Optimize product value for existing markets with growth potential',
				lead: 'Working closely with the squad and product owners to optimize product value for existing markets with growth potential. Mission for emergin markets focus on latin america.',
				columns: 3,
				gap: 2,
				groups: [
					// Groups
					{
						// Group
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
				],
			},
		],
	},
	{
		id: 2,
		client: 'Instinctly',
		role: 'Product Design Consultant',
		date: '2007 – Present',
		location: 'World wide',
		url: 'https://www.daniellauding.se',
		desc: 'Traveling the world while working with beautiful projects and clients. Nomad lifestyle / location independent. Over the years I have had the privilege of working on and leading projects for brands such as Spotify, Länsförsäkringar, KLM Royal Dutch Airlines, Åbro, United Overseas Bank and IKEA in collaboration with agencies such as DDB, AKQA, Apegroup and Identity Works.',
		protected: true,
		// content: [
		//   {
		//     type:'p',
		//     value: 'testar',
		//   }
		// ],
		layout: 'horizontal',
		content: [
			{
				type: 'accordion',
				title: 'Some selected projects',
				//Hur får jag tex denna att komma undan password?
				accordionItem: [
					{
						title: 'KLM',
						text: 'I was hired by AKQA Amsterdam, as a Senior designer consultant for the dutch airline KLM new web platform.',
						active: true,
					},
					{
						title: 'Pelle nisses bilfirma',
						text: 'Labore culpa incididunt voluptate nostrud dolor do occaecat velit aliquip occaecat ullamco laboris excepteur et. Qui ex consequat elit sit. Aliqua aute cillum proident ex incididunt non cillum.',
					},
					{
						title: 'Pelle nisses bilfirma',
						text: 'Labore culpa incididunt voluptate nostrud dolor do occaecat velit aliquip occaecat ullamco laboris excepteur et. Qui ex consequat elit sit. Aliqua aute cillum proident ex incididunt non cillum.',
					},
					{
						title: 'Olles',
						text: 'Labore culpa incididunt voluptate nostrud dolor do occaecat velit aliquip occaecat ullamco laboris excepteur et. Qui ex consequat elit sit. Aliqua aute cillum proident ex incididunt non cillum.',
						active: true,
					},
					{
						title: 'Pelle nisses bilfirma',
						text: 'Labore culpa incididunt voluptate nostrud dolor do occaecat velit aliquip occaecat ullamco laboris excepteur et. Qui ex consequat elit sit. Aliqua aute cillum proident ex incididunt non cillum.',
					},
					//Wrappa i en specifik sektion, column eller row? Class?
				],
			},
		],
		bg: '/images/case/instinctly/bg_instinctly.png',
	},
	{
		id: 3,
		client: 'Länsförsäkringar',
		role: 'Art Director Consultant',
		date: '2016 – 2017',
		location: 'Stockholm, Sweden',
		url: 'https://www.lansforsakringar.se',
		desc: 'Länsförsäkringar Swedish bank and insurance company with 23 customer-owned regional companies. I was lead on the new cross-platform digital design language. Setting up new UI/UX and styleguide LFUI used in mobile app, online bank, public website and various LF projects',
		protected: true,
		content: [
			// {
			//   type: 'img',
			//   value: '/images/case/spotify/hero_spotify.png',
			// },
			{
				type: 'text',
				size: 'large',
				value: 'I was hired by Identity Works, as a Senior designer consultant for the swedish insurance & bank company Länsförsäkringar AB. Identity Works was working on the new brand identity.',
			},
			{
				type: 'text',
				size: 'medium',
				value: 'The challenge was for five weeks to work on the new digital visual identity. Each week was a new platform. During this weeks we worked on the public facing website, banking environment, mobile app and for the watch.',
			},
			{
				type: 'text',
				size: 'medium',
				value: 'After the first phase Länsförsäkringar hired me as a Art Director consultant. My role was to make sure we kept the new visual identity across all platforms and teams while working closely with the developers and stakeholders.',
			},
			{
				type: 'text',
				size: 'medium',
				value: 'The new visual identity will be released in Q4 of 2016 on various platforms',
			},
		],
		tags: ['UX', 'UI', 'Prototyping', 'User testing', 'Art Direction'],
		bg: '/images/case/lansforsakringar/bg_lf.png',
	},
	{
		id: 4,
		client: 'Backbase',
		role: 'Lead Visual Designer',
		date: '2012 – 2017',
		location: 'Amsterdam, Netherlands',
		url: 'https://www.backbase.com',
		desc: 'Working on making the experience of online banking sexier and enjoyable. Clear2Pay, UniCredit, AirBus, Hapoalim, NedBank, Sberbank, ČSOB, Standard Chartered, UOB (on location in Singapore 1 month), Olympus, CertusBank, Hiscox, Swisscard',
		protected: true,
		bg: '/images/case/backbase/bg_backbase.png',
	},
];

export { about, cases, work };
