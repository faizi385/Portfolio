import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark-surface border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Faizan Moeen. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/faizi385" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/faizan-moeen-918660350/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
