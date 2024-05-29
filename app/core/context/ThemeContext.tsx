import React, { createContext, useState, useMemo, useEffect, useContext, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import lightTheme from '@theme/LightTheme';
import darkTheme from '@theme/DarkTheme';

type ThemeContextType = {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<'light' | 'dark'>(
        () => (typeof window !== 'undefined' ? (window.localStorage.getItem('themeMode') as 'light' | 'dark' || 'light') : 'light')
    );

    const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('themeMode', mode);
        }
    }, [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
};

export default ThemeContextProvider;
