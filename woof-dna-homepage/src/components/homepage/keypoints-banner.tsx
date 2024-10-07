import { Beaker, Bone, Dna, FileText, PawPrint } from "lucide-react";
import React from "react";

export const KeypointsBanner = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-around">
          <div className="text-center">
            <Beaker className="h-12 w-12 mx-auto text-emerald-600" />
            <span className="text-emerald-700">Insights</span>
          </div>
          <div className="text-center">
            <Dna className="h-12 w-12 mx-auto text-emerald-600" />
            <span className="text-emerald-700">Breed ID</span>
          </div>
          <div className="text-center">
            <FileText className="h-12 w-12 mx-auto text-emerald-600" />
            <span className="text-emerald-700">Traits</span>
          </div>
          <div className="text-center">
            <PawPrint className="h-12 w-12 mx-auto text-emerald-600" />
            <span className="text-emerald-700">Relatives</span>
          </div>
          <div className="text-center">
            <Bone className="h-12 w-12 mx-auto text-emerald-600" />
            <span className="text-emerald-700">Health</span>
          </div>
        </div>
      </div>
    </section>
  );
};
