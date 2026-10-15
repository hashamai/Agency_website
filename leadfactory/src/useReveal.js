import { useEffect } from "react";

// Marks [data-reveal] elements with data-shown as they scroll into view; CSS animates them in.
// index.html decides whether reveals are on (motion allowed + IntersectionObserver available).
// A data attribute is used instead of a class so React re-renders never wipe the shown state.
export default function useReveal() {
  useEffect(() => {
    window.__revealReady = true;
    if (!document.documentElement.classList.contains("js-reveal")) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-shown", "");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    document.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
