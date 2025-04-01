import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import { ToastContainer } from 'react-toastify'
import { toastProps } from '@/utils/toastContainer'

// style css
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/global.css'

// metadata
export const metadata: Metadata = {
  title: 'Xenia Dev',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <ToastContainer {...toastProps} />
          <div className="flex flex-col bg-[var(--surface-background)]">
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
