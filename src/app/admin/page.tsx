import { File, LayoutPanelTop } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <main className="flex flex-col items-center gap-16 my-24 mx-8">
      
      <h1 className="text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <Link href={"/admin/sections"} className="bg-white hover:bg-slate-100 shadow-md rounded-lg p-6 flex gap-2 justify-center items-center h-32 ">
          <LayoutPanelTop />
          <p>Secciones</p>
        </Link>

        <Link href={"/admin/documents"} className="bg-white hover:bg-slate-100 shadow-md rounded-lg p-6 gap-2 justify-center items-center flex h-32">
          <File />
          <p>Documentos</p>
        </Link>
      </div>

    </main>
  )
}