import Link from "next/link"
import { Button } from "@/components/ui/button"
import HighPerformanceAd from "@/components/ui/Ads/HighPerformanceAd" // Import the HighPerformanceAd component

export default function NotReadyPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 p-4 md:p-8 max-w-2xl w-full">
      <h1 className="text-2xl md:text-4xl font-bold text-pink-DEFAULT">Voting Closed</h1>
      <p className="text-lg md:text-xl text-foreground">
        Our voting polls have been closed for now, please visit SUSMANGA.COM to find out more.
      </p>
      <Link href="/presusmanga">
        <Button className="bg-pink-cta text-white hover:bg-pink-DEFAULT text-xl px-10 py-5 rounded-full shadow-lg transition-colors w-full max-w-md">
          Learn More
        </Button>
      </Link>
      {/* HighPerformanceAd is placed below the "Learn More" button */}
      <div className="w-[300px] h-[300px] flex items-center justify-center mx-auto mt-8">
        <HighPerformanceAd />
      </div>
    </div>
  )
}
