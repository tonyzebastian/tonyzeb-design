import "./globals.css";
import NavBar from '@/components/NavBar'

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className="flex flex-col min-h-screen">
              <main className="flex-grow">
                  {children}
              </main>
              <NavBar />
          </body>
      </html>
  );
}