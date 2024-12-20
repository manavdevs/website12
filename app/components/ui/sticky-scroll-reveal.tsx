"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type ContentItem = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: ContentItem[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [selectedRadio, setSelectedRadio] = useState<string | null>(null); // Store selected radio button value
  const [textFieldValue, setTextFieldValue] = useState<string>(""); // Store text field value
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--indigo-500)", "var(--indigo-500)", "var(--indigo-500)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedRadio) {
      alert("Please select an option!");
      return;
    }

    // Prepare form data
    const formData = new FormData();
    formData.append("entry.1237064539", selectedRadio); // Radio button value
    formData.append("entry.198466907", textFieldValue); // Text field value

    // Submit form to Google Forms
    fetch(
      "https://docs.google.com/forms/d/15Gy1IDqipQ3soiqzfl2FMeeXjJnCl9YNRS7WHxh08h4/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // Prevent CORS issues
      }
    )
      .then(() => {
        alert("Form submitted successfully!");
        setSelectedRadio(null); // Reset radio button
        setTextFieldValue(""); // Reset text field
      })
      .catch((err) => {
        console.error("Form submission error:", err);
        alert("Failed to submit the form. Please try again.");
      });
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <form onSubmit={handleSubmit}> {/* Wrap the button with the form */}
        <div className="relative flex items-start px-4">
          <div className="max-w-2xl">
            {/* Content for each card */}
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
  
                {/* Radio Button for each card */}
                <div className="mt-5">
                  <input
                    type="radio"
                    id={`radio-${index}`}
                    name="transport-options"
                    value={item.title} // Value for the radio button
                    className="mr-2"
                    onChange={(e) => setSelectedRadio(e.target.value)} // Update selected radio
                    checked={selectedRadio === item.title}
                  />
                  <label htmlFor={`radio-${index}`} className="text-slate-300">
                    Select {item.title}
                  </label>
                </div>
  
                {/* Text field for the last card */}
                {index === content.length - 1 && (
                  <div className="mt-5">
                    <textarea
                      id="last-card-text"
                      className="w-full p-2 rounded-md bg-slate-800 text-slate-100"
                      placeholder="Vroom?"
                      value={textFieldValue}
                      onChange={(e) => setTextFieldValue(e.target.value)} // Update text field value
                    />
                  </div>
                )}
              </div>
            ))}
            <div className="h-[5rem]" />
            {/* Submit button */}
            <div className="mt-[1rem]">
              <button
                type="submit" // This will trigger the form submission
                className="px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-indigo-500"
              >
                God Speed Batman
              </button>
            </div>
          </div>
        </div>
      </form>
  
      {/* Content box on the right side */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
