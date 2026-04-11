"use client";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I&apos;m a passionate full-stack developer with a keen eye for
            design. I love building web applications that not only function
            flawlessly but also provide delightful user experiences.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With expertise in modern web technologies like React, Next.js, and
            TypeScript, I bring ideas to life through clean, efficient code and
            thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
}
