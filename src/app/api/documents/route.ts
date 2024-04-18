
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import { Document } from '@/types';

export async function GET(){
  const documents = await prisma.document.findMany({
    include: {
      section: true
    }
  })
  if(!documents) return NextResponse.json({error:"No documents found"}, {status: 500})
  return NextResponse.json({data:documents}, {status: 200})
} 

export async function POST(req: Request) {
  const newDocumentData:Omit<Document, "section"> = await req.json()
  console.log(newDocumentData)
  const document = await prisma.document.create({data:newDocumentData})
  if(!document) return NextResponse.json({error:"Document not created"}, {status: 500})
  return NextResponse.json({data:document}, {status: 200})
}
