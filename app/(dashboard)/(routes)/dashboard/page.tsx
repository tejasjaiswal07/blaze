"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  ImageIcon,
  Music,
  VideoIcon,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const tools = [
  {
    title: "Conversation",
    description: "Generate code with the power of AI",
    icon: Code,
    color: "text-blue-700",
    href: "/conversations",
    bgColor: "bg-blue-100",
  },
  {
    title: "Video Generation",
    description: "Generate videos with the power of AI",
    icon: VideoIcon,
    color: "text-pink-700",
    href: "/videos",
    bgColor: "bg-pink-100",
  },
  {
    title: "Image Generation",
    description: "Generate images with the power of AI",
    icon: ImageIcon,
    color: "text-orange-700",
    href: "/image",
    bgColor: "bg-orange-100",
  },
  {
    title: "Music Generation",
    description: "Generate music with the power of AI",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
    bgColor: "bg-emerald-100",
  },
  {
    title: "Code Generation",
    description: "Generate code with the power of AI",
    icon: Code,
    color: "text-blue-700",
    href: "/code",
    bgColor: "bg-blue-100",
  },
];

const page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the Power of AI{" "}
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg font-light text-center">
          {" "}
          this is the smartest ai and the thing you want to read.
        </p>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition curser-pointer"
            >
              <div className="flex items-center gap-x-4 ">
                <div className={cn("p-2 rounded-md w-fit", tool.bgColor)}>
                  <tool.icon className={cn("h-8 w-8", tool.color)} />
                </div>
                <div className="semi-bold">{tool.title}</div>
              </div>
              <ArrowRight className="h-5 w-5" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
