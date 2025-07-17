'use client';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  // Rolling border line animation variants
  const rollingBorderVariants = {
    animate: {
      strokeDashoffset: [0, -100],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };


  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Centered Content */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title with enhanced animation */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-emerald-400 mb-12 relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Who Am I ?
            {/* Animated underline */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.h2>

          {/* Main description with glass morphism and snake border */}
          <motion.div
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
            variants={itemVariants}
          >
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10" />
            
            {/* Rolling border line */}
            <motion.svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              variants={rollingBorderVariants}
              animate="animate"
            >
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="15"
                ry="15"
                fill="none"
                stroke="url(#emeraldGradient)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </motion.svg>
            
            <div className="relative z-10">
              <motion.p
                className="text-xl md:text-2xl text-white mb-8 leading-relaxed"
                variants={itemVariants}
              >
                I'm <span className="text-emerald-400 font-semibold">Harshit Soni</span>, a Computer Science student who builds stuff that's smart, scalable, and fast.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8"
                variants={itemVariants}
              >
                I've worked across:
              </motion.p>

              {/* Skill categories as horizontal glass morphism cards */}
              <motion.div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <motion.div
                  className="group relative rounded-xl p-6 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl" />
                  
                  {/* Rolling border line */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    variants={rollingBorderVariants}
                    animate="animate"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="11"
                      ry="11"
                      fill="none"
                      stroke="url(#emeraldGradient1)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="emeraldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-semibold text-emerald-400 mb-4">AI & ML</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">training deep learning models, NLP, RAG, and speech synthesis.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative rounded-xl p-6 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl" />
                  
                  {/* Rolling border line */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    variants={rollingBorderVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                  >
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="11"
                      ry="11"
                      fill="none"
                      stroke="url(#blueGradient2)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="blueGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-semibold text-blue-400 mb-4">Web & Systems</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">full-stack apps, real-time communication, Redis, JWT, WebSockets.</p>
                  </div>
                </motion.div>

                <motion.div
                  className="group relative rounded-xl p-6 overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl" />
                  
                  {/* Rolling border line */}
                  <motion.svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    variants={rollingBorderVariants}
                    animate="animate"
                    style={{ animationDelay: "2s" }}
                  >
                    <rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="11"
                      ry="11"
                      fill="none"
                      stroke="url(#purpleGradient3)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="purpleGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Cloud & DevOps</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">Docker, Kubernetes, serverless backends, scalable deployments.</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Closing statement with special emphasis */}
              <motion.div
                className="mt-10 pt-8 border-t border-white/10"
                variants={itemVariants}
              >
                <p className="text-lg md:text-xl text-white font-medium">
                  I thrive at the intersection of{' '}
                  <span className="text-emerald-400 font-bold">AI</span> +{' '}
                  <span className="text-blue-400 font-bold">Web</span> +{' '}
                  <span className="text-purple-400 font-bold">Cloud</span>,{' '}
                  turning code into things that actually work{' '}
                  <span className="text-emerald-400">(and work hard)</span>.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
