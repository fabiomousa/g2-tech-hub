/**
 * Segmentos de mercado atendidos pela G2. A empresa não se posiciona como
 * especialista setorial — atua sobre problemas de gestão que se repetem
 * em diferentes tipos de negócio.
 */

export type Segment = {
  name: string
}

export const segments: Segment[] = [
  { name: 'Varejo' },
  { name: 'Restaurantes' },
  { name: 'Turismo' },
  { name: 'Escritórios profissionais' },
  { name: 'Academias' },
  { name: 'Serviços B2B' },
  { name: 'Empresas em expansão' },
]
