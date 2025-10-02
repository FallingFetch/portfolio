import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  {/* Scroll Detection */}
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  {/* Click Outside Handler */}
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  {/* Scroll to Section Helper */}
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = Math.max(0, element.offsetTop - navbarHeight);
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  {/* Navigation Items */}
  const navItems = [
    { label: "About Me", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Featured Projects", id: "portfolio" },
    { label: "Client Experience", id: "experience" },
    { label: "Get In Touch", id: "contact" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto relative">
        {/* Desktop Navigation */}
        <div className="hidden lg:block navbar-lightning px-6 py-4 rounded-portfolio">
          <div className="flex items-center justify-between h-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg font-semibold text-foreground px-4 py-2 rounded-lg hover-bg-white-10 transition-colors"
            >
              Fetch's Portfolio
            </button>
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 rounded-lg text-foreground hover-bg-white-10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex justify-end">
          <div
            className="mobile-menu-container navbar-lightning px-4 py-4 ml-auto overflow-hidden"
            style={{ 
              borderRadius: isMobileMenuOpen ? '16px 16px 0 0' : '16px',
              borderBottom: isMobileMenuOpen ? '0' : '1px solid rgb(22, 23, 39)',
            }}
          >

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-none text-foreground hover-bg-white-10 transition-colors w-full"
                aria-label="Toggle navigation menu"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div
            className="absolute w-56 sm:w-60 navbar-lightning px-6 py-4 lg:hidden right-0 top-20"
            style={{
              borderRadius: '16px 0px 16px 16px',
              border: '1px solid rgb(22, 23, 39)',
              zIndex: 60,
            }}
          >
            <div className="space-y-1">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left text-sm rounded-xl block font-semibold px-3 py-2 text-foreground hover-bg-white-10 transition-colors"
                style={{
                  borderBottom: '1px solid rgba(22, 23, 39, 0.3)',
                  paddingBottom: '8px',
                  marginBottom: '8px',
                }}
              >
                Fetch's Portfolio
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left text-sm rounded-xl block px-3 py-2 text-foreground hover-bg-white-10 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;