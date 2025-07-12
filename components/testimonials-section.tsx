"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { FaQuoteRight, FaStar } from "react-icons/fa";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This app helped me identify a rare sapphire I inherited from my grandmother. The detailed information about its type and value was incredibly helpful.",
      name: "Emily Chen",
      role: "Jewelry Collector",
      initials: "EC",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      quote:
        "As someone new to collecting gemstones, this app has been invaluable. I've learned so much about different types and origins. The value estimates have helped me avoid overpaying at gem shows and auctions.",
      name: "Robert J.",
      role: "Collector",
      initials: "RJ",
      gradient: "from-indigo-400 to-indigo-600",
    },
    {
      quote:
        "This gemstone identifier app has become an essential tool in my design business. When sourcing stones for clients, I can quickly identify items and provide them with the fascinating history behind each gem, which they love.",
      name: "Claire M.",
      role: "Jewelry Designer",
      initials: "CM",
      gradient: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Loved by collectors and enthusiasts
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our users are saying about their experience with Gemstone
              Identifier.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg p-6 text-left flex flex-col justify-between h-full bg-primary/10 text-primary font-medium hover-lift"
            >
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-primary/70 text-2xl hover-scale">
                    <FaQuoteRight />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
                <div className="text-base text-primary leading-relaxed mb-6">
                  "{testimonial.quote}"
                </div>
              </div>
              <div className="border-t border-primary/30 pt-4 mt-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold text-sm hover-scale`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-primary/90">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary/60">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
