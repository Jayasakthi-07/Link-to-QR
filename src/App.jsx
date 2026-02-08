import React, { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import Generator from './components/features/Generator';
import Studio from './components/features/Studio';
import useQR from './hooks/useQR';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  // Initialize QR hook with default options (Professional B&W)
  const { ref: qrRef, options, setOptions, download } = useQR({
    data: 'https://antigravity.ai',
    dotsOptions: { color: '#000000', type: 'square' }, // Black & Square
    backgroundOptions: { color: '#ffffff' }, // White
    cornersSquareOptions: { type: 'square', color: '#000000' }, // Black & Square
    cornersDotOptions: { type: 'square', color: '#000000' } // Black & Square
  });

  // Handle explicit generation
  const handleGenerate = (newUrl) => {
    setOptions(prev => ({ ...prev, data: newUrl }));
  };

  return (
    <ThemeProvider>
      <Layout>
        <Generator
          qrRef={qrRef}
          onGenerate={handleGenerate}
          onDownload={download}
          onOpenStudio={() => setIsStudioOpen(true)}
        />

        <Studio
          isOpen={isStudioOpen}
          onClose={() => setIsStudioOpen(false)}
          options={options}
          setOptions={setOptions}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
