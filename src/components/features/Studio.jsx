import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Palette, Shapes, Image as ImageIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Studio({ isOpen, onClose, options, setOptions }) {

    const updateOption = (path, value) => {
        // Helper to update nested object state
        const newOptions = { ...options };
        const keys = path.split('.');
        let current = newOptions;
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;
        setOptions(newOptions);
    };

    // Professional Color presets (Safe web colors)
    const colors = ['#0f172a', '#2563eb', '#16a34a', '#dc2626', '#ca8a04', '#475569', '#000000'];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm pointer-events-auto"
                        onClick={onClose}
                    />

                    {/* Sidebar Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="w-full max-w-sm h-full bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto pointer-events-auto relative text-slate-900 dark:text-white"
                    >
                        <div className="p-5 sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-10 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <h2 className="text-lg font-display font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                                <Palette className="w-5 h-5 text-slate-500 dark:text-slate-400" /> Customize
                            </h2>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 dark:text-slate-400">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-8">
                            {/* Color Section */}
                            <section>
                                <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 font-semibold">Colors</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-2 block">Dots Color</label>
                                        <div className="flex gap-2 flex-wrap">
                                            {colors.map(c => (
                                                <button
                                                    key={c}
                                                    onClick={() => updateOption('dotsOptions.color', c)}
                                                    className={cn(
                                                        "w-8 h-8 rounded-full border-2 transition-transform hover:scale-105",
                                                        options.dotsOptions.color === c ? "border-slate-900 dark:border-white scale-105 ring-1 ring-slate-900 dark:ring-white ring-offset-2 dark:ring-offset-slate-900" : "border-transparent ring-1 ring-slate-200 dark:ring-slate-700"
                                                    )}
                                                    style={{ backgroundColor: c }}
                                                />
                                            ))}
                                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 ring-1 ring-slate-100 dark:ring-slate-800 cursor-pointer">
                                                <input
                                                    type="color"
                                                    value={options.dotsOptions.color}
                                                    onChange={(e) => updateOption('dotsOptions.color', e.target.value)}
                                                    className="absolute inset-0 w-[150%] h-[150%] -top-[25%] -left-[25%] cursor-pointer p-0 border-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-2 block">Background Color</label>
                                        <div className="flex gap-2 flex-wrap">
                                            {['transparent', '#ffffff', '#f8fafc', '#0f172a'].map(c => (
                                                <button
                                                    key={c}
                                                    onClick={() => updateOption('backgroundOptions.color', c)}
                                                    className={cn(
                                                        "px-3 py-1.5 rounded-md border text-xs font-medium transition-all capitalize",
                                                        options.backgroundOptions.color === c ? "border-slate-900 dark:border-white bg-slate-900 dark:bg-white text-white dark:text-slate-900" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                                                    )}
                                                >
                                                    {c === 'transparent' ? 'None' : c === '#ffffff' ? 'White' : c === '#f8fafc' ? 'Light' : 'Dark'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="w-full h-px bg-slate-100 dark:bg-slate-800" />

                            {/* Shape Section */}
                            <section>
                                <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 font-semibold flex items-center gap-2">
                                    <Shapes className="w-4 h-4" /> Shapes
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-2 block">Dots Style</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'].map(type => (
                                                <button
                                                    key={type}
                                                    onClick={() => updateOption('dotsOptions.type', type)}
                                                    className={cn(
                                                        "py-2 px-1 rounded-md border text-xs font-medium transition-all capitalize",
                                                        options.dotsOptions.type === type ? "border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                                    )}
                                                >
                                                    {type.replace('-', ' ')}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-medium mb-2 block">Corner Style</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['square', 'dot', 'extra-rounded'].map(type => (
                                                <button
                                                    key={type}
                                                    onClick={() => {
                                                        updateOption('cornersSquareOptions.type', type);
                                                        updateOption('cornersDotOptions.type', type === 'square' ? 'square' : 'dot'); // Sync dot
                                                    }}
                                                    className={cn(
                                                        "py-2 px-1 rounded-md border text-xs font-medium transition-all capitalize",
                                                        options.cornersSquareOptions?.type === type ? "border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white" : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                                    )}
                                                >
                                                    {type.replace('-', ' ')}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="w-full h-px bg-slate-100 dark:bg-slate-800" />

                            {/* Logo Section */}
                            <section>
                                <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 font-semibold flex items-center gap-2">
                                    <ImageIcon className="w-4 h-4" /> Logo
                                </h3>
                                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center">
                                    <div className="w-full py-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col items-center gap-2 relative overflow-hidden group hover:bg-white dark:hover:bg-slate-700/50">
                                        {options.image ? (
                                            <motion.img
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                src={options.image}
                                                alt="Logo"
                                                className="w-16 h-16 object-contain"
                                            />
                                        ) : (
                                            <>
                                                <ImageIcon className="w-8 h-8 group-hover:scale-110 transition-transform text-slate-300 dark:text-slate-600 group-hover:text-slate-400 dark:group-hover:text-slate-500" />
                                                <span className="text-sm font-medium">Upload Logo</span>
                                            </>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (e) => updateOption('image', e.target.result);
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    </div>
                                    {options.image && (
                                        <button
                                            onClick={() => updateOption('image', '')}
                                            className="text-xs text-red-500 mt-3 font-medium hover:text-red-700 transition-colors"
                                        >
                                            Remove Logo
                                        </button>
                                    )}
                                </div>
                            </section>

                            <div className="h-20" /> {/* Spacer */}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
