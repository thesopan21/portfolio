
import { ArrowDown } from 'lucide-react';
import { Button } from '../Button/Button';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b px-4 from-background to-secondary/30"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="inline-block text-primary font-semibold tracking-wider">
              FULL-STACK DEVELOPER
            </h2>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Specialized in <span className="text-primary">React Native</span> & Modern Web Apps
            </h1>

            <p className="text-lg text-foreground/70 max-w-md">
              Software Development Engineer with expertise in React Native, TypeScript, Redux,
              and building full-stack web and mobile applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end animate-fade-in">
            <div className="device-frame w-64 md:w-72 rotate-6 transform hover:rotate-0 transition-all duration-500">
              <div className="device-screen bg-gradient-to-br from-tech-purple/90 to-tech-dark flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-xs opacity-80 mb-2">Currently working on</div>
                  <div className="text-sm font-medium mb-4">Chat Application</div>
                  <div className="w-16 h-16 rounded-full bg-white/20 mx-auto flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div className="mt-4 text-xs opacity-60">React Native • TypeScript • Redux</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 left-4 w-56 h-24 rounded-lg bg-tech-purple/10 blur-3xl"></div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-primary hover:text-primary/80 transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;