import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ContactModal } from "@/components/ContactModal";
import { useContactModal } from "@/contexts/ContactModalContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/crops", label: "Crops" },
  { to: "/processing", label: "Processing" },
  { to: "/farm", label: "Farm" },
] as const;

const announcements = [
  "74-Acre Integrated Herbal Estate",
  "12+ Medicinal Crops · Export Ready",
  "Nutraceutical Grade · Investor Ready",
  "Book a Farm Visit · Partnerships Welcome",
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const { openContact } = useContactModal();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  const handleContactClick = () => {
    setOpen(false);
    openContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50">
        {/* Announcement bar — pipagro style */}
        <div className="pip-announcement">
          <div className="pip-announcement-track">
            {[...announcements, ...announcements].map((msg, i) => (
              <span key={i} className="pip-announcement-item">
                {msg}
              </span>
            ))}
          </div>
        </div>

        {/* White header */}
        <header className="bg-white border-b border-[var(--pip-border)] shadow-sm overflow-x-clip">
          <div className="container-pro">
            <div className="flex items-center justify-between h-[64px] sm:h-[68px] gap-2 lg:gap-4">
              <Link to="/" className="shrink-0">
                <Logo size="md" />
              </Link>

              <nav className="hidden lg:flex items-center justify-center gap-0.5 flex-1 min-w-0 px-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="pip-nav-link lg:px-2 xl:px-3"
                    activeProps={{ className: "pip-nav-link pip-nav-link-active lg:px-2 xl:px-3" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-1 shrink-0">
                <button type="button" onClick={openContact} className="pip-cta-header">
                  Contact us
                </button>
              </div>

              <div className="flex lg:hidden items-center shrink-0">
                <button
                  className="p-2 text-[var(--pip-text)]"
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Toggle menu"
                >
                  {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          <ContactModal />

          {open && (
            <div className="lg:hidden border-t border-[var(--pip-border)] bg-white px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-3 rounded-lg text-base font-semibold text-[var(--pip-text)] hover:bg-[var(--pip-cream)]"
                  activeProps={{ className: "bg-[var(--pip-cream)] text-[var(--pip-green)]" }}
                >
                  {item.label}
                </Link>
              ))}
              <button type="button" onClick={handleContactClick} className="mt-2 pip-cta-header justify-center">
                Contact us
              </button>
            </div>
          )}
        </header>
      </div>

      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      <SiteFooter onContactClick={openContact} />
    </div>
  );
}

function SiteFooter({ onContactClick }: { onContactClick: () => void }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-[var(--pip-green-dark)] text-white"
    >
      <div className="container-pro py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <Logo size="lg" variant="light" />
            </motion.div>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-md">
              A concise footer with clean navigation and contact access for GK Agro Farms.
            </p>
            <p className="mt-3 text-xs text-white/50">74-acre estate, Andhra Pradesh, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-8 sm:grid-cols-2"
          >
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {navItems.map((i) => (
                  <li key={i.to}>
                    <Link to={i.to} className="hover:text-[var(--pip-yellow)] transition-colors">
                      {i.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    type="button"
                    onClick={onContactClick}
                    className="hover:text-[var(--pip-yellow)] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="mailto:hello@gkagrofarms.com" className="hover:text-[var(--pip-yellow)]">
                    hello@gkagrofarms.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="hover:text-[var(--pip-yellow)]">
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pip-footer-bottom">
        <div className="container-pro py-4 flex justify-center">
          <div className="pip-footer-bottom-text">
            <p className="pip-footer-bottom-line">
              © {new Date().getFullYear()} GK Agro Farms. All rights reserved.
            </p>
            <p className="pip-footer-bottom-credit">
              <span className="pip-footer-bottom-dot" aria-hidden="true">
                ·{" "}
              </span>
              Designed By{" "}
              <a
                href="https://blazeagency.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="pip-footer-credit-link"
              >
                Blaze The Entity
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
