'use client';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    // Check if username and password are entered
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    // Validate password
    if (password === "031203") {
      router.push(`/TextHoverEffectDemo?username=${encodeURIComponent(username)}`); // Navigate to the dashboard
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/Images/bg.jpg")' }}
    >
      <div className="bg-[#E73895] p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#9932CC]">Let Me In!!!</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-[#9932CC] font-semibold mb-2">
              Your Lovely Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#E73895]"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-[#9932CC] font-semibold mb-2">
              Your Birth date
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#E73895]"
              placeholder=":)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#E65290] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#F7D1E2] transition"
          >
            Nyaaaaaaaaaa!
          </button>
        </form>
      </div>
    </div>
    
  );
}
