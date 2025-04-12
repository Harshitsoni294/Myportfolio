import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: "fest",
    name: "Fest Website",
    description: "Dynamic website for college technical festival with event registration system.",
    technologies: ["React", "Tailwind"],
    image: "/fest.jpg"
  },
  {
    id: "gate",
    name: "Auto-Entry",
    description: "Automated entry-exit system, reducing manual logging time. React-based frontend and integrated database",
    technologies: ["React", "Tailwind", "Supabase API"],
    image: "/autoentry.jpg"
  },
  {
    id: "tts",
    name: "Personalized TTS",
    description: "Advanced text-to-speech synthesis system combining Tacotron2 and HiFi-GAN to convert text to own voice.",
    technologies: ["Tacotron2", "HiFi-GAN", "Gradio"],
    image: "/tts.jpg"
  },
  {
    id: "enhancer",
    name: "Image Enhancer",
    description: "Image processing tool for enhancing and restoring image quality using MATLAB.",
    technologies: ["MATLAB", "Image Processing"],
    image: "/design.jpg"
  }
];

const projectLinks: Record<string, string> = {
  fest: "https://stavyaweb.vercel.app/",
  gate: "https://icdautoentry.vercel.app/",
  tts: "https://colab.research.google.com/drive/1w6b1EfcpAT5zH7-ODwXFxI6n0FEsABHq#scrollTo=5VONPntPY4Dx",
  enhancer: "https://github.com/Harshitsoni294/fuzzy_intensification",
};

export const VirtualLaptop = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <div className="flex flex-col lg1000:flex-row items-center lg1000:items-start gap-8">
      
      {/* MONITOR (≥ 1000px) */}
      <div className="hidden lg1000:block">
        <motion.div 
          className="relative w-[600px] aspect-[4/2.6] bg-white rounded-xl p-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col min-h-0">
            <div className="h-8 bg-gray-800 flex items-center px-4 space-x-2 border-b-[10px] border-gray-700 shrink-0">
              <div className="flex space-x-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex space-x-2 overflow-x-auto scrollbar-hide">
                {projects.map(project => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`px-3 py-1 text-xs rounded-t-md transition-colors whitespace-nowrap ${
                      activeProject.id === project.id 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              key={activeProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 min-h-0 overflow-y-auto p-4 pt-0 pb-2"
            >
              <img 
                src={activeProject.image} 
                alt={activeProject.name}
                className="w-full h-44 object-cover rounded-lg"
              />
              <h3 className="text-xl font-bold text-emerald-400 mt-3 mb-2">{activeProject.name}</h3>
              <p className="text-gray-300 mb-4">{activeProject.description}</p>

              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projectLinks[activeProject.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          </div>

          {/* Stand */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-5 bg-white rounded-md shadow-lg"></div>
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-44 h-4 bg-white rounded-lg shadow-xl"></div>
        </motion.div>
      </div>

      {/* PROJECT NAME + DESCRIPTION (≥ 1000px) */}
      <div className="hidden lg1000:flex w-full xl:w-[calc(100vw-650px)] flex-col items-center">
        <div className="w-full max-w-3xl space-y-2">
          {projects.map(project => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors text-white ${
                activeProject.id === project.id 
                  ? 'bg-gray-800 border border-emerald-500/50 text-emerald-400 font-semibold' 
                  : 'bg-gray-800/50 hover:bg-gray-800'
              }`}
            >
              <div className="text-base font-medium">{project.name}</div>
              <div className="text-sm text-gray-400 mt-1">{project.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* CARD VIEW (< 1000px) */}
      <div className="block lg1000:hidden w-full px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {projects.map(project => (
            <motion.div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="bg-gray-800 rounded-xl overflow-hidden border border-transparent hover:border-emerald-500 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-emerald-400">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projectLinks[project.id]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto self-start px-3 py-1 text-sm bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
