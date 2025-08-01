"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [currentMonth, setCurrentMonth] = useState("")

  useEffect(() => {
    setCurrentMonth(new Date().toLocaleString("default", { month: "long" }))
  }, [])

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 p-4 md:p-8 max-w-3xl w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-pink-DEFAULT leading-tight">
        Top 50 Waifu of {currentMonth} voted by Susmanga.com Readers
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-pink-DEFAULT leading-tight">
        No. 51 Boa Hancock (One Piece)
      </h2>
      <Link href="/waifu/50" className="block w-full max-w-md">
        <Image
          src="https://cdn.susmanga.com/waifu/52.jpg?height=400&width=400"
          width={800}
          height={600}
          alt="Feature Image of Top Waifus"
          className="rounded-lg shadow-lg border-2 border-pink-DEFAULT hover:border-pink-DEFAULT/80 transition-colors w-full h-auto object-cover"
          priority
        />
      </Link>
      <Link href="/waifu/50">
        <Button className="bg-pink-cta text-white hover:bg-pink-DEFAULT text-xl px-10 py-5 rounded-full shadow-lg transition-colors w-full max-w-md">
          Next Waifu
        </Button>
      </Link>
    </div>
  )
}
