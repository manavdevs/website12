"use client";
import { cn } from "../../lib/utils";

export function CardDemo1() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card1 h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url('/Images/cat.jpg')] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url('/Images/female.gif')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url('/Images/female.gif')]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-[#E73895] relative">
            Wife Material
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            
          </p>
        </div>
      </div>
    </div>
  );
}
