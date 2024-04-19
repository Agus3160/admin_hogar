"use client"

import { useState } from "react";
import registerUser from "@/libs/api_call/register";

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16">
      
      <h1>Register</h1>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          await registerUser(formData)
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

        <button className="bg-slate-400 p-2 rounded mt-2" type="submit">Register</button>
      
        <span className="text-slate-500">*This will be a USER account</span>
      </form>

    </main>
  );
}
