/**
 * Validação do formulário de contato, compartilhada entre o componente de
 * formulário (client) e a rota de API (server), garantindo consistência.
 */

export const challengeOptions = [
  'Gestão',
  'Processos',
  'Projetos',
  'Governança',
  'Crescimento',
  'Outro',
] as const

export type ChallengeOption = (typeof challengeOptions)[number]

export const employeeRangeOptions = [
  'Até 10',
  '11 a 50',
  '51 a 100',
  '101 a 200',
  'Mais de 200',
] as const

export type EmployeeRange = (typeof employeeRangeOptions)[number]

export type ContactFormData = {
  name: string
  company: string
  role: string
  email: string
  whatsapp: string
  employees: string
  challenge: string
  message: string
  /** Honeypot anti-spam: deve chegar vazio. */
  website: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Informe seu nome completo.'
  }

  if (!data.company.trim()) {
    errors.company = 'Informe o nome da empresa.'
  }

  if (!data.role.trim()) {
    errors.role = 'Informe seu cargo.'
  }

  if (!data.email.trim() || !emailPattern.test(data.email.trim())) {
    errors.email = 'Informe um e-mail válido.'
  }

  if (!data.whatsapp.trim() || data.whatsapp.replace(/\D/g, '').length < 10) {
    errors.whatsapp = 'Informe um WhatsApp válido, com DDD.'
  }

  if (!data.employees.trim()) {
    errors.employees = 'Selecione o número de funcionários.'
  }

  if (!data.challenge.trim()) {
    errors.challenge = 'Selecione o principal desafio.'
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Conte brevemente o desafio (mínimo de 10 caracteres).'
  }

  return errors
}

export function isContactFormValid(data: ContactFormData): boolean {
  return Object.keys(validateContactForm(data)).length === 0
}
