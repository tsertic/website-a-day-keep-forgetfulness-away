import Image from "next/image";
import Link from "next/link";
import React from "react";

export const PopularDogBreeds = () => {
  const dogBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "French Bulldog",
    "Bulldog",
    "Poodle",
    "Beagle",
    "Rottweiler",
  ];
  return (
    <section className="py-12 bg-emerald-50">
      <div className="container mx-auto max-md:px-2">
        <h2 className="text-3xl font-bold text-emerald-800 mb-8">
          Popular Dog Breeds
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dogBreeds.map((breed) => (
            <div
              key={breed}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <Image
                src="/dog-breed-placeholder.png"
                alt={breed}
                width={200}
                height={200}
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-4">
                <h3 className="font-semibold text-emerald-700">{breed}</h3>
                <Link
                  href="#"
                  className="text-sm text-emerald-500 hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
