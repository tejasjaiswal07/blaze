import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  color?: string;
  bgColor?: string;
}

const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  color,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className=" px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Icon className={("h-10 w-10", iconColor)} />
        </div>
        <div className="text-3xl font-bold">
          <h2> {title}</h2>
          <p className="text-sm test-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
