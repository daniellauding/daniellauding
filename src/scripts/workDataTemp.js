// Copy your work array from constant.js and convert to CommonJS
const work = [
  {
    id: 1,
    client: 'Asteria',
    slug: 'asteria',
    role: 'Co-Founder & Lead Product Design',
    date: '2017 – Present',
    location: 'Remote / Sweden',
    featured: true,
    url: 'https://www.asteria.ai',
    protected: false,
    background: {
      image: '/images/case/asteria/bg_asteria.png'
    },
    thumbnail: [
      '/images/case/asteria/thumbnail/01.png',
      '/images/case/asteria/thumbnail/02.png',
      '/images/case/asteria/thumbnail/03.png',
      '/images/case/asteria/thumbnail/04.png',
      '/images/case/asteria/thumbnail/05.png'
    ],
    cases: [
      {
        id: 1,
        case: 'smart-cash-flow',
        title: 'Smart Cash Flow – Asteria',
        tags: ['Product Design'],
        content: [
          {
            id: 0,
            section: 'intro',
            class: 'bg-cover bg-fixed bg-no-repeat bg-center',
            padding: 'pt-48 pb-8',
            text: {
              value: `Empowering small and medium-sized enterprises with accessible financial insights.`,
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
                      value: `Asteria`,
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
              image: '/images/case/asteria/smartcashflow/bg_smartcashflow.png',
            },
          },
          {
            id: 2,
            section: 'description',
            class: 'w-6/12 mx-auto',
            image: {
              src: '/images/case/asteria/smartcashflow/laptop@2x.png',
              imgClass: 'mt-16',
            },
            text: [
              {
                value: `Inspired by our collaboration with Swedbank, we developed the Asteria Smart Cash Flow (Web App) – a user-centric solution aimed at empowering small and medium-sized enterprises (SMEs) with accessible financial insights.

The Asteria Web App is designed to help users navigate their cash flow effortlessly, providing clear, actionable information that simplifies financial management. By focusing on the user experience, we aim to demystify complex financial data, enabling SMEs to make informed decisions confidently and manage their resources effectively.`,
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
                      value: `Through our partnership with Swedbank, we identified a significant issue: many users were unaware of the full potential of the Asteria Smart Cash Flow tool. SMEs often felt overwhelmed by the intricacies of financial management, leading to low engagement and infrequent usage of available tools. Feedback revealed a pressing need for a straightforward, intuitive interface that highlights the app's value and relevance to their daily operations.`,
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
                      value: `Our mission was to simplify cash flow management for SMEs, offering them immediate, actionable insights into their financial health. By prioritizing user experience, we aimed to transform how users engage with their financial data, helping them feel more in control of their business finances.`,
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
                      value: `Through comprehensive user research, including feedback gathered during our collaboration with Swedbank, we identified several pain points. Users expressed difficulties in grasping the platform's features and accessing essential tools quickly. This feedback underscored the necessity of a more focused approach that delivers vital business insights in an easily digestible format.`,
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
                      value: `As the lead product designer, I played a crucial role in defining, planning, and guiding the project alongside our CTO. We worked closely to ensure that our vision aligned with the technical capabilities of the Asteria Web App.`,
                      size: 'large',
                    },
                    {
                      value: `I focused on creating a user-friendly experience by conducting workshops to gather insights directly from users, developing wireframes, and refining the user interface. My responsibilities extended beyond design to include testing the application with real user data to validate our concepts and ensure we were effectively addressing users' needs.`,
                      size: 'large',
                    },
                    {
                      value: `Our approach emphasized mobile-friendly functionality, allowing users to access crucial financial information anytime, anywhere. By streamlining the interface, we provided a focused view of cash flow that speaks directly to users who may not have extensive financial knowledge.`,
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
                      value: `The Asteria Web App has successfully positioned us to meet the demands of SMEs seeking simplified financial management solutions. Users now enjoy a clear understanding of their company's financial status, including key metrics like paid and forecasted salaries, taxes, historical and projected account balances.`,
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
          }
        ],
        description: 'Empowering small and medium-sized enterprises with accessible financial insights.',
        shortDescription: 'Making financial insights accessible for SMEs',
        date: '2017',
        technologies: ['Product Design', 'UX', 'UI', 'Development', 'System Integration'],
        challenge: 'Through our partnership with Swedbank, we identified a significant issue: many users were unaware of the full potential of the Asteria Smart Cash Flow tool. SMEs often felt overwhelmed by the intricacies of financial management.',
        solution: 'Created a user-friendly experience by conducting workshops to gather insights directly from users, developing wireframes, and refining the user interface.',
        results: 'The Asteria Web App has successfully positioned us to meet the demands of SMEs seeking simplified financial management solutions. Users now enjoy a clear understanding of their company\'s financial status.',
        images: [
          '/images/case/asteria/smartcashflow/laptop@2x.png',
          '/images/case/asteria/smartcashflow/bg_smartcashflow.png'
        ]
      }
    ]
  },
  {
    id: 2,
    client: 'Spotify',
    slug: 'spotify',
    role: 'Product Designer',
    date: '2016 – 2017',
    location: 'Stockholm, Sweden',
    featured: true,
    background: {
      image: '/images/case/spotify/bg_spotify.png'
    },
    url: 'https://www.spotify.com',
    cases: [
      {
        id: 1,
        case: 'spotify-for-artists',
        title: 'Spotify for Artists',
        tags: ['Product Design'],
        content: [
          {
            id: 0,
            section: 'intro',
            class: 'bg-cover bg-fixed bg-no-repeat bg-center',
            padding: 'pt-48 pb-8',
            text: {
              value: `Empowering artists with data-driven insights and tools to grow their audience.`,
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
                      value: `Product Design, UX Research, UI Design, Prototyping`,
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
              image: '/images/case/spotify/artists/dashboard@2x.png',
            },
          },
          {
            id: 2,
            section: 'description',
            class: 'w-6/12 mx-auto',
            image: {
              src: '/images/case/spotify/artists/dashboard@2x.png',
              imgClass: 'mt-16',
            },
            text: [
              {
                value: `Working with Spotify's artist platform team, we developed Spotify for Artists – a powerful suite of tools that gives artists and their teams deep insights into their music's performance and audience engagement on Spotify.`,
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
                      value: `Artists needed better tools to understand their audience and manage their presence on Spotify. The existing solutions were fragmented and didn't provide the depth of insights artists needed to grow their careers.`,
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
                      value: `Our mission was to empower artists with data-driven insights and tools to grow their audience. By developing a powerful suite of tools, we aimed to provide artists with the depth of insights they need to grow their careers.`,
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
                      value: `Through comprehensive user research, including feedback gathered during our collaboration with Spotify, we identified several pain points. Users expressed difficulties in grasping the platform's features and accessing essential tools quickly. This feedback underscored the necessity of a more focused approach that delivers vital business insights in an easily digestible format.`,
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
                      value: `As the lead product designer, I played a crucial role in defining, planning, and guiding the project alongside our CTO. We worked closely to ensure that our vision aligned with the technical capabilities of the Spotify platform.`,
                      size: 'large',
                    },
                    {
                      value: `I focused on creating a user-friendly experience by conducting workshops to gather insights directly from users, developing wireframes, and refining the user interface. My responsibilities extended beyond design to include testing the application with real user data to validate our concepts and ensure we were effectively addressing users' needs.`,
                      size: 'large',
                    },
                    {
                      value: `Our approach emphasized mobile-friendly functionality, allowing users to access crucial business insights anytime, anywhere. By streamlining the interface, we provided a focused view of data that speaks directly to users who may not have extensive business knowledge.`,
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
                      value: `The Spotify for Artists platform has successfully positioned us to meet the demands of artists seeking data-driven insights and tools to grow their audience. Artists now enjoy a clear understanding of their music's performance and audience engagement on Spotify.`,
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
          }
        ],
        description: 'Empowering artists with data-driven insights and tools to grow their audience.',
        shortDescription: 'Helping artists understand and grow their audience',
        date: '2016',
        technologies: ['Product Design', 'UX Research', 'UI Design', 'Prototyping'],
        challenge: 'Artists needed better tools to understand their audience and manage their presence on Spotify.',
        solution: 'Developed an intuitive interface for artists to access analytics and manage their profile.',
        results: 'Successfully launched Spotify for Artists, providing valuable insights to millions of creators.',
        images: ['/images/case/spotify/artists/dashboard@2x.png']
      },
      {
        id: 2,
        case: 'spotify-release-flow',
        title: 'Spotify Release Flow',
        tags: ['Product Design'],
        content: [
          {
            id: 0,
            section: 'intro',
            class: 'bg-cover bg-fixed bg-no-repeat bg-center',
            padding: 'pt-48 pb-8',
            text: {
              value: `Streamlining the music release process for artists and labels.`,
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
                      value: `Product Design, UX Research, UI Design, Prototyping`,
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
              image: '/images/case/spotify/release/dashboard@2x.png',
            },
          },
          {
            id: 2,
            section: 'description',
            class: 'w-6/12 mx-auto',
            image: {
              src: '/images/case/spotify/release/dashboard@2x.png',
              imgClass: 'mt-16',
            },
            text: [
              {
                value: `Working with Spotify's artist platform team, we developed a streamlined release flow that simplifies the process of uploading and managing music releases across the platform.`,
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
                      value: `Artists and labels faced significant challenges when releasing music on Spotify. The existing process was complex, time-consuming, and often led to errors in metadata and release scheduling. This created frustration and inefficiencies in the music release workflow.`,
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
                      value: `Our goal was to simplify and streamline the music release process, making it more intuitive and efficient for artists and labels. We aimed to reduce the time and effort required to upload and manage releases while ensuring accurate metadata and scheduling.`,
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
                      value: `Through extensive research and interviews with artists, labels, and distributors, we identified key pain points in the release process. We learned that users needed better validation tools, clearer guidance, and more flexible scheduling options to effectively manage their releases.`,
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
                      value: `We redesigned the release flow from the ground up, focusing on user needs and workflow efficiency. The new interface guides users through each step of the process, providing clear feedback and validation at every stage.`,
                      size: 'large',
                    },
                    {
                      value: `Key features included bulk metadata editing, advanced scheduling options, and improved error handling. We also implemented a preview system that allows users to review their releases before submission.`,
                      size: 'large',
                    },
                    {
                      value: `Throughout development, we conducted regular user testing sessions to validate our design decisions and gather feedback for continuous improvement.`,
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
                      value: `The new release flow significantly reduced the time and effort required to publish music on Spotify. Users reported fewer errors, faster completion times, and greater confidence in managing their releases. The streamlined process has become a benchmark for music release management in the industry.`,
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
                      value: `This project highlighted the importance of understanding complex workflows and breaking them down into manageable steps. We learned that clear feedback, robust validation, and user guidance are crucial for handling complex data entry processes.`,
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
              folder: 'spotify/release/screens/2x',
              style: 'vertical',
              imageClasses: 'testar',
            },
          }
        ],
        description: 'Streamlining the music release process for artists and labels.',
        shortDescription: 'Making music releases simpler and more efficient',
        date: '2016',
        technologies: ['Product Design', 'UX Research', 'UI Design', 'Prototyping'],
        challenge: 'Artists and labels needed a more efficient way to manage their music releases on Spotify.',
        solution: 'Developed a streamlined release flow with intuitive upload and management tools.',
        results: 'Significantly reduced the time and complexity involved in releasing music on Spotify.',
        images: ['/images/case/spotify/release/dashboard@2x.png']
      }
    ]
  },
  {
    id: 10,
    client: 'Burt',
    slug: 'burt',
    role: 'User Interface Designer',
    date: '2011',
    location: 'Gothenburg, Sweden',
    featured: false,
    url: 'https://www.burtcorp.com',
    protected: true,
    background: {
      image: '/images/case/backbase/bg_backbase.png'
    },
    index: true,
    isExternal: true
  },
  {
    id: 11,
    client: 'Pod1',
    slug: 'pod1',
    role: 'Junior Interactive Designer',
    date: '2010 – 2011',
    location: 'New York, US',
    featured: false,
    url: 'https://www.pod1.com',
    protected: true,
    index: true,
    isExternal: true
  },
  {
    id: 12,
    client: 'Futurniture',
    slug: 'futurniture',
    role: 'Front End Web Developer',
    date: '2009',
    location: 'Stockholm, Sweden',
    featured: false,
    url: 'https://www.futurniture.se',
    protected: true,
    index: true,
    isExternal: true
  },
  {
    id: 13,
    client: 'Hyper Island',
    slug: 'hyper-island',
    role: 'Digital Media',
    date: '2009 – 2011',
    location: 'Stockholm, Sweden',
    featured: false,
    url: 'https://www.hyperisland.se',
    protected: true,
    index: true,
    isExternal: true
  },
  {
    id: 14,
    client: 'Drumedar',
    slug: 'drumedar',
    role: 'Front End Web Developer',
    date: '2008 – 2009',
    location: 'Västerås, Sweden',
    featured: false,
    url: 'https://www.drumedar.se',
    protected: true,
    index: true,
    isExternal: true
  },
  {
    id: 15,
    client: 'Loopia',
    slug: 'loopia',
    role: 'Technician Engineer',
    date: '2007 – 2008',
    location: 'Västerås, Sweden',
    featured: false,
    url: 'https://www.loopia.se',
    protected: true,
    index: true,
    isExternal: true
  },
  {
    id: 3,
    case: 'steem',
    title: 'Steem – Web2Print Platform',
    tags: ['Product Design'],
    content: [
      {
        id: 0,
        section: 'intro',
        class: 'bg-cover bg-fixed bg-no-repeat bg-center',
        padding: 'pt-48 pb-8',
        text: {
          value: `Revolutionizing the Web2Print sector with a user-friendly platform.`,
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
                  value: `2011`,
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
                  value: `Navii`,
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
                  value: `We conducted hands-on demos and testing with customers across Sweden, gathering invaluable feedback to refine the platform. This direct interaction helped us understand the specific needs of different organizations.`,
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
                  value: `We built an online storefront and a backend system for admins to upload customizable templates, defining editable sections for end-users. The platform was designed to maintain brand consistency while allowing for personalization.`,
                  size: 'large',
                },
                {
                  value: `Key features included template customization, real-time preview, and automated production workflow integration.`,
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
                  value: `Steem was embraced by major organizations, including 'Centerpartiet', and was nominated for Best Web2Print Tool at the Graphic Awards in 2011. The platform successfully simplified the process of creating and ordering marketing materials.`,
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
                  value: `This project underscored the importance of hands-on demos, balancing user customization with brand standards, and refining designs based on direct user feedback. The experience taught us valuable lessons about scaling customization while maintaining quality and consistency.`,
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
      }
    ],
    description: 'Revolutionizing Web2Print with a user-friendly platform',
    shortDescription: 'Making marketing material customization simple',
    date: '2011',
    technologies: ['Product Design', 'UX', 'UI', 'Development'],
    challenge: 'Existing systems were too rigid for personalizing marketing communications.',
    solution: 'Built an intuitive platform for customizing and ordering marketing materials.',
    results: 'Successfully adopted by major organizations and nominated for Best Web2Print Tool.',
    images: [
      '/images/case/steem/laptop@2x.png',
      '/images/case/steem/bg_steem.png'
    ]
  },
  {
    id: 3,
    client: 'Länsförsäkringar',
    slug: 'lansforsakringar',
    role: 'Lead Product Designer',
    date: '2016 – 2017',
    location: 'Stockholm, Sweden',
    featured: true,
    background: {
      image: '/images/case/lansforsakringar/bg_lansforsakringar.png'
    },
    url: 'https://www.lansforsakringar.se',
    cases: [
      {
        id: 1,
        case: 'design-system',
        title: 'Design System – Länsförsäkringar',
        tags: ['Design System'],
        content: [
          {
            id: 0,
            section: 'intro',
            class: 'bg-cover bg-fixed bg-no-repeat bg-center',
            padding: 'pt-48 pb-8',
            text: {
              value: `Creating a unified design system for Sweden's leading insurance company`,
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
                      value: `Länsförsäkringar`,
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
                      value: `Design System, UX, UI, Development`,
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
              image: '/images/case/lansforsakringar/design-system/bg_design-system.png',
            },
          },
          {
            id: 2,
            section: 'description',
            class: 'w-6/12 mx-auto',
            image: {
              src: '/images/case/lansforsakringar/design-system/laptop@2x.png',
              imgClass: 'mt-16',
            },
            text: [
              {
                value: `Led the development of a comprehensive design system for Länsförsäkringar, unifying the digital experience across their diverse range of insurance and banking services.`,
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
                      value: `Länsförsäkringar faced challenges maintaining consistency across their digital platforms due to decentralized design practices and varying regional needs.`,
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
                      value: `We conducted hands-on demos and testing with customers across Sweden, gathering invaluable feedback to refine the platform. This direct interaction helped us understand the specific needs of different organizations.`,
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
                      value: `We built an online storefront and a backend system for admins to upload customizable templates, defining editable sections for end-users. The platform was designed to maintain brand consistency while allowing for personalization.`,
                      size: 'large',
                    },
                    {
                      value: `Key features included template customization, real-time preview, and automated production workflow integration.`,
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
                      value: `Steem was embraced by major organizations, including 'Centerpartiet', and was nominated for Best Web2Print Tool at the Graphic Awards in 2011. The platform successfully simplified the process of creating and ordering marketing materials.`,
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
          }
        ],
        description: 'Creating a unified design system for Sweden\'s leading insurance company',
        shortDescription: 'Unifying digital experiences through design',
        date: '2016',
        technologies: ['Design System', 'UX', 'UI', 'Development'],
        challenge: 'Maintaining consistency across decentralized digital platforms',
        solution: 'Developed a comprehensive design system with flexible components',
        results: 'Successfully implemented across multiple digital platforms',
        images: [
          '/images/case/lansforsakringar/design-system/laptop@2x.png',
          '/images/case/lansforsakringar/design-system/bg_design-system.png'
        ]
      }
    ]
  }
];

module.exports = { work }; 