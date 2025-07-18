"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { event } from "@/lib/gtag";

export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      category: "blog",
      title: "Personal Blog",
      image: "/blog.png?height=300&width=400",
      view: "https://dreamblog-mu.vercel.app",
      repo: "https://github.com/morbidreams/nextjs-blog",
      tags: ["nextjs", "shadcn", "mdx"],
    },
    {
      id: 2,
      category: "library",
      title: "UI Kit",
      image: "/ui-kit.png?height=300&width=400",
      view: "https://ela-ui-kit.vercel.app/?path=/story/carousel--base",
      repo: "https://github.com/morbidreams/ui-kit",
      tags: ["react", "storybook", "sass"],
    },
    {
      id: 3,
      category: "game",
      title: "Jigsaw puzzle",
      image: "/jigsaw.png?height=300&width=400",
      view: "https://morbidreams.github.io/jigsaw/",
      repo: "https://github.com/morbidreams/jigsaw",
      tags: ["react", "tailwind", "typescript"],
    },
    {
      id: 4,
      category: "dashboard",
      title: "Management tool",
      image: "/rentals.png?height=300&width=400",
      view: "https://github.com/morbidreams/rental-management-api",
      repo: "https://github.com/morbidreams/rental-management-api",
      tags: ["nextjs", "nestjs", "postgres"],
    },
    {
      id: 5,
      category: "website",
      title: "Timed quiz",
      image: "/quiz.png?height=300&width=400",
      view: "https://timed-quiz.vercel.app",
      repo: "https://github.com/morbidreams/timed-quiz",
      tags: ["nextjs", "bootstrap"],
    },
    {
      id: 6,
      category: "app",
      title: "Kanban App",
      image: "/todo.png?height=300&width=400",
      view: "https://kanban-app-one-zeta.vercel.app/",
      repo: "https://github.com/morbidreams/Nextjs-kanban-app/",
      tags: ["nextjs", "zustand", "javascript"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I&apos;ve worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button
                      size="icon"
                      className="bg-peach-100 text-black hover:bg-peach-200 rounded-full"
                      onClick={() => {
                        event({
                          action: "click_view_link",
                          category: "Portfolio",
                          label: item.view,
                        });
                        window.open(
                          item.view || "#",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <VisibilityIcon />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-peach-100 text-black hover:bg-peach-200 rounded-full"
                      onClick={() => {
                        event({
                          action: "click_repo_link",
                          category: "Portfolio",
                          label: item.repo,
                        });
                        window.open(
                          item.repo || "#",
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                    >
                      <LaunchIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>

                <div className="flex flex-wrap gap-2 mb-2">
                  {item.tags?.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Badge variant="outline" className="capitalize text-primary">
                  {item.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
