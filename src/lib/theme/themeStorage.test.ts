import { describe, expect, it, beforeEach } from "vitest";

import {
  applyThemeClass,
  readStoredTheme,
  resolveInitialTheme,
  storeTheme
} from "@/lib/theme/themeStorage";

describe("themeStorage", () => {
  beforeEach(() => {
    document.documentElement.className = "";
    window.localStorage.clear();

    window.matchMedia = ((query: string) => {
      return {
        matches: query.includes("dark"),
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false
      } as unknown as MediaQueryList;
    }) as unknown as typeof window.matchMedia;
  });

  it("stores and reads theme", () => {
    storeTheme("dark");
    expect(readStoredTheme()).toBe("dark");
  });

  it("applies and removes dark class", () => {
    applyThemeClass("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    applyThemeClass("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("resolves initial theme from storage first", () => {
    storeTheme("light");
    expect(resolveInitialTheme()).toBe("light");
  });
});
