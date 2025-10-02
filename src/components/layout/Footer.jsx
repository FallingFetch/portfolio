import { ChevronUp } from 'lucide-react';
import ItchIoIcon from '../ItchIoIcon';
import { socialLinks } from '../../data/socialLinksData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer-lightning py-6 sm:py-8 relative" role="contentinfo">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-sidebar"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-end">
          
          {/* Left Section - Branding & Social */}
          <div className="text-center lg:text-left">
            <p className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold mb-2 text-foreground">
              Fetch's Portfolio
            </p>
            <p className="text-base sm:text-lg md:text-lg mb-4 text-muted-foreground">
              Multi-disciplinary designer & developer
            </p>
            
            {/* Social Links */}
            <nav aria-label="Social media links">
              <ul className="flex justify-center lg:justify-start items-center gap-3">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-lightning p-2 transition-all duration-200 hover:scale-110"
                      aria-label={`Visit ${social.name} profile`}
                      title={social.name}
                    >
                      {social.name === 'Itch.io' ? (
                        <ItchIoIcon className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <social.icon size={20} aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Center Section - Copyright */}
          <div className="text-center order-3 lg:order-2">
            <p className="text-sm sm:text-base text-muted-foreground">
              © 2025 Fetch's Portfolio. All rights reserved.
            </p>
          </div>

          {/* Right Section - Back to Top */}
          <div className="text-center lg:text-right order-2 lg:order-3 lg:flex lg:justify-end">
            <button
              onClick={scrollToTop}
              className="text-lg lg:text-xl cursor-pointer hover:opacity-80 transition-opacity duration-200 inline-flex items-center gap-2 text-foreground bg-transparent border-none"
              aria-label="Return to top of page"
            >
              Back to Top
              <ChevronUp className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;