import { StarBackground } from './components/StarBackground';
import { ContactForm } from './components/ContactForm';
import { TypedText } from './components/TypedText';
import { AboutSection } from './components/AboutSection';
import DeckOfCardsProjects from './components/VirtualLaptop';
import Skills from './components/Skills';
import { TerminalLoader } from './components/TerminalLoader';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <TerminalLoader onComplete={handleLoadingComplete} />;
  }

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
            className="bg-white/10 p-3 rounded-full text-emerald-400 hover:bg-white hover:text-emerald-500 transition-colors"
          >
            <Github size={20} />
          </a>

          <a
  href="/resume.pdf"
  download="Harshit_CV.pdf"
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
            href="/resume.pdf"
            download="Harshit_CV.pdf"
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

            <div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
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
                    '🤖 AI - ML Enthusiast...',  
                    '⚡ Full Stack / Systems Developer...',  
                    '☁️ Cloud and DevOps Explorer...',  
                    '🧑‍🎓 B.Tech CSE @ IIIT Vadodara...',  
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
                className="flex space-x-8 justify-center md:justify-start"
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
            className="text-4xl font-bold text-emerald-400 mb-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <DeckOfCardsProjects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-8">
          <motion.h2 
            className="text-4xl font-bold text-emerald-400 mb-12 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          
          {/* Internships */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">Internships</h3>
            <div className="grid gap-8">
              {/* Microsoft Internship */}
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/10"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300">Microsoft AI & Azure Internship</h4>
                    <p className="text-lg text-blue-300 font-medium">AI Intern • via Edunet Foundation</p>
                    <p className="text-gray-400 text-sm">1 month</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Completed a 4-week internship with 40+ hours of AI and Azure training via Microsoft Learn</li>
                  <li>Completed 15+ Microsoft Learn modules on GenAI, neural networks, and image processing</li>
                  <li>Built an AI content moderation system using Azure services with 95% accuracy, automatically masking explicit content and translating harmful text</li>
                  <li>Deployed with a serverless backend and React frontend</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="/microsoft.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-300 flex items-center gap-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🏆 View Certificate
                  </motion.a>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">Azure</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">AI/ML</span>
                </div>
              </motion.div>

              {/* Acxiom Internship */}
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/10"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300">Acxiom Technologies</h4>
                    <p className="text-lg text-blue-300 font-medium">Project Intern – AI Team</p>
                    <p className="text-gray-400 text-sm">2 months</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Built a Retrieval-Augmented Generation (RAG) Q&A system with LangChain and ChromaDB, processing 10,000+ documents</li>
                  <li>Implemented document ingestion, chunking, and embeddings for accurate and efficient retrieval</li>
                  <li>Integrated large language models with context-aware retrieval, improving team productivity by 60%</li>
                  <li>Deployed a FastAPI service with analytics and summarization features, reducing duplicate queries by 25%</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="/acxiom.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium hover:from-blue-500 hover:to-blue-400 transition-all duration-300 flex items-center gap-2 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🏆 View Certificate
                  </motion.a>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">RAG</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">LangChain</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">FastAPI</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs border border-orange-500/30">ChromaDB</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Leadership & Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">Leadership & Contributions</h3>
            <div className="space-y-6">
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/10"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-2xl font-bold text-emerald-300 mb-4 group-hover:text-emerald-200 transition-colors duration-300">Tech Committee Member</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Led and organized 5+ technical events</li>
                  <li>Established cross-IIIT collaborations</li>
                  <li>Managed team of volunteers</li>
                  <li>Increased event participation by 40%</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">Leadership</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">Event Management</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-400/10"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-2xl font-bold text-emerald-300 mb-4 group-hover:text-emerald-200 transition-colors duration-300">Literary Club Secretary</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Successfully organized 10+ literary events</li>
                  <li>Increased club engagement by 30%</li>
                  <li>Created and managed content strategy</li>
                  <li>Mentored junior members</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">Content Strategy</span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">Mentoring</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
        {/* Certificates Section */}
        <section id="certificates" className="pt-8">
          <motion.h2 
            className="text-4xl font-bold text-emerald-400 mb-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Certificates
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
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
          <motion.h2 
            className="text-4xl font-bold text-emerald-400 mb-8 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get in Touch
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;