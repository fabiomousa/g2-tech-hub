/**
 * Dados institucionais da empresa. Centralizados aqui para facilitar
 * atualização e para alimentar o Schema.org (Organization / ProfessionalService).
 *
 * Campos vazios ("") indicam informação ainda não definida — devem ser
 * preenchidos antes da publicação em produção, mas o site funciona
 * corretamente mesmo sem eles (o campo simplesmente não é renderizado).
 */

type CompanyConfig = {
  name: string
  foundingYear: number | undefined
  email: string
  phone: string
  whatsapp: string
  whatsappMessage: string
  address: {
    locality: string
    region: string
    country: string
  }
  founder: {
    name: string
    role: string
    bio: string
    competencies: string[]
    photo: string
  }
}

export const companyConfig: CompanyConfig = {
  name: 'G2 Tech Hub',
  foundingYear: undefined,
  email: 'contato@g2techhub.com.br',
  phone: '',
  whatsapp: '',
  whatsappMessage: 'Olá! Gostaria de conversar com a G2 Tech Hub sobre gestão da minha empresa.',
  address: {
    locality: 'Brasil',
    region: '',
    country: 'BR',
  },
  founder: {
    name: 'Fabio Moura',
    role: 'Founder & Business Transformation Consultant',
    bio: 'Profissional com mais de 20 anos de experiência em tecnologia, gestão de projetos, operações e liderança, com atuação em ambientes complexos, grandes contas e projetos estratégicos.',
    competencies: [
      'Gestão de projetos',
      'PMO',
      'Operações',
      'Gestão de equipes',
      'Governança',
      'Planejamento',
      'Processos',
      'Indicadores',
      'Transformação',
    ],
    photo: '', // Caminho para a foto profissional, quando disponível (ex.: "/images/fabio-moura.jpg")
  },
}

export type { CompanyConfig }
