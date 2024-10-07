import { HeroSection } from "@/components/homepage/hero-section";
import { HowWoofDnkWorks } from "@/components/homepage/how-woof-dnk-works";
import { KeypointsBanner } from "@/components/homepage/keypoints-banner";
import { Newsletter } from "@/components/homepage/newsletter";
import { PopularDogBreeds } from "@/components/homepage/popular-dog-breeds";
import { TestingResults } from "@/components/homepage/testing-results";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <KeypointsBanner />
      <TestingResults />
      <HowWoofDnkWorks />
      <PopularDogBreeds />
      <Newsletter />
    </div>
  );
}
