'use client';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-cyan-400">About</span>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a 3rd-year student at Indian Institute of Technology, Kharagpur pursuing an Integrated Dual Degree (B.Tech + M.Tech) with a CGPA of 9.01/10.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My passion lies in building scalable, high-performance web applications using modern technologies. I'm driven by problem-solving and creating elegant solutions to complex challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy competitive programming (LeetCode: 1600+ rating, 450+ problems solved), exploring new technologies, and contributing to open-source projects.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl backdrop-blur-lg">
              <h3 className="text-cyan-400 font-semibold mb-2">Education</h3>
              <p className="text-foreground font-medium">IIT Kharagpur</p>
              <p className="text-sm text-muted-foreground">B.Tech + M.Tech | CGPA: 9.01/10</p>
              <p className="text-sm text-muted-foreground">Expected Graduation: June 2028</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl backdrop-blur-lg">
              <h3 className="text-cyan-400 font-semibold mb-2">Top 1% Achiever</h3>
              <p className="text-foreground font-medium">JEE Advanced & Mains 2023</p>
              <p className="text-sm text-muted-foreground">Among 1.5M+ candidates nationwide</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl backdrop-blur-lg">
              <h3 className="text-cyan-400 font-semibold mb-2">Competitive Programmer</h3>
              <p className="text-foreground font-medium">LeetCode: 1600+ Rating</p>
              <p className="text-sm text-muted-foreground">Top 10% globally | 450+ problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
