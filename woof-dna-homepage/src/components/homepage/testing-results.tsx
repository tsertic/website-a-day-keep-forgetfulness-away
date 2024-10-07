import Image from "next/image";
import React from "react";
import { Progress } from "../ui/progress";

export const TestingResults = () => {
  return (
    <section className="py-12 bg-emerald-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-emerald-800 mb-8">
          DNA Testing Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">
              Breed Results
            </h3>
            <div className="flex justify-center">
              <CircularProgress
                value={37}
                max={100}
                title="Breeds"
                color="text-emerald-500"
              />
            </div>
            <p className="mt-4 text-gray-600">
              Detailed breed composition analysis based on genetic markers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">
              Health Insights
            </h3>
            <div className="flex justify-center">
              <CircularProgress
                value={39}
                max={100}
                title="Health Markers"
                color="text-blue-500"
              />
            </div>
            <p className="mt-4 text-gray-600">
              Comprehensive health screening for genetic predispositions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4">
              Trait Analysis
            </h3>
            <div className="flex justify-around items-center space-x-4">
              <Image
                src="/dog-smile.png"
                alt="Dog portrait"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="space-y-2">
                <div>
                  <span className="text-sm text-gray-600">Coat Type:</span>
                  <Progress value={75} className="h-2 w-32 " />
                </div>
                <div>
                  <span className="text-sm text-gray-600">Size:</span>
                  <Progress value={60} className="h-2 w-32" />
                </div>
                <div>
                  <span className="text-sm text-gray-600">Energy:</span>
                  <Progress value={90} className="h-2 w-32" />
                </div>
              </div>
            </div>
            <p className="mt-8 text-gray-600">
              In-depth analysis of physical and behavioral traits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function CircularProgress({
  value,
  max,
  title,
  color,
}: {
  value: number;
  max: number;
  title: string;
  color: string;
}) {
  const percentage = (value / max) * 100;
  const strokeDasharray = `${percentage} ${100 - percentage}`;
  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        <circle
          className={`${color} stroke-current`}
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="25"
        ></circle>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-emerald-700">{value}</span>
        <span className="text-sm text-emerald-600">{title}</span>
      </div>
    </div>
  );
}
