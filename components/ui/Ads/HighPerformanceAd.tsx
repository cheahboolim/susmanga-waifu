'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    atOptions: any;
  }
}

export default function HighPerformanceAd() {
  const adRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (!adRef.current || scriptLoadedRef.current) return;

    // Create a unique container ID for this ad instance
    const containerId = `ad-container-${Math.random().toString(36).substr(2, 9)}`;
    adRef.current.id = containerId;

    // Set the ad options on window object
    window.atOptions = {
      'key': '859ce865eafad0dfd961277e055d4058',
      'format': 'iframe',
      'height': 250,
      'width': 300,
      'params': {}
    };

    // Create the script to invoke the ad
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.async = true;
    invokeScript.src = '//www.highperformanceformat.com/859ce865eafad0dfd961277e055d4058/invoke.js';
    
    invokeScript.onload = () => {
      // Try to move the ad content to our container after it loads
      setTimeout(() => {
        const adElements = document.querySelectorAll('iframe[src*="highperformanceformat.com"]');
        const lastAdElement = adElements[adElements.length - 1];
        
        if (lastAdElement && adRef.current && !adRef.current.contains(lastAdElement)) {
          // Move the iframe to our container
          adRef.current.appendChild(lastAdElement);
          
          // Style the iframe to fit properly
          (lastAdElement as HTMLElement).style.width = '100%';
          (lastAdElement as HTMLElement).style.height = '100%';
          (lastAdElement as HTMLElement).style.border = 'none';
        }
      }, 1000);
    };

    // Append to document head to avoid body pollution
    document.head.appendChild(invokeScript);
    scriptLoadedRef.current = true;

    return () => {
      // Clean up
      if (adRef.current) {
        adRef.current.innerHTML = '';
      }
      // Remove script from head
      const scripts = document.head.querySelectorAll('script[src*="highperformanceformat.com"]');
      scripts.forEach(script => script.remove());
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div 
      ref={adRef}
      style={{ 
        width: 300, 
        height: 250,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #ccc', // Visual boundary for debugging
        backgroundColor: '#f9f9f9' // Light background to see the container
      }}
      className="ad-container"
    >
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        color: '#666',
        fontSize: '12px'
      }}>
        Loading ad...
      </div>
    </div>
  );
}
