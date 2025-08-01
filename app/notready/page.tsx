import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
    </div>
  )
}
