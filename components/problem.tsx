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

const Problem: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Problem & Pain Points */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            Vos clients sont en ligne — votre site doit les convaincre
          </h3>
          <p className="mt-4 text-gray-600">
            Un site lent, mal structuré ou avec une identité faible coûte des prospects et nuit à votre image de marque.
          </p>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>• Site dépassé ou non professionnel</li>
            <li>• Navigation confuse → taux de rebond élevé</li>
            <li>• Branding incohérent</li>
            <li>• Temps de chargement trop long</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;