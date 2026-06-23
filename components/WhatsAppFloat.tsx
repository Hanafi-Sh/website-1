import { waLink } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Booking via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-large anim-bounce-soft transition-transform duration-300 ease-spring hover:scale-110 active:scale-95"
    >
      <span aria-hidden className="font-display font-extrabold text-base tracking-wide">WA</span>
    </a>
  );
}
