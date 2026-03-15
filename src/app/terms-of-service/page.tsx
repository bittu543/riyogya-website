import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: July 29, 2024</p>

            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Riyogya website and services (the "Service") operated by Riyogya ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms.
              </p>

              <div className="space-y-4">
                <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">1. Accounts</h2>
                <p>
                  When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">2. Intellectual Property</h2>
                <p>
                  The Service and its original content, features and functionality are and will remain the exclusive property of Riyogya and its licensors. The Service is protected by copyright, trademark, and other laws of both the India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Riyogya.
                </p>
              </div>
              
              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">3. User Consent, Data, and Communications</h2>
                  <p>
                    By creating an account and using the Service, you provide us with information, files, and data that you submit to Riyogya (together, "your data"). You grant Riyogya and its trusted third parties a worldwide, non-exclusive, royalty-free, sublicensable license to use, copy, modify, distribute, and process your data solely for the purpose of providing, improving, and promoting our Service.
                  </p>
                  <p className="mt-4">
                    Our Service includes a WhatsApp communication platform utilizing the WhatsApp Business API. By using this feature, you represent and warrant that you have obtained all necessary consents from your end-users ("customers") to communicate with them via WhatsApp for transactional, marketing, and other purposes. You agree to comply with all applicable laws and regulations, including data protection and privacy laws, as well as the <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">WhatsApp Business and Commerce Policies</a>.
                  </p>
                  <p className="mt-4">
                    You are solely responsible for your conduct, the content of your data, and your communications with others while using the Service. You agree to indemnify and hold harmless Riyogya from any claims, damages, or losses arising from your failure to obtain proper consent or your violation of any communication policies or regulations. We reserve the right to review your conduct and content for compliance with these Terms and to remove any content and suspend or terminate your access for violations.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">4. Termination</h2>
                  <p>
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">5. Limitation Of Liability</h2>
                  <p>
                    In no event shall Riyogya, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">6. Disclaimer</h2>
                  <p>
                    Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">7. Governing Law</h2>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of Karnataka, India, without regard to its conflict of law provisions.
                  </p>
              </div>
              
              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">8. Changes</h2>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Contact Us</h2>
                  <p>If you have any questions about these Terms, please contact us at riyogyaai@gmail.com.</p>
              </div>

              <p className="pt-8 text-sm italic">
                Disclaimer: These Terms of Service are a template and should not be considered legal advice. You should consult with a legal professional to ensure they meet the specific needs and legal requirements of your business.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
