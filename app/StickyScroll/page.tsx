'use client';
import React, { useState } from "react";
import { StickyScroll } from "../../app/components/ui/sticky-scroll-reveal"; // Make sure this import path is correct
import Image from "next/image";
import { BackgroundBeams } from "../components/ui/background-beams";

// Define the content data
const content = [
  {
    title: "Two Wheeler",
    description: "Take Key insert key in vehicle and go vroomm into the night sky",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/two.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Four Wheeler(driver: Sister(no one trust me with car))",
    description:
      "Due to unavailability of car I have to beg my sister to drive her car. She's young, won't interfere in our shenanigans and makes sure everything is under control Also can act as a sign for comfortable surrounding",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/four.gif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cab from your place",
    description: "Can Work as well if you like",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/cab.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Other",
    description: "Any Other Way you'd like",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Images/other3.gif"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function StickyScrollRevealDemo() {
  const [address, setAddress] = useState(""); // Address field
  const [lastCardText, setLastCardText] = useState(""); // Text field for the last card

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append("entry.944032297", lastCardText); // Last card text field
    formData.append("entry.2002563136", address); // Address field

    // Send data to Google Forms
    fetch(
      "https://docs.google.com/forms/d/15Gy1IDqipQ3soiqzfl2FMeeXjJnCl9YNRS7WHxh08h4/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then(() => {
        console.log("Data submitted successfully!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    // Redirect or trigger next steps
    setTimeout(() => {
      window.location.href = "/DateandTime"; // Adjust redirection as needed
    }, 3000);
  };

  return (
    
    <div
      className="min-h-screen bg-fixed bg-center p-10 bg-neutral-950"
    >
      <BackgroundBeams/>
      {/* Page Heading */}
      <h1 className="text-center text-4xl font-bold text-white mb-10">
        How does milady wants to go?
      </h1>

      {/* Sticky Scroll Section */}
      <StickyScroll content={content} />

      {/* Additional content */}
      <div className="mt-10 space-y-8">
        {/* First Text Card */}
        <div className="bg-[#E73895] text-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Any Special request for me</h2>
          <input
            type="text"
            placeholder=":)"
            value={lastCardText}
            onChange={(e) => setLastCardText(e.target.value)}
            className="w-full p-3 rounded-md border border-indigo-600 bg-[#E73895] text-white focus:outline-none focus:ring-2 focus:ring-[#DA70D6]"
          />
        </div>

        {/* Second Text Card */}
        <div className="bg-[#E73895] text-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Address</h2>
          <input
            type="text"
            placeholder=":)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 rounded-md border border-indigo-600 bg-[#E73895] text-white focus:outline-none focus:ring-2 focus:ring-[#DA70D6]"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-md"
        >
          Yassssss
        </button>
      </div>
    </div>
  );
}
