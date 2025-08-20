import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-dark-text transition-colors duration-200">
        <div className="fixed inset-0 -z-10 bg-white dark:bg-gray-900 transition-colors duration-200" />
        <Navbar />
        
        <main className="flex-grow ">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
              <About />
              <Projects />
              <Contact />
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
