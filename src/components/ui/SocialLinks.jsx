import { socialLinks } from '../../data/socialLinksData.js';

const SocialLinks = ({ 
  variant = 'default', 
  className = '', 
  excludeEmail = false 
}) => {
  {/* Variant Sizing */}
  const size = variant === 'large' ? 'w-12 h-12' : 'w-12 h-12 sm:w-12 sm:h-12';
  const iconSize = variant === 'large' ? 'w-5 h-5' : 'w-5 h-5 sm:w-5 sm:h-5';

  {/* Filter Links */}
  const linksToShow = excludeEmail 
    ? socialLinks.filter(link => link.name !== 'Email')
    : socialLinks;

  return (
    <div className={`flex gap-3 sm:gap-4 ${className}`}>
      {linksToShow.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-lightning ${size} rounded-portfolio flex items-center justify-center`}
          aria-label={social.label}
          title={social.name}
        >
          <social.icon className={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;