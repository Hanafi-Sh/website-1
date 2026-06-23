import { waLink } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Booking via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-warm-lg transition-transform duration-300 ease-out-expo hover:scale-110 active:scale-95"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
