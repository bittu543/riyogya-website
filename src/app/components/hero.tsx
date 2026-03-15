import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.1),transparent)]"></div>
      <div className="container text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Riyogya – Smart SaaS Solutions for Modern Businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
            Empower your organization with our AI-powered automation, advanced ERP systems, and seamless WhatsApp communication tools.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg">
            <a href="#contact">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
