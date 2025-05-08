
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Contact Us"
          subtitle="Get in touch with our team to discuss your project or inquire about our services."
        />
        
        {/* Contact Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <Mail className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:info@acmeinc.com" className="text-muted-foreground hover:text-primary transition-colors">
                            info@acmeinc.com
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <Phone className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <MapPin className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">
                            123 Business Avenue<br />
                            Suite 100<br />
                            San Francisco, CA 94107
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <Clock className="h-6 w-6 text-primary shrink-0" />
                        <div>
                          <p className="font-medium">Business Hours</p>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday & Sunday: Closed
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Office Location</h3>
                    <div className="rounded-lg overflow-hidden h-64 border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5952109711024!2d-122.4009092!3d37.7851576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858079035c4837%3A0x5f36a389ee121f96!2s123%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2suk!4v1650000000000!5m2!1sen!2suk"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section bg-primary/5">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "What is your typical project timeline?",
                  answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
                },
                {
                  question: "Do you offer ongoing maintenance and support?",
                  answer: "Yes, we offer various maintenance and support packages to ensure your website or application continues to run smoothly after launch. These can include regular updates, security monitoring, performance optimization, and technical support."
                },
                {
                  question: "How much does a typical project cost?",
                  answer: "Project costs depend on many factors including complexity, features, and timeline. We provide detailed quotes after understanding your specific requirements. We're transparent about costs and work within your budget constraints."
                },
                {
                  question: "What is your design and development process?",
                  answer: "We follow an agile methodology with key phases including discovery, planning, design, development, testing, and launch. Throughout the process, we maintain open communication and provide regular updates to ensure your vision is being realized."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
