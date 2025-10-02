const LottiePlaceholder = ({ 
  size = 'medium', 
  animated = false,
  className = '' 
}) => {
  {/* Size Classes */}
  const sizeClasses = {
    small: 'h-16 sm:h-20 lg:h-24',
    medium: 'h-24 sm:h-32 lg:h-40',
    large: 'h-40 sm:h-48 lg:h-56',
    full: 'w-full h-full'
  };

  return (
    <div 
      className={`
        flex items-center justify-center rounded-portfolio 
        ${animated ? 'lottie-placeholder' : 'placeholder-default'}
        ${sizeClasses[size]} 
        ${className}
      `}
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
  );
};

export default LottiePlaceholder;