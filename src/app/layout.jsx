import { RootLayout } from '@/components/RootLayout'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Studio',
    default: 'SwiftCRE - Award winning developer SwiftCRE based in Denmark',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}
        <Analytics />
        </RootLayout>
      </body>
    </html>
  )
}
