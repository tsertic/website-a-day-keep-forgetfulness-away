import React from "react";

export const HowWoofDnkWorks = () => {
  const steps = [
    "Order your Woof DNA kit online",
    "Receive your kit in the mail",
    "Collect a saliva sample from your dog using the provided swab",
    "Register your kit online using the unique code",
    "Mail the sample back to our lab using the prepaid envelope",
    "Our scientists analyze your dog's DNA",
    "Receive comprehensive results about your dog's breed, health, and traits",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-emerald-800 mb-8 text-center">
          How Woof DNA Works
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-lg text-emerald-800">{step}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50">
              Get Your Woof DNA Kit Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
