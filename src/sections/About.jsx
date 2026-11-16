import {
  Award,
  Users,
  HeartHandshake,
  Eye,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import ownerImage from "../assets/images/shop-owner.jpeg";
import serviceImage from "../assets/logo/service-years.png";

const reasons = [
  {
    icon: Clock3,
    title: "Over 20 Years of Experience",
    description:
      "Serving our local community for more than two decades, with years of experience in optical care.",
  },
  {
    icon: Users,
    title: "A Trusted Local Name",
    description:
      "One of the established optical shops in our area, built on lasting relationships with local customers.",
  },
  {
    icon: Award,
    title: "Experience You Can Trust",
    description:
      "Decades of understanding eyewear, helping customers find solutions suited to their needs.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description:
      "We value every customer and believe in friendly guidance, personal care and lasting relationships.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E5F4FF] blur-3xl opacity-70" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#E5F4FF] blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E5F4FF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2585C5]">
            <Eye size={15} />
            About Our Shop
          </span>

          <h2 className="font-display mt-6 text-4xl font-semibold text-[#12365A] sm:text-5xl lg:text-6xl">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            More than just an optical shop, we're a familiar and trusted part of
            our local community. For over two decades, we've been helping people
            see better and feel confident.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#2585C5]" />
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Owner portrait */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-32 w-32 rounded-tl-[45px] border-l-4 border-t-4 border-[#2585C5]" />

            <div className="relative overflow-hidden rounded-[30px] bg-[#E5F4FF] shadow-[0_20px_55px_rgba(18,54,90,0.16)]">
              <img
                src={ownerImage}
                alt="Ravi Moses D, owner of the optical shop"
                className="aspect-[4/5] w-full object-cover object-center"
              />

              {/* Owner name panel */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12365A] via-[#12365A]/90 to-transparent px-7 pb-7 pt-24 text-white sm:px-9 sm:pb-9">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8CCEFF]">
                  Shop Owner
                </span>

                <h3 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">
                  Ravi Moses D
                </h3>

                <p className="mt-2 text-sm text-[#E5F4FF]">
                  Serving our community with experience and care.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-4 -z-10 h-32 w-32 rounded-br-[45px] border-b-4 border-r-4 border-[#2585C5]" />
          </div>

          {/* About and trust content */}
          <div>
            {/* Experience highlight */}
            <div className="mb-8 flex items-center gap-5 rounded-3xl border border-[#D9ECFA] bg-[#E5F4FF]/70 p-5 sm:p-7">
              <img src={serviceImage} className="w-30" alt="20-years-of-service-logo" />

              <div>
                <h3 className="font-display text-xl font-semibold text-[#12365A] sm:text-2xl">
                  More Than Two Decades of Trust
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Proudly serving our local community for over 20 years. A
                  legacy built through experience and customer relationships.
                </p>
              </div>
            </div>

            {/* Why choose us heading */}
            <h3 className="font-display mb-6 text-2xl font-semibold text-[#12365A] sm:text-3xl">
              What Makes Us Different?
            </h3>

            {/* Reasons grid */}
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-[#E1EDF6] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2585C5]/40 hover:shadow-[0_12px_30px_rgba(18,54,90,0.08)]"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F4FF] text-[#2585C5] transition-colors duration-300 group-hover:bg-[#12365A] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <h4 className="font-display text-lg font-semibold leading-snug text-[#12365A]">
                      {reason.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        {/* <div className="relative mt-20 overflow-hidden rounded-[30px] bg-[#12365A] px-6 py-12 text-center shadow-xl shadow-[#12365A]/10 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#2585C5]/20 blur-2xl" />

          <div className="relative">
            <Eye className="mx-auto mb-5 text-[#8CCEFF]" size={35} />

            <h3 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Vision Matters.
              <span className="block text-[#8CCEFF]">
                Your Trust Matters More.
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#E5F4FF] sm:text-base">
              Thank you for being part of our journey. We look forward to
              serving you and your family for many more years.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#12365A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E5F4FF]"
            >
              Visit Our Shop
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
