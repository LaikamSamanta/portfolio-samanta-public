import { useCallback, useEffect, useState } from "react";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(
    (event) => {
      const next = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const supportsViewTransitions = typeof document.startViewTransition === "function";
      const rect = event?.currentTarget?.getBoundingClientRect?.();

      if (!supportsViewTransitions || prefersReducedMotion || !rect) {
        setTheme(next);
        return;
      }

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const radius = Math.hypot(
        Math.max(cx, window.innerWidth - cx),
        Math.max(cy, window.innerHeight - cy),
      );

      const root = document.documentElement;
      root.style.setProperty("--theme-cx", `${cx}px`);
      root.style.setProperty("--theme-cy", `${cy}px`);
      root.style.setProperty("--theme-r", `${radius}px`);
      root.dataset.themeAnim = "1";

      // Mutate the class synchronously inside the transition callback so the
      // "before"/"after" screenshots the View Transitions API captures are
      // correct — a React state update here would be too late (async/batched).
      const transition = document.startViewTransition(() => {
        root.classList.toggle("dark", next === "dark");
      });
      transition.finished.finally(() => {
        delete root.dataset.themeAnim;
      });

      setTheme(next);
    },
    [theme],
  );

  return { theme, toggleTheme };
}
