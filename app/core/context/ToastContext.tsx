import React, { createContext, useContext, ReactNode } from 'react';
import toast, { Toaster, ToastOptions } from 'react-hot-toast';

interface ToastContextProps {
  showToast: (message: string, type: 'success' | 'error' | 'warning' | 'info', options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const showToast = (message: string, type: 'success' | 'error' | 'warning' | 'info', options?: ToastOptions) => {
    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'warning':
        toast(message, { ...options, icon: '⚠️' });
        break;
      case 'info':
        toast(message, { ...options, icon: 'ℹ️' });
        break;
      default:
        toast(message, options);
        break;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toaster toastOptions={{
        position: 'bottom-right'
      }} />
    </ToastContext.Provider>
  );
};

export const useHotToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useHotToast must be used within a ToastProvider');
  }
  return context;
};
