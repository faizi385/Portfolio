import { motion } from 'framer-motion';
import ProjectImageSlider from '../../components/ui/ProjectImageSlider';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaPhp, FaLaravel, FaVuejs, FaReact, FaBootstrap, FaPython, FaAws } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiPostgresql, SiGmail, SiGoogleclassroom, SiVuetify } from 'react-icons/si';
import { DiPython } from 'react-icons/di';

// Tech stack icons mapping
const techIcons = {
  'PHP': <FaPhp className="text-blue-700" />,
  'Laravel': <FaLaravel className="text-red-500" />,
  'VueJs': <FaVuejs className="text-green-500" />,
  'Bootstrap': <FaBootstrap className="text-purple-500" />,
  'MySql': <SiMysql className="text-blue-500" />,
  'TailwindCss': <SiTailwindcss className="text-cyan-400" />,
  'inertiaJs': <span className="text-indigo-500">⚡</span>, // fallback since no icon
  'React': <FaReact className="text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="text-blue-600" />,
  'Python': <FaPython className="text-yellow-500" />,
  'Gmail API': <SiGmail className="text-red-500" />,
  'Google GenAI': <SiGoogleclassroom className="text-blue-400" />,
  'AWS Cognito': <FaAws className="text-orange-500" />, // replaced SiAws
  'Vuetify': <SiVuetify className="text-blue-500" />,
  'multitenant': <span className="text-gray-600 dark:text-gray-300">🏢</span>
};


// Sample project data - replace with your actual projects
const projects = [
  {
    title: 'Stampbox',
    description: 'A web platform for stamp collectors to organize and trade collections, built with Laravel, Vue.js, and MySQL.',
    techStack: ['PHP', 'Laravel', 'VueJs', 'Bootstrap', 'MySql'],
    githubUrl: 'https://github.com/yourusername/project-one',
    demoUrl: 'http://stampbox.com/',
    emoji: '',
    images: [
      '/images/stamp.png',
      '/images/stamp1.png', // Add more images as needed
      '/images/stamp2.png'
    ]
  },
  {
    title: 'Fixtrack',
    description: 'A repair management platform for tracking devices, tickets, and operations with a multi-tenant setup.',
    techStack: ['PHP', 'Laravel', 'VueJs', 'TailwindCss', 'MySql', 'inertiaJs'],
    githubUrl: 'https://github.com/yourusername/project-two',
    demoUrl: 'https://fixtrack.com/',
    emoji: '',
    images: [
      '/images/picture3.png',
      '/images/fix1.png',
      '/images/fix2.png'
    ]
  },
  {
    title: 'Boomerang',
    description: 'Discover profitable nearby businesses with map-based search, filters, and quick signals to local investments.',
    techStack: ['React', 'Laravel', 'InertiaJs', 'TailwindCss', 'PostgreSQL'],
    githubUrl: 'https://github.com/faizi385/Boomerang',
    emoji: '',
    images: [
      '/images/picture4.png',
      '/images/boom1.jpg',
      '/images/boom2.jpg'
    ]
  },
  {
    title: 'Omaha Food Lovers',
    description: 'A community-driven platform for discovering and sharing the best food spots in Omaha, built to connect local food lovers with restaurants.',
    techStack: ['VueJs', 'Laravel', 'TailwindCss', 'MySql'],
    githubUrl: 'https://github.com/yourusername/project-four',
    demoUrl: 'https://omahafoodlovers.com/membership',
    emoji: '',
    images: [
      '/images/picture5.png',
      '/images/om1.png',
      '/images/om2.png'
    ]
  },
  {
    title: 'Email Categorizer',
    description: 'A Python-based backend tool that scans unread emails, categorizes them, and sends automated replies to improve email productivity.',
    techStack: ['Python', 'Gmail API', 'Google GenAI'],
    githubUrl: 'https://github.com/faizi385/Email-Categorizer',
    emoji: '',
    images: ['/images/picture6.png']
  },
  {
    title: 'Surely',
    description: 'A secure platform that connects patient health records with professionals in minutes streamlined, encrypted, and SOC 2 compliant.',
    techStack: ['VueJs', 'AWS Cognito', 'Vuetify'],
    githubUrl: 'https://github.com/faizi385/surely',
    demoUrl: 'https://www.surely.nz/',
    emoji: '',
    images: [
      '/images/picture7.png',
      '/images/su1.png',
      '/images/su2.png',
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 text-gray-800 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <ProjectImageSlider images={project.images} />
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <div className="flex flex-col mb-4 w-full">
                  <div className=" mb-2 w-full">
                    <span className="text-2xl mr-2">{project.emoji}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white text-left">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-left">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      title={tech}
                    >
                      <span className="text-sm">{techIcons[tech] || techIcons[tech.split(' ')[0]] || '🔹'}</span>
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>



                <div className="flex space-x-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      title="View on GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      title="Live Demo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
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
