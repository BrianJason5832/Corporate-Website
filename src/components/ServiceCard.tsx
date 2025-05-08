
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-4 p-2 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          We provide comprehensive {title.toLowerCase()} services tailored to your specific needs and goals.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="p-0 hover:bg-transparent hover:text-primary">
          <Link to={link} className="flex items-center">
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
