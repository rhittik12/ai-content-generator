import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { eq } from 'drizzle-orm'

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  const result = await db.select().from(AiOutput).where(eq(AiOutput.createdBy, email))
  return NextResponse.json({ usage: result })
}