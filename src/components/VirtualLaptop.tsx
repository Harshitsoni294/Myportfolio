import React from "react";
import { ExternalLink, Globe } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  screenshot: string;
}

const projects: Project[] = [
  {
    id: "chess",
    name: "ChessMasters",
    description: "Real-time chess with AI & multiplayer via WebSockets. WebRTC video chat synced with gameplay. Fast, secure with Redis & Next Auth.",
    technologies: ["Next.js", "TypeScript", "WebSockets", "WebRTC", "Redis", "Next Auth", "Docker"],
    demoUrl: "https://chessmasters.harshitsoni.me/",
    screenshot:
      "chess.png",
  },
  {
    id: "tts",
    name: "Speech Synthesis",
    description: "Tacotron2 + HiFi-GAN for natural speech. Gradio UI for instant text-to-speech. My own cloned voice deployment.",
    technologies: ["Python", "Tacotron2", "HiFi-GAN", "Gradio"],
    demoUrl: "https://huggingface.co/spaces/Harshitsoni294/Text-to-speech",
    screenshot:
      "tts2.png",
  },
  {
    id: "sentix",
    name: "SentiX.AI",
    description: "Fetch & analyze social media chatter. LLM-driven sentiment classification. Reports via React dashboard.",
    technologies: ["React", "FastAPI", "Gemini", "Supa AUTH", "Typescript"],
    demoUrl: "https://sentixai.vercel.app/",
    screenshot:
      "sentix.png",
  },
  {
    id: "fest",
    name: "Stavya",
    description: "Event registrations & schedules. Tailwind UI/UX for modern design. Built for festival-scale traffic.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://stavyaweb.vercel.app/",
    screenshot: "/fest.jpg",
  },
  {
    id: "gate",
    name: "Auto-Entry",
    description: "Automated entry/exit logging. Supabase backend for real-time sync. Replaces manual registers.",
    technologies: ["React", "Tailwind", "Supabase", "Typescript"],
    demoUrl: "https://icdautoentry.vercel.app/",
    screenshot:
      "autoentry.jpg",
  },
  {
    id: "img",
    name: "Fuzzy Enhancement",
    description: "Contrast boost with brightness preserved. Hybrid MATLAB + Python pipeline. Applied fuzzy intensification.",
    technologies: ["MATLAB", "Python"],
    demoUrl: "https://github.com/Harshitsoni294/fuzzy_intensification",
    screenshot:
      "design.jpg",
  },
];

export default function GlassPortfolio() {
  return (
    <div className="min-h-screen text-white py-6 px-3">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:scale-[1.02] transition-all border border-zinc-800 flex flex-col"
            >
              <img
                src={project.screenshot}
                alt={project.name}
                className="w-full h-36 object-cover"
              />

              <div className="p-3 flex flex-col gap-2 h-full">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-xs text-gray-400 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 text-[10px]">
                  {project.technologies.map((tech, index) => {
                    const colors = [
                      "bg-blue-500/20 text-blue-300 border-blue-500/30",
                      "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                      "bg-purple-500/20 text-purple-300 border-purple-500/30",
                      "bg-orange-500/20 text-orange-300 border-orange-500/30",
                      "bg-pink-500/20 text-pink-300 border-pink-500/30",
                      "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
                      "bg-red-500/20 text-red-300 border-red-500/30",
                      "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
                      "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
                      "bg-teal-500/20 text-teal-300 border-teal-500/30"
                    ];
                    return (
                      <span
                        key={index}
                        className={`${colors[index % colors.length]} border rounded-full px-2 py-0.5`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="flex-grow"></div>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-3 py-1.5 rounded-md text-sm transition-all"
                >
                  <Globe className="w-3 h-3" />
                  Visit
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Line clamp CSS */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}