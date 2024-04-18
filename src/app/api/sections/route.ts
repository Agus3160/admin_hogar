
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import { Section } from '@/types';

export async function GET(){
  const sections = await prisma.section.findMany()
  if(!sections) return NextResponse.json({error:"No documents found"}, {status: 500})
  return NextResponse.json({data:sections}, {status: 200})
} 

export async function POST(req: Request) {
  const newSectionData:Section = await req.json()
  const section = await prisma.section.create({data:newSectionData})
  if(!section) return NextResponse.json({error:"Section not created"}, {status: 500})
  return NextResponse.json({data:section}, {status: 200})
}
