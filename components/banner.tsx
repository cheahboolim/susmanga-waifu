import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface BannerProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  backgroundImage: string
}

export default function Banner({ title, subtitle, buttonText, buttonLink, backgroundImage }: BannerProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center text-center">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center p-4 space-y-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-DEFAULT leading-tight drop-shadow-lg">{title}</h1>
        <p className="text-lg md:text-xl text-foreground drop-shadow-md">{subtitle}</p>
        <Link href={buttonLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-pink-cta text-white hover:bg-pink-DEFAULT text-xl px-10 py-5 rounded-full shadow-lg transition-colors">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  )
}
