"use client";

const stats = [
  {
    label: "Total Revenue",
    value: "Rp 12.84M",
    change: "+18.4%",
    description: "vs last month",
    type: "revenue",
    accent: "cyan",
  },
  {
    label: "Total Orders",
    value: "248",
    change: "+12.8%",
    description: "vs last month",
    type: "orders",
    accent: "violet",
  },
  {
    label: "MP4 Assets",
    value: "86",
    change: "+6",
    description: "this month",
    type: "assets",
    accent: "blue",
  },
  {
    label: "Pending Transactions",
    value: "12",
    change: "4.8%",
    description: "of total orders",
    type: "pending",
    accent: "amber",
  },
];

const salesData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 58 },
  { month: "Mar", value: 51 },
  { month: "Apr", value: 76 },
  { month: "May", value: 68 },
  { month: "Jun", value: 91 },
  { month: "Jul", value: 84 },
  { month: "Aug", value: 108 },
  { month: "Sep", value: 97 },
  { month: "Oct", value: 124 },
];

const transactions = [
  {
    id: "#VN-10248",
    customer: "Rizky Maulana",
    email: "rizky@example.com",
    product: "Neon Pulse Overlay",
    amount: "Rp 79.000",
    status: "Paid",
    date: "04 Oct 2026",
  },
  {
    id: "#VN-10247",
    customer: "Dimas Pratama",
    email: "dimas@example.com",
    product: "Cyber Wave Overlay",
    amount: "Rp 99.000",
    status: "Paid",
    date: "04 Oct 2026",
  },
  {
    id: "#VN-10246",
    customer: "Fajar Nugraha",
    email: "fajar@example.com",
    product: "Dark Energy Pack",
    amount: "Rp 129.000",
    status: "Pending",
    date: "03 Oct 2026",
  },
  {
    id: "#VN-10245",
    customer: "Andi Saputra",
    email: "andi@example.com",
    product: "Minimal Stream Pack",
    amount: "Rp 59.000",
    status: "Paid",
    date: "03 Oct 2026",
  },
  {
    id: "#VN-10244",
    customer: "Raka Firmansyah",
    email: "raka@example.com",
    product: "Violet Storm Overlay",
    amount: "Rp 89.000",
    status: "Paid",
    date: "02 Oct 2026",
  },
];

const maxSales = Math.max(...salesData.map((item) => item.value));

