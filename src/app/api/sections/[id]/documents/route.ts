import { type NextRequest, NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

  const searchParams = request.nextUrl.searchParams
  
  const id = params.id

  const limit = searchParams.get('limit')
  const skip = searchParams.get('skip')

  if(!limit || !skip) return NextResponse.json({error:"Missing limit or skip"}, {status: 400})   
  
  const numLimit = parseInt(limit)
  const numSkip = parseInt(skip)
  
  if(isNaN(numLimit) || isNaN(numSkip)) return NextResponse.json({error:"Invalid limit or skip"}, {status: 400})

  const documents = await prisma.document.findMany({
    where: {
      sectionId: id
    },
    skip: numSkip,
    take: numLimit
  })

  const count = await prisma.document.count({
    where: {
      sectionId: id
    }
  })

  const pages = Math.ceil(count / numLimit)

  if(!documents) return NextResponse.json({error:"Error getting documents"}, {status: 500})

  return NextResponse.json({data:{list:documents, pages:pages}}, {status: 200})

}