
import prisma from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Section } from '@/types';
import { getToken } from "next-auth/jwt";

export async function GET(){
  const sections = await prisma.section.findMany()
  if(!sections) return NextResponse.json({error:"No documents found"}, {status: 500})
  return NextResponse.json({data:sections}, {status: 200})
} 

export async function POST(req: NextRequest) {

  const token = await getToken({ req })
  if(!token) return NextResponse.json({error:"Unauthorized"}, {status: 401})

  const newSectionData:Section = await req.json()
  const section = await prisma.section.create({data:newSectionData})
  if(!section) return NextResponse.json({error:"Section not created"}, {status: 500})
  return NextResponse.json({data:section}, {status: 200})
}
