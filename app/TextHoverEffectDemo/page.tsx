'use client';
import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import { CardDemo1 } from "../components/ui/Cards";
import { CardDemo2 } from "../components/ui/Cards2";
import { CardDemo3 } from "../components/ui/Cards3";

export default function TextHoverEffectDemo() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const usernameParam = searchParams.get('username');
    if (usernameParam) {
      setUsername(usernameParam);
    }
  }, [searchParams]);

  if (!username) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="h-[12rem] flex items-center justify-center">
        <TextHoverEffect text={`Greetings ${username}!`} />
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
    </>
  );
}