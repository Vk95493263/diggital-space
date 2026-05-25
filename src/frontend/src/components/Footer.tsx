import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const footerColumns = {
  services: {
    title: "Services",
    links: [
      { label: "SEO", href: "#services" },
      { label: "Social Media", href: "#services" },
      { label: "Google & Meta Ads", href: "#services" },
      { label: "Content Marketing", href: "#services" },
      { label: "Branding", href: "#services" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#about" },
      { label: "Careers", href: "#about" },
      { label: "Press", href: "#about" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Free Tools", href: "#" },
      { label: "Newsletter", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
};

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", Icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNav = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#0d1525] border-t border-border/40">
      {/* Main Footer Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <button
              type="button"
              onClick={() => handleNav("#home")}
              className="inline-block"
              data-ocid="footer.brand.link"
            >
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                DIGGITAL <span className="text-gradient-premium">SPACE</span>
              </span>
            </button>
            <p className="mt-3 text-sm font-body text-muted-foreground leading-relaxed">
              Powering Digital Growth
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80 leading-relaxed max-w-xs">
              Premium digital marketing agency helping brands scale with
              data-driven strategies and creative excellence.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40 text-muted-foreground glow-social-hover hover:bg-primary/20 hover:text-primary"
                  aria-label={s.label}
                  data-ocid={`footer.social.${s.label.toLowerCase()}`}
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-5">
              {footerColumns.services.title}
            </h4>
            <ul className="space-y-3">
              {footerColumns.services.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNav(link.href);
                      }
                    }}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.link.services.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-5">
              {footerColumns.company.title}
            </h4>
            <ul className="space-y-3">
              {footerColumns.company.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNav(link.href);
                      }
                    }}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.link.company.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-5">
              {footerColumns.resources.title}
            </h4>
            <ul className="space-y-3">
              {footerColumns.resources.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNav(link.href);
                      }
                    }}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.link.resources.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-foreground mb-5">
              {footerColumns.legal.title}
            </h4>
            <ul className="space-y-3">
              {footerColumns.legal.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNav(link.href);
                      }
                    }}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.link.legal.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="mt-14 pt-10 border-t border-border/30">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </p>
                <a
                  href="mailto:hello@diggitalspace.com"
                  className="text-sm text-foreground hover:text-primary transition-smooth"
                  data-ocid="footer.contact.email"
                >
                  hello@diggitalspace.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Phone
                </p>
                <a
                  href="tel:+15551234567"
                  className="text-sm text-foreground hover:text-primary transition-smooth"
                  data-ocid="footer.contact.phone"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Location
                </p>
                <p className="text-sm text-foreground">
                  123 Marketing Ave, Suite 400, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Placeholder */}
        <div className="mt-10 p-6 lg:p-8 rounded-2xl bg-muted/20 border border-border/30">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground">
                Stay Ahead of the Curve
              </h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Get weekly insights on digital marketing trends, growth
                strategies, and industry news.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
              data-ocid="footer.newsletter.form"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-11 px-4 rounded-xl bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-smooth w-full sm:w-72"
                data-ocid="footer.newsletter.input"
              />
              <button
                type="submit"
                className="h-11 px-6 rounded-xl bg-gradient-premium text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-smooth inline-flex items-center justify-center gap-2 whitespace-nowrap"
                data-ocid="footer.newsletter.submit_button"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30 bg-[#0a101c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70">
              &copy; 2024 Diggital Space. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/70">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "diggitalspace.com")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                data-ocid="footer.caffeine.link"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
