import { motion } from 'framer-motion';
import { StarBackground } from '../components/StarBackground';
import { CheckCircle, Home, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const ThankYouPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden flex items-center justify-center px-4">
      <StarBackground />

      <motion.div
        className="max-w-2xl mx-auto text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-emerald-500/20 p-6 rounded-full border-4 border-emerald-400">
            <CheckCircle size={80} className="text-emerald-400" />
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 text-emerald-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Thank You!
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Your feedback has been successfully submitted! 🎉
        </motion.p>

        <motion.p
          className="text-lg text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          I truly appreciate you taking the time to share your thoughts. Your insights help me grow and improve. 💚
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/" className="w-full sm:w-auto">
            <motion.button
              className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home size={24} />
              Back to Home
            </motion.button>
          </Link>

          <Link to="/feedback" className="w-full sm:w-auto">
            <motion.button
              className="w-full bg-black/30 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={24} />
              Submit Another
            </motion.button>
          </Link>
        </motion.div>

        {/* Fun Message */}
        <motion.p
          className="text-gray-500 mt-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Stay awesome! ✨
        </motion.p>
      </motion.div>
    </div>
  );
};
