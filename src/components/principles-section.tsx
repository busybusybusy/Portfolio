import { DATA } from "@/data/resume";

interface PrinciplesSectionProps {
  className?: string;
}

export function PrinciplesSection({ className = "" }: PrinciplesSectionProps) {
  const specialization = {
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
  };

  const principles = {
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
  };

  return (
    <section className={`w-full max-w-[800px] mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#BBD1EA] rounded-xl p-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">{specialization.title}</h2>
          <ul className="space-y-4 text-sm">
            {specialization.items.map((item, index) => (
              <li key={index}>
                <div className="mb-4 font-bold">• {item.title}</div>
                <ul className="ml-6 space-y-2">
                  {item.subitems.map((subitem, subIndex) => (
                    <li key={subIndex}>
                      • <a 
                        href={subitem.href}
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subitem.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">{principles.title}</h2>
          <ul className="space-y-4 text-sm">
            {principles.items.map((item, index) => (
              <li key={index}>
                <div className="mb-4 font-bold">• {item.title}</div>
                <ul className="ml-6 space-y-2">
                  {item.subitems.map((subitem, subIndex) => (
                    <li key={subIndex}>
                      • <a 
                        href={subitem.href}
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {subitem.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 