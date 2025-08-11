import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Dutch Queen',
  description: 'The Dutch Queen tribute band website and content management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}