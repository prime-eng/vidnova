"use client";

import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardTopbar from "@/components/dashboard/DashboardTopbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070D18] text-white">
      {/* Background */}
      <div
        className="
          pointer-events-none
          fixed inset-0
          z-0 overflow-hidden
        "
      >
        <div
          className="
            absolute left-1/2 top-1/2
            h-[700px] w-[1100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            absolute right-[-180px] top-[10%]
            h-[500px] w-[500px]
            rounded-full
            bg-blue-500/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            absolute bottom-[-180px] left-[-180px]
            h-[500px] w-[500px]
            rounded-full
            bg-violet-500/[0.02]
            blur-[150px]
          "
        />
      </div>

      <DashboardSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="relative z-10 min-h-screen lg:pl-[250px]">
        <DashboardTopbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="min-h-[calc(100vh-88px)]">
          {children}
        </main>
      </div>
    </div>
  );
}