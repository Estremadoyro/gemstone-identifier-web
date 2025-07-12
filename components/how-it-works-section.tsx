import Image from "next/image";
import { Camera, Database, BookOpen } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Identify gemstones in three simple steps
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our intuitive process makes gemstone identification and learning
              effortless.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">
              1. Take a Photo
            </h3>
            <p className="text-muted-foreground">
              Simply snap a picture of your gemstone using your smartphone
              camera or upload an existing photo from your gallery.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              <Image
                src="/step1.jpg"
                alt="Taking a photo of a gemstone"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">
              2. Get Results
            </h3>
            <p className="text-muted-foreground">
              Our AI analyzes your photo and provides identification, estimated
              type, potential value, and similar gems from our database.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              <Image
                src="/step2.jpg"
                alt="Analyzing gemstone photo"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 rounded-lg border border-primary/20 bg-card p-6 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary/90">3. Learn More</h3>
            <p className="text-muted-foreground">
              Explore detailed information about your gemstone's history, type,
              and significance to become a more informed collector.
            </p>
            <div className="rounded-xl border border-primary/20 bg-card overflow-hidden shadow-lg w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
              <Image
                src="/step3.jpg"
                alt="Get gemstone identification result"
                width={300}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
