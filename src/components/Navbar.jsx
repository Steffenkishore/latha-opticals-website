import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/logo/latha-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Collections", href: "#collections" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <nav
        className={`relative mx-auto w-full overflow-visible  border transition-all duration-500 ${
          scrolled
            ? "border-white/80 bg-white/85 shadow-[0_8px_35px_rgba(37,133,197,0.16),0_0_20px_rgba(37,133,197,0.08)] backdrop-blur-2xl"
            : "border-white/60 bg-white/50 shadow-[0_4px_30px_rgba(37,133,197,0.13),0_0_18px_rgba(37,133,197,0.10)] backdrop-blur-xl"
        }`}
      >
        {/* Soft glow */}
        <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-[#8CCEFF]/20 blur-xl" />

        <div className="flex min-h-[76px] items-center justify-between px-4 sm:px-6 lg:px-7">
          {/* Logo and brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-[#DCEEFF] sm:h-14 sm:w-14">
              <img
                src={logo}
                alt="Latha Opticals logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-xl font-bold leading-tight tracking-tight text-[#12365A] transition-colors group-hover:text-[#2585C5] sm:text-2xl">
                Latha Opticals
              </span>

              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#2585C5] sm:text-[10px]">
                Your Vision, Our Care
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative rounded-full px-3 py-2.5 text-[13px] font-semibold transition-all duration-300 2xl:px-3.5 2xl:text-sm ${
                  index === navLinks.length - 1
                    ? "ml-2 bg-[#12365A] text-white shadow-md shadow-[#12365A]/20 hover:bg-[#2585C5]"
                    : "text-[#12365A] hover:bg-[#E5F4FF] hover:text-[#2585C5]"
                }`}
              >
                {link.name}

                {index !== navLinks.length - 1 && (
                  <span className="absolute bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#2585C5] transition-all duration-300 group-hover:w-1/2" />
                )}
              </a>
            ))}
          </div>

          {/* Tablet and mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DCEAF5] bg-white/70 text-[#12365A] transition-all duration-300 hover:bg-[#12365A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2585C5] xl:hidden"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile / tablet menu */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out xl:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[#DCEAF5] px-4 pb-4 pt-3 sm:px-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                      index === navLinks.length - 1
                        ? "mt-1 bg-[#12365A] text-white hover:bg-[#2585C5]"
                        : "text-[#12365A] hover:bg-[#E5F4FF] hover:text-[#2585C5]"
                    }`}
                  >
                    {link.name}
                    <ChevronRight size={17} />
                  </a>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#E5F4FF]/80 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#2585C5]" />
                <span className="text-xs font-medium text-[#12365A]">
                  Proudly serving our community for 20+ years
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
