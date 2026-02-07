import Link from "next/link";

const quickLinks = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Provider Requirements", href: "/provider-requirements" },
  { label: "Safety", href: "/safety" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xl font-semibold text-slate-900">WorkO</p>
          <p className="text-sm text-slate-600">
            WorkO is the global piece-job marketplace connecting customers with
            verified providers for home, business, and digital services.
          </p>
          <p className="text-sm text-slate-500">
            Nairobi · Lagos · Accra · Johannesburg · Remote
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Quick links</p>
          <ul className="space-y-2 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Legal</p>
          <ul className="space-y-2 text-sm text-slate-600">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-3 text-sm text-slate-600">
            <p>hello@worko.com</p>
            <p>+1 (555) 111-2020</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-500">
        © 2024 WorkO. All rights reserved.
      </div>
    </footer>
  );
}
