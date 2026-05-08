const projects = [
  {
    title: 'Monova AI - React Native App',
    description: 'Built and launched React Native application with AI-powered tools. Developed interactive rich-text editor with integrated AI APIs for text, image, and video generation. Implemented performance optimizations and custom animations.',
    image: 'https://images.unsplash.com/photo-1677039460055-954e9054452b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'AI APIs'],
    period: 'Jul 2025 - Present',
  },
  {
    title: 'Production Monitoring Dashboard',
    description: 'Integrated analytics and monitoring tools (Mixpanel & Crashlytics) to track user behavior, improve product decisions, and monitor production issues for data-driven development.',
    image: 'https://images.unsplash.com/photo-1679466956264-d020204609ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Mixpanel', 'Crashlytics', 'Analytics'],
    period: 'Jul 2025 - Present',
  },
  {
    title: 'Custom UI/UX Components',
    description: 'Designed and implemented UI/UX with custom animations, navigation flows, and optimized image rendering. Improved overall UI responsiveness by leveraging CDN-based delivery and efficient caching techniques.',
    image: 'https://images.unsplash.com/photo-1679379121062-91bcf75dcfaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React Native Paper', 'Animations', 'CDN'],
    period: 'Jul 2025 - Present',
  },
  {
    title: 'Flekd - E-commerce Mobile App',
    description: 'Engineered scalable video streaming and upload pipeline with React Native Video. Developed end-to-end social commerce features including product listing, shopping cart, and creator-driven experiences.',
    image: 'https://images.unsplash.com/photo-1677439283162-79114d6c84c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React Native', 'Video Streaming', 'E-commerce'],
    period: 'Jul 2024 - Jul 2025',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Implemented secure Razorpay payment gateway integration with seamless checkout experience. Handled order lifecycle, transaction verification, and failure handling for high reliability in production.',
    image: 'https://images.unsplash.com/photo-1677039460059-56670d026f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Razorpay', 'Payment Gateway', 'TypeScript'],
    period: 'Jul 2024 - Jul 2025',
  },
  {
    title: 'Real-time Notifications System',
    description: 'Built real-time content feeds and notifications using WebSockets and push notification services. Integrated REST APIs with robust error handling and fallback mechanisms for production reliability.',
    image: 'https://images.unsplash.com/photo-1676030788890-08b6a1cb11ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['WebSockets', 'Push Notifications', 'REST APIs'],
    period: 'Jul 2024 - Jul 2025',
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{project.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {project.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
