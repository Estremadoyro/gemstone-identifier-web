import Link from "next/link";
import { BookOpen } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t bg-accent/20">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-primary/90">
                Gemstone Identifier
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Identify, value, and learn about gemstones with our AI-powered
              platform.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-primary/90">Company</h3>
            <ul className="space-y-2 md:space-y-0 md:flex md:gap-6">
              <li>
                <Link
                  href="https://www.termsfeed.com/live/3d6c3522-99d3-4b15-977d-e04b8ad06702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="https://linktr.ee/chizzatto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} GemstoneIdentifier.app . All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
