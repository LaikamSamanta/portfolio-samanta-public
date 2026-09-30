import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const NAV_ITEMS = [
  { label: "Sākums", href: "/" },
  { label: "Projekti", href: "/projekti" },
  { label: "Par mani", href: "/par-mani" },
];

function NavThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Pārslēgt uz gaišo tēmu" : "Pārslēgt uz tumšo tēmu"}
      aria-pressed={isDark}
      className="focus-ring relative inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-background ring-1 ring-foreground/8 transition-colors"
    >
      <span aria-hidden="true" className="relative h-4 w-4">
        <Sun
          className={`absolute inset-0 h-4 w-4 text-foreground transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-4 w-4 text-foreground transition-all duration-300 ${
            !isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}

export function Nav() {
  const { pathname } = useLocation();
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const [pillRect, setPillRect] = useState(null);
  const [hasMeasured, setHasMeasured] = useState(false);

  const activeIndex = NAV_ITEMS.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`),
  );

  useLayoutEffect(() => {
    const list = listRef.current;
    const activeEl = activeIndex >= 0 ? itemRefs.current[activeIndex] : null;
    if (!list || !activeEl) {
      setPillRect(null);
      return;
    }
    const listRect = list.getBoundingClientRect();
    const itemRect = activeEl.getBoundingClientRect();
    setPillRect({ x: itemRect.left - listRect.left, width: itemRect.width });
  }, [activeIndex, pathname]);

  useEffect(() => {
    if (!pillRect) return undefined;
    const id = requestAnimationFrame(() => setHasMeasured(true));
    return () => cancelAnimationFrame(id);
  }, [pillRect]);

  return (
    <nav aria-label="Galvenā" className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full bg-background p-1.5 shadow-sm border border-foreground/8">
        <ul ref={listRef} className="relative flex items-center gap-1">
          {pillRect && (
            <motion.span
              aria-hidden="true"
              initial={false}
              animate={{ x: pillRect.x, width: pillRect.width }}
              transition={hasMeasured ? { type: "spring", stiffness: 380, damping: 32 } : { duration: 0 }}
              style={{ left: 0, top: 0, bottom: 0 }}
              className="absolute rounded-full bg-foreground/5 ring-1 ring-foreground/8"
            />
          )}
          {NAV_ITEMS.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={item.href}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="relative"
              >
                <Link
                  to={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="focus-ring relative inline-flex cursor-pointer items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300"
                >
                  <span className={isActive ? "relative z-10 text-foreground" : "relative z-10 text-foreground/60 hover:text-foreground"}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <NavThemeToggle />
      </div>
    </nav>
  );
}
