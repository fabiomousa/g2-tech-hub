/**
 * Camada fina de eventos de conversão.
 *
 * Dispara para o dataLayer (GA4) e, quando disponível, para o Meta Pixel.
 * As integrações reais só são carregadas quando as variáveis de ambiente
 * correspondentes estão definidas (ver components/AnalyticsScripts.tsx),
 * então em desenvolvimento estes eventos são no-ops seguros.
 */

export type ConversionEvent =
  | 'diagnostic_click'
  | 'contact_click'
  | 'form_start'
  | 'form_submit'
  | 'whatsapp_click'
  | 'linkedin_click'
  | 'instagram_click'
  | 'solution_view'
  | 'pmo_view'
  | 'method_view'

declare global {
  interface Window {
    dataLayer?: unknown[]
    fbq?: (...args: unknown[]) => void
  }
}

export function trackEvent(event: ConversionEvent, payload: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...payload })

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, payload)
  }
}
