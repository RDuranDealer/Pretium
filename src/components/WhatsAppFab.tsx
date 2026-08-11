import { Icon } from "./Icons";
import { site } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=Hola%2C%20quisiera%20conversar%20sobre%20un%20proyecto%20SAP%20HCM.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/15 transition-transform hover:scale-105"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
