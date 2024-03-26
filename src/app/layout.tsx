import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/header/header'
import Menu from '@/components/menu/menu'
import Footer from '@/components/footer/footer'
import ToTopButton from '@/components/toTopButton/toTopButton'

// Metadata
const title = 'Gabi Brewer'
const description =
  'My name is Gabriela Brewer, but please call me Gabi :) I am an Argentinian Graphic Designer & Illustrator based in Tokyo, Japan. I am currently working as a full-time graphic designer for a Japanese design studio. I mainly illustrate for printed & web media, but also do branding, mascot / character design & animation. I love critters, mythology & fantasy, which you can probably tell by the stuff I have here. This portfolio collects a wide variety of work, hope you like it!'
const ogImageUrl = 'https://gabibrewer.com/assets/images/common/og.png'
export const metadata: Metadata = {
  metadataBase: new URL('https://gabibrewer.com'),
  title,
  description,
  authors: [
    { name: 'Gabi Brewer' },
    { name: 'Michael Jobin', url: 'https://www.instagram.com/michael__jbn' },
  ],
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImageUrl],
  },
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  //   googleBot: {
  //     index: false,
  //     follow: false,
  //     noimageindex: true,
  //   },
  // },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ja_JP',
    url: 'https://gabibrewer.com',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <Menu />
        <div className="main">
          {children}
          <ToTopButton />
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
export default RootLayout
