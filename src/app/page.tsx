import { Header } from '@/app/components/header';
import { Hero } from '@/app/components/hero';
import { About } from '@/app/components/about';
import { Solutions } from '@/app/components/solutions';
import { Features } from '@/app/components/features';
import { Contact } from '@/app/components/contact';
import { Footer } from '@/app/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Solutions />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
