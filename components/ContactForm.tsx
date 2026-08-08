'use client'

import { useRef, useState, type FormEvent } from 'react'
import {
  challengeOptions,
  employeeRangeOptions,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from '@/lib/validation'
import { trackEvent } from '@/lib/events'
import { CheckIcon } from './icons'

const initialData: ContactFormData = {
  name: '',
  company: '',
  role: '',
  email: '',
  whatsapp: '',
  employees: '',
  challenge: '',
  message: '',
  website: '',
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const hasStartedRef = useRef(false)

  function handleChange<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true
      trackEvent('form_start')
    }
    setData((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateContactForm(data)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) return

    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Falha ao enviar formulário')

      trackEvent('form_submit')
      setStatus('success')
      setData(initialData)
      hasStartedRef.current = false
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-lg border border-teal/30 bg-teal/10 p-10 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="text-navy">Mensagem enviada.</h3>
        <p className="max-w-sm text-sm text-ink-soft">
          Obrigado pelo contato. Nossa equipe vai analisar as informações e retornar em breve.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot anti-spam — invisível para usuários reais */}
      <input
        type="text"
        name="website"
        value={data.website}
        onChange={(e) => handleChange('website', e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field label="Nome" htmlFor="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          value={data.name}
          onChange={(e) => handleChange('name', e.target.value)}
          aria-invalid={!!errors.name}
          className={inputClasses(!!errors.name)}
          autoComplete="name"
        />
      </Field>

      <Field label="Empresa" htmlFor="company" error={errors.company}>
        <input
          id="company"
          name="company"
          type="text"
          value={data.company}
          onChange={(e) => handleChange('company', e.target.value)}
          aria-invalid={!!errors.company}
          className={inputClasses(!!errors.company)}
          autoComplete="organization"
        />
      </Field>

      <Field label="Cargo" htmlFor="role" error={errors.role}>
        <input
          id="role"
          name="role"
          type="text"
          value={data.role}
          onChange={(e) => handleChange('role', e.target.value)}
          aria-invalid={!!errors.role}
          className={inputClasses(!!errors.role)}
          autoComplete="organization-title"
        />
      </Field>

      <Field label="E-mail" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={(e) => handleChange('email', e.target.value)}
          aria-invalid={!!errors.email}
          className={inputClasses(!!errors.email)}
          autoComplete="email"
        />
      </Field>

      <Field label="WhatsApp" htmlFor="whatsapp" error={errors.whatsapp}>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="(00) 00000-0000"
          value={data.whatsapp}
          onChange={(e) => handleChange('whatsapp', e.target.value)}
          aria-invalid={!!errors.whatsapp}
          className={inputClasses(!!errors.whatsapp)}
          autoComplete="tel"
        />
      </Field>

      <Field label="Número de funcionários" htmlFor="employees" error={errors.employees}>
        <select
          id="employees"
          name="employees"
          value={data.employees}
          onChange={(e) => handleChange('employees', e.target.value)}
          aria-invalid={!!errors.employees}
          className={inputClasses(!!errors.employees)}
        >
          <option value="">Selecione</option>
          {employeeRangeOptions.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Principal desafio" htmlFor="challenge" error={errors.challenge} className="sm:col-span-2">
        <select
          id="challenge"
          name="challenge"
          value={data.challenge}
          onChange={(e) => handleChange('challenge', e.target.value)}
          aria-invalid={!!errors.challenge}
          className={inputClasses(!!errors.challenge)}
        >
          <option value="">Selecione</option>
          {challengeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Conte brevemente o desafio" htmlFor="message" error={errors.message} className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={data.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={!!errors.message}
          className={inputClasses(!!errors.message)}
        />
      </Field>

      <div className="sm:col-span-2">
        {status === 'error' && (
          <p role="alert" className="mb-4 text-sm font-medium text-orange-dark">
            Não foi possível enviar sua mensagem agora. Tente novamente em instantes.
          </p>
        )}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex w-full items-center justify-center rounded-md bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-dark hover:shadow-lift disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
        >
          {status === 'submitting' ? 'Enviando…' : 'Quero conversar com a G2'}
        </button>
      </div>
    </form>
  )
}

function inputClasses(hasError: boolean) {
  return [
    'w-full rounded-md border bg-white px-4 py-3 text-sm text-navy shadow-sm transition-colors duration-200',
    'placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-teal/50',
    hasError ? 'border-orange' : 'border-border focus:border-teal',
  ].join(' ')
}

type FieldProps = {
  label: string
  htmlFor: string
  error?: string
  className?: string
  children: React.ReactNode
}

function Field({ label, htmlFor, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-orange-dark" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
