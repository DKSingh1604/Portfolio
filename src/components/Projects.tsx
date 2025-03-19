
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with dynamic product filtering, cart management, and secure checkout flow.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Design System",
    description: "A comprehensive design system for portfolio websites with customizable components and themes.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    tags: ["Figma", "React", "Storybook", "TailwindCSS"],
    category: "design",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["React", "Firebase", "Redux", "TailwindCSS"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Travel Blog Platform",
    description: "A content management system for travel bloggers with rich text editing and media management.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Health & Fitness Dashboard",
    description: "An interactive dashboard for tracking fitness goals, nutrition, and health metrics with data visualization.",
    image: "https://images.unsplash.com/photo-1445384763658-0400939829cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["Vue.js", "D3.js", "TailwindCSS", "Express"],
    category: "frontend",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Brand Identity System",
    description: "A complete brand identity package including logo design, color system, typography, and usage guidelines.",
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["Branding", "Illustrator", "Photoshop", "Design Systems"],
    category: "design",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-3"
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Featured Projects
          </motion.h2>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-background/50 backdrop-blur-sm">
              <TabsTrigger value="all" onClick={() => setActiveFilter("all")}>All</TabsTrigger>
              <TabsTrigger value="frontend" onClick={() => setActiveFilter("frontend")}>Frontend</TabsTrigger>
              <TabsTrigger value="fullstack" onClick={() => setActiveFilter("fullstack")}>Full Stack</TabsTrigger>
              <TabsTrigger value="design" onClick={() => setActiveFilter("design")}>Design</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="frontend" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="fullstack" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="project-card"
    >
      <Card className="overflow-hidden h-full flex flex-col border border-border/40 bg-card/70 backdrop-blur-sm">
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-2">
              {project.liveUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" /> Live
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="sm" variant="secondary" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="font-normal text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={project.liveUrl || project.githubUrl || "#"}>
              <Code className="mr-2 h-4 w-4" /> View Details
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
