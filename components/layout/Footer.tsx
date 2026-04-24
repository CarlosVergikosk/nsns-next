"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useI18n } from "@/lib/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  return (
    <footer className="bg-ink text-white pt-14 md:pt-20 pb-8 mt-14 md:mt-20 rounded-t-[32px] md:rounded-t-[48px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4 text-[1.4rem] font-medium">
              <Image src="/assets/logo.png" alt="" width={44} height={44} style={{ width: 44, height: 44, objectFit: "contain" }} />
              <span>nsns</span>
            </div>
            <p className="text-white/70 text-[0.95rem] max-w-[320px]">
              {f.tagline}
            </p>
            <div className="flex gap-2.5 mt-5">
              <a className="inline-flex items-center justify-center p-2.5 rounded-pill bg-white/10 hover:bg-white/20 cursor-pointer" aria-label={f.socialInstagram}><Icon name="insta" size={16} /></a>
              <a className="inline-flex items-center justify-center p-2.5 rounded-pill bg-white/10 hover:bg-white/20 cursor-pointer" aria-label={f.socialLinkedin}><Icon name="linkedin" size={16} /></a>
              <a className="inline-flex items-center justify-center p-2.5 rounded-pill bg-white/10 hover:bg-white/20 cursor-pointer" aria-label={f.socialEmail}><Icon name="mail" size={16} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-[0.95rem] font-extrabold text-teal-soft mb-4">{f.servicesHeading}</h5>
            <ul className="flex flex-col gap-2.5 text-[0.95rem] font-medium text-white/80">
              <li><Link href="/coaches" className="hover:text-white">{f.servicesLinks.coachDirectory}</Link></li>
              <li><Link href="/assessments" className="hover:text-white">{f.servicesLinks.assessments}</Link></li>
              <li><Link href="/blog" className="hover:text-white">{f.servicesLinks.events}</Link></li>
              <li><Link href="/contact" className="hover:text-white">{f.servicesLinks.training}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.95rem] font-extrabold text-teal-soft mb-4">{f.aboutHeading}</h5>
            <ul className="flex flex-col gap-2.5 text-[0.95rem] font-medium text-white/80">
              <li><Link href="/about-neurodiversity" className="hover:text-white">{f.aboutLinks.neurodiversity}</Link></li>
              <li><Link href="/blog" className="hover:text-white">{f.aboutLinks.blog}</Link></li>
              <li><Link href="/donate" className="hover:text-white">{f.aboutLinks.donate}</Link></li>
              <li><Link href="/contact" className="hover:text-white">{f.aboutLinks.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.95rem] font-extrabold text-teal-soft mb-4">{f.getInTouchHeading}</h5>
            <ul className="flex flex-col gap-2.5 text-[0.95rem] font-medium text-white/80">
              <li><a href="mailto:contact@nsns.ch" className="hover:text-white">contact@nsns.ch</a></li>
              <li>Place Bel-Air 2</li>
              <li>1260 Nyon</li>
              <li>{f.country}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-4 pt-8 text-[0.85rem] text-white/60 border-t border-white/10">
          <div>{f.rights}</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="cursor-pointer hover:text-white">{f.legal.privacy}</a>
            <a className="cursor-pointer hover:text-white">{f.legal.accessibility}</a>
            <a className="cursor-pointer hover:text-white">{f.legal.faqs}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
