'use client'
import { useEffect, useRef, useState } from 'react'

/* ── data ─────────────────────────────────────────── */
const kpis = [
  { label: 'Tasks Automated', value: '14.3k', trend: '+12%', up: true,  color: '#00E5A0' },
  { label: 'Leads Captured',  value: '1,847', trend: '+28%', up: true,  color: '#7B5EF6' },
  { label: 'Avg Response',    value: '0.9s',  trend: '−40%', up: false, color: '#F59E0B' },
  { label: 'Uptime',          value: '99.8%', trend: 'SLA',  up: true,  color: '#3B82F6' },
]

const bars    = [52, 68, 45, 88, 72, 95, 80]
const barDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const MAX_BAR = 95

const events = [
  { msg: 'LeadBot captured 14 leads from LinkedIn', color: '#00E5A0', time: '2m ago' },
  { msg: 'FormAgent submitted 3 applications',       color: '#7B5EF6', time: '8m ago' },
  { msg: 'ScraperAI: 5 competitor changes flagged',  color: '#F59E0B', time: '21m ago' },
]

const bullets = [
  { text: 'Monitor every agent action across all active workflows in real time.' },
  { text: 'Unified analytics — leads, tasks, response times, and uptime in one view.' },
  { text: 'Instant alerts when any workflow needs your attention.' },
  { text: 'Custom reporting per workflow type — sales, support, scraping, and more.' },
]

