"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 hover-lift">
            <img
              src="/app-icon.jpg"
              alt="App icon"
              className="w-7 h-7 rounded hover-scale"
            />
            <span className="font-bold text-xl">Gemstone Identifier</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-colors hover:text-primary hover-scale"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary hover-scale"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium transition-colors hover:text-primary hover-scale"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium transition-colors hover:text-primary hover-scale"
          >
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hover-scale">
            <ThemeToggle />
          </div>
          <Link
            href="https://apps.apple.com/app/id6627335358"
            className="w-[120px] h-[40px] relative hover-lift"
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
    </header>
  );
}
