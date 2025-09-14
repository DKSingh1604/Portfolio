import { motion } from "framer-motion";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;

  category:
    | "frontend"
    | "backend"
    | "design"
    | "tools";
};

type SkillCategory = {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "💻",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Flutter", category: "frontend" },
      { name: "Dart", category: "frontend" },
      { name: "React", category: "frontend" },
      {
        name: "TypeScript",
        category: "frontend",
      },
      {
        name: "TailwindCSS",
        category: "frontend",
      },
      { name: "HTML/CSS", category: "frontend" },
    ],
  },
  {
    name: "Backend & APIs",
    icon: "🔧",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "Firebase", category: "backend" },
      { name: "Supabase", category: "backend" },
      { name: "REST APIs", category: "backend" },
      {
        name: "Authentication",
        category: "backend",
      },
    ],
  },
  {
    name: "Design & UX",
    icon: "🎨",
    color: "from-pink-500 to-rose-400",
    skills: [
      {
        name: "UI/UX Design",
        category: "design",
      },
      { name: "Figma", category: "design" },
      { name: "Stitch AI", category: "design" },
      {
        name: "Design Systems",
        category: "design",
      },
      {
        name: "Responsive Design",
        category: "design",
      },
      { name: "Prototyping", category: "design" },
    ],
  },
  {
    name: "Database & Storage",
    icon: "�️",
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "MongoDB", category: "backend" },
      {
        name: "Firebase Firestore",
        category: "backend",
      },
      { name: "Supabase", category: "backend" },
      {
        name: "Local Storage",
        category: "backend",
      },
      {
        name: "Shared Preferences",
        category: "backend",
      },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "🛠️",
    color: "from-amber-500 to-orange-400",
    skills: [
      { name: "Git/GitHub", category: "tools" },
      { name: "VS Code", category: "tools" },
      {
        name: "Android Studio",
        category: "tools",
      },
      { name: "Postman", category: "tools" },
      {
        name: "Chrome DevTools",
        category: "tools",
      },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-purple-950/10"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-medium tracking-wider uppercase mb-3"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            className="text-3xl md:text-4xl font-bold"
          >
            Skills & Technologies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(
            (category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * categoryIndex,
                }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-border/40 bg-card/70 backdrop-blur-sm hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                      >
                        <span className="text-xl text-white">
                          {category.icon}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {category.skills.map(
                        (skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{
                              opacity: 0,
                              x: -20,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.3,
                              delay:
                                0.05 * skillIndex,
                            }}
                            className="flex items-center p-2 rounded-md hover:bg-secondary/50 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="font-medium text-sm text-foreground/90">
                              {skill.name}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
