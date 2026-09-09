"use client";

import { useEffect, useState } from "react";
import { tocSections } from "./recall-data";

export default function RecallSidebar() {
  const [activeId, setActiveId] = useState(tocSections[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-28">
        <p className="font-utility text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
          On this page
        </p>
        <ul className="mt-5 space-y-1 border-l border-slate-200">
          {tocSections.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block border-l-2 py-2 pl-4 text-sm transition-colors duration-300 ${
                    isActive
                      ? "border-black font-medium text-black"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
