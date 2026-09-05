/**
 * SITE CONTENT — single source of truth.
 * NOTE: copy here avoids em-dashes on purpose — they were being stripped in the
 * paste pipeline. Uses colons/commas instead so nothing breaks.
 */

export const site = {
  name: "LotusCare",
  legalName: "LotusCare Services, LLC",
  tagline: "Care beyond measure.",
  description:
    "LotusCare provides skilled home nursing and non-medical home care across Chicago, helping your loved ones live safely and independently at home.",

  phone: "(708) 967-2192",
  phoneHref: "tel:+17089672192",
  fax: "(872) 266-0325",
  email: "admin@lotuscarellc.com",
  address: {
    line1: "5901 N Cicero Ave, STE 410",
    city: "Chicago",
    state: "IL",
    zip: "60646",
  },
  hours: "Mon–Fri, 8:30 AM – 5:00 PM",

  socials: {
    facebook: "https://www.facebook.com/lotuscareservices",
    instagram: "https://www.instagram.com/lotuscareservices",
    linkedin: "",
  },

  primaryCta: {
    label: "Request a free assessment",
    href: "/contact",
  },
} as const;

export const stats = [
  { value: "220+", label: "Clients cared for" },
  { value: "490", label: "Caregivers & nurses" },
  { value: "120", label: "Community volunteers" },
] as const;

export type Service = {
  slug: string;
  title: string;
  group: "Home Nursing" | "Home Care";
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "rehabilitative-care",
    title: "Rehabilitative Care",
    group: "Home Nursing",
    blurb:
      "Recovery care at home from licensed nurses: wound care, mobility work, and coordination with your family and physicians.",
  },
  {
    slug: "infusion-therapy",
    title: "Infusion Therapy",
    group: "Home Nursing",
    blurb:
      "Hospital-grade infusion care in familiar surroundings, given and monitored by skilled nurses.",
  },
  {
    slug: "surgical-aftercare",
    title: "Surgical Aftercare",
    group: "Home Nursing",
    blurb:
      "Post-operative support and wound care at home, so recovery happens somewhere restful instead of a hospital ward.",
  },
  {
    slug: "private-duty-care",
    title: "Private Duty Care",
    group: "Home Care",
    blurb:
      "A dedicated caregiver, one-to-one: steady company and a helping hand through the day.",
  },
  {
    slug: "personal-care",
    title: "Personal Care",
    group: "Home Care",
    blurb:
      "Respectful help with bathing, dressing, mobility and daily living, handled with dignity.",
  },
  {
    slug: "homemaking",
    title: "Homemaking",
    group: "Home Care",
    blurb:
      "Meals, light housekeeping and errands that keep home safe, tidy and easy to live in.",
  },
];

export const testimonials = [
  {
    quote:
      "My assigned caregiver was so passionate about me and always ready to help in a professional way.",
    name: "Tami W.",
    role: "Client",
  },
  {
    quote:
      "I fell in love with LotusCare right from the free assessment. They were so detailed about my mother's care needs.",
    name: "Kate W.",
    role: "Daughter of client",
  },
  {
    quote:
      "I will continue to tell anyone who cares to listen about the care LotusCare gave our family.",
    name: "James C.",
    role: "Family member",
  },
];

export const careerTracks = [
  {
    id: "caregiving",
    title: "Caregiving",
    blurb:
      "Support clients with everyday care, on a schedule that fits your life.",
  },
  {
    id: "nursing",
    title: "Nursing",
    blurb:
      "Put your skilled-nursing training where it's felt most: in someone's own home.",
  },
  {
    id: "administrative",
    title: "Administrative",
    blurb:
      "Keep care running smoothly: scheduling, coordination and the work behind the scenes.",
  },
] as const;

export const careerLinks = {
  indeed: "https://www.indeed.com/cmp/Lotuscare-Services-LLC/jobs",
  linkedin: "", // TODO if provided
  applyForm: "https://forms.gle/GnZC8H12CHch8wK17", // client's Google application form
} as const;

export const positionOptions = careerTracks.map((t) => t.title);
export const employmentTypes = ["Full-time", "Part-time", "Per diem"] as const;
