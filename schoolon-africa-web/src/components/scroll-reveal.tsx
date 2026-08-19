"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
      case "down":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8";
      case "left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8";
      case "right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8";
      case "none":
      default:
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
    }
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
