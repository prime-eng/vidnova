"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

type AdminTopbarProps = {
  onMenuClick: () => void;
};

const pageTitles: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  "/admin": {
    title: "Dashboard",
    description: "Monitor your VIDNOVA store.",
  },
  "/admin/assets": {
    title: "Assets",
    description: "Manage MP4 assets available for creators.",
  },
  "/admin/transactions": {
    title: "Transactions",
    description: "Monitor sales and payment transactions.",
  },
};

export default function AdminTopbar({
  onMenuClick,
}: AdminTopbarProps) {
  const pathname = usePathname();

  const currentPage =
    Object.keys(pageTitles).find((path) => {
      if (path === "/admin") {
        return pathname === "/admin";
      }

      return pathname.startsWith(path);
    }) ?? "/admin";

  const page = pageTitles[currentPage];

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-[88px]
        items-center
        justify-between
        border-b
        border-white/[0.06]
        bg-[#05070D]/80
        px-4
        backdrop-blur-2xl
        sm:px-6
        lg:px-8
      "
    >
      {/* LEFT */}
      <div className="flex min-w-0 items-center gap-3">
        {/* BURGER */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open admin menu"
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            text-slate-400
            transition
            duration-200
            hover:border-cyan-400/20
            hover:bg-cyan-400/[0.05]
            hover:text-cyan-300
            lg:hidden
          "
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        {/* LOGO VIDNOVA */}
        <div className="flex shrink-0 items-center">
          <Image
            src="/images/vidnova_teks.png"
            alt="VIDNOVA"
            width={866}
            height={288}
            priority
            className="
              h-auto
              w-[120px]
              object-contain
              drop-shadow-[0_0_18px_rgba(0,190,255,0.16)]
              sm:w-[140px]
              lg:w-[150px]
            "
          />
        </div>

        {/* DIVIDER */}
        <div className="hidden h-9 w-px bg-white/[0.07] sm:block" />

        {/* TITLE */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600 sm:block">
              Admin
            </span>

            <span className="hidden text-slate-700 sm:block">/</span>

            <h1 className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl">
              {page.title}
            </h1>
          </div>

          <p className="mt-1 hidden text-xs text-slate-600 sm:block">
            {page.description}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* SEARCH */}
        <div className="relative hidden md:block">
          <span
            className="
              pointer-events-none
              absolute
              left-3
              top-1/2
              flex
              -translate-y-1/2
              items-center
              justify-center
              text-slate-600
            "
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </span>

          <input
            type="search"
            placeholder="Search..."
            className="
              h-10
              w-[220px]
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              pl-9
              pr-12
              text-xs
              text-white
              outline-none
              placeholder:text-slate-700
              transition
              duration-200
              focus:border-cyan-400/25
              focus:bg-white/[0.04]
              focus:ring-2
              focus:ring-cyan-400/5
            "
            onChange={(event) => {
              console.log("Admin search:", event.target.value);
            }}
          />

          <span
            className="
              pointer-events-none
              absolute
              right-2.5
              top-1/2
              -translate-y-1/2
              rounded-md
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-1.5
              py-0.5
              text-[9px]
              font-medium
              text-slate-700
            "
          >
            /
          </span>
        </div>

        {/* NOTIFICATION */}
        <button
          type="button"
          aria-label="Notifications"
          onClick={() => {
            console.log("Notifications clicked");
          }}
          className="
            relative
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            text-slate-500
            transition
            duration-200
            hover:border-cyan-400/20
            hover:bg-cyan-400/[0.04]
            hover:text-cyan-300
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>

          <span
            className="
              absolute
              right-2
              top-2
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
              shadow-[0_0_8px_rgba(34,211,238,0.9)]
            "
          />
        </button>

        {/* DIVIDER */}
        <div className="mx-1 hidden h-8 w-px bg-white/[0.07] sm:block" />

        {/* PROFILE */}
        <button
          type="button"
          onClick={() => {
            console.log("Admin profile clicked");
          }}
          className="
            group
            flex
            items-center
            gap-2.5
            rounded-xl
            border
            border-transparent
            p-1.5
            pr-2.5
            transition
            duration-200
            hover:border-white/[0.07]
            hover:bg-white/[0.025]
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-violet-500
              text-xs
              font-bold
              text-white
              shadow-[0_0_18px_rgba(0,160,255,0.15)]
            "
          >
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-semibold text-white">
              Administrator
            </p>

            <p className="mt-0.5 text-[10px] text-slate-600">
              Admin
            </p>
          </div>

          <svg
            className="
              hidden
              text-slate-600
              transition
              group-hover:text-slate-400
              sm:block
            "
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
