"use client"

import { CirclePlus, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { createSection } from "@/libs/api_call/sections/createSection"

export default function DocumentDashboard() {

  const [formData, setFormData] = useState({
    section: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <main className="flex flex-col items-center gap-12 m-8">
      
      <div className="flex flex-col gap-8 items-center">
        <h1>Agregar una Seccion</h1>

        <form
          className="flex flex-col gap-4 "
          onSubmit={async (e) => {
            e.preventDefault()
            await createSection(formData.section)
            setFormData({ section: "" })
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="section">Seccion</label>
            <input className="p-2 rounded" onChange={handleChange} type="text" placeholder="Seccion" name="section" id="section" />
          </div>

          <div className="flex gap-8">
            <button type="submit" className="bg-slate-400 hover:bg-slate-500 shadow-md rounded-lg p-4 flex gap-2 items-center">
              <CirclePlus />
              <p>Agregar</p>
            </button>

            
            <Link className="bg-slate-400  hover:bg-slate-500 shadow-md rounded-lg p-4 flex gap-2 items-center" href="/admin/sections">
              <ChevronLeft />
              <p>Volver</p>
            </Link>
          </div>

        </form>

      </div>

    </main>
  )
}