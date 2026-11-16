import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  Navigation,
  ArrowUpRight,
  Eye,
} from "lucide-react";

const phoneNumber = "+919952249338";
const address =
  "LATHA Opticals, 174, 139A, North Car Street, Thiruchendur, Thoothukudi, Tamil Nadu - 628215";

const whatsappLink = "https://wa.me/919952249338";

const directionsLink =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(address);

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#E5F4FF] blur-3xl opacity-70" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#E5F4FF] blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2585C5]/15 bg-[#E5F4FF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2585C5]">
            <Eye size={15} />
            Contact Us
          </span>

          <h2 className="font-display mt-6 text-4xl font-semibold leading-tight text-[#12365A] sm:text-5xl lg:text-6xl">
            We'd Love to
            <span className="block text-[#2585C5]">Hear From You.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Have a question or planning to visit us? Get in touch or find your
            way to Latha Opticals. We're always happy to help!
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#2585C5]" />
        </div>

        {/* Main contact layout */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Left: Contact details */}
          <div className="flex flex-col gap-5">
            {/* Phone card */}
            <a
              href={`tel:${phoneNumber}`}
              className="group flex items-center gap-5 rounded-3xl border border-[#DCEAF5] bg-white p-6 shadow-[0_8px_30px_rgba(18,54,90,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2585C5]/40 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E5F4FF] text-[#2585C5] transition-colors group-hover:bg-[#12365A] group-hover:text-white">
                <Phone size={25} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-500">Call Us</p>
                <h3 className="mt-1 text-lg font-semibold text-[#12365A] sm:text-xl">
                  +91 99522 49338
                </h3>
                <p className="mt-1 text-xs text-[#2585C5]">Tap to call us</p>
              </div>

              <ArrowUpRight
                className="shrink-0 text-[#2585C5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={21}
              />
            </a>

            {/* WhatsApp card */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-3xl border border-[#DCEAF5] bg-white p-6 shadow-[0_8px_30px_rgba(18,54,90,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/40 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E5F4FF] text-[#2585C5] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                <MessageCircle size={25} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-500">WhatsApp</p>
                <h3 className="mt-1 text-lg font-semibold text-[#12365A] sm:text-xl">
                  +91 99522 49338
                </h3>
                <p className="mt-1 text-xs text-[#2585C5]">Chat with us</p>
              </div>

              <ArrowUpRight
                className="shrink-0 text-[#2585C5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={21}
              />
            </a>

            {/* Address card */}
            <div className="rounded-3xl border border-[#DCEAF5] bg-white p-6 shadow-[0_8px_30px_rgba(18,54,90,0.05)] sm:p-7">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E5F4FF] text-[#2585C5]">
                  <MapPin size={25} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-500">
                    Visit Our Store
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#12365A]">
                    LATHA Opticals
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    174, 139A, North Car Street, Thiruchendur, Thoothukudi,
                    Tamil Nadu - 628215
                  </p>

                  <a
                    href={directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2585C5] transition hover:gap-3 hover:text-[#12365A]"
                  >
                    Get Directions
                    <Navigation size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Working hours card */}
            <div className="rounded-3xl border border-[#DCEAF5] bg-[#E5F4FF]/70 p-6 sm:p-7">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2585C5]">
                  <Clock3 size={25} />
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Service Time
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-[#12365A]">
                    Monday – Saturday
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#2585C5]">
                    9:00 AM – 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="flex min-h-[450px] flex-col overflow-hidden rounded-3xl border border-[#DCEAF5] bg-white shadow-[0_12px_40px_rgba(18,54,90,0.09)] lg:min-h-full">
            <div className="flex items-center justify-between gap-3 border-b border-[#E5F0F8] px-6 py-5">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#12365A] sm:text-2xl">
                  Find Our Store
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Visit us at North Car Street, Thiruchendur.
                </p>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E5F4FF] text-[#2585C5]">
                <MapPin size={21} />
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative min-h-[380px] flex-1 bg-[#E5F4FF]" id="storeMap" >
              <iframe
                title="LATHA Opticals Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31568.154316378284!2d78.1211912!3d8.4975048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0390186841299f%3A0xa411a09eb11adb40!2sLATHA%20Opticals!5e0!3m2!1sen!2sin!4v1794828685295!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="flex items-center justify-between gap-3 bg-[#F8FBFE] px-6 py-4">
              <p className="text-xs text-slate-500">
                LATHA Opticals · Thiruchendur
              </p>

              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#2585C5] hover:text-[#12365A]"
              >
                Directions
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom welcome banner */}
        {/* <div className="relative mt-16 overflow-hidden rounded-[30px] bg-[#12365A] px-6 py-12 text-center shadow-xl shadow-[#12365A]/10 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#2585C5]/20 blur-2xl" />

          <div className="relative">
            <Eye className="mx-auto mb-5 text-[#8CCEFF]" size={34} />

            <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              We'd Be Happy to Welcome You!
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#E5F4FF] sm:text-base">
              Visit LATHA Opticals and experience friendly service, trusted
              guidance and eyewear for your needs.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#12365A] transition hover:-translate-y-1 hover:bg-[#E5F4FF]"
              >
                <Phone size={17} />
                Call Us
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/20"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
