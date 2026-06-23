import { BUSINESS } from "@/lib/constants";

export default function SchemaOrg() {
  const json = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: BUSINESS.name,
    image: "https://daisybeautysalonbydebby.com/hero.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
    telephone: BUSINESS.phone,
    priceRange: "$$",
    aggregateRating: { "@type": "AggregateRating", ratingValue: BUSINESS.rating, reviewCount: BUSINESS.reviewCount },
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [h.day === "Minggu" ? "Sunday" : h.day === "Senin" ? "Monday" : h.day === "Selasa" ? "Tuesday" : h.day === "Rabu" ? "Wednesday" : h.day === "Kamis" ? "Thursday" : h.day === "Jumat" ? "Friday" : "Saturday"],
      opens: h.open,
      closes: h.close,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
