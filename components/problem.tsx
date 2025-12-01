"use client";

import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function Problem() {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-3xl mx-auto px-6">
        <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300 list-disc pl-5">
          <li>Site dépassé ou non professionnel</li>
          <li>Navigation confuse → taux de rebond élevé</li>
          <li>Branding incohérent</li>
          <li>Temps de chargement trop long</li>
        </ul>
      </div>
    </div>
  );
}
