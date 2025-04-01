import image1 from '@/assets/image/feedback1.png'
import image2 from '@/assets/image/esports.png'

export const ProjectsData = [
  {
    id: 1,
    title: 'Feedback Widget',
    image: image1,
    github_link: 'https://github.com/xeniaalex3/Feedback-Widget',
    demo: 'https://feedback-widget-xi-snowy.vercel.app/',
    className: true
  },
  {
    id: 2,
    title: 'eSports',
    image: image2,
    github_link: 'https://github.com/xeniaalex3/eSports',
    demo: 'https://e-sports-phi.vercel.app/'
  }
  // {
  //   title: "Ticket SAV",
  //   image: image2,
  //   github_link: "https://github.com/xeniaalex3/eSports",
  //   demo: "https://e-sports-phi.vercel.app/"
  // },
]

export const ProjectDetailsData = [
  {
    id: 1,
    title: 'Feedback Widget',
    description:
      'The project is called Feedback Widget. It is a tool where the user can leave feedback in case of a problem, an idea or other, this tool allows the user to describe his problem/idea/other along with the screenshot functionality.',
    image: image1,
    technos: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
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
