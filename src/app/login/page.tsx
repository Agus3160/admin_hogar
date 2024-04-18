"use client"

import { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Home() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      
      <h1>Login</h1>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const res = await signIn("credentials", {...formData, redirect: false})

          console.log(res)

          if (res?.error) {
            alert(res.error)
          }else{
            router.push("/admin")
          }

        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="email" name="email" id="email" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} type="password" name="password" id="password" />
        </div>

        <button className="bg-slate-400 rounded mt-2" type="submit">Login</button>
      </form>

    </main>
  );
}
