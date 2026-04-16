import image2 from '@/assets/image/plannTrip.png'
import image3 from '@/assets/image/feedback1.png'
import image4 from '@/assets/image/esports.png'
import image1 from '@/assets/image/FarmPilot_dashboard.png'

export const ProjectsData = [
  {
    id: 1,
    title: 'FarmPilot',
    image: image1,
    technos: [
      'React.js',
      'Tailwind CSS',
      'TanStack',
      'React Hook Form',
      'Authentication',
      'Supabase',
      'GitLab CI/CD'
    ]
  },
  {
    id: 2,
    title: 'PlannTrip',
    image: image2,
    github_link: 'https://github.com/xeniaalex3/PlannTrip',
    demo: 'https://planntrip.netlify.app/',
    technos: [
      'React.js',
      'TypeScript',
      'TanStack',
      'Authentication',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'CI/CD',
      'Github Actions',
      'Docker',
      'Docker compose'
    ]
  },
  {
    id: 3,
    title: 'Feedback Widget',
    image: image3,
    github_link: 'https://github.com/xeniaalex3/Feedback-Widget',
    demo: 'https://feedback-widget-xi-snowy.vercel.app/',
    className: true,
    technos: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Jest'
    ]
  },
  {
    id: 4,
    title: 'eSports',
    image: image4,
    github_link: 'https://github.com/xeniaalex3/eSports',
    demo: 'https://e-sports-phi.vercel.app/',
    technos: [
      'React.js',
      'TypeScript',
      'React Native',
      'Tailwind CSS',
      'Expo',
      'Radix UI'
    ]
  }
]

export const ProjectDetailsData = [
  {
    id: 1,
    title: 'FarmPilot',
    description:
      'FarmPilot is an internal SaaS developed in a professional environment for an agricultural cooperative, designed to centralize contract and farm management. The platform enables tracking of harvest data (quantities, tonnage), management of crop species per exploitation, and visualization of soil mapping. It also supports collaboration across multiple business teams through advanced user role management. Built to handle complex domain requirements, the application delivers a secure, performant, and productivity-focused user experience.',
    image: image1,
    features: [
      'Full management of agricultural contracts',
      'Tracking of harvest data (quantities, tonnage)',
      'Management of crop species by type of exploitation',
      'Soil mapping visualization',
      'Advanced user role management (multi-role business users)',
      'Access to and management of user documentation',
      'Autonomous management of multiple SaaS pages',
      'Interface optimized for business teams',
      'Secure access and data handling'
    ],
    technos: {
      frontend: [
        'React 19',
        'Vite',
        'Tailwind CSS',
        'TanStack React Router',
        'TanStack React Query',
        'Zod',
        'React-hook-form',
        'Axios',
        'GitLab CI/CD',
        'Supabase'
      ],
      backend: ['PHP', 'Symfony', 'PostgreSQL', 'Docker', 'Docker compose']
    }
  },
  {
    id: 2,
    title: 'PlannTrip',
    description:
      'PlannTrip is a modern web application designed for travel planning, allowing users to organize trips, manage participants, schedule activities, and share useful resources. The application includes a complete authentication system, protected routes, and a responsive interface, delivering a smooth, performant, and collaboration-oriented user experience.',
    image: image2,
    features: [
      'Create and manage trips (destinations, dates)',
      'Add and manage participants',
      'Schedule activities with date and time',
      'Create, update, and delete activities',
      'Share useful links related to trips',
      'User authentication (sign up and login)',
      'User account management (profile, update, deletion)',
      'Protected routes for authenticated users',
      'Responsive interface (mobile and desktop)'
    ],
    technos: {
      frontend: [
        'React 19',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'TanStack React Router',
        'TanStack React Query',
        'Zod',
        'React-hook-form',
        'Axios',
        'CI/CD',
        'Github Actions'
      ],
      backend: [
        'Nest.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Docker',
        'Docker compose'
      ]
    },
    github_link: 'https://github.com/xeniaalex3/PlannTrip',
    backend_repo: 'https://github.com/xeniaalex3/PlannTrip_backend',
    demo: 'https://planntrip.netlify.app/'
  },
  {
    id: 3,
    title: 'Feedback Widget',
    description:
      'The project is called Feedback Widget. It is a tool where the user can leave feedback in case of a problem, an idea or other, this tool allows the user to describe his problem/idea/other along with the screenshot functionality.',
    image: image3,
    features: [
      'Accessible and styled forms',
      ' Screenshot capture functionality',
      ' Feedback submission system',
      'Modern UI components',
      'HTTP requests',
      'Custom scrollbars',
      'Icon system',
      'Feedback API',
      'Sends feedback via email',
      'Database integration',
      'Unit tests'
    ],
    technos: {
      frontend: ['React.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Jest']
    },

    github_link: 'https://github.com/xeniaalex3/Feedback-Widget',
    demo: 'https://feedback-widget-xi-snowy.vercel.app/'
  },
  {
    id: 4,
    title: 'eSports',
    description:
      'The project is called Find your Duo. It is a platform to find the perfect partner to play your favorite game together.',
    image: image4,
    features: [
      'Modern, component-based UI architecture',
      'Fully responsive and utility-first styling system',
      'Accessible and customizable UI components',
      'Responsive slider/carousel for interactive content display',
      'Seamless integration with external APIs via HTTP requests',
      'Icon-based visual enhancements for improved UX',
      'Optimized build pipeline for performance and code splitting'
    ],
    technos: {
      frontend: [
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'React Native',
        'Expo',
        'Radix UI'
      ]
    },

    github_link: 'https://github.com/xeniaalex3/eSports',
    backend_repo: 'https://github.com/xeniaalex3/eSposts-server',
    demo: 'https://e-sports-phi.vercel.app/'
  }
]
