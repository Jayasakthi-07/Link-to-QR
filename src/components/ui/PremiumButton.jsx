import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Button({
    children,
    onClick,
    className,
    variant = 'primary',
    icon: Icon,
    disabled = false
}) {
    const baseStyles = "relative px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";

    const variants = {
        primary: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm",
        secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 shadow-sm transition-colors",
        gradient: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm", // Kept as 'brand' accent
        ghost: "bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors"
    };

    return (
        <button
            onClick={!disabled ? onClick : undefined}
            disabled={disabled}
            className={cn(baseStyles, variants[variant], className)}
        >
            {Icon && <Icon className="w-4 h-4" />}
            {children}
        </button>
    );
}
