import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="bg-emerald-700 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center max-md:px-2">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            Discover Your Dog DNA Testing?
          </h2>
          <p className="text-lg">
            Dive deep into your dog's genetic makeup and uncover fascinating
            insights about their breed, traits, and health predispositions.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" variant="main">
              GET STARTED
            </Button>
            <Button size="lg" variant="secondary">
              MORE
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src="/hero-image.png"
            alt="Various dog breeds"
            width={500}
            height={300}
            className="rounded-lg "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-700 opacity-10 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
