import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-foreground"
          onClick={() => window.history.back()}
          data-ocid="terms.back_button"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Terms & Conditions
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing and using the Diggital Space website and services, you
            agree to be bound by these Terms & Conditions. If you do not agree
            to these terms, please do not use our services.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            2. Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Diggital Space provides digital marketing services including but not
            limited to SEO, social media marketing, PPC advertising, content
            marketing, and web development. The specific scope of services will
            be defined in a separate agreement.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            3. Intellectual Property
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            All content on this website, including text, graphics, logos, and
            images, is the property of Diggital Space and is protected by
            copyright and other intellectual property laws. You may not
            reproduce, distribute, or create derivative works without our
            express written permission.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Diggital Space shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or
            relating to your use of our services or website.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            5. Governing Law
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These Terms & Conditions shall be governed by and construed in
            accordance with the laws of the State of New York, without regard to
            its conflict of law provisions.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            6. Changes to Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We reserve the right to modify these Terms & Conditions at any time.
            Changes will be effective immediately upon posting to this page.
            Your continued use of our services constitutes acceptance of the
            revised terms.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            7. Contact Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about these Terms & Conditions, please contact us at{" "}
            <a
              href="mailto:hello@diggitalspace.com"
              className="text-primary hover:underline"
            >
              hello@diggitalspace.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
