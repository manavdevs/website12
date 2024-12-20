"use client";
import { cn } from "../../lib/utils";
import { useRouter } from "next/navigation"; // Import useRouter

export function CardDemo3() {
  const router = useRouter(); // Initialize the router

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission to handle it via JS

    // Here, you can add custom handling (e.g., submitting data via fetch) if needed
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Submit to Google Forms
    fetch(form.action, {
      method: form.method,
      body: formData,
      mode: 'no-cors',
      headers: {
        "Accept": "application/json",
      },
    })
      .then(() => {
        // After successful submission, navigate to the next page in your app
        router.push('/FocusCardDemo'); // Replace with your desired route
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="max-w-xs w-full">
      <div
        className={cn("group w-full cursor-pointer overflow-hidden relative card3 h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
        "bg-[url('/Images/other.jpg')] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url('/Images/stupid.gif')] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url('/Images/stupid.gif')]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
  )}
      >
        <h1 className="font-bold text-xl md:text-3xl text-[#E73895] relative mt-4">
          Other
        </h1>

        {/* Add a wrapper for the form to ensure it's above the hover effect */}
        <div className="relative z-10">
          <form
            action="https://docs.google.com/forms/u/0/d/1_rfEGk87CMCMKAwQsmyK-AE4Vt-EELpOMr0GNeJMgh0/formResponse"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Gender"
              name="entry.620451972"
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E73895]"
            />
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-[#E73895] text-white font-bold rounded-md hover:bg-pink-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
