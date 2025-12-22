import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Zap, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "500+ DSA Problems",
    description: "Solved complex algorithmic challenges on LeetCode, HackerRank, and CodeChef",
  },
  {
    icon: Target,
    title: "Project Completions",
    description: "Successfully delivered 10+ projects across development and design",
  },
  {
    icon: Zap,
    title: "Tools Mastered",
    description: "Proficient in Python, JavaScript, Figma, and Premiere Pro",
  },
  {
    icon: Award,
    title: "Continuous Learner",
    description: "Constantly updating skills with new technologies and frameworks",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Advanced DSA Practice",
    description: "Deep dive into complex algorithms and data structures",
  },
  {
    year: "2023",
    title: "Full Stack Development",
    description: "Started building complete web applications with databases",
  },
  {
    year: "2022",
    title: "Design & Editing",
    description: "Expanded into UI/UX design and video production",
  },
  {
    year: "2021",
    title: "Programming Journey",
    description: "Started learning Python and problem solving",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center group cursor-pointer"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            My <span className="text-primary">Journey</span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card p-6 inline-block">
                      <span className="text-primary font-mono text-sm">{item.year}</span>
                      <h4 className="font-semibold text-lg mt-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;