"use client";

import { useState } from "react";
import { FaUser } from "react-icons/fa6";

interface AuthorAvatarProps {
  src?: string;
  name: string;
  className?: string;
  iconClassName?: string;
}

export default function AuthorAvatar({
  src,
  name,
  className = "h-8 w-8",
  iconClassName = "h-4 w-4",
}: AuthorAvatarProps) {
  const [hasError, setHasError] = useState(false);

  // If author is Hireytics Team, prioritize the official logo icon
  const isTeam = name.toLowerCase().includes("hireytics");

  if (isTeam) {
    if (hasError) {
      return (
        <div
          className={`flex items-center justify-center rounded-full bg-sky-100 text-sky-700 border border-sky-200 shrink-0 ${className}`}
          aria-label={name}
        >
          <span className="font-bold text-[10px]">HT</span>
        </div>
      );
    }
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white border border-slate-200 shrink-0 p-1 ${className}`}>
        <img
          src={src || "/logo-icon.png"}
          alt={name}
          className="h-full w-full object-contain"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // If author is Saad Shahrukh (or any person)
  // If no picture is provided or image loading fails (e.g. not uploaded yet), fallback to default user icon from react-icons
  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center rounded-full bg-slate-100 text-slate-500 border border-slate-200 shrink-0 ${className}`}
        aria-label={`${name} avatar (default)`}
      >
        <FaUser className={iconClassName} />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-full border border-slate-200 shrink-0 ${className}`}>
      <img
        src={src}
        alt={name}
        className="h-full w-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
