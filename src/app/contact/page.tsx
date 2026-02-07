import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a worker or apply to become a WorkO provider.",
};

const contactCards = [
  {
    title: "Customers",
    description:
      "Need a worker now? Share your request and we will match you quickly.",
    email: "support@worko.com",
  },
  {
    title: "Providers",
    description:
      "Ready to earn on WorkO? Tell us about your skills and service areas.",
    email: "providers@worko.com",
  },
  {
    title: "Partnerships",
    description:
      "Interested in enterprise or city partnerships? Let's talk.",
    email: "partners@worko.com",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Contact WorkO
            </p>
            <h1 className="text-4xl font-semibold text-slate-900">
              Let&apos;s get your job started.
            </h1>
            <p className="text-lg text-slate-600">
              Our team is ready to answer questions, onboard providers, and
              support customers 24/7.
            </p>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">
                Fastest response times
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Live chat: average 3 min</li>
                <li>• Email: average 2 hours</li>
                <li>• Phone: average 5 min</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {card.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  {card.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
