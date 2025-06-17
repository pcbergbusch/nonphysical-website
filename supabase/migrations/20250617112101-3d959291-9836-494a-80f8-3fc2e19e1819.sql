
-- Create a table to store contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it publicly readable for admin purposes
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Only authenticated users can view submissions (for admin access later)
CREATE POLICY "Only authenticated users can view submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
