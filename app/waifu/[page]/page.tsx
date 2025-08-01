import { waifuData } from "@/lib/waifu-data"
import WaifuCard from "@/components/waifu-card"
import { notFound } from "next/navigation"

interface WaifuPageProps {
  params: {
    page: string
  }
}

export default function WaifuPage({ params }: WaifuPageProps) {
  const pageNum = Number.parseInt(params.page, 10)

  if (isNaN(pageNum) || pageNum < 1 || pageNum > waifuData.length) {
    notFound() // Handle invalid page numbers
  }

  const waifu = waifuData.find((w) => w.id === pageNum)

  if (!waifu) {
    notFound() // Should not happen if pageNum is valid, but good practice
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 w-full">
      <WaifuCard waifu={waifu} currentPage={pageNum} totalWaifus={waifuData.length} />
      
      {/* Additional ad placement outside the card if needed */}
      <div className="mt-8">
      </div>
    </div>
  )
}
