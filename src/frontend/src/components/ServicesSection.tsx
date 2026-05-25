import {
  ArrowRight,
  ChevronDown,
  Code2,
  FileText,
  Mail,
  Megaphone,
  Palette,
  Search,
  Share2,
  TrendingUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ElementType;
  features: string[];
}

const services: ServiceItem[] = [
  {
    id: "seo",
    title: "SEO Optimization",
    shortDescription:
      "Dominate search rankings with data-driven SEO strategies that drive organic traffic and qualified leads to your business.",
    fullDescription:
      "Our comprehensive SEO approach combines technical excellence, strategic content creation, and authoritative link building. We conduct in-depth keyword research, optimize site architecture, and create content that ranks. From local SEO to enterprise-level campaigns, we deliver measurable results that compound over time.",
    icon: Search,
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page & Off-Page Optimization",
      "Local SEO & Google Business",
      "Content Strategy & Creation",
      "Monthly Performance Reports",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDescription:
      "Build engaged communities and turn followers into customers with strategic social media campaigns across all platforms.",
    fullDescription:
      "We craft platform-specific strategies that resonate with your audience. From Instagram Reels to LinkedIn thought leadership, our team creates thumb-stopping content, manages community engagement, and runs targeted ad campaigns that build brand affinity and drive conversions.",
    icon: Share2,
    features: [
      "Platform Strategy & Management",
      "Content Creation & Curation",
      "Community Management",
      "Influencer Partnerships",
      "Social Media Advertising",
      "Analytics & Reporting",
    ],
  },
  {
    id: "paid-ads",
    title: "Google & Meta Ads",
    shortDescription:
      "Maximize ROI with precision-targeted PPC campaigns on Google, Facebook, and Instagram that convert clicks into customers.",
    fullDescription:
      "Our certified PPC specialists build and manage high-performing campaigns across Google Ads, Meta platforms, and beyond. We use advanced audience targeting, A/B testing, and conversion tracking to ensure every dollar spent delivers maximum return on investment.",
    icon: Megaphone,
    features: [
      "Google Ads Management",
      "Meta Ads (Facebook & Instagram)",
      "Display & Remarketing",
      "YouTube Advertising",
      "Conversion Rate Optimization",
      "ROI Tracking & Reporting",
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    shortDescription:
      "Tell your brand story with compelling content that educates, engages, and converts your target audience into loyal customers.",
    fullDescription:
      "Content is the foundation of digital success. Our team of strategists, writers, and designers create blog posts, whitepapers, infographics, and video content that positions your brand as an industry authority. Every piece is optimized for search and designed to move prospects through your funnel.",
    icon: FileText,
    features: [
      "Blog Strategy & Writing",
      "Whitepapers & E-books",
      "Infographics & Visual Content",
      "Video Scripts & Production",
      "Content Distribution",
      "Performance Analytics",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    shortDescription:
      "Nurture leads and drive repeat business with personalized email campaigns that deliver the right message at the right time.",
    fullDescription:
      "Email remains one of the highest-ROI marketing channels. We design automated email sequences, newsletters, and promotional campaigns that nurture leads from first touch to loyal customer. Our data-driven approach ensures optimal send times, subject lines, and content that drives opens and clicks.",
    icon: Mail,
    features: [
      "Automated Email Sequences",
      "Newsletter Design & Delivery",
      "List Segmentation & Management",
      "A/B Testing & Optimization",
      "Drip Campaigns",
      "Performance Analytics",
    ],
  },
  {
    id: "branding",
    title: "Branding & Identity",
    shortDescription:
      "Create a memorable brand identity that resonates with your audience and sets you apart from the competition.",
    fullDescription:
      "Your brand is more than a logo—it's the emotional connection you build with customers. We develop comprehensive brand strategies, visual identities, and brand guidelines that ensure consistency across every touchpoint. From startups to rebrands, we craft identities that inspire trust and loyalty.",
    icon: Palette,
    features: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Brand Guidelines & Style Guides",
      "Brand Messaging & Voice",
      "Market Research & Analysis",
      "Brand Launch Campaigns",
    ],
  },
  {
    id: "web-dev",
    title: "Website Development",
    shortDescription:
      "Build high-converting, lightning-fast websites that deliver exceptional user experiences and drive business growth.",
    fullDescription:
      "We design and develop websites that don't just look beautiful—they perform. Our development team builds responsive, SEO-friendly sites with clean code, fast load times, and intuitive navigation. Whether you need a landing page, corporate site, or e-commerce platform, we deliver digital experiences that convert.",
    icon: Code2,
    features: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Solutions",
      "Landing Page Optimization",
      "CMS Integration",
      "Performance & Security",
    ],
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization",
    shortDescription:
      "Turn more visitors into customers with data-backed CRO strategies that optimize every step of the user journey.",
    fullDescription:
      "Small improvements in conversion rates can have massive impacts on revenue. Our CRO specialists analyze user behavior, run A/B tests, and implement changes that remove friction and guide visitors toward conversion. We focus on the metrics that matter—leads, sales, and revenue.",
    icon: TrendingUp,
    features: [
      "User Behavior Analysis",
      "A/B & Multivariate Testing",
      "Landing Page Optimization",
      "Funnel Analysis & Improvement",
      "Heatmap & Session Recording",
      "Conversion Tracking Setup",
    ],
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    shortDescription:
      "Fill your pipeline with qualified prospects using multi-channel lead generation strategies that deliver consistent results.",
    fullDescription:
      "We build comprehensive lead generation systems that attract, capture, and nurture prospects across multiple channels. From LinkedIn outreach to content-driven inbound strategies, we create predictable pipelines that fuel your sales team with high-quality opportunities.",
    icon: Users,
    features: [
      "LinkedIn Lead Generation",
      "Inbound Marketing Funnels",
      "Lead Magnet Creation",
      "CRM Integration & Setup",
      "Lead Scoring & Qualification",
      "Sales Enablement Content",
    ],
  },
  {
    id: "video-marketing",
    title: "Video Marketing",
    shortDescription:
      "Captivate your audience with professional video content that tells your story and drives engagement across all platforms.",
    fullDescription:
      "Video is the most engaging content format. Our video marketing team produces everything from social media shorts to brand documentaries, explainer videos, and testimonial content. We handle concept development, production, editing, and distribution to maximize reach and impact.",
    icon: Video,
    features: [
      "Brand & Product Videos",
      "Social Media Video Content",
      "Explainer & Tutorial Videos",
      "Testimonial & Case Study Videos",
      "Video Advertising Campaigns",
      "YouTube Channel Management",
    ],
  },
  {
    id: "automation",
    title: "Marketing Automation",
    shortDescription:
      "Scale your marketing efforts with intelligent automation that nurtures leads, saves time, and drives revenue 24/7.",
    fullDescription:
      "Stop doing repetitive tasks manually. We implement marketing automation systems that handle lead nurturing, email sequences, social posting, and reporting—freeing your team to focus on strategy and creativity. Our automation solutions integrate with your existing tools and scale as you grow.",
    icon: Zap,
    features: [
      "Marketing Automation Setup",
      "CRM Integration & Workflows",
      "Lead Nurturing Sequences",
      "Chatbot Implementation",
      "Reporting Dashboards",
      "Process Optimization",
    ],
  },
];

