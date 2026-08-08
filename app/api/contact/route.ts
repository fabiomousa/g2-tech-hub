import { NextResponse } from 'next/server'
import { validateContactForm, type ContactFormData } from '@/lib/validation'
import { submitToProvider } from '@/lib/contact-providers'

export const runtime = 'nodejs'

// Limite simples de tamanho de payload para reduzir superfície de abuso.
const MAX_FIELD_LENGTH = 2000

export async function POST(request: Request) {
  let body: Partial<ContactFormData>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'JSON inválido.' }, { status: 400 })
  }

  const data: ContactFormData = {
    name: sanitize(body.name),
    company: sanitize(body.company),
    role: sanitize(body.role),
    email: sanitize(body.email),
    whatsapp: sanitize(body.whatsapp),
    employees: sanitize(body.employees),
    challenge: sanitize(body.challenge),
    message: sanitize(body.message),
    website: sanitize(body.website),
  }

  // Honeypot: campo invisível preenchido indica bot.
  if (data.website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const errors = validateContactForm(data)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 })
  }

  const result = await submitToProvider(data)

  if (!result.ok) {
    console.error('[contact:api] Falha ao encaminhar contato:', result.error)
    return NextResponse.json({ ok: false, error: 'Não foi possível processar o envio.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}

function sanitize(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value.slice(0, MAX_FIELD_LENGTH).trim()
}
