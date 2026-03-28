export default function About() {
  return (
    <section
      id="about"
      className="sec-pad-lg"
      style={{ padding: '120px 24px 60px', maxWidth: 1200, margin: '0 auto' }}
    >
      {/* Section header */}
      <div className="sec-hdr" style={{ textAlign: 'center', marginBottom: 80 }}>
        <div className="section-label" style={{ marginBottom: 16 }}>// ABOUT</div>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          Our Company <span style={{ color: '#00E5A0' }}>Objective.</span>
        </h2>
      </div>

      {/* ── MISSION ── */}
      <div className="mission-flex">
        {/* Text */}
        <div className="mission-text-col">
          <div className="mission-pill">
            <span className="mission-pill-dot" />// MISSION
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#F0F4FF',
              marginBottom: 18,
            }}
          >
            Remove Human <span style={{ color: '#00E5A0' }}>Bottlenecks</span>
          </h2>
          <p style={{ fontSize: 16, color: '#8B9AB4', lineHeight: 1.75, maxWidth: 440 }}>
            Remove human bottlenecks from every business workflow using AI agents. We believe the
            future of work is humans setting direction — and agents handling execution.
          </p>
          <ul className="mission-bullets">
            <li>Tasks no longer queue behind a single person — agents execute them in parallel, instantly.</li>
            <li>Humans focus on strategy and decisions; AI handles the repetitive, time-consuming steps.</li>
            <li>Every workflow runs at machine speed, 24 hours a day, without fatigue or delays.</li>
          </ul>
          <div className="mission-stat-grid">
            {[
              { num: '10×', label: 'Faster Execution' },
              { num: '24/7', label: 'Always Running' },
              { num: '∞',   label: 'Parallel Tasks' },
              { num: '0',   label: 'Bottlenecks Left' },
            ].map(({ num, label }) => (
              <div className="mission-stat" key={label}>
                <div className="mission-stat-num">{num}</div>
                <div className="mission-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Graphic */}
        <div className="mission-graphic-col">
          <div className="bn-graphic-wrap">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: 12,
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <div className="bn-col-label" style={{ color: '#F04E4E' }}>BEFORE</div>
              <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />
              <div className="bn-col-label" style={{ color: '#00E5A0' }}>AFTER</div>
            </div>
            <svg id="bn-svg" viewBox="0 0 420 180" width="100%" style={{ display: 'block' }}>
              <defs>
                <filter id="bn-glow-red">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="bn-glow-green">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Divider */}
              <line x1="210" y1="8" x2="210" y2="172" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4,4"/>
              {/* Arrow */}
              <g>
                <circle cx="210" cy="90" r="13" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
                <text x="210" y="95" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.35)">→</text>
              </g>

              {/* BEFORE: Tasks queued */}
              {[
                { y: 34, label: 'Task A', delay: '.1s' },
                { y: 77, label: 'Task B', delay: '.25s' },
                { y: 120, label: 'Task C', delay: '.4s' },
              ].map(({ y, label, delay }) => (
                <g key={label} className="bn-task" style={{ animationDelay: delay }}>
                  <rect x="10" y={y} width="68" height="26" rx="6" fill="rgba(240,78,78,0.15)" stroke="rgba(240,78,78,0.45)" strokeWidth="1.5"/>
                  <text x="44" y={y + 17} textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fill="#F0C4C4">{label}</text>
                </g>
              ))}

              {/* Bottleneck human */}
              <g className="bn-bottleneck" style={{ transformOrigin: '100px 90px' }}>
                <circle cx="100" cy="90" r="18" fill="rgba(240,78,78,0.12)" stroke="rgba(240,78,78,0.4)" strokeWidth="1.5"/>
                <circle cx="100" cy="84" r="5" fill="rgba(240,78,78,0.5)"/>
                <path d="M90 100 Q100 106 110 100" stroke="rgba(240,78,78,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </g>
              <text x="100" y="122" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="rgba(240,78,78,0.5)">bottleneck</text>

              {/* Queue arrows */}
              <path d="M80 47 L84 47" stroke="rgba(240,78,78,0.3)" strokeWidth="1" markerEnd="url(#arr)"/>
              <path d="M80 90 L82 90" stroke="rgba(240,78,78,0.3)" strokeWidth="1"/>
              <path d="M80 133 L84 133" stroke="rgba(240,78,78,0.3)" strokeWidth="1"/>

              {/* AFTER: Parallel agents */}
              {[
                { cx: 290, cy: 47,  color: '#00E5A0', label: 'Agent 1' },
                { cx: 340, cy: 47,  color: '#3B82F6', label: 'Agent 2' },
                { cx: 290, cy: 90,  color: '#7B5EF6', label: 'Agent 3' },
                { cx: 340, cy: 90,  color: '#F59E0B', label: 'Agent 4' },
                { cx: 290, cy: 133, color: '#F97316', label: 'Agent 5' },
                { cx: 340, cy: 133, color: '#EC4899', label: 'Agent 6' },
              ].map(({ cx, cy, color, label }) => (
                <g key={label}>
                  <circle cx={cx} cy={cy} r="18" fill={`${color}18`} stroke={`${color}60`} strokeWidth="1.2"/>
                  <circle cx={cx} cy={cy - 4} r="4" fill={`${color}80`}/>
                  <path d={`M${cx - 6} ${cy + 6} Q${cx} ${cy + 10} ${cx + 6} ${cy + 6}`} stroke={`${color}80`} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                </g>
              ))}
              <text x="315" y="165" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7.5" fill="rgba(0,229,160,0.5)">parallel agents</text>
            </svg>
          </div>
        </div>
      </div>

      {/* ── VISION ── */}
      <div className="vision-flex" style={{ marginTop: 32 }}>
        {/* Text */}
        <div className="vision-text-col">
          <div className="vision-pill">
            <span className="vision-pill-dot" />// VISION
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#F0F4FF',
              marginBottom: 18,
            }}
          >
            Every Company Runs on{' '}
            <span style={{ color: '#7B5EF6' }}>Intelligent Automation.</span>
          </h2>
          <p style={{ fontSize: 16, color: '#8B9AB4', lineHeight: 1.75, maxWidth: 440 }}>
            A world where every company — from a startup to an enterprise — operates with a fully autonomous back office. Where intelligent agents handle operations, and humans build the future.
          </p>
          <ul className="vision-bullets">
            <li>Every repetitive operation is handled by a purpose-built AI agent running 24/7.</li>
            <li>Small teams achieve what used to require entire departments.</li>
            <li>Business workflows become self-optimizing — faster, smarter, always improving.</li>
          </ul>
          <div className="vision-stat-grid">
            {[
              { num: '$2.9T', label: 'Automation market by 2030', peak: false },
              { num: '80%',  label: 'Tasks AI-automatable today', peak: false },
              { num: '3.4×', label: 'Average ROI with AgentSol', peak: true },
              { num: '<30m', label: 'To deploy your first agent', peak: true },
            ].map(({ num, label, peak }) => (
              <div className="vision-stat" key={label}>
                <div className={`vision-stat-num${peak ? ' peak' : ''}`}>{num}</div>
                <div className="vision-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Graphic: ROI chart */}
        <div className="vision-graphic-col">
          <div className="vision-graphic-wrap">
            <div
              style={{
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: 10,
                color: '#5a6a8a',
                letterSpacing: '0.08em',
                marginBottom: 12,
              }}
            >
              BUSINESS PERFORMANCE — WITH vs. WITHOUT AGENTSOL
            </div>
            <svg viewBox="0 0 500 200" width="100%" style={{ display: 'block', overflow: 'visible' }}>
              <defs>
                <linearGradient id="grad-good" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7B5EF6" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#7B5EF6" stopOpacity="0"/>
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[40, 80, 120, 160].map((y) => (
                <line key={y} x1="40" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
              ))}
              {/* Y labels */}
              {[{ y: 40, l: 'High' }, { y: 120, l: 'Mid' }, { y: 160, l: 'Low' }].map(({ y, l }) => (
                <text key={l} x="32" y={y + 4} textAnchor="end" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#3a4a65">{l}</text>
              ))}

              {/* Without AgentSol — flat/declining */}
              <polyline
                className="v-line-bad"
                points="40,80 120,90 200,105 280,120 360,130 440,155 480,165"
                fill="none" stroke="rgba(240,78,78,0.5)" strokeWidth="1.5" strokeDasharray="5,3"
              />

              {/* With AgentSol — rising */}
              <path
                className="v-fill-good"
                d="M40,150 Q120,140 200,110 Q300,70 440,25 L480,20 L480,200 L40,200 Z"
                fill="url(#grad-good)"
              />
              <polyline
                className="v-line-good"
                points="40,150 120,140 200,110 300,70 380,40 440,25 480,20"
                fill="none" stroke="#7B5EF6" strokeWidth="2"
              />

              {/* Dots on good line */}
              {[
                { cx: 120, cy: 140, cls: 'd4' },
                { cx: 300, cy: 70,  cls: 'd5' },
                { cx: 480, cy: 20,  cls: 'd6' },
              ].map(({ cx, cy, cls }) => (
                <circle key={cls} cx={cx} cy={cy} r="4" fill="#7B5EF6" className={`chart-dot ${cls}`}/>
              ))}

              {/* Callouts */}
              <g className="v-callout c1">
                <rect x="130" y="126" width="80" height="24" rx="6" fill="rgba(0,229,160,0.12)" stroke="rgba(0,229,160,0.4)" strokeWidth="1"/>
                <text x="170" y="137" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fontWeight="700" fill="#00E5A0">+40% output</text>
                <text x="170" y="146" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="rgba(0,229,160,0.6)">Month 1</text>
              </g>
              <g className="v-callout c2">
                <rect x="230" y="46" width="88" height="24" rx="6" fill="rgba(123,94,246,0.15)" stroke="rgba(123,94,246,0.5)" strokeWidth="1"/>
                <text x="274" y="57" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fontWeight="700" fill="#9B8BFF">2× efficiency</text>
                <text x="274" y="66" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="6.5" fill="rgba(123,94,246,0.6)">Month 3</text>
              </g>
              <g className="v-callout c3">
                <rect x="322" y="6" width="112" height="28" rx="6" fill="rgba(0,229,160,0.15)" stroke="rgba(0,229,160,0.5)" strokeWidth="1"/>
                <text x="378" y="19" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="10" fontWeight="700" fill="#00E5A0">3.4× ROI</text>
                <text x="378" y="29" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="7" fill="rgba(0,229,160,0.6)">Peak Performance</text>
              </g>

              {/* Phase labels */}
              {[
                { x: 80,  label: 'Phase 1', cls: 'p1' },
                { x: 240, label: 'Phase 2', cls: 'p2' },
                { x: 400, label: 'Phase 3', cls: 'p3' },
              ].map(({ x, label, cls }) => (
                <text key={cls} x={x} y="195" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="8" fill="#3a4a65" className={`v-phase ${cls}`}>{label}</text>
              ))}
            </svg>

            {/* Legend */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: 14,
                borderTop: '1px solid rgba(255,255,255,0.05)',
                marginTop: 4,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: '#5a6a8a' }}>
                <svg width="22" height="8" style={{ flexShrink: 0 }}>
                  <line x1="0" y1="4" x2="22" y2="4" stroke="rgba(240,78,78,0.55)" strokeWidth="1.5" strokeDasharray="4,3"/>
                </svg>
                Without AgentSol
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: '#5a6a8a' }}>
                <span style={{ width: 22, height: 2, background: '#7B5EF6', borderRadius: 1, display: 'block' }} />
                With AgentSol
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── POSITIONING ── */}
      <div className="pos-flex" style={{ marginTop: 32 }}>
        {/* Text */}
        <div className="pos-text-col">
          <div className="pos-pill">
            <span className="pos-pill-dot" />// POSITIONING
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#F0F4FF',
              marginBottom: 18,
            }}
          >
            One Agent.
            <br />
            <span style={{ color: '#F59E0B' }}>Every Platform.</span>
          </h2>
          <p style={{ fontSize: 16, color: '#8B9AB4', lineHeight: 1.75, maxWidth: 440 }}>
            Your agent doesn't live in one tool — it sits at the center of your entire stack. It reads from your CRM, reasons with an LLM, acts through your APIs, and reports back across every channel.
          </p>
          <ul className="pos-bullets">
            <li>Ingests context from CRM, databases, and inboxes before making any decision.</li>
            <li>Executes multi-step workflows across Zapier, Slack, Email, and external APIs — in a single run.</li>
            <li>Powered by large language models, not rigid rules. It adapts to edge cases, not just the happy path.</li>
          </ul>
          <div className="pos-stat-row">
            {[
              { num: '200+', label: 'Integrations', highlight: false },
              { num: 'Native', label: 'API & Webhook', highlight: false },
              { num: '0', label: 'Code Required', highlight: true },
            ].map(({ num, label, highlight }) => (
              <div className="pos-stat-item" key={label}>
                <div className={`pos-stat-num${highlight ? ' highlight' : ''}`}>{num}</div>
                <div className="pos-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hub-and-spoke diagram */}
        <div className="pos-graphic-col">
          <div className="pos-graphic-wrap">
            <svg id="pos-svg" viewBox="0 0 460 290" width="100%" style={{ display: 'block', overflow: 'visible' }}>
              <defs>
                <filter id="glow-amber-pos">
                  <feGaussianBlur stdDeviation="5" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="glow-amber-sm">
                  <feGaussianBlur stdDeviation="2.5" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <path id="pp-crm"    d="M230,64  L230,112"/>
                <path id="pp-slack"  d="M298,97  L258,128"/>
                <path id="pp-email"  d="M298,193 L258,162"/>
                <path id="pp-apis"   d="M230,226 L230,168"/>
                <path id="pp-zapier" d="M162,193 L202,162"/>
                <path id="pp-llm"    d="M162,97  L202,128"/>
              </defs>

              {/* Spokes */}
              {[
                { x1: 230, y1: 64,  x2: 230, y2: 112, cls: 'pos-spoke-1' },
                { x1: 298, y1: 97,  x2: 258, y2: 128, cls: 'pos-spoke-2' },
                { x1: 298, y1: 193, x2: 258, y2: 162, cls: 'pos-spoke-3' },
                { x1: 230, y1: 226, x2: 230, y2: 168, cls: 'pos-spoke-4' },
                { x1: 162, y1: 193, x2: 202, y2: 162, cls: 'pos-spoke-5' },
                { x1: 162, y1: 97,  x2: 202, y2: 128, cls: 'pos-spoke-6' },
              ].map(({ x1, y1, x2, y2, cls }) => (
                <line key={cls} className={`pos-spoke ${cls}`} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(245,158,11,0.35)" strokeWidth="1"/>
              ))}

              {/* Center hub */}
              <circle cx="230" cy="145" r="36" fill="#0d1019" stroke="rgba(245,158,11,0.5)" strokeWidth="1.5" filter="url(#glow-amber-pos)"/>
              <circle cx="230" cy="145" r="28" fill="rgba(245,158,11,0.06)"/>
              <text x="230" y="140" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#F59E0B">AGENT</text>
              <text x="230" y="154" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="rgba(245,158,11,0.6)" letterSpacing="0.06em">CORE</text>

              {/* Outer nodes */}
              {[
                { cx: 230, cy: 46,  label: 'CRM',    sub: 'HubSpot / Salesforce', color: '#3B82F6', cls: 'n1' },
                { cx: 316, cy: 80,  label: 'Slack',  sub: 'Notifications',         color: '#EC4899', cls: 'n2' },
                { cx: 316, cy: 210, label: 'Email',  sub: 'Gmail / Outlook',       color: '#00E5A0', cls: 'n3' },
                { cx: 230, cy: 244, label: 'APIs',   sub: 'REST / GraphQL',        color: '#7B5EF6', cls: 'n4' },
                { cx: 144, cy: 210, label: 'Zapier', sub: '5000+ Integrations',    color: '#F97316', cls: 'n5' },
                { cx: 144, cy: 80,  label: 'LLM',    sub: 'GPT-4 / Claude',        color: '#F59E0B', cls: 'n6' },
              ].map(({ cx, cy, label, sub, color, cls }) => (
                <g key={label} className={`pos-node ${cls}`}>
                  <circle cx={cx} cy={cy} r="28" fill="#0d1019" stroke={`${color}55`} strokeWidth="1.2"/>
                  <circle cx={cx} cy={cy} r="20" fill={`${color}0d`}/>
                  <text x={cx} y={cy - 2} textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#F0F4FF">{label}</text>
                  <text x={cx} y={cy + 10} textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill={color} opacity="0.7">{sub}</text>
                </g>
              ))}

              {/* Animated packets inward */}
              {[
                { path: '#pp-crm',    color: '#3B82F6', dur: '1.6s', begin: '0s' },
                { path: '#pp-slack',  color: '#EC4899', dur: '1.8s', begin: '0.3s' },
                { path: '#pp-email',  color: '#00E5A0', dur: '2.0s', begin: '0.6s' },
                { path: '#pp-apis',   color: '#7B5EF6', dur: '1.7s', begin: '0.9s' },
                { path: '#pp-zapier', color: '#F97316', dur: '1.9s', begin: '1.2s' },
                { path: '#pp-llm',    color: '#F59E0B', dur: '1.5s', begin: '1.5s' },
              ].map(({ path, color, dur, begin }) => (
                <circle key={path} r="3" fill={color} opacity="0.9">
                  <animateMotion dur={dur} begin={begin} repeatCount="indefinite">
                    <mpath href={path}/>
                  </animateMotion>
                </circle>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* ── AGENTIC THINK SECTION ── */}
      <div
        style={{
          marginTop: 48,
          background: '#0d1019',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            padding: '52px 48px',
            alignItems: 'center',
          }}
          className="agentic-grid"
        >
          {/* Left: SVG diagram */}
          <div className="agentic-left-col">
            <svg viewBox="0 0 500 380" width="100%" style={{ display: 'block' }}>
              {/* Input node at top */}
              <rect x="175" y="10" width="150" height="52" rx="10" fill="rgba(0,229,160,0.06)" stroke="rgba(0,229,160,0.25)" strokeWidth="1"/>
              <text x="250" y="32" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600" fill="#F0F4FF">Trigger / Input</text>
              <text x="250" y="50" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(0,229,160,0.6)">email • form • schedule • API</text>

              {/* Arrow down */}
              <line x1="250" y1="62" x2="250" y2="88" stroke="rgba(0,229,160,0.3)" strokeWidth="1" strokeDasharray="3 3"/>
              <polygon points="246,85 250,92 254,85" fill="rgba(0,229,160,0.4)"/>

              {/* LLM reasoning box */}
              <rect x="140" y="95" width="220" height="70" rx="12" fill="rgba(123,94,246,0.08)" stroke="rgba(123,94,246,0.3)" strokeWidth="1.5"/>
              <text x="250" y="120" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#9B8BFF">LLM Reasoning Engine</text>
              <text x="250" y="138" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(123,94,246,0.7)">Plans · Decides · Executes</text>
              <text x="250" y="154" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="rgba(123,94,246,0.5)">Claude / GPT-4 / Gemini</text>

              {/* Three action branches */}
              <line x1="250" y1="165" x2="250" y2="185" stroke="rgba(123,94,246,0.3)" strokeWidth="1"/>
              <line x1="100" y1="185" x2="400" y2="185" stroke="rgba(123,94,246,0.2)" strokeWidth="1"/>
              <line x1="100" y1="185" x2="100" y2="205" stroke="rgba(123,94,246,0.2)" strokeWidth="1"/>
              <line x1="250" y1="185" x2="250" y2="205" stroke="rgba(123,94,246,0.2)" strokeWidth="1"/>
              <line x1="400" y1="185" x2="400" y2="205" stroke="rgba(123,94,246,0.2)" strokeWidth="1"/>

              {/* Action boxes */}
              {[
                { x: 30,  label: 'Tool Use',    sub: 'APIs · DB · Search',  color: '#3B82F6' },
                { x: 180, label: 'Code Run',    sub: 'Python · Node · SQL', color: '#F59E0B' },
                { x: 330, label: 'Communicate', sub: 'Email · Slack · SMS', color: '#F97316' },
              ].map(({ x, label, sub, color }) => (
                <g key={label}>
                  <rect x={x} y="205" width="140" height="50" rx="8" fill={`${color}10`} stroke={`${color}40`} strokeWidth="1"/>
                  <text x={x + 70} y="225" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="600" fill="#F0F4FF">{label}</text>
                  <text x={x + 70} y="242" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill={color} opacity="0.8">{sub}</text>
                </g>
              ))}

              {/* Converge back */}
              <line x1="100" y1="255" x2="100" y2="275" stroke="rgba(0,229,160,0.2)" strokeWidth="1"/>
              <line x1="250" y1="255" x2="250" y2="275" stroke="rgba(0,229,160,0.2)" strokeWidth="1"/>
              <line x1="400" y1="255" x2="400" y2="275" stroke="rgba(0,229,160,0.2)" strokeWidth="1"/>
              <line x1="100" y1="275" x2="400" y2="275" stroke="rgba(0,229,160,0.2)" strokeWidth="1"/>
              <line x1="250" y1="275" x2="250" y2="295" stroke="rgba(0,229,160,0.3)" strokeWidth="1"/>
              <polygon points="246,292 250,299 254,292" fill="rgba(0,229,160,0.4)"/>

              {/* Output */}
              <rect x="160" y="300" width="180" height="50" rx="10" fill="rgba(0,229,160,0.08)" stroke="rgba(0,229,160,0.3)" strokeWidth="1.5"/>
              <text x="250" y="322" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#00E5A0">Result Delivered</text>
              <text x="250" y="340" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(0,229,160,0.6)">autonomous · verified · logged</text>

              {/* Self-correct loop */}
              <path d="M 360 130 Q 430 130 430 200 Q 430 260 370 260" stroke="rgba(59,130,246,0.25)" strokeWidth="1" fill="none" strokeDasharray="4 4"/>
              <text x="442" y="200" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="rgba(59,130,246,0.5)" transform="rotate(90 442 200)">self-correct</text>
            </svg>
          </div>

          {/* Right: Text */}
          <div className="agentic-right-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
            <div>
              <h3
                style={{
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#F0F4FF',
                  marginBottom: 12,
                }}
              >
                Think beyond automation.
                <br />
                <span style={{ color: '#00E5A0' }}>Think Agentic.</span>
              </h3>
              <p style={{ fontSize: 15, color: '#8B9AB4', lineHeight: 1.75, margin: 0 }}>
                Traditional automation breaks the moment something unexpected happens. Agentic workflows
                don't — they{' '}
                <span style={{ color: '#F0F4FF', fontWeight: 500 }}>reason, adapt, and push forward</span>{' '}
                on their own.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2l1.8 3.6L14 6.5l-3 2.9.7 4.1L8 11.4l-3.7 2.1.7-4.1L2 6.5l4.2-.9L8 2z" stroke="#00E5A0" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                  ),
                  bg: 'rgba(0,229,160,0.04)', border: 'rgba(0,229,160,0.1)', iconBg: 'rgba(0,229,160,0.1)',
                  title: 'Plans. Decides. Executes.',
                  desc: 'Unlike rigid scripts, your agent reads the situation, picks the right tools, and completes multi-step tasks end-to-end — without you lifting a finger.',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="5.5" stroke="#7B5EF6" strokeWidth="1.3"/>
                      <path d="M8 5v3l2 2" stroke="#7B5EF6" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  ),
                  bg: 'rgba(123,94,246,0.04)', border: 'rgba(123,94,246,0.1)', iconBg: 'rgba(123,94,246,0.1)',
                  title: 'Works while the world sleeps.',
                  desc: 'Teams across the globe are reclaiming hours every day. Agentic systems run 24/7 across time zones — research, outreach, follow-up — all handled autonomously.',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8h3l2-5 3 10 2-5h2" stroke="#3B82F6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  bg: 'rgba(59,130,246,0.04)', border: 'rgba(59,130,246,0.1)', iconBg: 'rgba(59,130,246,0.1)',
                  title: 'Self-corrects. Never stalls.',
                  desc: 'Hit a dead end? The agent reroutes. An API fails? It retries. Agentic workflows eliminate the single points of failure that cripple traditional automation.',
                },
              ].map(({ icon, bg, border, iconBg, title, desc }) => (
                <div
                  key={title}
                  style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    background: bg, border: `1px solid ${border}`,
                    borderRadius: 12, padding: 16,
                  }}
                >
                  <div
                    style={{
                      width: 32, height: 32, borderRadius: 8, background: iconBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#F0F4FF', marginBottom: 4 }}>{title}</div>
                    <p style={{ fontSize: 13, color: '#8B9AB4', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 4 }}>
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(to right, rgba(0,229,160,0.3), transparent)' }} />
              <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, color: '#00E5A0', letterSpacing: '0.06em' }}>
                The future of work is agentic.
              </span>
              <div style={{ height: 1, flex: 1, background: 'linear-gradient(to left, rgba(0,229,160,0.3), transparent)' }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .agentic-grid { grid-template-columns: 1fr !important; padding: 32px 24px !important; }
        }
        @media (max-width: 768px) {
          .sec-hdr { margin-bottom: 48px !important; }
          #about { padding: 72px 20px 48px !important; }
          .mission-flex, .vision-flex, .pos-flex { padding: 28px 20px !important; gap: 32px !important; }
          .vision-stat-grid, .mission-stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          #about { padding: 56px 16px 40px !important; }
          .mission-stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
