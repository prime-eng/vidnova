// Customer Dashboard

"use client";

import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

import {

  ArrowUpRight,

  Palette,

  ShoppingBag,

  Download,

  Plus,

} from "lucide-react";

const stats = [

  {

    label: "My Designs",

    value: "12",

    icon: Palette,

    description: "Saved designs",

  },

  {

    label: "Orders",

    value: "8",

    icon: ShoppingBag,

    description: "Total orders",

  },

  {

    label: "Downloads",

    value: "6",

    icon: Download,

    description: "Available files",

  },

  {

    label: "Total Spent",

    value: "Rp 689.000",

    icon: ShoppingBag,

    description: "All purchases",

  },

];

export default function DashboardPage() {

  return (

    <div className="relative min-h-[calc(100vh-88px)] overflow-hidden px-4 py-6 sm:px-6 lg:px-8">

      {/* Background Logo */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <img

          src={assetPath("/images/vidnova_teks.png")}

          alt=""

          aria-hidden="true"

          className="

            absolute left-1/2 top-1/2

            w-[800px] max-w-none

            -translate-x-1/2 -translate-y-1/2

            select-none object-contain

            opacity-[0.035]

          "

        />

      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Welcome */}

        <section

          className="

            mb-6 overflow-hidden rounded-2xl

            border border-white/[0.07]

            bg-[#0D182A]

            p-5

            sm:p-7

          "

        >

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-400">

                Welcome Back

              </p>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">

                Good Evening, Ari

              </h2>

              <p className="mt-2 max-w-xl text-sm text-slate-400">

                Ready to create something new? Customize your next

                TikTok livestream overlay with VIDNOVA.

              </p>

            </div>

            <Link

              href="/"

              className="

                inline-flex h-11 shrink-0

                items-center justify-center gap-2

                rounded-xl

                bg-gradient-to-r

                from-cyan-400 to-blue-500

                px-5

                text-sm font-semibold text-white

                shadow-[0_0_25px_rgba(0,190,255,0.16)]

                transition

                hover:scale-[1.02]

                hover:shadow-[0_0_30px_rgba(0,190,255,0.25)]

              "

            >

              <Plus size={17} />

              Create New Design

            </Link>

          </div>

        </section>

        {/* Statistics */}

        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {

            const Icon = stat.icon;

            return (

              <div

                key={stat.label}

                className="

                  rounded-2xl

                  border border-white/[0.07]

                  bg-[#0D182A]

                  p-5

                  transition

                  hover:border-cyan-400/15

                  hover:bg-[#101D32]

                "

              >

                <div className="flex items-start justify-between">

                  <div

                    className="

                      flex h-10 w-10

                      items-center justify-center

                      rounded-xl

                      bg-cyan-400/[0.08]

                      text-cyan-400

                    "

                  >

                    <Icon size={19} />

                  </div>

                  <ArrowUpRight

                    size={16}

                    className="text-slate-700"

                  />

                </div>

                <p className="mt-5 text-xs text-slate-500">

                  {stat.label}

                </p>

                <p className="mt-1 text-xl font-bold text-white">

                  {stat.value}

                </p>

                <p className="mt-1 text-[11px] text-slate-600">

                  {stat.description}

                </p>

              </div>

            );

          })}

        </section>

        {/* Main Content */}

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">

          {/* Recent Designs */}

          <div

            className="

              rounded-2xl

              border border-white/[0.07]

              bg-[#0D182A]

              p-5

            "

          >

            <div className="mb-5 flex items-center justify-between">

              <div>

                <h3 className="text-sm font-semibold text-white">

                  Recent Designs

                </h3>

                <p className="mt-1 text-xs text-slate-600">

                  Your latest saved designs

                </p>

              </div>

              <Link

                href="/dashboard/designs"

                className="

                  text-xs font-medium text-cyan-400

                  transition hover:text-cyan-300

                "

              >

                View All

              </Link>

            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {[

                {

                  name: "Cyber Neon Frame",

                  category: "Frame",

                  status: "Draft",

                },

                {

                  name: "Blue Particle Flow",

                  category: "Particle",

                  status: "Ready",

                },

              ].map((design) => (

                <div

                  key={design.name}

                  className="

                    group rounded-xl

                    border border-white/[0.06]

                    bg-[#091321]

                    p-4

                    transition

                    hover:border-cyan-400/15

                  "

                >

                  <div

                    className="

                      mb-4 flex h-28

                      items-center justify-center

                      overflow-hidden rounded-lg

                      border border-white/[0.05]

                      bg-gradient-to-br

                      from-cyan-400/[0.06]

                      via-blue-500/[0.04]

                      to-violet-500/[0.05]

                    "

                  >

                    <span className="text-[10px] uppercase tracking-[0.15em] text-slate-700">

                      MP4 Preview

                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-3">

                    <div className="min-w-0">

                      <h4 className="truncate text-sm font-medium text-slate-200">

                        {design.name}

                      </h4>

                      <p className="mt-1 text-[11px] text-slate-600">

                        {design.category}

                      </p>

                    </div>

                    <span

                      className="

                        shrink-0 rounded-full

                        border border-cyan-400/10

                        bg-cyan-400/[0.06]

                        px-2 py-1

                        text-[9px] font-medium

                        text-cyan-300

                      "

                    >

                      {design.status}

                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Recent Orders */}

          <div

            className="

              rounded-2xl

              border border-white/[0.07]

              bg-[#0D182A]

              p-5

            "

          >

            <div className="mb-5 flex items-center justify-between">

              <div>

                <h3 className="text-sm font-semibold text-white">

                  Recent Orders

                </h3>

                <p className="mt-1 text-xs text-slate-600">

                  Your latest purchases

                </p>

              </div>

              <Link

                href="/dashboard/orders"

                className="

                  text-xs font-medium text-cyan-400

                  transition hover:text-cyan-300

                "

              >

                View All

              </Link>

            </div>

            <div className="space-y-3">

              {[

                {

                  id: "#VN-1024",

                  product: "Cyber Neon Frame",

                  price: "Rp 79.000",

                  status: "Paid",

                },

                {

                  id: "#VN-1023",

                  product: "Violet Energy",

                  price: "Rp 99.000",

                  status: "Paid",

                },

                {

                  id: "#VN-1022",

                  product: "Blue Particle Flow",

                  price: "Rp 69.000",

                  status: "Paid",

                },

              ].map((order) => (

                <div

                  key={order.id}

                  className="

                    flex items-center justify-between

                    gap-3 rounded-xl

                    border border-white/[0.05]

                    bg-[#091321]

                    p-3.5

                  "

                >

                  <div className="min-w-0">

                    <p className="text-xs font-semibold text-slate-300">

                      {order.id}

                    </p>

                    <p className="mt-1 truncate text-[11px] text-slate-600">

                      {order.product}

                    </p>

                  </div>

                  <div className="shrink-0 text-right">

                    <p className="text-xs font-medium text-white">

                      {order.price}

                    </p>

                    <p className="mt-1 text-[10px] text-emerald-400">

                      {order.status}

                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* Quick Actions */}

        <section className="mt-6">

          <div className="mb-4">

            <h3 className="text-sm font-semibold text-white">

              Quick Actions

            </h3>

            <p className="mt-1 text-xs text-slate-600">

              Quickly access your VIDNOVA workspace

            </p>

          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

            <Link

              href="/"

              className="

                rounded-2xl border border-white/[0.07]

                bg-[#0D182A] p-5

                transition hover:border-cyan-400/20

                hover:bg-[#101D32]

              "

            >

              <Palette

                size={20}

                className="text-cyan-400"

              />

              <p className="mt-4 text-sm font-semibold text-white">

                Create New Design

              </p>

              <p className="mt-1 text-xs text-slate-600">

                Start customizing a new overlay.

              </p>

            </Link>

            <Link

              href="/"

              className="

                rounded-2xl border border-white/[0.07]

                bg-[#0D182A] p-5

                transition hover:border-blue-400/20

                hover:bg-[#101D32]

              "

            >

              <ShoppingBag

                size={20}

                className="text-blue-400"

              />

              <p className="mt-4 text-sm font-semibold text-white">

                Explore Overlays

              </p>

              <p className="mt-1 text-xs text-slate-600">

                Discover new livestream overlays.

              </p>

            </Link>

            <Link

              href="/dashboard/downloads"

              className="

                rounded-2xl border border-white/[0.07]

                bg-[#0D182A] p-5

                transition hover:border-violet-400/20

                hover:bg-[#101D32]

              "

            >

              <Download

                size={20}

                className="text-violet-400"

              />

              <p className="mt-4 text-sm font-semibold text-white">

                View Downloads

              </p>

              <p className="mt-1 text-xs text-slate-600">

                Access your purchased files.

              </p>

            </Link>

          </div>

        </section>

      </div>

    </div>

  );

}
