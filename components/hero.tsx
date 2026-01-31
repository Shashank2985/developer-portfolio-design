'use client';

import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse" />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          <span className="text-sm text-cyan-400">Available for opportunities</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-foreground">Shashank</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
          Building scalable web products at the intersection of systems, AI, and user experience. IIT Kharagpur student with passion for clean code and elegant solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-cyan-500/30 hover:border-cyan-500/50 bg-transparent"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/shashank2985"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-cyan-400" />
          </a>
          <a
            href="https://linkedin.com/in/ShashankGupta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-cyan-400" />
          </a>
          <a
            href="mailto:shashankguptaji@kgpian.iitkgp.ac.in"
            className="p-3 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
