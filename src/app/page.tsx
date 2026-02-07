import Link from "next/link";

const customerHighlights = [
  {
    title: "OTP sign-up and secure access",
    description:
      "Customers start with a quick OTP verification and can book jobs in minutes.",
  },
  {
    title: "Smart matching",
    description:
      "We notify up to 10 vetted providers within 5km so you can compare options fast.",
  },
  {
    title: "Track and chat",
    description:
      "Monitor arrival in real time, chat in-app, and pay a simple booking fee.",
  },
];

const providerHighlights = [
  {
    title: "Approval before you go live",
    description:
      "Submit your documents, complete verification, and get approved to accept jobs.",
  },
  {
    title: "Flexible earnings",
    description:
      "Choose the jobs you want and get transparent payouts based on location pricing.",
  },
  {
    title: "Grow your reputation",
    description:
      "Ratings, reviews, and repeat customers help you build long-term income.",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-slate-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800">
              Global piece-job marketplace
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                WorkO connects customers with verified providers in minutes.
              </h1>
              <p className="text-lg text-slate-600">
                Book trusted workers for home, business, or digital tasks. WorkO
                only shows services enabled in your country and adjusts pricing
                by location zones.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/download"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Download App
              </Link>
              <Link
                href="/provider-requirements"
                className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Become a Provider
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Matching radius", value: "5km" },
                { label: "Providers alerted", value: "10" },
                { label: "Service categories", value: "41" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-xl font-semibold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-sm font-semibold text-slate-900">
                Real-time booking flow
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>OTP sign-up</span>
                  <span className="font-semibold text-slate-900">30 sec</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Provider matching</span>
                  <span className="font-semibold text-slate-900">Instant</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tracking + chat</span>
                  <span className="font-semibold text-slate-900">Live</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
              <p className="text-sm font-semibold">Provider growth toolkit</p>
              <p className="mt-3 text-sm text-slate-200">
                Manage requests, set schedules, and get paid after every job with
                clear booking fees.
              </p>
              <Link
                href="/how-it-works"
                className="mt-6 inline-flex items-center text-sm font-semibold text-white"
              >
                See how it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              Built for customers.
            </h2>
            <p className="text-sm text-slate-600">
              WorkO keeps bookings fast, transparent, and safe with OTP sign-up,
              real-time tracking, and verified provider profiles.
            </p>
            <div className="space-y-4">
              {customerHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              Built for providers.
            </h2>
            <p className="text-sm text-slate-600">
              Providers get vetted, approved, and listed in the app with fair
              location-based pricing and ongoing support.
            </p>
            <div className="space-y-4">
              {providerHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold">
              Ready to book or join WorkO?
            </h2>
            <p className="mt-4 text-sm text-slate-200">
              Choose your path: request a worker today or submit your provider
              application for approval.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900"
            >
              Request a Worker
            </Link>
            <Link
              href="/provider-requirements"
              className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
