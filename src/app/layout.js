import './globals.css'
import { Inter } from 'next/font/google'
import Header from './mycomponent/Header'
import Sidenavbar from './mycomponent/Sidenavbar'
import Footer from './mycomponent/Footer'
import Link from 'next/link'
import Sidenavbarmb from './mycomponent/Sidenavbarmb'
<Link rel="icon" href="/favicon.ico" sizes="any" />
const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'My Dashboard - IIT Madras Online Degree Program',
  description: 'This is website of IIT Madras Online Degree Program',
   icons: [{ rel: 'icon', url: 'favicon.ico' }], 
}
  


export default function RootLayout({ children }) {
  // <link rel="icon" type="image/x-icon" href="./favicon.ico" />
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header /> 
      
      <div className='flex'>
      <Sidenavbar className="hidden sm:block md:block" />
      
      <main className='mt-1 ' id='main_contextAll'>
      {children}
      
      <Footer />
      </main>

      </div>
      
      </body>
    </html>
  )
}
