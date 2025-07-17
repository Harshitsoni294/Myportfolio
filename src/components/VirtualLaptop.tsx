import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  details: string;
}

const projects: Project[] = [
  {
    id: "fest",
    name: "Fest Website",
    description: "Dynamic website for college technical festival with event registration system.",
    details: "A comprehensive festival management platform featuring event registration, participant tracking, and real-time updates. Built with modern React architecture and responsive design.",
    technologies: ["React", "Tailwind"],
    image: "/fest.jpg",
    demoUrl: "https://stavyaweb.vercel.app/"
  },
  {
    id: "gate",
    name: "Auto-Entry",
    description: "Automated entry-exit system, reducing manual logging time. React-based frontend and integrated database",
    details: "Smart access control system that streamlines entry-exit processes with automated logging, real-time monitoring, and comprehensive database integration.",
    technologies: ["React", "Tailwind", "Supabase API"],
    image: "/autoentry.jpg",
    demoUrl: "https://icdautoentry.vercel.app/"
  },
  {
    id: "tts",
    name: "Personalized TTS",
    description: "Advanced text-to-speech synthesis system combining Tacotron2 and HiFi-GAN to convert text to own voice.",
    details: "End-to-end TTS pipeline with custom voice dataset training, achieving 4.2/5 MOS score and 45% faster inference speed, serving 500+ users.",
    technologies: ["Tacotron2", "HiFi-GAN", "Gradio"],
    image: "/tts.jpg",
    demoUrl: "https://huggingface.co/spaces/Harshitsoni294/Text-to-speech"
  },
  {
    id: "enhancer",
    name: "Image Enhancer",
    description: "Image processing tool for enhancing and restoring image quality using MATLAB.",
    details: "Advanced image processing system using fuzzy logic intensification and enhancement algorithms to restore and improve image quality with professional results.",
    technologies: ["MATLAB", "Image Processing"],
    image: "/design.jpg",
    demoUrl: "https://github.com/Harshitsoni294/fuzzy_intensification"
  },
  {
    id: "natural-tts",
    name: "Natural-Sounding TTS",
    description: "End-to-end TTS pipeline with Tacotron 2 and HiFi-GAN models for personalized speech synthesis.",
    details: "Developed comprehensive TTS system with custom voice dataset of 200 sentences, achieving 4.2/5 MOS score through spectrogram enhancement and prosody modeling.",
    technologies: ["Python", "PyTorch", "Tacotron2"],
    image: "/tts.jpg",
    demoUrl: "https://huggingface.co/spaces/Harshitsoni294/Text-to-speech"
  },
  {
    id: "sentix",
    name: "SentiX.AI Platform",
    description: "Content creation platform with sentiment analysis using React, FastAPI, and Gemini AI.",
    details: "Extracted 500+ company-related posts from Reddit API with 92% sentiment classification accuracy, featuring automated PDF report generation and reducing manual processing by 70%.",
    technologies: ["React", "FastAPI", "Gemini AI"],
    image: "/design.jpg",
    demoUrl: "http://sentixai.vercel.app/"
  }
];