export default function AdminDashboardPage() {
  return (
    <div className="min-h-full bg-[#0B1424] text-white">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[20%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.035] blur-[140px]" />

        <div className="absolute right-0 top-[15%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-[140px]" />

        <div className="absolute bottom-0 left-[40%] h-[400px] w-[400px] rounded-full bg-violet-500/[0.025] blur-[140px]" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
                Overview
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Store Performance
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Monitor your VIDNOVA store performance and sales activity.
              </p>
            </div>

            {/* DATE SELECTOR */}
            <button
              type="button"
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-xl
                border
                border-[#314866]
                bg-[#14243A]
                px-3.5
                py-2.5
                text-xs
                font-medium
                text-slate-300
                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                transition
                hover:border-cyan-400/30
                hover:bg-[#192B44]
                hover:text-white
              "
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="17"
                  rx="2"
                />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
              </svg>

              <span>October 2026</span>

              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ===================================================
            STAT CARDS
        ==================================================== */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#2A405D]
                bg-[#101D32]
                p-5
                shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                transition
                duration-300
                hover:-translate-y-0.5
                hover:border-[#3B587A]
                hover:bg-[#13223A]
              "
            >
              {/* CARD GLOW */}
              <div
                className={`
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  blur-3xl
                  transition
                  duration-500
                  ${
                    stat.accent === "cyan"
                      ? "bg-cyan-400/[0.08] group-hover:bg-cyan-400/[0.14]"
                      : stat.accent === "violet"
                        ? "bg-violet-500/[0.08] group-hover:bg-violet-500/[0.14]"
                        : stat.accent === "blue"
                          ? "bg-blue-500/[0.08] group-hover:bg-blue-500/[0.14]"
                          : "bg-amber-400/[0.08] group-hover:bg-amber-400/[0.14]"
                  }
                `}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-medium text-slate-400">
                    {stat.label}
                  </p>

                  {/* ICON */}
                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${
                        stat.accent === "cyan"
                          ? "border-cyan-300/20 bg-cyan-400/15 text-cyan-300"
                          : stat.accent === "violet"
                            ? "border-violet-300/20 bg-violet-400/15 text-violet-300"
                            : stat.accent === "blue"
                              ? "border-blue-300/20 bg-blue-400/15 text-blue-300"
                              : "border-amber-300/20 bg-amber-400/15 text-amber-300"
                      }
                    `}
                  >
                    {stat.type === "revenue" && (
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      >
                        <path d="M12 3v18" />
                        <path d="M17 7.5c0-1.7-2.2-3-5-3s-5 1.3-5 3 2.2 3 5 3 5 1.3 5 3-2.2 3-5 3-5-1.3-5-3" />
                      </svg>
                    )}

                    {stat.type === "orders" && (
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
                        <path d="M6 3h12l2 5H4l2-5Z" />
                        <path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
                        <path d="M9 12h6" />
                      </svg>
                    )}

                    {stat.type === "assets" && (
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
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="3"
                        />
                        <path d="m8 15 3-3 2 2 3-4 3 5" />
                      </svg>
                    )}

                    {stat.type === "pending" && (
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
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-[27px] font-semibold tracking-tight text-slate-50">
                    {stat.value}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={
                        stat.type === "pending"
                          ? "text-[11px] font-semibold text-amber-400"
                          : "text-[11px] font-semibold text-emerald-400"
                      }
                    >
                      {stat.change}
                    </span>

                    <span className="text-[11px] text-slate-500">
                      {stat.description}
                    </span>
                  </div>
                </div>

                {/* MINI GRAPH */}
                <div className="mt-4 flex h-7 items-end gap-1">
                  {[25, 35, 28, 48, 42, 65, 58, 78].map(
                    (height, index) => (
                      <div
                        key={index}
                        className={`
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300
                          group-hover:scale-y-110
                          ${
                            stat.accent === "cyan"
                              ? "bg-cyan-400/50"
                              : stat.accent === "violet"
                                ? "bg-violet-400/50"
                                : stat.accent === "blue"
                                  ? "bg-blue-400/50"
                                  : "bg-amber-400/50"
                          }
                        `}
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================
            SALES + QUICK STATS
        ==================================================== */}

        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_330px]">
          {/* SALES OVERVIEW */}
          <div
            className="
              overflow-hidden
              rounded-2xl
              border
              border-[#2A405D]
              bg-[#101D32]
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            "
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-[#263A55] px-5 py-5 sm:px-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  Sales Overview
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Monthly sales performance
                </p>
              </div>

              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#314866]
                  bg-[#14243A]
                  px-3
                  py-2
                  text-[10px]
                  font-medium
                  text-slate-400
                  transition
                  hover:border-cyan-400/25
                  hover:text-cyan-300
                "
              >
                Last 10 Months

                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {/* CHART */}
            <div className="px-4 pb-5 pt-7 sm:px-6">
              <div className="relative h-[270px]">
                {/* GRID */}
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((line) => (
                    <div
                      key={line}
                      className="border-t border-[#29405D]/70"
                    />
                  ))}
                </div>

                {/* Y LABELS */}
                <div className="pointer-events-none absolute left-0 top-0 flex h-[calc(100%-32px)] flex-col justify-between">
                  {[150, 100, 50, 0].map((value) => (
                    <span
                      key={value}
                      className="text-[9px] text-slate-600"
                    >
                      {value}
                    </span>
                  ))}
                </div>

                {/* BARS */}
                <div className="absolute inset-x-8 bottom-0 top-0 flex items-end justify-between gap-2">
                  {salesData.map((item) => {
                    const height =
                      (item.value / maxSales) * 100;

                    return (
                      <div
                        key={item.month}
                        className="group flex h-full flex-1 flex-col items-center justify-end"
                      >
                        {/* TOOLTIP */}
                        <div className="mb-2 opacity-0 transition duration-200 group-hover:opacity-100">
                          <span className="rounded-md border border-cyan-400/20 bg-[#172A43] px-2 py-1 text-[9px] font-medium text-cyan-300 shadow-lg">
                            {item.value}
                          </span>
                        </div>

                        {/* BAR */}
                        <div
                          className="
                            relative
                            w-full
                            max-w-[38px]
                            overflow-hidden
                            rounded-t-lg
                            bg-gradient-to-t
                            from-blue-600
                            via-blue-500
                            to-cyan-400
                            opacity-90
                            shadow-[0_0_18px_rgba(34,211,238,0.08)]
                            transition
                            duration-300
                            group-hover:opacity-100
                            group-hover:shadow-[0_0_22px_rgba(34,211,238,0.18)]
                          "
                          style={{
                            height: `${height}%`,
                          }}
                        >
                          <div className="absolute inset-x-0 top-0 h-px bg-cyan-200/80" />
                        </div>

                        {/* LABEL */}
                        <span className="mt-3 text-[9px] text-slate-500">
                          {item.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* QUICK STATS */}
          <div
            className="
              rounded-2xl
              border
              border-[#2A405D]
              bg-[#101D32]
              p-5
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            "
          >
            <h3 className="text-sm font-semibold text-slate-100">
              Quick Stats
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Current store status
            </p>

            <div className="mt-7 space-y-6">
              {/* COMPLETED */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Completed Orders
                  </span>

                  <span className="text-xs font-semibold text-slate-100">
                    236
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#1D3049]">
                    <div className="h-full w-[95%] rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.25)]" />
                  </div>

                  <span className="text-[10px] text-slate-500">
                    94.8%
                  </span>
                </div>
              </div>

              {/* PENDING */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Pending Orders
                  </span>

                  <span className="text-xs font-semibold text-slate-100">
                    12
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#1D3049]">
                    <div className="h-full w-[5%] min-w-[14px] rounded-full bg-amber-400" />
                  </div>

                  <span className="text-[10px] text-slate-500">
                    4.8%
                  </span>
                </div>
              </div>

              {/* ASSETS */}
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Active Assets
                  </span>

                  <span className="text-xs font-semibold text-slate-100">
                    86
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#1D3049]">
                    <div className="h-full w-[78%] rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.25)]" />
                  </div>

                  <span className="text-[10px] text-slate-500">
                    78%
                  </span>
                </div>
              </div>
            </div>

            {/* CONVERSION */}
            <div className="mt-7 border-t border-[#263A55] pt-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Conversion
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl font-semibold text-slate-50">
                  94.8%
                </span>

                <span className="mb-1 text-[10px] font-semibold text-emerald-400">
                  +3.2%
                </span>
              </div>

              <p className="mt-1 text-[11px] text-slate-500">
                Successful payment completion rate
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            RECENT TRANSACTIONS
        ==================================================== */}

        <div
          className="
            mt-4
            overflow-hidden
            rounded-2xl
            border
            border-[#2A405D]
            bg-[#101D32]
            shadow-[0_12px_35px_rgba(0,0,0,0.12)]
          "
        >
          {/* HEADER */}
          <div className="flex flex-col gap-3 border-b border-[#263A55] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                Recent Transactions
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Latest customer purchases
              </p>
            </div>

            <button
              type="button"
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-lg
                border
                border-[#314866]
                bg-[#14243A]
                px-3
                py-2
                text-[10px]
                font-medium
                text-slate-400
                transition
                hover:border-cyan-400/25
                hover:text-cyan-300
              "
            >
              View All

              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[850px]">
              <thead>
                <tr className="border-b border-[#263A55] bg-[#0E1A2C]/60">
                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Customer
                  </th>

                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Product
                  </th>

                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Amount
                  </th>

                  <th className="px-6 py-3 text-left text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Status
                  </th>

                  <th className="px-6 py-3 text-right text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Date
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="
                      border-b
                      border-[#20334C]
                      transition
                      last:border-0
                      hover:bg-[#14243A]/60
                    "
                  >
                    {/* CUSTOMER */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
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
                            to-blue-500
                            text-[10px]
                            font-bold
                            text-white
                            shadow-[0_0_14px_rgba(34,211,238,0.15)]
                          "
                        >
                          {transaction.customer.charAt(0)}
                        </div>

                        <div>
                          <p className="text-xs font-medium text-slate-200">
                            {transaction.customer}
                          </p>

                          <p className="mt-0.5 text-[9px] text-slate-500">
                            {transaction.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* PRODUCT */}
                    <td className="px-6 py-4">
                      <p className="text-xs font-medium text-slate-300">
                        {transaction.product}
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-500">
                        {transaction.id}
                      </p>
                    </td>

                    {/* AMOUNT */}
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-slate-100">
                        {transaction.amount}
                      </span>
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-4">
                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          px-2.5
                          py-1
                          text-[9px]
                          font-semibold
                          ${
                            transaction.status === "Paid"
                              ? "border-emerald-400/15 bg-emerald-400/10 text-emerald-400"
                              : "border-amber-400/15 bg-amber-400/10 text-amber-400"
                          }
                        `}
                      >
                        <span
                          className={`
                            h-1.5
                            w-1.5
                            rounded-full
                            ${
                              transaction.status === "Paid"
                                ? "bg-emerald-400"
                                : "bg-amber-400"
                            }
                          `}
                        />

                        {transaction.status}
                      </span>
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-4 text-right">
                      <span className="text-[10px] text-slate-500">
                        {transaction.date}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE */}
          <div className="divide-y divide-[#20334C] md:hidden">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="p-4 transition hover:bg-[#14243A]/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
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
                        to-blue-500
                        text-[10px]
                        font-bold
                        text-white
                      "
                    >
                      {transaction.customer.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-slate-200">
                        {transaction.customer}
                      </p>

                      <p className="mt-0.5 truncate text-[9px] text-slate-500">
                        {transaction.product}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`
                      shrink-0
                      rounded-full
                      border
                      px-2
                      py-1
                      text-[8px]
                      font-semibold
                      ${
                        transaction.status === "Paid"
                          ? "border-emerald-400/15 bg-emerald-400/10 text-emerald-400"
                          : "border-amber-400/15 bg-amber-400/10 text-amber-400"
                      }
                    `}
                  >
                    {transaction.status}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[9px] text-slate-500">
                    {transaction.id} · {transaction.date}
                  </span>

                  <span className="text-xs font-semibold text-slate-100">
                    {transaction.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}