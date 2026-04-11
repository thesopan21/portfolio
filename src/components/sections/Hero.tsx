"use client";


export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
          Full-Stack Developer & Designer creating beautiful and functional web
          experiences
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-gray-300 px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
