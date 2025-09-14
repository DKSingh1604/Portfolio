import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ href, label, isMobile, onClick, target, rel }: { href: string; label: string; isMobile?: boolean; onClick?: () => void; target?: string; rel?: string }) => (
  <li>
    <a 
      href={href} 
      className={cn(
        "nav-link text-lg transition-colors duration-200",
        isMobile ? "block py-3 text-xl" : "inline-block"
      )}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {label}
    </a>
  </li>
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-medium relative"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <AnimatePresence initial={false} mode="wait">
            {isLogoHovered ? (
              <motion.span 
                key="full-name"
                className="text-primary font-bold"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                Dev Karan
              </motion.span>
            ) : (
              <motion.span 
                key="initials"
                className="text-primary font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                DK
              </motion.span>
            )}
          </AnimatePresence>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-8 mr-4">
            <NavItem href="#about" label="About" />
            <NavItem href="#projects" label="Projects" />
            <NavItem href="#skills" label="Skills" />
            <NavItem href="#contact" label="Contact" />
            <NavItem href="https://drive.google.com/drive/folders/1LKEtAo_uQc6P3Agyacoy6uzNplzpF-9g?usp=drive_link" label="My Resume" target="_blank" rel="noopener noreferrer" />
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="text-foreground p-1 rounded-md hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 md:hidden",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="space-y-6 text-center">
            <NavItem href="#about" label="About" isMobile onClick={closeMobileMenu} />
            <NavItem href="#projects" label="Projects" isMobile onClick={closeMobileMenu} />
            <NavItem href="#skills" label="Skills" isMobile onClick={closeMobileMenu} />
            <NavItem href="#contact" label="Contact" isMobile onClick={closeMobileMenu} />
            <NavItem href="/DevKaran_Resume.pdf" label="My Resume" isMobile onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer" />
            
          </ul>
        </div>
      </div>
    </header>
  );
}
