import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

import fashionImage from "../assets/images/hero-fashion-couple.png";
import eyeCareImage from "../assets/images/hero-professional-eye-care.png";
import familyImage from "../assets/images/hero-family-eyewear.png";

const slides = [
  {
    id: 1,
    label: "EYEWEAR MEETS FASHION",
    title: "See the World in Your Own Style.",
    description:
      "Your style is unique, and your glasses should be too! Find the frames you love and make every look a little more special.",
    image: fashionImage,
    imageAlt: "Stylish man and woman wearing fashionable spectacles",
    primaryButton: "Explore Collections",
    primaryLink: "#collections",
    secondaryButton: "Visit Our Store",
    secondaryLink: "#contact",
  },
  {
    id: 2,
    label: "PROFESSIONAL EYE CARE",
    title: "Your Eyes Deserve the Best Care.",
    description:
      "Because your eyes matter! Get the care and attention you deserve from eye testing to finding the right lenses.",
    image: eyeCareImage,
    imageAlt: "Optometrist examining a patient during an eye test",
    primaryButton: "Explore Our Services",
    primaryLink: "#services",
    secondaryButton: "Visit Our Store",
    secondaryLink: "#contact",
  },
  {
    id: 3,
    label: "EYEWEAR FOR EVERYONE",
    title: "There's a Perfect Pair for Everyone!",
    description:
      "From little ones to grown-ups, find the perfect frames for every smile in your family!",
    image: familyImage,
    imageAlt: "Loving family of four wearing spectacles",
    primaryButton: "Explore Collections",
    primaryLink: "#collections",
    secondaryButton: "Visit Our Store",
    secondaryLink: "#contact",
  },
];

const AUTOPLAY_DELAY = 3000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveSlide((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = useCallback(() => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setActiveSlide(index);
  }, []);

  // Automatic carousel
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(nextSlide, AUTOPLAY_DELAY);

    return () => clearInterval(timerRef.current);
  }, [nextSlide, isPaused, activeSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") previousSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, previousSlide]);

  const slide = slides[activeSlide];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#E5F4FF] px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-14"
      aria-roledescription="carousel"
      aria-label="Featured eyewear and optical services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#BBDFF7]/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Carousel content */}
        <div className="relative min-h-[620px] sm:min-h-[580px] lg:min-h-[570px]">
          {slides.map((item, index) => {
            const isActive = activeSlide === index;

            return (
              <div
                key={item.id}
                aria-hidden={!isActive}
                className={`absolute inset-0 grid grid-cols-1 items-center gap-8 transition-all duration-700 ease-in-out md:grid-cols-2 md:gap-10 lg:gap-14 ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "pointer-events-none translate-x-8 opacity-0"
                }`}
              >
                {/* Left content */}
                <div
                  className={`order-1 flex flex-col justify-center py-4 transition-all duration-700 ${
                    isActive ? "translate-y-0" : "translate-y-4"
                  }`}
                >
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-[2px] w-8 bg-[#2585C5]" />
                    <span className="text-xs font-bold tracking-[0.2em] text-[#2585C5] sm:text-sm">
                      {item.label}
                    </span>
                  </div>

                  <h1 className="font-display text-4xl font-bold leading-[1.15] tracking-tight text-[#12365A] sm:text-5xl lg:text-6xl xl:text-[68px]">
                    {item.title}
                  </h1>

                  <p className="mt-6 max-w-xl text-base leading-8 text-[#45647E] sm:text-lg">
                    {item.description}
                  </p>

                  {/* CTA buttons */}
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href={item.primaryLink}
                      tabIndex={isActive ? 0 : -1}
                      className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#12365A] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#12365A]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1C4D78] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2585C5]"
                    >
                      {item.primaryButton}
                      <ChevronRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>

                    <a
                      href={item.secondaryLink}
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex items-center justify-center rounded-xl border-2 border-[#12365A]/20 bg-white px-6 py-4 text-sm font-semibold text-[#12365A] transition-all duration-300 hover:-translate-y-1 hover:border-[#12365A] hover:bg-[#F5FAFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2585C5]"
                    >
                      {item.secondaryButton}
                    </a>
                  </div>

                  {/* Trust indicators */}
                  <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-[#45647E] sm:text-sm">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2585C5]" />
                      Premium Eyewear
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#2585C5]" />
                      Expert Eye Care
                    </span>
                  </div>
                </div>

                {/* Right image */}
                <div className="relative order-2 h-[270px] overflow-hidden rounded-[28px] bg-white shadow-2xl shadow-[#12365A]/10 sm:h-[350px] md:h-[420px] lg:h-[480px]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  {/* Image decorative border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#12365A]/10" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel navigation */}
        <div className="relative z-10 mt-8 flex items-center justify-between border-t border-[#12365A]/10 pt-6">
          {/* Slide count */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#12365A]">
            <span className="text-lg">0{activeSlide + 1}</span>
            <span className="text-[#12365A]/40">/</span>
            <span className="text-[#12365A]/40">03</span>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${item.label}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2585C5] ${
                  activeSlide === index
                    ? "w-9 bg-[#12365A]"
                    : "w-2.5 bg-[#12365A]/25 hover:bg-[#12365A]/60"
                }`}
              />
            ))}
          </div>

          {/* Previous and Next */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#12365A]/20 bg-white text-[#12365A] transition-all hover:bg-[#12365A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2585C5]"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#12365A] text-white shadow-md transition-all hover:bg-[#2585C5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2585C5]"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
