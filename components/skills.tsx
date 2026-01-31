'use client';

export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'],
      color: 'from-cyan-400 to-blue-500',
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'TailwindCSS', 'Next.js', 'Zustand', 'Responsive Design', 'Framer Motion'],
      color: 'from-purple-400 to-pink-500',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.io', 'Authentication'],
      color: 'from-orange-400 to-red-500',
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Render', 'Postman', 'Cloudinary'],
      color: 'from-indigo-400 to-purple-500',
    },
    {
      category: 'AI & ML',
      skills: ['TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'ML Pipelines'],
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-cyan-400">Skills & Expertise</span>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/10 hover:border-cyan-500/30 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 rounded-full text-sm text-cyan-300 transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
