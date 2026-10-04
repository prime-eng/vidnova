"use client";

import { useMemo, useState } from "react";
import { assetPath } from "@/lib/assetPath";

type TransactionStatus =

  | "Paid"

  | "Pending"

  | "Failed"

  | "Cancelled"

  | "Refunded";

type Transaction = {

  id: string;

  customer: string;

  email: string;

  product: string;

  amount: number;

  paymentMethod: string;

  status: TransactionStatus;

  date: string;

  time: string;

};

const initialTransactions: Transaction[] = [

  {

    id: "VN-20261004-001",

    customer: "Ari",

    email: "ari@example.com",

    product: "Cyber Neon Overlay",

    amount: 79000,

    paymentMethod: "QRIS",

    status: "Paid",

    date: "04 Oct 2026",

    time: "14:32",

  },

  {

    id: "VN-20261004-002",

    customer: "Rizky",

    email: "rizky@example.com",

    product: "Violet Energy Overlay",

    amount: 99000,

    paymentMethod: "GoPay",

    status: "Pending",

    date: "04 Oct 2026",

    time: "13:18",

  },

  {

    id: "VN-20261003-003",

    customer: "Dinda",

    email: "dinda@example.com",

    product: "Cyber Stream Pack",

    amount: 149000,

    paymentMethod: "Bank Transfer",

    status: "Paid",

    date: "03 Oct 2026",

    time: "20:41",

  },

  {

    id: "VN-20261003-004",

    customer: "Fajar",

    email: "fajar@example.com",

    product: "Blue Particle Flow",

    amount: 69000,

    paymentMethod: "OVO",

    status: "Failed",

    date: "03 Oct 2026",

    time: "18:25",

  },

  {

    id: "VN-20261002-005",

    customer: "Nadia",

    email: "nadia@example.com",

    product: "Glowing Border",

    amount: 59000,

    paymentMethod: "QRIS",

    status: "Cancelled",

    date: "02 Oct 2026",

    time: "16:07",

  },

  {

    id: "VN-20261002-006",

    customer: "Bagas",

    email: "bagas@example.com",

    product: "Streamer Starter Pack",

    amount: 179000,

    paymentMethod: "DANA",

    status: "Paid",

    date: "02 Oct 2026",

    time: "11:54",

  },

  {

    id: "VN-20261001-007",

    customer: "Salsa",

    email: "salsa@example.com",

    product: "Dark Gradient Motion",

    amount: 89000,

    paymentMethod: "QRIS",

    status: "Refunded",

    date: "01 Oct 2026",

    time: "10:22",

  },

];

const statuses: Array<"All" | TransactionStatus> = [

  "All",

  "Paid",

  "Pending",

  "Failed",

  "Cancelled",

  "Refunded",

];

function formatCurrency(value: number) {

  return new Intl.NumberFormat("id-ID", {

    style: "currency",

    currency: "IDR",

    maximumFractionDigits: 0,

  }).format(value);

}

function StatusBadge({ status }: { status: TransactionStatus }) {

  const styles: Record<TransactionStatus, string> = {

    Paid: "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300",

    Pending: "border-amber-400/20 bg-amber-400/[0.08] text-amber-300",

    Failed: "border-red-400/20 bg-red-400/[0.08] text-red-300",

    Cancelled: "border-slate-400/15 bg-slate-400/[0.06] text-slate-400",

    Refunded: "border-violet-400/20 bg-violet-400/[0.08] text-violet-300",

  };

  return (

    <span

      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold ${styles[status]}`}

    >

      <span

        className={`h-1.5 w-1.5 rounded-full ${

          status === "Paid"

            ? "bg-emerald-400"

            : status === "Pending"

              ? "bg-amber-400"

              : status === "Failed"

                ? "bg-red-400"

                : status === "Refunded"

                  ? "bg-violet-400"

                  : "bg-slate-500"

        }`}

      />

      {status}

    </span>

  );

}

function StatCard({

  label,

  value,

  description,

  accent,

}: {

  label: string;

  value: string;

  description: string;

  accent: "cyan" | "blue" | "violet" | "amber";

}) {

  const accents = {

    cyan: "text-cyan-300 bg-cyan-400/[0.08]",

    blue: "text-blue-300 bg-blue-400/[0.08]",

    violet: "text-violet-300 bg-violet-400/[0.08]",

    amber: "text-amber-300 bg-amber-400/[0.08]",

  };

  return (

    <div className="rounded-2xl border border-[#263B56] bg-[#101D32] p-4 transition duration-200 hover:border-[#36506F]">

      <div className="flex items-start justify-between gap-3">

        <div>

          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">

            {label}

          </p>

          <p className={`mt-2 text-2xl font-semibold tracking-tight ${accents[accent].split(" ")[0]}`}>

            {value}

          </p>

          <p className="mt-1 text-xs text-slate-600">{description}</p>

        </div>

        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accents[accent]}`}>

          <span className="text-sm font-bold">₿</span>

        </div>

      </div>

    </div>

  );

}

