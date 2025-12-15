import image2 from '@/assets/image/plannTrip.png'
import image3 from '@/assets/image/feedback1.png'
import image4 from '@/assets/image/esports.png'
import image1 from '@/assets/image/téléchargement.svg'

export const ProjectsData = [
  {
    id: 1,
    title: 'Taskly',
    image: image1,
    technos: [
      'Next.js',
      'TypeScript',
      'TanStack',
      'Authentication',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'CI/CD',
      'Github Actions'
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
    title: 'Taskly',
    image: image1,
  },
  {
    id: 2,
    title: 'PlannTrip',
    description:
      'PlannTrip est une application web moderne dédiée à la planification de voyages, permettant aux utilisateurs d’organiser des séjours, gérer les participants, planifier des activités et partager des liens utiles. L’application intègre une authentification complète, des routes protégées et une interface responsive, offrant une expérience fluide, performante et orientée collaboration.',
    image: image2,
    features: [
      'Création et gestion de voyages (destination, dates)',
      'Ajout et gestion des participants',
      'Planification des activités avec date et heure',
      'Création, modification et suppression des activités',
      'Partage de liens utiles liés au voyage',
      'Authentification des utilisateurs (inscription et connexion)',
      'Gestion du compte utilisateur (profil, mise à jour, suppression)',
      'Routes protégées pour les utilisateurs authentifiés',
      'Interface responsive (mobile et desktop)'
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
