import Link from "next/link"
import LanguageSelector from "./language-selector"

export default function Header() {
  return (
    <header className="w-full py-4 px-4 md:px-6 flex items-center justify-between border-b border-pink-DEFAULT">
      <div className="flex-grow flex justify-center">
        <Link
          href="/presusmanga"
          className="text-2xl font-bold text-pink-DEFAULT hover:text-pink-DEFAULT/80 transition-colors"
        >
          SUSMANGA.COM
        </Link>
      </div>
      <div className="flex-shrink-0">
        <LanguageSelector />
      </div>
    </header>
  )
}
