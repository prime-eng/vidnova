"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

type DashboardTopbarProps = {
  onMenuClick: () => void;
};

const pageTitles: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "/dashboard": {
    title: "Dashboard",
    description: "Your creative workspace.",
  },
  "/dashboard/designs": {
    title: "My Designs",
    description: "Manage your saved overlay designs.",
  },
  "/dashboard/orders": {
    title: "Orders",
    description: "View your purchases and order history.",
  },
  "/dashboard/downloads": {
    title: "Downloads",
    description: "Access your purchased overlays.",
  },
  "/dashboard/profile": {
    title: "Profile",
    description: "Manage your account information.",
  },
};

export default function DashboardTopbar({
  onMenuClick,
}: DashboardTopbarProps) {
  const pathname = usePathname();

  const currentPage =
    Object.keys(pageTitles).find((path) => {
      if (path === "/dashboard") {
        return pathname === "/dashboard";
      }

      return pathname.startsWith(path);
    }) ?? "/dashboard";

  const page = pageTitles[currentPage];

  return (
    <header
      className="
        sticky top-0 z-30
        flex h-[88px]
        items-center justify-between
        border-b border-white/[0.06]
        bg-[#070D18]/85
        px-4 backdrop-blur-2xl
        sm:px-6
        lg:px-8
      "
    >
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl border border-white/[0.07]
            bg-white/[0.025]
            text-slate-400
            transition hover:border-white/[0.12]
            hover:text-white
            lg:hidden
          "
          aria-label="Open menu"
        >
          <Menu size={19} />
        </button>

        <div className="hidden shrink-0 sm:flex">
          <Image
            src="/images/vidnova_teks.png"
            alt="VIDNOVA"
            width={866}
            height={288}
            priority
            className="
              h-auto
              w-[105px]
              object-contain
              drop-shadow-[0_0_16px_rgba(0,190,255,0.12)]
            "
          />
        </div>

        <div className="hidden h-8 w-px bg-white/[0.08] sm:block" />

        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold text-white sm:text-base">
            {page.title}
          </h1>
          <p className="mt-0.5 hidden truncate text-[11px] text-slate-500 md:block">
            {page.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="
            hidden h-10 w-10
            items-center justify-center
            rounded-xl border border-white/[0.07]
            bg-white/[0.025]
            text-slate-500
            transition hover:border-white/[0.12]
            hover:text-slate-300
            sm:flex
            lg:w-[210px]
            lg:justify-start
            lg:gap-2
            lg:px-3
          "
        >
          <Search size={17} />
          <span className="hidden text-xs text-slate-600 lg:block">
            Search...
          </span>
          <span className="ml-auto hidden rounded-md border border-white/[0.06] px-1.5 py-0.5 text-[9px] text-slate-600 lg:block">
            /
          </span>
        </button>

        <button
          type="button"
          className="
            relative flex h-10 w-10
            items-center justify-center
            rounded-xl border border-white/[0.07]
            bg-white/[0.025]
            text-slate-500
            transition hover:border-white/[0.12]
            hover:text-slate-300
          "
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span
            className="
              absolute right-2 top-2
              h-1.5 w-1.5
              rounded-full bg-cyan-400
              shadow-[0_0_8px_rgba(34,211,238,0.8)]
            "
          />
        </button>

        <button
          type="button"
          className="
            hidden items-center gap-2.5
            rounded-xl border border-white/[0.07]
            bg-white/[0.025]
            px-2.5 py-1.5
            transition hover:border-white/[0.12]
            sm:flex
          "
        >
          <div
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              bg-gradient-to-br
              from-cyan-400 to-blue-600
              text-xs font-bold text-white
            "
          >
            A
          </div>

          <div className="hidden text-left md:block">
            <p className="text-xs font-semibold text-white">Ari</p>
            <p className="text-[9px] text-slate-600">Creator</p>
          </div>

          <ChevronDown size={14} className="text-slate-600" />
        </button>
      </div>
    </header>
  );
}
