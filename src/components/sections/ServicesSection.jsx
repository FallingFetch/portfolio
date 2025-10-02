import { getTagColor, colorToRgba } from '../../utils/tagColours.js';
import { services } from '../../data/services.js';

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0" style={{ 
        backgroundColor: 'rgb(1, 3, 21)'
      }}></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-foreground">
            Services
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-xl max-w-2xl mx-auto text-muted-foreground">
            From concept to completion, I offer creative solutions tailored to your unique needs and goals. Let's bring your vision to life together.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:justify-items-center lg:max-w-[896px] xl:max-w-none lg:mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div 
                className="absolute -inset-4 blur-2xl opacity-15 group-hover:opacity-30 pointer-events-none z-0 transition-all duration-700"
                style={{ 
                  background: `radial-gradient(ellipse at center, ${service.glowColor.replace('0.25', '0.8')} 0%, ${service.glowColor.replace('0.25', '0.6')} 25%, ${service.glowColor.replace('0.25', '0.4')} 50%, ${service.glowColor.replace('0.25', '0.2')} 75%, transparent 100%)`
                }}
              ></div>
              
              {/* Service Card */}
              <div
                className="relative card-lightning rounded-portfolio p-4 lg:p-6 transition-all duration-700 transform hover:scale-105 z-10 h-full flex flex-col bg-portfolio-dark-alt border-2 border-portfolio"
                style={{
                  background: `${service.gradient}, var(--sidebar)`,
                  transition: 'all 0.7s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${service.hoverGradient}, var(--sidebar)`;
                  e.currentTarget.style.transition = 'all 0.7s ease';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${service.gradient}, var(--sidebar)`;
                  e.currentTarget.style.transition = 'all 0.7s ease';
                }}
              >
                <div className="text-center relative z-10 flex-1 flex flex-col h-full">
                  {/* Service Title with Icon */}
                  <div className="flex items-center justify-center gap-3 mb-4 lg:mb-6">
                    <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <service.icon 
                      className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 text-foreground" 
                    />
                  </div>

                  {/* Service Description */}
                  {service.title === "And More!" ? (
                    <div className="flex items-start min-h-[60px] lg:min-h-[80px] mb-6 lg:mb-8">
                      <p className="text-sm sm:text-base md:text-base lg:text-base leading-relaxed transition-all duration-300 group-hover:text-opacity-90 text-accent w-full">
                        {service.description}
                      </p>
                    </div>
                  ) : (
                    <div className="flex-1 flex items-start min-h-[60px] lg:min-h-[80px] mb-3 lg:mb-4">
                      <p className="text-sm sm:text-base md:text-base lg:text-base leading-relaxed transition-all duration-300 group-hover:text-opacity-90 text-accent w-full">
                        {service.description}
                      </p>
                    </div>
                  )}

                  {/* Lottie Animation Space - Hidden Below SM */}
                  {service.title === "And More!" ? (
                    <div className="hidden sm:flex flex-1 items-center justify-center">
                      <div className="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center rounded-portfolio placeholder-default">
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
                  ) : (
                    <>
                      <div className="hidden sm:flex w-full h-12 lg:h-16 flex items-center justify-center rounded-portfolio mb-3 lg:mb-4 placeholder-default">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">
                            Lottie Animation
                          </p>
                          <p className="text-xs mt-1 text-muted-foreground">
                            Placeholder
                          </p>
                        </div>
                      </div>

                      {/* Skills & Technologies */}
                      <div className="space-y-4">
                        <h4 className="text-sm sm:text-base md:text-base font-semibold text-center text-foreground">
                          Skills & Technologies
                        </h4>
                        
                        {/* Skills Tags */}
                        <div className="flex flex-col gap-2 items-center">
                          {service.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm font-medium flex items-center justify-center transition-all duration-300"
                              style={{
                                backgroundColor: colorToRgba(getTagColor(skill), 0.2),
                                color: getTagColor(skill),
                                border: `2px solid ${colorToRgba(getTagColor(skill), 0.4)}`
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;