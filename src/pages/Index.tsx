
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Laptop, Smartphone, Palette, Users } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
      icon: <Laptop size={24} />,
      link: '/services'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone size={24} />,
      link: '/services'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that delivers intuitive, engaging experiences.',
      icon: <Palette size={24} />,
      link: '/services'
    },
    {
      title: 'Consulting',
      description: 'Expert advice on technology strategy and digital transformation.',
      icon: <Users size={24} />,
      link: '/services'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Innovative Solutions for Forward-Thinking Businesses"
          subtitle="We help companies leverage technology to achieve their business goals and stay ahead of the competition."
          ctaText="Get Started"
          ctaLink="/contact"
          secondaryCtaText="Learn More"
          secondaryCtaLink="/about"
        />
        
        {/* Services Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg">
                We provide end-to-end solutions to help your business thrive in the digital world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About/CTA Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-4">Why Choose Acme Inc?</h2>
                <p className="text-muted-foreground mb-6">
                  For over a decade, we've been at the forefront of digital innovation, creating technology solutions that drive business growth and success.
                </p>
                <ul className="space-y-4">
                  {[
                    'Experienced team of developers, designers and strategists',
                    'Proven track record of successful project delivery',
                    'Commitment to quality and client satisfaction',
                    'Innovative solutions tailored to your specific needs'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/about">About Our Company</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <Card className="border-none shadow-lg">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
                    <p className="text-muted-foreground mb-4">
                      Contact us today for a free consultation and let's discuss how we can help your business succeed.
                    </p>
                    <Button asChild size="lg" className="w-full">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Working with Acme Inc has been a game-changer for our business. Their team delivered a solution that exceeded our expectations.",
                  author: "Jane Smith",
                  position: "CEO, TechStart Inc"
                },
                {
                  quote: "The team's expertise and dedication to quality made all the difference in our project's success. Highly recommended!",
                  author: "Michael Johnson",
                  position: "CTO, GrowthLabs"
                },
                {
                  quote: "From concept to completion, Acme Inc delivered exactly what we needed, on time and within budget. We couldn't be happier.",
                  author: "Sarah Williams",
                  position: "Marketing Director, FutureScale"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="text-center h-full">
                  <div className="p-6">
                    <div className="mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                    <p className="italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
