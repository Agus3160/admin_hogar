
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import { Section } from '@/types';

export async function DELETE(req:Request, {params}:{params:{id:string}}){
  const id = params.id
  const section = await prisma.section.delete({where:{id}})
  if(!section) return NextResponse.json({error:"Document not deleted"}, {status: 500})
  return NextResponse.json({message: "Document deleted"}, {status: 200})
} 

export async function PUT(req: Request, {params}:{params:{id:string}}) {
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
