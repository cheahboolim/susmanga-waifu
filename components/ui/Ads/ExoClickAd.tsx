'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    AdProvider: any[];
  }
}

export default function ExoClickAd() {
  const adRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current || !adRef.current) return;

    try {
      // Initialize AdProvider array if it doesn't exist
      if (typeof window !== 'undefined') {
        window.AdProvider = window.AdProvider || [];
      }

      // Create the async script
      const adScript = document.createElement('script');
      adScript.async = true;
      adScript.type = 'application/javascript';
      adScript.src = 'https://a.magsrv.com/ad-provider.js';
      
      // Add error handling
      adScript.onerror = () => {
        console.error('Failed to load ExoClick ad script');
      };

      // Create the ins element for the ad (video slider)
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

      console.log('ExoClick video slider ad initialized'); // Debug log

    } catch (error) {
      console.error('Error initializing ExoClick ad:', error);
    }

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
        width: '100%', // Full width for video slider
        maxWidth: '400px', // Max width constraint
        height: 'auto', // Auto height for video content
        minHeight: '250px', // Minimum height
        display: 'block',
        margin: '0 auto',
        position: 'relative', // Important for video positioning
        overflow: 'hidden', // Hide any overflow
        border: '1px dashed #ccc', // Temporary border to see the container
        backgroundColor: '#f9f9f9' // Temporary background
      }}
      className="exoclick-video-ad-container"
    >
      {/* Temporary loading indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '250px',
        color: '#666',
        fontSize: '12px'
      }}>
        Loading Video Slider Ad...
      </div>
    </div>
  );
}
