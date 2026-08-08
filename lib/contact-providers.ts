import type { ContactFormData } from './validation'

export type ContactProvider = 'mock' | 'resend' | 'formspree' | 'hubspot' | 'pipedrive' | 'custom'

type ProviderResult = { ok: true } | { ok: false; error: string }

/**
 * Camada de integração do formulário de contato. O provedor ativo é
 * definido por CONTACT_FORM_PROVIDER (ver .env.example). Sem nenhuma
 * variável configurada, o sistema roda em modo "mock" — válido para
 * desenvolvimento local e para exibir o fluxo completo do formulário
 * sem depender de um fornecedor externo.
 */
export async function submitToProvider(data: ContactFormData): Promise<ProviderResult> {
  const provider = (process.env.CONTACT_FORM_PROVIDER as ContactProvider | undefined) ?? 'mock'

  switch (provider) {
    case 'mock':
      return submitMock(data)
    case 'resend':
      return submitResend(data)
    case 'formspree':
      return submitFormspree(data)
    case 'hubspot':
      return submitHubspot(data)
    case 'pipedrive':
      return submitPipedrive(data)
    case 'custom':
      return submitCustom(data)
    default:
      return submitMock(data)
  }
}

async function submitMock(data: ContactFormData): Promise<ProviderResult> {
  // Em desenvolvimento, apenas registra a submissão no log do servidor.
  console.info('[contact:mock] Nova submissão de contato', {
    name: data.name,
    company: data.company,
    email: data.email,
    challenge: data.challenge,
  })
  return { ok: true }
}

async function submitResend(data: ContactFormData): Promise<ProviderResult> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL_TO
  const from = process.env.CONTACT_EMAIL_FROM

  if (!apiKey || !to || !from) {
    return { ok: false, error: 'Integração com Resend incompleta: defina RESEND_API_KEY, CONTACT_EMAIL_TO e CONTACT_EMAIL_FROM.' }
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Novo contato via site — ${data.company}`,
      html: renderContactEmail(data),
    }),
  })

  return response.ok ? { ok: true } : { ok: false, error: 'Falha ao enviar via Resend.' }
}

async function submitFormspree(data: ContactFormData): Promise<ProviderResult> {
  const formId = process.env.FORMSPREE_FORM_ID
  if (!formId) return { ok: false, error: 'FORMSPREE_FORM_ID não configurado.' }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  })

  return response.ok ? { ok: true } : { ok: false, error: 'Falha ao enviar via Formspree.' }
}

async function submitHubspot(data: ContactFormData): Promise<ProviderResult> {
  const portalId = process.env.HUBSPOT_PORTAL_ID
  const formId = process.env.HUBSPOT_FORM_ID
  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN

  if (!portalId || !formId) {
    return { ok: false, error: 'HUBSPOT_PORTAL_ID e HUBSPOT_FORM_ID precisam estar configurados.' }
  }

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify({
        fields: [
          { name: 'name', value: data.name },
          { name: 'company', value: data.company },
          { name: 'jobtitle', value: data.role },
          { name: 'email', value: data.email },
          { name: 'phone', value: data.whatsapp },
          { name: 'message', value: data.message },
        ],
      }),
    },
  )

  return response.ok ? { ok: true } : { ok: false, error: 'Falha ao enviar via HubSpot.' }
}

async function submitPipedrive(data: ContactFormData): Promise<ProviderResult> {
  const apiToken = process.env.PIPEDRIVE_API_TOKEN
  const domain = process.env.PIPEDRIVE_DOMAIN

  if (!apiToken || !domain) {
    return { ok: false, error: 'PIPEDRIVE_API_TOKEN e PIPEDRIVE_DOMAIN precisam estar configurados.' }
  }

  const response = await fetch(`https://${domain}.pipedrive.com/api/v1/leads?api_token=${apiToken}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: `${data.company} — ${data.challenge}`,
      person_name: data.name,
      organization_name: data.company,
      note: data.message,
    }),
  })

  return response.ok ? { ok: true } : { ok: false, error: 'Falha ao enviar via Pipedrive.' }
}

async function submitCustom(data: ContactFormData): Promise<ProviderResult> {
  const endpoint = process.env.CONTACT_FORM_ENDPOINT
  if (!endpoint) return { ok: false, error: 'CONTACT_FORM_ENDPOINT não configurado.' }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return response.ok ? { ok: true } : { ok: false, error: 'Falha ao enviar para endpoint customizado.' }
}

function renderContactEmail(data: ContactFormData): string {
  return `
    <h2>Novo contato via site — G2 Tech Hub</h2>
    <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Cargo:</strong> ${escapeHtml(data.role)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>WhatsApp:</strong> ${escapeHtml(data.whatsapp)}</p>
    <p><strong>Funcionários:</strong> ${escapeHtml(data.employees)}</p>
    <p><strong>Principal desafio:</strong> ${escapeHtml(data.challenge)}</p>
    <p><strong>Mensagem:</strong><br />${escapeHtml(data.message)}</p>
  `
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
