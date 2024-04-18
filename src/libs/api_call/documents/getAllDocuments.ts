
import { ApiResponse, Document } from "@/types"

export const getAllDocuments = async () => {
  const response = await fetch('/api/documents', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data:ApiResponse<Document[]> = await response.json()
  return data
}