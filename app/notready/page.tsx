import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NotReadyPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 p-4 md:p-8 max-w-2xl w-full">
      <Image
        src="/placeholder.svg?height=300&width=400"
        width={400}
        height={300}
        alt="Voting Closed"
        className="rounded-lg shadow-lg border-2 border-pink-DEFAULT"
      />
      <h1 className="text-2xl md:text-4xl font-bold text-pink-DEFAULT">Voting Closed</h1>
      <p className="text-lg md:text-xl text-foreground">
        Our voting polls have been closed for now, please visit SUSMANGA.COM to find out more.
      </p>
      <Link href="/presusmanga">
        <Button className="px-4 py-2 bg-white text-black rounded border hover:bg-gray-200 disabled:opacity-50 font-semibold transition-colors w-[80%]">
          Learn More
        </Button>
      </Link>
    </div>
  )
}
