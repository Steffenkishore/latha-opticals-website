import { Star, Quote, MessageSquareQuote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Vel Vasanth",
    review:
      "I had a wonderful experience with this shop for the past few years. The owner and staff are always so helpful. I visited the shop more than five times to repair my spectacles after they were damaged by my one-year-old baby, and they never charged me for the service. I recommend others to visit this shop. They give the best service!",
  },
  {
    id: 2,
    name: "Freniza Beryl J",
    review:
      "We have been taking service from Latha Opticals for many years. Friendly staff, good care and timely service. Always happy with their service.",
  },
  {
    id: 3,
    name: "Ganesan S",
    review:
      "Recently, when I approached this shop to fix a small defect in my glasses frame, they happily fixed the defect immediately and refused to charge me anything for it. Amazing. Excellent service. Clean work. For any service related to glasses, you can approach this shop in Tiruchendur city with confidence. Thank you.",
  },
  {
    id: 4,
    name: "Benittaa",
    review:
      "Timely service and friendly atmosphere. Good quality with affordable price.",
  },
  {
    id: 5,
    name: "Via",
    review:
      "My friend lost his specs in Tiruchendur temple sea. Latha Optical Ravi Sir helped him with a ready frame at low cost immediately. Very helpful and genuine service. Highly recommend.",
  },
  {
    id: 6,
    name: "S MK",
    review:
      "Latha Optical Company in Tiruchendur has been providing quality eyeglasses to the people with a service-minded attitude for the past 23 years. Congratulations, appreciation, and thank you.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={17}
          fill="currentColor"
          strokeWidth={1}
          className="text-[#F5AE35]"
        />
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#E5F4FF]/60 px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-white blur-3xl opacity-80" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#B9E1FF]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2585C5]/15 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2585C5] shadow-sm">
            <MessageSquareQuote size={15} />
            Customer Testimonials
          </span>

          <h2 className="font-display mt-6 text-4xl font-semibold leading-tight text-[#12365A] sm:text-5xl lg:text-6xl">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Your trust means everything to us. Discover why our customers have
            continued to choose and recommend us over the years.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#2585C5]" />
        </div>

        {/* Google rating summary */}
        

        {/* Review cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="group flex h-full flex-col rounded-3xl border border-[#DCEAF5] bg-white p-6 shadow-[0_8px_30px_rgba(18,54,90,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2585C5]/40 hover:shadow-[0_18px_40px_rgba(18,54,90,0.10)] sm:p-7"
            >
              {/* Customer details */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5F4FF] font-display text-xl font-semibold text-[#2585C5]">
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#12365A]">
                      {review.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Google Customer Review
                    </p>
                  </div>
                </div>

                <Quote
                  size={30}
                  className="shrink-0 text-[#D9EDFB] transition-colors duration-300 group-hover:text-[#2585C5]"
                  fill="currentColor"
                />
              </div>

              {/* Stars */}
              <div className="mt-5">
                <StarRating />
              </div>

              {/* Review content */}
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                "{review.review}"
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-2 border-t border-[#E5F0F8] pt-5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E5F4FF] text-[11px] font-bold text-[#2585C5]">
                  G
                </span>

                <span className="text-xs font-medium text-slate-500">
                  Shared on Google
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing message */}
        <div className="mt-14 text-center sm:mt-16">
          <h3 className="font-display text-2xl font-semibold text-[#12365A] sm:text-3xl">
            Your Trust Is Our Greatest Achievement.
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Thank you to every customer who has supported us throughout our
            journey. We look forward to serving you for many more years.
          </p>

          <div className="mx-auto mt-6 flex justify-center">
            <StarRating />
          </div>
        </div>
      </div>
    </section>
  );
}
