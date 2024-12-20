'use client';
import React from "react";
import DateTimePicker from "../components/ui/DateTimePicker";

const Home: React.FC = () => {
  const handleDateTimeChange = (dateTime: Date) => {
    console.log("Selected DateTime:", dateTime);
  };

  return (
    <div>
        <div>
      <DateTimePicker onDateTimeChange={handleDateTimeChange} />

    </div>
    </div>
  );
};

export default Home;
