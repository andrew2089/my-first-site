import Image from "next/image";
import { ContactForm } from "./components/contact-form";
import { FadeIn } from "./components/fade-in";
import { Logo } from "./components/logo";
import { ServiceIcon } from "./components/service-icons";

const clientLogos = [
  "/logos/client-1.svg",
  "/logos/client-2.svg",
  "/logos/client-3.svg",
  "/logos/client-4.svg",
  "/logos/client-5.svg",
];

const services = [
  {
    icon: "design",
    title: "Design & branding",
    description:
      "Logo placement, color palette, typography, and layout matched to your brand.",
  },
  {
    icon: "responsive",
    title: "Responsive pages",
    description:
      "Every page optimized for mobile, tablet, and desktop — no extra cost.",
  },
  {
    icon: "forms",
    title: "Contact & lead forms",
    description:
      "Working forms with email notifications, tested before handoff.",
  },
  {
    icon: "seo",
    title: "SEO foundation",
    description:
      "Meta titles, descriptions, sitemap, and Google Search Console setup.",
  },
  {
    icon: "domain",
    title: "Domain & SSL",
    description:
      "We connect your domain, configure HTTPS, and deploy to production.",
  },
  {
    icon: "support",
    title: "30-day support",
    description:
      "Post-launch edits, fixes, and guidance included for your first month.",
  },
];

