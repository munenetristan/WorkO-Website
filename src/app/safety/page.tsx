import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety & Trust",
  description: "Learn how WorkO keeps customers and providers safe.",
};

const safetyItems = [
  {
    title: "Verified providers",
    description:
      "Every provider submits documents and completes approval before going live.",
  },
  {
    title: "Ratings and reviews",
    description:
      "Customers rate every job to keep quality high and accountability clear.",
  },
  {
    title: "Secure booking fee",
    description:
      "Payments and booking fees are handled in-app for transparency.",
  },
  {
    title: "Tracking + chat",
    description:
      "Monitor arrival in real time and communicate in-app during the job.",
  },
];

export default function SafetyPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Safety & Trust
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Safety built into every booking.
          </h1>
          <p className="text-lg text-slate-600">
            WorkO combines verification, smart matching, and real-time tools to
            keep customers and providers protected.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {safetyItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Trust rules we follow
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>• Only providers approved by WorkO appear in search results.</li>
            <li>• Customers can see up to 10 nearby providers within 5km.</li>
            <li>• Booking fees and location pricing are shown upfront.</li>
            <li>• Country availability is enforced to keep services compliant.</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
          >
            Contact support
          </Link>
        </div>
      </section>
    </div>
  );
}
