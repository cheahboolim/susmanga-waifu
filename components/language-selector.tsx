"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LanguageSelector() {
  const [language, setLanguage] = useState("English")

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const browserLanguage = navigator.language || navigator.languages[0]
      // A more robust mapping for display purposes.
      // In a real app, you'd have a more comprehensive i18n setup.
      if (browserLanguage.startsWith("zh")) {
        setLanguage("中文") // Chinese
      } else if (browserLanguage.startsWith("ar")) {
        setLanguage("العربية") // Arabic
      } else if (browserLanguage.startsWith("id")) {
        setLanguage("Bahasa Indonesia") // Indonesian
      } else if (browserLanguage.startsWith("ms")) {
        setLanguage("Bahasa Melayu") // Malay
      } else if (browserLanguage.startsWith("pt")) {
        setLanguage("Português") // Portuguese
      } else if (browserLanguage.startsWith("fr")) {
        setLanguage("Français") // French
      } else if (browserLanguage.startsWith("ru")) {
        setLanguage("Русский") // Russian
      } else if (browserLanguage.startsWith("de")) {
        setLanguage("Deutsch") // German
      } else if (browserLanguage.startsWith("ja")) {
        setLanguage("日本語") // Japanese
      } else if (browserLanguage.startsWith("es")) {
        setLanguage("Español") // Spanish
      } else {
        setLanguage("English")
      }
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 text-pink-DEFAULT hover:text-pink-DEFAULT/80">
          <Globe className="h-5 w-5" />
          <span className="hidden sm:inline">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border-pink-DEFAULT text-foreground">
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("English")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("中文")}>
          中文
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("العربية")}>
          العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-pink-DEFAULT/20 cursor-pointer"
          onClick={() => setLanguage("Bahasa Indonesia")}
        >
          Bahasa Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-pink-DEFAULT/20 cursor-pointer"
          onClick={() => setLanguage("Bahasa Melayu")}
        >
          Bahasa Melayu
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("Português")}>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("Français")}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("Русский")}>
          Русский
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("Deutsch")}>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("日本語")}>
          日本語
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-pink-DEFAULT/20 cursor-pointer" onClick={() => setLanguage("Español")}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
