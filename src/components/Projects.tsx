
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
    title: "Minimal Chat Application",
    description: "A minimalistic chatting platform with minimal chat features.",
    image: "/panchayat_ss.png",
    tags: ["Flutter", "Dart", "Firbase", "State Management - Provider", "Figma"],
    category: "fullstack",
    // liveUrl: "#",
    githubUrl: "https://github.com/DKSingh1604/Panchayat/",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description: "A minimalistic food delivery app showcasing multiple food items and categories.",
    image: "/food_delivery.jpg",
    tags: ["Figma", "Flutter", "Dart", "Firebase", "Provider"],
    category: "fullstack",
    // liveUrl: "#",
    githubUrl: "https://github.com/DKSingh1604/food_delivery",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    tags: ["Flutter", "Supabase", "State Management - BLoC", "Figma"],
    category: "frontend",
    // liveUrl: "#",
    githubUrl: "https://github.com/DKSingh1604/todo_using_bloc",
  },
  {
    id: 4,
    title: "E-Commerce App",
    description: "A content management system for travel bloggers with rich text editing and media management.",
    image: "/e_commerce.jpg",
    tags: ["Flutter", "Dart", "Figma", "State Managment - BLoC"],
    category: "frontend",
    // liveUrl: "#",
    githubUrl: "https://github.com/DKSingh1604/ecom_bloc",
  },
  {
    id: 5,
    title: "Assingment UI Dashboard",
    description: "An interactive dashboard showcasing data visualization and analytics for a fictional company.",
    image: "/ui_image.png",
    tags: ["Flutter", "Dart", "Libraries - chart_flutter", "Figma"],
    category: "design",
    // liveUrl: "#",
    githubUrl: "https://github.com/DKSingh1604/assignment",
  },
  {
    id: 6,
    title: "Aesthetic Music Player",
    description: "A minimalistic music player with a focus on aesthetics and user experience.",
    image: "/music_player.jpg",
    tags: ["Flutter", "Dart", "State Management - Provider", "Figma"],
    category: "frontend",
    // liveUrl: "#",
    githubUrl: "https://github.com/DKSingh1604/music_player",
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
