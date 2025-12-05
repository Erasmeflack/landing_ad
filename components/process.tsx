"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "We learn about your business, goals, and requirements."
    },
    {
      number: "2",
      title: "Design Phase",
      description: "Branding + UI/UX presented for review."
    },
    {
      number: "3",
      title: "Development & Integration",
      description: "Your site is built with clean code, best practices, and full responsiveness."
    },
    {
      number: "4",
      title: "Launch & Ongoing Support",
      description: "We deploy, test, and ensure everything works perfectly."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        A Clear, Stress-Free 4-Step Workflow
      </h2>
      
      {/* Single row grid for desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step card */}
            <Card className="border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] h-full">
              <CardBody className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF1CF7] to-[#b249f8] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-default-600">{step.description}</p>
              </CardBody>
            </Card>
            
            {/* Connector line between steps (desktop only) */}
            {index < steps.length - 1 && (
              <>
                {/* Mobile connector (vertical) */}
                <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-primary to-transparent"></div>
                
                {/* Desktop connector (horizontal) */}
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
              </>
            )}
          </div>
        ))}
      </div>
      
      <p className="text-2xl font-normal text-default-500 py-10 text-center">
        Simple. Transparent. Professional.
      </p>
    </div>
  );
}