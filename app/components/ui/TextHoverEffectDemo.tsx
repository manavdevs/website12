'use client'; // Ensure the page is client-side only

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { CardDemo1 } from "../ui/Cards";
import { CardDemo2 } from "../ui/Cards2";
import { CardDemo3 } from "../ui/Cards3";

const Loading = () => <div>Loading...</div>;

export default function TextHoverEffectDemo() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const usernameParam = searchParams.get('username');
    if (usernameParam) {
      setUsername(usernameParam);
    }
  }, [searchParams]);

  return (
    <Suspense fallback={<Loading />}>
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