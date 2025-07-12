"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function FAQSection() {
  const { elementRef, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div
          ref={elementRef}
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isIntersecting ? "animate-slide-up" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about gemstone identification.
            </p>
          </div>
        </div>
        <div
          className={`mx-auto max-w-3xl space-y-8 py-12 transition-all duration-700 delay-200 ${
            isIntersecting ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="hover-lift">
              <AccordionTrigger className="text-left text-base font-medium">
                How accurate is the gemstone identification?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Gemstone Identifier uses advanced AI technology trained on
                millions of gemstone images to provide highly accurate
                identifications. For common gemstones and well-known types, the
                accuracy is typically 90%+. For rare or unusual stones, we
                provide the closest matches and detailed information to help you
                narrow down the identification. Our system continuously improves
                as more users contribute to our database.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="hover-lift">
              <AccordionTrigger className="text-left text-base font-medium">
                Can Gemstone Identifier determine the value of my gemstones?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, Gemstone Identifier provides estimated value ranges based
                on recent market data, trends, and comparable sales. However,
                these are approximations and many factors can affect an item's
                actual value, including condition, provenance, rarity, and
                regional market variations. For high-value stones, we always
                recommend consulting with a professional gemologist or
                appraiser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="hover-lift">
              <AccordionTrigger className="text-left text-base font-medium">
                What types of gemstones can the app identify?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Gemstone Identifier can identify a wide range of gemstones
                including diamonds, sapphires, rubies, emeralds, quartz, opals,
                and many more. Our database includes stones from various origins
                and types, from common to rare specimens.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="hover-lift">
              <AccordionTrigger className="text-left text-base font-medium">
                How do I take the best photo for identification?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                For best results, take photos in good natural lighting, against
                a plain background. Capture the entire stone and include
                multiple angles if possible. For gemstones with inclusions or
                unique features, take close-up photos of these details as they
                can be crucial for accurate identification. Avoid shadows,
                glare, and blurry images.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="hover-lift">
              <AccordionTrigger className="text-left text-base font-medium">
                Can I use Gemstone Identifier offline?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                The core identification feature requires an internet connection
                to access our AI and database. However, subscribers can save
                identified stones to their collection for offline viewing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="hover-lift">
              <AccordionTrigger className="text-left text-base font-medium">
                How is my data and privacy protected?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We take your privacy seriously. Photos you upload are used only
                for identification purposes and to improve our AI system. You
                can choose whether to contribute your identified items to our
                database. All personal information is encrypted and never shared
                with third parties without your explicit consent. You can delete
                your account and data at any time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
