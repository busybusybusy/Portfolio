"use client";

import { useState } from "react";

interface ImageDialogProps {
  src: string;
  alt: string;
}

export function ImageDialog({ src, alt }: ImageDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Thumbnail */}
      <div
        onClick={handleOpen}
        className="cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img
          src={src}
          alt={alt}
          className="rounded-lg border w-[600px] h-[400px] object-cover"
        />
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-[hsl(var(--background))] bg-opacity-80"
          onClick={handleClose}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full rounded-lg border border-[hsl(var(--border))]"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[hsl(var(--foreground))] text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
