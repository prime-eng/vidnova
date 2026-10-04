import Image from "next/image";

import Link from "next/link";

import LoginForm from "@/components/auth/LoginForm";

import { assetPath } from "@/lib/assetPath";

export default function LoginPage() {

  return (

    <main className="relative min-h-screen overflow-hidden bg-[#03040A] text-white">

      {/* =========================================================

          BACKGROUND

      ========================================================== */}

      <div

        className="

          absolute

          inset-0

          bg-[linear-gradient(135deg,#02050B_0%,#06121D_25%,#071A2D_48%,#0B1030_72%,#070513_100%)]

        "

      />

      {/* Cyan Glow */}

      <div

        className="

          absolute

          -left-32

          -top-32

          h-[500px]

          w-[500px]

          rounded-full

          bg-cyan-500/10

          blur-[120px]

        "

      />

      {/* Blue Glow */}

      <div

        className="

          absolute

          left-[35%]

          top-[15%]

          h-[450px]

          w-[450px]

          rounded-full

          bg-blue-600/10

          blur-[130px]

        "

      />

      {/* Violet Glow */}

      <div

        className="

          absolute

          -bottom-40

          right-[-100px]

          h-[550px]

          w-[550px]

          rounded-full

          bg-violet-600/10

          blur-[140px]

        "

      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/20" />

      {/* Subtle Grid */}

      <div

        className="

          absolute

          inset-0

          opacity-[0.025]

          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]

          [background-size:60px_60px]

        "

      />

      {/* =========================================================

          CONTENT

      ========================================================== */}

      <div className="relative z-10 min-h-screen">

        {/* =======================================================

            HEADER

        ======================================================== */}

        <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">

          {/* Logo */}

          <Link

            href="/"

            className="group inline-flex items-center"

          >

            <Image

              src={assetPath("/images/vidnova_teks.png")}

              alt="VIDNOVA by VIDNITY"

              width={866}

              height={288}

              priority

              className="

                h-auto

                w-[185px]

                object-contain

                drop-shadow-[0_0_18px_rgba(0,180,255,0.12)]

                transition-all

                duration-300

                group-hover:scale-[1.02]

                group-hover:opacity-90

              "

            />

          </Link>

          {/* Register Link */}

          <div className="flex items-center gap-2 text-sm">

            <span className="hidden text-slate-500 sm:inline">

              Don&apos;t have an account?

            </span>

            <Link

              href="/register"

              className="

                rounded-lg

                px-3

                py-2

                font-medium

                text-cyan-300

                transition

                hover:bg-cyan-400/5

                hover:text-cyan-200

              "

            >

              Sign Up

            </Link>

          </div>

        </header>

        {/* =======================================================

            MAIN

        ======================================================== */}

        <section

          className="

            mx-auto

            grid

            min-h-[calc(100vh-105px)]

            w-full

            max-w-[1450px]

            grid-cols-1

            gap-10

            px-6

            pb-10

            sm:px-10

            lg:grid-cols-[minmax(0,1fr)_480px]

            lg:items-center

            lg:gap-20

            lg:px-14

          "

        >

          {/* =====================================================

              LEFT SIDE

          ====================================================== */}

          <div className="flex w-full max-w-3xl flex-col justify-center">

            {/* Badge */}

            <div

              className="

                mb-5

                inline-flex

                w-fit

                items-center

                gap-2

                rounded-full

                border

                border-cyan-400/15

                bg-cyan-400/[0.04]

                px-3

                py-1.5

                text-[10px]

                font-semibold

                uppercase

                tracking-[0.2em]

                text-cyan-300/80

              "

            >

              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              STREAM CREATOR PLATFORM

            </div>

            {/* Heading */}

            <h2

              className="

                max-w-2xl

                text-4xl

                font-semibold

                leading-[1.05]

                tracking-[-0.04em]

                text-white

                sm:text-5xl

                lg:text-6xl

              "

            >

              Welcome back.

              <br />

              <span

                className="

                  bg-gradient-to-r

                  from-cyan-300

                  via-blue-400

                  to-violet-400

                  bg-clip-text

                  text-transparent

                "

              >

                Your stream is waiting.

              </span>

            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">

              Continue where you left off and create a stream experience

              that looks exactly the way you imagined it.

            </p>

            {/* =================================================

                STREAM PREVIEW

            ================================================== */}

            <div className="relative mt-10 hidden h-[290px] w-full max-w-[700px] md:block">

              {/* Main Preview */}

              <div

                className="

                  absolute

                  left-0

                  top-0

                  h-[235px]

                  w-[430px]

                  overflow-hidden

                  rounded-2xl

                  border

                  border-white/10

                  bg-[#080B14]

                  shadow-[0_25px_80px_rgba(0,0,0,0.45)]

                "

              >

                {/* Fake Stream Background */}

                <div

                  className="

                    absolute

                    inset-0

                    bg-[radial-gradient(circle_at_70%_30%,rgba(0,180,255,0.22),transparent_35%),radial-gradient(circle_at_25%_75%,rgba(124,58,237,0.20),transparent_35%),linear-gradient(135deg,#08101B,#0B1022,#080612)]

                  "

                />

                {/* Grid */}

                <div

                  className="

                    absolute

                    inset-0

                    opacity-[0.08]

                    [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]

                    [background-size:30px_30px]

                  "

                />

                {/* Center Stream Area */}

                <div className="absolute inset-x-12 top-8 bottom-12 rounded-xl border border-white/10 bg-black/20 backdrop-blur-[2px]">

                  <div className="flex h-full items-center justify-center">

                    <div className="text-center">

                      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">

                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

                      </div>

                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">

                        Stream Preview

                      </p>

                    </div>

                  </div>

                </div>

                {/* Live Label */}

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-red-400/20 bg-black/40 px-2.5 py-1.5 backdrop-blur-md">

                  <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.9)]" />

                  <span className="text-[9px] font-bold uppercase tracking-wider text-white">

                    Live

                  </span>

                </div>

                {/* Bottom Overlay */}

                <div className="absolute inset-x-0 bottom-0 h-12 border-t border-white/10 bg-black/50 backdrop-blur-md">

                  <div className="flex h-full items-center justify-between px-4">

                    <div>

                      <div className="h-1.5 w-20 rounded-full bg-white/20" />

                      <div className="mt-2 h-1 w-12 rounded-full bg-white/10" />

                    </div>

                    <div className="flex gap-1.5">

                      <span className="h-5 w-5 rounded-md bg-cyan-400/20" />

                      <span className="h-5 w-5 rounded-md bg-blue-400/20" />

                      <span className="h-5 w-5 rounded-md bg-violet-400/20" />

                    </div>

                  </div>

                </div>

              </div>

              {/* Customize Floating Card */}

              <div

                className="

                  absolute

                  right-4

                  top-5

                  w-[190px]

                  rounded-xl

                  border

                  border-white/10

                  bg-[#0A0D17]/90

                  p-4

                  shadow-[0_20px_50px_rgba(0,0,0,0.4)]

                  backdrop-blur-xl

                "

              >

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">

                    Customize

                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                </div>

                <div className="space-y-2.5">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] text-slate-500">

                      Background

                    </span>

                    <span className="h-3 w-7 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] text-slate-500">

                      Animation

                    </span>

                    <span className="text-[9px] font-medium text-cyan-300">

                      ON

                    </span>

                  </div>

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] text-slate-500">

                      Effects

                    </span>

                    <span className="text-[9px] font-medium text-violet-300">

                      04

                    </span>

                  </div>

                </div>

              </div>

              {/* Stream Ready Floating Card */}

              <div

                className="

                  absolute

                  bottom-0

                  right-20

                  rounded-xl

                  border

                  border-emerald-400/10

                  bg-[#08110F]/90

                  px-4

                  py-3

                  shadow-[0_15px_40px_rgba(0,0,0,0.35)]

                  backdrop-blur-xl

                "

              >

                <div className="flex items-center gap-3">

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/10">

                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                  </div>

                  <div>

                    <p className="text-[10px] font-semibold text-white">

                      Stream Ready

                    </p>

                    <p className="text-[9px] text-slate-500">

                      Your visual identity is ready.

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* =================================================

                FEATURES

            ================================================== */}

            <div className="mt-8 grid max-w-3xl grid-cols-3 gap-3">

              {/* Feature 1 */}

              <div

                className="

                  rounded-xl

                  border

                  border-white/[0.07]

                  bg-white/[0.025]

                  p-4

                  transition

                  duration-300

                  hover:border-cyan-400/20

                  hover:bg-white/[0.04]

                "

              >

                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-xs text-cyan-300">

                  01

                </div>

                <p className="text-xs font-semibold text-white">

                  Choose

                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-600">

                  Pick your overlay.

                </p>

              </div>

              {/* Feature 2 */}

              <div

                className="

                  rounded-xl

                  border

                  border-white/[0.07]

                  bg-white/[0.025]

                  p-4

                  transition

                  duration-300

                  hover:border-blue-400/20

                  hover:bg-white/[0.04]

                "

              >

                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400/10 text-xs text-blue-300">

                  02

                </div>

                <p className="text-xs font-semibold text-white">

                  Customize

                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-600">

                  Make it yours.

                </p>

              </div>

              {/* Feature 3 */}

              <div

                className="

                  rounded-xl

                  border

                  border-white/[0.07]

                  bg-white/[0.025]

                  p-4

                  transition

                  duration-300

                  hover:border-violet-400/20

                  hover:bg-white/[0.04]

                "

              >

                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/10 text-xs text-violet-300">

                  03

                </div>

                <p className="text-xs font-semibold text-white">

                  Stream

                </p>

                <p className="mt-1 text-[10px] leading-4 text-slate-600">

                  Go live with style.

                </p>

              </div>

            </div>

          </div>

          {/* =====================================================

              RIGHT SIDE - LOGIN CARD

          ====================================================== */}

          <div className="flex w-full items-center justify-center lg:justify-end">

            <div

              className="

                w-full

                max-w-[480px]

                rounded-[28px]

                border

                border-white/[0.09]

                bg-[#080A12]/75

                p-6

                shadow-[0_30px_100px_rgba(0,0,0,0.45)]

                backdrop-blur-2xl

                sm:p-8

              "

            >

              {/* Top Accent */}

              <div

                className="

                  mb-8

                  h-px

                  w-full

                  bg-gradient-to-r

                  from-transparent

                  via-cyan-400/50

                  to-transparent

                "

              />

              <LoginForm />

            </div>

          </div>

        </section>

        {/* =======================================================

            MOBILE FOOTER

        ======================================================== */}

        <div className="px-6 pb-6 text-center text-[10px] text-slate-700 md:hidden">

          Create. Customize. Stream.

        </div>

      </div>

    </main>

  );

}
