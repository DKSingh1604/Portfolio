
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0,_rgba(0,0,0,0)_100%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-medium text-sm md:text-base text-muted-foreground tracking-wider uppercase mb-3 px-4 py-1 rounded-full border border-border backdrop-blur-sm">
            Software Developer & Designer
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-primary">Dev Karan Singh</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I craft beautiful, functional websites and applications with a focus on user experience and clean code.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button className="rounded-full px-8 py-6" size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6" size="lg" asChild>
            <a href="#projects">View my work</a>
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground flex flex-col items-center">
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
