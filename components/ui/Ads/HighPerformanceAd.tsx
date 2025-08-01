'use client';

import { useEffect, useRef } from 'react';

export default function HighPerformanceAd() {
  const adRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !adRef.current) return;

    // Create a wrapper div that will contain both scripts and serve as ad container
    const adContainer = adRef.current;
    
    // First script: Set the options exactly as in the original
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.text = `
      atOptions = {
        'key' : '859ce865eafad0dfd961277e055d4058',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    
    // Second script: Load the invoke script exactly as in the original
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/859ce865eafad0dfd961277e055d4058/invoke.js';
    
    // Append both scripts to our container
    adContainer.appendChild(optionsScript);
    adContainer.appendChild(invokeScript);
    
    loadedRef.current = true;

    return () => {
      // Clean up - remove scripts from container
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
      loadedRef.current = false;
    };
  }, []);

  return (
    <div 
      ref={adRef}
      style={{ 
        width: 300, 
        height: 250,
        display: 'block',
        margin: '0 auto',
        minHeight: 250 // Ensure container has minimum height
      }}
      className="ad-container"
    >
      {/* Scripts and ad content will be inserted here */}
    </div>
  );
}
