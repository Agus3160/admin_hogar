
import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Section } from '@/types';
import { getToken } from "next-auth/jwt";

export async function DELETE(req:NextRequest, {params}:{params:{id:string}}){

  const token = await getToken({ req })
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})

  const id = params.id
  const section = await prisma.section.delete({where:{id}})
  if(!section) return NextResponse.json({error:"Document not deleted"}, {status: 500})
  return NextResponse.json({message: "Document deleted"}, {status: 200})
} 

export async function PUT(req: NextRequest, {params}:{params:{id:string}}) {

  const token = await getToken({ req })
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})

  const id = params.id
  const newSectionData:Section = await req.json()
  const section = await prisma.section.update({where:{id}, data:newSectionData})
  if(!section) return NextResponse.json({error:"Document not updated"}, {status: 500})
  return NextResponse.json({data:section}, {status: 200})
}

export async function GET(req: Request, {params}:{params:{id:string}}) {
  const id = params.id
  const section = await prisma.section.findUnique({where:{id}})
  if(!section) return NextResponse.json({error:"Document not found"}, {status: 500})
  return NextResponse.json({data:section}, {status: 200})
}
