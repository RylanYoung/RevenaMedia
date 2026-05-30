import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const PainStats = dynamic(() => import('@/components/PainStats'))
const Services = dynamic(() => import('@/components/Services'))
const HowItWorks = dynamic(() => import('@/components/HowItWorks'))
const DemoSection = dynamic(() => import('@/components/DemoSection'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainStats />
        <Services />
        <HowItWorks />
        <DemoSection />
      </main>
      <Footer />
    </>
  )
}
