
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [showFullName, setShowFullName] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Show full name after a delay
    const timer = setTimeout(() => {
      setShowFullName(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Text animation variants
  const nameAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letterAnimation = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const fullName = "Dev Karan Singh";
  const initials = "DKS";
  
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02)_0,_rgba(0,0,0,0)_100%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-medium text-sm md:text-base text-muted-foreground tracking-wider uppercase mb-3 px-4 py-1 rounded-full border border-border backdrop-blur-sm bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20">
            Application Developer & Designer
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="inline-block"
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
          >
            {showFullName ? (
              // Full name with animation for each letter
              fullName.split("").map((letter, index) => (
                <motion.span
                  key={`full-${index}`}
                  className={letter === " " ? "inline-block mr-2" : "inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"}
                  variants={letterAnimation}
                >
                  {letter}
                </motion.span>
              ))
            ) : (
              // Just the initials with animation
              initials.split("").map((letter, index) => (
                <motion.span
                  key={`initial-${index}`}
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  variants={letterAnimation}
                >
                  {letter}
                </motion.span>
              ))
            )}
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I craft beautiful, functional and minimalistic cross-platform mobile applications with a focus on user experience and clean code.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg" size="lg" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 border-2 border-purple-300 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300" size="lg" asChild>
            <a href="#projects">View my work</a>
          </Button>
        </motion.div>
      </div>
      
      <div className={`absolute bottom-8 ${isMobile ? 'left-1/2 transform -translate-x-1/2 text-center' : 'left-1/2 transform -translate-x-1/2'} animate-bounce`}>
        <a href="#about" className="text-muted-foreground flex flex-col items-center">
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={18} className="text-purple-500" />
        </a>
      </div>
    </section>
  );
}
