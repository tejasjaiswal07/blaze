"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [{
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500"
    }];


const Sidebar = () => {
  return (
    <div className=" space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white ">
      <div className="px-3 py-2 flex-1 ">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className=" relative w-8 h-8 mr-4">
            {/* <Image fill src="/logo.png" alt= "logo" /> */}
            <h1 className={cn("text-2xl font-bold", monserrat.className)}>
              {" "}
              blaze
            </h1>
          </div>
        </Link>


        <div className="space-y-1">
          {routes.map((route) => (

            <Link href={route.href} key = {route.href}>
                <div className="flex items-center flex-1">
                    <route.icon className ={cn("h-5 w-5 mr-3" ,route.color)}  />
                    {route.label}
                </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Sidebar;