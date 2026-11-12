"use client";

import ThemeToggle from "@/shared/components/ThemeToggle";
import { useScrollSpy } from "@/shared/hooks/useScrollSpy";
import { cn } from "@/shared/lib/cn";
import { SITE } from "@/shared/lib/constants";
import { NAV_ITEMS } from "../constants/nav.constants";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

/**
 * Desktop: a floating rail on the left.
 * Mobile: a slim top bar (brand + theme) and a tab bar at the bottom, within thumb reach.
 */
export default function SiteNav() {
  const activeId = useScrollSpy(SECTION_IDS);
  // -1 while the hero is on screen: no section is active, so the marker hides.
  const activeIndex = NAV_ITEMS.findIndex((item) => item.id === activeId);
  const markerVisibility = activeIndex === -1 ? "opacity-0" : "opacity-100";

  return (
    <>
      {/* Desktop rail */}
      <aside className="fixed top-4 bottom-4 left-4 z-50 hidden w-60 flex-col rounded-3xl border border-card-border bg-page/70 p-4 backdrop-blur-xl lg:flex">
        <a href="#top" className="flex items-center gap-3 rounded-2xl p-2">
          <Monogram />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight">{SITE.name}</span>
            <span className="block text-xs text-muted">{SITE.role}</span>
          </span>
        </a>

        <div className="my-4 h-px bg-line" />

        <nav aria-label="เมนูหลัก" className="flex-1 overflow-y-auto">
          <ul className="relative flex flex-col">
            {/* Marker slides to the active item; each item is exactly h-11. */}
            <li
              aria-hidden="true"
              className={cn(
                "absolute top-0 left-0 flex h-11 items-center transition duration-300 ease-out",
                markerVisibility,
              )}
              style={{ transform: `translateY(${Math.max(activeIndex, 0) * 100}%)` }}
            >
              <span className="h-5 w-0.5 rounded-full bg-accent" />
            </li>
            {NAV_ITEMS.map(({ id, label, Icon }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex h-11 items-center gap-3 px-4 text-sm transition-colors",
                      isActive ? "font-medium text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    <Icon className="size-[18px]" />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ThemeToggle />
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-page/80 px-5 backdrop-blur-md lg:hidden">
        <a href="#top" className="flex items-center gap-3">
          <Monogram />
          <span className="text-sm font-semibold tracking-tight">{SITE.name}</span>
        </a>
        <ThemeToggle compact />
      </header>

      {/* Mobile bottom tab bar */}
      <nav
        aria-label="เมนูหลัก"
        className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-50 rounded-2xl border border-card-border bg-page/85 p-1.5 shadow-lg shadow-black/10 backdrop-blur-xl lg:hidden"
      >
        <ul className="relative grid grid-cols-5">
          {/* Underline slides to the active tab; each tab is exactly 1/5 wide. */}
          <li
            aria-hidden="true"
            className={cn(
              "absolute bottom-0 left-0 flex w-1/5 justify-center transition duration-300 ease-out",
              markerVisibility,
            )}
            style={{ transform: `translateX(${Math.max(activeIndex, 0) * 100}%)` }}
          >
            <span className="h-0.5 w-8 rounded-full bg-accent" />
          </li>
          {NAV_ITEMS.map(({ id, shortLabel, Icon }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "flex h-14 flex-col items-center justify-center gap-1 text-[11px] transition-colors",
                    isActive ? "font-medium text-ink" : "text-muted",
                  )}
                >
                  <Icon className="size-5" />
                  {shortLabel}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

function Monogram() {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-void font-mono text-xs font-semibold tracking-wider text-white dark:border dark:border-white/15">
      {SITE.initials}
    </span>
  );
}
