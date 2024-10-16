import "./globals.css";
import NavBar from '@/components/NavBar'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          <NavBar />
          <main className="pt-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}