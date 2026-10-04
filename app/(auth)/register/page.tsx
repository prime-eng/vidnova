import Image from "next/image";
import Link from "next/link";
import RegisterForm from "../../../components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03040A] text-white">

      {/* =========================================================
          GRADIENT BACKGROUND
          Palette: Cyan / Electric Blue / Blue / Violet
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Base Gradient */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(135deg,#02050B_0%,#06121D_25%,#071A2D_48%,#0B1030_72%,#070513_100%)]
          "
        />

        {/* Cyan Glow - Top Left */}
        <div
          className="
            absolute
            left-[-15%]
            top-[-20%]
            h-[750px]
            w-[750px]
            rounded-full
            bg-cyan-400/25
            blur-[180px]
          "
        />

        {/* Electric Blue Glow - Center */}
        <div
          className="
            absolute
            left-[28%]
            top-[10%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-blue-500/20
            blur-[190px]
          "
        />

        {/* Violet Glow - Bottom Right */}
        <div
          className="
            absolute
            bottom-[-20%]
            right-[-10%]
            h-[750px]
            w-[750px]
            rounded-full
            bg-violet-600/25
            blur-[190px]
          "
        />

        {/* Blue / Violet Transition */}
        <div
          className="
            absolute
            bottom-[5%]
            left-[35%]
            h-[500px]
            w-[700px]
            rounded-full
            bg-indigo-500/15
            blur-[180px]
          "
        />

        {/* Subtle Cyan Highlight */}
        <div
          className="
            absolute
            left-[5%]
            top-[45%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-500/10
            blur-[160px]
          "
        />

      </div>

      {/* =========================================================
          DARK OVERLAY
          Membuat gradient tetap elegan dan tidak terlalu terang
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      {/* =========================================================
          SUBTLE GRID
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

          {/* VIDNOVA LOGO */}
          <Link
            href="/"
            className="group block"
            aria-label="VIDNOVA Home"
          >
            <Image
              src="/images/vidnova_teks.png"
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

          {/* LOGIN LINK */}
          <Link
            href="/login"
            className="
              text-sm
              text-zinc-400
              transition-colors
              duration-300
              hover:text-white
            "
          >
            Already have an account?

            <span className="ml-2 font-medium text-cyan-300 hover:text-cyan-200">
              Sign In
            </span>
          </Link>

        </div>
      </header>

      {/* =========================================================
          MAIN
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center px-6 pb-12 pt-28 lg:px-10">

        <div className="mx-auto grid w-full max-w-[1450px] items-center gap-20 lg:grid-cols-[minmax(0,1fr)_480px]">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="hidden lg:block">
            <div className="max-w-3xl">

              {/* Badge */}
              <div
                className="
                  mb-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-300/15
                  bg-white/[0.035]
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_12px_rgba(34,211,238,0.9)]
                  "
                />

                <span className="text-xs font-medium tracking-[0.18em] text-zinc-300">
                  STREAM CREATOR PLATFORM
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-6xl font-semibold leading-[1.05] tracking-[-0.04em]">

                Create your

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
                  visual identity.
                </span>

              </h1>

              {/* Description */}
              <p className="mt-7 max-w-lg text-base leading-7 text-zinc-400">
                Design premium TikTok livestream overlays that match
                your personality, your content, and your brand.
              </p>

              {/* =================================================
                  OVERLAY PREVIEW
                  Tambahan untuk mengisi ruang desktop
              ================================================= */}

              <div className="relative mt-10 h-[255px] w-full max-w-[820px]">

                {/* Main Preview Card */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-[235px]
                    w-[430px]
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-white/[0.10]
                    bg-[#080B16]/70
                    shadow-2xl
                    shadow-blue-950/40
                    backdrop-blur-xl
                  "
                >

                  {/* Preview Header */}
                  <div
                    className="
                      flex
                      h-10
                      items-center
                      justify-between
                      border-b
                      border-white/[0.07]
                      px-4
                    "
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

                      <span className="text-[9px] font-medium tracking-[0.18em] text-zinc-400">
                        LIVE OVERLAY
                      </span>
                    </div>

                    <span className="text-[8px] text-zinc-600">
                      VIDNOVA
                    </span>
                  </div>

                  {/* Preview Content */}
                  <div className="relative h-[195px] overflow-hidden">

                    {/* Fake Stream Background */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[radial-gradient(circle_at_25%_30%,rgba(0,229,255,0.22),transparent_35%),radial-gradient(circle_at_75%_70%,rgba(108,59,255,0.25),transparent_40%),linear-gradient(135deg,#07121F,#0A0C1E)]
                      "
                    />

                    {/* Grid */}
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />

                    {/* Center Stream Area */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[105px]
                        w-[185px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-xl
                        border
                        border-white/[0.10]
                        bg-black/20
                        backdrop-blur-sm
                      "
                    >
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">

                          <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
                            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                          </div>

                          <p className="text-[9px] font-medium tracking-[0.15em] text-white/80">
                            STREAM PREVIEW
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* Top Live Label */}
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-cyan-300/20
                        bg-black/30
                        px-3
                        py-1.5
                        backdrop-blur-md
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                      <span className="text-[8px] font-semibold tracking-[0.15em] text-cyan-200">
                        LIVE
                      </span>
                    </div>

                    {/* Bottom Overlay */}
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        right-4
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        border
                        border-white/[0.08]
                        bg-black/35
                        px-3
                        py-2
                        backdrop-blur-md
                      "
                    >
                      <div>
                        <p className="text-[8px] font-semibold text-white">
                          YOUR STREAM
                        </p>

                        <p className="mt-0.5 text-[7px] text-zinc-500">
                          Create your identity
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

                        <span className="text-[7px] text-zinc-400">
                          12.4K VIEWERS
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating Card — Customize */}
                <div
                  className="
                    absolute
                    left-[385px]
                    top-[45px]
                    z-10
                    w-[185px]
                    rounded-2xl
                    border
                    border-white/[0.10]
                    bg-[#0A0D19]/80
                    p-4
                    shadow-xl
                    shadow-black/30
                    backdrop-blur-xl
                  "
                >
                  <div className="flex items-center justify-between">

                    <span className="text-[8px] font-semibold tracking-[0.18em] text-cyan-300">
                      CUSTOMIZE
                    </span>

                    <span className="text-[9px] text-zinc-600">
                      02
                    </span>

                  </div>

                  <div className="mt-4 space-y-2.5">

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-sm bg-cyan-300/70" />
                      <div className="h-1.5 w-20 rounded-full bg-white/10" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-sm bg-blue-400/70" />
                      <div className="h-1.5 w-14 rounded-full bg-white/10" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-sm bg-violet-400/70" />
                      <div className="h-1.5 w-16 rounded-full bg-white/10" />
                    </div>

                  </div>
                </div>

                {/* Floating Card — Stream Ready */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-[20px]
                    z-10
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-[#080B16]/80
                    px-4
                    py-3
                    shadow-xl
                    shadow-black/30
                    backdrop-blur-xl
                  "
                >

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/10">
                    <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-semibold tracking-[0.12em] text-white">
                      STREAM READY
                    </p>

                    <p className="mt-0.5 text-[7px] text-zinc-600">
                      Your design is ready
                    </p>
                  </div>

                </div>

              </div>

              {/* Feature Cards */}
              <div className="mt-7 grid max-w-[700px] grid-cols-3 gap-3">

                <Feature
                  number="01"
                  title="Choose"
                  text="Pick your overlay"
                />

                <Feature
                  number="02"
                  title="Customize"
                  text="Make it yours"
                />

                <Feature
                  number="03"
                  title="Stream"
                  text="Go live"
                />

              </div>

            </div>
          </div>

          {/* =====================================================
              REGISTER CARD
              TETAP SAMA
          ===================================================== */}

          <div className="w-full">

            <div
              className="
                rounded-[28px]
                border
                border-white/[0.10]
                bg-[#08090f]/65
                p-6
                shadow-2xl
                shadow-black/50
                backdrop-blur-2xl
                sm:p-8
              "
            >

              {/* Card Header */}
              <div className="mb-8">

                <p
                  className="
                    mb-3
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-cyan-300
                  "
                >
                  Create Account
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  Welcome to VIDNOVA.
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  Create your account and start designing.
                </p>

              </div>

              {/* Register Form */}
              <RegisterForm />

              {/* Terms */}
              <div className="mt-7 border-t border-white/[0.07] pt-6 text-center">

                <p className="text-xs leading-5 text-zinc-600">
                  By creating an account, you agree to our{" "}

                  <span className="text-zinc-400">
                    Terms of Service
                  </span>

                  {" "}and{" "}

                  <span className="text-zinc-400">
                    Privacy Policy
                  </span>
                  .
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          MOBILE FOOTER
      ========================================================= */}

      <div className="absolute bottom-6 left-0 right-0 z-10 text-center lg:hidden">

        <p className="text-[10px] tracking-[0.25em] text-zinc-700">
          CREATE. CUSTOMIZE. STREAM.
        </p>

      </div>

    </main>
  );
}

/* ===============================================================
   FEATURE COMPONENT
=============================================================== */

function Feature({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-4
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-cyan-300/20
        hover:bg-white/[0.045]
      "
    >

      {/* Number */}
      <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan-300">
        {number}
      </p>

      {/* Title */}
      <p className="mt-3 text-sm font-medium text-white">
        {title}
      </p>

      {/* Description */}
      <p className="mt-1 text-xs text-zinc-500">
        {text}
      </p>

    </div>
  );
}