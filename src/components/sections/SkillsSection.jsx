import { useState, memo, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { allSkills, skillCategories } from '../../data/skills.js';

const SkillsSection = memo(() => {
  {/* Filter & Display State */}
  const [activeFilter, setActiveFilter] = useState('all');
  const [showMore, setShowMore] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [shineKey, setShineKey] = useState(0);

  {/* Filter Skills by Category */}
  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') {
      return allSkills;
    }
    return allSkills.filter(skill => skill.categories.includes(activeFilter));
  }, [activeFilter]);

  {/* Determine Skills to Display */}
  const skillsToShow = useMemo(() => {
    if (showMore) {
      return filteredSkills;
    }
    return filteredSkills.slice(0, 9);
  }, [showMore, filteredSkills]);

  {/* Helper Functions */}
  const getCategoryColor = (category) => {
    const categoryData = skillCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.color : '#4674FF';
  };

  const getCategoryLabel = (category) => {
    const categoryData = skillCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.label : category;
  };

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      {/* Background with Edge Gradients */}
      <div className="absolute inset-0" style={{ 
        backgroundColor: 'rgb(1,3,21)',
        background: 'linear-gradient(to right, rgb(7, 8, 66) 0%, rgb(12, 10, 58) 2%, rgb(10, 8, 42) 6%, rgb(1, 3, 21) 15%, rgb(1, 3, 21) 85%, rgb(10, 8, 42) 94%, rgb(12, 10, 58) 98%, rgb(7, 8, 66) 100%)'
      }}></div>
      
      {/* Vertical Gradient Overlay */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(rgb(1, 3, 21) 0%, rgb(1, 3, 21) 10%, rgb(1, 3, 21, 0%) 50%, rgb(1, 3, 21) 90%, rgb(1, 3, 21) 100%)'
      }}></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 id="skills-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-foreground">
            Skills
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-xl max-w-2xl mx-auto text-muted-foreground">
            A comprehensive overview of my technical expertise and creative abilities. From design to development, I bring versatile skills to every project.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12 lg:mb-16 px-4">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              data-filter={category.id}
              onClick={() => {
                setActiveFilter(category.id);
                setShowMore(false);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 relative overflow-hidden flex items-center justify-center font-medium ${activeFilter === category.id ? 'btn-active' : ''} cursor-pointer`}
              style={{
                background: activeFilter === category.id 
                  ? category.id === 'all' 
                    ? 'rgb(141,141,142)'
                    : category.color 
                  : category.id === 'all' 
                    ? 'rgb(22,23,39)'
                    : `${category.color}20`,
                color: activeFilter === category.id 
                  ? '#F7F8FF'
                  : category.id === 'all' 
                    ? 'rgb(161,162,170)'
                    : category.color,
                border: activeFilter === category.id 
                  ? category.id === 'all' 
                    ? '1px solid rgb(141,141,142)'
                    : `1px solid ${category.color}40`
                  : category.id === 'all' 
                    ? '1px solid rgb(161,162,170)'
                    : `1px solid ${category.color}40`,
                boxShadow: activeFilter === category.id 
                  ? category.id === 'all' 
                    ? '0 2px 8px rgba(141,141,142,0.4)' 
                    : `0 2px 8px ${category.color}40`
                  : undefined
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.background = category.id === 'all' ? 'rgb(141,141,142)' : category.color;
                  e.currentTarget.style.color = 'var(--foreground)';
                  e.currentTarget.style.border = category.id === 'all' ? '1px solid rgb(141,141,142)' : `1px solid ${category.color}`;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== category.id) {
                  e.currentTarget.style.background = category.id === 'all' ? 'rgb(10,12,29)' : `${category.color}20`;
                  e.currentTarget.style.color = category.id === 'all' ? 'rgb(161,162,170)' : category.color;
                  e.currentTarget.style.border = category.id === 'all' ? '1px solid rgb(161,162,170)' : `1px solid ${category.color}40`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillsToShow.map((skill, index) => {
            const shouldHideOnSmallScreens = !showMore && index === 8;
            
            return (
              <div
                key={`${skill.name}-${index}`}
                className={`card-lightning rounded-portfolio p-4 sm:p-6 transition-all duration-300 transform hover:scale-105 border-2 border-portfolio ${shouldHideOnSmallScreens ? 'hidden lg:block' : ''}`}
                style={{ 
                  background: 'linear-gradient(rgb(7, 9, 26) 70%, rgb(14, 16, 32) 90%, rgb(22, 23, 39) 100%)'
                }}
                onMouseEnter={() => {
                  setHoveredSkill(index);
                  setShineKey(prev => prev + 1);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Skill Name */}
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-foreground">
                    {skill.name}
                  </h3>

                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.categories.map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm font-medium flex items-center justify-center"
                        style={{
                          backgroundColor: `${getCategoryColor(category)}20`,
                          color: getCategoryColor(category),
                          border: `2px solid ${getCategoryColor(category)}40`
                        }}
                      >
                        {getCategoryLabel(category)}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full rounded-full h-2 bg-background">
                      <div
                        key={hoveredSkill === index ? shineKey : 'static'}
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${hoveredSkill === index ? 'progress-bar-shine' : ''}`}
                        style={{ 
                          width: `${skill.level}%`,
                          background: 'rgb(141,141,142)',
                          boxShadow: '0 0 4px rgba(141,141,142, 0.3)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Toggle */}
        {filteredSkills.length > 9 && (
          <div className="text-center mt-12 lg:mt-16">
            <span
              onClick={() => {
                setShowMore(!showMore);
                if (showMore) {
                  document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-lg lg:text-xl cursor-pointer hover:opacity-80 transition-opacity duration-200 flex items-center gap-2 mx-auto justify-center text-foreground"
            >
              {showMore ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </span>
          </div>
        )}
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;