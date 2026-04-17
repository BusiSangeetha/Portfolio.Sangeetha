import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface ContactMessage {
  id: string
  name: string
  email: string
  message: string
  timestamp: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json')

async function ensureDataFile() {
  try {
    await fs.access(DATA_DIR)
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true })
  }

  try {
    await fs.access(MESSAGES_FILE)
  } catch {
    await fs.writeFile(MESSAGES_FILE, JSON.stringify([]))
  }
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateMessage(data: { name?: string; email?: string; message?: string }) {
  const errors: string[] = []

  if (!data.name || !data.name.trim()) {
    errors.push('Name is required')
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.message || !data.message.trim()) {
    errors.push('Message is required')
  }

  if (data.message && data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

export async function POST(request: NextRequest) {
  try {
    // Ensure data directory and file exist
    await ensureDataFile()

    // Parse request body
    let data
    try {
      data = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    // Validate input
    const validation = validateMessage(data)
    if (!validation.isValid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      )
    }

    // Read existing messages
    let messages: ContactMessage[] = []
    try {
      const fileContent = await fs.readFile(MESSAGES_FILE, 'utf-8')
      messages = JSON.parse(fileContent)
    } catch {
      messages = []
    }

    // Create new message
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name: data.name.trim(),
      email: data.email.trim(),
      message: data.message.trim(),
      timestamp: new Date().toISOString(),
    }

    // Add to messages and save
    messages.push(newMessage)
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
        data: newMessage,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve all messages (optional, for admin purposes)
export async function GET(request: NextRequest) {
  try {
    await ensureDataFile()

    const fileContent = await fs.readFile(MESSAGES_FILE, 'utf-8')
    const messages = JSON.parse(fileContent)

    return NextResponse.json(
      {
        success: true,
        count: messages.length,
        messages,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('GET Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve messages' },
      { status: 500 }
    )
  }
}
