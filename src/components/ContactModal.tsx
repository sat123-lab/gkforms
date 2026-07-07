import { useEffect, useState } from "react";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
            <InfoRow icon={<Mail className="w-4 h-4" />} label="Email" value="hello@gkagrofarms.com" />
            <InfoRow icon={<Phone className="w-4 h-4" />} label="Phone" value="+91 98765 43210" />
            <InfoRow
              icon={<MapPin className="w-4 h-4" />}
              label="Location"
              value="74-acre estate, Andhra Pradesh, India"
            />
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
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[var(--pip-border)] p-3">
      <div className="w-9 h-9 rounded-lg bg-[var(--pip-green)] flex items-center justify-center text-white shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-[var(--pip-muted)]">{label}</div>
        <div className="font-semibold text-sm text-[var(--pip-text)]">{value}</div>
      </div>
    </div>
  );
}
