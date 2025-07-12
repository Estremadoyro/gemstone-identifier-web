"use client";

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggeredRef.current) return;

    // Clean up any existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          setIsIntersecting(true);
          // Immediately disconnect to prevent any further triggers
          observer.disconnect();
          observerRef.current = null;
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options,
      }
    );

    observerRef.current = observer;
    observer.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [options]);

  return { elementRef, isIntersecting };
} 