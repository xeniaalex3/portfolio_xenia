import image1 from '@/assets/image/planntrip3.png'
import image2 from '@/assets/image/feedback1.png'
import image3 from '@/assets/image/esports.png'

console.log(image1)
export const ProjectsData = [
  {
    id: 1,
    title: 'PlannTrip',
    image: image1,
    github_link: 'https://github.com/xeniaalex3/PlannTrip',
    demo: 'https://planntrip.netlify.app/',
    technos: [
      'React.js',
      'TypeScript',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'CI/CD',
      'Github Actions'
    ]
  },
  {
    id: 2,
    title: 'Feedback Widget',
    image: image2,
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
    id: 3,
    title: 'eSports',
    image: image3,
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
    title: 'PlannTrip',
    description:
      "Le PlannTrip est une application web destiné à faciliter l'organisation de voyages en groupe. Dotée d'une interface intuitive et moderne, elle permet aux utilisateurs de créer des plans de voyage personnalisés, de choisir des destinations, de fixer des dates et d'inviter des amis par e-mail à collaborer à l'organisation.",
    image: image1,
    features: [
      'Création de voyages avec titre, dates et destinations',
      'Invitation de participants par e-mail',
      "Ajout d'activités avec date et heure",
      'Création de liens utiles (par exemple, hébergement, transport, événements)',
      'Confirmation de la participation des invités',
      'Synchronisation et collaboration en temps réel'
    ],
    technos: {
      frontend: [
        'React.js',
        'TypeScript',
        'Tailwind CSS',
        'React-Toastify',
        'React-Router',
        'CI/CD',
        'Github Actions'
      ],
      backend: ['Nest.js', 'TypeScript', 'Prisma', 'PostgreSQL']
    },
    github_link: 'https://github.com/xeniaalex3/PlannTrip',
    demo: 'https://planntrip.netlify.app/'
  },
  {
    id: 2,
    title: 'Feedback Widget',
    description:
      'The project is called Feedback Widget. It is a tool where the user can leave feedback in case of a problem, an idea or other, this tool allows the user to describe his problem/idea/other along with the screenshot functionality.',
    image: image2,
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
    id: 3,
    title: 'eSports',
    description:
      'The project is called Find your Duo. It is a platform to find the perfect partner to play your favorite game together.',
    image: image3,
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
    demo: 'https://e-sports-phi.vercel.app/'
  }
]
