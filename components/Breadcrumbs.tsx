import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "./JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schemaItems = allItems.map((it) => ({
    name: it.label,
    item: it.href,
  }));

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;

          return (
            <span key={item.href} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="h-3 w-3 text-slate-400" />}
              {isLast ? (
                <span className="text-slate-900 font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-slate-900 transition-colors">
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
