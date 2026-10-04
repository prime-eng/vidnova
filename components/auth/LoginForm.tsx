"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    // Dummy login
    setTimeout(() => {
      console.log("Login submitted");
      console.log("Remember me:", rememberMe);

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
          Welcome Back
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Sign in to{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            VIDNOVA.
          </span>
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
          Continue creating your visual identity and bring your stream to life.
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              px-4
              text-sm
              text-white
              outline-none
              placeholder:text-slate-600
              transition
              duration-200
              focus:border-cyan-400/50
              focus:bg-white/[0.06]
              focus:ring-2
              focus:ring-cyan-400/10
            "
          />
        </div>

        {/* Password */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-200"
            >
              Password
            </label>

            <button
              type="button"
              className="
                text-xs
                font-medium
                text-cyan-300
                transition
                hover:text-cyan-200
              "
              onClick={() => {
                console.log("Forgot password clicked");
              }}
            >
              Forgot Password?
            </button>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              className="
                h-12
                w-full
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                px-4
                pr-20
                text-sm
                text-white
                outline-none
                placeholder:text-slate-600
                transition
                duration-200
                focus:border-cyan-400/50
                focus:bg-white/[0.06]
                focus:ring-2
                focus:ring-cyan-400/10
              "
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="
                absolute
                right-3
                top-1/2
                -translate-y-1/2
                rounded-md
                px-2
                py-1
                text-[11px]
                font-semibold
                uppercase
                tracking-wider
                text-slate-400
                transition
                hover:text-cyan-300
              "
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="
                h-4
                w-4
                cursor-pointer
                appearance-none
                rounded
                border
                border-white/15
                bg-white/[0.04]
                transition
                checked:border-cyan-400
                checked:bg-cyan-400
              "
            />

            <span className="text-xs text-slate-400">
              Remember me
            </span>
          </label>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="
            group
            relative
            h-12
            w-full
            overflow-hidden
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-violet-500
            text-sm
            font-semibold
            text-white
            shadow-[0_10px_35px_rgba(0,160,255,0.18)]
            transition
            duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_14px_45px_rgba(0,160,255,0.28)]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <span className="relative z-10">
            {isLoading ? "Signing In..." : "Sign In"}
          </span>

          {/* Button shine */}
          <span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />
        </button>
      </form>

      {/* Divider */}
      <div className="my-7 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/[0.08]" />

        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
          New to VIDNOVA?
        </span>

        <div className="h-px flex-1 bg-white/[0.08]" />
      </div>

      {/* Register Link */}
      <Link
        href="/register"
        className="
          flex
          h-12
          w-full
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/[0.025]
          text-sm
          font-medium
          text-slate-300
          transition
          duration-300
          hover:border-cyan-400/30
          hover:bg-cyan-400/[0.04]
          hover:text-cyan-300
        "
      >
        Create A New Account
      </Link>

      {/* Small Footer */}
      <p className="mt-6 text-center text-[11px] leading-5 text-slate-600">
        By signing in, you agree to VIDNOVA&apos;s{" "}
        <button
          type="button"
          className="text-slate-500 transition hover:text-cyan-400"
        >
          Terms
        </button>{" "}
        and{" "}
        <button
          type="button"
          className="text-slate-500 transition hover:text-cyan-400"
        >
          Privacy Policy
        </button>
        .
      </p>
    </div>
  );
}