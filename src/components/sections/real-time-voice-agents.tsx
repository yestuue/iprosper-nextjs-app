"use client";

import { Play, Pause } from "lucide-react";
import { useState } from "react";

const RealTimeVoiceAgents = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-[120px] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Perfect for real-time voice agents
          </h2>
          <p className="mt-4 text-lg text-[#a0a0a0] leading-[1.6]">
            Best-in-class pronunciations: Get complex phone numbers, addresses,
            and IDs right every time.
          </p>
        </div>

        {/* Animated Siri Widget */}
        <div className="relative w-full max-w-2xl flex items-center justify-center">
          <div className="siri-container relative flex items-center justify-center">
            {/* Glow Effect */}
            <div 
              className={`absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-opacity duration-500 ${
                isPlaying ? 'opacity-70' : 'opacity-30'
              }`}
              style={{
                background: `radial-gradient(
                  circle at center,
                  transparent 30%,
                  rgba(0, 245, 255, 0.1) 40%,
                  rgba(160, 32, 240, 0.1) 60%,
                  rgba(255, 20, 147, 0.1) 80%,
                  transparent 100%
                )`,
                animation: isPlaying ? 'glowPulse 6s ease-in-out infinite' : 'glowPulse 6s ease-in-out infinite paused'
              }}
            />
            
            {/* Floating Particles */}
            <div className="floating-particles absolute w-[600px] h-[600px] pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`particle absolute w-[3px] h-[3px] rounded-full transition-opacity duration-500 ${
                    isPlaying ? 'opacity-100' : 'opacity-40'
                  }`}
                  style={{
                    background: 'linear-gradient(45deg, #00f5ff, #a020f0)',
                    top: `${[10, 30, 70, 35, 50, 70][i]}%`,
                    left: i % 2 === 0 ? `${[20, 25, 25][Math.floor(i/2)]}%` : 'auto',
                    right: i % 2 === 1 ? `${[15, 20, 10][Math.floor(i/2)]}%` : 'auto',
                    animationDelay: `${i}s`,
                    animationDuration: `${6 + i}s`,
                    animation: isPlaying ? `float ${6 + i}s ease-in-out infinite` : `float ${6 + i}s ease-in-out infinite paused`
                  }}
                />
              ))}
            </div>
            
            {/* Outer Rings */}
            <div className="outer-rings absolute w-full h-full pointer-events-none">
              {[
                { size: 320, color: 'rgba(0, 245, 255, 0.6)', delay: 0 },
                { size: 380, color: 'rgba(160, 32, 240, 0.5)', delay: 1 },
                { size: 440, color: 'rgba(255, 20, 147, 0.4)', delay: 2 }
              ].map((ring, i) => (
                <div
                  key={i}
                  className={`ring absolute rounded-full border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ${
                    isPlaying ? '' : 'animation-play-state-paused'
                  }`}
                  style={{
                    width: `${ring.size}px`,
                    height: `${ring.size}px`,
                    borderColor: ring.color,
                    borderWidth: '1px',
                    animation: isPlaying ? `pulseRingOrganic 4s ease-in-out infinite` : `pulseRingOrganic 4s ease-in-out infinite paused`,
                    animationDelay: `${ring.delay}s`
                  }}
                />
              ))}
            </div>
            
            {/* Main Siri Circle */}
            <div 
              className={`siri-circle relative w-[280px] h-[280px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                isPlaying ? '' : 'animation-play-state-paused'
              }`}
              onClick={handlePlayClick}
              style={{
                animation: isPlaying ? 'breathe 4s ease-in-out infinite' : 'breathe 4s ease-in-out infinite paused'
              }}
            >
              {/* Rotating Border - Outer */}
              <div 
                className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-full -z-10"
                style={{
                  background: `conic-gradient(
                    from 0deg,
                    #00f5ff 0deg,
                    #a020f0 60deg,
                    #ff1493 120deg,
                    #00f5ff 180deg,
                    #a020f0 240deg,
                    #ff1493 300deg,
                    #00f5ff 360deg
                  )`,
                  animation: isPlaying ? 'rotate 8s linear infinite, morphCircle 4s ease-in-out infinite' : 'rotate 8s linear infinite paused, morphCircle 4s ease-in-out infinite paused'
                }}
              />
              
              {/* Rotating Border - Inner */}
              <div 
                className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-full -z-10"
                style={{
                  background: `conic-gradient(
                    from 180deg,
                    transparent 0deg,
                    rgba(0, 245, 255, 0.8) 60deg,
                    rgba(160, 32, 240, 0.8) 120deg,
                    rgba(255, 20, 147, 0.8) 180deg,
                    rgba(0, 245, 255, 0.8) 240deg,
                    rgba(160, 32, 240, 0.8) 300deg,
                    transparent 360deg
                  )`,
                  animation: isPlaying ? 'rotate 12s linear infinite reverse, morphCircle2 5s ease-in-out infinite' : 'rotate 12s linear infinite reverse paused, morphCircle2 5s ease-in-out infinite paused'
                }}
              />
              
              {/* Inner Circle */}
              <div 
                className="relative w-full h-full rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(
                    circle at center,
                    rgba(26, 26, 26, 0.95) 40%,
                    rgba(31, 31, 51, 0.98) 100%
                  )`,
                  boxShadow: `
                    inset 0 0 50px rgba(0, 245, 255, 0.1),
                    inset 0 0 100px rgba(160, 32, 240, 0.05)
                  `,
                  animation: isPlaying ? 'organicPulse 6s ease-in-out infinite' : 'organicPulse 6s ease-in-out infinite paused'
                }}
              >
                {/* Siri Text */}
                <div 
                  className="text-white text-2xl font-light tracking-[2px]"
                  style={{
                    textShadow: `
                      0 0 20px rgba(255, 255, 255, 0.8),
                      0 0 40px rgba(0, 245, 255, 0.6),
                      0 0 60px rgba(160, 32, 240, 0.4)
                    `,
                    animation: isPlaying ? 'textGlow 3s ease-in-out infinite alternate' : 'textGlow 3s ease-in-out infinite alternate paused'
                  }}
                >
                  Hi, What's up
                </div>
                
                {/* Play/Pause Button Overlay */}
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30 rounded-full backdrop-blur-sm"
                >
                  {isPlaying ? (
                    <Pause className="h-12 w-12 fill-white text-white" />
                  ) : (
                    <Play className="h-12 w-12 fill-white text-white ml-1" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature text grid */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-base leading-[1.6] text-[#a0a0a0] !whitespace-pre-line">
              <strong className="font-medium text-white">Low-latency.</strong>{" "}
              iProsper has the lowest latency of any AI voice model we have
              tested—meaning your voice agents can spend more time
              understanding, thinking, and acting on user inputs.
            </p>
          </div>
          <div>
            <p className="text-base leading-[1.6] text-[#a0a0a0] !whitespace-pre-line">
              <strong className="font-medium text-white">
                Best-in-class pronunciations.
              </strong>{" "}
              Get complex phone numbers, addresses, language's and IDs right
              every time.
            </p>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes morphCircle {
          0% {
            border-radius: 50%;
            transform: scale(1);
          }
          25% {
            border-radius: 45% 55% 40% 60%;
            transform: scale(1.1) rotate(90deg);
          }
          50% {
            border-radius: 35% 65% 55% 45%;
            transform: scale(0.9) rotate(180deg);
          }
          75% {
            border-radius: 60% 40% 35% 65%;
            transform: scale(1.15) rotate(270deg);
          }
          100% {
            border-radius: 50%;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes morphCircle2 {
          0% {
            border-radius: 50%;
            transform: scale(1);
          }
          20% {
            border-radius: 60% 40% 50% 50%;
            transform: scale(1.05);
          }
          40% {
            border-radius: 40% 60% 45% 55%;
            transform: scale(0.95);
          }
          60% {
            border-radius: 55% 45% 60% 40%;
            transform: scale(1.08);
          }
          80% {
            border-radius: 45% 55% 35% 65%;
            transform: scale(0.92);
          }
          100% {
            border-radius: 50%;
            transform: scale(1);
          }
        }

        @keyframes organicPulse {
          0%, 100% {
            border-radius: 50%;
            transform: scale(1);
          }
          33% {
            border-radius: 45% 55% 50% 50%;
            transform: scale(1.02);
          }
          66% {
            border-radius: 55% 45% 40% 60%;
            transform: scale(0.98);
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            filter: blur(0px);
            border-radius: 50%;
          }
          25% {
            transform: scale(1.03);
            filter: blur(0.2px);
            border-radius: 45% 55% 50% 50%;
          }
          50% {
            transform: scale(1.05);
            filter: blur(0.5px);
            border-radius: 40% 60% 45% 55%;
          }
          75% {
            transform: scale(1.02);
            filter: blur(0.3px);
            border-radius: 55% 45% 60% 40%;
          }
        }

        @keyframes textGlow {
          0% {
            text-shadow: 
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(0, 245, 255, 0.6),
              0 0 60px rgba(160, 32, 240, 0.4);
          }
          100% {
            text-shadow: 
              0 0 30px rgba(255, 255, 255, 1),
              0 0 60px rgba(0, 245, 255, 0.8),
              0 0 90px rgba(160, 32, 240, 0.6);
          }
        }

        @keyframes pulseRingOrganic {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
            border-radius: 50%;
          }
          25% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.5;
            border-radius: 45% 55% 50% 50%;
          }
          50% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
            border-radius: 40% 60% 45% 55%;
          }
          75% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.5;
            border-radius: 55% 45% 35% 65%;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
            border-radius: 50%;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.3;
            border-radius: 50%;
          }
          25% {
            transform: scale(1.0);
            opacity: 0.5;
            border-radius: 45% 55% 50% 50%;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
            border-radius: 40% 60% 45% 55%;
          }
          75% {
            transform: scale(1.1);
            opacity: 0.6;
            border-radius: 55% 45% 35% 65%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 1;
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
            opacity: 0.6;
          }
        }

        .animation-play-state-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default RealTimeVoiceAgents;