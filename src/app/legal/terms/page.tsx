import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "WorkO terms of service for customers and providers.",
};

const terms = [
  {
    title: "Platform usage",
    description:
      "WorkO connects customers and providers. Users must be 18+ and comply with local laws.",
  },
  {
    title: "Bookings and fees",
    description:
      "Customers pay a booking fee and service price shown in-app before confirming.",
  },
  {
    title: "Provider obligations",
    description:
      "Providers must remain approved, respond promptly, and maintain quality ratings.",
  },
  {
    title: "Cancellations",
    description:
      "Cancellations and refunds follow WorkO policies shown at checkout.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Legal
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600">
            These terms summarize the responsibilities of WorkO customers and
            providers.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {terms.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
