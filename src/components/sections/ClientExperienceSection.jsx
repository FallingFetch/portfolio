import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { getTagColor, colorToRgba } from '../../utils/tagColours.js';
import { clientExperiences } from '../../data/clientExperiences.js';
import { useToast } from '../../ToastContext.jsx';

const ClientExperienceSection = () => {
  {/* Hover State */}
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const { showToast } = useToast();

  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 id="experience-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-foreground">
            Client Experience
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-xl max-w-2xl mx-auto text-muted-foreground">
            A selection of client projects where I've helped bring ideas to life through thoughtful design and strategic thinking. Select any project to explore the full story and development process, with additional work available in my complete client work.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-6 lg:space-y-8 cursor-pointer" onClick={() => showToast('Client Work Page Coming Soon!')}>
          {clientExperiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="relative"
              onMouseEnter={() => setHoveredExperience(index)}
              onMouseLeave={() => setHoveredExperience(null)}
            >
              {/* Glow Effect */}
              <div 
                className="absolute rounded-2xl blur-2xl pointer-events-none transition-all duration-500 ease-out"
                style={{
                  inset: hoveredExperience === index ? '-8px' : '-2px',
                  background: 'linear-gradient(135deg, #4B2EB5 0%, #2E1B8B 25%, #1318D8 50%, #010588 75%, #010341 100%)',
                  opacity: hoveredExperience === index ? 0.4 : 0.3,
                }}
              ></div>
              
              {/* Content Container */}
              <div 
                className="relative"
                style={{
                  zIndex: hoveredExperience === index ? 50 : 10,
                  transformOrigin: 'center',
                  transform: hoveredExperience === index ? 'scale(1.04)' : 'scale(1)',
                  transition: 'all 0.5s ease-out',
                }}
              >
                <div 
                  className="relative rounded-portfolio overflow-hidden border-2 border-portfolio"
                  style={{ 
                    background: 'linear-gradient(to bottom, rgb(16,16,40) 0%, #010315 100%)'
                  }}
                >
                  <div 
                    className="flex items-stretch gap-4 sm:gap-6 min-h-[120px] p-6 pr-6 sm:pr-0"
                  >
                    {/* Left Content */}
                    <div className="flex-1 space-y-3 sm:space-y-4 flex flex-col justify-center">
                      <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-base lg:text-base leading-relaxed text-accent">
                        {experience.description}
                      </p>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {experience.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm font-medium flex items-center justify-center"
                            style={{
                              backgroundColor: colorToRgba(getTagColor(tag), 0.2),
                              color: getTagColor(tag),
                              border: `2px solid ${colorToRgba(getTagColor(tag), 0.4)}`
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right Animation Space - Hidden on Mobile */}
                    <div 
                      className="hidden sm:block w-1/3 flex-shrink-0 rounded-r-2xl overflow-hidden flex items-center justify-center -my-6 -mr-6 transition-all duration-500 ease-out z-10 bg-transparent border-none"
                    >
                      {/* Lottie Animation Placeholder */}
                      <div 
                        className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ${
                          hoveredExperience === index 
                            ? 'bg-transparent border-2 border-dashed border-secondary rounded-l-2xl' 
                            : 'about-placeholder-default'
                        }`}
                        style={{ 
                          minHeight: '100%'
                        }}
                      >
                        {/* Animated Background */}
                        {hoveredExperience === index && (
                          <div 
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(45deg, rgba(75, 46, 181, 0.1) 0%, rgba(226, 219, 251, 0.05) 25%, rgba(75, 46, 181, 0.1) 50%, rgba(226, 219, 251, 0.05) 75%, rgba(75, 46, 181, 0.1) 100%)',
                              backgroundSize: '400% 400%',
                              animation: 'gradient-spin 2s ease-in-out infinite'
                            }}
                          />
                        )}
                        
                        {/* Animated Elements - Pulsing Circles */}
                        {hoveredExperience === index && (
                          <>
                            <div 
                              className="absolute top-4 left-4 w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: '#4B2EB5',
                                animation: 'pulse 1.5s ease-in-out infinite',
                                animationDelay: '0s'
                              }}
                            />
                            <div 
                              className="absolute top-8 right-6 w-1.5 h-1.5 rounded-full"
                              style={{
                                backgroundColor: '#E2DBFB',
                                animation: 'pulse 1.5s ease-in-out infinite',
                                animationDelay: '0.3s'
                              }}
                            />
                            <div 
                              className="absolute bottom-6 left-8 w-2.5 h-2.5 rounded-full"
                              style={{
                                backgroundColor: '#994EFF',
                                animation: 'pulse 1.5s ease-in-out infinite',
                                animationDelay: '0.6s'
                              }}
                            />
                            <div 
                              className="absolute bottom-4 right-4 w-1 h-1 rounded-full"
                              style={{
                                backgroundColor: '#FE2665',
                                animation: 'pulse 1.5s ease-in-out infinite',
                                animationDelay: '0.9s'
                              }}
                            />
                          </>
                        )}
                        
                        {/* Content */}
                        <div className="text-center relative z-10">
                          {hoveredExperience === index ? (
                            <div className="space-y-2">
                              <div 
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: 'rgba(75, 46, 181, 0.2)',
                                  color: '#E2DBFB',
                                  border: '2px solid rgba(75, 46, 181, 0.3)'
                                }}
                              >
                                <div 
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{
                                    backgroundColor: '#4B2EB5',
                                    animation: 'pulse 1s ease-in-out infinite'
                                  }}
                                />
                                PLAYING
                              </div>
                              <p className="text-xs text-accent">
                                Lottie Animation
                              </p>
                            </div>
                          ) : (
                            <div>
                              <p className="text-xs text-muted-foreground">
                                Lottie Animation
                              </p>
                              <p className="text-xs mt-1 text-muted-foreground">
                                Placeholder
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 lg:mt-16">
          <button
            onClick={() => showToast('Full Client Work Coming Soon!')}
            className="btn-lightning-primary inline-flex items-center gap-3"
          >
            <span>Full Client Work</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;