import { ContactForm } from "./components/contact-form";

const services = [
  {
    title: "Design & branding",
    description: "Logo placement, color palette, typography, and layout matched to your brand.",
  },
  {
    title: "Responsive pages",
    description: "Every page optimized for mobile, tablet, and desktop — no extra cost.",
  },
  {
    title: "Contact & lead forms",
    description: "Working forms with email notifications, tested before handoff.",
  },
  {
    title: "SEO foundation",
    description: "Meta titles, descriptions, sitemap, and Google Search Console setup.",
  },
  {
    title: "Domain & SSL",
    description: "We connect your domain, configure HTTPS, and deploy to production.",
  },
  {
    title: "30-day support",
    description: "Post-launch edits, fixes, and guidance included for your first month.",
  },
];

const templates = [
  {
    name: "Bistro",
    category: "Restaurant & café",
    pages: "5 pages",
    description: "Menu, reservations, gallery, and location map — built for food businesses.",
    gradient: "from-amber-100 via-orange-50 to-rose-100",
    accent: "bg-amber-500",
  },
  {
    name: "Studio",
    category: "Creative agency",
    pages: "6 pages",
    description: "Portfolio grid, case studies, services, and team page for agencies.",
    gradient: "from-violet-100 via-indigo-50 to-sky-100",
    accent: "bg-violet-500",
  },
  {
    name: "Clinic",
    category: "Health & wellness",
    pages: "7 pages",
    description: "Services, practitioners, booking form, and FAQ for clinics and salons.",
    gradient: "from-emerald-100 via-teal-50 to-cyan-100",
    accent: "bg-emerald-500",
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

function TemplatePreview({
  gradient,
  accent,
}: {
  gradient: string;
  accent: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <div className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-2 dark:border-zinc-800">
        <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
      </div>
      <div className={`aspect-[4/3] bg-gradient-to-br ${gradient} p-4`}>
        <div className={`mb-3 h-2 w-16 rounded ${accent} opacity-80`} />
        <div className="mb-2 h-2 w-full max-w-[80%] rounded bg-white/70" />
        <div className="mb-4 h-2 w-full max-w-[60%] rounded bg-white/50" />
        <div className="grid grid-cols-3 gap-2">
          <div className="aspect-square rounded bg-white/60" />
          <div className="aspect-square rounded bg-white/60" />
          <div className="aspect-square rounded bg-white/60" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans text-zinc-900 dark:text-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="flex size-7 items-center justify-center rounded-lg bg-zinc-900 text-xs font-bold text-white dark:bg-zinc-50 dark:text-zinc-900">
              SL
            </span>
            SiteLaunch
          </a>
          <nav className="hidden items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400 md:flex">
            <a href="#services" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
              Services
            </a>
            <a href="#templates" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
              Templates
            </a>
            <a href="#pricing" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50">
              Pricing
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-zinc-900 px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
              Turnkey websites for business
            </p>
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Your website, ready under key — live in days
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Pick a template, tell us your brand details, and we deliver a
              fully configured site — design, hosting, forms, and SEO included.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-8 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Start your project
              </a>
              <a
                href="#templates"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-200 px-8 text-sm font-semibold transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                Browse templates
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800">
              {[
                { value: "200+", label: "Sites launched" },
                { value: "5 days", label: "Avg. delivery" },
                { value: "98%", label: "Client satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold tracking-tight">{stat.value}</dt>
                  <dd className="mt-1 text-xs text-zinc-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative lg:pl-8">
            <div className="absolute -inset-4 rounded-3xl bg-zinc-100 dark:bg-zinc-900/60" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-none">
              <div className="flex items-center gap-2 border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 flex-1 rounded-md bg-zinc-100 px-3 py-1 text-xs text-zinc-400 dark:bg-zinc-800">
                  yourbusiness.com
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="h-3 w-1/3 rounded bg-zinc-900 dark:bg-zinc-100" />
                <div className="h-2 w-2/3 rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="h-2 w-1/2 rounded bg-zinc-200 dark:bg-zinc-700" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700"
                    />
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <div className="h-9 w-28 rounded-lg bg-zinc-900 dark:bg-zinc-100" />
                  <div className="h-9 w-28 rounded-lg border border-zinc-200 dark:border-zinc-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — turnkey inclusions */}
      <section id="services" className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Turnkey package
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything included in your website under key
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              No surprise add-ons. One price covers design, setup, and launch —
              you receive a working site, not a template file.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-800">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 dark:bg-zinc-950"
              >
                <div className="mb-4 flex size-9 items-center justify-center rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  ✓
                </div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                Templates
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Choose your starting point
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Industry-specific layouts, fully customizable with your brand
                before delivery.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 text-sm font-semibold text-zinc-900 underline underline-offset-4 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
            >
              Request a custom template →
            </a>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {templates.map((template) => (
              <article
                key={template.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="p-4 pb-0">
                  <TemplatePreview
                    gradient={template.gradient}
                    accent={template.accent}
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{template.name}</h3>
                    <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {template.pages}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{template.category}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {template.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-zinc-200 text-sm font-semibold transition-colors group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white dark:border-zinc-700 dark:group-hover:border-zinc-50 dark:group-hover:bg-zinc-50 dark:group-hover:text-zinc-900"
                  >
                    Get this template
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Plans for every stage
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              One-time project fees. Hosting from $12/mo after launch.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-zinc-900 bg-zinc-900 text-white shadow-xl dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
                    : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted
                      ? "text-zinc-400 dark:text-zinc-600"
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
                      plan.highlighted
                        ? "text-zinc-500 dark:text-zinc-600"
                        : "text-zinc-400"
                    }
                  >
                    one-time
                  </span>
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-zinc-800/10 pt-8 text-sm dark:border-zinc-900/10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span
                        className={
                          plan.highlighted
                            ? "text-emerald-400 dark:text-emerald-600"
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
                      ? "bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
                      : "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  }`}
                >
                  Choose {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build your site
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Fill out the form and we&apos;ll reply within one business day
                with a timeline, quote, and recommended template.
              </p>
              <ul className="mt-10 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-white text-xs dark:bg-zinc-900">
                    ✉
                  </span>
                  hello@sitelaunch.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-white text-xs dark:bg-zinc-900">
                    ⏱
                  </span>
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-white text-xs dark:bg-zinc-900">
                    🌍
                  </span>
                  Remote — we work with clients worldwide
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="flex size-6 items-center justify-center rounded-md bg-zinc-900 text-[10px] font-bold text-white dark:bg-zinc-50 dark:text-zinc-900">
              SL
            </span>
            SiteLaunch
          </a>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} SiteLaunch. Turnkey websites for modern businesses.
          </p>
          <nav className="flex gap-6 text-sm text-zinc-500">
            <a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Services
            </a>
            <a href="#templates" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Templates
            </a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-zinc-50">
              Pricing
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
