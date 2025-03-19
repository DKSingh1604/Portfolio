
import { motion } from "framer-motion";
import { Clock, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
};

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

const experienceData: ExperienceItem[] = [
  {
    title: "Flutter Developer",
    company: "WhiterApps",
    period: " March 2025 - Present",
    description: "Led development of modern web applications using React, TypeScript and Next.js. Implemented design systems and optimized application performance."
  },
  {
    title: "Web/App Developer",
    company: "Team 1.618",
    period: " Oct 2023 - Feb 2025",
    description: "Led development and research of Car Instrumentation and Clusterization app, improving UI/UX and optimizing performance."
  },
];

const educationData: EducationItem[] = [
  {
    degree: "B.Tech. in Computer Science",
    institution: "SRM Institute of Science and Technology (8.4 CGPA)",
    period: "2022- 2026",
    description: "Specialised in Software Developent and core Computer Application skills."
  },
  {
    degree: "12th",
    institution: "R.A.N Public School (90%)",
    period: "2021 - 2022",
    description: "Specialized in human-computer interaction and advanced software development methodologies."
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-3"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            My Professional Journey
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.img
              
              src="/Me.jpg"
              alt="Dev Karan Singh"
              className="w-full h-auto rounded-2xl shadow-lg object-cover mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
              Yo! I'm an app developer turning caffeine and code into sleek, high-performance mobile apps. With 2+ years in Flutter, Firebase, and Supabase, I craft smooth UIs and clean code. Always leveling up—Kotlin, Node.js, you name it. Goal? Build cool stuff and break barriers!
              </p>
              {/* <p className="text-muted-foreground leading-relaxed">
                My approach combines technical expertise with creative problem-solving to deliver solutions that are not only functional but also aesthetically pleasing and intuitive to use. I'm constantly learning and exploring new technologies to stay at the forefront of web development.
              </p> */}
            </motion.div>
          </div>
          
          <div className="space-y-10">
            <div>
              <div className="flex items-center mb-6">
                <Briefcase className="mr-3 text-primary" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-6">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                          <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded-full flex items-center">
                            <Clock size={14} className="mr-1" /> {item.period}
                          </span>
                        </div>
                        <p className="text-sm text-primary mb-3">{item.company}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="mr-3 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg">{item.degree}</h4>
                          <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded-full flex items-center">
                            <Clock size={14} className="mr-1" /> {item.period}
                          </span>
                        </div>
                        <p className="text-sm text-primary mb-3">{item.institution}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
