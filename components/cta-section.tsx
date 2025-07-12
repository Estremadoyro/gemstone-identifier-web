"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function CTASection() {
  const { elementRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>();

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/gemstone-background.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div
          ref={elementRef}
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isIntersecting ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="space-y-2">
            <h2
              className={`text-3xl font-bold tracking-tighter md:text-4xl/tight transition-all duration-700 delay-200 ${
                isIntersecting
                  ? "animate-slide-up"
                  : "opacity-0 translate-y-[30px]"
              }`}
            >
              Start identifying your gemstones today
            </h2>
            <p
              className={`max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-all duration-700 delay-300 ${
                isIntersecting
                  ? "animate-slide-up"
                  : "opacity-0 translate-y-[30px]"
              }`}
            >
              Join thousands of gemstone enthusiasts, jewelers, and collectors
              who trust Gemstone Identifier for identifying and learning about
              their precious stones.
            </p>
          </div>
          <div
            className={`flex flex-col gap-2 min-[400px]:flex-row justify-center transition-all duration-700 delay-400 ${
              isIntersecting ? "animate-scale-in" : "opacity-0 scale-90"
            }`}
          >
            <Link
              href="https://apps.apple.com/app/id6627335358"
              className="w-[170px] h-[50px] relative hover-lift"
            >
              <Image
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
