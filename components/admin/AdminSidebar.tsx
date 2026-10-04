"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 10.5 12 4l8 6.5" />
        <path d="M6.5 9.5V20h11V9.5" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    label: "Assets",
    href: "/admin/assets",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4 7.5 8 4.5 8-4.5" />
        <path d="M12 12v9" />
      </svg>
    ),
  },
  {
    label: "Transactions",
    href: "/admin/transactions",
    icon: (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    ),
  },
];

export default function AdminSidebar({
  isOpen,
  onClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          z-40
          bg-black/70
          backdrop-blur-[2px]
          transition-opacity
          duration-300
          lg:hidden
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-[250px]
          flex-col
          border-r
          border-white/[0.07]
          bg-[#05070D]
          shadow-[20px_0_60px_rgba(0,0,0,0.35)]
          transition-transform
          duration-300
          ease-out
          lg:translate-x-0
          lg:shadow-none
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* ===================================================
            BRAND
        ==================================================== */}

        <div
          className="
            relative
            flex
            h-[88px]
            shrink-0
            items-center
            justify-center
            border-b
            border-white/[0.06]
            px-6
          "
        >
          <Image
            src="/images/vidnova_vertical.png"
            alt="VIDNOVA"
            width={180}
            height={180}
            priority
            className="
              h-[62px]
              w-auto
              object-contain
              drop-shadow-[0_0_18px_rgba(0,190,255,0.12)]
            "
          />
        </div>

        {/* ===================================================
            MOBILE CLOSE
        ==================================================== */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close admin menu"
          className="
            absolute
            right-4
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/[0.07]
            bg-white/[0.025]
            text-slate-500
            transition
            hover:border-cyan-400/20
            hover:bg-cyan-400/[0.05]
            hover:text-cyan-300
            lg:hidden
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6 6 18" />
          </svg>
        </button>

        {/* ===================================================
            NAVIGATION
        ==================================================== */}

        <nav className="flex-1 overflow-y-auto px-3 py-7">
          {/* MAIN */}

          <div className="mb-8">
            <p className="mb-3 px-3 text-[9px] font-medium uppercase tracking-[0.25em] text-slate-600">
              Main
            </p>

            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`
                      group
                      relative
                      flex
                      h-11
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300"
                          : "border border-transparent text-slate-500 hover:bg-white/[0.025] hover:text-slate-300"
                      }
                    `}
                  >
                    {/* ACTIVE INDICATOR */}

                    {isActive && (
                      <span
                        className="
                          absolute
                          -left-[1px]
                          top-1/2
                          h-6
                          w-[2px]
                          -translate-y-1/2
                          rounded-full
                          bg-cyan-400
                          shadow-[0_0_10px_rgba(34,211,238,0.8)]
                        "
                      />
                    )}

                    {/* ICON */}

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-lg
                        transition
                        ${
                          isActive
                            ? "bg-cyan-400/[0.08] text-cyan-300"
                            : "bg-white/[0.025] text-slate-600 group-hover:text-slate-400"
                        }
                      `}
                    >
                      {item.icon}
                    </span>

                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* STORE */}

          <div className="mb-8">
            <p className="mb-3 px-3 text-[9px] font-medium uppercase tracking-[0.25em] text-slate-600">
              Store
            </p>

            <Link
              href="/"
              onClick={onClose}
              className="
                group
                flex
                h-11
                items-center
                gap-3
                rounded-xl
                border
                border-transparent
                px-3
                text-sm
                font-medium
                text-slate-500
                transition
                duration-200
                hover:bg-white/[0.025]
                hover:text-slate-300
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  bg-white/[0.025]
                  text-slate-600
                  transition
                  group-hover:text-slate-400
                "
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </span>

              <span>View Store</span>
            </Link>
          </div>

          {/* SYSTEM */}

          <div>
            <p className="mb-3 px-3 text-[9px] font-medium uppercase tracking-[0.25em] text-slate-600">
              System
            </p>

            {/* SETTINGS */}
            <Link
              href="/admin/settings"
              onClick={onClose}
              className={`
                group
                relative
                flex
                h-11
                w-full
                items-center
                gap-3
                rounded-xl
                border
                px-3
                text-left
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  pathname.startsWith("/admin/settings")
                    ? "border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300"
                    : "border-transparent text-slate-500 hover:bg-white/[0.025] hover:text-slate-300"
                }
              `}
            >
              {/* ACTIVE INDICATOR */}

              {pathname.startsWith("/admin/settings") && (
                <span
                  className="
                    absolute
                    -left-[1px]
                    top-1/2
                    h-6
                    w-[2px]
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_10px_rgba(34,211,238,0.8)]
                  "
                />
              )}

              <span
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-lg
                  transition
                  ${
                    pathname.startsWith("/admin/settings")
                      ? "bg-cyan-400/[0.08] text-cyan-300"
                      : "bg-white/[0.025] text-slate-600 group-hover:text-slate-400"
                  }
                `}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />

                  <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.1h-2.5v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8.1 15a1.7 1.7 0 0 0-1.5-1H6.5v-2.5h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.1H15v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1V14h-.1a1.7 1.7 0 0 0-1.5 1Z" />
                </svg>
              </span>

              <span>Settings</span>
            </Link>
          </div>
        </nav>

        {/* ===================================================
            ADMIN PROFILE
        ==================================================== */}

        <div className="shrink-0 border-t border-white/[0.06] p-4">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-2.5
            "
          >
            {/* AVATAR */}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-cyan-400
                via-blue-500
                to-violet-500
                text-sm
                font-bold
                text-white
                shadow-[0_0_18px_rgba(0,160,255,0.18)]
              "
            >
              A
            </div>

            {/* INFO */}

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                Administrator
              </p>

              <p className="mt-0.5 truncate text-[10px] text-slate-600">
                admin@vidnova.id
              </p>
            </div>

            {/* LOGOUT */}

            <button
              type="button"
              aria-label="Logout"
              onClick={() => {
                console.log("Logout clicked");
              }}
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-md
                text-slate-600
                transition
                hover:bg-white/[0.05]
                hover:text-cyan-300
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
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}