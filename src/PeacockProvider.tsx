import React, { createContext, useContext, ReactNode } from 'react';

interface PeacockContextProps {
  theme: 'light' | 'dark';
}

const PeacockContext = createContext<PeacockContextProps | undefined>(undefined);

export const PeacockProvider = ({ 
  children, 
  theme = 'dark' 
}: { 
  children: ReactNode; 
  theme?: 'light' | 'dark' 
}) => {
  return (
    <PeacockContext.Provider value={{ theme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-peacock-darker text-slate-900 dark:text-slate-100 selection:bg-peacock-primary/30">
          {children}
        </div>
      </div>
    </PeacockContext.Provider>
  );
};

export const usePeacock = () => {
  const context = useContext(PeacockContext);
  if (!context) {
    throw new Error('usePeacock must be used within a PeacockProvider');
  }
  return context;
};
