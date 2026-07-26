"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const close = () => setOpen(false);
  const toggle = (key: string) => setActive((p) => (p === key ? null : key));

  const dropdowns = useMemo(
    () => [
      {
        key: "services",
        title: "Services",
        items: [
          { label: "Websites", href: "/services/websites" },
          { label: "Landing-pages", href: "/services/landing-pages" },
          { label: "Small-web-apps", href: "/services/small-web-apps" },
        ],
      },
    ],
    [],
  );

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="text-[color:var(--primary)] hover:opacity-90"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
          <a href="/" className="inline-flex items-center">
            <img
              src="/thosemLogo.png"
              alt="Thosem logo"
              className="h-7 sm:h-8 md:h-10 w-auto transition-opacity hover:opacity-80"
            />
          </a>
        </div>
      </nav>

      {/* Left Overlay Menu */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-80 bg-black text-white shadow-2xl",
          "transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="relative h-full overflow-y-auto p-6">
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-[color:var(--primary)] hover:opacity-90"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Profile */}
          <div className="mb-8 mt-8 text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden">
              <Image
                src="/t-logo.png"
                alt="Thosem"
                width={96}
                height={96}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <h3 className="font-orbitron text-xl font-bold">Thosem</h3>
            <p className="text-sm text-[color:var(--primary)]">
              Unlock your optimal potential
            </p>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {dropdowns.map((d) => {
              const isOpen = active === d.key;
              return (
                <div key={d.key}>
                  <button
                    type="button"
                    onClick={() => toggle(d.key)}
                    className="flex w-full items-center justify-between rounded-lg bg-gray-900 px-4 py-3 text-left transition-colors hover:bg-gray-800"
                  >
                    <span>{d.title}</span>
                    <ChevronDown
                      size={18}
                      className={[
                        "text-[color:var(--primary)] transition-transform",
                        isOpen ? "rotate-180" : "rotate-0",
                      ].join(" ")}
                    />
                  </button>

                  <div
                    className={[
                      "overflow-hidden pl-4 transition-all duration-300",
                      isOpen ? "max-h-52" : "max-h-0",
                    ].join(" ")}
                  >
                    {d.items.map((it) => (
                      <a
                        key={it.label}
                        href={it.href}
                        onClick={close}
                        className="block px-4 py-2 transition-colors hover:text-[color:var(--primary)]"
                      >
                        {it.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}

            <a
              href="/about"
              onClick={close}
              className="block rounded-lg bg-gray-900 px-4 py-3 transition-colors hover:bg-gray-800"
            >
              About
            </a>

            <a
              href="/contact"
              onClick={close}
              className="block rounded-lg bg-gray-900 px-4 py-3 transition-colors hover:bg-gray-800"
            >
              Contact
            </a>
          </div>
        </div>
      </aside>

      {/* Overlay Background */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-14">
          <div className="grid gap-10 md:grid-cols-3 items-start">
            {/* BRAND */}
            <div>
              <a href="/" className="inline-flex items-center">
                <img
                  src="/thosemLogo.png"
                  alt="Thosem logo"
                  className="h-10 w-auto transition-opacity hover:opacity-80"
                />
              </a>

              <p className="mt-4 max-w-sm text-gray-400 leading-relaxed">
                Clean, fast websites and small web apps for small businesses.
                Practical builds. Straightforward process.
              </p>

              <div className="mt-6 text-sm text-gray-500">
                South Africa • Remote-friendly
              </div>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="font-orbitron text-sm tracking-[0.25em] text-gray-300 uppercase">
                Navigation
              </h3>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-orbitron text-sm tracking-[0.25em] text-gray-300 uppercase">
                Contact
              </h3>

              <ul className="mt-6 space-y-3 text-gray-400">
                <li>
                  <a
                    href="mailto:thobilesema@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    thobilesema@gmail.com
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/27838133619"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp: +27 83 813 3619
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+27838133619"
                    className="hover:text-white transition-colors"
                  >
                    Call: +27 83 813 3619
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex gap-4">
                {/* Optional social icons later */}
                <span className="text-xs text-gray-500">
                  Usually replies within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Thosem. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
