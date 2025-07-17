import { motion, AnimatePresence } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiFastapi,
  SiPython, SiPytorch, SiTensorflow, SiScikitlearn,
  SiLangchain, SiNumpy, SiPandas,
  SiMongodb, SiMysql, SiRedis,
  SiJupyter, SiDocker, SiKubernetes, SiGit, SiGooglecolab
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { TbBrandChrome } from "react-icons/tb";

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
      { icon: <SiFastapi size={50} color="#009688" />, name: 'FastAPI' },
    ],
  },
  {
    title: 'AI / ML FRAMEWORKS',
    skills: [
      { icon: <SiPython size={50} color="#3776AB" />, name: 'Python' },
      { icon: <SiPytorch size={50} color="#EE4C2C" />, name: 'PyTorch' },
      { icon: <SiTensorflow size={50} color="#FF6F00" />, name: 'TensorFlow' },
      { icon: <SiScikitlearn size={50} color="#F7931E" />, name: 'Scikit-learn' },
      { icon: <SiLangchain size={50} color="#00D4AA" />, name: 'LangChain' },
      { icon: <TbBrandChrome size={50} color="#4285F4" />, name: 'ChromaDB' },
      { icon: <SiNumpy size={50} color="#4DABF7" />, name: 'NumPy' },
      { icon: <SiPandas size={50} color="#E599F7" />, name: 'Pandas' },
    ],
  },
  {
    title: 'DATABASE',
    skills: [
      { icon: <SiMysql size={50} color="#00758F" />, name: 'MySQL' },
      { icon: <SiMongodb size={50} color="#47A248" />, name: 'MongoDB' },
      { icon: <SiRedis size={50} color="#DC382D" />, name: 'Redis' },
    ],
  },
  {
    title: 'TOOLS / DEVOPS',
    skills: [
      { icon: <SiGit size={50} color="#F05032" />, name: 'Git' },
      { icon: <SiDocker size={50} color="#2496ED" />, name: 'Docker' },
      { icon: <SiKubernetes size={50} color="#326CE5" />, name: 'Kubernetes (K8s)' },
      { icon: <FaLinux size={50} color="#FCC624" />, name: 'Linux' },
      { icon: <SiJupyter size={50} color="#F37626" />, name: 'Jupyter' },
      { icon: <SiGooglecolab size={50} color="#F9AB00" />, name: 'Google Colab' },
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
      <motion.h2 
        className="text-4xl font-bold mb-12 tracking-widest text-emerald-400 text-center relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        MY STACK
        {/* Animated underline */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.h2>

      <div className="flex flex-col gap-16">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-3xl font-extrabold mb-6 text-gray-300 text-center">{category.title}</h3>
            <motion.div
              className="flex flex-wrap justify-center gap-8"
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
