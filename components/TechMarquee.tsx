"use client";

import React from "react";

interface TechLogo {
  name: string;
  brandColor: string;
  hoverColorClass: string;
  svg: React.ReactNode;
}

const logos: TechLogo[] = [
  {
    name: "OpenAI",
    brandColor: "#10A37F",
    hoverColorClass: "group-hover:text-[#10A37F]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-7.697-3.9015a4.4735 4.4735 0 0 1-.5359-3.0036l.142.0831 4.7783 2.7583a.7948.7948 0 0 0 .7855 0l5.8336-3.3685v2.3364a.08.08 0 0 1-.038.069l-4.8344 2.7915a4.508 4.508 0 0 1-6.1311-1.6662zM3.486 9.5312a4.4746 4.4746 0 0 1 2.34-1.9628v5.6792a.7948.7948 0 0 0 .3927.6813l5.8336 3.3685-2.02 1.1683a.071.071 0 0 1-.076 0L5.122 15.674A4.504 4.504 0 0 1 3.486 9.5312zm15.197 2.1281L12.85 8.2908l2.02-1.1683a.071.071 0 0 1 .076 0l4.8343 2.7915a4.504 4.504 0 0 1-.7475 8.118v-5.6792a.7948.7948 0 0 0-.3927-.6813l-.001-.0122zm2.016-3.3685l-.142-.0831-4.7783-2.7583a.7948.7948 0 0 0-.7855 0L9.16 8.8179V6.4815a.08.08 0 0 1 .038-.069l4.8344-2.7915a4.508 4.508 0 0 1 6.669 4.6687v.0005zM12 13.8437l-2.8343-1.6364 2.8343-1.6364 2.8343 1.6364L12 13.8437z" />
      </svg>
    ),
  },
  {
    name: "Anthropic Claude",
    brandColor: "#D97706",
    hoverColorClass: "group-hover:text-[#CC785C]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M17.67 3.5H6.33L2 20.5h4.67l1.17-4.67h8.32l1.17 4.67H22L17.67 3.5zm-6.5 9.33L12 7.33l.83 5.5h-1.66z" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    brandColor: "#4285F4",
    hoverColorClass: "group-hover:text-[#4285F4]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    brandColor: "#000000",
    hoverColorClass: "group-hover:text-black",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M6 3h3v18H6V3zm9 0h3v18h-3V3z" />
      </svg>
    ),
  },
  {
    name: "Deepgram",
    brandColor: "#13EF93",
    hoverColorClass: "group-hover:text-[#13EF93]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-9h2zm-1-11a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 12 5.5z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    brandColor: "#FF9900",
    hoverColorClass: "group-hover:text-[#FF9900]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M18.8 17.5c-2.8 1.8-6.3 2.5-9.8 1.8-3.5-.7-6.5-2.7-8.5-5.6-.2-.3 0-.7.3-.8.3-.1.7 0 .8.3 1.8 2.6 4.6 4.4 7.8 5.1 3.2.6 6.4 0 9-1.6.3-.2.7-.1.9.2.2.3.1.7-.2.9zm1.7-1.4c-.4-.4-1.2-.2-1.9.1-.7.3-1.6.7-2.1.5-.2-.1-.4-.3-.3-.5.1-.2.3-.3.5-.2.4.1 1.1-.2 1.8-.5.7-.3 1.3-.4 1.7-.1.4.3.4.8 0 1.2zM8.3 12.8c-.8 0-1.5-.6-1.5-1.4 0-.8.7-1.4 1.5-1.4.8 0 1.5.6 1.5 1.4 0 .8-.7 1.4-1.5 1.4zm7.4 0c-.8 0-1.5-.6-1.5-1.4 0-.8.7-1.4 1.5-1.4.8 0 1.5.6 1.5 1.4 0 .8-.7 1.4-1.5 1.4z" />
      </svg>
    ),
  },
  {
    name: "Microsoft Azure",
    brandColor: "#0078D4",
    hoverColorClass: "group-hover:text-[#0078D4]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M13.05 4.24l-4.7 7.78 3.93 6.64H4.37L10.3 3h3.58l-.83 1.24zm.8 1.33l4.5 7.43H11.8l2.05-3.41 2.27 3.41h2.27l-5.67-9.35.33-.48 2.8 2.4z" />
      </svg>
    ),
  },
  {
    name: "Pinecone",
    brandColor: "#0284C7",
    hoverColorClass: "group-hover:text-[#0284C7]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5L18.5 8 12 11.5 5.5 8 12 4.5zM5 9.5l6 3.3v6.7l-6-3.3V9.5zm14 0v6.7l-6 3.3v-6.7l6-3.3z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    brandColor: "#3ECF8E",
    hoverColorClass: "group-hover:text-[#3ECF8E]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M21.362 9.354H12V.3a.3.3 0 0 0-.534-.19l-9.3 11.4a.3.3 0 0 0 .234.49h9.362v9.054a.3.3 0 0 0 .534.19l9.3-11.4a.3.3 0 0 0-.234-.49z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    brandColor: "#000000",
    hoverColorClass: "group-hover:text-black",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M24 22.525H0L12 1.475l12 21.05z" />
      </svg>
    ),
  },
  {
    name: "Hugging Face",
    brandColor: "#FFD21E",
    hoverColorClass: "group-hover:text-[#FF9D00]",
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 7c.83 0 1.5.67 1.5 1.5S8.83 12 8 12s-1.5-.67-1.5-1.5S7.17 9 8 9zm8 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-4 8.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
      </svg>
    ),
  },
];

export default function TechMarquee() {
  const marqueeList = [...logos, ...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden border-y border-slate-200/70 bg-white py-9">
      <div className="mx-auto mb-6 max-w-6xl px-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Powered by industry-leading infrastructure & models
        </p>
      </div>

      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent" />

      {/* Pure Logo Strip with B&W to Brand Color on Hover */}
      <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16 hover:[animation-play-state:paused]">
        {marqueeList.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="group flex cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-125"
            title={logo.name}
          >
            <div className={`text-slate-400 transition-colors duration-300 ${logo.hoverColorClass}`}>
              {logo.svg}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
