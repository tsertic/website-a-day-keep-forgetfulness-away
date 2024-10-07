"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background mx-2">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <Card>
          <CardContent className="p-6">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover md:w-48 rounded-lg"
                  src="/images/user-user.jpg"
                  alt="Team of developers"
                  width={400}
                  height={400}
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <Badge variant="secondary" className="mb-2">
                  Now Freelancing
                </Badge>
                <CardTitle className="text-2xl font-bold">
                  Software Developer
                </CardTitle>
                <CardDescription className="mt-3">
                  Experienced software developer specializing in JavaScript,
                  TypeScript, Next.js, and SQL databases. Creating efficient,
                  scalable, and user-friendly applications.
                </CardDescription>
                <Button className="mt-4">Contact Me</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Me Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">About Me</h2>
          <Card className="mt-4">
            <CardContent className="p-6">
              <p className="text-muted-foreground">
                I'm a passionate software developer with expertise in modern web
                technologies. My focus is on creating robust and scalable
                applications using JavaScript, TypeScript, Next.js, and SQL
                databases.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item, i) => (
              <Card key={item}>
                <CardContent className="p-6">
                  <Image
                    className="h-48 w-full object-cover rounded-lg"
                    src={`/images/project${i + 1}.jpeg`}
                    alt={`Project ${item}`}
                    width={300}
                    height={200}
                  />
                  <CardTitle className="mt-4">Project {item}</CardTitle>
                  <CardDescription className="mt-2">
                    Description of project {item}. Highlighting key features and
                    technologies used.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <Card className="mt-4">
            <CardContent className="p-6">
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Next.js",
                  "React",
                  "Node.js",
                  "SQL",
                  "Git",
                  "REST API",
                ].map((skill) => (
                  <li key={skill} className="flex items-center">
                    <Badge variant="outline" className="mr-2 bg-green-500" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
