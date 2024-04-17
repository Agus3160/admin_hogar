import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
  link:string
  text:string
}

export default function InformationCard({text, link}: Props) {
  return (
    <Link href={link} className="hover:opacity-75">
      <div className="shadow-lg bg-white rounded-lg p-4 flex flex-col justify-center items-center gap-2 w-48 text-center">
          <Download size={64} />
          <p>{text}</p>
      </div>
    </Link>
  )
}