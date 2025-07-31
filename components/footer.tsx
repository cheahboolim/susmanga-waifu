import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-4 px-4 md:px-6 flex items-center justify-center border-t border-pink-DEFAULT">
      <Link
        href="https://susmanga.com?ref=waifufooter"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-pink-DEFAULT hover:text-pink-DEFAULT/80 transition-colors mr-4"
      >
        susmanga.com
      </Link>
      <Link href="/" className="text-sm text-pink-DEFAULT hover:text-pink-DEFAULT/80 transition-colors">
        Waifu List
      </Link>
    </footer>
  )
}
