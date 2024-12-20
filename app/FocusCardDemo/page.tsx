"use client";
import { FocusCards } from "../../app/components/ui/focus-cards"; // Import the FocusCards component
import React, { useState } from "react";

export default function FocusCardsDemo() {
  const cards = [
    { title: "Getting Nails Done", src: "/Images/nails.jpg" },
    { title: "Bowling", src: "/Images/bowling.jpg" },
    { title: "Food", src: "/Images/food.jpg" },
    { title: "Shopping", src: "/Images/shopping.jpg" },
    { title: "Other (Specify)", src: "/Images/other2.jpg" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  // State for handling the checkbox and text field changes
  const [cardStates, setCardStates] = useState(
    cards.map(() => ({ isChecked: false, inputValue: "" }))
  );

  // Handle input changes in the text field (for card 5)
  const handleInputChange = (index: number, value: string) => {
    const updatedStates = [...cardStates];
    updatedStates[index].inputValue = value;
    setCardStates(updatedStates);
  };

  // Handle checkbox changes
  const handleCheckboxChange = (index: number, checked: boolean) => {
    const updatedStates = [...cardStates];
    updatedStates[index].isChecked = checked;
    setCardStates(updatedStates);
  };

  // Submit form data to Google Forms
  const handleSubmit = () => {
    const formData = new FormData();

    // Map the checkbox state to Google Forms keys
    const formKeys = [
      "Nails",
      "Bowling",
      "Food",
      "Shopping",
      "Other",
    ];

    cardStates.forEach((state, index) => {
      if (state.isChecked) {
        formData.append("entry.1036187455", formKeys[index]);
      }
    });

    // Append the input value for the 5th card
    if (cardStates[4].inputValue) {
      formData.append("entry.1039238286", cardStates[4].inputValue);
    }

    // Send data to Google Forms
    fetch(
      "https://docs.google.com/forms/u/0/d/1nWve_qPHxPuEElowCZn6l5f6cWydgEACqq2-B0LtHVE/formResponse",
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
      setTimeout(() => {
        window.location.href = "/StickyScroll"; // Replace with the next page URL
      }, 3000);
  
  };

  return (
    <div className="relative">
      <FocusCards
        cards={cards}
        hovered={hovered}
        setHovered={setHovered}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        cardStates={cardStates}
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="fixed bottom-8 right-8 px-6 py-2 bg-pink-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
      >
        Wanttttttt!!
      </button>
    </div>
  );
}
