'use client';

import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3 justify-center">
            <span className="text-cyan-400">Let's Connect</span>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:shashankguptaji@kgpian.iitkgp.ac.in"
            className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl group transition-all"
          >
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="font-semibold text-foreground mb-1">Email</p>
            <p className="text-sm text-muted-foreground group-hover:text-cyan-400 transition-colors break-all">
              shashankguptaji@kgpian.iitkgp.ac.in
            </p>
          </a>

          <a
            href="https://github.com/shashank2985"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl group transition-all"
          >
            <Github className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="font-semibold text-foreground mb-1">GitHub</p>
            <p className="text-sm text-muted-foreground group-hover:text-cyan-400 transition-colors">
              @shashank2985
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/shashank-gupta-06784228a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl group transition-all"
          >
            <Linkedin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <p className="font-semibold text-foreground mb-1">LinkedIn</p>
            <p className="text-sm text-muted-foreground group-hover:text-cyan-400 transition-colors">
              ShashankGupta
            </p>
          </a>
        </div>

        <Button
          size="lg"
          className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
          asChild
        >
          <a href="mailto:shashankguptaji@kgpian.iitkgp.ac.in">
            Send an Email <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
