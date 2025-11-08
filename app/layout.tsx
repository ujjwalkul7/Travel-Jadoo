import "./globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "Jadoo Travel",
  description: "Travel website UI with Next.js and Tailwind CSS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
