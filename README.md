# G2 Tech Hub — Site Institucional

Site institucional da **G2 Tech Hub**, consultoria empresarial que ajuda pequenas e médias empresas
a estruturar gestão, processos, governança e projetos — transformando estratégia em execução e
crescimento em resultados.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Sem dependências de UI/ícones externas — ícones em SVG inline (`components/icons.tsx`)

## Requisitos

- Node.js 18.18 ou superior
- npm 9+

## Instalação

```bash
npm install
```

## Ambiente

Copie o arquivo de exemplo e preencha o que for aplicável:

```bash
cp .env.example .env.local
```

Nenhuma variável é obrigatória para rodar em desenvolvimento — sem elas, o formulário de contato
roda em modo "mock" (registra no log do servidor) e nenhum script de analytics é carregado. Veja
`.env.example` para a lista completa e o significado de cada variável.

## Executar localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm run start
```

## Outros comandos

```bash
npm run lint       # ESLint
npm run typecheck  # Verificação de tipos TypeScript sem emitir arquivos
```

## Estrutura do projeto

```text
g2-tech-hub/
│
├── app/                  # Rotas (App Router)
│   ├── page.tsx          # Home
│   ├── sobre/
│   ├── metodo/
│   ├── solucoes/
│   ├── pmo/
│   ├── conteudos/
│   ├── contato/
│   ├── api/contact/      # Rota de API do formulário de contato
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/           # Componentes reutilizáveis de UI
├── config/                # Configuração centralizada (site, empresa, navegação, redes sociais,
│                           #   soluções, método, segmentos, jornada, PMO, conteúdos)
├── lib/                   # Validação, eventos de analytics, integrações de contato, utilitários
├── public/
│   ├── logo/              # Arquivos originais de logo da G2 (não redesenhados)
│   ├── images/
│   └── icons/
│
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Configuração centralizada

Informações institucionais (nome, e-mail, WhatsApp, redes sociais, textos de soluções, etapas do
Método G2, segmentos atendidos etc.) ficam concentradas em `config/`. Isso evita duplicar
conteúdo pelo código — para atualizar um texto institucional, normalmente basta editar o arquivo de
configuração correspondente, sem alterar componentes ou páginas.

Redes sociais (`config/social.ts`) e alguns dados de contato (`config/company.ts`) estão
propositalmente vazios até serem definidos — nenhuma URL foi inventada.

## Formulário de contato

O formulário em `/contato` valida os campos no cliente e no servidor (`lib/validation.ts`) e
envia para `POST /api/contact`. O provedor de envio é escolhido pela variável
`CONTACT_FORM_PROVIDER` (`mock`, `resend`, `formspree`, `hubspot`, `pipedrive` ou `custom`) — a
lógica de cada integração está isolada em `lib/contact-providers.ts`, então trocar de fornecedor
não exige alterar o formulário nem a rota de API.

## Analytics

GA4 e Meta Pixel (`components/AnalyticsScripts.tsx`) só são carregados quando
`NEXT_PUBLIC_GA4_MEASUREMENT_ID` e/ou `NEXT_PUBLIC_META_PIXEL_ID` estão definidos. Eventos de
conversão (`diagnostic_click`, `contact_click`, `form_start`, `form_submit`, `whatsapp_click`,
`linkedin_click`, `instagram_click`, `solution_view`, `pmo_view`, `method_view`) são disparados via
`lib/events.ts`.

## SEO

Cada rota define `title`, `description` e `canonical` próprios (Next.js Metadata API). Sitemap
(`/sitemap.xml`) e robots (`/robots.txt`) são gerados dinamicamente a partir de `config/site.ts`.
A imagem de Open Graph (`/opengraph-image`) é gerada dinamicamente com a identidade da G2. O
layout raiz inclui Schema.org (`ProfessionalService`) com os dados disponíveis em
`config/company.ts` — campos não preenchidos simplesmente não são incluídos no schema.

## Deploy

O projeto não tem dependências específicas de hospedagem — funciona em qualquer plataforma com
suporte a Next.js (Vercel, Netlify, Node.js próprio, containers). Antes de publicar em produção:

1. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final.
2. Preencha `config/social.ts` e os campos vazios de `config/company.ts`.
3. Configure o provedor de formulário (`CONTACT_FORM_PROVIDER` e variáveis relacionadas).
4. Configure analytics, se aplicável.
5. Rode `npm run build` localmente para validar antes do deploy.

## Licença

Uso interno — G2 Tech Hub.
