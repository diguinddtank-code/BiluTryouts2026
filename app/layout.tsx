import type {Metadata} from 'next';
import {Montserrat, Outfit, Anton, Bebas_Neue} from 'next/font/google';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'BISA Tryouts | South Carolina',
  description: 'Bilu International Soccer Academy is now accepting athletes for all age groups. Elite coaching. Real development. Your future starts here.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${outfit.variable} ${anton.variable} ${bebasNeue.variable} scroll-smooth`}>
      <body className="font-outfit bg-[#0a1f14] text-white antialiased selection:bg-[#ccff00] selection:text-[#0a1f14]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
