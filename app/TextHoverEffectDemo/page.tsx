// app/TextHoverEffectDemo/page.tsx

'use client';

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import { CardDemo1 } from "../components/ui/Cards";
import { CardDemo2 } from "../components/ui/Cards2";
import { CardDemo3 } from "../components/ui/Cards3";

const useSearchParamsWithSuspense = async () => {
  const searchParams = useSearchParams();
  const usernameParam = searchParams.get('username');
  return new Promise<string | null>((resolve) => {
    setTimeout(() => resolve(usernameParam), 1000); // Mock delay
  });
};

export default function TextHoverEffectDemo() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsername = async () => {
      const usernameParam = await useSearchParamsWithSuspense();
      setUsername(usernameParam);
    };
    fetchUsername();
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-[12rem] flex items-center justify-center">
        <TextHoverEffect text={`Greetings ${username || "Guest"}!`} />
      </div>
      <div className="flex gap-8 px-4 justify-center mb-8">
        <p className="text-[#E73895] font-bold text-2xl md:text-3xl text-center">
          What is your gender?
        </p>
      </div>
      <div className="flex gap-8 px-4 justify-center">
        <CardDemo1 />
        <CardDemo2 />
        <CardDemo3 />
      </div>
    </Suspense>
  );
}
