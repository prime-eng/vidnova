"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Palette,
  ShoppingBag,
  Download,
  UserRound,
  Store,
  LogOut,
  X,
  Sparkles,
} from "lucide-react";

type DashboardSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Designs",
    href: "/dashboard/designs",
    icon: Palette,
  },
  {
    label: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    label: "Downloads",
    href: "/dashboard/downloads",
    icon: Download,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: UserRound,
  },
];

export default function DashboardSidebar({
  isOpen,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[250px]
          flex-col border-r border-white/[0.07]
          bg-[#050A14]
          transition-transform duration-300
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-[88px] shrink-0 items-center justify-between border-b border-white/[0.06] px-5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center"
          >
            <Image
              src="/images/vidnova_teks.png"
              alt="VIDNOVA"
              width={866}
              height={288}
              priority
              className="
                h-auto
                w-[142px]
                object-contain
                drop-shadow-[0_0_18px_rgba(0,190,255,0.15)]
              "
            />
          </Link>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-lg p-2 text-slate-500
              transition hover:bg-white/[0.05]
              hover:text-white lg:hidden
            "
            aria-label="Close menu"
          >
            <X size={19} />
          </button>
        </div>

        {/* User Mini Profile */}
        <div className="px-4 pt-5">
          <div
            className="
              rounded-2xl border border-white/[0.07]
              bg-white/[0.025] p-3
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10 shrink-0 items-center
                  justify-center rounded-xl
                  bg-gradient-to-br from-cyan-400 to-blue-600
                  text-sm font-bold text-white
                  shadow-[0_0_20px_rgba(0,190,255,0.18)]
                "
              >
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  Ari
                </p>

                <p className="truncate text-[11px] text-slate-500">
                  Creator Account
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
            Workspace
          </p>

          <div className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group relative flex h-11
                    items-center gap-3 rounded-xl
                    border px-3
                    text-sm font-medium
                    transition-all duration-200
                    ${
                      active
                        ? "border-cyan-400/15 bg-cyan-400/[0.08] text-cyan-300"
                        : "border-transparent text-slate-500 hover:bg-white/[0.025] hover:text-slate-300"
                    }
                  `}
                >
                  {active && (
                    <span
                      className="
                        absolute left-0 top-1/2
                        h-6 w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_12px_rgba(34,211,238,0.8)]
                      "
                    />
                  )}

                  <Icon
                    size={18}
                    strokeWidth={active ? 2 : 1.7}
                    className={
                      active
                        ? "text-cyan-300"
                        : "text-slate-600 transition group-hover:text-slate-400"
                    }
                  />

                  <span>{item.label}</span>

                  {item.label === "Downloads" && (
                    <span
                      className="
                        ml-auto rounded-full
                        bg-cyan-400/10 px-2 py-0.5
                        text-[9px] font-semibold
                        text-cyan-300
                      "
                    >
                      6
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Create Design */}
          <div className="mt-7">
            <p className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
              Create
            </p>

            <Link
              href="/"
              onClick={onClose}
              className="
                group relative flex h-11
                items-center gap-3 rounded-xl
                border border-cyan-400/15
                bg-gradient-to-r
                from-cyan-400/[0.08]
                to-blue-500/[0.08]
                px-3 text-sm font-medium
                text-slate-300
                transition-all
                hover:border-cyan-400/25
                hover:text-cyan-300
              "
            >
              <Sparkles
                size={18}
                className="text-cyan-400"
              />

              <span>Create New Design</span>
            </Link>
          </div>
        </nav>

        {/* Bottom */}
        <div className="shrink-0 border-t border-white/[0.06] p-4">
          <Link
            href="/"
            onClick={onClose}
            className="
              mb-1 flex h-10 items-center gap-3
              rounded-xl px-3
              text-sm font-medium text-slate-500
              transition hover:bg-white/[0.025]
              hover:text-slate-300
            "
          >
            <Store size={17} strokeWidth={1.7} />
            <span>Back to Store</span>
          </Link>

          <button
            type="button"
            className="
              flex h-10 w-full items-center gap-3
              rounded-xl px-3
              text-sm font-medium text-slate-500
              transition hover:bg-red-500/[0.06]
              hover:text-red-300
            "
          >
            <LogOut size={17} strokeWidth={1.7} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}