import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, ExternalLink, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { publications } from "@/lib/data"
import { personalInfo } from "@/lib/data"
import Menu from "@/components/menu"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <Menu />

      <main className="container relative z-10 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Publications</h1>
          </div>
          {/* <p className="text-muted-foreground text-lg">Recognition and notable accomplishments</p> */}
        </div>

        <div className="grid gap-6">
          {publications.map((publication, index) => (
            <div key={publication.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-card dark:glass-card-dark p-6 rounded-2xl h-full flex flex-col">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl mb-2">{publication.title}</CardTitle>
                  <CardDescription>{publication.publisher}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground leading-relaxed mb-4">{publication.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {publication.links?.map((link, linkIndex) => {
                      const isRecommendation = link.text.toLowerCase().includes("recommendation")
                      return (
                        <Button key={linkIndex} size="sm" variant="outline" asChild className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            {isRecommendation ? (
                              <FileText className="h-4 w-4" />
                            ) : (
                              <ExternalLink className="h-4 w-4" />
                            )}
                            <span>{link.text}</span>
                          </a>
                        </Button>
                      )
                    })}
                  </div>
                </CardContent>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

