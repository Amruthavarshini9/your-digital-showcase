import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Code, Database, Palette, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DSA Visualizer",
    description: "An interactive tool to visualize data structures and algorithms with step-by-step animations.",
    tech: ["Python", "Tkinter", "Algorithms"],
    icon: Code,
    gradient: "from-cyan-500/20 to-blue-500/20",
    github: "https://github.com",
    live: null,
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with JavaScript and smooth animations.",
    tech: ["JavaScript", "HTML", "CSS"],
    icon: Code,
    gradient: "from-yellow-500/20 to-orange-500/20",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Student Management System",
    description: "Full-stack application with MySQL database for managing student records and grades.",
    tech: ["Python", "MySQL", "Flask"],
    icon: Database,
    gradient: "from-green-500/20 to-emerald-500/20",
    github: "https://github.com",
    live: null,
  },
  {
    title: "E-commerce UI Design",
    description: "Complete UI/UX design for a modern e-commerce platform with user research.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    icon: Palette,
    gradient: "from-pink-500/20 to-rose-500/20",
    github: null,
    live: "https://figma.com",
  },
  {
    title: "Tech Review Channel",
    description: "Video content creation and editing for a tech review YouTube channel.",
    tech: ["Premiere Pro", "After Effects", "DaVinci"],
    icon: Film,
    gradient: "from-purple-500/20 to-violet-500/20",
    github: null,
    live: "https://youtube.com",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A collection of my work spanning development, design, and creative production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group"
            >
              {/* Project header with gradient */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <project.icon className="h-12 w-12 text-foreground/50 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary"
          >
            <Github className="mr-2 h-4 w-4" />
            View All on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;