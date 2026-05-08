import monovaImage from '../../assets/monova.png';
import flickdImage from '../../assets/flickd.webp';

const projects = [
  {
    title: 'Monova AI Apps',
    description: 'AI-driven personal styling platform providing real-time, tailored outfit curation and digital wardrobe management. Built with React Native, TypeScript, and Redux Toolkit, integrating advanced AI APIs for personalized styling recommendations and seamless user experiences.',
    image: monovaImage,
    tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'AI APIs', 'React Native Paper', 'Mixpanel', 'Crashlytics'],
    period: 'Jul 2025 - Present',
    link: 'https://link.monova.in/download-app',
    status: 'Production',
    challenges: 'Optimized AI API response times by implementing efficient caching strategies. Resolved complex state management issues with Redux Toolkit for real-time outfit updates. Handled image optimization and CDN integration for faster wardrobe rendering.',
  },
  {
    title: 'Flickd Social Platform',
    description: 'Mobile-first social commerce platform with dynamic media feeds, real-time updates, and optimized rendering. Engineered scalable video streaming pipelines, e-commerce features, and secure payment gateway integration for seamless social shopping experiences.',
    image: flickdImage,
    tags: ['React Native', 'Video Streaming', 'E-commerce', 'Razorpay', 'WebSockets', 'REST APIs', 'React Native Video'],
    period: 'Jul 2024 - Jul 2025',
    link: 'https://www.flickd.in/downloads',
    status: 'Production',
    challenges: 'Architected scalable video streaming pipeline handling 10K+ concurrent users. Debugged memory leaks in video playback with efficient cleanup. Integrated Razorpay payment gateway with robust error handling and transaction verification for production reliability.',
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gradient-to-b from-amber-50/20 via-transparent to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12">Featured Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] overflow-hidden ${index === 0
                ? 'bg-gradient-to-br from-amber-900/20 via-amber-800/10 to-amber-900/20 border-amber-700/20 hover:shadow-xl hover:shadow-amber-500/20'
                : 'bg-gradient-to-br from-slate-700/20 via-slate-600/10 to-slate-700/20 border-amber-700/20 hover:shadow-xl hover:shadow-slate-500/20'
                }`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-[28%] overflow-hidden bg-muted p-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full rounded-xl object-contain hover:scale-110 transition-transform duration-500 min-h-[250px] md:min-h-[350px]"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-[72%] p-8 space-y-5">
                  {/* Header with Title, Status, Download Button */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{project.title}</h3>
                      <span className="inline-block px-3 py-1 text-xs bg-amber-600/20 text-amber-600 rounded-full border border-amber-600/30 font-medium">
                        {project.status}
                      </span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-yellow-500 text-white text-sm font-medium rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300"
                    >
                      Download
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 bg-muted/60 rounded-lg border border-border/50 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Challenges & Solutions</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>

                  {/* Period */}
                  <div className="pt-2">
                    <span className="text-xs text-muted-foreground font-medium">
                      {project.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
