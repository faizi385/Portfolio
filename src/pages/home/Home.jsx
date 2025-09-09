import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import { FaReact, FaVuejs, FaNodeJs, FaLaravel, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';
import { Link } from 'react-scroll';
import { useCallback, useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const Orbit = ({ radius = 200, children }) => {
  return (
    <motion.div
      className="absolute w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
};

const OrbitingIcon = ({ icon: Icon, index, total, radius = 100, color }) => {
  const angle = (index * (360 / total) * Math.PI) / 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{
        x,
        y,
        left: `calc(50% - 24px)`,
        top: `calc(50% - 24px)`,
      }}
      whileHover={{ scale: 1.5, zIndex: 10 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={`w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg text-2xl p-2 ${color}`}>
        <Icon />
      </div>
    </motion.div>
  );
};

const TechOrbit = () => {
  const techIcons = [
    { icon: FaReact, color: 'text-blue-500' },
    { icon: FaVuejs, color: 'text-green-500' },
    { icon: FaNodeJs, color: 'text-green-600' },
    { icon: FaLaravel, color: 'text-red-500' },
    { icon: FaPython, color: 'text-blue-400' },
    { icon: SiJavascript, color: 'text-yellow-400' },
    { icon: SiTypescript, color: 'text-blue-600' },
    { icon: SiTailwindcss, color: 'text-cyan-400' },
    { icon: SiMongodb, color: 'text-green-500' },
    { icon: SiPostgresql, color: 'text-blue-700' },
    { icon: FaDocker, color: 'text-blue-400' },
    { icon: FaAws, color: 'text-orange-500' },
  ];

  return (
    <div className="relative w-full max-w-md h-96 mx-auto mb-12 md:mb-0 md:mr-12">
      {/* Profile Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white dark:bg-gray-800 shadow-xl overflow-hidden border-4 border-white dark:border-gray-700"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <img 
            src="/images/pic.jpeg" 
            alt="Profile" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x400?text=Profile+Image';
            }}
          />
        </motion.div>
      </div>
      
      {/* Orbiting Icons */}
      <Orbit radius={120}>
        {techIcons.map(({ icon, color }, index) => (
          <OrbitingIcon 
            key={index} 
            icon={icon} 
            index={index} 
            total={techIcons.length} 
            radius={120}
            color={color}
          />
        ))}
      </Orbit>
    </div>
  );
};

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check for dark mode and set up observer for theme changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Initial check
    checkDarkMode();
    
    // Observe theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // load slim bundle
      await loadSlim(engine);
    }).then(() => {
      console.log("tsparticles engine ready");
    });
  }, []);
  
  const particlesLoaded = useCallback((container) => {
    console.log('Particles container loaded');
    return Promise.resolve();
  }, []);

  return (
    <section
    id="home"
    className="relative min-h-screen flex items-center justify-center 
               bg-gradient-to-b from-white to-gray-50 
               dark:from-dark-bg dark:to-gray-900 
               transition-colors duration-300 overflow-hidden"
  >
    {/* Particles Background (scoped to Home only) */}
    <div className="absolute inset-0 w-full h-full z-0">
      <Particles
        id="tsparticles"
        className="w-full h-full"
        options={{
          fpsLimit: 60,
          fullScreen: { enable: false }, // ⬅️ THIS is important
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: isDarkMode ? "#60a5fa" : "#3b82f6" },
            links: {
              enable: true,
              color: isDarkMode ? "#60a5fa" : "#3b82f6",
              distance: 150,
              opacity: 0.3,
              width: 1
            },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } }
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "connect" }, resize: true },
            modes: { connect: { distance: 120, opacity: 0.3 } }
          },
          detectRetina: true
        }}
      />
    </div>
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                  Faizan Moeen
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12">
                <Typewriter
                  words={['Full Stack Web Developer', 'UI Enthusiast', 'Problem Solver', 'Tech Lover']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                I build exceptional digital experiences with modern web technologies.
                Currently focused on creating beautiful, responsive, and user-friendly applications.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-16"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer px-8 py-3.5 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Get In Touch
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                View My Work
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center md:justify-start space-x-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a href="https://github.com/faizi385" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/faizan-moeen-918660350/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20">
                <FaTwitter className="h-6 w-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Orbit Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <TechOrbit />
          </div>
        </div>

        {/* Scroll Down */}
        <motion.div
          className="hidden sm:flex absolute bottom-10 left-0 right-0 justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown className="animate-bounce h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
