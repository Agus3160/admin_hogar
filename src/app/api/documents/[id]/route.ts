
import prisma from "@/libs/prisma";
import { NextResponse, NextRequest } from "next/server";
import { Document } from '@/types';
import { getToken } from "next-auth/jwt";

export async function DELETE(req:NextRequest, {params}:{params:{id:string}}){
  
  const token = await getToken({ req })
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})
  
    const id = params.id
  const document = await prisma.document.delete({where:{id}})
  if(!document) return NextResponse.json({error:"Document not deleted"}, {status: 500})
  return NextResponse.json({message: "Document deleted"}, {status: 200})
} 

export async function PUT(req: NextRequest, {params}:{params:{id:string}}) {

  const token = await getToken({ req })
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})

  const id = params.id
  const newDocumentData:Omit<Document,"section"> = await req.json()
  const document = await prisma.document.update({where:{id}, data:newDocumentData})
  if(!document) return NextResponse.json({error:"Document not updated"}, {status: 500})
  return NextResponse.json({data:document}, {status: 200})
}

export async function GET(req: NextRequest, {params}:{params:{id:string}}) {

  const token = await getToken({ req })
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})

  const id = params.id
  const document = await prisma.document.findUnique({where:{id}})
  if(!document) return NextResponse.json({error:"Document not found"}, {status: 500})
  return NextResponse.json({data:document}, {status: 200})
}
