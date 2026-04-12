import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
