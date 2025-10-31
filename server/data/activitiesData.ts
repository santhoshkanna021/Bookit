// ✅ Define the TypeScript type for an activity
export interface Activity {
  id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  image: string;
}

// ✅ Activities array with proper typing
export const activities: Activity[] = [
  {
    id: 1,
    title: "Kayaking",
    location: "Udupi",
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 999,
    image: "../assets/Image 1.svg",
  },
  {
    id: 2,
    title: "Nandi Hills Sunrise",
    location: "Bangalore",
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 899,
    image: "../assets/Image 2.svg",
  },
  {
    id: 3,
    title: "Coffee Trail",
    location: "Coorg",
    description:
      "Curated small-group experience. Certified guide. Safety first with gear included.",
    price: 1299,
    image: "../assets/Image 3.svg",
  },
  {
    id: 4,
    title: "Trek to Skandagiri",
    location: "Chikkaballapur",
    description:
      "Enjoy sunrise trekking with safety gear and a professional guide.",
    price: 1099,
    image: "../assets/Image 4.svg",
  },
  {
    id: 5,
    title: "Beach Camping",
    location: "Gokarna",
    description:
      "Stay under the stars with beachside camping, bonfire, and fun activities.",
    price: 1499,
    image: "../assets/Image 5.svg",
  },
  {
    id: 6,
    title: "Waterfall Hike",
    location: "Chikmagalur",
    description:
      "Guided hike to hidden waterfalls. Includes refreshments and safety gear.",
    price: 1199,
    image: "../assets/Image 6.svg",
  },
  {
    id: 7,
    title: "Cave Exploration",
    location: "Anthargange",
    description:
      "Explore lava caves with certified guides and proper safety measures.",
    price: 999,
    image: "../assets/Image 7.svg",
  },
  {
    id: 8,
    title: "Wildlife Safari",
    location: "Bandipur National Park",
    description:
      "A thrilling jeep safari through forest trails with expert naturalists.",
    price: 1799,
    image: "../assets/Image 8.svg",
  },
];
