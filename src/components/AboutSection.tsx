import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Python developer</span> with 
              strong problem-solving skills in Data Structures and Algorithms. I love tackling complex 
              challenges and turning them into elegant, efficient solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I design user-friendly interfaces using{" "}
              <span className="text-primary font-semibold">Figma</span> and{" "}
              <span className="text-primary font-semibold">Canva</span>, and create engaging video 
              content using <span className="text-primary font-semibold">Premiere Pro</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of combining technical skills with creative design to build 
              products that are both functional and beautiful.
            </p>
          </motion.div>

          {/* Stats/highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Clean Code</h3>
                  <p className="text-muted-foreground text-sm">
                    Writing efficient, maintainable code
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Creative Design</h3>
                  <p className="text-muted-foreground text-sm">
                    User-centered UI/UX design approach
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-lift">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/20">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Problem Solver</h3>
                  <p className="text-muted-foreground text-sm">
                    Turning complex problems into simple solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;