import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coverage",
  description: "See where WorkO is currently available and expanding.",
};

const regions = [
  {
    country: "Kenya",
    cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
  },
  {
    country: "Nigeria",
    cities: ["Lagos", "Abuja", "Ibadan", "Port Harcourt"],
  },
  {
    country: "Ghana",
    cities: ["Accra", "Kumasi", "Takoradi"],
  },
  {
    country: "South Africa",
    cities: ["Johannesburg", "Cape Town", "Durban"],
  },
];

export default function CoveragePage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Coverage
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            We&apos;re expanding across Africa and beyond.
          </h1>
          <p className="text-lg text-slate-600">
            WorkO is available in growing cities with active provider networks.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {regions.map((region) => (
            <div
              key={region.country}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {region.country}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {region.cities.map((city) => (
                  <li key={city}>• {city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-slate-900 p-6 text-white">
          <h2 className="text-2xl font-semibold">Want WorkO in your city?</h2>
          <p className="mt-3 text-sm text-slate-200">
            Tell us where you operate, and we&apos;ll prioritize your region as we
            expand.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
          >
            Request coverage
          </Link>
        </div>
      </section>
    </div>
  );
}
