import { useState } from 'react';
import { roleCards } from '../../data/roleCards.js';
import SocialLinks from '../ui/SocialLinks.jsx';

const AboutSection = () => {
  {/* Hover State for Role Cards */}
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="about" className="py-16 sm:py-20 relative bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Text Content */}
          <div className="text-left space-y-6 lg:space-y-8 col-span-1">
            {/* Section Header */}
            <div className="space-y-6">
              <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground">
                About <span className="text-foreground">Me</span>
              </h2>
            </div>

            {/* Bold Intro */}
            <div>
              <p className="text-base sm:text-lg md:text-lg font-semibold text-foreground">
                I'm a designer who transforms complex challenges into stunning, functional experiences that push creative boundaries and solve real problems.
              </p>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-6 lg:space-y-8 leading-relaxed text-accent">
              <p>
                I'm Fetch Cater, a multi-disciplinary designer specialising in user-centred design, interactive experiences, and visual storytelling. With expertise spanning digital illustration, game development, motion graphics, and web development, I approach every project through strategic thinking and creative problem-solving that actually works.
              </p>

              <p>
                Whether I'm designing intuitive interfaces, developing engaging games, or building responsive websites, I focus on creating experiences that genuinely connect with audiences. I believe the best design happens when creativity meets functionality, backed by solid research and plenty of iteration.
              </p>

              <p>
                From initial sketches to final delivery, I bring both creative flair and technical precision to every project. My approach emphasises collaboration, attention to detail, and continuous learning, ensuring each solution not only meets current needs but anticipates what's coming next.
              </p>

              <p>
                Ready to see what we can create together? Explore my work below and let's chat about bringing your next project to life!
              </p>
            </div>

            {/* Social Links - Desktop */}
            <div className="flex items-start justify-start gap-4">
              <SocialLinks variant="large" className="justify-start" />
            </div>
          </div>

          {/* Role Cards - Desktop */}
          <div className="space-y-6 lg:space-y-8 col-span-2">
            {roleCards.map((item, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-2xl opacity-30 pointer-events-none z-0"></div>
                
                <div 
                  className="relative rounded-portfolio p-4 lg:p-6 pr-0 sm:pr-0 transition-all duration-300 group flex items-stretch gap-6 z-10 overflow-hidden bg-gradient-to-b from-card to-background border-2 border-portfolio opacity-100"
                >
                  {/* Animation Overlay */}
                  <div 
                    className={`absolute inset-0 z-20 rounded-portfolio overflow-hidden transition-all duration-700 ease-out ${
                      hoveredCard === index ? 'about-overlay-gradient' : ''
                    }`}
                  >
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                        hoveredCard === index ? 'about-content-gradient' : ''
                      }`}
                      style={{
                        transform: hoveredCard === index ? 'translateX(0%)' : 'translateX(100%)',
                        opacity: hoveredCard === index ? 1 : 0
                      }}
                    >
                      {/* Animated Placeholder */}
                      <div className="text-center space-y-3 px-6">
                        <div 
                          className="w-24 h-24 mx-auto rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center lottie-placeholder-circle"
                        >
                          <div className="text-center">
                            <p className="text-xs font-medium text-foreground">
                              Lottie
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Animation
                            </p>
                          </div>
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          {item.role} Animation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Left Content */}
                  <div 
                    className="flex-1 space-y-2 flex flex-col justify-center transition-all duration-500 ease-out z-10"
                    style={{
                      opacity: hoveredCard === index ? 0 : 1,
                      transform: hoveredCard === index ? 'translateX(-10px)' : 'translateX(0)'
                    }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-accent">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Right Animation Space - Hidden on Mobile */}
                  <div 
                    className={`hidden sm:block w-1/3 flex-shrink-0 rounded-r-2xl overflow-hidden flex items-center justify-center -my-6 -mr-6 transition-all duration-500 ease-out z-10 ${
                      hoveredCard === index 
                        ? 'bg-transparent border-none opacity-30' 
                        : 'bg-transparent border-none opacity-100'
                    }`}
                  >
                    <div 
                      className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === index ? 'lottie-placeholder-bg-hover' : 'about-placeholder-default'
                      }`}
                    >
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          Lottie Animation
                        </p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Placeholder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block lg:hidden space-y-6 lg:space-y-8">
          {/* Text Content - Mobile */}
          <div className="text-center space-y-6 lg:space-y-8">
            {/* Section Header */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground">
                About <span className="text-foreground">Me</span>
              </h2>
            </div>

            {/* Bold Intro */}
            <div>
              <p className="text-base sm:text-lg font-semibold text-foreground">
                I'm a designer who transforms complex challenges into stunning, functional experiences that push creative boundaries and solve real problems.
              </p>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-6 lg:space-y-8 leading-relaxed text-accent">
              <p>
                I'm Fetch Cater, a multi-disciplinary designer specialising in user-centred design, interactive experiences, and visual storytelling. With expertise spanning digital illustration, game development, motion graphics, and web development, I approach every project through strategic thinking and creative problem-solving that actually works.
              </p>

              <p>
                Whether I'm designing intuitive interfaces, developing engaging games, or building responsive websites, I focus on creating experiences that genuinely connect with audiences. I believe the best design happens when creativity meets functionality, backed by solid research and plenty of iteration.
              </p>

              <p>
                From initial sketches to final delivery, I bring both creative flair and technical precision to every project. My approach emphasises collaboration, attention to detail, and continuous learning, ensuring each solution not only meets current needs but anticipates what's coming next.
              </p>

              <p>
                Ready to see what we can create together? Explore my work below and let's chat about bringing your next project to life!
              </p>
            </div>
          </div>

          {/* Role Cards - Mobile */}
          <div className="space-y-6 lg:space-y-8">
            {roleCards.map((item, index) => (
              <div 
                key={index} 
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-primary rounded-2xl blur-2xl opacity-30 pointer-events-none z-0"></div>
                
                <div 
                  className="relative rounded-portfolio p-4 sm:p-6 pr-4 sm:pr-0 transition-all duration-300 group flex items-stretch gap-4 sm:gap-6 z-10 overflow-hidden bg-gradient-to-b from-card to-background border-2 border-portfolio opacity-100"
                >
                  {/* Animation Overlay - Mobile */}
                  <div 
                    className={`absolute inset-0 z-20 rounded-portfolio overflow-hidden transition-all duration-700 ease-out ${
                      hoveredCard === index ? 'about-overlay-gradient' : ''
                    }`}
                  >
                    <div 
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                        hoveredCard === index ? 'about-content-gradient' : ''
                      }`}
                      style={{
                        transform: hoveredCard === index ? 'translateX(0%)' : 'translateX(100%)',
                        opacity: hoveredCard === index ? 1 : 0
                      }}
                    >
                      <div className="text-center space-y-2 px-4">
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full border-2 border-dashed border-muted-foreground bg-popover/50 flex items-center justify-center"
                        >
                          <div className="text-center">
                            <p className="text-xs font-medium text-foreground">
                              Lottie
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Anim
                            </p>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-foreground">
                          {item.role} Animation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Left Content - Mobile */}
                  <div 
                    className="flex-1 space-y-2 flex flex-col justify-center transition-all duration-500 ease-out z-10"
                    style={{
                      opacity: hoveredCard === index ? 0 : 1,
                      transform: hoveredCard === index ? 'translateX(-10px)' : 'translateX(0)'
                    }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-accent">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Right Animation Space - Mobile - Hidden Below SM */}
                  <div 
                    className={`hidden sm:block w-1/3 flex-shrink-0 rounded-r-2xl overflow-hidden flex items-center justify-center -my-4 sm:-my-6 -mr-4 sm:-mr-6 transition-all duration-500 ease-out z-10 ${
                      hoveredCard === index 
                        ? 'bg-transparent border-none opacity-30' 
                        : 'bg-transparent border-none opacity-100'
                    }`}
                  >
                    <div 
                      className={`w-full h-full flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === index ? 'lottie-placeholder-bg-hover' : 'about-placeholder-default'
                      }`}
                    >
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          Lottie Animation
                        </p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Placeholder
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Social Links - Mobile */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <SocialLinks variant="large" className="justify-start" />          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;