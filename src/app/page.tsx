import { Hero } from '@/components/sections/Hero';
import { Journey } from '@/components/sections/Journey';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Projects />
      <Journey />
      <Skills />
    </main>
  );
}
