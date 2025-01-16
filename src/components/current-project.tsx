"use client";

import React from 'react';

interface TechStackItemProps {
  technology: string;
  description: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ technology, description }) => (
  <div className="flex items-center space-x-2">
    <span className="font-medium">{technology}</span>
    <span className="text-gray-500">- {description}</span>
  </div>
);

export const CurrentProject: React.FC = () => {
  const openGovConMaker = () => {
    window.open('https://govconmaker.com', '_blank');
  };

  return (
    <section className="w-full max-w-[800px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Current Project</h2>
      
      <div className="bg-blue-400 rounded-xl p-6 shadow-sm">
        <div 
          onClick={openGovConMaker}
          className="bg-white rounded-lg overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="w-full">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full"
            >
              <source src="/five.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold">GovConMaker</h3>
        <p className="text-gray-600">Nov 2024 - Present</p>
        <p className="text-gray-700">Generate government contracting documents with multimodal ai chats.</p>
        
        {/* Tech Stack */}
        <div className="space-y-2">
          <TechStackItem technology="Next.js" description="Web Framework" />
          <TechStackItem technology="Typescript" description="Programming Language" />
          <TechStackItem technology="Stripe" description="Payment Processing" />
          <TechStackItem technology="Supabase" description="Authentication, Storage, and Database" />
          <TechStackItem technology="Claude.ai" description="AI Chat" />
          <TechStackItem technology="Cursor" description="AI Code Editor" />
        </div>

        {/* Bottom Row */}
        <div className="flex items-center space-x-4 pt-2">
          <TechStackItem technology="Shadcn UI" description="UI Components" />
          <TechStackItem technology="GitHub" description="Version Control" />
        </div>

        {/* Website Button */}
        <a 
          href="https://govconmaker.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors mt-4"
        >
          <span className="mr-2">🌐</span>
          Website
        </a>
      </div>
    </section>
  );
};

export default CurrentProject; 