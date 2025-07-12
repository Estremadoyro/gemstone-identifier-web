"use client";

import { useEffect, useRef, useState } from 'react';

// Detect Safari browser - only run on client side
const isSafari = () => {
  if (typeof window === 'undefined') return false;
  const userAgent = navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(userAgent) || 
         (userAgent.includes('Safari') && !userAgent.includes('Chrome'));
};

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  // Detect Safari on client side
  useEffect(() => {
    const safariDetected = isSafari();
    setIsSafariBrowser(safariDetected);
    
    // If Safari, immediately show content
    if (safariDetected) {
      setIsIntersecting(true);
      hasTriggeredRef.current = true;
    }
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTriggeredRef.current) return;

    // If Safari, don't set up observer
    if (isSafariBrowser) {
      return;
    }

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
  }, [options, isSafariBrowser]);

  return { elementRef, isIntersecting };
} 