import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "WorkO privacy practices and data usage overview.",
};

const privacySections = [
  {
    title: "Information we collect",
    description:
      "We collect account details, OTP verification data, location details, and booking history to deliver services.",
  },
  {
    title: "How we use data",
    description:
      "Data helps match you with providers within 5km, enable chat, and support payments.",
  },
  {
    title: "Sharing and security",
    description:
      "We share data only with verified providers for job fulfillment and protect it with encryption.",
  },
  {
    title: "Your choices",
    description:
      "You can request access, updates, or deletion of your data by contacting support.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Legal
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            WorkO respects your privacy and protects data with strong security
            practices.
          </p>
        </div>
        <div className="mt-10 space-y-6">
          {privacySections.map((item) => (
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
