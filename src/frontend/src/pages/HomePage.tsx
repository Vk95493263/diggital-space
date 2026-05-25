import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import PricingSection from "@/components/PricingSection";
import SectionWrapper from "@/components/SectionWrapper";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Stat } from "@/types";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const stats: Stat[] = [
  { value: "340", label: "Avg. Traffic Increase", suffix: "%" },
  { value: "5.2", label: "Avg. ROAS", suffix: "x" },
  { value: "150", label: "Clients Served", suffix: "+" },
  { value: "12", label: "Years Experience", suffix: "+" },
];

export default function HomePage() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        {/* Animated floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[15%] h-72 w-72 rounded-full bg-primary/15 blur-[100px] animate-float" />
          <div className="absolute top-[20%] right-[10%] h-96 w-96 rounded-full bg-accent/12 blur-[120px] animate-float-slow" />
          <div className="absolute bottom-[15%] left-[40%] h-80 w-80 rounded-full bg-primary/10 blur-[100px] animate-float-reverse" />
          <div className="absolute bottom-[5%] right-[25%] h-64 w-64 rounded-full bg-accent/8 blur-[80px] animate-float" />
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-primary/5 blur-[150px]" />

          {/* Geometric shapes */}
          <div className="absolute top-[15%] right-[20%] h-32 w-32 border border-primary/20 rounded-2xl rotate-12 animate-float-slow" />
          <div className="absolute bottom-[25%] left-[8%] h-24 w-24 border border-accent/20 rounded-full animate-float-reverse" />
          <div className="absolute top-[60%] right-[8%] h-16 w-16 border border-primary/15 rotate-45 animate-float" />

          {/* Particle dots */}
          {[
            { size: 2, left: 15, top: 10, color: 0, delay: 1, duration: 10 },
            { size: 3, left: 85, top: 20, color: 1, delay: 3, duration: 12 },
            { size: 1, left: 45, top: 5, color: 0, delay: 0, duration: 9 },
            { size: 2, left: 70, top: 40, color: 1, delay: 5, duration: 11 },
            { size: 3, left: 25, top: 60, color: 0, delay: 2, duration: 13 },
            { size: 1, left: 90, top: 70, color: 1, delay: 7, duration: 10 },
            { size: 2, left: 5, top: 80, color: 0, delay: 4, duration: 12 },
            { size: 3, left: 55, top: 85, color: 1, delay: 1, duration: 9 },
            { size: 1, left: 35, top: 30, color: 0, delay: 6, duration: 11 },
            { size: 2, left: 75, top: 15, color: 1, delay: 8, duration: 10 },
            { size: 3, left: 10, top: 45, color: 0, delay: 2, duration: 13 },
            { size: 1, left: 60, top: 55, color: 1, delay: 5, duration: 9 },
            { size: 2, left: 80, top: 90, color: 0, delay: 3, duration: 12 },
            { size: 3, left: 20, top: 95, color: 1, delay: 0, duration: 10 },
            { size: 1, left: 50, top: 75, color: 0, delay: 9, duration: 11 },
            { size: 2, left: 40, top: 50, color: 1, delay: 4, duration: 13 },
            { size: 3, left: 65, top: 25, color: 0, delay: 7, duration: 9 },
            { size: 1, left: 95, top: 50, color: 1, delay: 1, duration: 12 },
            { size: 2, left: 30, top: 15, color: 0, delay: 6, duration: 10 },
            { size: 3, left: 85, top: 60, color: 1, delay: 3, duration: 11 },
          ].map((p) => (
            <div
              key={`particle-${p.left}-${p.top}`}
              className="absolute rounded-full animate-particle"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                left: `${p.left}%`,
                top: `${p.top}%`,
                backgroundColor:
                  p.color === 0
                    ? "oklch(0.54 0.24 290 / 0.6)"
                    : "oklch(0.65 0.25 200 / 0.6)",
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.54 0.24 290 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.54 0.24 290 / 0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 backdrop-blur-sm"
              >
                <Star className="h-3.5 w-3.5 fill-primary" />
                Award-Winning Digital Agency
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
              >
                Scale Your Business With{" "}
                <span className="text-gradient-premium">
                  Powerful Digital Marketing
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                We combine SEO expertise, precision paid advertising, social
                media mastery, and growth marketing strategies to turn your
                brand into an industry leader.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="relative rounded-full bg-gradient-premium px-8 py-6 text-base font-semibold text-primary-foreground shadow-glow-purple hover:shadow-glow-cyan transition-smooth animate-pulse-glow group overflow-hidden"
                  onClick={() => scrollTo("#services")}
                  data-ocid="hero.start_growing_button"
                >
                  <span className="relative z-10 flex items-center">
                    Start Growing
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="relative rounded-full border-2 border-border/80 px-8 py-6 text-base font-semibold text-foreground hover:bg-muted/50 hover:border-primary/40 transition-smooth backdrop-blur-sm"
                  onClick={() => scrollTo("#contact")}
                  data-ocid="hero.book_call_button"
                >
                  Book Strategy Call
                </Button>
              </motion.div>

              {/* Animated trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                      className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-primary-foreground"
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                      >
                        <Star className="h-4 w-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Trusted by 150+ brands worldwide
                  </p>
                </div>
              </motion.div>

              {/* Partner badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8 flex items-center gap-6 text-muted-foreground/60"
              >
                <span className="text-xs uppercase tracking-wider font-medium">
                  Certified Partners:
                </span>
                <div className="flex items-center gap-4">
                  {["Google", "Meta", "HubSpot"].map((partner) => (
                    <span
                      key={partner}
                      className="text-xs font-semibold px-2 py-1 rounded-md bg-muted/30 border border-border/50"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md p-6 shadow-luxury overflow-hidden">
                {/* Card glow */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />

                <div className="relative space-y-4">
                  {/* Mock dashboard cards */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Total Revenue
                      </p>
                      <p className="text-2xl font-bold text-foreground mt-1">
                        $2.4M
                      </p>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                      +24.5%
                    </div>
                  </div>
                  <div className="h-px bg-border/60" />
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Visitors", val: "48.2K", change: "+12%" },
                      { label: "Conversions", val: "3.8K", change: "+18%" },
                      { label: "Bounce Rate", val: "32%", change: "-5%" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-lg bg-muted/30 p-3 border border-border/40"
                      >
                        <p className="text-xs text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground mt-1">
                          {item.val}
                        </p>
                        <p className="text-xs text-emerald-400 mt-0.5">
                          {item.change}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Mock chart bars */}
                  <div className="flex items-end gap-2 h-24 pt-4">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                      (h, i) => (
                        <motion.div
                          key={`bar-${h}`}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-primary to-accent opacity-80 hover:opacity-100 transition-opacity"
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 rounded-xl border border-border/60 bg-card/80 backdrop-blur-md px-4 py-3 shadow-luxury"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-premium flex items-center justify-center animate-pulse-glow">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Growth Rate
                    </p>
                    <p className="text-xs text-emerald-400">+127% this year</p>
                  </div>
                </div>
              </motion.div>

              {/* Second floating element */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 rounded-xl border border-border/60 bg-card/80 backdrop-blur-md px-4 py-3 shadow-luxury"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      New Leads
                    </p>
                    <p className="text-xs text-accent">+2,847 this month</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="relative border-y border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <p className="font-display text-4xl lg:text-5xl font-bold text-gradient-premium group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
