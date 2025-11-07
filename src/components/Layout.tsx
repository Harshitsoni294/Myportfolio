import { useState, useEffect } from 'react';
import { StarBackground } from '../components/StarBackground';
import { Github, Download, Menu, X, MessageSquare } from 'lucide-react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScreenSize = () => {
      // Just for window resize listener
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToFeedback = () => {
    navigate('/feedback');
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <StarBackground />

      {/* Desktop: Vertical Navigation */}
      <nav className="fixed top-0 left-0 w-20 h-screen md:flex flex-col items-center justify-between py-8 bg-black/20 backdrop-blur-sm border-r border-white/10 z-20 hidden">
        <div className="flex flex-col items-center space-y-10">
          <button
            onClick={toggleMenu}
            className="text-white text-sm flex flex-col items-center justify-center group"
            aria-label="Menu"
          >
            <div className="bg-white/10 p-3 rounded-full mb-1 text-emerald-400 group-hover:bg-white group-hover:text-emerald-500 transition-colors">
              <Menu size={18} />
            </div>
            <span className="text-center text-[10px] leading-tight group-hover:text-white transition-colors">
              Menu
            </span>
          </button>

          <a
            href="https://github.com/Harshitsoni294"
            className="text-white text-sm flex flex-col items-center justify-center group"
          >
            <div className="bg-white/10 p-3 rounded-full mb-1 text-emerald-400 group-hover:bg-white group-hover:text-emerald-500 transition-colors">
              <Github size={18} />
            </div>
            <span className="text-center text-[10px] leading-tight group-hover:text-white transition-colors">
              Github
            </span>
          </a>

          <a
            href="/Harshit_CV.pdf"
            download="Harshit_CV.pdf"
            className="text-white text-sm flex flex-col items-center justify-center group"
          >
            <div className="bg-white/10 p-3 rounded-full mb-1 text-emerald-400 group-hover:bg-white group-hover:text-emerald-500 transition-colors">
              <Download size={18} />
            </div>
            <span className="text-center text-[10px] leading-tight group-hover:text-white transition-colors">
              Download<br />CV
            </span>
          </a>

          {/* Add Feedback Button */}
          <button
            onClick={navigateToFeedback}
            className="text-white text-sm flex flex-col items-center justify-center group"
          >
            <div className={`p-3 rounded-full mb-1 transition-colors ${
              location.pathname === '/feedback'
                ? 'bg-emerald-500 text-white'
                : 'bg-white/10 text-emerald-400 group-hover:bg-white group-hover:text-emerald-500'
            }`}>
              <MessageSquare size={18} />
            </div>
            <span className="text-center text-[10px] leading-tight group-hover:text-white transition-colors">
              Add<br />Feedback
            </span>
          </button>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitsoni2026@gmail.com&su=Impressed%20by%20Your%20Portfolio%20%E2%80%93%20Let%27s%20Connect!&body=Hi%20Harshit%2C%0A%0AI%20came%20across%20your%20portfolio.%20Your%20work%20aligns%20with%20some%20roles%20we%E2%80%99re%20currently%20hiring%20for%20at%20%5BCompany%20Name%5D.%0A%0ALet%20me%20know%20if%20you%27d%20be%20open%20to%20a%20quick%20conversation.%0A%0ABest%2C%0A%5BRecruiter%27s%20Name%5D%0A%5BCompany%20Name%5D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg rotate-180 [writing-mode:vertical-rl] hover:text-emerald-300"
        >
          harshitsoni2026@gmail.com
        </a>
      </nav>

      {/* Mobile: Bottom Navigation Bar */}
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
            download="Harshit_CV.pdf"
            className="flex-1 h-full flex flex-col items-center justify-center text-emerald-400"
          >
            <Download size={24} />
            <span className="text-xs mt-1">CV</span>
          </a>

          <button
            onClick={navigateToFeedback}
            className={`flex-1 h-full flex flex-col items-center justify-center ${
              location.pathname === '/feedback'
                ? 'text-emerald-300'
                : 'text-emerald-400'
            }`}
          >
            <MessageSquare size={24} />
            <span className="text-xs mt-1">Feedback</span>
          </button>
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
                onClick={navigateToHome}
                className={`transition-colors duration-300 ${
                  location.pathname === '/' 
                    ? 'text-emerald-400' 
                    : 'text-white hover:text-emerald-400'
                }`}
              >
                Home
              </button>
            </li>
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
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-emerald-400 transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <Outlet />
    </div>
  );
};
