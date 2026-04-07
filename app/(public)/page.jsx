import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title:
    "La Maison en Paille — Formations : Paille Terre Chaux / Poêle de masse",
  description:
    "Formations en construction naturelle animées par André de Bouter depuis 25 ans. Paille Terre Chaux, Poêle de masse, Photovoltaïque. Charente (16).",
};

const IMG_PAILLE = "/images/home/fond3.jpg";
const IMG_TERRE = "/images/home/fond2.jpg";
const IMG_PORTE = "/images/home/porte-ouverte-2026.png";
const IMG_GIF = "/images/home/pdm-infra-rouge.gif";
const BUTTON_BG = "#CB664A";

const FORMATIONS = [
  {
    slug: "paille-terre-chaux",
    titre: "Paille,\nTerre\n& Chaux",
    sousTitre: "Construire / Rénover /\nIsoler / Décorer",
    duree: "Stage 6 jours",
    desc: "Apprenez les clés pour réaliser votre projet durable, performant et confortable.",
    img: IMG_PAILLE,
    cardBg: "#c8a040",
    titleSize: "40px",
    titleMaxWidth: "245px",
    titleLineHeight: "0.92",
    subtitleSize: "23px",
    subtitleMaxWidth: "250px",
    subtitleMarginTop: "0.85rem",
    descMaxWidth: "280px",
    cardWidth: "314px",
    cardHeight: "413px",
    panelHeight: "255px",
  },
  {
    slug: "poele-de-masse",
    titre: "Poêle\nde Masse",
    sousTitre: "1 heure de feu =\n24h de confort",
    duree: "Stage 3 jours",
    desc: "Les apports du stage vous permettent de construire ensuite votre poêle personnalisé. Optionnel : four, eau chaude, banc chauffé.",
    img: IMG_TERRE,
    cardBg: "#c06030",
    titleSize: "40px",
    titleMaxWidth: "250px",
    titleLineHeight: "0.94",
    subtitleSize: "23px",
    subtitleMaxWidth: "260px",
    subtitleMarginTop: "0.95rem",
    descMaxWidth: "300px",
    cardWidth: "320px",
    cardHeight: "413px",
    panelHeight: "255px",
  },
  {
    slug: "photovoltaique",
    titre: "Autonomie\nPhotovoltaïque",
    sousTitre: "Par Sébastien Deroo\nÊtre plus autonome en énergie",
    duree: "Stage 2 jours",
    desc: "Pour toute personne désirant être davantage autonome, résiliente et économe dans sa consommation d'énergie.",
    img: null,
    cardBg: "#6a8e9a",
    titleSize: "40px",
    titleMaxWidth: "270px",
    titleLineHeight: "0.98",
    subtitleSize: "23px",
    subtitleMaxWidth: "240px",
    subtitleMarginTop: "0.9rem",
    descMaxWidth: "290px",
    cardWidth: "327px",
    cardHeight: "413px",
    panelHeight: "255px",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">

        {/* Bandeau newsletter */}
        <div className="bg-white/95 py-3 px-6 flex items-center justify-end gap-4 max-w-[540px] mx-auto mt-6 rounded-xl shadow-md">
          <p className="font-raleway text-sm text-[#3d1a0e]">
            Restons en contact avec les <strong>Nouv&apos;d&apos;André</strong>
          </p>
          <Link href="/contact" className="btn-newsletter">
            Je m&apos;abonne
          </Link>
        </div>

        {/* Titre */}
        <div className="text-center py-10">
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 max-w-[120px] h-px bg-white/60" />
            <h1
              className="font-raleway font-black text-white tracking-[0.12em] uppercase"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Formations &nbsp; 2026
            </h1>
            <div className="flex-1 max-w-[120px] h-px bg-white/60" />
          </div>
        </div>

        {/* Cards formations */}
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-4 px-6 pb-10 md:flex md:items-start md:justify-center md:gap-[12px]">
          {FORMATIONS.map((f) => (
            <Link
              key={f.slug}
              href={`/formations/${f.slug}`}
              className="group flex flex-col overflow-visible rounded-sm shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 md:flex-shrink-0"
              style={{ width: "100%", maxWidth: f.cardWidth, minHeight: f.cardHeight }}
            >
              {/* Partie image */}
              <div
                className="relative flex flex-col items-center justify-start overflow-visible px-4 pt-6 text-center md:px-5 md:pt-5"
                style={{ backgroundColor: f.cardBg, height: f.panelHeight }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  {f.img && (
                    <Image
                      src={f.img}
                      alt={f.titre}
                      fill
                      className="object-cover"
                    />
                  )}

                  {/* Overlay dégradé */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>

                {/* Titre + sous-titre */}
                <div className="relative z-10 flex w-full flex-col items-center">
                  <h2
                    className="font-fredericka text-white uppercase"
                    style={{
                      fontSize: f.titleSize,
                      maxWidth: f.titleMaxWidth,
                      lineHeight: f.titleLineHeight,
                      letterSpacing: f.slug === "photovoltaique" ? "-0.01em" : "0.005em",
                      textShadow: "0 3px 8px rgba(0,0,0,0.35)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {f.slug === "photovoltaique" ? (
                      <>
                        <span style={{ fontSize: "35px", display: "block", lineHeight: "0.98" }}>
                          Autonomie
                        </span>
                        <span style={{ fontSize: "27px", display: "block", lineHeight: "0.98" }}>
                          Photovoltaique
                        </span>
                      </>
                    ) : (
                      f.titre
                    )}
                  </h2>
                  <p
                    className="font-raleway font-extrabold uppercase text-white"
                    style={{
                      marginTop: f.subtitleMarginTop,
                      fontSize: f.subtitleSize,
                      letterSpacing: "0.02em",
                      lineHeight: f.slug === "photovoltaique" ? "1.08" : "1.14",
                      maxWidth: f.subtitleMaxWidth,
                      whiteSpace: "pre-line",
                      textShadow: "0 1px 4px rgba(0,0,0,0.45)",
                    }}
                  >
                    {f.slug === "photovoltaique" ? (
                      <>
                        <span
                          style={{
                            display: "block",
                            fontSize: "18px",
                            color: "#D4CDBF",
                            lineHeight: "1.05",
                          }}
                        >
                          Par Sébastien Deroo
                        </span>
                        <span style={{ display: "block", marginTop: "0.06rem" }}>
                          Être plus autonome en énergie
                        </span>
                      </>
                    ) : (
                      f.sousTitre
                    )}
                  </p>
                </div>

                {/* Bouton qui chevauche la séparation */}
                <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 justify-center">
                  <span
                    className="inline-flex h-[35px] w-[208px] items-center justify-center rounded-[14px] border-b-[4px] border-[#8e3822] font-raleway text-[0.8rem] font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_5px_10px_rgba(0,0,0,0.18)]"
                    style={{ backgroundColor: BUTTON_BG }}
                  >
                    {f.duree}
                  </span>
                </div>
              </div>

              {/* Partie basse blanche */}
              <div className="flex flex-1 flex-col items-center bg-white/90 px-5 pb-5 pt-10">
                <p
                  className="text-center font-raleway text-[0.9rem] leading-[1.3] text-[#cb653e] md:text-[0.95rem]"
                  style={{ maxWidth: f.descMaxWidth }}
                >
                  {f.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Texte intro bas */}
        <div className="max-w-3xl mx-auto px-6 pb-14 text-center">
          <p
            className="text-white text-sm leading-relaxed"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
            Vous souhaitez vous former pour concrétiser votre projet ? Vous
            voulez vous assurer de le réaliser dans de bonnes conditions ? Je
            vous transmets les clés de compréhension et le savoir-faire pour
            avancer avec confiance et plaisir.
          </p>
        </div>

        {/* Section porte ouverte */}
        <div className="bg-[#c4613a] py-12 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <Image
                src={IMG_PORTE}
                alt="Journée nationale du Poêle de Masse — Porte ouverte 14 mars 2026"
                width={380}
                height={228}
                className="object-contain w-full max-w-[380px]"
              />
            </div>

            <div className="text-center">
              <h2
                className="font-raleway font-black text-white uppercase underline underline-offset-4 decoration-2"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  letterSpacing: "0.06em",
                }}
              >
                Porte
                <br />
                Ouverte
              </h2>
              <p className="text-white text-sm leading-relaxed mt-4">
                Venez découvrir le confort du poêle de masse auto-construit.
              </p>
              <p className="text-white text-sm mt-3">
                Samedi 14 mars
                <br />
                <span className="underline underline-offset-2">
                  Sur réservation
                </span>
                <br />
                (places limitées)
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src={IMG_GIF}
                alt="Vidéo thermique poêle de masse"
                width={280}
                height={210}
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}