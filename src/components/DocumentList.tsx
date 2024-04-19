"use client"

import { Document } from '@/types'
import { useState, useEffect } from 'react'
import DocumentCard from './DocumentCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getDocumentsBySection } from "@/libs/api_call/documents/getDocumentsBySection"

type Prop = {
  sectionId: string
  sectionName: string
}

export default function DocumentList({ sectionId, sectionName }: Prop) {

  const [documents, setDocuments] = useState<Document[]>([])
  const [skip, setSkip] = useState(0)
  const [pages, setPages] = useState(0)

  useEffect(() => {
    getDocumentsBySection(sectionId, 8, skip).then((response) => {
      setDocuments(response.data?.list || [])
      setPages(response.data?.pages || 0)
    })
  }, [skip])

  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl'>{sectionName}</h2>
      <hr className="my-4"></hr>
      {
        !documents || documents.length == 0 ? 
          <p>No documents uploaded yet</p> 
        : 
        <div className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:grid-rows-2 justify-items-center gap-4'>
              {documents.map(document =>
                <DocumentCard key={document.id} title={document.title} url={document.url} />
              )}
          </div>

          <div className='flex justify-around'>
          <button className='bg-slate-500 p-3 rounded-full hover:bg-slate-600 disabled:bg-slate-500 disabled:opacity-50' disabled={skip -1 < 0} onClick={() => setSkip(skip - 8)}>
            <ChevronLeft size={32} />
          </button>
          <button className='bg-slate-500 p-3 rounded-full hover:bg-slate-600 disabled:bg-slate-500 disabled:opacity-50' disabled={skip/8 >= pages-1} onClick={() => setSkip(skip + 8)}>
            <ChevronRight size={32} />
          </button>
          </div>
        </div>
      }

    </div>

  )
}