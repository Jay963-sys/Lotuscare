/**
 * SITE CONTENT — single source of truth.
 *
 * This is the themeable layer. To spin up the Goshen site from the same
 * template: copy the project, replace THIS file's values, and override the
 * palette tokens in app/globals.css. No component edits required.
 *
 * ⚠️ All NAP values below are marked TODO — the old LotusCare site listed
 * three phone numbers and two addresses. Confirm the correct set with the
 * client before launch (also fixes Google Business / local SEO).
 */

export const site = {
  name: "LotusCare",
  legalName: "LotusCare Services, LLC",
  tagline: "Dedicated to providing the highest quality home health care.",
  description:
    "LotusCare provides skilled home nursing and compassionate non-medical home care across Chicago — helping your loved ones live safely and independently at home.",

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
      "Licensed nurses deliver curative and rehabilitative procedures at home, coordinating the plan of care with your family and physicians.",
  },
  {
    slug: "infusion-therapy",
    title: "Infusion Therapy",
    group: "Home Nursing",
    blurb:
      "Safe, monitored in-home infusion administered by skilled nursing personnel — hospital-grade care in familiar surroundings.",
  },
  {
    slug: "surgical-aftercare",
    title: "Surgical Aftercare",
    group: "Home Nursing",
    blurb:
      "Attentive post-operative support and wound care that helps recovery happen where people heal best: at home.",
  },
  {
    slug: "private-duty-care",
    title: "Private Duty Care",
    group: "Home Care",
    blurb:
      "One-to-one companionship and assistance tailored to the day-to-day needs of your loved one.",
  },
  {
    slug: "personal-care",
    title: "Personal Care",
    group: "Home Care",
    blurb:
      "Dignified help with bathing, dressing, mobility and daily living — delivered with warmth and respect.",
  },
  {
    slug: "homemaking",
    title: "Homemaking",
    group: "Home Care",
    blurb:
      "Light housekeeping, meal preparation and errands that keep the home safe, comfortable and independent.",
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
    blurb: "Provide quality home care to clients — on a schedule that works for you.",
  },
  {
    id: "nursing",
    title: "Nursing",
    blurb: "Bring your skilled nursing abilities to clients who need them most.",
  },
  {
    id: "administrative",
    title: "Administrative",
    blurb: "Support the team behind the care with your organisational talent.",
  },
] as const;

export const positionOptions = careerTracks.map((t) => t.title);

export const employmentTypes = ["Full-time", "Part-time", "Per diem"] as const;
