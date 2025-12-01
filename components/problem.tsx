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
    <div className="inline-block max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        

        <ul className="mt-6 space-y-3 text-white-600">
          <li>• Site dépassé ou non professionnel</li>
          <li>• Navigation confuse → taux de rebond élevé</li>
          <li>• Branding incohérent</li>
          <li>• Temps de chargement trop long</li>
        </ul>
      </div>
    </div>
  );
}
