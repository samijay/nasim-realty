import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marcus & Priya Johnson",
    neighborhood: "Rockridge",
    type: "buyer",
    quote: "Nasim didn't just find us a house — she found us our home.",
    story:
      "We'd been searching for over a year, losing out in multiple-offer situations. Nasim sat down with us, really listened to what mattered (walkability, great schools, a yard for our dog), and within two weeks found an off-market Craftsman in Rockridge that checked every box. Her negotiation skills saved us $40K. We're still in disbelief this is our home.",
    rating: 5,
    date: "2025-10",
    initials: "MJ",
  },
  {
    id: "2",
    name: "Sarah Chen",
    neighborhood: "Temescal",
    type: "seller",
    quote: "14 offers in 5 days. Nasim is a force of nature.",
    story:
      "I was nervous about selling — it was my first time and I'd heard horror stories. Nasim walked me through every step, brought in a stager and photographer who transformed my place, and created a marketing campaign that was basically art. We got 14 offers in 5 days and closed 17% above asking. I couldn't have asked for a better experience.",
    rating: 5,
    date: "2025-08",
    initials: "SC",
  },
  {
    id: "3",
    name: "David & Maria Rodriguez",
    neighborhood: "Fruitvale",
    type: "buyer",
    quote: "As first-generation homebuyers, Nasim made us feel seen and supported.",
    story:
      "Buying our first home felt overwhelming. Nasim was patient, bilingual, and truly understood our family's needs. She connected us with down payment assistance programs we didn't know existed and found us a beautiful home in Fruitvale near our community. She didn't just close a deal — she changed our family's future.",
    rating: 5,
    date: "2025-06",
    initials: "DR",
  },
  {
    id: "4",
    name: "James Wright",
    neighborhood: "Grand Lake",
    type: "seller",
    quote: "Nasim's market knowledge is unmatched. She knew exactly when to list.",
    story:
      "I was going to list in January, but Nasim analyzed the data and recommended waiting until spring when inventory would be lower in Grand Lake. She was right — we had 8 offers in a week and sold for $187K above asking. Her strategic approach and market expertise made all the difference. I recommend her to everyone I know.",
    rating: 5,
    date: "2025-05",
    initials: "JW",
  },
  {
    id: "5",
    name: "Angela & Tomas Okonkwo",
    neighborhood: "Montclair",
    type: "buyer",
    quote: "She found us the view we'd dreamed about for 10 years.",
    story:
      "Relocating from the East Coast, we fell in love with the Oakland Hills online but had no idea how competitive the market was. Nasim gave us a crash course in East Bay neighborhoods, took us on personalized tours, and when our dream hillside home came up, she moved fast. We were under contract in 48 hours. Best decision we ever made.",
    rating: 5,
    date: "2025-03",
    initials: "AO",
  },
  {
    id: "6",
    name: "Rachel Kim",
    neighborhood: "Adams Point",
    type: "buyer",
    quote: "Nasim made buying my first condo actually fun.",
    story:
      "I was a single first-time buyer with a million questions and a modest budget. Nasim never made me feel like a small client. She patiently explained everything, helped me get pre-approved, and found me a perfect lakeside condo in Adams Point that I thought was way out of my range. She negotiated closing costs that saved me $8K. I tell everyone about her.",
    rating: 5,
    date: "2025-01",
    initials: "RK",
  },
];

export const getFeaturedTestimonial = (): Testimonial => {
  return testimonials[0];
};

export const getTestimonialStats = () => {
  return {
    totalClients: 150,
    avgRating: 4.9,
    repeatClients: 34,
    referralRate: 72,
  };
};
