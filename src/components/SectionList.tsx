"use client"

import { Section } from '@/types'
import { useState, useEffect } from 'react'
import { getAllSections } from '@/libs/api_call/sections/getAllSections'
import DocumentList from './DocumentList'

export default function SectionList() {

  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    getAllSections().then((response) => {
      setSections(response.data || [])
    })
  }, [])

  return (
    <div className='flex flex-col'>
      {
        !sections || sections.length == 0 ? 
          <p>No sections uploaded yet</p> 
        : 
        sections.map(section => <DocumentList key={section.id} sectionId={section.id} sectionName={section.name} />)
      }

    </div>

  )
}