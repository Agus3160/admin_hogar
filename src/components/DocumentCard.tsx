import { Download } from 'lucide-react'
import React from 'react'

type Props = {
  url:string
  title:string
}

export default function DocumentCard({title, url}: Props) {
  return (
    <a target='_blank' href={url} className="hover:opacity-75">
      <div className="shadow-lg bg-white rounded-lg p-4 flex flex-col justify-center items-center gap-2 text-center">
          <Download size={48} />
          <p className="truncate">{title}</p>
      </div>
    </a>
  )
}