
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Use</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground mb-8">Last updated: June 2025</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the nonphysical website (https://nonphysical.io), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
                <p>
                  nonphysical provides digital creation services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-0">
                  <li>Website development and design</li>
                  <li>Web app and game development</li>
                  <li>Audio plugin and sample creation</li>
                  <li>Presentation design</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Project Terms</h2>
                <p>
                  All project work is subject to individual contracts and agreements. Specific terms, deliverables, timelines, and payment schedules will be outlined in separate project agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
                <p>
                  Unless otherwise specified in a project agreement, clients retain ownership of their project deliverables upon full payment. nonphysical retains the right to showcase completed work in our portfolio unless explicitly restricted by contract.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p>
                  nonphysical shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Governing Law</h2>
                <p>
                  These terms shall be interpreted and governed in accordance with the laws of the jurisdiction where nonphysical operates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
                <p>
                  For questions about these Terms of Use, please contact us at hello@nonphysical.io.
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

export default Terms;
