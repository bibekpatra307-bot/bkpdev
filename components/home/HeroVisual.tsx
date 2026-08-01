"use client";

import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const floatingIcons = [
  { text: "< />", top: "10%", left: "15%", delay: 0 },
  { text: "{}", top: "70%", left: "10%", delay: 1 },
  { text: "const", top: "80%", left: "25%", delay: 2 },
  { text: "function()", top: "20%", left: "80%", delay: 0.5 },
  { text: "API", top: "60%", left: "85%", delay: 1.5 },
  { text: "JSON", top: "40%", left: "90%", delay: 2.5 },
  { text: "SQL", top: "90%", left: "70%", delay: 0.8 },
  { text: "AI", top: "15%", left: "60%", delay: 1.2 },
  { text: "Cloud", top: "85%", left: "45%", delay: 0.3 },
  { text: "Docker", top: "30%", left: "5%", delay: 2.1 },
  { text: "React", top: "50%", left: "2%", delay: 1.1 },
  { text: "Terminal >", top: "10%", left: "40%", delay: 2.8 },
  { text: "Git", top: "25%", left: "20%", delay: 1.8 },
  { text: "GitHub", top: "75%", left: "85%", delay: 0.7 },
  { text: "Next.js", top: "65%", left: "15%", delay: 2.2 },
  { text: "TypeScript", top: "45%", left: "95%", delay: 0.4 },
  { text: "Node.js", top: "35%", left: "75%", delay: 1.9 },
  { text: "Python", top: "5%", left: "50%", delay: 0.6 },
  { text: "MongoDB", top: "95%", left: "50%", delay: 2.4 },
  { text: "Firebase", top: "12%", left: "85%", delay: 1.4 },
  { text: "GraphQL", top: "85%", left: "15%", delay: 0.9 },
  { text: "Cursor", top: "55%", left: "8%", delay: 2.7 },
];

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function HeroVisual() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    if (!initialized.current) {
      initialized.current = true;
      // timeout to avoid synchronous setState inside useEffect warning
      setTimeout(() => {
        setParticles(
          Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
          }))
        );
      }, 10);
    }
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-end items-center perspective-[1000px]">
      
      {/* 1. Background (radial glow & gradient) */}
      <div className="absolute inset-0 bg-[#0a0a0e]"></div>
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-80"
        animate={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen"></div>

      {/* 2. Grid (Animated Perspective) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-40 transform-gpu" style={{ transform: 'rotateX(60deg) scale(2.5) translateY(-20%)' }}></div>
      
      {/* Circuit Lines (Subtle SVG overlay) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-plus-lighter" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83v58.34h-58.34l-.83-.83V0h58.34zM27 16h6v4h-6v-4zm-8 8h22v4H19v-4zm0 8h22v4H19v-4zm-8 8h38v4H11v-4zm0 8h38v4H11v-4z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>

      {/* Noise Texture */}
      <div className="absolute inset-0  opacity-20 mix-blend-overlay"></div>

      {/* 3. Glowing Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: `0 0 ${p.size * 2}px rgba(96, 165, 250, 0.8)`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              x: mousePosition.x * (p.id % 2 === 0 ? 0.2 : -0.2),
            }}
            transition={{
              y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
              opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
              x: { type: "spring", stiffness: 20 },
            }}
          />
        ))}
      </div>

      {/* 4. Floating Code / Symbols */}
      {floatingIcons.map((icon, idx) => (
        <motion.div
          key={idx}
          className="absolute font-mono text-sm md:text-base font-medium text-slate-500/50 drop-shadow-[0_0_8px_rgba(59,130,246,0.1)] select-none whitespace-nowrap"
          style={{ top: icon.top, left: icon.left }}
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.1, 0.6, 0.1],
            rotate: [0, idx % 2 === 0 ? 5 : -5, 0],
            x: mousePosition.x * (idx % 2 === 0 ? 0.6 : -0.6),
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            y: { duration: 6 + (idx % 4), repeat: Infinity, ease: "easeInOut", delay: icon.delay },
            opacity: { duration: 5 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: icon.delay },
            rotate: { duration: 7 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: icon.delay },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: icon.delay },
            x: { type: "spring", stiffness: 30, damping: 25 }
          }}
        >
          {icon.text}
        </motion.div>
      ))}

      {/* 5. Technology Core Engine (Foreground/Bottom) */}
      <motion.div 
        className="relative z-0 mt-auto mb-[-150px] sm:mb-[-100px] h-[300px] w-full max-w-3xl flex justify-center items-center"
        animate={{ 
          x: mousePosition.x * -0.5,
          y: mousePosition.y * -0.5
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full flex justify-center items-center transform-gpu"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}
        >
          {/* Layered Platforms */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border border-blue-500/20 rounded-full shadow-[0_0_80px_rgba(59,130,246,0.15)] bg-blue-500/5 backdrop-blur-md"></div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-56 h-56 sm:w-72 sm:h-72 border border-dashed border-slate-500/30 rounded-full"
          ></motion.div>
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 border-2 border-t-blue-500/40 border-r-transparent border-b-transparent border-l-blue-400/20 rounded-full blur-[1px]"
          ></motion.div>

          <div className="absolute w-32 h-32 sm:w-40 sm:h-40 border border-blue-400/30 rounded-full shadow-[0_0_40px_rgba(59,130,246,0.2)] bg-slate-900/40"></div>

          {/* Central AI Core (Cube) */}
          <div className="absolute transform-gpu" style={{ transform: 'rotateX(-60deg)' }}>
            <div className="relative w-16 h-16 sm:w-24 sm:h-24">
              <div className="absolute inset-0 bg-blue-500 rounded-xl blur-[30px] opacity-70"></div>
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="relative w-full h-full bg-gradient-to-br from-blue-400/80 via-indigo-500/80 to-blue-600/80 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-200/50 backdrop-blur-xl flex items-center justify-center transform-gpu preserve-3d"
              >
                {/* Inner cube lines */}
                <div className="absolute inset-2 border border-blue-100/40 rounded-lg transform-gpu" style={{ transform: 'translateZ(10px)' }}></div>
                <div className="absolute inset-2 border border-blue-100/40 rounded-lg transform-gpu" style={{ transform: 'translateZ(-10px)' }}></div>
                <div className="w-6 h-6 border-2 border-white/80 rounded-md animate-pulse"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* 6. Foreground Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0e] to-transparent z-10"></div>
    </div>
  );
}
