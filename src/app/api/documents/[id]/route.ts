
import prisma from "@/libs/prisma";
import { NextResponse, NextRequest } from "next/server";
import { Document } from '@/types';

export async function DELETE(req:Request, {params}:{params:{id:string}}){
  const id = params.id
  const document = await prisma.document.delete({where:{id}})
  if(!document) return NextResponse.json({error:"Document not deleted"}, {status: 500})
  return NextResponse.json({message: "Document deleted"}, {status: 200})
} 

export async function PUT(req: Request, {params}:{params:{id:string}}) {
  const id = params.id
  const newDocumentData:Document = await req.json()
  const document = await prisma.document.update({where:{id}, data:newDocumentData})
  if(!document) return NextResponse.json({error:"Document not updated"}, {status: 500})
  return NextResponse.json({data:document}, {status: 200})
}

export async function GET(req: Request, {params}:{params:{id:string}}) {
  const id = params.id
  const document = await prisma.document.findUnique({where:{id}})
  if(!document) return NextResponse.json({error:"Document not found"}, {status: 500})
  return NextResponse.json({data:document}, {status: 200})
}
