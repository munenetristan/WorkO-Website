import Link from "next/link";

const navigation = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-semibold text-slate-900">
          WorkO
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
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
            href="/contact"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Request a Worker
          </Link>
          <Link
            href="/contact?type=provider"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Become a Provider
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-white md:hidden">
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
