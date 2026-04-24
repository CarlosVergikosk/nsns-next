"use client"

import { Icon } from "@/components/ui/Icon"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

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

const NAV: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "coaches-group",
    label: "Coaches",
    children: [
      { id: "coaches", label: "Coach directory", href: "/coaches" },
      { id: "assessments", label: "Assessments", href: "/assessments" },
    ],
  },
  {
    id: "about-nd",
    label: "About neurodiversity",
    href: "/about-neurodiversity",
  },
  { id: "blog", label: "Blog & Events", href: "/blog" },
  { id: "contact", label: "Contact", href: "/contact" },
]

function isGroup(item: NavItem): item is NavGroup {
  return "children" in item
}

export function Nav() {
  const [lang, setLang] = useState("EN")
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
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

  const cycleLang = () => {
    const ls = ["EN", "DE", "FR", "IT"]
    setLang(ls[(ls.indexOf(lang) + 1) % ls.length])
  }

  return (
    <nav
      role="navigation"
      className="sticky top-0 z-[100] backdrop-blur-xl saturate-150 border-b-1 border-purple-deep/20"
      style={{ backgroundColor: "var(--lemon)" }}
    >
      <div className="mx-auto flex h-[64px] md:h-[72px] max-w-[1400px] items-center gap-2 px-4 sm:px-6 md:px-8">
        <Link
          href="/"
          className="mr-auto flex items-center gap-2.5 text-[1.3rem] font-medium text-ink"
        >
          <Image
            src="/assets/logo.png"
            alt="NSNS logo"
            width={60}
            height={60}
            className="w-[48px] md:w-[60px] h-auto"
          />
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
                    } inline-flex items-center gap-1.5 py-2 px-3.5 rounded-pill text-[0.95rem] leading-none font-bold transition ${
                      active
                        ? "bg-purple-deep text-white"
                        : "text-ink hover:text-purple-ink hover:bg-purple-softer"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={14} className="opacity-70 transition-transform group-hover:rotate-180" />
                  </button>
                  {/* Dropdown wrapper is flush against the trigger (top-full),
                      with pt-2 providing the visual gap *inside* the hover
                      area — so moving the cursor from the button into the
                      panel never leaves the `group` hitbox. */}
                  <div
                    className="absolute left-0 top-full pt-2 min-w-[220px] opacity-0 pointer-events-none -translate-y-1 transition-all group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0"
                  >
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
                className={`inline-flex items-center py-2 px-3.5 rounded-pill text-[0.95rem] leading-none font-bold transition ${
                  active
                    ? "bg-purple-deep text-white"
                    : "text-ink hover:text-purple-ink hover:bg-purple-softer"
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <button
            type="button"
            onClick={cycleLang}
            title="Change language"
            className="ml-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-pill bg-bg-card border border-brand-border-strong text-[0.82rem] font-bold text-ink-soft hover:bg-purple-softer transition"
          >
            <Icon name="globe" size={14} /> {lang}
          </button>

          <Link
            href="/donate"
            className="ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill bg-purple-deep text-white font-bold text-[0.92rem] hover:bg-purple hover:-translate-y-px transition"
          >
            <Icon name="heart" size={16} /> Donate
          </Link>
        </div>

        {/* Mobile: donate + menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-pill bg-purple-deep text-white font-bold text-[0.82rem]"
          >
            <Icon name="heart" size={14} /> Donate
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            <button
              type="button"
              onClick={cycleLang}
              className="mt-2 self-start inline-flex items-center gap-2 px-3.5 py-2 rounded-pill bg-bg-card border border-brand-border-strong text-[0.88rem] font-bold text-ink-soft"
            >
              <Icon name="globe" size={14} /> {lang}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
