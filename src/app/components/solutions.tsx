import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse, School, Component, MessageCircle } from 'lucide-react';

const solutions = [
  {
    icon: <HeartPulse className="h-8 w-8 text-primary" />,
    title: 'Hospital Management System',
    description: 'A comprehensive, AI-enhanced system to streamline hospital operations, patient management, and administrative tasks.',
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    title: 'School ERP System',
    description: 'An integrated ERP solution for educational institutions to manage admissions, academics, and communications efficiently.',
  },
  {
    icon: <Component className="h-8 w-8 text-primary" />,
    title: 'Business Automation Tools',
    description: 'Customizable automation workflows and tools to optimize business processes, reduce manual effort, and increase productivity.',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: 'WhatsApp Communication',
    description: 'Leverage the WhatsApp Business API for automated notifications, customer support, and engaging marketing campaigns.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="bg-muted/50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tailored Solutions for Every Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide specialized platforms designed to meet the unique challenges of your industry.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Card key={solution.title} className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardHeader>
                {solution.icon}
                <CardTitle className="mt-4 font-headline">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