const templates = [
  {
    name: "Bistro",
    category: "Restaurant & café",
    pages: "5 pages",
    description:
      "Menu, reservations, gallery, and location map — built for food businesses.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    name: "Studio",
    category: "Creative agency",
    pages: "6 pages",
    description:
      "Portfolio grid, case studies, services, and team page for agencies.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    name: "Clinic",
    category: "Health & wellness",
    pages: "7 pages",
    description:
      "Services, practitioners, booking form, and FAQ for clinics and salons.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
];

const plans = [
  {
    name: "Starter",
    price: 499,
    description: "A polished one-page presence to get online fast.",
    features: [
      "1-page landing site",
      "Template customization",
      "Contact form",
      "Mobile responsive",
      "7-day delivery",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: 899,
    description: "The full turnkey package for growing local businesses.",
    features: [
      "Up to 5 pages",
      "Copy review & SEO basics",
      "Analytics setup",
      "Domain & SSL included",
      "5-day delivery",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: 1499,
    description: "Maximum flexibility with content management built in.",
    features: [
      "Up to 10 pages",
      "Blog or portfolio module",
      "CMS for self-editing",
      "Priority support",
      "3-day delivery",
    ],
    highlighted: false,
  },
];

const steps = [
  {
    step: "01",
    title: "Pick a template",
    description: "Browse our catalog and choose the layout that fits your industry.",
  },
  {
    step: "02",
    title: "Share your brand",
    description: "Send logo, colors, copy, and photos — we handle the rest.",
  },
  {
    step: "03",
    title: "Go live",
    description: "Review, approve, and launch on your domain with full support.",
  },
];

const testimonials = [
  {
    quote:
      "We went from zero web presence to a polished site in under a week. The Bistro template was perfect for our café.",
    name: "Sarah Chen",
    role: "Owner, Ember Coffee",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  },
  {
    quote:
      "Professional result without the agency price tag. Forms, SEO, hosting — everything was truly turnkey.",
    name: "Marcus Webb",
    role: "Director, Apex Studio",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
  },
];

function LogoMarquee() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="relative overflow-hidden border-y border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-zinc-400">
        Trusted by growing businesses
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-zinc-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-zinc-950" />
        <div className="flex w-max animate-marquee items-center gap-16 px-8 text-zinc-400 dark:text-zinc-500">
          {logos.map((logo, i) => (
            <Image
              key={`${logo}-${i}`}
              src={logo}
              alt=""
              width={120}
              height={32}
              className="h-8 w-auto opacity-60 grayscale transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/85">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" aria-label="SiteLaunch home">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
            <a
              href="#services"
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Services
            </a>
            <a
              href="#templates"
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Templates
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div className="hero-grid absolute inset-0" />
        <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-violet-400/15 blur-3xl animate-pulse-soft delay-300" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="animate-fade-in-up mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-indigo-500" />
              </span>
              Turnkey websites for business
            </p>
            <h1 className="animate-fade-in-up delay-100 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Your website, ready{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent animate-shimmer">
                under key
              </span>{" "}
              — live in days
            </h1>
            <p className="animate-fade-in-up delay-200 mt-6 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Pick a template, tell us your brand details, and we deliver a
              fully configured site — design, hosting, forms, and SEO included.
            </p>
            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/30"
              >
                Start your project
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#templates"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-200 bg-white/80 px-8 text-sm font-semibold backdrop-blur transition-colors hover:border-zinc-300 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:bg-zinc-900"
              >
                Browse templates
              </a>
            </div>
            <dl className="animate-fade-in-up delay-400 mt-12 grid grid-cols-3 gap-6 border-t border-zinc-200/80 pt-8 dark:border-zinc-800">
              {[
                { value: "200+", label: "Sites launched" },
                { value: "5 days", label: "Avg. delivery" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-zinc-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-in-up delay-300 relative lg:pl-6">
            <div className="animate-float relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-300/30 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-none">
              <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/80">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-zinc-400 dark:bg-zinc-800">
                  yourbusiness.com
                </span>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                  alt="Example business website dashboard preview"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent dark:from-zinc-950/40" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-700 dark:bg-zinc-900 sm:block">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-semibold">Site deployed</p>
                  <p className="text-xs text-zinc-500">SSL active · Live now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* How it works */}
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From template to live site in three steps
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((item, i) => (
              <FadeIn key={item.step} delay={i * 120}>
                <div className="group relative rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-indigo-900 dark:hover:shadow-indigo-950/30">
                  <span className="text-4xl font-bold text-indigo-100 transition-colors group-hover:text-indigo-200 dark:text-indigo-950 dark:group-hover:text-indigo-900">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Turnkey package
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything included in your website under key
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              No surprise add-ons. One price covers design, setup, and launch.
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-indigo-900">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-950 dark:text-indigo-400 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section
        id="templates"
        className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Templates
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Choose your starting point
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Industry-specific layouts, fully customized with your brand
                before delivery.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
            >
              Request a custom template →
            </a>
          </FadeIn>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {templates.map((template, i) => (
              <FadeIn key={template.name} delay={i * 100}>
                <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={template.image}
                      alt={`${template.name} website template preview`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-zinc-800 backdrop-blur">
                      {template.pages}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold">{template.name}</h3>
                    <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
                      {template.category}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {template.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-zinc-900 text-sm font-semibold text-white transition-colors hover:bg-indigo-600 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-indigo-500 dark:hover:text-white"
                    >
                      Get this template
                    </a>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Loved by business owners
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {testimonials.map((item, i) => (
              <FadeIn key={item.name} delay={i * 120}>
                <figure className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30">
                  <blockquote className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <Image
                      src={item.avatar}
                      alt=""
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-indigo-900"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-sm text-zinc-500">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Plans for every stage
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              One-time project fees. Hosting from $12/mo after launch.
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                    plan.highlighted
                      ? "scale-[1.02] border-indigo-600 bg-indigo-600 text-white shadow-xl shadow-indigo-600/25"
                      : "border-zinc-200 bg-white hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p
                    className={`mt-2 text-sm ${
                      plan.highlighted
                        ? "text-indigo-100"
                        : "text-zinc-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      ${plan.price}
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-indigo-200" : "text-zinc-400"
                      }
                    >
                      one-time
                    </span>
                  </p>
                  <ul
                    className={`mt-8 flex flex-1 flex-col gap-3 border-t pt-8 text-sm ${
                      plan.highlighted
                        ? "border-indigo-400/30"
                        : "border-zinc-100 dark:border-zinc-800"
                    }`}
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <span
                          className={
                            plan.highlighted
                              ? "text-emerald-300"
                              : "text-emerald-600"
                          }
                        >
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 inline-flex h-11 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-white text-indigo-600 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-500"
                    }`}
                  >
                    Choose {plan.name}
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/30">
        <div className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build your site
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Fill out the form and we&apos;ll reply within one business day
                with a timeline, quote, and recommended template.
              </p>
              <ul className="mt-10 space-y-5">
                {[
                  {
                    label: "hello@sitelaunch.com",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Response within 24 hours",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    ),
                  },
                  {
                    label: "Remote — clients worldwide",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm dark:bg-zinc-900 dark:text-indigo-400">
                      {item.icon}
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 sm:flex-row">
          <a href="#" aria-label="SiteLaunch home">
            <Logo />
          </a>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} SiteLaunch. Turnkey websites for modern
            businesses.
          </p>
          <nav className="flex gap-6 text-sm text-zinc-500">
            <a href="#services" className="transition-colors hover:text-indigo-600">
              Services
            </a>
            <a href="#templates" className="transition-colors hover:text-indigo-600">
              Templates
            </a>
            <a href="#pricing" className="transition-colors hover:text-indigo-600">
              Pricing
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
