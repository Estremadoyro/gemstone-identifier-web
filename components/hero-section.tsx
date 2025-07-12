"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { AppStoreBadge } from "@/components/app-store-badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// Detect Safari browser
const isSafari = () => {
  if (typeof window === "undefined") return false;
  const userAgent = navigator.userAgent;
  return (
    /^((?!chrome|android).)*safari/i.test(userAgent) ||
    (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
  );
};

export function HeroSection() {
  const { elementRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>();
  const [isSafariBrowser, setIsSafariBrowser] = useState(false);

  // Detect Safari on client side
  useEffect(() => {
    setIsSafariBrowser(isSafari());
  }, []);

  return (
    <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div
            ref={elementRef}
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${
              isSafariBrowser
                ? ""
                : isIntersecting
                ? "animate-slide-in-left"
                : "opacity-0 translate-x-[-30px]"
            }`}
          >
            <div className="space-y-2">
              <Link
                href="https://apps.apple.com/app/id6627335358"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group block hover-lift"
              >
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 relative">
                    ✨ Identify gemstones ✨
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </span>
                  <br />
                  <span className="text-primary/80 group-hover:text-primary transition-colors duration-300">
                    with a simple photo
                  </span>
                </h1>
              </Link>
              <p
                className={`max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl transition-all duration-700 delay-200 ${
                  isSafariBrowser
                    ? ""
                    : isIntersecting
                    ? "animate-slide-up"
                    : "opacity-0 translate-y-[30px]"
                }`}
              >
                Gemstone Identifier uses advanced AI to help you identify,
                value, and learn about gemstones. Simply take a photo and
                discover the story behind your gems.
              </p>
              <div
                className={`flex flex-col sm:flex-row sm:items-center gap-3 mt-4 transition-all duration-700 delay-300 ${
                  isSafariBrowser
                    ? ""
                    : isIntersecting
                    ? "animate-slide-up"
                    : "opacity-0 translate-y-[30px]"
                }`}
              >
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
                    alt="User 1"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover hover-scale"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="User 2"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover hover-scale"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="User 3"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover hover-scale"
                  />
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  Join 10,000+ gemstone enthusiasts
                </span>
              </div>
            </div>
            <div
              className={`flex flex-row flex-wrap gap-3 transition-all duration-700 delay-400 ${
                isSafariBrowser
                  ? ""
                  : isIntersecting
                  ? "animate-slide-up"
                  : "opacity-0 translate-y-[30px]"
              }`}
            >
              <div className="hover-lift">
                <AppStoreBadge size="medium" />
              </div>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/50 hover:bg-primary/10 hover:text-primary hover-lift"
              >
                <Link href="#how-it-works" className="flex items-center gap-2">
                  <span className="text-xl animate-bounce">↓</span>
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>
          <div
            className={`relative mt-4 lg:mt-0 mx-auto lg:mx-0 max-w-[350px] lg:max-w-none transition-all duration-1000 delay-200 ${
              isSafariBrowser
                ? ""
                : isIntersecting
                ? "animate-slide-in-right"
                : "opacity-0 translate-x-[30px]"
            }`}
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/hero.png"
                alt="gemfinder app interface showing gemstone identification"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
