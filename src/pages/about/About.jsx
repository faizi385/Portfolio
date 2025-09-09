import { motion } from 'framer-motion';
import { 
  FaCode, FaServer, FaDatabase, FaTools, 
  FaPhp, FaLaravel, FaReact, FaJs, FaHtml5, FaCss3Alt, 
  FaVuejs, FaPython, FaDocker, FaGithub, FaFigma, FaAws 
} from 'react-icons/fa';
import { 
  SiGraphql, SiTypescript, SiTailwindcss, SiBootstrap, 
  SiMysql, SiPostgresql, SiMongodb, SiFirebase, 
  SiPostman, SiDjango, SiVuetify 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  {
    category: 'Backend',
    icon: <FaServer className="text-primary-500 text-2xl" />,
    items: [
      { name: 'PHP', icon: <FaPhp className="text-blue-700" /> },
      { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
      { name: 'RESTful APIs', icon: <FaCode className="text-green-500" /> },
      { name: 'Python', icon: <FaPython className="text-blue-600" /> },
      { name: 'Django', icon: <SiDjango className="text-green-700" /> }
    ]
  },
  {
    category: 'Frontend',
    icon: <FaCode className="text-primary-500 text-2xl" />,
    items: [
      { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
      { name: 'Vuetify', icon: <SiVuetify className="text-blue-500" /> },
      { name: 'React', icon: <FaReact className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> }
    ]
  },
  {
    category: 'Database',
    icon: <FaDatabase className="text-primary-500 text-2xl" />,
    items: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> }
    ]
  },
  {
    category: 'Tools',
    icon: <FaTools className="text-primary-500 text-2xl" />,
    items: [
      { name: 'Git/GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" /> },
      { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
      { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
      { name: 'Figma', icon: <FaFigma className="text-purple-600" /> },
      { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      { name: 'AWS', icon: <FaAws className="text-yellow-500" /> }
    ]
  },
];


const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm a passionate Full Stack Developer with expertise in both frontend and backend technologies.
            I enjoy transforming ideas into real-world applications through clean, efficient, and scalable code.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With experience in React, Laravel, Vue.js, and modern frameworks, I bring a problem-solving mindset
            and a commitment to building user-friendly, high-performance solutions.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">My Skills</h3>
              <div className="space-y-8">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <motion.h4 
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {skillGroup.category}
                    </motion.h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors cursor-default"
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ 
                            y: 0, 
                            opacity: 1,
                            transition: { 
                              delay: skillIndex * 0.05,
                              type: "spring",
                              stiffness: 100,
                              damping: 10
                            } 
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            y: -3,
                            scale: 1.03,
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill.icon}
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">[Your Degree]</h4>
                  <p className="text-gray-600">[Your University/Institution]</p>
                  <p className="text-sm text-gray-500">[Year] - [Year]</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900">[Your Job Title]</h4>
                  <p className="text-primary-600">[Company Name]</p>
                  <p className="text-sm text-gray-500 mb-2">[Year] - [Year]</p>
                  <p className="text-gray-600">
                    Brief description of your role and achievements. Highlight your contributions and impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
