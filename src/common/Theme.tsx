import React, { createContext, useContext, useState } from 'react';

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  theme: ThemeColors;
};

type ThemeColors = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
};

const lightTheme: ThemeColors = {
  background: '#FFFFFF',
  text: '#333333',
  primary: '#007AFF',
  secondary: '#5856D6',
  accent: '#FF2D55'
};

const darkTheme: ThemeColors = {
  background: '#1A1A1A',
  text: '#FFFFFF',
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  accent: '#FF375F'
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};