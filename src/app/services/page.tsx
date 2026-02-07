import type { Metadata } from "next";
<<<<<<< HEAD
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore WorkO's 41 service categories available on demand.",
=======
import { serviceGroups, serviceLegend } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore WorkO's service categories and availability tags.",
>>>>>>> origin/codex/create-marketing-website-for-worko-zy11lz
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
<<<<<<< HEAD
      <ServicesClient />
=======
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Services
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            41 service categories across home, care, tech, and more.
          </h1>
          <p className="text-lg text-slate-600">
            Availability can vary by country and location-based pricing zones.
            When you request a job, WorkO only shows services enabled in your
            country.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          {serviceLegend.map((item) => (
            <div
              key={item.tag}
              className="flex items-center gap-2 rounded-full bg-white px-3 py-1"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                {item.tag}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-8">
          {serviceGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {group.title}
                </h2>
                <p className="text-sm text-slate-600">{group.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {service.name}
                    </p>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                      {service.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
>>>>>>> origin/codex/create-marketing-website-for-worko-zy11lz
    </div>
  );
}
