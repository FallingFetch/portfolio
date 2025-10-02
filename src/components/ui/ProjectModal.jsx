import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const ProjectModal = ({ isOpen, onClose, projectUrl, projectTitle }) => {
  const closeButtonRef = useRef(null);
  const modalContentRef = useRef(null);
  
  {/* Modal Effects & Event Listeners */}
  useEffect(() => {
    if (!isOpen) return;

    {/* Keyboard Handler */}
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    {/* Scroll Prevention */}
    const preventScroll = (e) => {
      const target = e.target;
      
      if (modalContentRef.current?.contains(target)) {
        return;
      }
      
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', handleEsc);
    
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
    
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        aria-hidden="true"
      />
      
      {/* Modal Container */}
      <div 
        ref={modalContentRef}
        className="relative bg-card rounded-2xl shadow-2xl border-2 border-portfolio overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
          zIndex: 100000
        }}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 hover:bg-background transition-all duration-200 border border-border group"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
        </button>

        {/* Project Title */}
        <div className="absolute top-4 left-4 z-10 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
          <h3 className="text-sm sm:text-base font-semibold text-foreground">
            {projectTitle}
          </h3>
        </div>

        {/* Iframe Content */}
        <iframe
          src={projectUrl}
          title={projectTitle}
          className="w-full h-full"
          allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer"
          allowFullScreen
          style={{
            border: 'none',
            borderRadius: 'inherit'
          }}
        />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;