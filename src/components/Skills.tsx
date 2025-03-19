
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
};

type SkillCategory = {
  name: string;
  icon: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", level: 90, category: 'frontend' },
      { name: "TypeScript", level: 85, category: 'frontend' },
      { name: "Next.js", level: 80, category: 'frontend' },
      { name: "TailwindCSS", level: 95, category: 'frontend' },
      { name: "HTML/CSS", level: 95, category: 'frontend' },
      { name: "JavaScript", level: 90, category: 'frontend' },
    ],
  },
  {
    name: "Backend",
    icon: "🔧",
    skills: [
      { name: "Node.js", level: 85, category: 'backend' },
      { name: "Express", level: 80, category: 'backend' },
      { name: "MongoDB", level: 75, category: 'backend' },
      { name: "PostgreSQL", level: 70, category: 'backend' },
      { name: "GraphQL", level: 65, category: 'backend' },
      { name: "REST APIs", level: 85, category: 'backend' },
    ],
  },
  {
    name: "Design",
    icon: "🎨",
    skills: [
      { name: "UI/UX Design", level: 85, category: 'design' },
      { name: "Figma", level: 90, category: 'design' },
      { name: "Adobe XD", level: 75, category: 'design' },
      { name: "Design Systems", level: 80, category: 'design' },
      { name: "Responsive Design", level: 95, category: 'design' },
      { name: "Prototyping", level: 85, category: 'design' },
    ],
  },
  {
    name: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, category: 'tools' },
      { name: "Docker", level: 70, category: 'tools' },
      { name: "Testing", level: 75, category: 'tools' },
      { name: "CI/CD", level: 65, category: 'tools' },
      { name: "Agile/Scrum", level: 80, category: 'tools' },
      { name: "Performance Optimization", level: 75, category: 'tools' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-3"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Skills & Technologies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">{category.name}</span>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline">{skill.level}%</Badge>
                        </div>
                        <div className="progress-bar h-2">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.2 + (0.1 * skillIndex),
                              ease: "easeOut" 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
