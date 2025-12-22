import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Palette, 
  Film, 
  Brain, 
  Database, 
  Layout,
  Figma,
  Clapperboard
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "JavaScript", "MySQL"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "Canva", "UI/UX"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Editing",
    icon: Film,
    skills: ["Premiere Pro", "After Effects", "DaVinci"],
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Problem Solving",
    icon: Brain,
    skills: ["DSA", "Logic Building", "Algorithms"],
    color: "from-green-500 to-emerald-500",
  },
];

const techStack = [
  { name: "Python", icon: Code },
  { name: "JavaScript", icon: Layout },
  { name: "MySQL", icon: Database },
  { name: "Figma", icon: Figma },
  { name: "Premiere Pro", icon: Clapperboard },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit spanning development, design, and creative production
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 relative overflow-hidden group cursor-pointer"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8"
        >
          <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <tech.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;