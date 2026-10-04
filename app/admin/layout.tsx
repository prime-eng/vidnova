"use client";

import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#03040A] text-white">
      {/* SIDEBAR */}
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* MAIN AREA */}
      <div className="min-h-screen lg:pl-[250px]">
        <AdminTopbar
          onMenuClick={() => setIsSidebarOpen(true)}
        />

        <main className="min-h-[calc(100vh-88px)]">
          {children}
        </main>
      </div>
    </div>
  );
}