
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: ContactEmailRequest = await req.json();

    console.log("Sending email to:", email);

    const emailResponse = await resend.emails.send({
      from: "nonphysical <hello@nonphysical.io>",
      to: [email],
      bcc: ["pcbergbusch@gmail.com"],
      subject: "Thank you for contacting nonphysical!",
      html: `
        <p>
          Dear ${email.split("@")[0]},
        </p>
        <p>
          We look forward to discussing your project.
          <br>
          Someone will reach out with more information in the next 48 hours.
        </p>
        <p>
          Best regards,
          <br>
          the nonphysical team
        </p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
