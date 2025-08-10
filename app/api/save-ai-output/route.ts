import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'

export async function POST(req: NextRequest) {
  const { formData, templateSlug, aiResponse, createdBy } = await req.json()
  const result = await db.insert(AiOutput).values({
    formData,
    templateSlug,
    aiResponse,
    createdBy,
    createdAt: new Date(),
  })
  return NextResponse.json({ result })
}