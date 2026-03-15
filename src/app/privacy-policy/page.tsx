import { Header } from '@/app/components/header';
import { Footer } from '@/app/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: July 29, 2024</p>

            <div className="mt-8 space-y-6 text-muted-foreground">
              <p>
                Riyogya ("us", "we", or "our") operates the Riyogya website and the services it provides (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>

              <div className="space-y-4">
                <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Information Collection and Use</h2>
                <p>
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-headline text-xl font-bold text-foreground">Types of Data Collected</h3>
                <h4 className="font-bold text-foreground/90">Personal Data</h4>
                <p>
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Business Name and Details</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>

                <h4 className="pt-2 font-bold text-foreground/90">Usage Data</h4>
                <p>
                  We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                
                <h4 className="pt-2 font-bold text-foreground/90">Tracking & Cookies Data</h4>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Use of Data</h2>
                <p>Riyogya uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer care and support</li>
                  <li>To provide analysis or valuable information so that we can improve the Service</li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
                  <li>To share information with trusted third-party partners to provide and improve the Service, and for marketing purposes, where permitted by law.</li>
                </ul>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Legal Basis for Processing Personal Data</h2>
                  <p>
                    Our legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Data we collect and the specific context in which we collect it. We may process your Personal Data because:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>We need to perform a contract with you</li>
                    <li>You have given us permission to do so</li>
                    <li>The processing is in our legitimate interests and it is not overridden by your rights</li>
                    <li>To comply with the law</li>
                  </ul>
              </div>
              
              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Transfer Of Data</h2>
                  <p>
                    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Disclosure Of Data</h2>
                  <p>Riyogya may disclose your Personal Data in certain situations:</p>
                  <h4 className="pt-2 font-bold text-foreground/90">Business Transaction</h4>
                  <p>If Riyogya is involved in a merger, acquisition or asset sale, your Personal Data may be transferred. We will provide notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                  <h4 className="pt-2 font-bold text-foreground/90">Disclosure for Law Enforcement</h4>
                  <p>Under certain circumstances, Riyogya may be required to disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                  <h4 className="pt-2 font-bold text-foreground/90">Legal Requirements</h4>
                  <p>Riyogya may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>To comply with a legal obligation</li>
                    <li>To protect and defend the rights or property of Riyogya</li>
                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>To protect the personal safety of users of the Service or the public</li>
                    <li>To protect against legal liability</li>
                  </ul>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Security of Data</h2>
                  <p>
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
              </div>

              <div className="space-y-4">
                  <h2 className="pt-4 font-headline text-2xl font-bold text-foreground">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at riyogyaai@gmail.com.</p>
              </div>
              
              <p className="pt-8 text-sm italic">
                Disclaimer: This Privacy Policy is a template and should not be considered legal advice. You should consult with a legal professional to ensure it meets the specific needs and legal requirements of your business.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
