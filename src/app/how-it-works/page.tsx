import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it Works",
  description: "See how WorkO helps customers and providers get jobs done.",
};

const customerSteps = [
  {
    title: "Tell us what you need",
    description: "Pick a service, add details, and choose your preferred time.",
  },
  {
    title: "Get matched fast",
    description: "We surface verified providers with transparent pricing.",
  },
  {
    title: "Track and pay securely",
    description: "Chat, track arrival, and pay when the job is complete.",
  },
];

const providerSteps = [
  {
    title: "Create your profile",
    description: "Share your skills, documents, and service areas.",
  },
  {
    title: "Accept quality jobs",
    description: "Review requests, send quotes, and manage your schedule.",
  },
  {
    title: "Grow your income",
    description: "Get paid weekly and build repeat customers with reviews.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            How WorkO Works
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Simple steps for customers and providers.
          </h1>
          <p className="text-lg text-slate-600">
            WorkO keeps bookings transparent, fast, and secure for every job.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              For customers
            </h2>
            <div className="space-y-4">
              {customerSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Request a Worker
            </Link>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              For providers
            </h2>
            <div className="space-y-4">
              {providerSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/contact?type=provider"
              className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              Become a Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
