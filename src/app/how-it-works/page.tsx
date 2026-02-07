import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it Works",
  description: "See how WorkO helps customers and providers get jobs done.",
};

const customerSteps = [
  {
    title: "Sign up with OTP",
    description:
      "Verify your phone with OTP to access services enabled in your country.",
  },
  {
    title: "Request a service",
    description:
      "Share the job details, preferred time, and location-based pricing zone.",
  },
  {
    title: "Get matched instantly",
    description:
      "WorkO notifies up to 10 providers within 5km so you can compare options.",
  },
  {
    title: "Track and chat",
    description:
      "Follow the provider in real time, chat, and pay the booking fee securely.",
  },
];

const providerSteps = [
  {
    title: "Apply and verify",
    description:
      "Upload required documents and complete a background verification.",
  },
  {
    title: "Get approved",
    description:
      "Once approved, you appear in customer searches and can accept jobs.",
  },
  {
    title: "Accept work nearby",
    description:
      "Receive nearby requests in your service zones and confirm availability.",
  },
  {
    title: "Complete and earn",
    description:
      "Finish the job, collect ratings, and receive payouts on schedule.",
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
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2">
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
              href="/provider-requirements"
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
