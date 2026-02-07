import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Provider Requirements",
  description: "See what it takes to become a verified WorkO provider.",
};

const requirements = [
  "Government-issued ID",
  "Proof of address",
  "Professional certification (if applicable)",
  "Recent profile photo",
  "Bank or mobile money details for payouts",
];

const verificationSteps = [
  {
    title: "Submit documents",
    description: "Upload documents and choose your service categories.",
  },
  {
    title: "Background verification",
    description: "WorkO verifies identity, reviews, and eligibility.",
  },
  {
    title: "Approval & onboarding",
    description: "Complete orientation, set your availability, go live.",
  },
];

export default function ProviderRequirementsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Provider Requirements
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Get verified before accepting jobs.
          </h1>
          <p className="text-lg text-slate-600">
            WorkO requires documentation and approval so customers can trust the
            providers they hire.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              Required documents
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {requirements.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              Verification process
            </h2>
            <div className="mt-4 space-y-4">
              {verificationSteps.map((step, index) => (
                <div key={step.title}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {step.title}
                  </p>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-semibold">Provider rules</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>• Stay online only when you can accept jobs.</li>
            <li>• Respond quickly to requests within your service zone.</li>
            <li>• Maintain strong ratings and follow safety guidelines.</li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
          >
            Start your application
          </Link>
        </div>
      </section>
    </div>
  );
}
