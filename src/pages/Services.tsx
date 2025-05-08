
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Laptop, Smartphone, Palette, Users, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceDetails = [
    {
      id: 'web',
      name: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
      icon: <Laptop size={24} />,
      content: (
        <div className="space-y-6">
          <p className="text-lg">
            We build custom websites and web applications that are fast, secure, and user-friendly. Our web development services are tailored to your specific business needs and goals.
          </p>
          
          <h4 className="text-lg font-semibold mt-8 mb-4">What We Offer:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Custom Website Development',
              'E-Commerce Solutions',
              'Web Application Development',
              'Content Management Systems',
              'API Integration',
              'Performance Optimization',
              'Maintenance & Support',
              'SEO & Analytics'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold mt-8 mb-4">Technologies We Use:</h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'Vue.js', 'Node.js', 'PHP', 'Laravel', 'WordPress', 'Shopify'].map((tech, index) => (
              <div key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'mobile',
      name: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: <Smartphone size={24} />,
      content: (
        <div className="space-y-6">
          <p className="text-lg">
            We develop high-quality mobile applications for iOS and Android platforms, using the latest technologies to create seamless user experiences.
          </p>
          
          <h4 className="text-lg font-semibold mt-8 mb-4">What We Offer:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'iOS App Development',
              'Android App Development',
              'Cross-Platform Solutions',
              'UI/UX Design for Mobile',
              'App Testing & QA',
              'App Store Optimization',
              'App Maintenance & Updates',
              'Integration with Web Services'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold mt-8 mb-4">Technologies We Use:</h4>
          <div className="flex flex-wrap gap-2">
            {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify', 'GraphQL', 'REST APIs'].map((tech, index) => (
              <div key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'design',
      name: 'UI/UX Design',
      description: 'User-centered design that delivers intuitive, engaging experiences.',
      icon: <Palette size={24} />,
      content: (
        <div className="space-y-6">
          <p className="text-lg">
            Our design team creates beautiful, intuitive interfaces that engage users and drive conversions, with a focus on usability and accessibility.
          </p>
          
          <h4 className="text-lg font-semibold mt-8 mb-4">What We Offer:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'User Research',
              'Information Architecture',
              'Wireframing & Prototyping',
              'Visual Design',
              'Interaction Design',
              'Usability Testing',
              'Design Systems',
              'Accessibility Compliance'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold mt-8 mb-4">Tools We Use:</h4>
          <div className="flex flex-wrap gap-2">
            {['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Maze', 'UserTesting', 'Hotjar'].map((tech, index) => (
              <div key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'consulting',
      name: 'Consulting',
      description: 'Expert advice on technology strategy and digital transformation.',
      icon: <Users size={24} />,
      content: (
        <div className="space-y-6">
          <p className="text-lg">
            We provide strategic consulting services to help businesses navigate the complex technology landscape and make informed decisions about their digital initiatives.
          </p>
          
          <h4 className="text-lg font-semibold mt-8 mb-4">What We Offer:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Technology Strategy',
              'Digital Transformation',
              'Product Strategy & Roadmapping',
              'Technical Architecture',
              'Technology Assessment',
              'DevOps & Process Improvement',
              'Team Building & Training',
              'Technology Partner Selection'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold mt-8 mb-4">Our Approach:</h4>
          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="mr-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">1</div>
              <div>
                <h5 className="font-semibold">Discovery & Assessment</h5>
                <p className="text-muted-foreground">Understanding your business, goals, and current technology landscape.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">2</div>
              <div>
                <h5 className="font-semibold">Strategy Development</h5>
                <p className="text-muted-foreground">Creating a roadmap aligned with your business objectives.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">3</div>
              <div>
                <h5 className="font-semibold">Implementation Support</h5>
                <p className="text-muted-foreground">Guidance throughout the execution of the strategy.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">4</div>
              <div>
                <h5 className="font-semibold">Ongoing Optimization</h5>
                <p className="text-muted-foreground">Continuous improvement and adaptation to evolving needs.</p>
              </div>
            </li>
          </ol>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Our Services"
          subtitle="Comprehensive technology solutions tailored to your business needs."
        />
        
        {/* Services Overview */}
        <section className="section bg-white">
          <div className="container">
            <div className="mb-12">
              <h2 className="mb-4">What We Offer</h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                At Acme Inc, we provide a wide range of technology services designed to help businesses of all sizes achieve their goals. From custom development to strategic consulting, our team has the expertise to deliver solutions that drive results.
              </p>
            </div>
            
            <Tabs defaultValue="web" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {serviceDetails.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2">
                    <span className="hidden md:inline-flex">{service.icon}</span>
                    <span>{service.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {serviceDetails.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <div className="bg-white p-6 rounded-lg border">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold">{service.name}</h3>
                    </div>
                    {service.content}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Our Process</h2>
              <p className="text-muted-foreground text-lg">
                We follow a proven methodology to ensure your project is delivered successfully.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Discovery',
                  description: 'We start by understanding your business, goals, and requirements through in-depth consultations.'
                },
                {
                  step: 2,
                  title: 'Planning',
                  description: 'Our team develops a detailed project plan, including scope, timeline, and deliverables.'
                },
                {
                  step: 3,
                  title: 'Execution',
                  description: 'We build your solution using agile methodologies, with regular updates and feedback sessions.'
                },
                {
                  step: 4,
                  title: 'Delivery & Support',
                  description: 'After thorough testing, we launch your solution and provide ongoing support and maintenance.'
                }
              ].map((process, index) => (
                <div key={index} className="relative bg-white rounded-lg p-6 shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4 text-primary-foreground font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 h-0.5 w-6 bg-primary"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-primary">
          <div className="container text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="mb-4 text-white">Ready to Start Your Project?</h2>
              <p className="text-white/80 text-lg mb-8">
                Contact us today to discuss how we can help you achieve your business goals.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
