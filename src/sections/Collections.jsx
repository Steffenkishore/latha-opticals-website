import { useState } from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

import mensImage from "../assets/images/mens-eyewear2.jpg";
import womensImage from "../assets/images/womens-eyewear2.jpg";
import kidsImage from "../assets/images/kids-eyewear2.jpg";
import sunglassesImage from "../assets/images/sunglasses2.jpg";
import contactImage from "../assets/images/contact-lenses2.jpg";

import mensTypeImage from "../assets/images/mens-eyeware-types2.png";
import womensTypeImage from "../assets/images/womens-eyeware-types2.png";
import kidsTypeImage from "../assets/images/kids-eyeware-types2.png";
import sunglassesTypeImage from "../assets/images/sunglasses-types2.png";
import contactlensTypeImage from "../assets/images/contact-lens-types2.png";



const collections = [
  {
    id: "men",
    title: "Men's Eyewear",
    image: mensImage,
    eyebrow: "01 / MEN'S COLLECTION",
    headline: "Find Your Signature Style.",
    description:
      "From timeless classics to modern designs, discover eyewear that complements your personality, elevates your look and keeps you seeing in style.",
    linkText: "Discover Your Style",
    backImage: mensTypeImage,
  },
  {
    id: "women",
    title: "Women's Eyewear",
    image: womensImage,
    eyebrow: "02 / WOMEN'S COLLECTION",
    headline: "Beauty in Every Detail.",
    description:
      "From elegant everyday frames to bold, modern designs, discover eyewear that celebrates your individuality and adds confidence to every look.",
    linkText: "Find Your Perfect Pair",
    backImage: womensTypeImage,
  },
  {
    id: "kids",
    title: "Kids' Eyewear",
    image: kidsImage,
    eyebrow: "03 / KIDS' COLLECTION",
    headline: "Little Frames, Big Smiles!",
    description:
      "From playful colours to comfortable, lightweight designs, discover lovely frames that keep little ones looking great and feeling confident through every adventure.",
    linkText: "Explore Kids' Frames",
    backImage: kidsTypeImage,
  },
  {
    id: "sunglasses",
    title: "Sunglasses",
    image: sunglassesImage,
    eyebrow: "04 / SUNGLASSES",
    headline: "Make Every Look Shine.",
    description:
      "Step out in style with sunglasses that complement your look while offering UV protection for your eyes.",
    linkText: "Explore Sunglasses",
    backImage: sunglassesTypeImage,
  },
  {
    id: "contact",
    title: "Contact Lenses",
    image: contactImage,
    eyebrow: "05 / CONTACT LENSES",
    headline: "Freedom to See Differently.",
    description:
      "Discover contact lens options that fit your vision needs and lifestyle, with guidance to help you find the right choice.",
    linkText: "Discover Contact Lenses",
    backImage: contactlensTypeImage,
  },
];

export default function Collections() {
  const [flippedCard, setFlippedCard] = useState(null);

  const flipCard = (id) => {
    setFlippedCard((current) => (current === id ? null : id));
  };

  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#E5F4FF] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E5F4FF] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="mb-4 inline-block rounded-full bg-[#E5F4FF] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2585C5]">
            Find Your Perfect Pair
          </span>

          <h2 className="font-display text-4xl font-semibold leading-tight text-[#12365A] sm:text-5xl lg:text-6xl">
            Explore Our Collections
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Discover eyewear that matches your style, suits your lifestyle and
            makes every moment look better.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#2585C5]" />
        </div>

        {/* Collection cards */}
        <div className="flex flex-wrap justify-center gap-7 lg:gap-8">
          {collections.map((item) => {
            const isFlipped = flippedCard === item.id;

            return (
              <article
                key={item.id}
                className="group w-full max-w-[340px] sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-22px)] [perspective:1200px]"
              >
                <div
                  className={`relative w-full aspect-[4/5] rounded-[24px] transition-transform duration-[1250ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] [transform-style:preserve-3d] ${
                    isFlipped
                      ? "[transform:rotateY(180deg)]"
                      : "[@media(hover:hover)]:group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* FRONT SIDE */}
                  <button
                    type="button"
                    onClick={() => flipCard(item.id)}
                    aria-label={`Flip ${item.title} card`}
                    aria-pressed={isFlipped}
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-[24px] bg-[#E5F4FF] text-left shadow-[0_12px_35px_rgba(18,54,90,0.12)] [backface-visibility:hidden] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2585C5] focus-visible:ring-offset-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-fill transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/85 text-[#12365A] shadow-md backdrop-blur-sm">
                      <ArrowUpRight size={21} />
                    </span>

                    <span className="sr-only">
                      Select to reveal {item.title} details
                    </span>
                  </button>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[24px] bg-[#E5F4FF] p-2 shadow-[0_12px_35px_rgba(18,54,90,0.18)] [transform:rotateY(180deg)] [backface-visibility:hidden] sm:p-3">
                    {/* Back image */}
                    <div className="min-h-0 flex-1 overflow-hidden rounded-xl">
                      <img
                        src={item.backImage}
                        alt={`${item.title} - Explore different styles`}
                        className="h-full w-full object-fill"
                      />
                    </div>

                    {/* Separate CTA button */}
                    <div className="flex shrink-0 items-center gap-2 px-1 pb-1 pt-2">
                      {/* <button
                        type="button"
                        onClick={() => flipCard(item.id)}
                        aria-label={`Flip ${item.title} card back`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2585C5]/20 bg-white text-[#12365A] shadow-sm transition-all duration-300 hover:bg-[#DCEFFF]"
                      >
                        <ArrowLeft size={19} />
                      </button> */}

                      <a
                        href="#storeMap"
                        className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[#12365A] px-3 py-2 text-center text-xs font-semibold text-white shadow-[0_5px_15px_rgba(18,54,90,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2585C5] sm:text-sm"
                      >
                        Visit Our Store
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="text-sm leading-6 text-slate-500">
            Can't find what you're looking for?
          </p>

          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-[#12365A] transition hover:text-[#2585C5]"
          >
            Visit our store and explore more
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
