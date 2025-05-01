import image1 from '@/assets/image/feedback1.png'
import image2 from '@/assets/image/esports.png'

export const ProjectsData = [
  {
    id: 1,
    title: 'Feedback Widget',
    image: image1,
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
    ],
  },
  {
    id: 2,
    title: 'eSports',
    image: image2,
    github_link: 'https://github.com/xeniaalex3/eSports',
    demo: 'https://e-sports-phi.vercel.app/',
    technos: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'React Native',
      'Expo',
      'Radix UI'
    ],
  }
]

export const ProjectDetailsData = [
  {
    id: 1,
    title: 'Feedback Widget',
    description:
      'The project is called Feedback Widget. It is a tool where the user can leave feedback in case of a problem, an idea or other, this tool allows the user to describe his problem/idea/other along with the screenshot functionality.',
    image: image1,
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
    technos: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Jest'
    ],
    github_link: 'https://github.com/xeniaalex3/Feedback-Widget',
    demo: 'https://feedback-widget-xi-snowy.vercel.app/'
  },
  {
    id: 2,
    title: 'eSports',
    description: "The project is called Find your Duo. It is a platform to find the perfect partner to play your favorite game together.",
    image: image2,
    features: [
      'Modern, component-based UI architecture',
      'Fully responsive and utility-first styling system',
      'Accessible and customizable UI components',
      'Responsive slider/carousel for interactive content display',
      'Seamless integration with external APIs via HTTP requests',
      'Icon-based visual enhancements for improved UX',
      'Optimized build pipeline for performance and code splitting',
    ],
    technos: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'React Native',
      'Expo',
      'Radix UI'
    ],
    github_link: 'https://github.com/xeniaalex3/eSports',
    demo: 'https://e-sports-phi.vercel.app/'
  }
]
