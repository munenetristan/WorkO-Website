import Link from "next/link";

const navigation = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
<<<<<<< HEAD
  { label: "Coverage", href: "/coverage" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
=======
  { label: "Provider Requirements", href: "/provider-requirements" },
  { label: "Safety", href: "/safety" },
  { label: "Contact", href: "/contact" },
  { label: "Legal", href: "/legal/terms" },
>>>>>>> origin/codex/create-marketing-website-for-worko-zy11lz
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-semibold text-slate-900">
          WorkO
        </Link>
<<<<<<< HEAD
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
=======
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
>>>>>>> origin/codex/create-marketing-website-for-worko-zy11lz
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
<<<<<<< HEAD
            href="/contact"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Request a Worker
          </Link>
          <Link
            href="/contact?type=provider"
=======
            href="/download"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Download App
          </Link>
          <Link
            href="/provider-requirements"
>>>>>>> origin/codex/create-marketing-website-for-worko-zy11lz
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Become a Provider
          </Link>
        </div>
      </div>
<<<<<<< HEAD
      <div className="border-t border-slate-200 bg-white md:hidden">
=======
      <div className="border-t border-slate-200 bg-white lg:hidden">
>>>>>>> origin/codex/create-marketing-website-for-worko-zy11lz
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
