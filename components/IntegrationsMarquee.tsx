const integrations = [
  { name: 'OpenAI',           color: '#10A37F' },
  { name: 'Claude',           color: '#CC785C' },
  { name: 'Gemini',           color: '#4285F4' },
  { name: 'Llama',            color: '#7B5EF6' },
  { name: 'Firecrawl',        color: '#F97316' },
  { name: 'LangChain',        color: '#00E5A0' },
  { name: 'RAG Pipeline',     color: '#EC4899' },
  { name: 'Google Workspace', color: '#4285F4' },
  { name: 'Pinecone',         color: '#F59E0B' },
  { name: 'Mistral',          color: '#3B82F6' },
  { name: 'Groq',             color: '#00E5A0' },
  { name: 'Vector DB',        color: '#7B5EF6' },
  { name: 'Perplexity',       color: '#EC4899' },
  { name: 'Google Drive',     color: '#F97316' },
  { name: 'Weaviate',         color: '#10A37F' },
  { name: 'Gmail API',        color: '#4285F4' },
]

function IntegrationItem({ name, color }: { name: string; color: string }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap' }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: color, flexShrink: 0 }} />
      <span
        style={{
          color: '#8B9AB4',
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: '0.04em',
          fontFamily: 'var(--font-space-grotesk), sans-serif',
        }}
      >
        {name}
      </span>
    </span>
  )
}

const Dot = () => (
  <span style={{ color: '#3B3F6E', fontSize: 18, fontWeight: 200 }}>·</span>
)

export default function IntegrationsMarquee() {
  const doubled = [...integrations, ...integrations]

  return (
    <section
      style={{
        background: '#0d1019',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '16px 0 18px',
        overflow: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), monospace',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: '#2e3852',
            textTransform: 'uppercase',
          }}
        >
          Powered by &amp; integrates with
        </span>
      </div>

      <div className="marquee-wrap" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
            background: 'linear-gradient(90deg, #0d1019, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
            background: 'linear-gradient(270deg, #0d1019, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }}
        />

        <div
          className="marquee-inner"
          style={{ display: 'flex', gap: 40, width: 'max-content', alignItems: 'center' }}
        >
          {doubled.map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
              <IntegrationItem name={item.name} color={item.color} />
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
