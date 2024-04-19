"use client"

import { Trash, CirclePlus } from "lucide-react"
import Link from "next/link"
import { getAllDocuments } from "@/libs/api_call/documents/getAllDocuments"
import { useEffect, useState } from "react"
import { Document } from "@/types"
import { deleteDocument } from "@/libs/api_call/documents/deleteDocument"

export default function DocumentDashboard() {

  const [documents, setDocuments] = useState<Document[]>([])

  useEffect(() => {
    getAllDocuments().then((data) => setDocuments(data.data || []))
  },[])

  const handleDeleteDocument = async (id:string)=>{
    try{
      await deleteDocument(id)
      setDocuments(documents.filter((document) => document.id !== id))
    }catch(err){
      console.error(err)
    }
  }

  return (
    <main className="flex flex-col items-center gap-12 m-8">

      <div className="flex flex-col gap-8 items-center">
        <h1>Documentos</h1>
        <Link href={"/admin/documents/create"} className="bg-slate-400 hover:bg-slate-500 shadow-md rounded-lg p-6 flex gap-4 items-center">
          <CirclePlus />
          <p>Agregar</p>
        </Link>
      </div>

      {
        !documents || documents.length === 0 ? (
          <p>No hay Documentos</p>
        )
          :
          <table className="w-full bg-white border-collapse table-auto">
            <thead>
              <tr className="text-left border border-slate-500 ">
                <th className="p-2 border border-slate-500">Documentos</th>
                <th className="p-2 border border-slate-500">Seccion</th>
                <th className="p-2 border border-slate-500">Acciones</th>
              </tr>
            </thead>
            <tbody>
              
                {
                  documents.map((document, index) => (
                    <tr key={index}>
                      <td className="p-2 border border-slate-500 text-left"><Link className="text-blue-500 hover:text-blue-700 " href={document.url}>{document.title}</Link></td>
                      <td className="p-2 border border-slate-500 text-left">{document.section.name}</td>
                      <td className="p-2 border border-slate-500 w-1/5" >
                        <div onClick={async() =>await handleDeleteDocument(document.id)} className="bg-red-500 hover:bg-red-700 flex justify-center items-center cursor-pointer text-white font-bold w-8 h-8 m-auto rounded-full">
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