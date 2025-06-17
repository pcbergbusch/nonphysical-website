
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll directly to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <button onClick={scrollToTop} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <img src="np_logo.png" alt="np" style={{ width: "auto", maxHeight: "50px" }} />
              </button>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-2">
              Custom digital experiences.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              © 2025 nonphysical. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Products</h4>
            <ul className="space-y-1 text-primary-foreground/70 text-sm">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-foreground transition-colors">Websites</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-foreground transition-colors">Web Apps & Games</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-foreground transition-colors">Audio Plugins & Samples</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-foreground transition-colors">Presentations</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-1 text-primary-foreground/70 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary-foreground transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary-foreground transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary-foreground transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-1 text-primary-foreground/70 text-sm">
              {/* <li><Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link></li> */}
              <li><Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
