import Image from "next/image";
import Link from "next/link";
import { 
  FaLinkedinIn, 
  FaXTwitter, 
  FaFacebookF, 
  FaGlobe 
} from "react-icons/fa6";
import { Mail, Headphones } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Why Hireytics", href: "/#why-hireytics" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Hireytics Recall", href: "/recall" },
    { label: "Pricing & Plans", href: "/pricing" },
    { label: "Free Trial", href: "/free-trial" },
  ],
  Company: [
    { label: "Client Onboarding", href: "/onboarding" },
    { label: "Custom Architecture", href: "/pricing#custom-pricing" },
    { label: "Enterprise Security", href: "/#why-hireytics" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security & SOC2", href: "/#why-hireytics" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hireytics",
    icon: <FaLinkedinIn className="h-4 w-4" />,
    hover: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/hireytics",
    icon: <FaXTwitter className="h-4 w-4" />,
    hover: "hover:bg-black hover:text-white hover:border-black",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/hireytics",
    icon: <FaFacebookF className="h-4 w-4" />,
    hover: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
  },
  {
    name: "Website",
    href: "https://hireytics.com",
    icon: <FaGlobe className="h-4 w-4" />,
    hover: "hover:bg-indigo-600 hover:text-white hover:border-indigo-600",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-container section-block !pt-16 !pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo-icon.png" alt="Hireytics Logo" width={32} height={32} />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Hireytics
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              The intelligent workforce platform that turns chaotic hiring into
              a seamless, data-rich experience — so you keep top talent and
              your team stays focused on what matters.
            </p>
            

            {/* Social & Contact Icons */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50/80 text-slate-600 transition-all duration-300 shadow-2xs ${social.hover}`}
                >
                  {social.icon}
                </a>
              ))}
             
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-slate-900">{title}</h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>&copy; {new Date().getFullYear()} Hireytics Inc. All rights reserved.</p>
          <p>
            Any queries? Contact us at{" "}
            <a href="mailto:contact@hireytics.com" className="font-semibold text-slate-600 hover:underline">
              contact@hireytics.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

