import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download",
  description: "Get the WorkO app for customers and providers.",
};

const downloads = [
  {
    title: "Google Play",
    description: "Android app for customers and providers.",
    href: "#",
    status: "Coming soon",
  },
  {
    title: "App Store",
    description: "iOS app for customers and providers.",
    href: "#",
    status: "Coming soon",
  },
  {
    title: "Web booking",
    description: "Use WorkO from any browser today.",
    href: "/contact",
    status: "Available now",
  },
];

export default function DownloadPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Download
          </p>
          <h1 className="text-4xl font-semibold text-slate-900">
            WorkO for every device.
          </h1>
          <p className="text-lg text-slate-600">
<<<<<<< HEAD
            Stay connected with on-demand workers and jobs wherever you are.
=======
            Book jobs, chat with providers, and manage payments from your phone.
>>>>>>> origin/codex/create-marketing-website-for-worko-zy11lz
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {downloads.map((download) => (
            <Link
              key={download.title}
              href={download.href}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {download.status}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                {download.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {download.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
