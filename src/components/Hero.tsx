import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [showFullName, setShowFullName] =
    useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Show full name after a delay
    const timer = setTimeout(() => {
      setShowFullName(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  //Overall Text animation
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
      scale: 0.8,
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

  const introTextAnimation = {
    initial: { x: 0 },
    animate: {
      x: showFullName ? -10 : 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const fullName = "Dev Karan Singh";
  const initials = "D K Singh";

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 py-20 bg-background">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background to-secondary/50"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-medium text-sm md:text-base text-muted-foreground tracking-wider uppercase mb-3 px-4 py-1 rounded-md border border-border bg-card">
            Mobile And Web Application Developer
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block"
            variants={introTextAnimation}
            initial="initial"
            animate="animate"
          >
            Hi, I'm {"  "}
          </motion.span>
          <motion.span
            className="inline-block"
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
          >
            {showFullName
              ? // Full name with animation for each letter
                fullName
                  .split("")
                  .map((letter, index) => (
                    <motion.span
                      key={`full-${index}`}
                      className={
                        letter === " "
                          ? "inline-block mr-2"
                          : "inline-block text-primary font-bold"
                      }
                      variants={letterAnimation}
                    >
                      {letter}
                    </motion.span>
                  ))
              : // Just the initials with animation
                initials
                  .split("")
                  .map((letter, index) => (
                    <motion.span
                      key={`initial-${index}`}
                      className="inline-block text-primary font-bold"
                      variants={letterAnimation}
                    >
                      {letter}
                    </motion.span>
                  ))}
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium bg-card px-6 py-4 rounded-md border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          Widgets stacked, UI packed, my Flutter
          apps are never whacked!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            className="px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md font-medium"
            size="lg"
            asChild
          >
            <a href="#contact">Get in touch</a>
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 border-border hover:bg-secondary transition-all duration-300 font-medium"
            size="lg"
            asChild
          >
            <a href="#projects">View my work</a>
          </Button>
        </motion.div>
      </div>

      <div
        className={`absolute bottom-8 ${
          isMobile
            ? "left-1/2 transform -translate-x-1/2 text-center"
            : "left-1/2 transform -translate-x-1/2"
        } animate-bounce`}
      >
        <a
          href="#about"
          className="text-muted-foreground hover:text-primary flex flex-col items-center transition-colors"
        >
          <span className="text-sm mb-2">
            Scroll down
          </span>
          <ArrowDown
            size={18}
            className="text-primary"
          />
        </a>
      </div>
    </section>
  );
}
