import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Busi Sangeetha',
}

export default function Home() {
  return <Hero />
}
