
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TeamMember from '@/components/TeamMember';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'Chief Executive Officer',
      bio: 'John has over 15 years of experience in technology leadership and business strategy.',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      linkedinUrl: 'https://linkedin.com',
      twitterUrl: 'https://twitter.com'
    },
    {
      name: 'Jane Smith',
      title: 'Chief Technology Officer',
      bio: 'With a background in software architecture, Jane leads our technical strategy and innovation initiatives.',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      linkedinUrl: 'https://linkedin.com',
      twitterUrl: 'https://twitter.com'
    },
    {
      name: 'David Wilson',
      title: 'Creative Director',
      bio: 'David brings over a decade of experience in UI/UX design and brand development.',
      imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      linkedinUrl: 'https://linkedin.com'
    },
    {
      name: 'Sarah Johnson',
      title: 'Head of Operations',
      bio: 'Sarah ensures our projects are delivered on time and exceed client expectations.',
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      linkedinUrl: 'https://linkedin.com',
      twitterUrl: 'https://twitter.com'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="About Acme Inc"
          subtitle="We're a team of passionate professionals dedicated to delivering exceptional technology solutions."
        />
        
        {/* Our Story Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2010, Acme Inc began with a simple mission: to help businesses leverage technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service digital agency with clients around the world.
                </p>
                <p className="text-muted-foreground">
                  Over the years, we've helped hundreds of companies transform their digital presence and build innovative solutions that drive growth and success. Our commitment to quality, innovation, and client satisfaction remains at the core of everything we do.
                </p>
              </div>
              <div className="bg-muted rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">
                These core principles guide our work and define our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Excellence',
                  description: 'We strive for excellence in everything we do, from code quality to client communication.'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new technologies and approaches to solve complex problems creatively.'
                },
                {
                  title: 'Integrity',
                  description: 'We maintain the highest standards of honesty, transparency, and ethical conduct.'
                },
                {
                  title: 'Collaboration',
                  description: 'We work closely with our clients, treating their challenges as our own.'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg">
                Our diverse team of experts is passionate about delivering exceptional results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                  imageUrl={member.imageUrl}
                  linkedinUrl={member.linkedinUrl}
                  twitterUrl={member.twitterUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
