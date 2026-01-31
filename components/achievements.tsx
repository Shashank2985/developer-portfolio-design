'use client';

import { Trophy, Star } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Top 1% in JEE',
      description: 'JEE Advanced & Mains 2023 - Among 1.5M+ candidates',
      metric: 'Top 1%',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Smart India Hackathon',
      description: 'National level hackathon finalist',
      metric: '50,000+',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Peak XV Hackathon',
      description: 'Sequoia Capital & ElevenLabs - Global teams',
      metric: '500+',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Competitive Programming',
      description: 'LeetCode Rating 1600+ - 450+ Problems Solved',
      metric: 'Top 10%',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-cyan-400">Achievements</span>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/10 rounded-2xl backdrop-blur-lg hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-4 p-3 w-fit bg-cyan-500/10 group-hover:bg-cyan-500/20 rounded-xl transition-all text-cyan-400">
                  {achievement.icon}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>

                <div className="text-2xl font-bold text-cyan-400">{achievement.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
