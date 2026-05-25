import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";

const services = [
  "SEO Optimization",
  "Social Media Marketing",
  "Google & Meta Ads",
  "Content Marketing",
  "Email Marketing",
  "Branding",
  "Website Development",
  "CRO",
  "Lead Generation",
  "Video Marketing",
  "Automation",
];

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email Us",
    value: "hello@diggitalspace.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Call Us",
    value: "+1 (888) 123-4567",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Visit Us",
    value: "New York, USA",
  },
];

const benefits = [
  { icon: <Sparkles className="h-4 w-4" />, text: "Free Strategy Call" },
  { icon: <ShieldCheck className="h-4 w-4" />, text: "No Long-Term Contracts" },
  { icon: <Timer className="h-4 w-4" />, text: "Results in 90 Days" },
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback(
    (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field as keyof FormErrors]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[field as keyof FormErrors];
          return next;
        });
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
    },
    [validate],
  );

  const handleReset = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setErrors({});
    setIsSuccess(false);
  }, []);

  return (
    <SectionWrapper id="contact" bg="background">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
          Contact Us
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Let&apos;s{" "}
          <span className="text-gradient-premium">Grow Your Business</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Ready to scale? Fill out the form and our team will reach out within
          24 hours.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column — Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Contact Info Items */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {item.label}
                  </h4>
                  <p className="text-muted-foreground mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefit Bullets */}
          <div className="rounded-2xl border border-border bg-card/50 p-6 space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Why Work With Us
            </h4>
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {benefit.icon}
                </div>
                {benefit.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-10 shadow-luxury text-center space-y-6"
                data-ocid="contact.success_state"
              >
                <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-premium">
                  <Check className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Your message has been sent successfully. Our team will reach
                    out to you within 24 hours.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full border-border px-8 py-5 font-semibold text-foreground hover:bg-muted/50 transition-smooth"
                  onClick={handleReset}
                  data-ocid="contact.reset_button"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-8 shadow-luxury space-y-5"
                data-ocid="contact.form"
                noValidate
              >
                {/* Name */}
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`bg-muted/30 border-border focus:border-primary focus:ring-primary ${
                      errors.name ? "border-destructive" : ""
                    }`}
                    data-ocid="contact.input.name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-xs text-destructive"
                      data-ocid="contact.field_error.name"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`bg-muted/30 border-border focus:border-primary focus:ring-primary ${
                      errors.email ? "border-destructive" : ""
                    }`}
                    data-ocid="contact.input.email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-xs text-destructive"
                      data-ocid="contact.field_error.email"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`bg-muted/30 border-border focus:border-primary focus:ring-primary ${
                      errors.phone ? "border-destructive" : ""
                    }`}
                    data-ocid="contact.input.phone"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-1.5 text-xs text-destructive"
                      data-ocid="contact.field_error.phone"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Company (optional) */}
                <div>
                  <Label
                    htmlFor="contact-company"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Company{" "}
                    <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="contact-company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-muted/30 border-border focus:border-primary focus:ring-primary"
                    data-ocid="contact.input.company"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <Label
                    htmlFor="contact-service"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Service Interest <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange("service", value)}
                  >
                    <SelectTrigger
                      id="contact-service"
                      className={`w-full bg-muted/30 border-border focus:border-primary focus:ring-primary ${
                        errors.service ? "border-destructive" : ""
                      }`}
                      data-ocid="contact.input.service"
                      aria-invalid={!!errors.service}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }
                    >
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p
                      id="service-error"
                      className="mt-1.5 text-xs text-destructive"
                      data-ocid="contact.field_error.service"
                    >
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`bg-muted/30 border-border focus:border-primary focus:ring-primary resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                    data-ocid="contact.input.message"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-xs text-destructive"
                      data-ocid="contact.field_error.message"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-premium py-5 text-base font-semibold text-primary-foreground shadow-glow-purple hover:shadow-glow-cyan transition-smooth disabled:opacity-70"
                  data-ocid="contact.submit_button"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
