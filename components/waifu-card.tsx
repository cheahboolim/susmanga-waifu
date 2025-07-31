import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import type { Waifu } from "@/lib/waifu-data"

interface WaifuCardProps {
  waifu: Waifu
  currentPage: number
  totalWaifus: number
}

export default function WaifuCard({ waifu, currentPage, totalWaifus }: WaifuCardProps) {
  const nextWaifuRank = currentPage - 1
  const prevWaifuRank = currentPage + 1

  const hasNext = nextWaifuRank >= 1
  const hasPrevious = prevWaifuRank <= totalWaifus

  return (
    <Card className="w-full max-w-md bg-black border-pink-DEFAULT shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="text-center p-4 border-b border-pink-DEFAULT">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-DEFAULT">
          No. {waifu.id} {waifu.name}
        </h2>
      </CardHeader>
      <CardContent className="p-4 flex flex-col items-center gap-4">
        <Image
          src={waifu.image || "/placeholder.svg"}
          width={400}
          height={400}
          alt={waifu.name}
          className="rounded-md border-2 border-pink-DEFAULT object-cover w-full h-auto max-h-[400px]"
        />
        <div className="flex gap-4 w-full justify-center">
          <Link href="/notready">
            <Button className="bg-pink-cta text-white hover:bg-pink-DEFAULT flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition-colors">
              <ThumbsUp className="h-5 w-5" /> Vote Up
            </Button>
          </Link>
          <Link href="/notready">
            <Button
              variant="outline"
              className="border-pink-DEFAULT text-pink-DEFAULT hover:bg-pink-DEFAULT/10 flex items-center gap-2 px-4 py-2 rounded-full shadow-md transition-colors bg-transparent"
            >
              <ThumbsDown className="h-5 w-5" /> Vote Down
            </Button>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 p-4 border-t border-pink-DEFAULT">
        <div className="bg-secondary p-4 rounded-md border border-pink-DEFAULT/50 text-center text-sm text-muted-foreground">
          <p>SUSMANGA.COM is a world leading reading platform that updates daily, visit SUSMANGA.COM to learn more.</p>
          <Link href="/presusmanga" className="mt-2 block">
            <Button variant="link" className="text-pink-DEFAULT hover:text-pink-DEFAULT/80">
              Visit SUSMANGA.COM
            </Button>
          </Link>
        </div>
        <div className="flex justify-between w-full">
          <Link href={hasPrevious ? `/waifu/${prevWaifuRank}` : "#"} passHref>
            <Button
              variant="outline"
              className="px-4 py-2 bg-white text-black rounded border hover:bg-gray-200 disabled:opacity-50 font-semibold transition-colors"
              disabled={!hasPrevious}
            >
              Previous Waifu
            </Button>
          </Link>
          <Link href={hasNext ? `/waifu/${nextWaifuRank}` : "#"} passHref>
            <Button
              variant="outline"
              className="px-4 py-2 bg-pink-cta text-white rounded border hover:bg-pink-DEFAULT disabled:opacity-50 font-semibold transition-colors"
              disabled={!hasNext}
            >
              Next Waifu
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
