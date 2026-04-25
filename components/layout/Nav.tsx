"use client"

import { Icon } from "@/components/ui/Icon"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useI18n } from "@/lib/i18n/I18nProvider"
import { locales, localeLabels, type Locale } from "@/lib/i18n/config"

interface NavLeaf {
  id: string
  label: string
  href: string
}
interface NavGroup {
  id: string
  label: string
  children: NavLeaf[]
}
type NavItem = NavLeaf | NavGroup

function isGroup(item: NavItem): item is NavGroup {
  return "children" in item
}

export function Nav() {
  const { t, locale, setLocale } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const NAV: NavItem[] = [
    { id: "home", label: t.nav.home, href: "/" },
    {
      id: "coaches-group",
      label: t.nav.coachesGroup,
      children: [
        { id: "coaches", label: t.nav.coachDirectory, href: "/coaches" },
        { id: "assessments", label: t.nav.assessments, href: "/assessments" },
      ],
    },
    { id: "about-nd", label: t.nav.aboutNd, href: "/about-neurodiversity" },
    { id: "webinars", label: t.nav.webinars, href: "/webinars" },
    { id: "blog", label: t.nav.blog, href: "/blog" },
    { id: "contact", label: t.nav.contact, href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      role="navigation"
      className="sticky top-0 z-[100] backdrop-blur-xl saturate-150 border-b-1 border-purple-deep/20"
      style={{ backgroundColor: "var(--lemon)" }}
    >
      <div className="mx-auto flex h-[64px] md:h-[72px] max-w-[1400px] items-center gap-2 px-4 sm:px-6 md:px-8">
        <Link
          href="/"
          className="mr-auto flex items-center gap-2.5 text-[1.3rem] text-purple-deep"
        >
          <Image
            src="/assets/logo.png"
            alt=""
            width={64}
            height={64}
            style={{ width: 64, height: 64, objectFit: "contain" }}
          />
          <span className="text-3xl flex h-11 font-semibold">nsns</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            if (isGroup(item)) {
              const active = item.children.some((c) => isActive(c.href))
              return (
                <div key={item.id} className="relative group">
                  <button
                    className={`nav-link ${
                      active ? "active" : ""
                    } inline-flex items-center gap-1.5 py-2 px-3.5 rounded-pill text-[0.95rem] font-bold transition ${
                      active
                        ? "bg-purple-deep text-white"
                        : "text-ink hover:text-purple-ink hover:bg-purple-softer"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="opacity-70 transition-transform group-hover:rotate-180"
                    />
                  </button>
                  <div className="absolute left-0 top-full pt-2 min-w-[220px] opacity-0 pointer-events-none -translate-y-1 transition-all group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0">
                    <div
                      className="bg-bg-card border border-brand-border rounded-[16px] p-2"
                      style={{ boxShadow: "var(--shadow-lg)" }}
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.id}
                          href={c.href}
                          className="block w-full text-left px-3.5 py-2.5 rounded-[10px] text-[0.95rem] font-medium text-ink-soft hover:bg-bg-tint hover:text-teal"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            const active = isActive(item.href)
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`inline-flex items-center py-2 px-3.5 rounded-pill text-[0.95rem] font-bold transition ${
                  active
                    ? "bg-purple-deep text-white"
                    : "text-ink hover:text-purple-ink hover:bg-purple-softer"
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <div className="ml-2 relative inline-flex items-center">
            <span className="pointer-events-none absolute left-2.5 text-ink-muted">
              <Icon name="globe" size={14} />
            </span>
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              aria-label={t.nav.changeLanguage}
              className="appearance-none pl-7 pr-6 py-1.5 rounded-pill bg-bg-card border border-brand-border-strong text-[0.82rem] font-mono font-bold text-ink-soft hover:bg-purple-softer transition cursor-pointer"
            >
              {locales.map((l) => (
                <option key={l} value={l}>{localeLabels[l]}</option>
              ))}
            </select>
            <ChevronDown size={12} className="pointer-events-none absolute right-2 text-ink-muted" />
          </div>

          <Link
            href="/donate"
            className="ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill bg-purple-deep text-white font-bold text-[0.92rem] hover:bg-purple hover:-translate-y-px transition"
          >
            <Icon name="heart" size={16} /> {t.nav.donate}
          </Link>
        </div>

        {/* Mobile: donate + menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-pill bg-purple-deep text-white font-bold text-[0.82rem]"
          >
            <Icon name="heart" size={14} /> {t.nav.donate}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-bg-card border-2 border-ink text-ink"
          >
            <span className="relative block w-5 h-4">
              <span
                className="absolute left-0 top-0 h-[2px] w-full bg-current transition-transform"
                style={{
                  transform: mobileOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="absolute left-0 top-[7px] h-[2px] w-full bg-current transition-opacity"
                style={{ opacity: mobileOpen ? 0 : 1 }}
              />
              <span
                className="absolute left-0 top-[14px] h-[2px] w-full bg-current transition-transform"
                style={{
                  transform: mobileOpen
                    ? "translateY(-7px) rotate(-45deg)"
                    : "none",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-purple-deep/30 max-h-[calc(100vh-64px)] overflow-y-auto"
          style={{ backgroundColor: "var(--lemon)" }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => {
              if (isGroup(item)) {
                return (
                  <div key={item.id} className="flex flex-col gap-1">
                    <div className="px-3.5 pt-3 pb-1 text-[0.82rem] font-extrabold text-purple">
                      {item.label}
                    </div>
                    {item.children.map((c) => {
                      const active = isActive(c.href)
                      return (
                        <Link
                          key={c.id}
                          href={c.href}
                          onClick={closeMobile}
                          className={`block py-3 px-3.5 rounded-pill text-[1rem] font-bold transition ${
                            active
                              ? "bg-purple-deep text-white"
                              : "text-ink hover:bg-purple-softer"
                          }`}
                        >
                          {c.label}
                        </Link>
                      )
                    })}
                  </div>
                )
              }
              const active = isActive(item.href)
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMobile}
                  className={`block py-3 px-3.5 rounded-pill text-[1rem] font-bold transition ${
                    active
                      ? "bg-purple-deep text-white"
                      : "text-ink hover:bg-purple-softer"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="mt-2 self-start relative inline-flex items-center">
              <span className="pointer-events-none absolute left-3 text-ink-muted">
                <Icon name="globe" size={14} />
              </span>
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
                aria-label={t.nav.changeLanguage}
                className="appearance-none pl-8 pr-7 py-2 rounded-pill bg-bg-card border border-brand-border-strong text-[0.88rem] font-mono font-bold text-ink-soft cursor-pointer"
              >
                {locales.map((l) => (
                  <option key={l} value={l}>{localeLabels[l]}</option>
                ))}
              </select>
              <ChevronDown size={12} className="pointer-events-none absolute right-2.5 text-ink-muted" />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
