"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--green)] border-b border-white/10">

  <div className="w-full pl-10 md:pl-16 lg:pl-24 pr-6 py-5 flex items-center justify-between">

    {/* LOGO + TEXT */}
    <div className="flex items-center gap-3">

      <div className="h-14 flex items-center">
    <Image
      src="/logo.jpg"
      alt="logo"
      width={100}
      height={100}
      className="h-full w-auto object-contain"
    />
  </div>

      <div className="leading-tight">
        <p className="text-[var(--gold)] font-bold text-lg">
          Lockhart Solutions
        </p>
        <p className="text-xs text-white/60">
          NW Arkansas & River Valley
        </p>
      </div>

    </div>

    {/* NAV */}
    <nav className="hidden md:flex gap-8 text-sm text-white/80">
      <button
        onClick={() => {
          const el = document.getElementById("services");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Services
      </button>
        <button
        onClick={() => {
          const el = document.getElementById("work");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Work
      </button>
        <button
        onClick={() => {
          const el = document.getElementById("reviews");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Reviews
      </button>
        <button
        onClick={() => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact
      </button>
    </nav>

    {/* PHONE */}
    <a
      href="tel:4792563772"
      className="bg-[var(--gold)] text-black px-5 py-2 font-bold"
    >
      479-256-3772
    </a>

  </div>
</header>
  );
}