import { motion, AnimatePresence } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiJupyter, SiDocker, SiGit
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";

const skillCategories = [
  {
    title: 'FRONTEND',
    skills: [
      { icon: <SiJavascript size={50} color="#F7DF1E" />, name: 'JavaScript' },
      { icon: <SiTypescript size={50} color="#3178C6" />, name: 'TypeScript' },
      { icon: <SiReact size={50} color="#61DAFB" />, name: 'React' },
      { icon: <SiNextdotjs size={50} color="#fff" />, name: 'Next.js' },
      { icon: <SiTailwindcss size={50} color="#06B6D4" />, name: 'Tailwind' },
      { icon: <SiBootstrap size={50} color="#7952B3" />, name: 'Bootstrap' },
    ],
  },
  {
    title: 'BACKEND',
    skills: [
      { icon: <SiNodedotjs size={50} color="#339933" />, name: 'Node.js' },
      { icon: <SiExpress size={50} color="#fff" />, name: 'Express' },
    ],
  },
  {
    title: 'DATABASE',
    skills: [
      { icon: <SiMysql size={50} color="#00758F" />, name: 'MySQL' },
      { icon: <SiMongodb size={50} color="#47A248" />, name: 'MongoDB' },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { icon: <SiDocker size={50} color="#2496ED" />, name: 'Docker' },
      { icon: <SiGit size={50} color="#F05032" />, name: 'Git' },
      { icon: <FaLinux size={50} color="#FCC624" />, name: 'Linux' },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <section className="min-h-screen px-6 py-16 text-white">
      <h2 className="text-4xl font-bold mb-12 tracking-widest text-emerald-400">MY STACK</h2>

      <div className="flex flex-col gap-16">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-3xl font-extrabold mb-6 text-gray-300">{category.title}</h3>
            <motion.div
              className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 place-items-center"
              variants={container}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
            >
              <AnimatePresence>
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="flex flex-col items-center text-center"
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm font-bold text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
