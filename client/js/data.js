/* =========================================================
   NEIGHBOURLY - SAMPLE DATA
   Fake listings so the site looks alive before the database exists.
   In Phase 6 we replace this file with real data from the backend.
   Each listing has the same fields the database will have later.
   ========================================================= */

// The five categories: a short id (used in links and filters), a name and an icon
const CATEGORIES = {
  "services":    { name: "Services",          icon: "🧹" },
  "buy-sell":    { name: "Buy & Sell",        icon: "🛋️" },
  "borrow-lend": { name: "Borrow & Lend",     icon: "🔁" },
  "free":        { name: "Free Corner",       icon: "🎁" },
  "language":    { name: "Language Exchange", icon: "💬" }
};

// The launch neighborhoods around Gachon University
const NEIGHBORHOODS = [
  "Bokjeong-dong",
  "Taepyeong-dong",
  "Sinheung-dong",
  "Gachon Univ. Station"
];

// Small helper to build an Unsplash photo link at a good size
function photo(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`;
}

// The sample listings
const LISTINGS = [
  {
    id: 1,
    title: "Wooden study desk with drawer",
    description: "Solid desk, perfect for a one-room. Small scratch on the left side. You pick it up from my building.",
    category: "buy-sell",
    priceType: "paid",
    price: 25000,
    neighborhood: "Bokjeong-dong",
    image: photo("photo-1518455027359-f3f8164ba6bd"),
    owner: { name: "Minji", rating: 4.8 },
    createdAt: "2026-11-16",
    featured: true
  },
  {
    id: 2,
    title: "Moving help, 2 hours",
    description: "I can help carry boxes and furniture. I have a hand cart. Weekends and evenings.",
    category: "services",
    priceType: "paid",
    price: 30000,
    neighborhood: "Sinheung-dong",
    image: photo("photo-1600518464441-9154a4dea21b"),
    owner: { name: "Arjun", rating: 4.9 },
    createdAt: "2026-11-15",
    featured: true
  },
  {
    id: 3,
    title: "Korean ↔ English conversation partner",
    description: "Korean student looking for an English speaker. Let's meet at a cafe near the station once a week!",
    category: "language",
    priceType: "free",
    price: 0,
    neighborhood: "Gachon Univ. Station",
    image: photo("photo-1543269865-cbf427effbad"),
    owner: { name: "Jiwoo", rating: 5.0 },
    createdAt: "2026-11-17",
    featured: true
  },
  {
    id: 4,
    title: "Rice cooker, works perfectly",
    description: "I'm graduating and leaving Korea. 6-cup Cuckoo rice cooker, cleaned and ready to use.",
    category: "free",
    priceType: "free",
    price: 0,
    neighborhood: "Taepyeong-dong",
    image: photo("photo-1556911220-bff31c812dba"),
    owner: { name: "Sophie", rating: 4.7 },
    createdAt: "2026-11-14",
    featured: true
  },
  {
    id: 5,
    title: "Camping tent for 2 people",
    description: "Borrow my tent for a weekend trip. Please return it dry and clean.",
    category: "borrow-lend",
    priceType: "paid",
    price: 5000,
    priceUnit: "day",
    neighborhood: "Bokjeong-dong",
    image: photo("photo-1504280390367-361c6d9f38f4"),
    owner: { name: "Hyunwoo", rating: 4.6 },
    createdAt: "2026-11-13",
    featured: true
  },
  {
    id: 6,
    title: "Room cleaning service",
    description: "Deep cleaning for one-rooms and dorms: floor, bathroom and kitchen. Cleaning supplies included.",
    category: "services",
    priceType: "paid",
    price: 15000,
    priceUnit: "hour",
    neighborhood: "Taepyeong-dong",
    image: photo("photo-1581578731548-c64695cc6952"),
    owner: { name: "Grace", rating: 4.9 },
    createdAt: "2026-11-12",
    featured: true
  },
  {
    id: 7,
    title: "Used laptop, good for classes",
    description: "13-inch laptop, 8GB RAM, battery lasts about 5 hours. Comes with charger.",
    category: "buy-sell",
    priceType: "paid",
    price: 280000,
    neighborhood: "Sinheung-dong",
    image: photo("photo-1517694712202-14dd9538aa97"),
    owner: { name: "Daniel", rating: 4.5 },
    createdAt: "2026-11-11",
    featured: false
  },
  {
    id: 8,
    title: "Textbooks: Intro to Programming",
    description: "Two textbooks used in first-year classes at Gachon. Some notes in pencil.",
    category: "buy-sell",
    priceType: "paid",
    price: 12000,
    neighborhood: "Gachon Univ. Station",
    image: photo("photo-1544947950-fa07a98d237f"),
    owner: { name: "Seoyeon", rating: 4.8 },
    createdAt: "2026-11-10",
    featured: false
  },
  {
    id: 9,
    title: "Math & English tutoring",
    description: "Tutoring for high school or university students. First lesson is a free trial.",
    category: "services",
    priceType: "paid",
    price: 20000,
    priceUnit: "hour",
    neighborhood: "Bokjeong-dong",
    image: photo("photo-1503676260728-1c00da094a0b"),
    owner: { name: "Priya", rating: 5.0 },
    createdAt: "2026-11-09",
    featured: false
  },
  {
    id: 10,
    title: "Power drill and tool set",
    description: "Need to put up shelves? Borrow my drill and tools for a day.",
    category: "borrow-lend",
    priceType: "free",
    price: 0,
    neighborhood: "Sinheung-dong",
    image: photo("photo-1504148455328-c376907d081c"),
    owner: { name: "Jaehyun", rating: 4.7 },
    createdAt: "2026-11-08",
    featured: false
  },
  {
    id: 11,
    title: "Comfy armchair, free to a good home",
    description: "Moving out this weekend. The chair is free if you can carry it from the 2nd floor.",
    category: "free",
    priceType: "free",
    price: 0,
    neighborhood: "Bokjeong-dong",
    image: photo("photo-1586023492125-27b2c045efd7"),
    owner: { name: "Emma", rating: 4.9 },
    createdAt: "2026-11-07",
    featured: false
  },
  {
    id: 12,
    title: "Japanese ↔ Korean language exchange",
    description: "Japanese exchange student. I can help with Japanese, and I'd love to practise Korean.",
    category: "language",
    priceType: "free",
    price: 0,
    neighborhood: "Taepyeong-dong",
    image: photo("photo-1529156069898-49953e39b3ac"),
    owner: { name: "Yuki", rating: 4.8 },
    createdAt: "2026-11-06",
    featured: false
  }
];