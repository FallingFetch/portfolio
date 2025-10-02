import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from './components/ui/Toast.jsx';

const ToastContext = createContext(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  {/* Toast State */}
  const [toasts, setToasts] = useState([]);

  const generateToastId = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
    return `${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
  };

  const showToast = (message) => {
    const id = generateToastId();
    setToasts(prev => [...prev, { id, message }]);
  };

  {/* Close Toast Handler */}
  const closeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          onClose={closeToast}
          index={index}
        />
      ))}
    </ToastContext.Provider>
  );
};