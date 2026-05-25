import type { Testimonial } from "@/types";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionWrapper from "./SectionWrapper";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Chief Marketing Officer",
    company: "TechVenture Inc.",
    quote:
      "Diggital Space transformed our entire digital presence. Within three months, our organic traffic increased by 340% and our lead generation doubled. Their strategic approach to SEO and content marketing is unmatched in the industry.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Founder & CEO",
    company: "NexGen Solutions",
    quote:
      "The ROI we've seen from our paid advertising campaigns has been extraordinary. Diggital Space's team understands data-driven marketing at a level that consistently delivers results. Our cost per acquisition dropped by 60%.",
    rating: 5,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "VP of Digital Strategy",
    company: "Global Retail Partners",
    quote:
      "Working with Diggital Space on our social media strategy was a game-changer. They built our brand voice, grew our following by 500K in six months, and created content that genuinely resonates with our audience.",
    rating: 5,
  },
  {
    id: "4",
    name: "James Whitfield",
    role: "Director of E-Commerce",
    company: "Luxe Brands Group",
    quote:
      "Their conversion rate optimization expertise helped us increase our e-commerce revenue by 180% without increasing our ad spend. The attention to detail and data analysis is world-class. Highly recommended.",
    rating: 5,
  },
  {
    id: "5",
    name: "Amara Okafor",
    role: "Head of Growth",
    company: "Finova Technologies",
    quote:
      "Diggital Space's email marketing automation sequences have revolutionized our customer journey. Our email revenue now accounts for 35% of total sales, and our open rates are consistently above 40%.",
    rating: 5,
  },
  {
    id: "6",
    name: "David Park",
    role: "Marketing Director",
    company: "Summit Healthcare",
    quote:
      "The branding and website development work exceeded all expectations. Our new site loads in under a second, ranks on page one for 50+ keywords, and has become our most powerful sales tool.",
    rating: 5,
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    "bg-primary/20 text-primary",
    "bg-accent/20 text-accent",
    "bg-purple-500/20 text-purple-400",
    "bg-cyan-500/20 text-cyan-400",
    "bg-emerald-500/20 text-emerald-400",
    "bg-rose-500/20 text-rose-400",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={`star-${s}`}
          className={`h-4 w-4 ${
            s <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, 1);
    setTimerKey((k) => k + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current === 0 ? testimonials.length - 1 : current - 1, -1);
    setTimerKey((k) => k + 1);
  }, [current, goTo]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: timerKey is used intentionally to reset interval
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrent((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, timerKey]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <SectionWrapper id="testimonials" bg="muted">
      <div className="text-center mb-12 lg:mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-3"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto"
        >
          Real results from real businesses. See how we've helped companies
          scale their digital marketing and achieve extraordinary growth.
        </motion.p>
      </div>

      <div
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        data-ocid="testimonials.section"
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 p-3 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth shadow-lg"
          aria-label="Previous testimonial"
          data-ocid="testimonials.pagination_prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 p-3 rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth shadow-lg"
          aria-label="Next testimonial"
          data-ocid="testimonials.pagination_next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-premium p-[1px]">
            <div className="h-full w-full rounded-2xl bg-card" />
          </div>

          <div className="relative p-8 sm:p-10 lg:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="flex flex-col items-center text-center"
                data-ocid={`testimonials.item.${current + 1}`}
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary/40" />
                </div>

                {/* Stars */}
                <div className="mb-6">
                  <StarRating rating={t.rating} />
                </div>

                {/* Quote Text */}
                <blockquote className="text-foreground text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
                  "{t.quote}"
                </blockquote>

                {/* Avatar + Info */}
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`h-14 w-14 rounded-full flex items-center justify-center text-lg font-bold ${getAvatarColor(
                      t.name,
                    )}`}
                    aria-hidden="true"
                  >
                    {getInitials(t.name)}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-base">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {t.role} at {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dot Indicators */}
        <div
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={`dot-${testimonial.id}`}
              onClick={() => {
                goTo(index, index > current ? 1 : -1);
                setTimerKey((k) => k + 1);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-gradient-premium"
                  : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-selected={index === current}
              role="tab"
              data-ocid={`testimonials.tab.${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
