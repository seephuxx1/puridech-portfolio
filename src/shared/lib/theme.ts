export type ThemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "themechange";
const DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * Runs inline in <head> before first paint so the saved theme never flashes.
 * Must stay in sync with `applyTheme` below.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var p=localStorage.getItem("${STORAGE_KEY}");var d=p==="dark"||(p!=="light"&&matchMedia("${DARK_QUERY}").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light")}catch(e){}})()`;

export function getThemePreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // localStorage unavailable (private mode, blocked storage) — fall back to system.
  }
  return "system";
}

export function applyTheme(preference: ThemePreference): void {
  const isDark =
    preference === "dark" ||
    (preference === "system" && matchMedia(DARK_QUERY).matches);
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light",
  );
}

export function setThemePreference(preference: ThemePreference): void {
  try {
    if (preference === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, preference);
  } catch {
    // Still apply for this visit even if it cannot be saved.
  }
  applyTheme(preference);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Notifies when the preference changes, in this tab or another one. */
export function subscribeToThemePreference(onChange: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Keeps the page in step with the OS theme and with changes made in other tabs. */
export function watchSystemTheme(): () => void {
  const media = matchMedia(DARK_QUERY);
  const reapply = () => applyTheme(getThemePreference());
  media.addEventListener("change", reapply);
  window.addEventListener("storage", reapply);
  return () => {
    media.removeEventListener("change", reapply);
    window.removeEventListener("storage", reapply);
  };
}

/**
 * Runs inline in <head>: a refresh always starts at the top of the page.
 * Turns off the browser's scroll restoration and drops any #section from the URL,
 * which would otherwise jump straight back down.
 */
export const SCROLL_TOP_SCRIPT = `(function(){try{history.scrollRestoration="manual";if(location.hash)history.replaceState(null,"",location.pathname+location.search)}catch(e){}})()`;
