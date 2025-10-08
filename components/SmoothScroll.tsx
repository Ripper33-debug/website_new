"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let isScrolling = false;
    let targetSection = 0;

    // More dramatic easing - speeds up then slows down smoothly
    const easeInOutQuart = (t: number): number => {
      return t < 0.5
        ? 8 * t * t * t * t
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const smoothScrollTo = (targetY: number, duration: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutQuart(progress);

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
      const windowHeight = window.innerHeight;

      // Find current section - more accurate detection
      let currentIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        // If this section is closer to the top than previous ones
        if (distance < minDistance) {
          minDistance = distance;
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
          smoothScrollTo(target.offsetTop, 1800);
        }
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll up
        e.preventDefault();
        targetSection = currentIndex - 1;
        const target = sections[targetSection];
        if (target) {
          smoothScrollTo(target.offsetTop, 1800);
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
