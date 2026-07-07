import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CartDrawer, CartIconButton } from "@/components/CartDrawer";
import { ContactModal } from "@/components/ContactModal";
import { SiteSearch } from "@/components/SiteSearch";
import { useContactModal } from "@/contexts/ContactModalContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/crops", label: "Crops" },
  { to: "/processing", label: "Processing" },
  { to: "/farm", label: "The Farm" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
] as const;

const announcements = [
  "74-Acre Integrated Herbal Estate",
  "12+ Medicinal Crops · Export Ready",
  "Nutraceutical Grade · Investor Ready",
  "Book a Farm Visit · Partnerships Welcome",
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { openContact } = useContactModal();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  const handleContactClick = () => {
    setOpen(false);
    openContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
      <header className="sticky top-0 z-50 bg-white border-b border-[var(--pip-border)] shadow-sm">
        <div className="container-pro">
          <div className="flex items-center justify-between h-[64px] sm:h-[68px] gap-3">
            <Link to="/" className="-ml-4 sm:-ml-6 md:-ml-10 lg:-ml-12 shrink-0">
              <Logo size="md" />
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="pip-nav-link"
                  activeProps={{ className: "pip-nav-link pip-nav-link-active" }}
                >
                  {item.label}
                </Link>
              ))}
              <button type="button" onClick={openContact} className="pip-nav-link">
                Contact
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-1">
              <button
                type="button"
                className="pip-icon-btn"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </button>
              <CartIconButton onClick={() => setCartOpen(true)} />
              <button type="button" onClick={openContact} className="pip-cta-header">
                Contact us
              </button>
            </div>

            <div className="flex items-center gap-1 md:hidden">
              <button
                type="button"
                className="pip-icon-btn"
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </button>
              <CartIconButton onClick={() => setCartOpen(true)} />
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

        <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
        <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
        <ContactModal />

        {open && (
          <div className="xl:hidden border-t border-[var(--pip-border)] bg-white px-4 py-3 flex flex-col gap-1">
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
            <button
              type="button"
              onClick={handleContactClick}
              className="px-4 py-3 rounded-lg text-base font-semibold text-[var(--pip-text)] hover:bg-[var(--pip-cream)] text-left"
            >
              Contact
            </button>
            <button type="button" onClick={handleContactClick} className="mt-2 pip-cta-header justify-center">
              Contact us
            </button>
          </div>
        )}
      </header>

      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      <SiteFooter onContactClick={openContact} />
    </div>
  );
}

function SiteFooter({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer className="bg-[var(--pip-green-dark)] text-white">
      <div className="container-pro py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="lg" variant="light" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
              A 74-acre integrated medicinal & commercial crop estate — cultivating the future of
              nutraceuticals, food, and sustainable agriculture in India.
            </p>
            <p className="mt-3 text-xs text-white/50">
              74-acre estate, Andhra Pradesh, India
            </p>
          </div>

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
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/products" className="hover:text-[var(--pip-yellow)]">Products</Link></li>
              <li><Link to="/processing" className="hover:text-[var(--pip-yellow)]">Processing</Link></li>
              <li><Link to="/farm" className="hover:text-[var(--pip-yellow)]">Farm visits</Link></li>
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className="hover:text-[var(--pip-yellow)] transition-colors"
                >
                  Contact us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Get in touch</h4>
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
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-white/50 mb-2">Newsletter</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-full px-4 py-2 text-sm text-[var(--pip-text)] bg-white/90 outline-none"
                />
                <button type="submit" className="pip-btn-yellow text-xs px-4 py-2 rounded-full font-bold">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© {new Date().getFullYear()} GK Agro Farms. All rights reserved.</span>
          <span>Cultivated with care · Investor ready</span>
        </div>
      </div>
    </footer>
  );
}
