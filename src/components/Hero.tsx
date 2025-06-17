
import React from 'react';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-greenCustom to-blueCustom"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">Custom digital experiences</h1>
          {/* <p className="text-xl md:text-2xl text-primary-foreground mb-8 animate-fade-in">
            We are a team of engineers and creatives,
            <br></br>
            fascinated by the physics and psychology of digital media,
            <br></br>
            specializing in apps, games, and audio that use multi-agent AI.
          </p> */}
          {/* <div className="text-xl md:text-2xl text-white/90 mb-8"> */}
          <div 
            className="text-xl md:text-2xl text-white/90 mb-8 overflow-hidden"
            style={{ height: "120px", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <TypewriterText 
              text="We are a team of engineers and creatives,"
              speed={50}
              delay={2000}
              className="block mb-2"
            />
            <TypewriterText 
              text="fascinated by the physics and psychology of digital media,"
              speed={50}
              delay={4800}
              className="block mb-2"
            />
            <TypewriterText 
              text="using multi-agent AI to build apps, games, and audio."
              speed={50}
              delay={8400}
              className="block"
            />
          </div>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors animate-scale-in"
          >
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
