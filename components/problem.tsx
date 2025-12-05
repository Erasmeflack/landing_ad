"use client";

import React from "react";
import { WarningTriangleIcon } from "@/components/icons";

export default function Problem() {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-full mx-auto px-1">
        <h2 className="text-2xl font-normal text-gray-500 py-4 text-left">
          Une présence en ligne faible vous fait perdre des clients chaque jour.
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold py-4 text-left">
          Est-ce que vous vous reconnaissez ?
        </h1>
        <ul className="mt-6 space-y-4 text-gray-600 dark:text-gray-300 text-left">
          <li className="flex items-start gap-3">
            <WarningTriangleIcon 
              className="text-yellow-500 mt-1 flex-shrink-0" 
              size={20} 
            />
            <span>Votre site est dépassé ou peu professionnel</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon 
              className="text-yellow-500 mt-1 flex-shrink-0" 
              size={20} 
            />
            <span>Les clients ont du mal à naviguer ou à vous contacter</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon 
              className="text-yellow-500 mt-1 flex-shrink-0" 
              size={20} 
            />
            <span>Votre branding est incohérent</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon 
              className="text-yellow-500 mt-1 flex-shrink-0" 
              size={20} 
            />
            <span>Votre site est lent ou non responsive</span>
          </li>
          <li className="flex items-start gap-3">
            <WarningTriangleIcon 
              className="text-yellow-500 mt-1 flex-shrink-0" 
              size={20} 
            />
            <span>
              Vous avez essayé des freelances mais la qualité n&apos;était pas au
              rendez-vous
            </span>
          </li>
        </ul>
        <h2 className="text-2xl font-normal text-gray-500 py-10 text-center">
          Votre entreprise mérite mieux, vos clients aussi.
        </h2>
      </div>
    </div>
  );
}