/* ── component ────────────────────────────────────── */
export default function DashboardFeature() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.08 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="dashboard"
      className="sec-pad-lg"
      style={{
        padding: '120px 24px',
        background: '#0A0D14',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div style={{ position:'absolute', top:-160, left:'10%',  width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(0,229,160,0.07) 0%,transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-80, right:'5%', width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle,rgba(123,94,246,0.07) 0%,transparent 70%)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* ══════════════════════════════════════════
            TWO-CARD LAYOUT  (portrait left | landscape right offset-down)
        ══════════════════════════════════════════ */}
        <div className="db-layout" style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>

          {/* ── LEFT CARD — portrait / taller ───── */}
          <div
            className="db-left"
            style={{
              width: 400,
              flexShrink: 0,
              background: 'linear-gradient(160deg, rgba(0,229,160,0.05) 0%, rgba(0,229,160,0.01) 40%, transparent 100%)',
              border: '1px solid rgba(0,229,160,0.16)',
              borderRadius: 20,
              padding: '48px 40px 52px',
              position: 'relative',
              overflow: 'hidden',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-72px)',
              transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {/* corner accent */}
            <div style={{ position:'absolute', top:0, left:0, width:80, height:80, background:'radial-gradient(circle at top left, rgba(0,229,160,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />

            {/* Section label */}
            <div className="section-label" style={{ marginBottom: 20 }}>// DASHBOARD</div>

            {/* Heading */}
            <h2
              style={{
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 20,
                color: '#F0F4FF',
              }}
            >
              Complete{' '}
              <span style={{ color: '#00E5A0' }}>Customer<br />Visibility</span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 14,
                color: '#8B9AB4',
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              One intelligent control center that gives you full visibility into every agent, every task, and every result — driving{' '}
              <span style={{ color: '#F0F4FF', fontWeight: 600 }}>productivity for different workflows</span>
              {' '}without switching tools.
            </p>

            {/* Bullets */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bullets.map((b, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    opacity: inView ? 1 : 0,
                    transition: `opacity 0.5s ease ${i * 100 + 300}ms`,
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00E5A0', marginTop: 6, flexShrink: 0, boxShadow: '0 0 6px rgba(0,229,160,0.7)' }} />
                  <span style={{ fontSize: 13, color: '#8B9AB4', lineHeight: 1.6, fontFamily: 'var(--font-space-grotesk),sans-serif' }}>{b.text}</span>
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { num: '14.3k', label: 'Tasks this month' },
                { num: '99.8%', label: 'Platform uptime'  },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 12,
                  }}
                >
                  <div style={{ fontSize: 26, fontWeight: 700, color: '#00E5A0', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 4, fontFamily: 'var(--font-space-grotesk),sans-serif' }}>{s.num}</div>
                  <div style={{ fontSize: 10, color: '#4a5a75', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-jetbrains-mono),monospace' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT CARD — landscape / shorter / offset down ── */}
          <div
            className="db-right db-right-offset"
            style={{
              flex: 1,
              marginTop: 110,        /* <-- key: offset down to match reference */
              background: '#0D1018',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 32px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(72px)',
              transition: 'opacity 0.75s cubic-bezier(0.16,1,0.3,1) 0.12s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.12s',
            }}
          >
            {/* Browser chrome */}
            <div style={{ background: '#090C12', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ display: 'flex', gap: 5 }}>
                {['#FF5F57','#FFBD2E','#28C840'].map((c,i) => (
                  <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.85 }} />
                ))}
              </div>
              <div style={{ flex:1, maxWidth:300, background:'rgba(255,255,255,0.05)', borderRadius:5, padding:'4px 10px', fontSize:10, color:'#3a4a65', fontFamily:'var(--font-jetbrains-mono),monospace', display:'flex', alignItems:'center', gap:5 }}>
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" style={{ flexShrink:0 }}>
                  <rect x="0.5" y="3.5" width="7" height="6" rx="1" stroke="#00E5A0" strokeWidth="0.9" />
                  <path d="M2.5 3.5V2.5a1.5 1.5 0 0 1 3 0v1" stroke="#00E5A0" strokeWidth="0.9" strokeLinecap="round"/>
                </svg>
                app.agentsol.io/dashboard
              </div>
              <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:6 }}>
                <div style={{ width:5, height:5, borderRadius:'50%', background:'#00E5A0', boxShadow:'0 0 7px rgba(0,229,160,0.9)' }} />
                <span style={{ fontSize:8, color:'#00E5A0', fontFamily:'var(--font-jetbrains-mono),monospace', letterSpacing:'0.1em' }}>LIVE</span>
              </div>
            </div>

            {/* Dashboard body */}
            <div style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Top bar */}
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div>
                  <div style={{ fontSize:8, color:'#2e3d58', fontFamily:'var(--font-jetbrains-mono),monospace', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:2 }}>Overview</div>
                  <div style={{ fontSize:16, fontWeight:700, color:'#F0F4FF', letterSpacing:'-0.02em', fontFamily:'var(--font-space-grotesk),sans-serif' }}>Dashboard</div>
                </div>
                <div style={{ display:'flex', gap:7 }}>
                  {['LAST 7D','MONTH','ALL'].map((t,i) => (
                    <div key={i} style={{ padding:'4px 9px', background: i===0 ? 'rgba(0,229,160,0.09)' : 'rgba(255,255,255,0.04)', border: i===0 ? '1px solid rgba(0,229,160,0.22)' : '1px solid rgba(255,255,255,0.07)', borderRadius:5, fontSize:8, color: i===0 ? '#00E5A0' : '#3a4a65', fontFamily:'var(--font-jetbrains-mono),monospace', letterSpacing:'0.06em' }}>{t}</div>
                  ))}
                </div>
              </div>

              {/* KPI cards — 4 in a row */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:10 }}>
                {kpis.map((kpi,i) => (
                  <div
                    key={i}
                    style={{
                      background:'#111520',
                      border:'1px solid rgba(255,255,255,0.06)',
                      borderRadius:10,
                      padding:'12px 14px',
                      position:'relative',
                      overflow:'hidden',
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'translateY(0)' : 'translateY(10px)',
                      transition:`opacity 0.55s ease ${i*80+200}ms, transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${i*80+200}ms`,
                    }}
                  >
                    <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:kpi.color, opacity:0.85 }} />
                    <div style={{ fontSize:7, color:'#3a4a65', fontFamily:'var(--font-jetbrains-mono),monospace', letterSpacing:'0.07em', textTransform:'uppercase', marginBottom:6 }}>{kpi.label}</div>
                    <div style={{ fontSize:20, fontWeight:700, color:'#F0F4FF', letterSpacing:'-0.03em', lineHeight:1, marginBottom:5, fontFamily:'var(--font-space-grotesk),sans-serif' }}>{kpi.value}</div>
                    <div style={{ fontSize:8, color: kpi.up ? '#00E5A0' : '#F59E0B', fontFamily:'var(--font-jetbrains-mono),monospace', display:'flex', alignItems:'center', gap:3 }}>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                        <path d={kpi.up ? 'M3.5 5.5V1.5M1.5 3.5l2-2 2 2' : 'M3.5 1.5v4M1.5 3.5l2 2 2-2'} stroke={kpi.up ? '#00E5A0' : '#F59E0B'} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {kpi.trend}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom row: bar chart + activity */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>

                {/* Bar chart */}
                <div style={{ background:'#111520', border:'1px solid rgba(255,255,255,0.06)', borderRadius:10, padding:'14px' }}>
                  <div style={{ fontSize:7, color:'#3a4a65', fontFamily:'var(--font-jetbrains-mono),monospace', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:12 }}>Weekly Task Volume</div>
                  <div style={{ display:'flex', alignItems:'flex-end', gap:6, height:64 }}>
                    {bars.map((h,i) => (
                      <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:4, height:'100%', justifyContent:'flex-end' }}>
                        <div style={{
                          width:'100%', borderRadius:'3px 3px 0 0',
                          background: i===5 ? '#00E5A0' : 'rgba(0,229,160,0.22)',
                          height: inView ? `${(h/MAX_BAR)*100}%` : '0%',
                          transition:`height 0.9s cubic-bezier(0.4,0,0.2,1) ${i*70}ms`,
                          boxShadow: i===5 ? '0 0 10px rgba(0,229,160,0.5)' : 'none',
                        }} />
                        <span style={{ fontSize:6, color:'#2e3d58', fontFamily:'var(--font-jetbrains-mono),monospace' }}>{barDays[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div style={{ background:'#111520', border:'1px solid rgba(255,255,255,0.06)', borderRadius:10, padding:'14px' }}>
                  <div style={{ fontSize:7, color:'#3a4a65', fontFamily:'var(--font-jetbrains-mono),monospace', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:12 }}>Recent Activity</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                    {events.map((ev,i) => (
                      <div
                        key={i}
                        style={{
                          display:'flex', alignItems:'flex-start', gap:7,
                          opacity: inView ? 1 : 0,
                          transition:`opacity 0.5s ease ${i*100+500}ms`,
                        }}
                      >
                        <div style={{ width:5, height:5, borderRadius:'50%', background:ev.color, marginTop:2, flexShrink:0, boxShadow:`0 0 5px ${ev.color}80` }} />
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:9, color:'#6a7a94', lineHeight:1.4, fontFamily:'var(--font-space-grotesk),sans-serif' }}>{ev.msg}</div>
                          <div style={{ fontSize:7, color:'#2e3d58', marginTop:1, fontFamily:'var(--font-jetbrains-mono),monospace' }}>{ev.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
