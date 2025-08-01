'use client'

import { useEffect, useRef } from "react"

export default function ExoClickAd() {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if ad script is already loaded
    if (!window.AdProvider && typeof window !== 'undefined') {
      const script = document.createElement("script")
      script.src = "https://a.magsrv.com/ad-provider.js"
      script.async = true
      document.body.appendChild(script)
    }

    // Push the ad only after the container is available
    const timeout = setTimeout(() => {
      try {
        if (window.AdProvider && adRef.current) {
          ;(window.AdProvider = window.AdProvider || []).push({ serve: {} })
        }
      } catch (e) {
        console.error("Ad loading failed", e)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex justify-center items-center mt-4">
      <ins
        className="eas6a97888e31"
        data-zoneid="5690634"
        ref={adRef}
        style={{ display: "block", width: "100%", textAlign: "center" }}
      ></ins>
    </div>
  )
}
