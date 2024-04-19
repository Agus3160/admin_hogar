
import prisma from "@/libs/prisma";
import { NextResponse, NextRequest } from "next/server";
import { Document } from '@/types';
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextApiRequest) {

  const token = await getToken({ req })
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})

  const documents = await prisma.document.findMany({
    include: {
      section: true
    }
  })
  if(!documents) return NextResponse.json({error:"No documents found"}, {status: 500})
  return NextResponse.json({data:documents}, {status: 200})
} 

export async function POST(req: NextRequest) {

  const token = await getToken({req})
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})

  const newDocumentData:Omit<Document, "section"> = await req.json()
  const document = await prisma.document.create({data:newDocumentData})
  if(!document) return NextResponse.json({error:"Document not created"}, {status: 500})
  return NextResponse.json({data:document}, {status: 200})
}
