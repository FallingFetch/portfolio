import { X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Toast = ({ id, message, onClose, duration = 3000, index }) => {
  {/* Animation State */}
  const [isExiting, setIsExiting] = useState(false);
  const hasStartedTimer = useRef(false);

  {/* Auto-dismiss Timer */}
  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, duration);

    const removeTimer = setTimeout(() => {
      onClose(id);
    }, duration + 300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [id, duration, onClose]);


  /* Manual Close Handler */
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };


  return (
    <div 
      className={`fixed left-0 right-0 flex justify-center px-4 ${
        isExiting ? 'animate-slide-down' : 'animate-slide-up'
      }`}
      style={{
        bottom: `${24 + (index * 75)}px`,
        transition: 'bottom 0.3s ease-out',
        zIndex: 99999,
        pointerEvents: 'none'
      }}
    >

      {/* Toast Content */}
      <div 
        className="rounded-portfolio px-6 py-4 shadow-2xl flex items-center gap-4 w-full max-w-md"
        style={{
          backgroundColor: '#0E1020',
          pointerEvents: 'auto',
          minHeight: '64px',
          boxSizing: 'border-box'
        }}
      >
        <div className="flex-1">
          <p className="text-base font-medium text-foreground">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="w-8 h-8 rounded-full hover:bg-portfolio-dark-hover transition-colors flex items-center justify-center flex-shrink-0"
          aria-label="Close notification"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default Toast;