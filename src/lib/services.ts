export type ServiceTag = "M" | "W" | "B";

export type ServiceItem = {
  name: string;
  tag: ServiceTag;
};

export type ServiceGroup = {
  title: string;
  description: string;
  services: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Home",
    description: "Daily help to keep homes and offices running smoothly.",
    services: [
      { name: "House Cleaning", tag: "B" },
      { name: "Deep Cleaning", tag: "B" },
      { name: "Office Cleaning", tag: "B" },
      { name: "Laundry", tag: "B" },
      { name: "Grocery Shopping", tag: "B" },
      { name: "Appliance Repair", tag: "M" },
      { name: "Pest Control", tag: "M" },
      { name: "Moving Help", tag: "M" },
      { name: "Furniture Assembly", tag: "M" },
      { name: "Car Wash", tag: "M" },
    ],
  },
  {
    title: "Care",
    description: "Personal support, wellness, and care services.",
    services: [
      { name: "Childcare", tag: "W" },
      { name: "Elder Care", tag: "W" },
      { name: "Nursing Assistant", tag: "W" },
      { name: "Tutoring", tag: "B" },
      { name: "Personal Training", tag: "B" },
      { name: "Makeup Artist", tag: "W" },
      { name: "Hair Styling", tag: "W" },
      { name: "Barber Services", tag: "M" },
      { name: "Tailoring", tag: "B" },
    ],
  },
  {
    title: "Handyman",
    description: "Skilled trade work and repair services.",
    services: [
      { name: "Plumbing Repairs", tag: "M" },
      { name: "Electrical Repairs", tag: "M" },
      { name: "AC Repair", tag: "M" },
      { name: "Handyman Services", tag: "M" },
      { name: "Carpentry", tag: "M" },
      { name: "Painting", tag: "M" },
      { name: "Motorcycle Repair", tag: "M" },
      { name: "Mobile Phone Repair", tag: "B" },
      { name: "Computer Repair", tag: "B" },
    ],
  },
  {
    title: "Outdoor",
    description: "On-the-go services for cities and communities.",
    services: [
      { name: "Gardening", tag: "B" },
      { name: "Delivery Rider", tag: "M" },
      { name: "Security Guard", tag: "M" },
      { name: "Event Staffing", tag: "B" },
    ],
  },
  {
    title: "Lifestyle",
    description: "Creative and hospitality services for every occasion.",
    services: [
      { name: "Catering", tag: "B" },
      { name: "Baking", tag: "B" },
      { name: "Photography", tag: "B" },
      { name: "Videography", tag: "B" },
      { name: "Social Media Management", tag: "B" },
    ],
  },
  {
    title: "Tech",
    description: "Digital, business, and professional support.",
    services: [
      { name: "Graphic Design", tag: "B" },
      { name: "Web Development", tag: "B" },
      { name: "Translation", tag: "B" },
      { name: "Legal Assistant", tag: "B" },
    ],
  },
];

export const serviceLegend = [
  { tag: "M", label: "Male provider available" },
  { tag: "W", label: "Female provider available" },
  { tag: "B", label: "Both available" },
] as const;

// Optional: flat list for dropdowns/search
export const defaultServices = serviceGroups.flatMap((group) =>
  group.services.map((service) => service.name)
);

// Optional: fallback list for country selector
export const fallbackCountries = [
  "All countries",
  "Kenya",
  "Nigeria",
  "Ghana",
  "South Africa",
  "Uganda",
  "Rwanda",
  "Tanzania",
  "India",
  "Philippines",
];