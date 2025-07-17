import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLoaderProps {
  onComplete: () => void;
}

const terminalLines = [
  { text: 'Booting portfolio system...', delay: 100 },
  { text: 'Loading UI modules [████......]', delay: 500 },
  { text: 'Establishing secure connection...', delay: 250 },
  { text: 'Launching visual interface...', delay: 300 },
  { text: '>>> Welcome to Harshit’s Universe 🚀', delay: 400 },
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 text-green-400 font-mono text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};
