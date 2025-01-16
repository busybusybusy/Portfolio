"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface MagicCardProps {
  text: string;
  subtext: string;
  className?: string;
}

export function MagicCard({ 
  text, 
  subtext,
  className = ""
}: MagicCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative h-32 w-full overflow-hidden rounded-xl border bg-[#91C5DC] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col justify-center p-6 text-left">
        <h1 className="text-2xl font-bold text-black">{text}</h1>
        <h2 className="text-sm text-black/70">{subtext}</h2>
      </div>
    </motion.div>
  );
} 