import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { eq, desc } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  const data = await db.select().from(AiOutput).where(eq(AiOutput.createdBy, email)).orderBy(desc(AiOutput.createdAt)).execute()
  return NextResponse.json({ history: data })
}