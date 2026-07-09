import { Globe, Share2, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Product: [
    { label: "Why Hireytics", href: "/#value" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Demo", href: "/#demo" },
    { label: "Request Demo", href: "/#inquiry" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-container section-block !pt-16 !pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
             <Image src="/logo-icon.png" alt="Hireytics Logo" width={32} height={32} className="" />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Hireytics
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
              The intelligent workforce platform that turns chaotic hiring into
              a seamless, data-rich experience — so you keep top talent and
              your team stays focused on what matters.
            </p>
            <div className="mt-6 flex gap-3">
              {[Globe, Share2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-all duration-300 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-slate-900">{title}</h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-100 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Hireytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
