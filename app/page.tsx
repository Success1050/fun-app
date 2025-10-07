"use client";

import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/agreement");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center overflow-hidden">
      <div className="text-center p-8">
        <div className="w-[120px] h-[120px] mx-auto mb-8 bg-white rounded-[30px] flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] h-[70px]"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#667eea", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#764ba2", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="35" fill="url(#gradient)" />
            <path d="M 50 25 L 65 50 L 50 75 L 35 50 Z" fill="white" />
          </svg>
        </div>

        <h1 className="text-white text-5xl font-bold mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.2)]">
          Welcome
        </h1>

        <p className="text-white/90 text-xl mb-12 max-w-[500px] mx-auto">
          Your journey begins here. Let's get started and explore amazing
          possibilities together.
        </p>

        <button
          onClick={handleGetStarted}
          className="bg-white text-[#667eea] border-none px-12 py-4 text-lg font-semibold rounded-full cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.2)] uppercase tracking-wider hover:bg-[#f8f9ff] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] active:translate-y-[-1px] transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
