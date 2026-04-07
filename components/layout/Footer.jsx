import Link from 'next/link'
import Image from 'next/image'

// Images extraites des screenshots
const LOGO_FOOTER = '/images/logo/icon-32.png'
const LOGO_ANNIV = '/images/logo/anniversaire.png'
const LOGO_AFPMA = '/images/logo/afpma-rfcp.jpg'

// Galerie bande photos (screenshots image 2)
const GALLERY = [
  'https://static.wixstatic.com/media/457787_0ad1e98972b741d88fc67ca7f6fcbe84~mv2_d_3264_2176_s_2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_0ad1e98972b741d88fc67ca7f6fcbe84~mv2_d_3264_2176_s_2.jpg',
  'https://static.wixstatic.com/media/457787_ae9592c32d2c455ca5ec4bcb8c3cfde7~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_ae9592c32d2c455ca5ec4bcb8c3cfde7~mv2_d_4000_3000_s_4_2.jpg',
  'https://static.wixstatic.com/media/457787_636791b4baad4907b60f835956955fc3~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_636791b4baad4907b60f835956955fc3~mv2.jpg',
  'https://static.wixstatic.com/media/457787_970ee1d01bf4444fb77b8ac3eb30d9b6~mv2_d_2300_1533_s_2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_970ee1d01bf4444fb77b8ac3eb30d9b6~mv2_d_2300_1533_s_2.jpg',
  'https://static.wixstatic.com/media/457787_052730f69e594a68afaecd1ffac6d383~mv2_d_4320_3240_s_4_2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_052730f69e594a68afaecd1ffac6d383~mv2_d_4320_3240_s_4_2.jpg',
  'https://static.wixstatic.com/media/457787_50380cdfd5134a91b8cd9e64324f581a~mv2_d_3264_2176_s_2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_50380cdfd5134a91b8cd9e64324f581a~mv2_d_3264_2176_s_2.jpg',
  'https://static.wixstatic.com/media/457787_13bc73f912324c7ebc9a8890e29d377f~mv2_d_3264_2176_s_2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_13bc73f912324c7ebc9a8890e29d377f~mv2_d_3264_2176_s_2.jpg',
  'https://static.wixstatic.com/media/457787_bde4a1de4e964eb7904e48385d42e1a6~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/457787_bde4a1de4e964eb7904e48385d42e1a6~mv2_d_3264_2448_s_4_2.jpg',
]

export default function Footer() {
  return (
    <footer>
      {/* ── Bande photos horizontale ── */}
      <div className="flex overflow-hidden" style={{ height: '80px' }}>
        {GALLERY.map((src) => (
          <div key={src} className="relative flex-1 min-w-[120px]">
            <Image src={src} alt="" fill className="object-cover" unoptimized />
          </div>
        ))}
      </div>

      {/* ── Footer principal terracotta ── */}
      <div className="bg-[#b35339] px-4 py-3 md:px-12 md:py-3">
        <div className="grid w-full grid-cols-1 items-center gap-5 md:grid-cols-[1.05fr_1fr_1.35fr] md:gap-12">

          {/* Colonne 1 : identité */}
          <div className="flex flex-col items-start gap-0 text-left">
            <div className="flex items-center gap-2">
              <Image src={LOGO_FOOTER} alt="Logo" width={35} height={35} />
              <span className="font-raleway text-[24px] font-bold leading-none text-white md:text-[30px]">
                La Maison en Paille
              </span>
            </div>
            <p className="font-raleway text-[12px] font-semibold leading-tight text-[#f4e9dc] md:text-[18px]">
              © Tous droits réservés 2026
            </p>
            <Link href="/mentions-legales"
              className="font-raleway text-[16px] font-semibold text-[#f4e9dc] underline underline-offset-2 hover:text-white md:text-[18px]">
              Mentions légales
            </Link>
          </div>

          {/* Colonne 2 : logo anniversaire */}
          <div className="flex flex-col items-center justify-center md:items-start md:pl-6">
            <Image src={LOGO_ANNIV} alt="André de Bouter fête ses formations — 25 ans Paille Terre Chaux / 10 ans Poêle de Masse"
              width={420} height={130} className="h-auto w-[360px] object-contain md:w-[450px]" />
          </div>

          {/* Colonne 3 : organisme + AFPMA */}
          <div className="flex w-full items-center justify-between gap-6 md:gap-10 md:pl-6">
            <div className="max-w-[430px] space-y-2 text-center md:space-y-3">
              <p className="font-raleway text-[14px] font-bold leading-tight text-[#f4e9dc] md:text-[16px]">
                Organisme de formation.
              </p>
              <p className="font-raleway text-[10px] font-semibold leading-[1.2] text-[#f4e9dc] md:text-[14px]">
                Déclaration d'activité enregistrée sous le n° 75160129316
                auprès de la préfète de région Nouvelle-Aquitaine.
              </p>
              <p className="font-raleway text-center text-[11px] leading-tight text-[#e4d7cb] md:text-[14px]">
                Membre de l'AFPMA et du RFCP
              </p>
            </div>
            <Image src={LOGO_AFPMA} alt="AFPMA & RFCP" width={205} height={126}
              className="ml-auto h-auto w-[120px] object-contain md:w-[350px]" />
          </div>

        </div>
      </div>
    </footer>
  )
}
