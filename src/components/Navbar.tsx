
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">Acme Inc</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</Link>
          <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">About</Link>
          <Link to="/services" className="text-foreground/70 hover:text-foreground transition-colors">Services</Link>
          <Link to="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link>
          <Button asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b animate-fade-in">
          <nav className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="px-4 py-2 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="px-4 py-2 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-secondary rounded-md" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
