"use client";
import { useState } from "react";
import { cn } from "../../lib/utils";

export function CardDemo3() {
  const [inputText, setInputText] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  // Backend URL (replace with your Google Apps Script URL)
  const GOOGLE_SHEET_BACKEND_URL =
    "https://script.google.com/macros/s/AKfycbwhrzr1pT50hpWc06F201kNEI9-U7HxSbW5mkGX3bm1xUJf1yVJY6Oft4QRhu21QRMo/exec";

  const handleSubmit = async () => {
    if (!inputText) {
      setStatusMessage("Please enter some text!");
      return;
    }

    try {
      const response = await fetch(GOOGLE_SHEET_BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputText }),
      });

      const result = await response.json();
      if (result.status === "success") {
        setStatusMessage("Data saved successfully!");
        setInputText(""); // Clear the input field
      } else {
        setStatusMessage("Failed to save data.");
      }
    } catch (error) {
      setStatusMessage("Error: Unable to connect to the server.");
    }
  };

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card3 h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
          "hover:bg-[url('/Images/stupid.gif')]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-[#E73895] relative">
            Other
          </h1>
          <input
            type="text"
            placeholder="Enter text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73895]"
          />
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 bg-[#E73895] text-white font-bold rounded-md hover:bg-pink-700 transition"
          >
            Submit
          </button>
          {statusMessage && (
            <p className="mt-2 text-sm text-gray-50">{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}
