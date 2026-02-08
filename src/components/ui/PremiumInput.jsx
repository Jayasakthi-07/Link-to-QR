import React from 'react';
import { cn } from '../../utils/cn';

export default function Input({ value, onChange, placeholder, icon: Icon, className, type = "text" }) {
    return (
        <div className={cn("relative w-full", className)}>
            <div className="relative flex items-center">
                {Icon && (
                    <div className="absolute left-3 text-slate-400 pointer-events-none">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={cn(
                        "w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 rounded-lg py-2.5 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/5 dark:focus:ring-white/10 focus:border-slate-400 dark:focus:border-slate-500 text-sm",
                        Icon ? "pl-10 pr-3" : "px-3"
                    )}
                />
            </div>
        </div>
    );
}
