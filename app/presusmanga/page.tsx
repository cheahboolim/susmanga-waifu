import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PresusmangaPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 p-4 md:p-8 max-w-2xl w-full">
      <h1 className="text-2xl md:text-4xl font-bold text-pink-DEFAULT">SUSMANGA.COM</h1>
      <p className="text-lg md:text-xl text-foreground">
        Susmanga.com is one of the world&apos;s leading reading and sharing platform, we update our content hourly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="https://susmanga.com/?utm_source=facebook.com&utm_medium=propellerads&utm_campaign=waifu&utm_id=waifu&utm_term=top50waifu&utm_content=top50waifu" target="_blank" rel="noopener noreferrer">
          <Button className="bg-pink-cta text-white hover:bg-pink-DEFAULT text-xl px-10 py-5 rounded-full shadow-lg transition-colors w-full max-w-md">
            Visit SUSMANGA.COM
          </Button>
        </Link>
      </div>
    </div>
  )
}
