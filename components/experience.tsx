'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Evallo',
      role: 'Full Stack Developer Intern',
      period: 'Jan 2025 – Mar 2025',
      location: 'Remote',
      highlights: [
        'Developed AI-powered lead conversion platform using React.js, Node.js, and PostgreSQL',
        'Built intelligent survey chatbot system replacing traditional tools like SurveyMonkey',
        'Implemented CRM integrations with HubSpot and Google Sheets for seamless automation',
        'Engineered features for tutoring business automation including scheduling and payment processing',
      ],
    },
    {
      company: 'Ambill.ai',
      role: 'Software Development Engineer Intern',
      period: 'Aug 2024 – Dec 2024',
      location: 'Remote',
      highlights: [
        'Developed AI-powered accounts receivable automation platform using MERN stack',
        'Processed 1,300+ Crores in annual receivables with intelligent invoice generation',
        'Reduced collection time by 60% with automated payment reminder systems',
        'Implemented RESTful APIs for invoice-to-cash cycle automation',
        'Resolved critical system bottlenecks, improving platform reliability',
      ],
    },
    {
      company: 'University of Iowa',
      role: 'Research Intern, Healthcare AI Lab',
      period: 'May 2024 – Aug 2024',
      location: 'Remote',
      highlights: [
        'Conducted applied ML research on predictive models for surgical cost estimation',
        'Developed random forest models achieving high accuracy in colon surgery cost prediction',
        'Implemented ML pipelines using Python, scikit-learn, and TensorFlow',
        'Performed extensive data analysis on surgical outcomes and postoperative complications',
        'Collaborated with medical researchers to create informed financial decision models',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <span className="text-cyan-400">Experience</span>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/10 rounded-2xl backdrop-blur-lg hover:border-cyan-500/30 transition-all duration-300 group"
            >
              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                  </div>
                  <p className="text-lg text-cyan-400 font-semibold">{exp.role}</p>
                </div>
                <div className="flex flex-col text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
