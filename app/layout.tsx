import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AgentSol — Agentic Workflow Platform',
  description:
    "AgentSol is Bangladesh's #1 agentic AI workflow provider — replacing repetitive human labor with intelligent autonomous agents. Deploy automation in minutes, no code required.",
  keywords: ['AI agents', 'workflow automation', 'agentic AI', 'no-code automation', 'AgentSol'],
  openGraph: {
    title: 'AgentSol — Agentic Workflow Platform',
    description: 'Deploy intelligent AI agents that automate your business workflows in minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="grain">{children}</body>
    </html>
  )
}
