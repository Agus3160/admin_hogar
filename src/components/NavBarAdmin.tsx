"use client"

import { LogOut, Home } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function NavBarAdmin() {
  return (
    <nav className="bg-black">
      <ul className="flex p-4 justify-between">
        <li >
          <Link href="/admin">
          <div className="bg-white p-2 rounded-full">
            <Home />
            </div>
          </Link>
        </li>
        <li onClick={() => signOut({callbackUrl:"/login"})} className="flex items-center gap-2 hover:cursor-pointer" >
          <div className="bg-white p-2 rounded-full">
            <LogOut />
          </div>
          <p className="text-white">LogOut</p>
        </li>
      </ul>
    </nav>
  )
}