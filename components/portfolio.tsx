"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AddIcon from "@mui/icons-material/Add";
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      category: "library",
      title: "UI Kit",
      image: "/ui-kit.png?height=300&width=400",
      view: "https://morbidreams.github.io/ui-kit/",
      repo: "https://github.com/morbidreams/ui-kit",
    },
    {
      id: 2,
      category: "game",
      title: "Jigsaw puzzle",
      image: "/jigsaw.png?height=300&width=400",
      view: "https://morbidreams.github.io/jigsaw/",
      repo: "https://github.com/morbidreams/jigsaw",
    },
    {
      id: 3,
      category: "app",
      title: "Kanban App",
      image: "/todo.png?height=300&width=400",
      view: "https://kanban-app-one-zeta.vercel.app/",
      repo: "https://github.com/morbidreams/Nextjs-kanban-app/",
    },
    {
      id: 4,
      category: "dashboard",
      title: "Management tool",
      image: "/rentals.png?height=300&width=400",
      view: "https://github.com/morbidreams/rental-management-api",
      repo: "https://github.com/morbidreams/rental-management-api",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A collection of projects I’ve worked on
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
                      className="bg-black text-white hover:bg-gray-900 rounded-full"
                    >
                      <Link href={item.view || "#"} target="_blank">
                        <VisibilityIcon />
                      </Link>
                    </Button>
                    <Button
                      size="icon"
                      className="bg-black text-white hover:bg-gray-900 rounded-full"
                      asChild
                    >
                      <Link href={item.repo || "#"} target="_blank">
                        <LaunchIcon />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <Badge variant="outline" className="capitalize">
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
