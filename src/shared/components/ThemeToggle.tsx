"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/shared/lib/cn";
import {
  getThemePreference,
  setThemePreference,
  subscribeToThemePreference,
  type ThemePreference,
} from "@/shared/lib/theme";
import { MonitorIcon, MoonIcon, SunIcon } from "@/shared/ui";

const OPTIONS = [
  { value: "light", label: "สว่าง", title: "สว่าง", Icon: SunIcon },
  { value: "dark", label: "มืด", title: "มืด", Icon: MoonIcon },
  { value: "system", label: "ระบบ", title: "ตามระบบ", Icon: MonitorIcon },
] as const;

const getServerPreference = (): ThemePreference => "system";

/** `compact` shows icons only, for tight spaces like the mobile top bar. */
export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const preference = useSyncExternalStore(
    subscribeToThemePreference,
    getThemePreference,
    getServerPreference,
  );

  return (
    <div
      role="radiogroup"
      aria-label="ธีม"
      className={cn(
        "grid grid-cols-3 gap-1 rounded-full border border-line bg-surface p-1",
        compact && "inline-grid",
      )}
    >
      {OPTIONS.map(({ value, label, title, Icon }) => {
        const isActive = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={title}
            title={title}
            onClick={() => setThemePreference(value)}
            className={cn(
              "flex h-8 items-center justify-center gap-1.5 rounded-full text-xs transition-colors",
              compact && "w-8",
              isActive
                ? "bg-card font-medium text-ink shadow-sm ring-1 ring-line"
                : "text-muted hover:text-ink",
            )}
          >
            <Icon className="size-3.5" />
            {!compact && label}
          </button>
        );
      })}
    </div>
  );
}
