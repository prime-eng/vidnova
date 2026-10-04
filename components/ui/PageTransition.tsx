"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`
        pointer-events-none
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#03040A]
        transition-opacity
        duration-500
        ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Cyan Glow */}
      <div
        className="
          absolute
          -left-32
          -top-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/15
          blur-[120px]
        "
      />

      {/* Blue Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[130px]
        "
      />

      {/* Violet Glow */}
      <div
        className="
          absolute
          -bottom-32
          -right-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-violet-600/15
          blur-[120px]
        "
      />

      {/* Logo */}
      <div
        className={`
          relative
          z-10
          transition-all
          duration-500
          ease-out
          ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-[0.97] opacity-0"
          }
        `}
      >
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-cyan-400/10
            blur-3xl
          "
        />

        <div className="relative">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.45em] text-slate-500">
            VIDNOVA
          </p>

          <div className="mt-3 h-px w-28 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

          <p className="mt-3 text-center text-[9px] uppercase tracking-[0.3em] text-slate-600">
            Create. Customize. Stream.
          </p>
        </div>
      </div>

      {/* Bottom Loading Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full overflow-hidden bg-white/[0.03]">
        <div
          className={`
            h-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-violet-500
            transition-all
            duration-500
            ease-out
            ${isVisible ? "w-full" : "w-0"}
          `}
        />
      </div>
    </div>
  );
}