/**
 * LUMIÈRE Restaurant Template — Site Configuration
 * Copyright © 2026 D-GITALCODE
 *
 * Edit this file to customize the template for your restaurant.
 * All content, links, and contact details are centralized here.
 */

const SITE_CONFIG = {
  restaurant: {
    name: "Lumière",
    tagline: "Where Culinary Art Meets Timeless Elegance",
    description:
      "An award-winning fine dining experience celebrating seasonal ingredients, masterful technique, and the art of hospitality.",
    founded: "2018",
    cuisine: "Contemporary French",
  },

  hero: {
    headline: "A Symphony of Flavor",
    subheadline:
      "Experience Michelin-caliber cuisine in an atmosphere of refined luxury",
    ctaReserve: "Reserve a Table",
    ctaMenu: "Discover Our Menu",
  },

  about: {
    title: "Our Story",
    subtitle: "A Legacy of Excellence",
    story: [
      "Founded in the heart of the city, Lumière was born from a singular vision: to create a dining experience that transcends the ordinary. Our founder, Chef Antoine Moreau, brought decades of experience from the world's most prestigious kitchens to craft a restaurant where every detail matters.",
      "We believe that exceptional dining is an art form — one that begins with the finest seasonal ingredients, continues through meticulous preparation, and culminates in moments of pure gastronomic delight shared at your table.",
    ],
    philosophy: {
      title: "Our Philosophy",
      items: [
        {
          icon: "leaf",
          title: "Farm to Table",
          text: "We partner with local artisans and sustainable farms to source the freshest seasonal ingredients.",
        },
        {
          icon: "flame",
          title: "Masterful Technique",
          text: "Every dish is crafted with precision, passion, and decades of culinary expertise.",
        },
        {
          icon: "heart",
          title: "Warm Hospitality",
          text: "Our team delivers service that is attentive yet unobtrusive, making every guest feel truly special.",
        },
      ],
    },
  },

  chef: {
    name: "Chef Antoine Moreau",
    title: "Executive Chef & Founder",
    bio: "Trained under culinary legends in Paris and Tokyo, Chef Moreau brings a unique fusion of classical French technique and contemporary global influences. His philosophy centers on respecting ingredients while pushing creative boundaries.",
    quote:
      "Cooking is not about convenience. It is about creating memories that linger long after the last bite.",
    awards: ["Michelin Star 2024", "James Beard Nominee", "World's 50 Best Discovery"],
  },

  signatureDishes: [
    {
      name: "Wagyu Beef Tenderloin",
      description:
        "A5 Japanese wagyu, truffle jus, roasted bone marrow, seasonal vegetables",
      price: "$98",
      image: "assets/images/dish-wagyu.jpg",
      tag: "Chef's Selection",
    },
    {
      name: "Pan-Seared Scallops",
      description:
        "Hokkaido scallops, cauliflower purée, caviar beurre blanc, micro herbs",
      price: "$68",
      image: "assets/images/dish-scallops.jpg",
      tag: "Signature",
    },
    {
      name: "Duck Confit",
      description:
        "Slow-cooked duck leg, cherry gastrique, potato dauphinoise, haricots verts",
      price: "$72",
      image: "assets/images/dish-duck.jpg",
      tag: "Classic",
    },
    {
      name: "Chocolate Soufflé",
      description:
        "Valrhona dark chocolate, vanilla crème anglaise, gold leaf, berry compote",
      price: "$28",
      image: "assets/images/dish-dessert.jpg",
      tag: "Must Try",
    },
  ],

  menu: {
    starters: [
      { name: "Foie Gras Terrine", description: "Fig compote, brioche toast, Sauternes gelée", price: "$38" },
      { name: "Oysters Rockefeller", description: "Six fresh oysters, spinach, Pernod, hollandaise", price: "$42" },
      { name: "Burrata & Heirloom Tomatoes", description: "Basil oil, aged balsamic, sourdough crisps", price: "$24" },
      { name: "Lobster Bisque", description: "Maine lobster, cognac cream, chive oil", price: "$32" },
    ],
    mains: [
      { name: "Wagyu Beef Tenderloin", description: "Truffle jus, bone marrow, seasonal vegetables", price: "$98" },
      { name: "Pan-Seared Scallops", description: "Cauliflower purée, caviar beurre blanc", price: "$68" },
      { name: "Duck Confit", description: "Cherry gastrique, potato dauphinoise", price: "$72" },
      { name: "Rack of Lamb", description: "Herb crust, ratatouille, rosemary jus", price: "$86" },
      { name: "Wild Mushroom Risotto", description: "Porcini, truffle oil, Parmigiano-Reggiano", price: "$48" },
    ],
    desserts: [
      { name: "Chocolate Soufflé", description: "Valrhona chocolate, vanilla crème anglaise", price: "$28" },
      { name: "Crème Brûlée", description: "Madagascar vanilla, seasonal berries", price: "$18" },
      { name: "Tarte Tatin", description: "Caramelized apple, Calvados ice cream", price: "$22" },
      { name: "Cheese Selection", description: "Artisan cheeses, honeycomb, walnut bread", price: "$32" },
    ],
    drinks: [
      { name: "Champagne Dom Pérignon", description: "2012 Vintage, 750ml", price: "$385" },
      { name: "Bordeaux Château Margaux", description: "2015, glass", price: "$95" },
      { name: "Craft Cocktail — Lumière", description: "Gin, elderflower, citrus, gold dust", price: "$24" },
      { name: "Artisan Coffee", description: "Single origin, tableside preparation", price: "$12" },
      { name: "Sommelier Selection", description: "Ask your server for today's pairings", price: "Varies" },
    ],
  },

  gallery: [
    { src: "assets/images/gallery-01.jpg", alt: "Elegant dining room with ambient lighting", category: "interior" },
    { src: "assets/images/gallery-02.jpg", alt: "Chef plating a signature dish", category: "kitchen" },
    { src: "assets/images/gallery-03.jpg", alt: "Wine cellar with premium selection", category: "wine" },
    { src: "assets/images/gallery-04.jpg", alt: "Fresh seasonal ingredients", category: "ingredients" },
    { src: "assets/images/gallery-05.jpg", alt: "Private dining experience", category: "interior" },
    { src: "assets/images/gallery-06.jpg", alt: "Artfully presented dessert", category: "food" },
    { src: "assets/images/gallery-07.jpg", alt: "Bar area with craft cocktails", category: "bar" },
    { src: "assets/images/gallery-08.jpg", alt: "Outdoor terrace dining at sunset", category: "terrace" },
  ],

  testimonials: [
    {
      quote:
        "An absolutely transcendent dining experience. Every course was a masterpiece, and the service was impeccable without being intrusive.",
      author: "Sarah Mitchell",
      title: "Food Critic, The Epicurean Review",
      rating: 5,
    },
    {
      quote:
        "Lumière has redefined fine dining in this city. The wagyu tenderloin alone is worth the visit, but the entire experience is unforgettable.",
      author: "James Chen",
      title: "Michelin Guide Inspector",
      rating: 5,
    },
    {
      quote:
        "We celebrated our anniversary here and it exceeded every expectation. The attention to detail, from the amuse-bouche to the petit fours, was extraordinary.",
      author: "Elena & Marco Rossi",
      title: "Regular Guests",
      rating: 5,
    },
  ],

  awards: [
    { year: "2024", title: "Michelin Star", organization: "Michelin Guide" },
    { year: "2024", title: "Best Fine Dining", organization: "City Dining Awards" },
    { year: "2023", title: "Wine Spectator Award", organization: "Wine Spectator" },
    { year: "2023", title: "Top 50 Restaurants", organization: "World's 50 Best" },
    { year: "2022", title: "Chef's Choice Award", organization: "James Beard Foundation" },
  ],

  hours: [
    { day: "Monday", hours: "Closed", closed: true },
    { day: "Tuesday – Thursday", hours: "6:00 PM – 10:00 PM", closed: false },
    { day: "Friday – Saturday", hours: "5:30 PM – 11:00 PM", closed: false },
    { day: "Sunday", hours: "5:00 PM – 9:30 PM", closed: false },
  ],

  contact: {
    address: "128 Madison Avenue, New York, NY 10016",
    phone: "+1 (212) 555-0198",
    email: "reservations@lumiere-dining.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.986657!3d40.7484409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTEuOSJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  },

  social: {
    instagram: "https://instagram.com/lumiere.dining",
    facebook: "https://facebook.com/lumiere.dining",
    twitter: "https://twitter.com/lumiere_dining",
    tripadvisor: "https://tripadvisor.com/lumiere",
  },

  newsletter: {
    title: "Join Our Inner Circle",
    description:
      "Receive exclusive invitations to chef's table events, seasonal menu previews, and special occasion offers.",
    placeholder: "Enter your email address",
    button: "Subscribe",
  },

  footer: {
    copyright: "Copyright © 2026 D-GITALCODE. All rights reserved.",
    templateBy: "Template by D-GITALCODE",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
