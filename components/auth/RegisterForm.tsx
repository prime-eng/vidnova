"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Register submitted");
      }}
      className="space-y-5"
    >
      {/* Full Name */}
      <div>
        <label className="mb-2.5 block text-xs font-medium text-zinc-300">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          required
          className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2.5 block text-xs font-medium text-zinc-300">
          Email Address
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          required
          className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20"
        />
      </div>

      {/* Password */}
      <div>
        <label className="mb-2.5 block text-xs font-medium text-zinc-300">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            required
            className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 pr-16 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-medium text-zinc-600 transition hover:text-cyan-400"
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="mb-2.5 block text-xs font-medium text-zinc-300">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Repeat your password"
            required
            className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 pr-16 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-400/50 focus:bg-white/[0.04] focus:ring-1 focus:ring-cyan-400/20"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-medium text-zinc-600 transition hover:text-cyan-400"
          >
            {showConfirmPassword ? "HIDE" : "SHOW"}
          </button>
        </div>
      </div>

      {/* Terms */}
      <label className="flex cursor-pointer items-start gap-3 pt-1">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-cyan-400"
        />

        <span className="text-xs leading-5 text-zinc-600">
          I agree to the{" "}
          <span className="text-zinc-400">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-zinc-400">
            Privacy Policy
          </span>
          .
        </span>
      </label>

      {/* Button */}
      <button
        type="submit"
        className="group relative mt-2 h-12 w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-sm font-semibold text-black shadow-lg shadow-cyan-500/10 transition duration-300 hover:shadow-cyan-500/20"
      >
        <span className="relative z-10">
          Create Account
        </span>

        <div className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
      </button>

      {/* Login */}
      <p className="pt-1 text-center text-xs text-zinc-600">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          Sign in
        </a>
      </p>
    </form>
  );
}