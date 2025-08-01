'use client';

import { useEffect } from 'react';

export default function HighPerformanceAd() {
  useEffect(() => {
    // Create the script for ad options
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.innerHTML = `
      atOptions = {
        'key' : '859ce865eafad0dfd961277e055d4058',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    document.body.appendChild(optionsScript);

    // Create the script to invoke the ad
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/859ce865eafad0dfd961277e055d4058/invoke.js';
    document.body.appendChild(invokeScript);

    return () => {
      // Clean up scripts if needed (optional)
      document.body.removeChild(optionsScript);
      document.body.removeChild(invokeScript);
    };
  }, []);

  return (
    <div style={{ width: 300, height: 250 }}>
      {/* Ad will render into this container */}
    </div>
  );
}
