// Business constants for Daisy Beauty Salon By Debby
// Source: gmaps-scraper pipeline + PRD (daisy-beauty-salon/studio-output/prd.md)

export const BUSINESS = {
  name: "Daisy Beauty Salon By Debby",
  shortName: "Daisy Beauty Salon",
  tagline: "Rambut Sempurna, Hati Hangat di Jogja",
  description: "Salon rambut wanita terbaik di Seturan, Jogja. Potong rambut, coloring, & treatment dengan harga transparan. Rating 4.90/5 dari 3.840 review.",
  phone: "0896-1237-7910",
  whatsapp: "6289612377910",
  whatsappDisplay: "0896-1237-7910",
  email: "", // defer
  instagram: "https://instagram.com/daisybeautybydebby", // placeholder
  address: {
    street: "Belakang Circle K, Ruko Gatic, Jl. Perumnas Seturan No.C3, Dabag, Caturtunggal, Kec. Depok, Kabupaten Sleman",
    city: "Sleman Regency",
    state: "Special Region of Yogyakarta",
    country: "ID",
    postalCode: "55281",
  },
  geo: { lat: -7.772316, lng: 110.404803 },
  hours: [
    { day: "Senin", open: "09:00", close: "20:00" },
    { day: "Selasa", open: "09:00", close: "20:00" },
    { day: "Rabu", open: "09:00", close: "20:00" },
    { day: "Kamis", open: "09:00", close: "20:00" },
    { day: "Jumat", open: "09:00", close: "20:00" },
    { day: "Sabtu", open: "09:00", close: "20:00" },
    { day: "Minggu", open: "09:00", close: "20:00" },
  ],
  rating: 4.9,
  reviewCount: 3840,
  priceFrom: "Rp 75.000",
  services: [
    "Potong Rambut Wanita",
    "Hair Coloring / Pewarnaan Rambut",
    "Hair Treatment",
    "Styling Rambut",
    "Konsultasi Gaya Rambut",
    "Cuci & Blow Rambut",
  ],
  stylists: [
    { name: "Mba Debby", role: "Owner & Top Stylist", specialties: ["Signature cuts", "Hair coloring", "Buttery butterfly cut"], photo: "" },
    { name: "Kak Agnes", role: "Senior Stylist", specialties: ["Hair coloring", "Highlights", "Ombre"], photo: "" },
    { name: "Mba Sari", role: "Stylist", specialties: ["Potong rambut", "Styling", "Blow"], photo: "" },
    { name: "Mba Lina", role: "Junior Stylist", specialties: ["Basic styling", "Cuci & blow", "Treatment"], photo: "" },
  ],
  testimonials: [
    { name: "Nancy A.", rating: 5, text: "Sukaaa bgttt dikasih potongan yang suits my hair well. Five stars for the service and hospitality. Definitely will come back one day inshaAllah!" },
    { name: "A6 V. N. H.", rating: 5, text: "The service is good from the beginning, the product offer is also informed by the price so the customer is not surprised when paying. The result of the cut with the top stylist is also very good. Next time if I go to Jogja again I want to do hair treatment here again." },
    { name: "Sekar W.", rating: 5, text: "Best hair cut in Jogja, ive been trying so many salon before this, but i found this gem for haircut. Reccomend to make a reservation and ask to be cut by their owner Mba Debby. All service are real 5 star." },
    { name: "Devica K.", rating: 5, text: "Omg, this haircut is amazing — adorable, cute, everything! The final look is so gorgeous. Hair color next sounds like a great idea." },
    { name: "Yosephin J. S.", rating: 5, text: "Bagus bangett. All the services in here are great. You can definitely get your dream hair in here." },
    { name: "Rini P.", rating: 5, text: "Suasana super comfy, free drinks, snacks, dan Spotify-nya bikin betah. Mba Debby ramah banget, hasil potongan selalu sesuai ekspektasi." },
  ],
  copy: {
    heroHeadline: "Rambut Sempurna, Hati Hangat di Jogja",
    heroSubheadline: "Daisy Beauty Salon by Debby — potongan rambut terbaik di Yogyakarta dengan keramahan yang bikin kamu betah berlama-lama. Rating 4.90/5 dari 3.840 pelanggan.",
    heroCTA: "Booking Sekarang",
    heroCTASecondary: "Lihat Layanan",
    heroVariations: [
      "Potong Rambut Impian, Bareng Mba Debby",
      "Sultan-nya Hair Treatment di Sleman, Yogyakarta",
    ],
    aboutHeadline: "Tentang Daisy Beauty Salon by Debby",
    aboutP1: "Halo, kami Daisy Beauty Salon by Debby — salon rambut milik perempuan yang terletak di Belakang Circle K, Ruko Gatic, Seturan, Sleman. Berawal dari passion Mba Debby akan dunia styling rambut, kami hadir untuk memberikan pengalaman salon yang hangat, ramah, dan bikin kamu betah — bukan sekadar tempat potong rambut. Pelanggan kami sering bilang suasana di sini super comfy, lengkap dengan free drinks, snacks, dan musik Spotify yang bikin rileks. Kami percaya, rambut bagus itu bonus, tapi rasa dihargai itu yang utama. Itulah kenapa harga selalu kami sampaikan di awal, supaya kamu nggak kaget saat bayar.",
    aboutP2: "Dengan rating 4.90 dari 3.840 ulasan, kami bangga jadi salah satu salon paling direkomendasikan di Jogja. Mulai dari potongan klasik, butterfly haircut yang gorgeous, sampai hair coloring yang presisi — kami siap mewujudkan rambut impianmu. Mau ditemani Mba Debby langsung, atau Kak Agnes yang jago coloring? Booking dulu yuk, supaya kami bisa fokus penuh melayani kamu.",
    founderPrompt: "Ceritakan kapan dan kenapa Mba Debby mulai membuka salon ini. Apa yang bikin Mba Debby jatuh cinta sama dunia beauty? Dan apa harapan Mba Debby untuk setiap pelanggan yang duduk di kursi salon?",
  },
};

export function waLink(message: string = "Halo Mba Debby, saya mau booking layanan di Daisy Beauty Salon."): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
