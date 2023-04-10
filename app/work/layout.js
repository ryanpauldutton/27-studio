import '../globals.css'

export const metadata = {
  title: '27 Studio',
  description: 'A london based design studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
