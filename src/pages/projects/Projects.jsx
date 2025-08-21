import { motion } from 'framer-motion';
import ProjectCard from '../../components/ui/ProjectCard';

// Sample project data - replace with your actual projects
const projects = [
  {
    title: 'Stampbox',
    description: 'A web platform for stamp collectors to organize and trade collections, built with Laravel, Vue.js, and MySQL.',
    techStack: ['PHP', 'Laravel', 'VueJs', 'Bootstrap', 'MySql'],
    githubUrl: 'https://github.com/yourusername/project-one',
    demoUrl: 'http://stampbox.com/',
    emoji: '🚀',
    image: '/images/Picture2.png'
  },
  {
    title: 'Fixtrack',
    description: 'A repair management platform for tracking devices, tickets, and operations with a multi-tenant setup.',
    techStack: ['PHP', 'Laravel', 'VueJs', 'TailwindCss', 'MySql', 'inertiaJs', 'multitenant'],
    githubUrl: 'https://github.com/yourusername/project-two',
    demoUrl: 'https://fixtrack.com/',
    emoji: '🎨',
    image: '/images/picture3.png'
  },
  {
    title: 'Boomerang',
    description: 'Discover profitable nearby businesses with map-based search, filters, and quick signals to  local investments.',
    techStack: ['React ', 'Laravel', 'InertiaJs','TailwindCss', 'PostgreSQL'],
    githubUrl: 'https://github.com/faizi385/Boomerang',
    emoji: '📱',
    image: '/images/picture4.png'
  },
  {
    title: 'Omaha Food Lovers',
    description: 'A community-driven platform for discovering and sharing the best food spots in Omaha, built to connect local food lovers with restaurants.',
    techStack: ['VueJs', 'Laravel', 'TailwindCss', 'MySql'],
    githubUrl: 'https://github.com/yourusername/project-four',
    demoUrl: 'https://omahafoodlovers.com/membership',
    emoji: '🤖',
    image: '/images/picture5.png'
  },
  {
    title: 'Email Categorizer',
    description: 'A Python-based backend tool that scans unread emails, categorizes them, and sends automated replies to improve email productivity.',
    techStack: ['Python', 'Gmail API', 'Google GenAI'],
    githubUrl: 'https://github.com/faizi385/Email-Categorizer',
    emoji: '📧',
    image: '/images/picture6.png'
  },  
  {
    title: 'Surely',
    description: 'A secure platform that connects patient health records with professionals in minutes—streamlined, encrypted, and SOC 2-compliant.',
    techStack: ['VueJs', 'AWS Cognito', 'Vuetify'],
    githubUrl: 'https://github.com/faizi385/surely',
    demoUrl: 'https://www.surely.nz/',
    emoji: '🔐',
    image: '/images/picture7.png'
  },   
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">My Projects</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/faizi385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
