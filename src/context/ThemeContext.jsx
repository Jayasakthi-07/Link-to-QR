import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Initialize theme from localStorage or default to 'system'
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            return localStorage.getItem('theme') || 'system';
        }
        return 'system';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // Helper to apply/remove dark class
        const applyTheme = (targetTheme) => {
            root.classList.remove('light', 'dark');

            if (targetTheme === 'system') {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                root.classList.add(systemTheme);
                return;
            }

            root.classList.add(targetTheme);
        };

        applyTheme(theme);

        // Persist choice
        localStorage.setItem('theme', theme);

        // Listen for system changes if mode is 'system'
        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => applyTheme('system');
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
