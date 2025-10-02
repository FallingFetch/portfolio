import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import ItchIoIcon from '../ItchIoIcon';
import { memo, useState } from 'react';
import { getTagColor, colorToRgba } from '../../utils/tagColours';
import { featuredProjects } from '../../data/projects';
import ProjectModal from '../ui/ProjectModal';
import { useToast } from '../../ToastContext';

const CreativePortfolioSection = memo(() => {
  {/* Modal State */}
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const { showToast } = useToast();

  {/* Modal Handlers */}
  const openModal = (url, title) => {
    setModalUrl(url);
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalUrl('');
    setModalTitle('');
  };

  {/* Link Icon Renderer */}
  const renderLinkIcon = (type) => {
    switch (type) {
      case 'github':
        return <Github size={20} />;
      case 'itch':
        return <ItchIoIcon className="w-[20px] h-[20px]" />;
      case 'external':
      default:
        return <ExternalLink size={20} />;
    }
  };

  {/* Project Card Component */}
  const ProjectCard = ({ project, index, isTabletCentered = false }) => (
    <div className="relative">
      {/* Desktop Glow Effects */}
      <div className="hidden lg:block">
        <div className="absolute -top-4 -left-2 -right-2 h-8 bg-gradient-primary rounded-t-2xl blur-2xl opacity-65 pointer-events-none z-0"></div>
        {index === 0 && (
          <div className="absolute -left-4 top-4 w-8 bg-gradient-primary rounded-l-2xl blur-2xl opacity-65 pointer-events-none z-0" style={{ height: '50%' }}></div>
        )}
        {((index + 1) % 3 === 0 || index === featuredProjects.length - 1) && (
          <div className="absolute -right-4 top-4 w-8 bg-gradient-primary rounded-r-2xl blur-2xl opacity-65 pointer-events-none z-0" style={{ height: '50%' }}></div>
        )}
      </div>

      {/* Mobile Glow Effects */}
      <div className="block lg:hidden">
        <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-30 pointer-events-none z-0"></div>
      </div>
      
      {/* Card Container */}
      <div
        className="relative rounded-portfolio transition-all duration-300 transform hover:scale-105 group overflow-hidden z-10 flex flex-col h-full bg-portfolio-dark-alt border-2 border-portfolio cursor-pointer" onClick={() => showToast('Project Page Coming Soon!')}>

        {/* Project Image */}
        <div className="aspect-square overflow-hidden bg-gradient-subtle relative">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:scale-110"
          />
          <div 
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"
            style={{
              backgroundColor: 'rgba(119,82,220,0.4)',
              mixBlendMode: 'overlay'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow p-4 lg:p-6">
          {/* Tags */}
          <div className="pb-2 lg:pb-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
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

          {/* Project Info */}
          <div className="flex flex-col flex-grow">
            <div className="mb-4 lg:mb-6">
              <h3 className="mb-2 lg:mb-3 text-lg sm:text-xl md:text-xl font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base md:text-base leading-relaxed text-accent">
                {project.description}
              </p>
            </div>

            <div className="flex-grow"></div>

            {/* Action Buttons */}
            <div className="">
              <div className="flex items-center gap-3">
                {project.links.map((link, linkIndex) => {
                  const shouldOpenInModal = link.type === 'external' && 
                                          (link.label?.includes('Demo') || link.label?.includes('Play'));
                  
                  const isSomethingFeelsDifferent = project.title.includes('Something Feels Different');
                  const hideOnSmallScreens = isSomethingFeelsDifferent && shouldOpenInModal;
                  
                  if (shouldOpenInModal) {
                    return (
                      <button
                        key={linkIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(link.url, project.title);
                        }}
                        className={`w-12 h-12 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 flex items-center justify-center text-foreground hover:text-foreground shadow-lg cursor-pointer ${hideOnSmallScreens ? 'hidden md:flex' : ''}`}
                        title={link.label || link.type}
                      >
                        {renderLinkIcon(link.type)}
                      </button>
                    );
                  }
                  
                  return (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-12 h-12 bg-card hover:bg-card/80 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 flex items-center justify-center text-foreground hover:text-foreground shadow-lg cursor-pointer"
                      title={link.label || link.type}
                    >
                      {renderLinkIcon(link.type)}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-16 sm:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 id="portfolio-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-xl max-w-2xl mx-auto text-muted-foreground">
            Three personal projects that showcase my approach to creative problem-solving and attention to detail. Some include live demos and source code, with more work available in my full creative portfolio.
          </p>
        </div>

        {/* Projects Grid */}
        <div>
          {/* Mobile Layout - Single Column */}
          <div className="block md:hidden space-y-4 lg:space-y-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Tablet Layout - 2 Columns + Centered */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6 mb-6">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
            
            {featuredProjects.length > 2 && (
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <ProjectCard 
                    key={featuredProjects[2].id} 
                    project={featuredProjects[2]} 
                    index={2} 
                    isTabletCentered={true}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Desktop Layout - 3 Columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 lg:mt-12">
          <button
            onClick={() => showToast('Full Creative Portfolio Coming Soon!')}
            className="btn-lightning-primary inline-flex items-center gap-3 cursor-pointer"
          >
            <span>Full Creative Portfolio</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>      

      {/* Project Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={closeModal}
        projectUrl={modalUrl}
        projectTitle={modalTitle}
      />
    </section>
  );
});
CreativePortfolioSection.displayName = 'CreativePortfolioSection';

export default CreativePortfolioSection;