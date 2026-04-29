export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "cff-theme";

export function readStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === "dark" || raw === "light") {
    return raw;
  }

  return null;
}

export function storeTheme(mode: ThemeMode) {
  window.localStorage.setItem(STORAGE_KEY, mode);
}

export function getSystemTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveInitialTheme(): ThemeMode {
  return readStoredTheme() ?? getSystemTheme();
}

export function applyThemeClass(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}
