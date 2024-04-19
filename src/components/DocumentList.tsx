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
    <div className='flex flex-col gap-6 bg-slate-100 p-8 rounded shadow-md'>
      <h2 className='text-2xl font-bold'>{sectionName}</h2>
      {
        !documents || documents.length == 0 ? 
          <p>No documents uploaded yet</p> 
        : 
        <div className='flex flex-col gap-4'>
          <div className={'grid grid-cols-2 sm:grid-cols-4 justify-items-center gap-4' + (documents.length <= 4 ? ' sm:grid-cols-1' : ' sm:grid-cols-2')}>
              {documents.map(document =>
                <DocumentCard key={document.id} title={document.title} url={document.url} />
              )}
          </div>

          <div className='flex justify-between gap-8 mt-6'>
            <button className='bg-slate-500 flex items-center sm:w-1/3 p-3 rounded hover:bg-slate-600 disabled:bg-slate-500 disabled:opacity-50' disabled={skip -1 < 0} onClick={() => setSkip(skip - 8)}>
              <ChevronLeft size={32} />
              Previo
            </button>
            <button className='bg-slate-500 flex items-center sm:w-1/3 p-3 rounded hover:bg-slate-600 disabled:bg-slate-500 disabled:opacity-50' disabled={skip/8 >= pages-1} onClick={() => setSkip(skip + 8)}>
              <ChevronRight size={32} />
              Siguiente
            </button>
          </div>
        </div>
      }

    </div>

  )
}