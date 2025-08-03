"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import HighPerformanceAd from "@/components/ui/Ads/HighPerformanceAd"
import ExoClickAd from "@/components/ui/Ads/ExoClickAd" // Import ExoClickAd
import Banner from "@/components/banner"

export default function PresusmangaPage() {
  const comicCards = [
    {
      title: "Latest Manga",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/1.jpg?height=500&width=300",
    },
    {
      title: "Top Weekly",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/2.jpg?height=500&width=300",
    },
    {
      title: "Most Favourite",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/3.jpg?height=500&width=300",
    },
    {
      title: "Trending Now",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/4.jpg?height=500&width=300",
    },
    {
      title: "Editor's Pick",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/5.jpg?height=500&width=300",
    },
    {
      title: "Waifu List",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/6.jpg?height=500&width=300",
    },
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <Banner
        title="SUSMANGA.COM"
        subtitle="Fastest Updates Thousands of Selections"
        buttonText="BROWSE ALL MANGA"
        buttonLink="https://susmanga.com/?utm_source=presusmanga_banner&utm_medium=website&utm_campaign=presusmanga_banner_cta"
        backgroundImage="https://cdn.susmanga.com/homepage/waifu-background.jpg?height=600&width=1200"
      />

      {/* HighPerformanceAd is placed below the banner */}
      <div className="w-[300px] h-[300px] flex items-center justify-center mx-auto mt-8">
        <HighPerformanceAd />
      </div>

      {/* ExoClickAd is placed below the HighPerformanceAd */}
      <div className="mt-8 w-full max-w-xl">
        <ExoClickAd />
      </div>

      <div className="flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-DEFAULT mb-8 text-center">Browse Our Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {comicCards.map((card, index) => (
            <Link href={card.link} target="_blank" rel="noopener noreferrer" key={index}>
              <Card className="w-full h-full bg-black border-pink-DEFAULT shadow-lg rounded-lg overflow-hidden hover:border-pink-DEFAULT/80 transition-colors cursor-pointer">
                <CardHeader className="text-center p-4 border-b border-pink-DEFAULT">
                  <CardTitle className="text-xl md:text-2xl font-bold text-pink-DEFAULT">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 flex justify-center">
                  <div className="w-[300px] h-[500px]">
                    <Image
                      src={card.imageUrl || "/placeholder.svg"}
                      width={300}
                      height={500}
                      alt={`Image for ${card.title}`}
                      className="rounded-md object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
