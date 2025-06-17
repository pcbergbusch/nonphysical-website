import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground mb-8">Information in accordance with section 5 TMG</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Company Information</h2>
                <div className="space-y-2">
                  <p><strong>nonphysical</strong></p>
                  <p>Digital Creative Services</p>
                  <p>Address: [Your Business Address]</p>
                  <p>City, Postal Code</p>
                  <p>Country</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
                <div className="space-y-2">
                  <p>Email: hello@nonphysical.io</p>
                  <p>Phone: [Your Phone Number]</p>
                  <p>Website: https://nonphysical.io</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Represented by</h2>
                <p>[Name of Legal Representative]</p>
                <p>[Title/Position]</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Register Entry</h2>
                <div className="space-y-2">
                  <p>Registration Court: [Court Name]</p>
                  <p>Registration Number: [Registration Number]</p>
                  <p>VAT ID: [VAT Identification Number]</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Liability Insurance</h2>
                <div className="space-y-2">
                  <p>Insurance Company: [Insurance Provider Name]</p>
                  <p>Coverage Area: [Geographic Coverage]</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute Resolution</h2>
                <p>
                  We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Liability for Contents</h2>
                <p>
                  As service providers, we are liable for own contents of these websites according to Sec. 7, Para.1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia Act (TMG), service providers are not under obligation to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
                </p>
                <p>
                  Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Liability for Links</h2>
                <p>
                  Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for the contents of the linked websites.
                </p>
                <p>
                  We check the linked websites for possible violations of law at the time of linking. Illegal contents were not detected at the time of linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Copyright</h2>
                <p>
                  Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator.
                </p>
                <p>
                  Downloads and copies of these websites are permitted for private use only. The commercial use of our contents without permission of the originator is prohibited.
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

export default Impressum;
