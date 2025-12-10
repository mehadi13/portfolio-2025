import { ModeToggle } from "@/components/mode-toggle";
import { personalInfo } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Menu() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            {personalInfo.name}
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Home
              </Link>
              <Link href="/experience" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Experience
              </Link>
              {/* <Link href="/projects" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Projects
              </Link> */}
              <Link href="/publications" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Publications
              </Link>
              {/* <Link href="/certifications" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Certifications
              </Link> */}
              <Link href="/education" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-md hover:bg-muted/50">
                Education
              </Link>
              <Button variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground hover:scale-105">
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Resume
                        </a>
                    </Button>
            </nav>
            <ModeToggle />
          </div>
        </div>
      </header>
  )}