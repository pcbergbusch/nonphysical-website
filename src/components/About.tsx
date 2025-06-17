
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const About = () => {
  const teamMembers = [
    {
      name: "Paul",
      role: "Managing Director",
      responsibilities: ["Project Management", "Requirements Engineering", "Software & System Architecture", "Front- and Backend Development", "Plugin Development"],
      techSkills: ["Node.js", "React.js", "Next.js", "TypeScript", "FastAPI", "Flask", "Python", "C++", "JUCE", "FLStudio", "Azure", "AWS", "GCP", "ElasticSearch", "SQL", "AI"],
      initials: "PB",
      image: "Paul.jfif"
    },
    {
      name: "Rita",
      role: "Marketing Director",
      responsibilities: ["Sales", "Marketing", "Communication", "Content Generation"],
      techSkills: ["Canva", "CapCut", "Audacity"],
      initials: "RR",
      image: "Rita.jfif"
    },
    {
      name: "Chris",
      role: "Software Engineer",
      responsibilities: ["Frontend Development", "Game Development", "Visual Design"],
      techSkills: ["Lua", "JavaScript", "FLStudio", "PowerPoint"],
      initials: "CB",
      image: "Chris.jfif"
    },
    {
      name: "Matt",
      role: "Quality Assurance Engineer",
      responsibilities: ["Frontend Development", "Game Development", "Software Testing"],
      techSkills: ["Lua", "JavaScript", "Blender"],
      initials: "MB",
      image: "Matt.jfif"
    }
  ];

  return (
    <section id="about" className="relative py-20 min-h-screen overflow-hidden">
      {/* Smooth gradient transition from Hero section */}
      <div 
        className="absolute top-0 left-0 w-full h-64 z-5 bg-gradient-to-b from-blueCustom to-transparent"
      />
      {/* TypeScript Code Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-0"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-80"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
      </video>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">About nonphysical</h2>
              <p className="text-lg text-primary-foreground leading-relaxed max-w-3xl mx-auto">
                nonphysical is a creative technology company focussed on software solutions that touch the soul.
                We specialize in crafting digital experiences that resonate with users and drive results.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Our Team</h3>
              {/* <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From concept to deployment, we're committed to turning your ideas into exceptional digital products.
              </p> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6">
                    <div className="flex flex-col items-center mb-4">
                      <Avatar className="w-20 h-20 mb-3">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="text-xl font-semibold text-foreground text-center">{member.name}</h4>
                      <p className="text-primary font-medium text-center">{member.role}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground text-left mb-2">Key Responsibilities:</h5>
                      <div className="flex flex-wrap gap-1">
                        {member.responsibilities.map((responsibility, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {responsibility}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-foreground text-left mb-2">Tech Skills:</h5>
                      <div className="flex flex-wrap gap-1">
                        {member.techSkills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
