import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const themes = [
        { name: 'light', icon: Sun },
        { name: 'dark', icon: Moon },
        { name: 'system', icon: Monitor },
    ];

    return (
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            {themes.map(({ name, icon: Icon }) => (
                <button
                    key={name}
                    onClick={() => setTheme(name)}
                    className={`
            relative p-2 rounded-md transition-all duration-200 focus:outline-none
            ${theme === name
                            ? 'text-slate-900 dark:text-white'
                            : 'text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300'
                        }
          `}
                    title={`Switch to ${name} mode`}
                >
                    {theme === name && (
                        <motion.div
                            layoutId="activeTheme"
                            className="absolute inset-0 bg-white dark:bg-slate-700 shadow-sm rounded-md"
                            initial={false}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">
                        <Icon className="w-4 h-4" />
                    </span>
                </button>
            ))}
        </div>
    );
}
