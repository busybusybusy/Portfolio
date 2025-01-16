"use client";

interface ImageDialogProps {
  src: string;
  alt: string;
}

export function ImageDialog({ src, alt }: ImageDialogProps) {
  const openInNewTab = () => {
    window.open(src, '_blank');
  };

  return (
    <div 
      onClick={openInNewTab}
      className="cursor-pointer hover:opacity-80 transition-opacity"
    >
      <img
        src={src}
        alt={alt}
        className="rounded-lg border w-[600px] h-[400px] object-cover"
      />
    </div>
  );
}
