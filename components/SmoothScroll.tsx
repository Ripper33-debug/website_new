"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let isScrolling = false;
    let targetSection = 0;

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const smoothScrollTo = (targetY: number, duration: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        } else {
          isScrolling = false;
        }
      };

      isScrolling = true;
      requestAnimationFrame(scroll);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const sections = document.querySelectorAll("section");
      const currentScroll = window.scrollY;

      // Find current section
      let currentIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
          currentIndex = index;
        }
      });

      // Determine scroll direction
      if (e.deltaY > 0 && currentIndex < sections.length - 1) {
        // Scroll down
        e.preventDefault();
        targetSection = currentIndex + 1;
        const target = sections[targetSection];
        if (target) {
          smoothScrollTo(target.offsetTop, 1000);
        }
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll up
        e.preventDefault();
        targetSection = currentIndex - 1;
        const target = sections[targetSection];
        if (target) {
          smoothScrollTo(target.offsetTop, 1000);
        }
      }
    };

    // Add class for CSS
    document.documentElement.classList.add("smooth-scroll");

    // Add wheel listener with passive: false to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.documentElement.classList.remove("smooth-scroll");
    };
  }, []);

  return null;
}
