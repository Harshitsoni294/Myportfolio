'use client';
import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const AboutSection = () => {
  const cardRef = useRef(null);
  const x = useMotionValue(0.5); // center by default
  const y = useMotionValue(0.5);

  // Tilt effect transforms
  const rotateX = useTransform(y, [0, 1], [15, -15]); // top-bottom
  const rotateY = useTransform(x, [0, 1], [-15, 15]); // left-right

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  useEffect(() => {
    x.set(0.3);
    y.set(0.4);
  }, []);

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Tilted Floating Image with Shadow */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="relative w-full max-w-sm mx-auto"
          >
            {/* Shadow below the card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-black/40 blur-md rounded-full z-0"></div>

            {/* Image card */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                rotateZ: -10,
                transformStyle: 'preserve-3d'
              }}
              className="relative z-10 rounded-xl transition-transform"
            >
              <img
                src="/toy.png"
                alt="Profile"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6">
            <motion.h2
              className="text-3xl font-bold text-emerald-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                I'm currently diving deep into tech at IIITV-ICD (B.Tech CSE, 2022-26). I like building things that live on the web and actually <em>do</em> something.
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-emerald-400">Frontend Vibes</h3>
                <p>
                  React, TypeScript, Tailwind – you name it. I craft smooth, responsive interfaces that feel good to use.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-emerald-400">Full Stack Flow</h3>
                <p>
                  From the UI to the DB, I’ve got it covered. I enjoy wiring up frontends with Node.js, Express, and MongoDB to build full experiences.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-emerald-400">Design with a Beat</h3>
                <p>
                  I believe in clean, intuitive design. I’m all about those little UX details that make users smile.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
