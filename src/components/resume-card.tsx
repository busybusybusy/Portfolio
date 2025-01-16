"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle: string;
  period?: string;
  href?: string;
  badges?: string[];
  description?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  href,
  badges = [],
  description,
}: ResumeCardProps) {
  const content = (
    <div className="flex items-start gap-4 p-4 transition-colors hover:bg-muted/50 rounded-lg">
      <Avatar className="size-12 border">
        <AvatarImage src={logoUrl} alt={altText} />
        <AvatarFallback>{altText[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <div>
          <div className="text-base font-medium leading-none">{title}</div>
          <div className="flex flex-col mt-1">
            <span className="text-sm text-muted-foreground">{subtitle}</span>
            {period && (
              <span className="text-sm text-muted-foreground">{period}</span>
            )}
          </div>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {badges.length > 0 && (
          <div className="flex gap-1 mt-1">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" className="block">
        {content}
      </Link>
    );
  }

  return content;
}
