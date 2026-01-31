'use client';

import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  const projects = [
    {
      title: 'Scalable Real-Time Chat Application',
      description: 'Full-stack real-time chat application with instant messaging, user presence tracking, and media sharing capabilities.',
      tags: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'TailwindCSS', 'JWT Auth'],
      highlights: [
        'Real-time bidirectional communication with Socket.io',
        'Zustand global state management for scalability',
        'Image uploads via Cloudinary CDN',
        'JWT-based authentication system',
        'Deployed on Render with production optimization',
      ],
      links: {
        github: 'https://github.com/shashank2985',
        demo: 'https://chat-app-demo.com',
      },
    },
    {
      title: 'Hired Job Portal Web App',
      description: 'Full-stack job portal platform with role-based access, real-time job listings, and secure authentication.',
      tags: ['React.js', 'Supabase', 'Clerk Auth', 'PostgreSQL', 'shadcn/ui'],
      highlights: [
        'Role-based access control (company, applicant, admin)',
        'Real-time job listings with advanced filtering',
        'Resume upload and parsing system',
        'Secure authentication using Clerk and Supabase RLS',
        'Admin dashboard for moderation and analytics',
      ],
      links: {
        github: 'https://github.com/shashank2985',
        demo: 'https://hired-job-portal.com',
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-cyan-400">Featured Projects</span>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/10 rounded-2xl backdrop-blur-lg p-8 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 rounded-full text-xs font-medium text-cyan-300 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 border-cyan-500/30 hover:border-cyan-500/50 bg-transparent"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
