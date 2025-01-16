'use client';

import { BlurFade } from "@/components/magicui/blur-fade-text";
import { ExperienceEducation } from "@/components/experience-education";
import { PrinciplesSection } from "@/components/principles-section";
import { DATA } from "@/data/resume";
import { CurrentProject } from "@/components/current-project";
import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const BLUR_FADE_DELAY = 0.1;

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10 p-4">
      {/* Header section */}
      <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
        <header className="w-full max-w-[800px] mx-auto">
          <h1 className="text-4xl font-bold mb-2">{DATA.name}</h1>
          <p className="text-gray-600 mb-4 font-semibold">{DATA.email}</p>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="whitespace-pre-line text-gray-600">{DATA.summary}</p>
          </div>
        </header>
      </BlurFade>

      {/* Map Image with Modal */}
      {BlurFade && (
        <BlurFade delay={BLUR_FADE_DELAY * 0.5}>
          <section className="w-full max-w-[800px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">Life Experience</h2>
            <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
              <Image
                src="/map.png"
                alt="Map"
                width={800}
                height={400}
                className="rounded-lg hover:opacity-90 transition-opacity"
                objectFit="cover"
              />
            </div>
          </section>
        </BlurFade>
      )}

      {/* Modal for enlarged map */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>Map showing global experience</DialogTitle>
          </DialogHeader>
          <Image
            src="/map.png"
            alt="Map showing global experience"
            layout="responsive"
            width={1920}
            height={1080}
            className="rounded-lg"
            objectFit="contain"
          />
        </DialogContent>
      </Dialog>

      {/* Experience and Education section */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <ExperienceEducation />
      </BlurFade>

      {/* Principles section */}
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <PrinciplesSection />
      </BlurFade>

      {/* Current Project section - moved to bottom */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <section className="w-full max-w-[800px] mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <CurrentProject />
          </div>
        </section>
      </BlurFade>

      {/* Footer */}
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <footer className="w-full max-w-[800px] mx-auto">
          <div className="border-t border-gray-200 pt-6">
            <p className="text-center text-gray-600">
              {new Date().getFullYear()} - Austin, Texas, USA
            </p>
          </div>
        </footer>
      </BlurFade>
    </div>
  );
}
