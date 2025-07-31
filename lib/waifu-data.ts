export interface Waifu {
  id: number
  name: string
  image: string
}

export const waifuData: Waifu[] = Array.from({ length: 50 }, (_, i) => ({
  id: 50 - i, // Ranks from 50 down to 1
  name: `Waifu Name No. ${50 - i}`,
  image: `/placeholder.svg?height=400&width=400&query=anime waifu character ${50 - i}`,
}))
