"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import HomeIcon from "@mui/icons-material/Home"

export default function PortfolioDetails() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="lg:ml-80">
        {/* Breadcrumbs */}
        <section className="py-8 px-4 md:px-8 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Portfolio Details</h1>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/" className="flex items-center">
                        <HomeIcon className="w-4 h-4 mr-1" />
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Portfolio Details</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </section>

        {/* Portfolio Details */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Image Slider */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="relative h-96 rounded-t-lg overflow-hidden">
                        <Image
                          src={images[currentSlide] || "/placeholder.svg"}
                          alt={`Portfolio image ${currentSlide + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Navigation */}
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2"
                      >
                        <ChevronLeftIcon />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      >
                        <ChevronRightIcon />
                      </Button>

                      {/* Dots */}
                      <div className="flex justify-center mt-4 space-x-2 p-4">
                        {images.map((_, index) => (
                          <Button
                            key={index}
                            variant={index === currentSlide ? "default" : "outline"}
                            size="sm"
                            className="w-3 h-3 p-0 rounded-full"
                            onClick={() => setCurrentSlide(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <strong>Category:</strong>
                      <Badge>Web design</Badge>
                    </div>
                    <div className="flex justify-between">
                      <strong>Client:</strong>
                      <span className="text-muted-foreground">ASU Company</span>
                    </div>
                    <div className="flex justify-between">
                      <strong>Date:</strong>
                      <span className="text-muted-foreground">01 March, 2020</span>
                    </div>
                    <div className="flex justify-between">
                      <strong>URL:</strong>
                      <Link href="#" className="text-primary hover:underline">
                        www.example.com
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Project Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold mb-4">This is an example of portfolio detail</h3>
                    <p className="text-muted-foreground">
                      Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia
                      quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem
                      officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim
                      cum deserunt eius.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
