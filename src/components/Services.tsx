
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Website Creation",
      description: "Custom websites that combine stunning design with optimal performance. From landing pages to complex corporate sites, we build responsive, SEO-optimized websites that convert visitors into customers.",
      color: "bg-blue-500",
      accentColor: "bg-blue-100",
      examples: [
        {
          title: "Website for a software consultancy",
          description: "Landing page built with lovable.dev, React.js and Tailwind CSS",
          url: "https://nonphysical.io",
          clicks: 15
        }
      ]
    },
    {
      title: "Web Applications & Games",
      description: "Complete web applications with robust backends, intuitive frontends, and seamless user experiences. We handle everything from database design to deployment and scaling.",
      color: "bg-green-500",
      accentColor: "bg-green-100",
      examples: [
        {
          title: "Audio plugin creation tool",
          description: "Web app that uses claude.ai to generate a VST file based on a description",
          url: "https://vst.nonphysical.io",
          clicks: 0
        },
        {
          title: "Weee",
          description: "Multi-player battle race game in Roblox",
          url: "https://www.roblox.com",
          clicks: 1
        }
      ]
    },
    {
      title: "Audio Plugins & Samples",
      description: "Professional-grade audio plugins and samples for music production, podcasting, and sound design. Our plugins are compatible with major DAWs and designed for both beginners and professionals.",
      color: "bg-purple-500",
      accentColor: "bg-purple-100",
      examples: [
        {
          title: "Audio plugin with delay and chorus effects",
          description: "VST3 file for Windows x64",
          url: "SecondPlugin.vst3",
          clicks: 24
        }
      ]
    },
    {
      title: "Presentations",
      description: "Professional PowerPoint presentation designs that captivate audiences and communicate your message effectively. Custom animations, transitions, and visual storytelling.",
      color: "bg-orange-500",
      accentColor: "bg-orange-100",
      examples: [
        {
          title: "Biography: Zefanja",
          description: "PowerPoint slides with custom transitions",
          url: "Zefanja.pptx",
          clicks: 9
        },
        {
          title: "Economics lesson: German trade balance",
          description: "PowerPoint slides with custom transitions",
          url: "German Trade Balance.pptx",
          clicks: 1
        },
        {
          title: "Biology lesson: Golgi Apparatus",
          description: "PowerPoint slides with custom transitions",
          url: "Golgi Apparatus.pptx",
          clicks: 1
        }
      ]
    }
  ];

  return (
    <section id="services" className="relative min-h-screen overflow-hidden">
      {/* Smooth gradient transition from Hero section */}
      <div
        className="mx-auto px-6 py-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, background)'
        }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Our nonphysical solutions</h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer nonphyiscal solutions across multiple creative and technical domains
          </p> */}
        </div>
        
        <div className="space-y-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              examples={service.examples}
              color={service.color}
              accentColor={service.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
