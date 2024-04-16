import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="h-full hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div className="text-white  text-4xl">
          
          <Sidebar />
        </div>
      </div>

      <main className="md:pl-72 text-black">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