export default function TransactionsPage() {

  const [transactions] = useState<Transaction[]>(initialTransactions);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<"All" | TransactionStatus>("All");

  const [selectedTransaction, setSelectedTransaction] =

    useState<Transaction | null>(null);

  const filteredTransactions = useMemo(() => {

    const query = search.trim().toLowerCase();

    return transactions.filter((transaction) => {

      const matchesSearch =

        !query ||

        transaction.id.toLowerCase().includes(query) ||

        transaction.customer.toLowerCase().includes(query) ||

        transaction.email.toLowerCase().includes(query) ||

        transaction.product.toLowerCase().includes(query);

      const matchesStatus =

        statusFilter === "All" || transaction.status === statusFilter;

      return matchesSearch && matchesStatus;

    });

  }, [transactions, search, statusFilter]);

  const paidTransactions = transactions.filter(

    (transaction) => transaction.status === "Paid"

  );

  const totalRevenue = paidTransactions.reduce(

    (total, transaction) => total + transaction.amount,

    0

  );

  const totalTransactions = transactions.length;

  const pendingTransactions = transactions.filter(

    (transaction) => transaction.status === "Pending"

  ).length;

  const paidCount = paidTransactions.length;

  return (

    <div className="relative min-h-full overflow-hidden bg-[#0B1424] px-4 py-6 text-white sm:px-6 lg:px-8">

      {/* FIXED VIDNOVA TEXT LOGO BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <img

          src={assetPath("/images/vidnova_teks.png")}

          alt=""

          aria-hidden="true"

          className="absolute left-1/2 top-1/2 w-[850px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-[0.085]"

        />

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]" />

        <div className="absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[500px] w-[500px] rounded-full bg-violet-500/[0.025] blur-[150px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* HEADER */}

        <section className="mb-6">

          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">

            <div>

              <div className="mb-2 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">

                  Transaction Management

                </span>

              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">

                Transactions

              </h2>

              <p className="mt-1.5 max-w-2xl text-sm text-slate-400">

                Monitor payments and sales transactions from your VIDNOVA store.

              </p>

            </div>

          </div>

        </section>

        {/* STATISTICS */}

        <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard

            label="Total Revenue"

            value={formatCurrency(totalRevenue)}

            description="From paid transactions"

            accent="cyan"

          />

          <StatCard

            label="Total Transactions"

            value={String(totalTransactions)}

            description="All recorded transactions"

            accent="blue"

          />

          <StatCard

            label="Paid Transactions"

            value={String(paidCount)}

            description="Successfully paid"

            accent="violet"

          />

          <StatCard

            label="Pending"

            value={String(pendingTransactions)}

            description="Awaiting payment"

            accent="amber"

          />

        </section>

        {/* TOOLBAR */}

        <section className="mb-5 rounded-2xl border border-[#263B56] bg-[#101D32] p-4 shadow-[0_15px_45px_rgba(0,0,0,0.12)]">

          <div className="flex flex-col gap-3 md:flex-row">

            <div className="relative flex-1">

              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">

                <svg

                  width="17"

                  height="17"

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

                value={search}

                onChange={(event) => setSearch(event.target.value)}

                placeholder="Search order ID, customer, email, or product..."

                className="h-11 w-full rounded-xl border border-[#2A405D] bg-[#0B1424] pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/5"

              />

            </div>

            <select

              value={statusFilter}

              onChange={(event) =>

                setStatusFilter(event.target.value as "All" | TransactionStatus)

              }

              className="h-11 rounded-xl border border-[#2A405D] bg-[#0B1424] px-4 text-sm text-slate-300 outline-none transition focus:border-cyan-400/40"

            >

              {statuses.map((status) => (

                <option key={status} value={status}>

                  {status === "All" ? "All Status" : status}

                </option>

              ))}

            </select>

          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-3">

            <p className="text-xs text-slate-500">

              Showing{" "}

              <span className="font-medium text-slate-300">

                {filteredTransactions.length}

              </span>{" "}

              of{" "}

              <span className="font-medium text-slate-300">

                {transactions.length}

              </span>{" "}

              transactions

            </p>

            {(search || statusFilter !== "All") && (

              <button

                type="button"

                onClick={() => {

                  setSearch("");

                  setStatusFilter("All");

                }}

                className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300"

              >

                Clear filters

              </button>

            )}

          </div>

        </section>

        {/* TABLE */}

        <section className="overflow-hidden rounded-2xl border border-[#263B56] bg-[#101D32] shadow-[0_15px_45px_rgba(0,0,0,0.12)]">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] border-collapse">

              <thead>

                <tr className="border-b border-white/[0.06] bg-white/[0.015] text-left">

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">

                    Order ID

                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">

                    Customer

                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">

                    Product

                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">

                    Amount

                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">

                    Payment

                  </th>

                  <th className="px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">

                    Status

                  </th>

                  <th className="px-5 py-4 text-right text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">

                    Action

                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredTransactions.length > 0 ? (

                  filteredTransactions.map((transaction) => (

                    <tr

                      key={transaction.id}

                      className="border-b border-white/[0.04] transition hover:bg-white/[0.02]"

                    >

                      <td className="px-5 py-4">

                        <p className="text-xs font-semibold text-cyan-300">

                          {transaction.id}

                        </p>

                        <p className="mt-1 text-[10px] text-slate-600">

                          {transaction.date} · {transaction.time}

                        </p>

                      </td>

                      <td className="px-5 py-4">

                        <p className="text-xs font-medium text-white">

                          {transaction.customer}

                        </p>

                        <p className="mt-1 text-[10px] text-slate-600">

                          {transaction.email}

                        </p>

                      </td>

                      <td className="px-5 py-4">

                        <p className="max-w-[210px] truncate text-xs font-medium text-slate-300">

                          {transaction.product}

                        </p>

                      </td>

                      <td className="px-5 py-4">

                        <p className="text-xs font-semibold text-white">

                          {formatCurrency(transaction.amount)}

                        </p>

                      </td>

                      <td className="px-5 py-4">

                        <span className="text-xs text-slate-400">

                          {transaction.paymentMethod}

                        </span>

                      </td>

                      <td className="px-5 py-4">

                        <StatusBadge status={transaction.status} />

                      </td>

                      <td className="px-5 py-4 text-right">

                        <button

                          type="button"

                          onClick={() => setSelectedTransaction(transaction)}

                          className="rounded-lg border border-[#2A405D] bg-white/[0.02] px-3 py-2 text-[11px] font-medium text-slate-400 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300"

                        >

                          View Detail

                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan={7} className="px-5 py-16 text-center">

                      <p className="text-sm font-medium text-slate-300">

                        No transactions found

                      </p>

                      <p className="mt-1 text-xs text-slate-600">

                        Try changing your search or status filter.

                      </p>

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </section>

        {/* FOOTER */}

        <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.05] pt-5 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">

          <p>VIDNOVA Transaction Management · Admin Panel</p>

          <p>Payment monitoring</p>

        </div>

      </div>

      {/* DETAIL MODAL */}

      {selectedTransaction && (

        <div

          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"

          onMouseDown={(event) => {

            if (event.target === event.currentTarget) {

              setSelectedTransaction(null);

            }

          }}

        >

          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[#2A405D] bg-[#101D32] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-6">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">

                  Transaction Detail

                </p>

                <h3 className="mt-1 text-base font-semibold text-white">

                  {selectedTransaction.id}

                </h3>

              </div>

              <button

                type="button"

                onClick={() => setSelectedTransaction(null)}

                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-slate-500 transition hover:bg-white/[0.05] hover:text-white"

                aria-label="Close"

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

            </div>

            <div className="space-y-4 p-5 sm:p-6">

              <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#0B1424] p-4">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-600">

                    Payment Status

                  </p>

                  <div className="mt-2">

                    <StatusBadge status={selectedTransaction.status} />

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-600">

                    Amount

                  </p>

                  <p className="mt-1 text-lg font-semibold text-cyan-300">

                    {formatCurrency(selectedTransaction.amount)}

                  </p>

                </div>

              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <DetailItem label="Customer" value={selectedTransaction.customer} />

                <DetailItem label="Email" value={selectedTransaction.email} />

                <DetailItem label="Product" value={selectedTransaction.product} />

                <DetailItem

                  label="Payment Method"

                  value={selectedTransaction.paymentMethod}

                />

                <DetailItem label="Date" value={selectedTransaction.date} />

                <DetailItem label="Time" value={selectedTransaction.time} />

              </div>

            </div>

            <div className="border-t border-white/[0.06] p-5 sm:px-6">

              <button

                type="button"

                onClick={() => setSelectedTransaction(null)}

                className="h-10 w-full rounded-xl border border-[#2A405D] bg-white/[0.02] text-xs font-semibold text-slate-400 transition hover:bg-white/[0.05] hover:text-white"

              >

                Close

              </button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}

function DetailItem({ label, value }: { label: string; value: string }) {

  return (

    <div className="rounded-xl border border-white/[0.05] bg-[#0B1424] p-3.5">

      <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-slate-600">

        {label}

      </p>

      <p className="mt-1.5 truncate text-xs font-medium text-slate-300">

        {value}

      </p>

    </div>

  );

}
