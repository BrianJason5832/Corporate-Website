
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaLink = "/contact",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage
}) => {
  return (
    <div 
      className={`relative overflow-hidden bg-cover bg-center bg-no-repeat ${backgroundImage ? '' : 'bg-primary/5'}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Optional Overlay for Background Images */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40"></div>}
      
      <div className="container py-20 md:py-32 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`mb-6 ${backgroundImage ? 'text-white' : 'text-foreground'}`}>{title}</h1>
          <p className={`text-xl md:text-2xl mb-8 ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'}`}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link to={ctaLink}>{ctaText} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Button size="lg" variant="outline" asChild className={backgroundImage ? 'bg-white/10 text-white hover:bg-white/20' : ''}>
                <Link to={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
