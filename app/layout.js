import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ["300", "400"],
  styles: ["normal"],
  subsets: ["latin"]
})

export const metadata = {
  title: 'Bison Wood & Metal',
  description: 'Bison Wood & Metal construccion integral',
  keywords: 'Bison, construcción, integral, constructora, carpintería, herrería, decoración, interiorismo, divisiones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}