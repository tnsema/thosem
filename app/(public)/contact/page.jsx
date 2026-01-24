import BreadcrumbHero from "@/components/BreadcrumbHero";
export default function ContactPage() {
  const contact = {
    email: "thobilesema@gmail.com",
    phoneDisplay: "+27 83 813 3619",
    phoneTel: "+27838133619",
    waNumber: "27838133619",
    siteLabel: "thosem.com",
  };

  const mailtoHref =
    "mailto:thobilesema@gmail.com?subject=Project%20request%20(Thosem)&body=Hi%20Thobile%2C%0A%0AI'm%20interested%20in%3A%20(website%20%2F%20landing%20page%20%2F%20web%20app)%0A%0AMy%20business%20does%3A%20...%0A%0AI%20need%3A%20...%0A%0ATimeline%3A%20...%0A%0ABudget%20range%3A%20...%0A%0AAny%20examples%20I%20like%3A%20...%0A%0AThanks%2C%0A";

  const whatsappHref = `https://wa.me/${contact.waNumber}?text=${encodeURIComponent(
    "Hi Thobile, I'm interested in a website / landing page / small web app. Can we chat?",
  )}`;

  return (
    <>
      {/* HERO */}
      <BreadcrumbHero
        title="Contact"
        subtitle="Let’s talk about your project and see what makes sense."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* CONTENT */}
      <section className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* LEFT: PROJECT BRIEF */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-10 shadow-sm">
                <h2 className="font-orbitron text-2xl font-bold">
                  What to send
                </h2>

                <p className="mt-4 text-muted leading-relaxed">
                  To move fast, include these details in your email or WhatsApp
                  message. The clearer this is, the quicker I can give you a
                  proper plan.
                </p>

                <div className="mt-8 grid gap-6">
                  <div className="rounded-2xl bg-white/70 border border-black/10 p-6">
                    <p className="text-sm font-semibold">1) What you need</p>
                    <p className="mt-2 text-muted">
                      Website / landing page / small web app (or “not sure
                      yet”).
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/70 border border-black/10 p-6">
                    <p className="text-sm font-semibold">2) Your business</p>
                    <p className="mt-2 text-muted">
                      What you do, who you serve, and where you operate.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/70 border border-black/10 p-6">
                    <p className="text-sm font-semibold">
                      3) Must-have features
                    </p>
                    <p className="mt-2 text-muted">
                      Examples: contact form, booking, quote request, dashboard,
                      client portal, payments, etc.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/70 border border-black/10 p-6">
                    <p className="text-sm font-semibold">
                      4) Timeline + budget
                    </p>
                    <p className="mt-2 text-muted">
                      When you need it live, and what budget range you’re aiming
                      for.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/70 border border-black/10 p-6">
                    <p className="text-sm font-semibold">
                      5) Examples you like
                    </p>
                    <p className="mt-2 text-muted">
                      2–3 links to websites you like (style or structure).
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={mailtoHref}
                    className="rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Start an email →
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-black/10 bg-white px-7 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Message on WhatsApp
                  </a>
                </div>

                <p className="mt-6 text-sm text-muted">
                  Tip: If you already have a domain, hosting, or a logo, mention
                  it.
                </p>
              </div>
            </div>

            {/* RIGHT: CONTACT + EXPECTATIONS */}
            <div className="lg:col-span-5 space-y-8">
              {/* CONTACT DETAILS */}
              <div className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-8 shadow-sm">
                <h3 className="font-orbitron text-xl font-bold">
                  Contact details
                </h3>

                <p className="mt-4 text-muted">
                  Use whichever is easiest. Email is best for longer details.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href={mailtoHref}
                    className="rounded-2xl bg-primary px-6 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-xl text-center"
                  >
                    Email me
                  </a>

                  <a
                    href={whatsappHref}
                    className="rounded-2xl border border-black/10 bg-white px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg text-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>

                  <a
                    href={`tel:${contact.phoneTel}`}
                    className="rounded-2xl border border-black/10 bg-white px-6 py-3 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg text-center"
                  >
                    Call
                  </a>
                </div>

                <div className="mt-8 space-y-3 text-muted">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      Email:{" "}
                      <a
                        className="font-semibold text-black/80 hover:underline"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      W:{" "}
                      <a
                        className="font-semibold text-black/80 hover:underline"
                        href={`https://wa.me/${contact.waNumber}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      P:{" "}
                      <a
                        className="font-semibold text-black/80 hover:underline"
                        href={`tel:${contact.phoneTel}`}
                      >
                        {contact.phoneDisplay}
                      </a>
                    </span>
                  </div>
                </div>

                <p className="mt-8 text-sm text-muted">{contact.siteLabel}</p>
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-8 shadow-sm">
                <h3 className="font-orbitron text-xl font-bold">
                  What happens next?
                </h3>

                <ol className="mt-6 space-y-4 text-muted">
                  <li className="flex gap-3">
                    <span className="font-semibold">1.</span>
                    <span>I review your message and goal.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold">2.</span>
                    <span>You get a clear scope + timeline (and cost).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold">3.</span>
                    <span>
                      I build in milestones, you review, then we launch.
                    </span>
                  </li>
                </ol>

                <div className="mt-8 rounded-2xl bg-white border border-black/10 p-5">
                  <p className="text-sm text-muted">
                    If you’re not sure what you need, start with a website —
                    then add booking, dashboards, or portals later.
                  </p>
                </div>
              </div>

              {/* TRUST BOX */}
              <div className="rounded-3xl border border-black/10 bg-white/75 backdrop-blur p-8 shadow-sm">
                <h3 className="font-orbitron text-xl font-bold">
                  What you get
                </h3>

                <ul className="mt-6 space-y-3 text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>
                      Clean design, clear copy structure, and mobile-first
                      layout
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Fast load and sensible build choices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>Handover so you can manage content after launch</span>
                  </li>
                </ul>
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
              Want to see services first?
            </h3>
            <p className="mt-4 text-muted">
              Check the services and examples, then message me with what you
              need.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
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
              <a
                href={mailtoHref}
                className="rounded-2xl bg-primary px-7 py-3 font-semibold text-black transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Email now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
