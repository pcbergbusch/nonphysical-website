
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !consent) {
      toast({
        title: "Error",
        description: "Please enter your email and consent to being contacted.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          email,
          message: message || null,
        });

      if (dbError) {
        throw dbError;
      }

      // Send email
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: { email },
      });

      if (emailError) {
        throw emailError;
      }

      toast({
        title: "Message received!",
        description: "We'll be in touch within the next 48 hours.",
      });
      
      setEmail('');
      setMessage('');
      setConsent(false);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Get in touch</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Ready to bring your digital vision to life? Let's discuss your project and explore how we can help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-left">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={4}
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I consent to being contacted by nonphysical regarding my project inquiry. 
                    I understand my data will be processed according to the{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={!consent || isSubmitting}
                >
                  {isSubmitting ? "Starting Project..." : "Start a Project"}
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col items-end justify-end space-y-8">
              <div className="flex items-center space-x-8">
                <a 
                  href="mailto:hello@nonphysical.io"
                  aria-label="Email us"
                >
                  <Mail className="w-8" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/paul-bergbusch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on LinkedIn"
                >
                  <img src="LI-In-Bug.png" className="w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
