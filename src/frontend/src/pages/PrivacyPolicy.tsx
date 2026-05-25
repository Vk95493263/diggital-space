import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-8 text-muted-foreground hover:text-foreground"
          onClick={() => window.history.back()}
          data-ocid="privacy.back_button"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Privacy Policy
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
            1. Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect information you provide directly to us, such as when you
            fill out our contact form, subscribe to our newsletter, or
            communicate with us. This may include your name, email address,
            phone number, company name, and any other information you choose to
            provide.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We use the information we collect to respond to your inquiries,
            provide our services, send you marketing communications (with your
            consent), improve our website and services, and comply with legal
            obligations.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell or rent your personal information to third parties.
            We may share your information with service providers who assist us
            in operating our business, or when required by law.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            4. Data Security
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            5. Your Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            You have the right to access, correct, or delete your personal
            information. You may also object to or restrict certain processing
            of your data. To exercise these rights, please contact us at
            hello@diggitalspace.com.
          </p>

          <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">
            6. Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
