import './globals.css'
import background from './assets/background.png'

export const metadata = {
  title: 'CycleMarket',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${background.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>{children}</body>
    </html>
  )
}
