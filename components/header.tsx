"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", icon: PersonIcon, label: "About" },
    { href: "#resume", icon: DescriptionIcon, label: "Resume" },
    { href: "#portfolio", icon: WorkIcon, label: "Portfolio" },
    { href: "#contact", icon: EmailIcon, label: "Contact" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full p-6 bg-card">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <Avatar className="w-32 h-32 mx-auto mb-4">
          <AvatarImage src="/ela.jpg?height=128&width=128" alt="Ela Debichi" />
          <AvatarFallback>ED</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold mb-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Ela Debichi
          </Link>
        </h1>

        {/* Social Links */}
        <div className="flex justify-center space-x-3 mb-6">
          <Link
            href="https://www.linkedin.com/in/ela-debichi/"
            className="text-muted-foreground hover:text-primary"
            target="_blank"
          >
            <LinkedInIcon />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/morbidreams"
            className="text-muted-foreground hover:text-primary"
            target="_blank"
          >
            <GitHubIcon />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="mailto:eladebichi@gmail.com"
            className="text-muted-foreground hover:text-primary"
          >
            <GoogleIcon />
            <span className="sr-only">Gmail</span>
          </Link>
        </div>

        <Separator />
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Button
                variant="ghost"
                className="w-full justify-start"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href={item.href} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-4 right-4 z-50 lg:hidden bg-white"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0 bg-white">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <header className="fixed top-0 left-0 h-full w-80 hidden lg:block border-r bg-card">
        <SidebarContent />
      </header>
    </>
  );
}
