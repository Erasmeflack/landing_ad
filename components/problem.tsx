"use client";

import React from "react";

import { WarningTriangleIcon } from "@/components/icons";

export default function Problem() {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-full mx-auto px-2">
        <p className="text-base md:text-lg text-gray-500 py-2 text-center">
          Une présence en ligne faible vous fait perdre des clients chaque jour.
        </p>
        <h3 className="text-lg md:text-xl font-semibold py-3 text-center">
          Vous vous reconnaissez ?
        </h3>
        <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300 text-left max-w-2xl mx-auto">
          <li className="flex items-start gap-3">
            <WarningTriangleIcon
              className="text-yellow-500 mt-0.5 flex-shrink-0"
              size={18}
            />
            <span className="text-sm md:text-base">Votre site est dépassé ou peu professionnel</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon
              className="text-yellow-500 mt-0.5 flex-shrink-0"
              size={18}
            />
            <span className="text-sm md:text-base">Les clients ont du mal à naviguer ou à vous contacter</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon
              className="text-yellow-500 mt-0.5 flex-shrink-0"
              size={18}
            />
            <span className="text-sm md:text-base">Votre branding est incohérent ou inexistant</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon
              className="text-yellow-500 mt-0.5 flex-shrink-0"
              size={18}
            />
            <span className="text-sm md:text-base">Votre site est lent ou mal adapté au mobile</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon
              className="text-yellow-500 mt-0.5 flex-shrink-0"
              size={18}
            />
            <span className="text-sm md:text-base">
              Vous avez essayé des freelances sans résultat satisfaisant
            </span>
          </li>
        </ul>
        <p className="text-base md:text-lg text-gray-500 py-6 text-center font-medium">
          Votre entreprise mérite mieux. Vos clients aussi.
        </p>
      </div>
    </div>
  );
}
