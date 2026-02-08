import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumInput from '../ui/PremiumInput';
import PremiumButton from '../ui/PremiumButton';
import GlassCard from '../ui/GlassCard';
import { QrCode, Download, Settings2, Sparkles, Share2, Link } from 'lucide-react';

export default function Generator({ qrRef, onGenerate, onDownload, onOpenStudio }) {
    const [inputValue, setInputValue] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);

    const handleGenerate = () => {
        if (inputValue) {
            setIsGenerated(true);
            onGenerate(inputValue);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto gap-8 relative z-20">
            {/* Header / Title */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4 px-4"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold tracking-wide text-slate-600 dark:text-slate-400 uppercase mb-2">
                    <Sparkles className="w-3 h-3 text-slate-400" />
                    Professional QR Generator
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
                    Link to <span className="text-slate-500 dark:text-slate-400">QR Code</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg font-body max-w-lg mx-auto leading-relaxed">
                    Create high-quality, reliable QR codes for your business. Customize, download, and share in seconds.
                </p>
            </motion.div>

            {/* Input Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full relative px-4"
            >
                <GlassCard className="p-2 flex flex-col md:flex-row gap-2 shadow-lg">
                    <PremiumInput
                        icon={Link}
                        placeholder="https://example.com"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setIsGenerated(false); // Reset generated state when typing
                        }}
                        className="flex-1"
                    />
                    <PremiumButton
                        variant="primary"
                        onClick={handleGenerate}
                        className="h-auto py-3 px-6 font-semibold"
                    >
                        Generate QR
                    </PremiumButton>
                </GlassCard>
            </motion.div>

            {/* QR Display Section */}
            <motion.div
                layout
                className={`w-full flex justify-center px-4 transition-all duration-500 ${isGenerated ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 translate-y-4 h-0 overflow-hidden'}`}
            >
                <div className="w-full max-w-sm">
                    <GlassCard hoverEffect className="p-6 flex flex-col items-center gap-6 shadow-xl relative overflow-visible">

                        <div className="relative p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                            <div
                                ref={qrRef}
                                className="relative z-10 bg-white rounded-lg overflow-hidden shadow-sm"
                                style={{
                                    width: '240px',
                                    height: '240px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            />
                        </div>

                        <div className="flex flex-col w-full gap-3">
                            <div className="flex gap-3 w-full">
                                <PremiumButton variant="secondary" onClick={() => onDownload('png')} className="flex-1 text-sm">
                                    <Download className="w-4 h-4 mr-2" /> PNG
                                </PremiumButton>
                                <PremiumButton variant="secondary" onClick={() => onDownload('svg')} className="flex-1 text-sm">
                                    <Download className="w-4 h-4 mr-2" /> SVG
                                </PremiumButton>
                            </div>
                            <PremiumButton variant="ghost" onClick={onOpenStudio} className="w-full text-sm font-medium border border-dashed border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600">
                                <Settings2 className="w-4 h-4 mr-2" /> Customize Design
                            </PremiumButton>
                        </div>
                    </GlassCard>
                </div>
            </motion.div>
        </div>
    );
}
