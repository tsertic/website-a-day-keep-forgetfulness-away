import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-8">
      <div className="container mx-auto max-md:px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Discover your dog's genetic secrets with our cutting-edge DNA
              testing technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:underline">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Dog Breeds
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  Health Tests
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@woof-dna.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-700 text-center">
          <p className="text-sm">&copy; 2024 Woof DNA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
