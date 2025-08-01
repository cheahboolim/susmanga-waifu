"use client"

import Link from "next/link"
import { Twitter, Facebook, Share2 } from "lucide-react" // Re-import share icons
import { Button } from "@/components/ui/button" // Re-import Button

export default function Footer() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://susmanga.com" // Fallback for server-side rendering
  const shareText = "Check out the Top 50 Waifu rankings on SUSMANGA.COM!"

  return (
    <footer className="w-full py-4 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between border-t border-pink-DEFAULT gap-4">
      <div className="flex items-center gap-4">
        <Link
          href="https://susmanga.com?ref=waifufooter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-pink-DEFAULT hover:text-pink-DEFAULT/80 transition-colors"
        >
          susmanga.com
        </Link>
        <Link href="/" className="text-sm text-pink-DEFAULT hover:text-pink-DEFAULT/80 transition-colors">
          Waifu List
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-pink-DEFAULT">Share:</span>
        <Button
          variant="ghost"
          size="icon"
          className="text-pink-DEFAULT hover:bg-pink-DEFAULT/20"
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`,
              "_blank",
            )
          }
          aria-label="Share on Twitter"
        >
          <Twitter className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-pink-DEFAULT hover:bg-pink-DEFAULT/20"
          onClick={() =>
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, "_blank")
          }
          aria-label="Share on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-pink-DEFAULT hover:bg-pink-DEFAULT/20"
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: "SUSMANGA.COM Waifu Ranking",
                  text: shareText,
                  url: currentUrl,
                })
                .catch((error) => console.error("Error sharing:", error))
            } else {
              // Fallback for browsers that don't support navigator.share
              alert("Please copy the URL to share: " + currentUrl)
            }
          }}
          aria-label="Share this page"
        >
          <Share2 className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  )
}
