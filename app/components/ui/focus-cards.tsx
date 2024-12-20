"use client";
import React from "react";
import { cn } from "../../lib/utils";

export const FocusCards = React.memo(
  ({
    cards,
    hovered,
    setHovered,
    handleInputChange,
    handleCheckboxChange,
    cardStates,
  }: {
    cards: { title: string; src: string; inputValue?: string; isChecked?: boolean }[];
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    handleInputChange: (index: number, value: string) => void;
    handleCheckboxChange: (index: number, checked: boolean) => void;
    cardStates: { isChecked: boolean; inputValue: string }[];
  }) => (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/Images/bg2.jpg')" }} // Background image URL
    >
      {/* Page Heading */}
    <div className="flex flex-col items-center justify-center">
      {/* Page Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        Select Your Activities
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-20 ml-[10rem]">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "object-cover relative rounded-lg overflow-hidden w-[22rem] h-[22rem] md:h-[22rem] mt-2 transition-all duration-300 ease-out bg-gray-100 dark:bg-neutral-900",
              hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.src})`,
              }}
            />
            <div
              className={cn(
                "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
              </div>
            </div>

            {/* Checkbox for each card */}
            <div
              className={cn(
                "absolute bottom-4 ml-[18rem] mb-12 bg-white/80 text-black p-5 rounded-md flex items-center space-x-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={cardStates[index].isChecked}
                  onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                  className="w-4 h-4"
                />
              </div>
            </div>

            {/* Additional Text Field and Checkbox exclusively for the 5th card */}
            {index === 4 && (
              <div
                className={cn(
                  "absolute bottom-4 ml-4 mb-12 bg-white/80 text-black p-4 rounded-md flex items-center space-x-2 transition-opacity duration-300",
                  hovered === index ? "opacity-100" : "opacity-0"
                )}
              >
                <input
                  type="text"
                  placeholder="Enter text here..."
                  value={cardStates[index].inputValue || ""}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  className="w-full bg-transparent border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
);

FocusCards.displayName = "FocusCards";
