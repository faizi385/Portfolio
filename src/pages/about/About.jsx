import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skills = [
  {
    category: 'Backend',
    icon: <FaServer className="text-primary-500 text-2xl" />,
    items: ['PHP', 'Laravel', 'GrapQL', 'RESTful APIs', 'Python', 'Django']
  },
  {
    category: 'Frontend',
    icon: <FaCode className="text-primary-500 text-2xl" />,
    items: ['Vue.js', 'Vuetify', 'React', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Database',
    icon: <FaDatabase className="text-primary-500 text-2xl" />,
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
  },
  {
    category: 'Tools',
    icon: <FaTools className="text-primary-500 text-2xl" />,
    items: ['Git/GitHub', 'Docker', 'VS Code', 'Figma', 'Postman', 'AWS']
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
            I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
            I love turning ideas into reality through clean, efficient, and scalable code.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With a background in [Your Background], I bring a unique perspective to problem-solving
            and a commitment to creating exceptional user experiences.
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
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-primary-50 dark:hover:bg-gray-600 transition-colors"
                        >
                          {skill}
                        </span>
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
