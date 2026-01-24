// src/components/BreadcrumbHero.jsx
export default function BreadcrumbHero({
  title,
  subtitle,
  crumbs = [{ label: "Home", href: "/" }],
  bgSrc = "/A_digital_photograph_showcases_a_panoramic_workspa.png",
}) {
  return (
    <section className="relative overflow-hidden bg-[#F6F1E6]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bgSrc}
          alt=""
          className="h-full w-full object-cover object-center"
        />

        {/* Small white overlay */}
        <div className="absolute inset-0 bg-white/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-14 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap items-center gap-2 text-muted">
            {crumbs.map((c, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <li
                  key={`${c.label}-${idx}`}
                  className="flex items-center gap-2"
                >
                  {!isLast ? (
                    <a
                      href={c.href}
                      className="hover:underline underline-offset-4"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-black/80 font-semibold">
                      {c.label}
                    </span>
                  )}
                  {!isLast && <span className="text-black/30">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Title */}
        <h1 className="mt-5 font-orbitron text-4xl sm:text-5xl font-extrabold tracking-wide leading-[1.05]">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-muted text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>

      {/* Soft fade to page background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#F6F1E6]" />
    </section>
  );
}
