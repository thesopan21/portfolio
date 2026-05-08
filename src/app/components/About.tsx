export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            I'm a React Native Developer with 2 years of experience building and scaling cross-platform mobile applications using React Native, TypeScript, and Redux Toolkit. With a strong focus on performance, rapid iteration, and delivering feature-centric applications, I drive development from architecture to production deployment.
          </p>
          <p>
            Currently at Monova AI (App Link) in Bengaluru, I build and launch React Native applications using Redux Toolkit, React Native Paper, and TypeScript. I specialize in developing interactive tools with integrated AI APIs, asset optimization, performance monitoring, and implementing custom animations and navigation flows.
          </p>
          <p>
            Previously at Flekd (App Link) in New Delhi, I engineered scalable video streaming and upload pipelines, built e-commerce features, implemented secure payment gateways, and managed app deployment to the Play Store/App Store.
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
                'React Native Paper',
                'Push Notifications',
                'Deep Linking',
                'Mixpanel',
                'Crashlytics',
                'Razorpay',
                'Git',
                'GitHub',
                'Expo',
                'EAS Build',
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
