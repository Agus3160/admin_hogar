"use client"

import { CirclePlus, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { createDocument } from "@/libs/api_call/documents/createDocument"
import { getAllSections } from "@/libs/api_call/sections/getAllSections"
import { Section } from "@/types"

export default function DocumentCreate() {

  const [formData, setFormData] = useState({
    title: "",
    url: "",
    sectionId: ""
  })

  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    getAllSections().then((data) => setSections(data.data||[]))
  },[])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    console.log(formData)
  }

  return (
    <main className="flex flex-col items-center gap-12 m-8">
      
      <div className="flex flex-col gap-8 items-center">
        <h1>Agregar una Seccion</h1>

        <form
          className="flex flex-col gap-4  "
          onSubmit={async (e) => {
            e.preventDefault()
            await createDocument(formData)
            setFormData({ title: "", url: "", sectionId: "" })
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="sectionId">Seccion</label>
            <select className="p-2 rounded" onChange={handleChange} name="sectionId" id="sectionId">
              <option value="">Seleccione una seccion</option>
              {
                sections.map((section) => <option key={section.id} value={section.id}>{section.name}</option>)
              }
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="title">Titulo</label>
            <input className="p-2 rounded" value={formData.title} onChange={handleChange} type="text" placeholder="titulo" name="title" id="title" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="url">Url</label>
            <input className="p-2 rounded" value={formData.url} onChange={handleChange} type="text" placeholder="url" name="url" id="url" />
          </div>

          <div className="flex gap-8">
            <button type="submit" className="bg-slate-400 hover:bg-slate-500 shadow-md rounded-lg p-4 flex gap-2 items-center">
              <CirclePlus />
              <p>Agregar</p>
            </button>

            
            <Link className="bg-slate-400  hover:bg-slate-500 shadow-md rounded-lg p-4 flex gap-2 items-center" href="/admin/documents">
              <ChevronLeft />
              <p>Volver</p>
            </Link>
          </div>
          
        </form>

      </div>

    </main>
  )
}