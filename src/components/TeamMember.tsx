
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  imageUrl,
  twitterUrl,
  linkedinUrl
}) => {
  const initials = name.split(' ').map(part => part[0]).join('').toUpperCase();
  
  return (
    <Card className="h-full transition-all hover:shadow-md overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-muted">
          <Avatar className="h-full w-full rounded-none">
            <AvatarImage src={imageUrl} alt={name} className="object-cover" />
            <AvatarFallback className="text-4xl rounded-none">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <CardTitle className="text-xl mb-1">{name}</CardTitle>
        <CardDescription className="mb-4">{title}</CardDescription>
        <p className="text-muted-foreground text-sm mb-4">{bio}</p>
        
        <div className="flex gap-2">
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={16} />
            </a>
          )}
          {twitterUrl && (
            <a 
              href={twitterUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter size={16} />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
