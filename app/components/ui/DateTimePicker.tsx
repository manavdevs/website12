'use client';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-clock/dist/Clock.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import { BackgroundLines } from "./background-lines";

const DateTimePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("12:00");

  // Handle Date Change
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  // Handle Time Change
  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

  // Handle Submit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }

    // Extract Date Components
    const month = selectedDate.getMonth() + 1; // Month is 0-indexed
    const day = selectedDate.getDate();
    const year = selectedDate.getFullYear();

    // Extract Time Components
    const [hours, minutes] = selectedTime.split(":").map(Number);

    // Prepare form data
    const formData = new FormData();
    formData.append("entry.1128381855_month", String(month)); // Month
    formData.append("entry.1128381855_day", String(day)); // Day
    formData.append("entry.1128381855_year", String(year)); // Year
    formData.append("entry.1363005302_hour", String(hours)); // Hour
    formData.append("entry.1363005302_minute", String(minutes)); // Minute

    // Submit form to Google Forms
    fetch(
      "https://docs.google.com/forms/d/1e-tvH2VG7t46l6V063oxXjZ09x4_uWZu9SqGK3xRYcg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // To avoid CORS issues
      }
    )
      .then(() => {
        console.log("Form submitted successfully!");
        setSelectedDate(new Date()); // Reset date picker
        setSelectedTime("12:00"); // Reset time picker
      })
      .catch((err) => {
        console.error("Form submission error:", err);
        console.log("Failed to submit the form. Please try again.");
      });
      setTimeout(() => {
        window.location.href = "/YesPage"; // Adjust redirection as needed
      }, 3000);
  };

  return (
      <div
        className="flex min-h-screen bg-center"
        style={{ backgroundImage: "url('/Images/first.jpg')" }}
      >
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="Images/left.png"
            alt="Left Image"
            className="mt-[10rem] w-[22rem] h-[28rem] object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center gap-8 w-96 mx-auto">
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <label
              htmlFor="date-picker"
              className="block mb-4 text-lg font-semibold text-gray-700"
            >
              Pick a Date:
            </label>
            <DatePicker
              id="date-picker"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>

          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <label
              htmlFor="time-picker"
              className="block mb-4 text-lg font-semibold text-gray-700"
            >
              what Time is milady available:
            </label>
            <TimePicker
              id="time-picker"
              value={selectedTime}
              onChange={handleTimeChange}
              disableClock={false}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Book your day
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="Images/right.png"
            alt="Right Image"
            className="mt-[8rem] w-[32rem] h-[32rem] object-cover"
          />
        </div>
      </div>
  );
};

export default DateTimePicker;
