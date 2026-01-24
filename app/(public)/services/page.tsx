import { getServices } from "@/api/api";
import BreadcrumbHero from "@/components/BreadcrumbHero";

export const dynamic = "force-static";

// Define the expected shape of a service
type Service = {
  slug: string;
  label: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  bestFor?: string[];
};

// Define props for CardImage
type CardImageProps = {
  src: string;
  alt: string;
  height?: string;
};

const CardImage: React.FC<CardImageProps> = ({ src, alt, height = "h-52" }) => (
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

export default async function ServicesPage() {
  const services: Service[] = await getServices();

  return (
    <>
      {/* HERO */}
      <BreadcrumbHero
        title="Services"
        subtitle="Clear packages for websites, landing pages, and small web apps."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* LIST */}
      <section className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold">
              Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mt-4 text-muted">
              Click a service to see details and what’s included.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-3xl border border-black/10 bg-white/80 backdrop-blur overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardImage src={s.img} alt={s.alt} height="h-52" />

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
                    {(s.bestFor ?? []).map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-white/70 border border-black/10 px-3 py-1 text-xs text-muted"
                      >
                        {b}
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

          <div className="mt-14 text-center">
            <div className="inline-flex flex-col gap-3 rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-8 shadow-sm">
              <h3 className="font-orbitron text-xl font-bold">
                Not sure what you need?
              </h3>
              <p className="text-muted">
                Start with a website, then add booking, dashboards, or portals
                later.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <a
                  href="/contact"
                  className="rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Ask for a recommendation
                </a>
                <a
                  href="/#process"
                  className="rounded-2xl border border-black/10 bg-white px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  See process
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gradient-to-b from-[#F6F1E6] to-white">
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
                href="/#work"
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                View work
              </a>
              <a
                href="/about"
                className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
