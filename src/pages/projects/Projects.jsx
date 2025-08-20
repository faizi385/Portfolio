import { motion } from 'framer-motion';
import ProjectCard from '../../components/ui/ProjectCard';

// Sample project data - replace with your actual projects
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of your first project. Highlight the problem it solves and the technologies used.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-one',
    demoUrl: 'https://project-one-demo.com',
    emoji: '🚀'
  },
  {
    title: 'Project Two',
    description: 'Description of your second project. Explain what makes it unique and the value it provides to users.',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Chakra UI'],
    githubUrl: 'https://github.com/yourusername/project-two',
    demoUrl: 'https://project-two-demo.com',
    emoji: '🎨'
  },
  {
    title: 'Project Three',
    description: 'Overview of your third project. Mention any challenges you overcame and what you learned.',
    techStack: ['React Native', 'Express', 'PostgreSQL', 'Redux'],
    githubUrl: 'https://github.com/yourusername/project-three',
    emoji: '📱'
  },
  {
    title: 'Project Four',
    description: 'Details about your fourth project. Highlight any interesting algorithms or design patterns used.',
    techStack: ['Python', 'Django', 'Docker', 'AWS'],
    githubUrl: 'https://github.com/yourusername/project-four',
    demoUrl: 'https://project-four-demo.com',
    emoji: '🤖'
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
            href="https://github.com/yourusername"
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
