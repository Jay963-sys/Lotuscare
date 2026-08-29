/**
 * SITE CONTENT — single source of truth.
 *
 * This is the themeable layer. To spin up the Goshen site from the same
 * template: copy the project, replace THIS file's values, and override the
 * palette tokens in app/globals.css. No component edits required.
 *
 * IMPORTANT: All NAP values below are marked TODO — the old LotusCare site
 * listed three phone numbers and two addresses. Confirm the correct set with
 * the client before launch (also fixes Google Business / local SEO).
 */

export const site = {
  name: "LotusCare",
  legalName: "LotusCare Services, LLC",
  tagline: "Care beyond measure.",
  description:
    "LotusCare provides skilled home nursing and non-medical home care across Chicago helping your loved ones live safely and independently at home.",

  // --- Contact / NAP — TODO: CONFIRM WITH CLIENT ---
  phone: "(708) 793-2159",
  phoneHref: "tel:+17087932159",
  fax: "(872) 266-0325",
  email: "admin@lotuscarellc.com",
  address: {
    line1: "4001 W Devon Avenue, Suite 310 E",
    city: "Chicago",
    state: "IL",
    zip: "60646",
  },
  hours: "Mon–Fri, 9:00 AM – 5:00 PM",

  socials: {
    // TODO: real handles or remove from footer
    facebook: "",
    instagram: "",
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
      "Recovery care at home from licensed nurses wound care, mobility work, and coordination with your family and physicians.",
  },
  {
    slug: "infusion-therapy",
    title: "Infusion Therapy",
    group: "Home Nursing",
    blurb:
      "In-home infusion given and monitored by skilled nurses hospital-grade care, in familiar surroundings.",
  },
  {
    slug: "surgical-aftercare",
    title: "Surgical Aftercare",
    group: "Home Nursing",
    blurb:
      "Post-operative support and wound care at home, so recovery happens somewhere restful not a hospital ward.",
  },
  {
    slug: "private-duty-care",
    title: "Private Duty Care",
    group: "Home Care",
    blurb:
      "A dedicated caregiver, one-to-one relationship, steady company and a helping hand through the day.",
  },
  {
    slug: "personal-care",
    title: "Personal Care",
    group: "Home Care",
    blurb:
      "Respectful help with bathing, dressing, mobility and daily living handled with dignity.",
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

// Careers — drives the application form's position options
export const careerTracks = [
  {
    id: "caregiving",
    title: "Caregiving",
    blurb:
      "Support clients with everyday care on a schedule that fits your life.",
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
      "Keep care running smoothly scheduling, coordination and the work behind the scenes.",
  },
] as const;

export const careerLinks = {
  indeed: "https://www.indeed.com/cmp/Lotuscare-Services-LLC/jobs",
  linkedin: "", // TODO: LotusCare LinkedIn jobs / company URL
} as const;

export const positionOptions = careerTracks.map((t) => t.title);

export const employmentTypes = ["Full-time", "Part-time", "Per diem"] as const;
