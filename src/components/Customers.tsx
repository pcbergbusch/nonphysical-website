import React, { useRef, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Customers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      name: "Elena Vasquez",
      company: "Creative Agency",
      role: "Creative Director",
      content: "Our new website not only looks amazing but performs exceptionally well. The team understood our brand perfectly and delivered beyond expectations.",
      rating: 5,
      project: "Website Creation"
    },
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "CEO",
      content: "nonphysical transformed our vision into a stunning web application. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
      project: "Full-Stack Web Application"
    },
    {
      name: "Marcus Rodriguez",
      company: "Sound Studios",
      role: "Audio Engineer",
      content: "The audio plugin they developed for us has become an essential part of our production workflow. Professional quality and intuitive design.",
      rating: 5,
      project: "Audio Plugin Development"
    },
    {
      name: "Lisa Thompson",
      company: "Corporate Solutions",
      role: "Marketing Manager",
      content: "The presentation design they created helped us win a major client. Professional, visually striking, and perfectly aligned with our message.",
      rating: 5,
      project: "Presentation Design"
    },
    {
      name: "David Park",
      company: "Startup Labs",
      role: "Product Manager",
      content: "The web application they built exceeded all our expectations. Clean code, beautiful design, and excellent performance.",
      rating: 5,
      project: "SaaS Platform"
    },
    {
      name: "Maria Garcia",
      company: "Music Label",
      role: "A&R Director",
      content: "Their audio samples have become staples in our artist productions. Quality and creativity in every pack they deliver.",
      rating: 5,
      project: "Sample Pack Creation"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with amazing clients who trust us to bring their digital visions to life
          </p>
        </div>
        
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border shadow-md ${
              canScrollLeft 
                ? 'hover:bg-accent cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background border border-border shadow-md ${
              canScrollRight 
                ? 'hover:bg-accent cursor-pointer' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            onScroll={updateScrollButtons}
            className="overflow-x-auto pb-4 scrollbar-hide mx-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 w-max">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 w-80 flex-shrink-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      <div className="text-xs text-primary mt-1 font-medium">{testimonial.project}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join our satisfied customers?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customers;
