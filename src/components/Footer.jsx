import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowUpRight,
  Eye,
  Heart,
  ChevronRight,
} from "lucide-react";

import logo from "../assets/logo/latha-logo.png";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Our Services", href: "#services" },
  { name: "Why Choose Us", href: "#about" },
  { name: "Customer Reviews", href: "#reviews" },
  { name: "Contact Us", href: "#contact" },
];

const services = [
  "Eye Testing",
  "Prescription Lenses",
  "Frame Fitting & Adjustment",
  "Contact Lenses",
  "Spectacle Repairs",
  "Lens Replacement",
];

const phoneNumber = "+919952249338";
const whatsappLink = "https://wa.me/919952249338";

const address =
  "LATHA Opticals, 174, 139A, North Car Street, Thiruchendur, Thoothukudi, Tamil Nadu - 628215";

const directionsLink =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(address);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0B2744] text-white">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#2585C5]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#2585C5]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top brand message */}
        <div className="border-b border-white/10 py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8CCEFF]">
                Latha Opticals
              </span>

              <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Clear Vision.
                <span className="block text-[#8CCEFF]">Confident Living.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#C5D8E9] sm:text-base">
                Serving our local community for over 20 years with friendly
                service, trusted guidance and eyewear for every generation.
              </p>
            </div>

            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#12365A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5F4FF]"
            >
              <Phone size={18} />
              Get in Touch
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr] lg:gap-10">
          {/* Brand column */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
                <img
                  src={logo}
                  alt="Latha Opticals logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="font-display text-2xl font-bold text-white">
                Latha Opticals
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#C5D8E9]">
              Your trusted local destination for eyewear and optical care.
              Proudly serving Thiruchendur for more than two decades.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <Eye size={16} className="text-[#8CCEFF]" />
              <span className="text-xs font-medium text-[#DCEEFF]">
                Your Vision, Our Care
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-[#C5D8E9] transition-colors duration-200 hover:text-[#8CCEFF]"
                >
                  <ChevronRight
                    size={15}
                    className="text-[#2585C5] transition-transform group-hover:translate-x-1"
                  />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Our Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="group flex items-center gap-2 text-sm text-[#C5D8E9] transition-colors duration-200 hover:text-[#8CCEFF]"
                >
                  <ChevronRight
                    size={15}
                    className="text-[#2585C5] transition-transform group-hover:translate-x-1"
                  />
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="mt-6 flex flex-col gap-6">
              {/* Phone */}
              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8CCEFF] transition-colors group-hover:bg-[#2585C5] group-hover:text-white">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-[#8DAAC3]">Call Us</p>
                  <p className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#8CCEFF]">
                    +91 99522 49338
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8CCEFF] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="text-xs text-[#8DAAC3]">WhatsApp</p>
                  <p className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-[#8CCEFF]">
                    Chat with us
                  </p>
                </div>
              </a>

              {/* Address */}
              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8CCEFF] transition-colors group-hover:bg-[#2585C5] group-hover:text-white">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-xs text-[#8DAAC3]">Our Location</p>
                  <p className="mt-1 text-sm leading-6 text-[#C5D8E9] transition-colors group-hover:text-white">
                    174, 139A, North Car Street, Thiruchendur, Thoothukudi,
                    Tamil Nadu - 628215
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#8CCEFF]">
                    Get Directions
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </a>

              {/* Working hours */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#8CCEFF]">
                  <Clock3 size={18} />
                </div>

                <div>
                  <p className="text-xs text-[#8DAAC3]">Working Hours</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Monday – Saturday
                  </p>
                  <p className="mt-1 text-sm text-[#C5D8E9]">
                    9:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-[#9BB4CA]">
            © {currentYear} Latha Opticals. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-[#9BB4CA]">
            Made with
            <Heart size={13} fill="#2585C5" className="text-[#2585C5]" />
            for better vision.
          </p>

          <a
            href="#home"
            className="text-xs font-semibold text-[#8CCEFF] transition-colors hover:text-white"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
