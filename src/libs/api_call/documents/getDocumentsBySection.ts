import { Document, DataPagination, ApiResponse } from '@/types'

export const getDocumentsBySection = async (sectionId:string, limit:number, skip:number) => {

  const response = await fetch(`/api/sections/${sectionId}/documents?limit=${limit}&skip=${skip}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return await response.json()

}