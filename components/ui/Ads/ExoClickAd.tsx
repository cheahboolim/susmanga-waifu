'use client';

import { useEffect, useRef } from 'react';

export default function ExoClickAd() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the external ExoClick script
    const script = document.createElement('script');
    script.async = true;
    script.type = 'application/javascript';
    script.src = 'https://a.magsrv.com/ad-provider.js';
    document.body.appendChild(script);

    // Inject the ad call
    const pushScript = document.createElement('script');
    pushScript.innerHTML = `(AdProvider = window.AdProvider || []).push({"serve": {}});`;
    document.body.appendChild(pushScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(pushScript);
    };
  }, []);

  return (
    <div ref={adRef}>
      <ins className="eas6a97888e31" data-zoneid="5690634"></ins>
    </div>
  );
}
