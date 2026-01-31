import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Achievements } from '@/components/achievements';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      {/* Gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background to-purple-950/10 pointer-events-none" />
      
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