export default function DeckOfCardsProjects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  // Lock scroll when demo is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCard]);

  const handleCardClick = (projectId: string) => {
    setHoveredCard(null);
    setSelectedCard(projectId);
  };

  const closeDemo = () => {
    setSelectedCard(null);
  };

  const getCardPosition = (index: number, total: number) => {
    const isLargeScreen = window.innerWidth >= 768;
    const angle = (index - (total - 1) / 2) * (isLargeScreen ? 15 : 12); // Increased spacing for large screens
    const radius = isLargeScreen ? 320 : Math.min(250, window.innerWidth * 0.25); // Moderate radius
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const y = Math.cos((angle * Math.PI) / 180) * radius * 0.3; // Same curve maintains semicircle
    return { x, y, rotate: angle };
  };

  const selectedProject = projects.find(p => p.id === selectedCard);

  return (
    <div className={`min-h-screen relative overflow-hidden ${selectedCard ? 'overflow-hidden' : ''}`} style={{ overflow: selectedCard ? 'hidden' : 'auto' }}>
      {/* Demo Overlay */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full max-w-6xl h-[80vh] bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden relative"

            >
              <button
                onClick={closeDemo}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="h-full flex flex-col">
                <div className="flex-1 relative overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <iframe
                      src={selectedProject?.demoUrl}
                      className="w-full border-none iframe-no-scroll"
                      title={`${selectedProject?.name} Demo`}
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                      style={{ 
                        height: 'calc(100% + 20px)',
                        width: 'calc(100% + 20px)',
                        marginRight: '-20px',
                        marginBottom: '-20px'
                      }}
                    />
                  </div>
                </div>
                
                <div className="relative p-6 bg-white/5 backdrop-blur-2xl border-t border-white/5 shadow-2xl" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}>
                  <div className="flex justify-center">
                    <a
                      href={selectedProject?.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      Go to Website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cards Container */}
      <div className="relative h-screen flex items-start justify-center pt-0">

  <div className="relative w-full h-full flex items-center justify-center">
    {projects.map((project, index) => {
      const position = getCardPosition(index, projects.length);
      const isHovered = hoveredCard === project.id && !selectedCard;
      
      if (selectedCard) return null;
      
      return (
        <motion.div
          key={project.id}
          className="absolute cursor-pointer"
          style={{
            x: position.x,
            y: position.y,
            zIndex: 1
          }}
          initial={{ 
            rotate: position.rotate,
            scale: 0.8,
            y: position.y + 100
          }}
          animate={{
            rotate: isHovered ? 0 : position.rotate,
            scale: isHovered ? 1.1 : 0.8,
            y: isHovered ? position.y - 80 : position.y,
            z: isHovered ? 50 : 0
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            y: position.y - 50,
            zIndex: 100,
            transition: { 
              duration: 0.3,
              zIndex: { delay: 0.7 }
            }
          }}
          whileTap={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          onClick={() => handleCardClick(project.id)}
          onHoverStart={() => setHoveredCard(project.id)}
          onHoverEnd={() => setHoveredCard(null)}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative w-36 h-52 sm:w-40 sm:h-60 md:w-44 md:h-66 lg:w-48 lg:h-72 group perspective-1000">
            <motion.div
              className="relative w-full h-full preserve-3d transition-transform duration-700"
              animate={{ 
                rotateY: isHovered ? 180 : 0,
                transition: { duration: 0.7, delay: 0.2 }
              }}
            >
              {/* Front of Card */}
              <div className="absolute inset-0 w-full h-full backface-hidden">
                <div className="w-full h-full bg-gradient-to-br from-red-800 via-red-900 to-black rounded-xl border-2 border-yellow-400 shadow-2xl overflow-hidden">
                  {/* Card Back Pattern */}
                  <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-repeat bg-center" style={{
                      backgroundImage: `repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255, 215, 0, 0.1) 45deg, transparent 90deg)`
                    }}></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col items-center justify-center">
                    <div className="text-6xl text-yellow-400">♠</div>
                    <div className="text-yellow-400 text-sm font-bold tracking-wider">PROJECT</div>
                    <div className="text-yellow-400 text-xs opacity-75">{index + 1}</div>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <div className="w-full h-full bg-white rounded-xl border-2 border-gray-300 shadow-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="h-40 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{project.name}</h3>
                    <p className="text-sm text-gray-600 flex-1 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span 
                          key={tech}
                          className="px-1 py-0.5 bg-green-100 text-green-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>


      {/* Placeholder Text */}
      {!selectedCard && (
        <div className="absolute top-4 left-0 right-0 flex justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-100">Hover to reveal project details<br></br>Click to view live demo</p>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          .perspective-1000 {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .text-gold-400 {
            color: #fbbf24;
          }
          .border-gold-400 {
            border-color: #fbbf24;
          }
          .iframe-no-scroll {
            scrollbar-width: none !important; /* Firefox */
            -ms-overflow-style: none !important; /* IE and Edge */
          }
          .iframe-no-scroll::-webkit-scrollbar {
            display: none !important; /* Chrome, Safari, Opera */
            width: 0 !important;
            height: 0 !important;
          }
          .iframe-no-scroll::-webkit-scrollbar-track {
            display: none !important;
          }
          .iframe-no-scroll::-webkit-scrollbar-thumb {
            display: none !important;
          }
          iframe {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          iframe::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
        `
      }} />
    </div>
  );
}