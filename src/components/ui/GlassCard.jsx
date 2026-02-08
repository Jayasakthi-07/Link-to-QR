import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Card({ children, className, hoverEffect = false, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay, ease: "easeOut" }}
            className={cn(
                "clean-card",
                hoverEffect && "hover:shadow-md clean-shadow",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
