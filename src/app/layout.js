import { SpeedInsights } from '@vercel/speed-insights/next';
import { Instrument_Serif } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import NavBar from '@/components/NavBar'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${instrumentSerif.variable} ${GeistSans.variable}`}>
          <body className="flex flex-col min-h-screen">
              <main className="flex-grow">
                  {children}
              </main>
              <NavBar />
              <SpeedInsights />
          </body>
      </html>
  );
}