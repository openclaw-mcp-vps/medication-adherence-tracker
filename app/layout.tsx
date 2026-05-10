import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedTrack — Track medication compliance with smart reminders',
  description: 'Medication tracking app with photo verification, family notifications, and adherence reporting for doctors. Perfect for chronic disease patients and elderly care.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e2e0478c-7222-4418-b5e8-d7dbd21fa9c8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
