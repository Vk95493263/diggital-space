import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        isScrolled
          ? "bg-card/90 backdrop-blur-xl border-b border-border shadow-luxury"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2"
            data-ocid="header.logo_link"
          >
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              DIGGITAL <span className="text-gradient-premium">SPACE</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50"
                data-ocid={`header.nav.${item.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-premium px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-purple hover:shadow-glow-cyan transition-smooth"
              data-ocid="header.cta_button"
            >
              Get Free Consultation
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
              aria-label="Toggle menu"
              data-ocid="header.mobile_menu_toggle"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-border bg-card/95 backdrop-blur-xl px-4 pb-6 pt-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.href);
              }}
              className="block rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-smooth"
              data-ocid={`header.mobile_nav.${item.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            className="mt-3 block w-full rounded-full bg-gradient-premium px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-glow-purple"
            data-ocid="header.mobile_cta_button"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
