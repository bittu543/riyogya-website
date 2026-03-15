import { MapPin, Mail, Phone } from 'lucide-react';
import { AIAssistant } from './ai-assistant';

const contactDetails = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    label: 'Location',
    value: 'Sindhanur, Karnataka, India',
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    label: 'Email',
    value: 'riyogyaai@gmail.com',
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    label: 'Phone',
    value: '+91 7259570543',
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-muted/50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in Touch or Ask a Question
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re here to help. Reach out to us or get instant answers from our AI assistant.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h3 className="font-headline text-2xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{detail.icon}</div>
                  <div>
                    <h4 className="font-semibold">{detail.label}</h4>
                    <p className="text-muted-foreground">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full">
            <AIAssistant />
          </div>
        </div>
      </div>
    </section>
  );
}
