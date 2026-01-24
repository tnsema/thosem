import BreadcrumbHero from "@/components/BreadcrumbHero";
export default function TermsPage() {
  return (
    <>
      <BreadcrumbHero
        title="Terms of Service"
        subtitle="Simple terms explaining how projects, payments, and delivery work."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms", href: "/terms" },
        ]}
      />

      <section className="min-h-screen bg-gradient-to-b from-white to-[#F6F1E6]">
        <div className="mx-auto max-w-4xl px-6 md:px-8 lg:px-12 py-16">
          <p className="text-sm tracking-[0.35em] uppercase text-muted">
            Terms
          </p>

          <h1 className="mt-4 font-orbitron text-4xl sm:text-5xl font-bold tracking-wide">
            Terms of Service
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-primary" />

          <p className="mt-6 text-muted leading-relaxed">
            These terms explain how work is delivered for websites, landing
            pages, and small web apps. By starting a project with
            Thosem/Thobile, you agree to these terms.
          </p>

          <div className="mt-10 space-y-10">
            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">1. Services</h2>
              <p className="mt-3 text-muted leading-relaxed">
                I provide design and development for websites, landing pages,
                and small web apps. Deliverables are agreed in writing before
                work begins (scope, timeline, and cost).
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                2. Scope and changes
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Work is based on the agreed scope. New features or changes
                outside scope may affect cost and timeline. Changes will be
                confirmed before they are started.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">3. Payments</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Payment terms (deposit, milestones, or full payment) are agreed
                before work starts. Final files, deployment, or handover may be
                withheld until payment is complete.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                4. Client responsibilities
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                You are responsible for providing accurate content (business
                info, text, images, branding) and reviewing milestones on time.
                Delays in content or feedback can delay delivery.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                5. Hosting, domains, and third-party services
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Domain and hosting are usually paid by you so you own them. If
                you choose third-party services (forms, analytics, email tools,
                payment providers), their costs and terms are your
                responsibility.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                6. Launch and handover
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                On completion, I will provide a handover (access details and
                basic guidance). After handover, ongoing updates are optional
                and can be arranged separately.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                7. Warranty and support
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                I will fix bugs related to the delivered work for a short period
                after launch (typically 7–14 days), as long as no third-party
                changes or platform changes caused the issue. New work or
                changes are handled as a separate request.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                8. Intellectual property
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Once payment is complete, you own the final website/app content
                and project assets that were created for you. I may reuse
                general code patterns, components, and non-confidential
                techniques.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                9. Portfolio use
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                I may showcase completed work in my portfolio unless you request
                in writing that it remains private.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">10. Liability</h2>
              <p className="mt-3 text-muted leading-relaxed">
                I’m not responsible for losses caused by third-party services,
                hosting issues, account compromise, content you provide, or
                misuse of the site/app. You are responsible for compliance needs
                specific to your business (legal, tax, industry rules).
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">
                11. Cancellation
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Either side can cancel with written notice. Completed work up to
                that point will be billed. Deposits may be non-refundable once
                work has started, depending on the stage of the project.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/80 backdrop-blur p-8 shadow-sm">
              <h2 className="font-orbitron text-xl font-bold">12. Contact</h2>
              <p className="mt-3 text-muted leading-relaxed">
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:thobilesema@gmail.com"
                  className="font-semibold text-black/80 hover:underline"
                >
                  thobilesema@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted">
            Last updated: {new Date().toLocaleDateString("en-ZA")}
          </p>
        </div>
      </section>
    </>
  );
}
