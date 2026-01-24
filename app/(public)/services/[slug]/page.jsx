import ResourceNotFound from "@/components/ResourceNotFound";
import { getServiceBySlug, getServiceSlugs } from "@/api/api";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params; // ✅ unwrap params promise

  const service = getServiceBySlug(slug);
  if (!service) {
    return <ResourceNotFound label="SERVICE-TEST-123" />;
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]">
      <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 py-16">
        <div className="relative h-64 w-full overflow-hidden rounded-3xl mb-10">
          <img
            src={service.img}
            alt={service.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <p className="font-orbitron text-xs tracking-[0.25em] text-primary">
          {service.label}
        </p>

        <h1 className="mt-3 font-orbitron text-3xl sm:text-4xl font-bold">
          {service.title}
        </h1>

        <p className="mt-6 text-lg text-muted leading-relaxed">
          {service.desc}
        </p>

        <div className="mt-10">
          <h3 className="font-semibold">Best for</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {(service.bestFor ?? []).map((b) => (
              <span
                key={b}
                className="rounded-full bg-white border border-black/10 px-3 py-1 text-sm text-muted"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold">What’s included</h3>
          <ul className="mt-4 space-y-2 text-muted">
            {(service.includes ?? []).map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>

        {service.note && (
          <div className="mt-10 rounded-2xl bg-white border border-black/10 p-6">
            <p className="text-muted">{service.note}</p>
          </div>
        )}

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Request a quote
          </a>
        </div>
      </div>
    </section>
  );
}
