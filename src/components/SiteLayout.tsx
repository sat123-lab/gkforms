import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ContactModal } from "@/components/ContactModal";
import { FloatingActions } from "@/components/FloatingActions";
import { FooterMapLink } from "@/components/FooterMapLink";
import { useContactModal } from "@/contexts/ContactModalContext";
import { scrollToTop } from "@/lib/scroll";
import {
  CONTACT_ADDRESS,
  CONTACT_ADDRESS_SHORT,
  CONTACT_EMAIL,
  CONTACT_MAPS_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/contact";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/crops", label: "Crops" },
  { to: "/processing", label: "Processing" },
  { to: "/farm", label: "Farm" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const { openContact } = useContactModal();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  const handleContactClick = () => {
    setOpen(false);
    openContact();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      scrollToTop();
      return;
    }
    navigate({ to: "/" }).then(() => scrollToTop());
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="sticky top-0 z-50">
        {/* White header */}
        <header className="bg-white border-b border-[var(--pip-border)] shadow-sm overflow-x-clip">
          <div className="container-pro">
            <div className="flex items-center justify-between h-[64px] sm:h-[68px] gap-2 lg:gap-4">
              <Link to="/" className="shrink-0" onClick={handleLogoClick}>
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
      <FloatingActions />
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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] items-start">
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
            <a
              href={CONTACT_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-white/50 hover:text-[var(--pip-yellow)] transition-colors leading-relaxed max-w-md"
            >
              {CONTACT_ADDRESS_SHORT}
            </a>
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
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a
                    href={CONTACT_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--pip-yellow)] leading-relaxed block"
                  >
                    {CONTACT_ADDRESS}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[var(--pip-yellow)]">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-[var(--pip-yellow)]">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:justify-self-end w-full max-w-[280px]"
          >
            <FooterMapLink />
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
