import Hero from '@/components/Hero/Hero'
import RolesAccordian from '@/components/accordion/RolesAccordian'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero />
      <RolesAccordian />
    </>
  )
}
