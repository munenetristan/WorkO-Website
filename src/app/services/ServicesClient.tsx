"use client";

import { useEffect, useMemo, useState } from "react";
import { defaultServices, fallbackCountries } from "@/lib/services";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function ServicesClient() {
  const [countries, setCountries] = useState<string[]>(fallbackCountries);
  const [selectedCountry, setSelectedCountry] = useState("All countries");
  const [services, setServices] = useState<string[]>(defaultServices);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!apiUrl) {
      return;
    }

    const loadCountries = async () => {
      try {
        const response = await fetch(`${apiUrl}/countries`);
        if (!response.ok) {
          throw new Error("Failed to load countries");
        }
        const data = (await response.json()) as string[];
        setCountries(["All countries", ...data]);
      } catch (error) {
        console.error("Countries fetch failed", error);
      }
    };

    loadCountries();
  }, []);

  useEffect(() => {
    if (!apiUrl || selectedCountry === "All countries") {
      setServices(defaultServices);
      return;
    }

    const loadServices = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/services?country=${encodeURIComponent(selectedCountry)}`,
        );
        if (!response.ok) {
          throw new Error("Failed to load services");
        }
        const data = (await response.json()) as string[];
        setServices(data);
      } catch (error) {
        console.error("Services fetch failed", error);
        setServices(defaultServices);
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, [selectedCountry]);

  const displayServices = useMemo(
    () => services.filter(Boolean),
    [services],
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Services
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            41 services, available on demand.
          </h1>
          <p className="text-lg text-slate-600">
            Browse the most common jobs first, or filter by country if you want
            to see availability.
          </p>
        </div>
        <div className="w-full max-w-xs">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Filter by country
          </label>
          <select
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-slate-300 focus:outline-none"
            value={selectedCountry}
            onChange={(event) => setSelectedCountry(event.target.value)}
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {!apiUrl && (
            <p className="mt-2 text-xs text-slate-500">
              Add NEXT_PUBLIC_API_URL to enable live country filtering.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {displayServices.map((service) => (
          <div
            key={service}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-semibold text-slate-900">{service}</p>
            <p className="mt-2 text-xs text-slate-500">
              Verified providers · Transparent pricing
            </p>
          </div>
        ))}
      </div>
      {isLoading && (
        <p className="mt-6 text-sm text-slate-500">Loading services...</p>
      )}
    </section>
  );
}
