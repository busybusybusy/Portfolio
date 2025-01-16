import { HomeIcon, NotebookIcon } from "lucide-react";

export type ResumeData = {
  mapSpecialization: {
    title: string;
    items: Array<{
      title: string;
      subitems: Array<{
        text: string;
        href: string;
      }>;
    }>;
  };
  mapPrinciples: {
    title: string;
    items: Array<{
      title: string;
      subitems: Array<{
        text: string;
        href: string;
      }>;
    }>;
  };
  // ... other types
};

export const DATA = {
  name: "M.P. Mentzer-Hernández",
  email: "mentzerhernandez@gmail.com",
  url: "https://busybusybusy.github.io/Portfolio/",
  location: "Austin, Texas, USA",
  locationLink: "https://www.google.com/maps/place/Austin,+TX/",
  description: " ",
  summary: "Curious, and collected by nature.\n\nMy experiences in Afghanistan, Iraq, Saudi Arabia, and South Korea have shaped my ability to work in international settings with professionalism and cultural sensitivity.",
  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  work: [
    {
      company: "Meta || Facebook",
      title: "Learning Solutions Partner",
      dates: "2023 - Present",
      logoUrl: "/m.png",
      description: "Global Operations Learning Organization"
    },
    {
      company: "Meta || Facebook",
      title: "Learning Consultant",
      dates: "2022 - 2023",
      logoUrl: "/m.png",
      description: "Global Operations Learning Organization"
    },
    {
      company: "American University of Iraq - Baghdad",
      title: "Instructional Designer",
      dates: "2020 - 2021",
      logoUrl: "/auib.png",
      description: "Onboarding and Training"
    }
  ],

  specialization: {
    title: "Specialization",
    items: [
      {
        title: "Pedagogy for Global Audiences",
        subitems: [
          {
            text: "Global Audience Comprehension",
            href: "https://docs.google.com/document/d/1UAkbC3UqC7VtGVC9bKd2CaX45yLtjuiOu564-bTTXeA/edit?tab=t.0#bookmark=id.5jhllhyhc8fl"
          },
          {
            text: "Universal Design & Accessibility",
            href: "https://docs.google.com/document/d/1UAkbC3UqC7VtGVC9bKd2CaX45yLtjuiOu564-bTTXeA/edit?tab=t.0#bookmark=id.2rh52wkjmk7b"
          },
          {
            text: "Global Visual Design",
            href: "https://docs.google.com/presentation/d/187gfblk4ixYC1FcbgeRmzztsaVIy8N6dWruFb2qqf3o/edit"
          }
        ]
      }
    ]
  },

  principles: {
    title: "Principles",
    items: [
      {
        title: "Pedagogy with Limited Resources",
        subitems: [
          {
            text: "Creating Stories for Presentations",
            href: "https://miro.com/app/board/uXjVMI_v1K8=/?moveToWidget=3458764554479338882&cot=14"
          },
          {
            text: "Starting Ambiguous Projects",
            href: "https://miro.com/app/board/uXjVMI_v1K8=/?moveToWidget=3458764554475211919&cot=14"
          },
          {
            text: "Making Decisions",
            href: "https://miro.com/app/board/uXjVMI_v1K8=/?moveToWidget=3458764554478962734&cot=14"
          }
        ]
      }
    ]
  },
} as const;
