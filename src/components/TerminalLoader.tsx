import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarBackground } from './StarBackground';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';

interface TerminalLoaderProps {
  onComplete: () => void;
}

const terminalLines = [
  { text: 'Booting portfolio system...', delay: 0 },
  { text: 'Launching visual interface...', delay: 0 },
  { text: 'Loading UI modules [████......]', delay: 10 },
  { text: '>>> Welcome to Harshit’s Universe 🚀', delay: 0 },
];

export const TerminalLoader = ({ onComplete }: TerminalLoaderProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setIsComplete(true);
      const timeout = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(timeout);
    }

    const line = terminalLines[currentLine];
    let index = 0;

    setTypedText('');

    const typeInterval = setInterval(() => {
      if (index < line.text.length) {
        setTypedText((prev) => prev + line.text.charAt(index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, line.delay);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-gray-900 text-green-400 font-mono text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Star Background */}
        <StarBackground />

        {/* Desktop: Vertical Navigation */}
        <nav className="fixed top-0 left-0 w-20 h-screen md:flex flex-col items-center justify-between py-8 bg-black/20 backdrop-blur-sm border-r border-white/10 z-20 hidden">
          {/* Top Icons */}
          <div className="flex flex-col items-center space-y-10">
            {/* Menu Button */}
            <button
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

        {/* Mobile: Bottom Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 w-full z-20 md:hidden">
          <nav className="flex justify-around items-center h-16 bg-black/70 backdrop-blur-md border-t border-white/10">
            <button
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

        {/* Terminal Content */}
        <div className="flex items-center justify-center min-h-screen px-4 md:pl-24">
          <div className="w-full max-w-2xl p-6">
            {/* Terminal frame */}
            <div className="bg-[#300A24] border border-gray-600/30 rounded-md shadow-2xl overflow-hidden animate-terminal-glow relative">
              {/* Terminal Header */}
              <div className="bg-gray-700 p-3 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-4 text-gray-300 text-sm">harshit@portfolio:~</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 min-h-[220px] relative">
                <div className="space-y-2">
                  {/* Past lines */}
                  {terminalLines.slice(0, currentLine).map((line, i) => (
                    <motion.div
                      key={i}
                      className="text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-blue-300">PS</span> <span className="text-yellow-300">C:\&gt;</span> {line.text}
                    </motion.div>
                  ))}

                  {/* Typing line */}
                  {currentLine < terminalLines.length && (
                    <div className="text-white">
                      <span className="text-blue-300">PS</span> <span className="text-yellow-300">C:\&gt;</span> {typedText}
                      {showCursor && <span className="text-white ml-1">▍</span>}
                    </div>
                  )}

                  {/* Subtle loader */}
                  {currentLine < terminalLines.length && currentLine > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center space-x-1 text-white">
                        {[0, 0.15, 0.3].map((d, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: d }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Final message */}
                  {isComplete && (
                    <motion.div
                      className="text-center mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white text-lg font-bold">
                        ✔️ All systems online.
                      </div>
                      <div className="text-gray-300 text-sm mt-1">
                        Redirecting to experience...
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
