'use client';

export function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 bg-gradient-to-b from-transparent to-cyan-500/5 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Shashank Gupta. All rights reserved.</p>
          <p>Built with Next.js, TailwindCSS, and Shadcn UI</p>
        </div>
      </div>
    </footer>
  );
}
