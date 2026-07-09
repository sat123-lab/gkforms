import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export function FloatingActions() {
  return (
    <div className="gk-floating-actions" aria-label="Quick actions">
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}
