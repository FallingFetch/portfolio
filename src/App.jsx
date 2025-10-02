import React from 'react';
import Navigation from './components/layout/Navigation.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/sections/LandingSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import ServicesSection from './components/sections/ServicesSection.jsx';
import CreativePortfolioSection from './components/sections/FeaturedPortfolioSection.jsx';
import ClientExperienceSection from './components/sections/ClientExperienceSection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import { ToastProvider } from './ToastContext.jsx';

function App() {
  {/* Set Dark Mode as Default */}
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <div className="min-h-screen dark">
        {/* Skip to Main Content Link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-foreground text-background px-4 py-2 rounded-lg font-medium focus:ring-2 focus:ring-accent focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Site Header */}
        <header role="banner">
          <Navigation />
        </header>

        {/* Main Content */}
        <main id="main-content" role="main">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading">
            <HeroSection />
          </section>

          {/* About Section */}
          <section id="about" aria-labelledby="about-heading">
            <AboutSection />
          </section>
          
          {/* Skills Section */}
          <section id="skills" aria-labelledby="skills-heading">
            <SkillsSection />
          </section>
          
          {/* Services Section */}
          <section id="services" aria-labelledby="services-heading">
            <ServicesSection />
          </section>
          
          {/* Portfolio Section */}
          <section id="portfolio" aria-labelledby="portfolio-heading">
            <CreativePortfolioSection />
          </section>
          
          {/* Client Experience Section */}
          <section id="experience" aria-labelledby="experience-heading">
            <ClientExperienceSection />
          </section>
          
          {/* Contact Section */}
          <section id="contact" aria-labelledby="contact-heading">
            <ContactSection />
          </section>
        </main>

        {/* Site Footer */}
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;