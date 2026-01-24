import { getServices } from "@/api/api";
type BuildTile = {
  label: string;
  title: string;
  desc: string;
  meta: string;
  img: string;
  alt: string;
};
type ProcessStep = { title: string; desc: string; img: string; alt: string };
type WorkExample = {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  img: string;
  alt: string;
};
type FAQ = { q: string; a: string };
type Service = {
  slug: string;
  label: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  bestFor: string[];
};
type CardImageProps = { src: string; alt: string; height?: string };
const CardImage: React.FC<CardImageProps> = ({ src, alt, height = "h-48" }) => (
  <div className={`relative ${height} w-full overflow-hidden`}>
    {" "}
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
    />{" "}
    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />{" "}
  </div>
);
export default async function Page() {
  const services: Service[] = await getServices();
  const buildTiles: BuildTile[] = [
    {
      label: "WEBSITES",
      title: "Business websites",
      desc: "Clear pages that explain what you do and make it easy to contact you.",
      meta: "Best for: small businesses, local services",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1800&q=70",
      alt: "Laptop showing a modern website layout",
    },
    {
      label: "LANDING PAGES",
      title: "Landing pages",
      desc: "Focused pages for one goal — calls, signups, or quote requests.",
      meta: "Best for: campaigns, quick launches",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=70",
      alt: "Landing page design on a screen",
    },
    {
      label: "SMALL WEB APPS",
      title: "Small web apps",
      desc: "Simple workflows like booking, requests, dashboards, and portals.",
      meta: "Best for: saving time and reducing admin",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=70",
      alt: "Analytics dashboard on a display",
    },
  ];
  const process: ProcessStep[] = [
    {
      title: "1. Quick discovery",
      desc: "A short call or messages to understand your goal, pages/features, and timeline.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=70",
      alt: "Team collaborating in a meeting",
    },
    {
      title: "2. Simple scope",
      desc: "You get a clear outline of what’s included, plus timeline and cost.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=70",
      alt: "Planning notes and laptop",
    },
    {
      title: "3. Build + feedback",
      desc: "I build in small milestones. You review, then we polish.",
      img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1800&q=70",
      alt: "Developer working on a laptop",
    },
    {
      title: "4. Launch + handover",
      desc: "Deployment, basic SEO, and a handover so you can manage content going forward.",
      img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1800&q=70",
      alt: "Rocket launch representing a product launch",
    },
  ];
  const work: WorkExample[] = [
    {
      title: "Example: Local business website",
      desc: "5–7 pages, contact form, mobile-first layout, basic SEO.",
      tags: ["Website", "Responsive", "SEO basics"],
      link: "#",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=70",
      alt: "People reviewing a website layout",
    },
    {
      title: "Example: Booking request flow",
      desc: "A simple request page that collects info and sends it to email.",
      tags: ["Small app", "Forms", "Workflow"],
      link: "#",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=70",
      alt: "Modern web app on a screen",
    },
    {
      title: "Example: Basic admin dashboard",
      desc: "A lightweight dashboard for viewing and filtering submissions.",
      tags: ["Web app", "Dashboard", "Admin"],
      link: "#",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1800&q=70",
      alt: "Analytics dashboard interface",
    },
  ];
  const faqs: FAQ[] = [
    {
      q: "How long does a small website take?",
      a: "Often 1–2 weeks for a simple site, depending on pages, content readiness, and feedback speed.",
    },
    {
      q: "Do you handle hosting and a domain?",
      a: "I can help you set it up (or manage it), but the domain/hosting is usually paid by you so you own it.",
    },
    {
      q: "Can we start small?",
      a: "Yes. Start with a basic site, then add features like booking, dashboards, or portals when needed.",
    },
    {
      q: "What do you need from me to start?",
      a: "Business info, services, contact details, and examples of sites you like. If you don’t have copy, I can help structure it.",
    },
  ];
  const sectionBg = "min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]";

  return (
    <>
      {/* HERO (leave as-is) */}
      <section
        id="top"
        className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#F6F1E6]"
      >
        <div className="absolute inset-0">
          <img
            src="/heroBackground1.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F1E6]/85 via-[#F6F1E6]/40 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 w-full relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.35em] uppercase text-muted">
              Web Studio
            </p>

            <h1 className="mt-4 font-orbitron text-4xl font-extrabold tracking-wide sm:text-5xl md:text-6xl leading-[1.05]">
              Websites & small web apps
              <span className="block text-muted font-semibold mt-3 text-xl sm:text-2xl md:text-3xl">
                built clean, fast, and practical.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted">
              I help small businesses get online with modern websites — and
              build lightweight web apps when you need simple workflows like
              requests, booking, or dashboards.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="group rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <span className="inline-flex items-center gap-2">
                  Request a quote
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                See services
              </a>

              <a
                href="#work"
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                View work
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-sm text-muted">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              <span>
                South Africa • Remote-friendly • Straightforward process
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section id="build" className={sectionBg}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              What we build
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Focused deliverables that help a business show up online and run
              better.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {buildTiles.map((t) => (
              <article
                key={t.title}
                className="group rounded-3xl border border-black/10 bg-white/80 backdrop-blur overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardImage src={t.img} alt={t.alt} height="h-48" />
                <div className="p-8">
                  <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
                    {t.label}
                  </p>
                  <h3 className="mt-3 font-orbitron text-lg font-bold">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">{t.desc}</p>
                  <p className="mt-6 text-sm text-muted">
                    <span className="font-semibold text-black/80">
                      {t.meta}
                    </span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Clear packages, flexible scope. Keep it simple and ship.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-3xl border border-black/10 bg-white/70 backdrop-blur overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Full-width image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>

                <div className="p-8 border-b border-black/10 bg-gradient-to-br from-white to-[#F6F1E6]">
                  <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
                    {s.label}
                  </p>
                  <h3 className="mt-3 font-orbitron text-xl font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">{s.desc}</p>
                </div>

                <div className="p-8">
                  <p className="text-sm font-semibold">Best for</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.bestFor.map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-xs text-muted"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm font-semibold inline-flex items-center gap-2">
                    View details →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className={sectionBg}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              How it works
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              A simple process so you always know what’s happening.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {process.map((step) => (
              <article
                key={step.title}
                className="group rounded-3xl border border-black/10 bg-white/80 backdrop-blur overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardImage src={step.img} alt={step.alt} height="h-44" />
                <div className="p-8">
                  <h3 className="font-orbitron text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-block rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>

      {/* WORK 
      <section id="work" className={sectionBg}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Work examples
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              A few examples of the kind of work you can expect.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {work.map((w) => (
              <a
                key={w.title}
                href={w.link}
                className="group rounded-3xl border border-black/10 bg-white/80 backdrop-blur overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardImage src={w.img} alt={w.alt} height="h-52" />

                <div className="p-8">
                  <h3 className="font-orbitron text-lg font-bold">{w.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{w.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm font-semibold inline-flex items-center gap-2">
                    View details{" "}
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* FAQ */}
      <section id="faq" className={sectionBg}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="text-center">
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

      {/* Bottom CTA */}
      <section className={sectionBg}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-14">
          <div className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-10 text-center shadow-sm">
            <h3 className="font-orbitron text-2xl font-bold">
              Ready to start small?
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
                href="/about"
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                About us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
