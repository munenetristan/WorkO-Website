import Link from "next/link";

const highlights = [
  {
    title: "Reliable local talent",
    description:
      "Every provider is vetted, rated, and verified to deliver quality work.",
  },
  {
    title: "Book in minutes",
    description:
      "Choose a service, pick a time, and track progress from your phone.",
  },
  {
    title: "Opportunities for providers",
    description:
      "Grow your business with steady demand, transparent payouts, and support.",
  },
];

const stats = [
  { label: "Average booking time", value: "< 5 min" },
  { label: "Service categories", value: "41" },
  { label: "Countries onboarding", value: "10+" },
];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-slate-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-800">
              WorkO • Global piece-job marketplace
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Get trusted workers for any job in minutes.
              </h1>
              <p className="text-lg text-slate-600">
                WorkO connects customers with skilled providers for home,
                business, and digital services. Book instantly, track progress,
                and pay securely.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Request a Worker
              </Link>
              <Link
                href="/contact?type=provider"
                className="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
              >
                Become a Provider
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
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
                Today&apos;s demand snapshot
              </p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Home cleaning</span>
                  <span className="font-semibold text-slate-900">+18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Electrical repairs</span>
                  <span className="font-semibold text-slate-900">+12%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery riders</span>
                  <span className="font-semibold text-slate-900">+9%</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
              <p className="text-sm font-semibold">Provider growth toolkit</p>
              <p className="mt-3 text-sm text-slate-200">
                Receive verified leads, schedule jobs, and get paid weekly with
                transparent fees.
              </p>
              <Link
                href="/download"
                className="mt-6 inline-flex items-center text-sm font-semibold text-white"
              >
                Explore the app →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold">
              Built for customers and providers.
            </h2>
            <p className="mt-4 text-sm text-slate-200">
              Whether you need a trusted worker today or you&apos;re ready to grow
              your service business, WorkO delivers the tools to move fast.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="font-semibold">Customer guarantee</p>
              <p className="mt-2 text-slate-200">
                Secure payments, quality assurance, and 24/7 support.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="font-semibold">Provider success</p>
              <p className="mt-2 text-slate-200">
                Access training, analytics, and flexible job schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
