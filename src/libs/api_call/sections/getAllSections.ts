
import { ApiResponse, Section } from "@/types"

export const getAllSections = async () => {
  const response = await fetch('/api/sections', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data:ApiResponse<Section[]> = await response.json()
  return data
}