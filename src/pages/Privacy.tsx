
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground mb-8">Last updated: June 2025</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-0">
                  <li>Contact us through our website forms</li>
                  <li>Send us emails</li>
                  <li>Engage our services for projects</li>
                </ul>
                <p>
                  This may include your name, email address, company information, and project details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-0">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Deliver and manage our services</li>
                  <li>Send you project updates and communications</li>
                  <li>Improve our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies and Tracking</h2>
                <p>
                  Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-0">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at hello@nonphysical.io.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
