import { NextResponse } from "next/server"
import prisma from "@/libs/prisma"
import bcrypt from "bcrypt"

type Credentials = {
  email: string
  password: string
}

export async function POST(req:Request){
  const data:Credentials = await req.json()
  
  if(!data.email || !data.password || data.email === "" || data.password === ""){
    return NextResponse.json({succes:false, message:"Email and password are required"}, {status:400})
  }

  if(await prisma.user.findUnique({where:{email:data.email}})){
    return NextResponse.json({succes:false, message:"Email already exists"}, {status:400})
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword
    }
  })

  if(!user){
    return NextResponse.json({succes:false, message:"Error creating user"}, {status:500})
  }

  return NextResponse.json({succes:true, message:"User created correctly"})
}