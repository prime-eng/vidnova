"use client";

import { useState } from "react";

type SettingsTab =
  | "general"
  | "store"
  | "profile"
  | "notifications"
  | "system";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("general");

  const [storeName, setStoreName] = useState("VIDNOVA");
  const [description, setDescription] = useState(
    "Create. Customize. Stream."
  );
  const [storeStatus, setStoreStatus] = useState(true);
  const [maintenance, setMaintenance] = useState(false);

  const [notifications, setNotifications] = useState({
    newOrder: true,
    paymentSuccess: true,
    paymentFailed: true,
    newUser: false,
  });

  const tabs = [
    {
      id: "general" as SettingsTab,
      label: "General",
      description: "Basic store settings",
      icon: (
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
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.55V22h-2.7v-.09a1.7 1.7 0 0 0-1.03-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 7.76 17a1.7 1.7 0 0 0-1.55-1.03H6v-2.7h.21A1.7 1.7 0 0 0 7.76 12a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.9-1.9.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.03-1.55V7h2.7v.21a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.9 1.9-.06.06A1.7 1.7 0 0 0 19.4 12a1.7 1.7 0 0 0 1.55 1.03H21v2.7h-.09A1.7 1.7 0 0 0 19.4 15Z"
          opacity=".7"
        />
      </svg>
      ),
    },
    {
      id: "store" as SettingsTab,
      label: "Store",
      description: "Store configuration",
      icon: (
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
          <path d="M3 9.5 5 4h14l2 5.5" />
          <path d="M4 9.5v9.5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.5" />
          <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
          <path d="M9 20v-6h6v6" />
        </svg>
      ),
    },
    {
      id: "profile" as SettingsTab,
      label: "Admin Profile",
      description: "Account information",
      icon: (
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
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c.8-3.4 3.2-5 7-5s6.2 1.6 7 5" />
        </svg>
      ),
    },
    {
      id: "notifications" as SettingsTab,
      label: "Notifications",
      description: "Notification preferences",
      icon: (
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
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
    },
    {
      id: "system" as SettingsTab,
      label: "System",
      description: "System information",
      icon: (
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
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8M12 18v3" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      ),
    },
  ];

  const handleSave = () => {
    alert("Settings saved successfully.");
  };

  return (
    <div className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#0B1424]">
      {/* VIDNOVA BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <img
          src="/images/vidnova_teks.png"
          alt=""
          aria-hidden="true"
          className="
            absolute left-1/2 top-1/2
            w-[850px] max-w-none
            -translate-x-1/2 -translate-y-1/2
            select-none object-contain
            opacity-[0.065]
          "
        />

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[140px]" />

        <div className="absolute right-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[500px] w-[500px] rounded-full bg-violet-500/[0.025] blur-[150px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-4 sm:p-6 lg:p-8">
        {/* HEADER */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-400/70">
            <span>Administration</span>
            <span className="text-slate-700">/</span>
            <span className="text-slate-500">Settings</span>
          </div>

          <div className="mt-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Settings
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your VIDNOVA store and administrator preferences.
            </p>
          </div>
        </div>

        {/* SETTINGS LAYOUT */}
        <div className="grid gap-5 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* SETTINGS NAV */}
          <aside
            className="
              h-fit rounded-2xl
              border border-[#2A405D]
              bg-[#101D32]/90
              p-2
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            "
          >
            <div className="mb-2 px-3 py-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Preferences
              </p>
            </div>

            <div className="space-y-1">
              {tabs.map((tab) => {
                const active = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex w-full items-center gap-3 rounded-xl px-3 py-3
                      text-left transition duration-200
                      ${
                        active
                          ? "border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-300"
                          : "border border-transparent text-slate-500 hover:bg-white/[0.025] hover:text-slate-300"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                        ${
                          active
                            ? "bg-cyan-400/[0.10] text-cyan-300"
                            : "bg-white/[0.025] text-slate-600"
                        }
                      `}
                    >
                      {tab.icon}
                    </span>

                    <span className="min-w-0">
                      <span className="block text-xs font-semibold">
                        {tab.label}
                      </span>

                      <span className="mt-0.5 block truncate text-[10px] text-slate-600">
                        {tab.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* SETTINGS CONTENT */}
          <section
            className="
              min-w-0 rounded-2xl
              border border-[#2A405D]
              bg-[#101D32]/90
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            "
          >
            {/* GENERAL */}
            {activeTab === "general" && (
              <div>
                <SectionHeader
                  title="General Settings"
                  description="Configure the basic identity of your VIDNOVA store."
                />

                <div className="space-y-6 p-5 sm:p-6">
                  {/* LOGO */}
                  <div>
                    <label className="mb-3 block text-xs font-medium text-slate-300">
                      Store Logo
                    </label>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="flex h-20 w-40 items-center justify-center rounded-xl border border-white/[0.07] bg-[#0B1424]">
                        <img
                          src="/images/vidnova_teks.png"
                          alt="VIDNOVA"
                          className="w-[120px] object-contain"
                        />
                      </div>

                      <div>
                        <button
                          type="button"
                          className="
                            rounded-lg border border-white/[0.08]
                            bg-white/[0.025] px-4 py-2
                            text-xs font-medium text-slate-300
                            transition hover:border-cyan-400/20
                            hover:bg-cyan-400/[0.05]
                            hover:text-cyan-300
                          "
                        >
                          Change Logo
                        </button>

                        <p className="mt-2 text-[10px] text-slate-600">
                          Recommended: PNG with transparent background.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.05]" />

                  {/* STORE NAME */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-300">
                      Store Name
                    </label>

                    <input
                      type="text"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                      className="
                        h-11 w-full rounded-xl
                        border border-white/[0.07]
                        bg-[#0B1424]
                        px-4 text-sm text-white
                        outline-none transition
                        placeholder:text-slate-700
                        focus:border-cyan-400/30
                        focus:ring-2 focus:ring-cyan-400/5
                      "
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-300">
                      Store Description
                    </label>

                    <textarea
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="
                        w-full resize-none rounded-xl
                        border border-white/[0.07]
                        bg-[#0B1424]
                        px-4 py-3 text-sm text-white
                        outline-none transition
                        placeholder:text-slate-700
                        focus:border-cyan-400/30
                        focus:ring-2 focus:ring-cyan-400/5
                      "
                    />
                  </div>

                  {/* STATUS */}
                  <SettingToggle
                    title="Store Status"
                    description="Allow customers to browse and purchase overlays."
                    enabled={storeStatus}
                    onChange={setStoreStatus}
                  />

                  <div className="flex justify-end pt-2">
                    <SaveButton onClick={handleSave} />
                  </div>
                </div>
              </div>
            )}

            {/* STORE */}
            {activeTab === "store" && (
              <div>
                <SectionHeader
                  title="Store Configuration"
                  description="Configure pricing, currency and storefront behavior."
                />

                <div className="space-y-6 p-5 sm:p-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormSelect
                      label="Currency"
                      value="IDR — Indonesian Rupiah"
                      options={[
                        "IDR — Indonesian Rupiah",
                        "USD — US Dollar",
                      ]}
                    />

                    <FormSelect
                      label="Default Category"
                      value="All Categories"
                      options={[
                        "All Categories",
                        "Background",
                        "Frame",
                        "Border",
                        "Animation",
                        "Particle",
                        "Effect",
                        "Decoration",
                      ]}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-300">
                      Default Overlay Price
                    </label>

                    <div className="flex">
                      <span className="flex h-11 items-center rounded-l-xl border border-r-0 border-white/[0.07] bg-white/[0.025] px-4 text-xs text-slate-500">
                        Rp
                      </span>

                      <input
                        type="number"
                        defaultValue="79000"
                        className="
                          h-11 w-full rounded-r-xl
                          border border-white/[0.07]
                          bg-[#0B1424]
                          px-4 text-sm text-white
                          outline-none transition
                          focus:border-cyan-400/30
                        "
                      />
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.05]" />

                  <SettingToggle
                    title="Maintenance Mode"
                    description="Temporarily disable customer access to the storefront."
                    enabled={maintenance}
                    onChange={setMaintenance}
                    danger
                  />

                  <div className="flex justify-end pt-2">
                    <SaveButton onClick={handleSave} />
                  </div>
                </div>
              </div>
            )}

            {/* PROFILE */}
            {activeTab === "profile" && (
              <div>
                <SectionHeader
                  title="Admin Profile"
                  description="Manage your administrator account information."
                />

                <div className="space-y-6 p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex h-16 w-16 items-center justify-center
                        rounded-full
                        bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500
                        text-xl font-bold text-white
                        shadow-[0_0_25px_rgba(0,160,255,0.15)]
                      "
                    >
                      A
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Administrator
                      </p>
                      <p className="mt-1 text-xs text-slate-600">
                        Super Administrator
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormInput
                      label="Full Name"
                      defaultValue="Administrator"
                    />

                    <FormInput
                      label="Email"
                      defaultValue="admin@vidnova.com"
                      type="email"
                    />
                  </div>

                  <div className="h-px bg-white/[0.05]" />

                  <div>
                    <p className="mb-4 text-xs font-semibold text-white">
                      Change Password
                    </p>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormInput
                        label="Current Password"
                        type="password"
                        placeholder="••••••••"
                      />

                      <FormInput
                        label="New Password"
                        type="password"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <SaveButton onClick={handleSave} />
                  </div>
                </div>
              </div>
            )}

            {/* NOTIFICATIONS */}
            {activeTab === "notifications" && (
              <div>
                <SectionHeader
                  title="Notifications"
                  description="Choose which events should notify the administrator."
                />

                <div className="divide-y divide-white/[0.05] p-5 sm:p-6">
                  <NotificationToggle
                    title="New Order"
                    description="Receive a notification when a customer places an order."
                    enabled={notifications.newOrder}
                    onChange={(value) =>
                      setNotifications({
                        ...notifications,
                        newOrder: value,
                      })
                    }
                  />

                  <NotificationToggle
                    title="Payment Successful"
                    description="Receive a notification after a payment is successfully completed."
                    enabled={notifications.paymentSuccess}
                    onChange={(value) =>
                      setNotifications({
                        ...notifications,
                        paymentSuccess: value,
                      })
                    }
                  />

                  <NotificationToggle
                    title="Payment Failed"
                    description="Receive a notification when a payment fails."
                    enabled={notifications.paymentFailed}
                    onChange={(value) =>
                      setNotifications({
                        ...notifications,
                        paymentFailed: value,
                      })
                    }
                  />

                  <NotificationToggle
                    title="New User"
                    description="Receive a notification when a new customer registers."
                    enabled={notifications.newUser}
                    onChange={(value) =>
                      setNotifications({
                        ...notifications,
                        newUser: value,
                      })
                    }
                  />

                  <div className="flex justify-end pt-6">
                    <SaveButton onClick={handleSave} />
                  </div>
                </div>
              </div>
            )}

            {/* SYSTEM */}
            {activeTab === "system" && (
              <div>
                <SectionHeader
                  title="System"
                  description="View basic information about your VIDNOVA system."
                />

                <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
                  <SystemCard
                    title="Application"
                    value="VIDNOVA"
                    status="Online"
                  />

                  <SystemCard
                    title="Environment"
                    value="Development"
                    status="Active"
                  />

                  <SystemCard
                    title="Storage"
                    value="1.8 GB / 10 GB"
                    status="18% Used"
                  />

                  <SystemCard
                    title="Database"
                    value="Not Connected"
                    status="Frontend Only"
                    warning
                  />

                  <div className="sm:col-span-2 mt-3 rounded-xl border border-red-400/10 bg-red-400/[0.025] p-4">
                    <p className="text-xs font-semibold text-red-300">
                      Danger Zone
                    </p>

                    <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
                      These actions can affect your store configuration and
                      should only be used by an administrator.
                    </p>

                    <button
                      type="button"
                      className="
                        mt-4 rounded-lg
                        border border-red-400/15
                        bg-red-400/[0.04]
                        px-4 py-2
                        text-xs font-medium text-red-300
                        transition
                        hover:border-red-400/30
                        hover:bg-red-400/[0.08]
                      "
                    >
                      Reset Store Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

/* =========================
   COMPONENTS
========================= */

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/[0.05] px-5 py-5 sm:px-6">
      <h3 className="text-sm font-semibold text-white">{title}</h3>

      <p className="mt-1 text-xs text-slate-600">{description}</p>
    </div>
  );
}

function SaveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        rounded-xl
        bg-gradient-to-r from-cyan-400 to-blue-500
        px-5 py-2.5
        text-xs font-semibold text-[#04111D]
        shadow-[0_8px_25px_rgba(0,180,255,0.15)]
        transition duration-200
        hover:-translate-y-0.5
        hover:shadow-[0_12px_30px_rgba(0,180,255,0.22)]
      "
    >
      Save Changes
    </button>
  );
}

function SettingToggle({
  title,
  description,
  enabled,
  onChange,
  danger = false,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
  danger?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold text-slate-200">{title}</p>
        <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`
          relative h-6 w-11 shrink-0 rounded-full
          transition duration-200
          ${enabled ? (danger ? "bg-red-400" : "bg-cyan-400") : "bg-slate-700"}
        `}
      >
        <span
          className={`
            absolute top-1 h-4 w-4 rounded-full bg-white
            shadow-sm transition duration-200
            ${enabled ? "left-6" : "left-1"}
          `}
        />
      </button>
    </div>
  );
}

function NotificationToggle({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
      <div>
        <p className="text-xs font-semibold text-slate-200">{title}</p>
        <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`
          relative h-6 w-11 shrink-0 rounded-full transition duration-200
          ${enabled ? "bg-cyan-400" : "bg-slate-700"}
        `}
      >
        <span
          className={`
            absolute top-1 h-4 w-4 rounded-full bg-white
            shadow-sm transition duration-200
            ${enabled ? "left-6" : "left-1"}
          `}
        />
      </button>
    </div>
  );
}

function FormInput({
  label,
  defaultValue,
  type = "text",
  placeholder,
}: {
  label: string;
  defaultValue?: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="
          h-11 w-full rounded-xl
          border border-white/[0.07]
          bg-[#0B1424]
          px-4 text-sm text-white
          outline-none transition
          placeholder:text-slate-700
          focus:border-cyan-400/30
          focus:ring-2 focus:ring-cyan-400/5
        "
      />
    </div>
  );
}

function FormSelect({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-slate-300">
        {label}
      </label>

      <select
        defaultValue={value}
        className="
          h-11 w-full rounded-xl
          border border-white/[0.07]
          bg-[#0B1424]
          px-4 text-xs text-white
          outline-none transition
          focus:border-cyan-400/30
        "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function SystemCard({
  title,
  value,
  status,
  warning = false,
}: {
  title: string;
  value: string;
  status: string;
  warning?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#0B1424]/80 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-600">
          {title}
        </p>

        <span
          className={`
            rounded-full px-2 py-1 text-[9px] font-medium
            ${
              warning
                ? "bg-amber-400/[0.08] text-amber-300"
                : "bg-cyan-400/[0.07] text-cyan-300"
            }
          `}
        >
          {status}
        </span>
      </div>

      <p className="mt-4 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}