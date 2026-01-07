import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Mission } from '@/components/mission';
import { InfoCards } from '@/components/info-cards';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Mission />
      <InfoCards />
      <Footer />
    </main>
  );
}