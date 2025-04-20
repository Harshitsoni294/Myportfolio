import { StarBackground } from './components/StarBackground';
import { ContactForm } from './components/ContactForm';
import { TypedText } from './components/TypedText';
import { AboutSection } from './components/AboutSection';
import { VirtualLaptop } from './components/VirtualLaptop';
import Skills from './components/Skills';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <StarBackground />

      {/* Desktop: Vertical Navigation */}
      <nav className="fixed top-0 left-0 w-20 h-screen md:flex flex-col items-center justify-between py-8 bg-black/20 backdrop-blur-sm border-r border-white/10 z-20 hidden">
        {/* Top Icons */}
        <div className="flex flex-col items-center space-y-10">
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="bg-white/10 p-3 rounded-full text-emerald-400 hover:bg-white hover:text-emerald-500 transition-colors"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>

          <a
            href="https://github.com/Harshitsoni294"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 p-3 rounded-full text-emerald-400 hover:bg-white hover:text-emerald-500 transition-colors"
          >
            <Github size={20} />
          </a>

          <a
            href="/Harshit_CV.pdf"
            download
            className="text-white text-sm flex flex-col items-center justify-center group"
          >
            <div className="bg-white/10 p-3 rounded-full mb-1 text-emerald-400 group-hover:bg-white group-hover:text-emerald-500 transition-colors">
              <Download size={18} />
            </div>
            <span className="text-center leading-tight group-hover:text-white transition-colors">
              Download<br />CV
            </span>
          </a>
        </div>

        {/* Email at bottom */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitsoni2026@gmail.com&su=Impressed%20by%20Your%20Portfolio%20%E2%80%93%20Let%27s%20Connect!&body=Hi%20Harshit%2C%0A%0AI%20came%20across%20your%20portfolio.%20Your%20work%20aligns%20with%20some%20roles%20we%E2%80%99re%20currently%20hiring%20for%20at%20%5BCompany%20Name%5D.%0A%0ALet%20me%20know%20if%20you%27d%20be%20open%20to%20a%20quick%20conversation.%0A%0ABest%2C%0A%5BRecruiter%27s%20Name%5D%0A%5BCompany%20Name%5D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg rotate-180 [writing-mode:vertical-rl] hover:text-emerald-300"
        >
          harshitsoni2026@gmail.com
        </a>
      </nav>

      {/* Mobile: Bottom Navigation Bar - FIXED */}
      <div className="fixed bottom-0 left-0 right-0 w-full z-20 md:hidden">
        <nav className="flex justify-around items-center h-16 bg-black/70 backdrop-blur-md border-t border-white/10">
          <button
            onClick={toggleMenu}
            className="flex-1 h-full flex flex-col items-center justify-center text-emerald-400"
            aria-label="Menu"
          >
            <Menu size={24} />
            <span className="text-xs mt-1">Menu</span>
          </button>

          <a
            href="https://github.com/Harshitsoni294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-full flex flex-col items-center justify-center text-emerald-400"
          >
            <Github size={24} />
            <span className="text-xs mt-1">Github</span>
          </a>

          <a
            href="/Harshit_CV.pdf"
            download
            className="flex-1 h-full flex flex-col items-center justify-center text-emerald-400"
          >
            <Download size={24} />
            <span className="text-xs mt-1">CV</span>
          </a>
        </nav>
      </div>

      {/* Navigation Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 flex items-center justify-center">
          <button 
            onClick={toggleMenu} 
            className="absolute top-8 right-8 text-white hover:text-emerald-400"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <ul className="flex flex-col items-center space-y-8 text-2xl font-medium">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-emerald-400 transition-colors duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-white hover:text-emerald-400 transition-colors duration-300"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-emerald-400 transition-colors duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-white hover:text-emerald-400 transition-colors duration-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('certificates')}
                className="text-white hover:text-emerald-400 transition-colors duration-300"
              >
                Certificates
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-emerald-400 transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Main Content - Reduced spacing between sections */}
      <main className={`${isMobile ? 'px-4 py-16 pb-28' : 'pl-24 pr-8 py-16'} space-y-16`}>
        {/* Hero Section */}
        <section id="about" className="md:min-h-screen flex items-center px-6">
          <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto w-full">
            <div className="hidden md:flex w-full md:w-1/2 justify-end relative mb-10 md:mb-0">
              <div className="relative w-80 h-120">
                <img
                  src="/harrs.png"
                  alt="Harshit Soni"
                  className="w-full h-full object-contain rounded-xl shadow-lg"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
                  }}
                />
                <div className="absolute top-0 right-[-1px] h-full w-1 bg-emerald-400"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-16">
              <motion.h1
                className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hello, I'm
                <span className="block text-emerald-400">Harshit Soni</span>
              </motion.h1>

              <motion.div
                className="text-2xl md:text-3xl text-white mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <TypedText
                  strings={[
                    '👨‍💻 Passionate Programmer...',
                    '🧩 Full Stack Developer...',
                    '🎓 B.Tech Student on a Mission...',
                    '🎨 Creative Designer with a Vision...',
                  ]}
                />
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bringing ideas to life through code.
              </motion.p>

              <motion.div
                className="flex space-x-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a
                  href="https://www.linkedin.com/in/harshitsoni29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Linkedin size={36} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitsoni2026@gmail.com&su=Impressed%20by%20Your%20Portfolio%20%E2%80%93%20Let%27s%20Connect!&body=Hi%20Harshit%2C%0A%0AI%20came%20across%20your%20portfolio.%20Your%20work%20aligns%20with%20some%20roles%20we%E2%80%99re%20currently%20hiring%20for%20at%20%5BCompany%20Name%5D.%0A%0ALet%20me%20know%20if%20you%27d%20be%20open%20to%20a%20quick%20conversation.%0A%0ABest%2C%0A%5BRecruiter%27s%20Name%5D%0A%5BCompany%20Name%5D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Mail size={36} />
                </a>
                <a
                  href="https://github.com/Harshitsoni294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Github size={36} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <AboutSection />
        
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-8">
          <motion.h2
            className="text-4xl font-bold text-emerald-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <VirtualLaptop />
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-8">
          <h2 className="text-4xl font-bold text-emerald-400 mb-8">Roles of responsibilities</h2>
          <div className="space-y-4">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Tech Committee Member</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led and organized 5+ technical events</li>
                <li>Established cross-IIIT collaborations</li>
                <li>Managed team of volunteers</li>
                <li>Increased event participation by 40%</li>
              </ul>
            </div>
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Literary Club Secretary</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Successfully organized 10+ literary events</li>
                <li>Increased club engagement by 30%</li>
                <li>Created and managed content strategy</li>
                <li>Mentored junior members</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="pt-8">
          <h2 className="text-4xl font-bold text-emerald-400 mb-8">Certificates</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="/nvidia.jpg" 
                  alt="nvidia" 
                  className="w-full object-cover transition-transform duration-300 hover:scale-105 object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Fundamentals of Deep Learning</h3>
              <p className="text-gray-300">nVIDIA</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="/deloitte.jpg" 
                  alt="Deloitte" 
                  className="w-full object-cover transition-transform duration-300 hover:scale-105 object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Technology job simulation</h3>
              <p className="text-gray-300">Deloitte</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="w-full h-48 mb-4 overflow-hidden">
                <img 
                  src="/code.jpg" 
                  alt="CodeVoyage" 
                  className="w-full object-cover transition-transform duration-300 hover:scale-105 object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Inter-IIIT coding contest</h3>
              <p className="text-gray-300">IIITV-ICD</p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="pt-8 pb-24">
          <h2 className="text-4xl font-bold text-emerald-400 mb-8">Get in Touch</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;