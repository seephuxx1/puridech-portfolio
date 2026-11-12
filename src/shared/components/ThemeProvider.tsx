"use client";

import { useEffect, type ReactNode } from "react";
import { watchSystemTheme } from "@/shared/lib/theme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => watchSystemTheme(), []);
  return children;
}
