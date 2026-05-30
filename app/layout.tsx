import type { Metadata } from 'next'
import { Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Revena Media — AI That Answers Every Call',
  description:
    'Revena builds AI voice agents for Australian trades. Answer every call 24/7, qualify jobs and book them straight to your calendar — automatically.',
  keywords: [
    'AI voice agent',
    'trades',
    'Australia',
    'HVAC',
    'electrician',
    'plumber',
    'missed calls',
    'booking automation',
    'AI receptionist',
  ],
  authors: [{ name: 'Revena Media' }],
  metadataBase: new URL('https://revenamedia.com.au'),
  openGraph: {
    title: 'Revena Media — AI That Answers Every Call',
    description:
      'Stop missing jobs. Revena builds AI voice agents for Australian trades that answer 24/7 and book jobs to your calendar.',
    url: 'https://revenamedia.com.au',
    siteName: 'Revena Media',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revena Media — AI That Answers Every Call',
    description: 'Stop missing jobs. AI voice agents for Australian trades — 24/7.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="stars" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
