import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextProps {
  primaryColor: string;
  secondaryColor: string;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
}

const StyleContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState<string>('#000000');
  const [secondaryColor, setSecondaryColor] = useState<string>('#FFFFFF');

  return (
    <StyleContext.Provider value={{
      primaryColor,
      secondaryColor,
      setPrimaryColor,
      setSecondaryColor
    }}>
      {children}
    </StyleContext.Provider>
  );
};

export const UseStyle = (): ColorContextProps => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyle must be used within a ColorProvider');
  }
  return context;
};