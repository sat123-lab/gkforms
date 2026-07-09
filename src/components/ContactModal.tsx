import { useEffect, useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_MAPS_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
} from "@/lib/contact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function ContactModal() {
  const { open, setOpen } = useContactModal();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-[var(--pip-border)] text-left">
          <p className="pip-section-sub text-[10px]">Let&apos;s connect</p>
          <DialogTitle className="text-2xl font-bold text-[var(--pip-text)]">
            Grow with GK Agro Farms
          </DialogTitle>
          <DialogDescription className="text-sm text-[var(--pip-muted)]">
            Partnerships, investment, offtake agreements, or guided farm visits — we&apos;d love to
            hear from you.
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <Field label="Full name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Organization" name="org" />
            <div>
              <label className="text-xs uppercase tracking-widest text-[var(--pip-muted)] font-semibold">
                Message
              </label>
              <textarea
                className="mt-2 w-full rounded-xl bg-white border border-[var(--pip-border)] px-4 py-3 h-28 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--pip-green)]/20 focus:border-[var(--pip-green)] transition resize-none"
                placeholder="Tell us about your interest — partnership, investment, offtake..."
              />
            </div>
            <button type="submit" className="w-full pip-btn-cart justify-center py-3 text-sm">
              {sent ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4" /> Message sent
                </span>
              ) : (
                "Send message"
              )}
            </button>
          </form>

          <div className="space-y-3">
            <InfoRow
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value={CONTACT_EMAIL}
              href={`mailto:${CONTACT_EMAIL}`}
            />
            <InfoRow
              icon={<Phone className="w-4 h-4" />}
              label="Phone"
              value={CONTACT_PHONE_DISPLAY}
              href={`tel:${CONTACT_PHONE_TEL}`}
            />
            <InfoRow
              icon={<MapPin className="w-4 h-4" />}
              label="Address"
              value={CONTACT_ADDRESS}
              href={CONTACT_MAPS_URL}
              external
            />
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 p-3 hover:bg-[#25D366]/15 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0">
                <WhatsAppIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--pip-muted)]">
                  WhatsApp
                </div>
                <div className="font-semibold text-sm text-[var(--pip-text)]">
                  Chat on {CONTACT_PHONE_DISPLAY}
                </div>
              </div>
            </a>
            <div className="rounded-xl border border-[var(--pip-border)] bg-[var(--pip-cream)]/50 p-4">
              <p className="text-[10px] uppercase tracking-widest text-[var(--pip-green)] font-bold">
                Farm visits
              </p>
              <p className="mt-2 text-xs text-[var(--pip-muted)] leading-relaxed">
                Guided walkthroughs of the estate and processing unit available for investors and
                partners. Book at least 5 days in advance.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        className="text-xs uppercase tracking-widest text-[var(--pip-muted)] font-semibold"
      >
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl bg-white border border-[var(--pip-border)] px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--pip-green)]/20 focus:border-[var(--pip-green)] transition"
      />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-3 rounded-xl border border-[var(--pip-border)] p-3 hover:border-[var(--pip-green)]/30 transition-colors">
      <div className="w-9 h-9 rounded-lg bg-[var(--pip-green)] flex items-center justify-center text-white shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-[var(--pip-muted)]">{label}</div>
        <div className="font-semibold text-sm text-[var(--pip-text)] leading-relaxed">{value}</div>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  );
}
