import {
  Eye,
  Glasses,
  Ruler,
  Contact,
  Wrench,
  Stamp,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Eye Testing",
    description:
      "Comprehensive eye examinations to help assess your vision and keep your eyes healthy.",
    icon: Eye,
    number: "01",
  },
  {
    id: 2,
    title: "Prescription Lenses",
    description:
      "Discover quality prescription lenses tailored to your vision requirements and everyday lifestyle.",
    icon: Glasses,
    number: "02",
  },
  {
    id: 3,
    title: "Frame Fitting & Adjustment",
    description:
      "Enjoy a comfortable fit with personalised frame adjustments designed for your everyday comfort.",
    icon: Ruler,
    number: "03",
  },
  {
    id: 4,
    title: "Spectacle Repairs",
    description:
      "Give your favourite frames a helping hand with careful repairs and adjustments.",
    icon: Wrench,
    number: "05",
  },
  {
    id: 5,
    title: "Contact Lenses",
    description:
      "Explore contact lens options suited to your vision needs, preferences and lifestyle.",
    icon: Contact,
    number: "04",
  },
  {
    id: 6,
    title: "Rubber Stamp Services",
    description:
      "Get quality rubber stamps made to suit your needs. Whether for personal, business or official use, we're here to help with reliable stamping solutions.",
    icon: Stamp,
    number: "06",
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#E5F4FF]/60 px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-white/80 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#B9E1FF]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2585C5]/15 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2585C5] shadow-sm">
            <Eye size={15} />
            Our Services
          </span>

          <h2 className="font-display mt-6 text-4xl font-semibold leading-tight text-[#12365A] sm:text-5xl lg:text-6xl">
            Expert Eye Care &amp;
            <span className="block text-[#2585C5]">Eyewear Services</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            From comprehensive eye tests to custom eyewear and aftercare, we're
            here to keep your vision clear and your eyewear in perfect shape.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-[#2585C5]" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-3xl border border-[#D9EAF7] bg-white p-7 shadow-[0_8px_30px_rgba(18,54,90,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2585C5]/40 hover:shadow-[0_20px_45px_rgba(18,54,90,0.12)] sm:p-8"
              >
                {/* Number */}
                <div className="absolute right-7 top-7 font-display text-4xl font-semibold text-[#E5F4FF] transition-colors duration-300 group-hover:text-[#B9E1FF]">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5F4FF] text-[#2585C5] transition-all duration-300 group-hover:bg-[#12365A] group-hover:text-white group-hover:rotate-3">
                  <Icon size={29} strokeWidth={1.7} />
                </div>

                {/* Card content */}
                <h3 className="font-display relative max-w-[85%] text-2xl font-semibold leading-snug text-[#12365A] transition-colors duration-300 group-hover:text-[#2585C5]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-7 flex items-center justify-between border-t border-[#E5F4FF] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2585C5]">
                    Quality Care
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5F4FF] text-[#12365A] transition-all duration-300 group-hover:bg-[#12365A] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#2585C5] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-14 rounded-3xl bg-[#12365A] px-6 py-10 text-center shadow-xl shadow-[#12365A]/10 sm:px-10 sm:py-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8CCEFF]">
            We're Here to Help
          </span>

          <h3 className="font-display mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Your Vision Deserves the Best Care.
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#E5F4FF] sm:text-base">
            Whether you need an eye test, a new pair of glasses or a little help
            with your existing eyewear, we're happy to help.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#12365A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5F4FF]"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </a>
        </div> */}
      </div>
    </section>
  );
}
