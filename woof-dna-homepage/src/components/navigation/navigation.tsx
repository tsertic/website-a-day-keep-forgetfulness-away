"use client";

import { useState } from "react";
import Link from "next/link";
import { PawPrint, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Dog", href: "#" },
  { name: "Genome", href: "#" },
  { name: "Traits", href: "#" },
  { name: "Matches", href: "#" },
  { name: "Relatives", href: "#" },
  { name: "Pedigree", href: "#" },
  { name: "Insights", href: "#" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8" />
              <span className="text-xl font-bold">Woof DNA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-emerald-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="main">New Store</Button>
            <Button variant="secondary">Get Started</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-white" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-emerald-700 text-white"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-emerald-200 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    variant="outline"
                    className=" text-emerald-500 border-emerald-500 font-bold hover:bg-emerald-600 w-full"
                  >
                    New Store
                  </Button>
                  <Button className="bg-emerald-500 hover:bg-emerald-400 w-full">
                    Get Started
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
