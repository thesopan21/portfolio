export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-gradient-to-br from-slate-900/5 via-amber-100/10 to-slate-900/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,116,139,0.06),transparent_50%)]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I'm a React Native Developer with 2 years of experience building and scaling cross-platform mobile applications using React Native, TypeScript, and Redux Toolkit. With a strong focus on performance, rapid iteration, and delivering feature-centric applications, I drive development from architecture to production deployment.
          </p>

          <div className="pt-8">
            <h3 className="text-xl mb-4 text-foreground">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React Native',
                'TypeScript',
                'JavaScript',
                'Redux Toolkit',
                'RTK Query',
                'Push Notifications',
                'Deep Linking',
                'Mixpanel',
                'Crashlytics',
                'Razorpay',
                'Git',
                'GitHub',
                'Expo',
                'EAS Build',
                'OTA Updates',
                'Android Studio',
                'Xcode',
                'Postman',
                'Figma'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-xl mb-4 text-foreground">Education</h3>
            <p className="text-foreground">B.E. in Artificial Intelligence and Machine Learning</p>
            <p className="text-sm">Pune University</p>
          </div>
        </div>
      </div>
    </section>
  );
}
