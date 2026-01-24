import BreadcrumbHero from "@/components/BreadcrumbHero";
export default function AboutPage() {
  const values = [
    {
      title: "Practical first",
      desc: "We ship what you actually need — clean pages, clear CTAs, and simple workflows that reduce admin.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=70",
      alt: "Team collaboration",
    },
    {
      title: "Fast and clean builds",
      desc: "Performance, clarity, and mobile-first layouts. No heavy animations that slow your site down.",
      img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1800&q=70",
      alt: "Developer working",
    },
    {
      title: "Straightforward process",
      desc: "Clear scope, milestones, and feedback loops so you always know what’s happening.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=70",
      alt: "Planning notes",
    },
  ];

  const capabilities = [
    {
      title: "Websites",
      desc: "Business sites that explain what you do and make it easy to contact you.",
      points: [
        "Modern design",
        "Mobile-first",
        "SEO basics",
        "Forms + email delivery",
      ],
    },
    {
      title: "Landing pages",
      desc: "Conversion-focused pages for offers, campaigns, and quick launches.",
      points: ["Clear CTA", "Fast load", "Analytics setup", "Simple iteration"],
    },
    {
      title: "Small web apps",
      desc: "Lightweight tools that automate one workflow without overbuilding.",
      points: [
        "Requests / booking",
        "Dashboards",
        "Portals",
        "Deploy + handover",
      ],
    },
  ];

  const faqs = [
    {
      q: "What do you need to start?",
      a: "A short description of your business, services, contact details, and 2–3 sites you like. If you don’t have copy, we’ll structure it.",
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes. You can either manage content yourself after handover or choose a simple maintenance plan.",
    },
    {
      q: "Can we start small?",
      a: "Yes. Start with the simplest version and add features only when they’re needed.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes — remote-friendly, South Africa-based. Most projects run smoothly over WhatsApp/email + short check-ins.",
    },
  ];

  const CardImage = ({ src, alt, height = "h-52" }) => (
    <div className={`relative ${height} w-full overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
    </div>
  );

  return (
    <>
      {/* HERO */}
      <BreadcrumbHero
        title="About"
        subtitle="Who I am, how I work, and what you can expect when building with me."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* STORY + QUICK FACTS */}
      <section className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-7">
              <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
                What we do
              </h2>
              <div className="mt-4 h-1 w-24 rounded-full bg-primary" />

              <p className="mt-6 text-muted leading-relaxed">
                Many small businesses lose leads because their website is slow,
                confusing, or outdated. We focus on clean layouts, clear
                messaging, and practical features that convert — and we keep the
                build simple so it’s easy to maintain.
              </p>

              <p className="mt-4 text-muted leading-relaxed">
                If you need more than a website, we also build small web apps to
                streamline one workflow (requests, booking, simple dashboards).
                Start with the simplest version, then iterate.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/#work"
                  className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  View work examples
                </a>
                <a
                  href="/contact"
                  className="rounded-2xl bg-primary px-6 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Request a quote
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-8 shadow-sm">
                <h3 className="font-orbitron text-xl font-bold">Quick facts</h3>

                <ul className="mt-6 space-y-3 text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Mobile-first layouts by default</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Performance-focused build choices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Clear scope, timeline, and milestones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Handover so you can manage content</span>
                  </li>
                </ul>

                <div className="mt-8 rounded-2xl bg-white border border-black/10 p-5">
                  <p className="text-sm text-muted">
                    If you’re not sure what you need, start with a website and
                    add workflow features later.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="mt-16 text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              How we work
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Consistent principles that keep projects simple and effective.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {values.map((v) => (
              <article
                key={v.title}
                className="group rounded-3xl border border-black/10 bg-white/80 backdrop-blur overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardImage src={v.img} alt={v.alt} height="h-52" />
                <div className="p-8">
                  <h3 className="font-orbitron text-lg font-bold">{v.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{v.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* CAPABILITIES */}
          <div className="mt-16 text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Capabilities
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Clear deliverables that help you show up online and run better.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {capabilities.map((c) => (
              <article
                key={c.title}
                className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-orbitron text-lg font-bold">{c.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{c.desc}</p>

                <ul className="mt-6 space-y-2 text-muted">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    View services{" "}
                    <span className="transition-transform hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16 text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              FAQ
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Quick answers to common first questions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((f) => (
              <article
                key={f.q}
                className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-b from-[#F6F1E6] to-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-14">
          <div className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-10 text-center shadow-sm">
            <h3 className="font-orbitron text-2xl font-bold">
              Want a clean site that converts?
            </h3>
            <p className="mt-4 text-muted">
              Send a short message with what you need and your timeline. You’ll
              get a simple plan back.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Contact
              </a>
              <a
                href="/services"
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                View services
              </a>
              <a
                href="/#work"
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                View work
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
