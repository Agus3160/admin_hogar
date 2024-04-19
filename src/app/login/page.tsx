"use client"

import { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Home() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const router = useRouter()

  return (
    <main  className="flex min-h-screen flex-col items-center justify-center gap-16">
      
      <h1>Login</h1>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const res = await signIn("credentials", {...formData, redirect: false})
          if (res?.error) {
            setErrorMessage(res.error)
          }else{
            router.push("/admin")
          }

        }}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input className="p-2 rounded" onChange={handleChange} type="email" name="email" id="email" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input className="p-2 rounded" onChange={handleChange} type="password" name="password" id="password" />
        </div>

        <button className="bg-slate-400 p-2 rounded mt-2" type="submit">Login</button>

        {errorMessage.length > 0 && <span className="text-red-500 text-sm text-center">{errorMessage}</span>}

      </form>

    </main>
  );
}
