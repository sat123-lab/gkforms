import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Farm Visit | GK Agro Farms" },
      { name: "description", content: "Get in touch for partnerships, investment, offtake agreements, or farm visits at our 74-acre herbal estate." },
      { property: "og:title", content: "Contact — GK Agro Farms" },
      { property: "og:description", content: "Reach out for partnerships or farm visits." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { openContact } = useContactModal();
  const navigate = useNavigate();

  useEffect(() => {
    openContact();
    navigate({ to: "/", replace: true });
  }, [openContact, navigate]);

  return null;
}
