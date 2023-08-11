import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'

import './globals.css'
import { localization } from './arabic'

const font = Tajawal({ subsets: ['arabic'],weight:['200','300','400','500','700','800','900'] });

export const metadata: Metadata = {
  title: 'Arab Genius',
  description: 'Arab Genius is a cutting-edge AI platform designed to empower innovative solutions. Explore our advanced tools for machine learning, data analysis, and AI development.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={localization}>
      <html lang="en" dir='rtl' suppressHydrationWarning>
        {/* <CrispProvider /> */}
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
