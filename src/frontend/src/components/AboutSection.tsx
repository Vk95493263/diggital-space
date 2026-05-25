import {
  BarChart3,
  Globe,
  Heart,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  {
    icon: Users,
    label: "Team of Experts",
    description: "Seasoned marketers & strategists",
  },
  {
    icon: BarChart3,
    label: "Data-Driven Approach",
    description: "Decisions backed by analytics",
  },
  {
    icon: Trophy,
    label: "Proven Results",
    description: "Track record of 3x+ ROI",
  },
  {
    icon: Heart,
    label: "Client-Focused",
    description: "Your growth is our mission",
  },
];

const stats = [
  { value: "150", suffix: "+", label: "Clients" },
  { value: "12", suffix: "+", label: "Years Experience" },
  { value: "500", suffix: "+", label: "Campaigns" },
  { value: "98", suffix: "%", label: "Client Retention" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" bg="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left Column — Text */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-semibold tracking-widest uppercase text-accent"
            >
              Who We Are
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              About{" "}
              <span className="text-gradient-premium">Diggital Space</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Diggital Space is a premium digital marketing agency built for
            brands that refuse to blend in. We combine creative storytelling
            with performance-driven strategies to help businesses scale across
            every digital channel — from search engines to social feeds.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base leading-relaxed text-muted-foreground/80"
          >
            Our mission is simple: turn your digital presence into your most
            powerful growth engine. With over a decade of experience and
            hundreds of successful campaigns, we bring the expertise, tools, and
            passion needed to dominate your market.
          </motion.p>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-4 transition-smooth hover:border-primary/30 hover:bg-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-premium text-primary-foreground shadow-lg">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-foreground">
                    {item.label}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column — Decorative Metrics Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          {/* Decorative background glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-premium opacity-10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-2xl">
            {/* Card Header */}
            <div className="border-b border-border/50 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-premium text-primary-foreground">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    Growth Metrics
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Real results from real campaigns
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-px bg-border/30">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group relative bg-card/60 p-6 text-center transition-smooth hover:bg-card"
                >
                  <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                    {stat.value}
                    <span className="text-gradient-premium">{stat.suffix}</span>
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative mini-chart area */}
            <div className="border-t border-border/50 px-6 py-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Campaign Performance
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                  <Zap className="h-3 w-3" />
                  Live
                </span>
              </div>
              <div className="flex items-end gap-2 h-16">
                {[35, 55, 42, 68, 52, 78, 65, 88, 72, 95].map((h, i) => (
                  <motion.div
                    key={`bar-${h}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.05,
                      ease: "easeOut",
                    }}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/60 to-accent/80"
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground/60">
                <span>Jan</span>
                <span>Mar</span>
                <span>Jun</span>
                <span>Sep</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Bottom badges */}
            <div className="border-t border-border/50 px-6 py-4">
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: Target, label: "Precision Targeting" },
                  { icon: Globe, label: "Global Reach" },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    <badge.icon className="h-3 w-3 text-accent" />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
