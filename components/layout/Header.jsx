"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO =
  "https://static.wixstatic.com/media/3e33e8_e863ef51ae0a4110a5bddcbebff85137~mv2.png/v1/crop/x_0,y_18,w_518,h_417/fill/w_176,h_138,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-web.png";

const IMG_STRIP = "/images/home/photo-bandeau.jpg";

const nav = [
  {
    label: "Formations",
    children: [
      { label: "Paille, Terre & Chaux", href: "/formations/paille-terre-chaux" },
      { label: "Poêle de Masse", href: "/formations/poele-de-masse" },
      { label: "Photovoltaïque", href: "/formations/photovoltaique" },
    ],
  },
  {
    label: "A propos",
    href: "/andre-de-bouter",
    children: [
      { label: "Je me présente", href: "/andre-de-bouter" },
      { label: "CV poêle de masse", href: "/a-propos/cv-pdm" },
      { label: "CV paille, terre et chaux", href: "/a-propos/cv-ptc" },
      { label: "Galeries", href: "/a-propos/galeries" },
    ],
  },
  {
    label: "Partage",
    children: [
      { label: "Un poêle de masse, c'est quoi ?", href: "/ressources" },
      { label: "Poêle de masse Oxalibre", href: "/ressources/oxalibre" },
      { label: "Actualités", href: "/realisations" },
      { label: "Vidéos", href: "/ressources/videos" },
      { label: "Des pros sont passés par ici", href: "/ressources/professionnels" },
    ],
  },
  { label: "Livres", href: "/livres" },
  { label: "S'inscrire", href: "/inscription" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [openDrop, setOpenDrop] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50">

      {/* ── Bandeau photo ── */}
      <div className="relative h-[100px] w-full">
        <Image
          src={IMG_STRIP}
          alt="Bandeau La Maison en Paille"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-[#802208]/55" />

        {/* Logo + Nav */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto w-full px-6">

          {/* Espace réservé au logo absolu */}
          <div className="w-[160px] flex-shrink-0" />

          {/* Nav centrée dans l'espace restant */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1">
            {nav.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  role="none"
                  onMouseEnter={() => setOpenDrop(item.label)}
                  onMouseLeave={() => setOpenDrop(null)}
                >
                  <button className="nav-link flex items-center gap-1.5">
                    {item.label}
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 10 6">
                      <path d="M1 1l4 4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  {openDrop === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-[#3d1a0e] border border-white/10 shadow-xl min-w-[240px] z-50">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block px-5 py-3 font-raleway text-[10px] tracking-[0.15em] uppercase text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Burger mobile */}
          <button
            className="lg:hidden ml-auto text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Logo — dépasse vers le bas */}
        <Link
          href="/"
          className="absolute left-60 top-0 z-20"
          style={{ lineHeight: 0 }}
        >
          <Image
            src={LOGO}
            alt="La Maison en Paille"
            width={176}
            height={138}
            className="object-contain drop-shadow-lg"
            style={{ width: "auto", height: "145px" }}
            unoptimized
          />
        </Link>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#3d1a0e] border-t border-white/10 px-6 py-4">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="mb-4">
                <p className="font-raleway text-[10px] tracking-[0.18em] uppercase text-white/40 mb-2">
                  {item.label}
                </p>
                {item.children.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="block py-2 font-raleway text-[10px] tracking-[0.15em] uppercase text-white/70 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="block mb-3 font-raleway text-[10px] tracking-[0.18em] uppercase text-white/80 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}