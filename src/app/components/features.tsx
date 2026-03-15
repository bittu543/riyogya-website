import { Cloud, ShieldCheck, Workflow, MessageSquareText, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: 'Cloud-Based Platform',
    description: 'Access your data and manage operations from anywhere, at any time, with our secure and scalable cloud infrastructure.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Secure Data Management',
    description: 'We prioritize your data security with industry-leading encryption, regular backups, and robust access controls.',
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: 'Automation Workflows',
    description: 'Build custom, automated workflows to handle repetitive tasks, saving you time and reducing human error.',
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-primary" />,
    title: 'WhatsApp API Integration',
    description: 'Seamlessly integrate with the WhatsApp Business API to automate communication and enhance customer engagement.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: 'Real-time Analytics',
    description: 'Gain valuable insights with our real-time analytics dashboard, helping you make data-driven decisions.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Powerful Features to Drive Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform is packed with features designed to elevate your business operations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-6">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
