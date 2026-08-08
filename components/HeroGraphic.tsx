/**
 * Composição visual abstrata do Hero: estrutura modular, linhas ascendentes
 * e nós conectados — remetendo a crescimento, governança e execução, sem
 * recorrer a clichês de tecnologia (código, servidores, robôs).
 */
export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      className="h-full w-full"
      role="img"
      aria-label="Ilustração abstrata representando crescimento estruturado"
    >
      <circle cx="240" cy="240" r="239" stroke="#1E3A5F" strokeOpacity="0.35" />
      <circle cx="240" cy="240" r="188" stroke="#1E3A5F" strokeOpacity="0.25" />
      <circle cx="240" cy="240" r="132" stroke="#4ECDC4" strokeOpacity="0.22" />

      {/* linhas de conexão */}
      <g stroke="#4ECDC4" strokeOpacity="0.5" strokeWidth="1.25">
        <line x1="150" y1="330" x2="150" y2="180" />
        <line x1="205" y1="330" x2="205" y2="140" />
        <line x1="260" y1="330" x2="260" y2="100" />
        <line x1="315" y1="330" x2="315" y2="160" />
        <line x1="150" y1="180" x2="205" y2="140" />
        <line x1="205" y1="140" x2="260" y2="100" />
        <line x1="260" y1="100" x2="315" y2="160" />
      </g>

      {/* barras de crescimento */}
      <g>
        <rect x="138" y="255" width="24" height="75" rx="3" fill="#1E3A5F" />
        <rect x="193" y="215" width="24" height="115" rx="3" fill="#1E3A5F" />
        <rect x="248" y="170" width="24" height="160" rx="3" fill="#4ECDC4" />
        <rect x="303" y="225" width="24" height="105" rx="3" fill="#1E3A5F" />
      </g>

      {/* nós */}
      <g fill="#4ECDC4">
        <circle cx="150" cy="180" r="5.5" />
        <circle cx="205" cy="140" r="5.5" />
        <circle cx="260" cy="100" r="6.5" />
        <circle cx="315" cy="160" r="5.5" />
      </g>
      <g fill="#F8F9FA" fillOpacity="0.9">
        <circle cx="150" cy="180" r="2.5" />
        <circle cx="205" cy="140" r="2.5" />
        <circle cx="260" cy="100" r="3" />
        <circle cx="315" cy="160" r="2.5" />
      </g>

      {/* base */}
      <line x1="120" y1="330" x2="340" y2="330" stroke="#1E3A5F" strokeOpacity="0.4" />
    </svg>
  )
}
