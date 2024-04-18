"use client"

import { Trash, CirclePlus } from "lucide-react"
import Link from "next/link"
import { getAllSections } from "@/libs/api_call/sections/getAllSections"
import { useEffect, useState } from "react"
import { Section } from "@prisma/client"
import { deleteSection } from "@/libs/api_call/sections/deleteSection"

export default function DocumentDashboard() {

  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    getAllSections().then((data) => setSections(data.data || []))
  },[])

  const handleDeleteSelection = async (id:string) => {
    await deleteSection(id)
    setSections(sections.filter((section) => section.id !== id))
  }

  return (
    <main className="flex flex-col items-center gap-12 m-8">

      <div className="flex flex-col gap-8 items-center">
        <h1>Secciones Dashboard</h1>
        <Link href={"/admin/sections/create"} className="bg-slate-400 hover:bg-slate-500 shadow-md rounded-lg p-6 flex gap-4 items-center">
          <CirclePlus />
          <p>Agregar</p>
        </Link>
      </div>

      {
        !sections || sections.length === 0 ? (
          <p>No hay secciones</p>
        )
          :
          <table className="w-full bg-white border-collapse table-auto">
            <thead>
              <tr className="text-left border border-slate-500 ">
                <th className="p-2 border border-slate-500">Secciones</th>
                <th className="p-2 border border-slate-500">Acciones</th>
              </tr>
            </thead>
            <tbody>
              
                {
                  sections.map((section, index) => (
                    <tr key={index}>
                      <td className="p-2 border border-slate-500 w-11/12 text-left">{section.name}</td>
                      <td className="p-2 border border-slate-500" >
                        <div onClick={async () => await handleDeleteSelection(section.id)} className="bg-red-500 hover:bg-red-700 flex justify-center items-center cursor-pointer text-white font-bold w-8 h-8 m-auto rounded-full">
                          <Trash className=""/>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              
            </tbody>
          </table>
      }

    </main>
  )
}