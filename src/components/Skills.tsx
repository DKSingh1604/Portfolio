import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  
  category: 'frontend' | 'backend' | 'design' | 'tools';
};

type SkillCategory = {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "💻",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Flutter",  category: 'frontend' },
      { name: "Dart", category: 'frontend' },
      { name: "TailwindCSS",  category: 'frontend' },
      { name: "HTML/CSS",  category: 'frontend' },
      { name: "JavaScript",  category: 'frontend' },
    ],
  },
  {
    name: "Backend",
    icon: "🔧",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Node.js",  category: 'backend' },
      { name: "SQLite",  category: 'backend' },
      
      { name: "REST APIs",  category: 'backend' },
    ],
  },
  {
    name: "Design",
    icon: "🎨",
    color: "from-pink-500 to-rose-400",
    skills: [
      { name: "UI/UX Design", category: 'design' },
      { name: "Figma",  category: 'design' },
      { name: "Design Systems", category: 'design' },
      { name: "Responsive Design",  category: 'design' },
      { name: "Prototyping",  category: 'design' },
    ],
  },
  {
    name: "Tools & Others",
    icon: "🛠️",
    color: "from-amber-500 to-orange-400",
    skills: [
      { name: "Git/Github",  category: 'tools' },
      { name: "Docker",  category: 'tools' },
      { name: "Firebase/Supabase",  category: 'tools' },
      { name: "CI/CD",  category: 'tools' },
      { name: "BLoC", category: 'tools' },
      { name: "Postman",  category: 'tools' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50 dark:from-background dark:to-purple-950/10">
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-t-4 bg-white/80 backdrop-blur-sm dark:bg-background/80" style={{ borderTopColor: `rgb(${categoryIndex === 0 ? '59, 130, 246' : categoryIndex === 1 ? '139, 92, 246' : categoryIndex === 2 ? '236, 72, 153' : '245, 158, 11'})` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">{category.icon} {category.name}</span>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          {/* <Badge className={`bg-gradient-to-r ${category.color} text-white`}>{skill.level}%</Badge> */}
                        </div>
                        {/* <div className="progress-bar h-2">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.2 + (0.1 * skillIndex),
                              ease: "easeOut" 
                            }}
                          />
                        </div> */}
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
