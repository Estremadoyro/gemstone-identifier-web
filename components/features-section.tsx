"use client";

import {
  Camera,
  Search,
  Sparkles,
  Clock,
  Database,
  BookOpen,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function FeaturesSection() {
  const { elementRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>();

  const features = [
    {
      icon: Camera,
      title: "Instant Identification",
      description: "Identify gemstones with just a photo.",
      content:
        "Our advanced AI can recognize thousands of gemstones, from sapphires and rubies to diamonds and more.",
    },
    {
      icon: Database,
      title: "Value Estimation",
      description: "Get approximate market values for your gems.",
      content:
        "Receive estimated price ranges based on recent market data and trends for similar gemstones.",
    },
    {
      icon: Sparkles,
      title: "Historical Context",
      description: "Learn the story behind your gemstones.",
      content:
        "Discover the history, origin, and significance of your gemstones with detailed information.",
    },
    {
      icon: Clock,
      title: "Collection Management",
      description: "Organize and track your gemstone collection.",
      content:
        "Create a digital inventory of your gemstones with photos, descriptions, and estimated values all in one place.",
    },
  ];

  return (
    <section id="features" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div
          ref={elementRef}
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isIntersecting ? "animate-slide-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Everything you need to identify and learn about gemstones
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI-powered platform makes gemstone identification effortless,
              so you can focus on building your collection.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className={`border-primary/20 bg-card/80 backdrop-blur-sm hover-lift transition-all duration-700 ${
                  isIntersecting ? "animate-scale-in" : "opacity-0 scale-90"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-2">
                  <div className="hover-scale">
                    <IconComponent className="h-6 w-6 text-primary mb-2" />
                  </div>
                  <CardTitle className="text-primary/90">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
