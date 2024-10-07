"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Some action");
  };
  return (
    <section className="py-12 bg-emerald-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated on Dog DNA Discoveries
        </h2>
        <p className="mb-6">
          Join our newsletter for the latest insights into canine genetics and
          health.
        </p>
        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          onSubmit={handleSubmitForm}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => void setEmail(e.target.value)}
            placeholder="Enter your email"
            className="max-w-sm bg-white text-emerald-800"
          />
          <Button type="submit" variant="main">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};
