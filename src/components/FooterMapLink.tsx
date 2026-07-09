import { ExternalLink } from "lucide-react";
import { CONTACT_ADDRESS_SHORT, CONTACT_MAPS_EMBED_URL, CONTACT_MAPS_URL } from "@/lib/contact";

export function FooterMapLink() {
  return (
    <div className="pip-footer-map">
      <iframe
        title={`GK Agro Farms map — ${CONTACT_ADDRESS_SHORT}`}
        src={CONTACT_MAPS_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="pip-footer-map-iframe"
      />
      <a
        href={CONTACT_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pip-footer-map-open"
      >
        <span>Open in Google Maps</span>
        <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
      </a>
    </div>
  );
}
