'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    AdProvider: any[];
  }
}

export default function MagSrvAd() {
  const adRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !adRef.current) return;

    // Initialize AdProvider array if it doesn't exist
    window.AdProvider = window.AdProvider || [];

    // Create the async script
    const adScript = document.createElement('script');
    adScript.async = true;
    adScript.type = 'application/javascript';
    adScript.src = 'https://a.magsrv.com/ad-provider.js';

    // Create the ins element for the ad
    const insElement = document.createElement('ins');
    insElement.className = 'eas6a97888e31';
    insElement.setAttribute('data-zoneid', '5690634');

    // Create the script that triggers the ad
    const triggerScript = document.createElement('script');
    triggerScript.type = 'text/javascript';
    triggerScript.text = '(AdProvider = window.AdProvider || []).push({"serve": {}});';

    // Append elements to our container
    const container = adRef.current;
    container.appendChild(adScript);
    container.appendChild(insElement);
    container.appendChild(triggerScript);

    loadedRef.current = true;

    return () => {
      // Clean up
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
        minHeight: 250
      }}
      className="magsrv-ad-container"
    >
      {/* Ad content will be inserted here */}
    </div>
  );
}
