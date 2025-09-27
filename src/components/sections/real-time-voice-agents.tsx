"use client";

import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

const RealTimeVoiceAgents = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-[120px] px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Perfect for real-time voice agents
          </h2>
          <p className="mt-4 text-lg text-[#a0a0a0] leading-[1.6]">
            Best-in-class pronunciations: Get complex phone numbers, addresses,
            and IDs right every time.
          </p>
        </div>

        <div className="relative w-full max-w-2xl rounded-xl overflow-hidden cursor-pointer group">
          {/* Pulsating soundwave effects - only show when playing */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
              <div className="absolute w-32 h-32 border-2 border-blue-400/40 rounded-full animate-ping"></div>
              <div className="absolute w-48 h-48 border-2 border-purple-400/30 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute w-64 h-64 border-2 border-cyan-400/25 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
              <div className="absolute w-80 h-80 border-2 border-orange-400/20 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
              <div className="absolute w-96 h-96 border-2 border-pink-400/15 rounded-full animate-ping" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute w-[28rem] h-[28rem] border-2 border-green-400/10 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          )}
          
          <div className="w-full aspect-[21/9]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/7faa4423-29cc-4b27-a117-d33c42640a6e/generated_images/professional-studio-microphone-centered--1fc45904-20250907120623.jpg?"
              alt="Professional studio microphone with pulsating soundwaves"
              fill
              className="object-cover"
            />
          </div>

           {/* === Added iframe widget === */}
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <iframe
      id="audio_iframe"
      src="https://voiceagents.tech//widget/v2/8b28518f-ba4f-4083-b282-8dbd0a00c7ab/1758814938820x190350333809891300"
      allow="microphone"
      width="400"
      height="550"
      scrolling="no"
      style={{ background: "transparent", border: "none" }}
    ></iframe>
  </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button
              onClick={handlePlayClick}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 hover:bg-black/70"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 fill-white text-white" />
              ) : (
                <Play className="h-8 w-8 fill-white text-white ml-1" />
              )}
            </button>
          </div>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-base leading-[1.6] text-[#a0a0a0] !whitespace-pre-line">
              <strong className="font-medium text-white">Low-latency.</strong>{" "} iProsper has the lowest latency of any AI voice model we have tested—meaning your voice agents can spend more time understanding, thinking, and acting on user inputs.



            </p>
          </div>
          <div>
            <p className="text-base leading-[1.6] text-[#a0a0a0] !whitespace-pre-line">
              <strong className="font-medium text-white">
                Best-in-class pronunciations.
              </strong>{" "} Get complex phone numbers, addresses, language's and IDs right every time.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeVoiceAgents;