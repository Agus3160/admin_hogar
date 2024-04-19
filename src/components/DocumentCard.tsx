import { Download } from 'lucide-react'
import React from 'react'

type Props = {
  url:string
  title:string
}

export default function DocumentCard({title, url}: Props) {
  return (
    <a target='_blank' href={url} className="shadow-lg bg-white rounded-lg p-4 hover:bg-slate-200">
      <div className='flex flex-col justify-center items-center w-32 h-32 gap-2 text-center' >
          <Download size={48} />
          <p className="text-ellipsis overflow-hidden">{title}</p>
      </div>
    </a>
  )
}