function ServiceCard({
  service,
  index,
}: { service: ServiceItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative"
      data-ocid={`services.item.${index + 1}`}
    >
      <div
        className={`relative h-full rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 hover:bg-card hover:shadow-lg hover:shadow-accent/10 sm:p-8 ${
          isExpanded
            ? "border-accent/50 bg-card shadow-lg shadow-accent/10"
            : ""
        }`}
      >
        {/* Glow effect on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>

        <div className="relative">
          {/* Icon */}
          <div
            className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-500 group-hover:from-primary/30 group-hover:to-accent/30 group-hover:shadow-lg group-hover:shadow-accent/20 ${
              isExpanded
                ? "from-primary/30 to-accent/30 shadow-lg shadow-accent/20"
                : ""
            }`}
          >
            <Icon
              className={`h-6 w-6 text-accent transition-colors duration-300 group-hover:text-primary ${
                isExpanded ? "text-primary" : ""
              }`}
            />
          </div>

          {/* Title */}
          <h3 className="mb-3 font-display text-lg font-semibold text-foreground sm:text-xl">
            {service.title}
          </h3>

          {/* Short description */}
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {service.shortDescription}
          </p>

          {/* Expand/Collapse */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-primary"
            data-ocid="services.expand_button"
          >
            {isExpanded ? "Show Less" : "Learn More"}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-5 border-t border-border/60 pt-5">
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {service.fullDescription}
                  </p>

                  <h4 className="mb-3 font-display text-sm font-semibold text-foreground">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={`feat-${feature.slice(0, 10)}-${fIndex}`}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" bg="muted">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-accent"
        >
          What We Do
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl"
        >
          Our <span className="text-gradient-premium">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Comprehensive digital marketing solutions designed to accelerate your
          growth, amplify your brand, and maximize your ROI across every
          channel.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
