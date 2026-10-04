"use client";

import { useMemo, useState } from "react";

type AssetCategory =
  | "Background"
  | "Frame"
  | "Border"
  | "Animation"
  | "Particle"
  | "Effect"
  | "Decoration";

type AssetStatus = "Active" | "Inactive";

type Asset = {
  id: number;
  name: string;
  category: AssetCategory;
  description: string;
  duration: string;
  resolution: string;
  size: string;
  status: AssetStatus;
  video: string;
  thumbnail: string;
  createdAt: string;
};

const initialAssets: Asset[] = [
  {
    id: 1,
    name: "Cyber Neon Frame",
    category: "Frame",
    description: "Futuristic neon frame for TikTok livestream.",
    duration: "00:12",
    resolution: "1080 × 1920",
    size: "8.4 MB",
    status: "Active",
    video: "/videos/cyber-neon-frame.mp4",
    thumbnail: "",
    createdAt: "04 Oct 2026",
  },
  {
    id: 2,
    name: "Blue Particle Flow",
    category: "Particle",
    description: "Blue particle animation overlay.",
    duration: "00:15",
    resolution: "1080 × 1920",
    size: "12.8 MB",
    status: "Active",
    video: "/videos/blue-particle-flow.mp4",
    thumbnail: "",
    createdAt: "03 Oct 2026",
  },
  {
    id: 3,
    name: "Violet Energy",
    category: "Effect",
    description: "Violet energy effect for livestream scenes.",
    duration: "00:10",
    resolution: "1080 × 1920",
    size: "9.6 MB",
    status: "Active",
    video: "/videos/violet-energy.mp4",
    thumbnail: "",
    createdAt: "02 Oct 2026",
  },
  {
    id: 4,
    name: "Dark Gradient Motion",
    category: "Background",
    description: "Animated dark gradient background.",
    duration: "00:20",
    resolution: "1080 × 1920",
    size: "15.2 MB",
    status: "Active",
    video: "/videos/dark-gradient-motion.mp4",
    thumbnail: "",
    createdAt: "01 Oct 2026",
  },
  {
    id: 5,
    name: "Glowing Border",
    category: "Border",
    description: "Minimal glowing border animation.",
    duration: "00:08",
    resolution: "1080 × 1920",
    size: "6.8 MB",
    status: "Inactive",
    video: "/videos/glowing-border.mp4",
    thumbnail: "",
    createdAt: "30 Sep 2026",
  },
  {
    id: 6,
    name: "Light Sweep",
    category: "Animation",
    description: "Smooth light sweep animation.",
    duration: "00:06",
    resolution: "1080 × 1920",
    size: "5.2 MB",
    status: "Active",
    video: "/videos/light-sweep.mp4",
    thumbnail: "",
    createdAt: "29 Sep 2026",
  },
];

const categories: AssetCategory[] = [
  "Background",
  "Frame",
  "Border",
  "Animation",
  "Particle",
  "Effect",
  "Decoration",
];

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function AssetsPage() {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);

  const [name, setName] = useState("");
  const [category, setCategory] =
    useState<AssetCategory>("Background");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<AssetStatus>("Active");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(
    null
  );

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const searchMatch =
        asset.name.toLowerCase().includes(search.toLowerCase()) ||
        asset.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const categoryMatch =
        categoryFilter === "All" ||
        asset.category === categoryFilter;

      const statusMatch =
        statusFilter === "All" ||
        asset.status === statusFilter;

      return searchMatch && categoryMatch && statusMatch;
    });
  }, [assets, search, categoryFilter, statusFilter]);

  const totalAssets = assets.length;

  const activeAssets = assets.filter(
    (asset) => asset.status === "Active"
  ).length;

  const inactiveAssets = assets.filter(
    (asset) => asset.status === "Inactive"
  ).length;

  const openAddModal = () => {
    setEditingAsset(null);
    setName("");
    setCategory("Background");
    setDescription("");
    setStatus("Active");
    setVideoFile(null);
    setThumbnailFile(null);
    setIsModalOpen(true);
  };

  const openEditModal = (asset: Asset) => {
    setEditingAsset(asset);
    setName(asset.name);
    setCategory(asset.category);
    setDescription(asset.description);
    setStatus(asset.status);
    setVideoFile(null);
    setThumbnailFile(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingAsset(null);
  };

  const handleSaveAsset = () => {
    if (!name.trim()) {
      alert("Asset name is required.");
      return;
    }

    if (editingAsset) {
      setAssets((current) =>
        current.map((asset) =>
          asset.id === editingAsset.id
            ? {
                ...asset,
                name,
                category,
                description,
                status,
              }
            : asset
        )
      );
    } else {
      const newAsset: Asset = {
        id: Date.now(),
        name,
        category,
        description,
        status,
        duration: "00:00",
        resolution: "1080 × 1920",
        size: videoFile
          ? `${(videoFile.size / 1024 / 1024).toFixed(1)} MB`
          : "—",
        video: "",
        thumbnail: "",
        createdAt: formatDate(new Date()),
      };

      setAssets((current) => [newAsset, ...current]);
    }

    closeModal();
  };

  const handleDelete = (id: number) => {
    const asset = assets.find((item) => item.id === id);

    if (!asset) return;

    const confirmed = window.confirm(
      `Delete "${asset.name}"?`
    );

    if (!confirmed) return;

    setAssets((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const toggleStatus = (id: number) => {
    setAssets((current) =>
      current.map((asset) =>
        asset.id === id
          ? {
              ...asset,
              status:
                asset.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : asset
      )
    );
  };

  return (
    <div
      className="
        relative min-h-full overflow-hidden
        bg-[#0B1424]
        px-4 py-6
        text-white
        sm:px-6
        lg:px-8
      "
    >
      {/* =====================================================
          FIXED VIDNOVA TEXT LOGO BACKGROUND
          Hanya sebagai dekorasi background.
          Tidak memengaruhi interaksi halaman dan tidak ikut scroll.
      ===================================================== */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          overflow-hidden
        "
      >
        <img
          src="/images/vidnova_teks.png"
          alt=""
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            w-[850px]
            max-w-none
            -translate-x-1/2
            -translate-y-1/2
            select-none
            object-contain
            opacity-[0.085]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[650px]
            w-[1100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.035]
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            top-[15%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.035]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            left-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-500/[0.025]
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* HEADER */}
        <section className="mb-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Asset Management
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                MP4 Assets
              </h2>

              <p className="mt-1.5 max-w-2xl text-sm text-slate-400">
                Manage animated assets that creators can use
                when customizing their VIDNOVA overlays.
              </p>
            </div>

            <button
              type="button"
              onClick={openAddModal}
              className="
                inline-flex h-11 items-center justify-center gap-2
                rounded-xl
                bg-gradient-to-r from-cyan-500 to-blue-600
                px-5
                text-sm font-semibold text-white
                shadow-[0_8px_30px_rgba(0,140,255,0.18)]
                transition duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_12px_35px_rgba(0,180,255,0.25)]
                active:translate-y-0
              "
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>

              Add Asset
            </button>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Total Assets"
            value={totalAssets}
            description="All uploaded assets"
            icon="layers"
            accent="cyan"
          />

          <StatCard
            label="Active Assets"
            value={activeAssets}
            description="Available to creators"
            icon="check"
            accent="blue"
          />

          <StatCard
            label="Inactive Assets"
            value={inactiveAssets}
            description="Currently disabled"
            icon="pause"
            accent="violet"
          />

          <StatCard
            label="MP4 Library"
            value="100%"
            description="Video-based assets"
            icon="video"
            accent="amber"
          />
        </section>

        {/* TOOLBAR */}
        <section
          className="
            mb-5 rounded-2xl
            border border-[#263B56]
            bg-[#101D32]
            p-4
            shadow-[0_15px_45px_rgba(0,0,0,0.12)]
          "
        >
          <div className="flex flex-col gap-3 xl:flex-row">

            {/* SEARCH */}
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
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search assets..."
                className="
                  h-11 w-full rounded-xl
                  border border-[#2A405D]
                  bg-[#0B1424]
                  pl-10 pr-4
                  text-sm text-white
                  outline-none
                  placeholder:text-slate-600
                  transition
                  focus:border-cyan-400/40
                  focus:ring-2
                  focus:ring-cyan-400/5
                "
              />
            </div>

            {/* CATEGORY */}
            <select
              value={categoryFilter}
              onChange={(event) =>
                setCategoryFilter(event.target.value)
              }
              className="
                h-11 rounded-xl
                border border-[#2A405D]
                bg-[#0B1424]
                px-4
                text-sm text-slate-300
                outline-none
                transition
                focus:border-cyan-400/40
              "
            >
              <option value="All">All Categories</option>

              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* STATUS */}
            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              className="
                h-11 rounded-xl
                border border-[#2A405D]
                bg-[#0B1424]
                px-4
                text-sm text-slate-300
                outline-none
                transition
                focus:border-cyan-400/40
              "
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-3">
            <p className="text-xs text-slate-500">
              Showing{" "}
              <span className="font-medium text-slate-300">
                {filteredAssets.length}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-300">
                {assets.length}
              </span>{" "}
              assets
            </p>

            {(search ||
              categoryFilter !== "All" ||
              statusFilter !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategoryFilter("All");
                  setStatusFilter("All");
                }}
                className="text-xs font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Clear filters
              </button>
            )}
          </div>
        </section>

        {/* ASSETS GRID */}
        {filteredAssets.length > 0 ? (
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filteredAssets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onEdit={() => openEditModal(asset)}
                onDelete={() => handleDelete(asset.id)}
                onToggleStatus={() =>
                  toggleStatus(asset.id)
                }
              />
            ))}
          </section>
        ) : (
          <section
            className="
              flex min-h-[400px] flex-col
              items-center justify-center
              rounded-2xl
              border border-dashed border-[#2A405D]
              bg-[#101D32]
              px-6 text-center
            "
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.03] text-slate-500">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                />
                <path d="m9 8 6 4-6 4V8Z" />
              </svg>
            </div>

            <h3 className="text-base font-semibold text-white">
              No assets found
            </h3>

            <p className="mt-1 max-w-md text-sm text-slate-500">
              Try changing your search or filter, or add a new
              MP4 asset.
            </p>

            <button
              type="button"
              onClick={openAddModal}
              className="
                mt-5 rounded-xl
                border border-cyan-400/20
                bg-cyan-400/[0.05]
                px-4 py-2.5
                text-xs font-semibold
                text-cyan-300
                transition
                hover:bg-cyan-400/[0.1]
              "
            >
              Add New Asset
            </button>
          </section>
        )}

        {/* FOOTER INFO */}
        <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.05] pt-5 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            VIDNOVA Asset Library · MP4 assets for overlay
            customization
          </p>

          <p>Admin Panel</p>
        </div>
      </div>

      {/* =====================================================
          ADD / EDIT MODAL
          TIDAK DIUBAH
      ===================================================== */}
      {isModalOpen && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/70
            p-4
            backdrop-blur-md
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="
              max-h-[90vh]
              w-full max-w-2xl
              overflow-y-auto
              rounded-2xl
              border border-[#2A405D]
              bg-[#101D32]
              shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            "
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-6">
              <div>
                <h3 className="text-base font-semibold text-white">
                  {editingAsset
                    ? "Edit Asset"
                    : "Add New Asset"}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {editingAsset
                    ? "Update asset information."
                    : "Add an MP4 asset to your VIDNOVA library."}
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg
                  border border-white/[0.07]
                  bg-white/[0.025]
                  text-slate-500
                  transition
                  hover:bg-white/[0.05]
                  hover:text-white
                "
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

            {/* MODAL BODY */}
            <div className="space-y-5 p-5 sm:p-6">

              {/* VIDEO UPLOAD */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-300">
                  MP4 Asset
                  {!editingAsset && (
                    <span className="ml-1 text-cyan-400">
                      *
                    </span>
                  )}
                </label>

                <label
                  className="
                    flex min-h-[145px]
                    cursor-pointer
                    flex-col items-center justify-center
                    rounded-xl
                    border border-dashed
                    border-[#36506F]
                    bg-[#0B1424]
                    px-5
                    text-center
                    transition
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/[0.02]
                  "
                >
                  <input
                    type="file"
                    accept="video/mp4,video/*"
                    className="hidden"
                    onChange={(event) => {
                      setVideoFile(
                        event.target.files?.[0] ?? null
                      );
                    }}
                  />

                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/[0.08] text-cyan-400">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 16V4" />
                      <path d="m7 9 5-5 5 5" />
                      <path d="M4 20h16" />
                    </svg>
                  </div>

                  {videoFile ? (
                    <>
                      <p className="text-sm font-medium text-white">
                        {videoFile.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {(
                          videoFile.size /
                          1024 /
                          1024
                        ).toFixed(2)}{" "}
                        MB
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-slate-300">
                        Click to upload MP4
                      </p>

                      <p className="mt-1 text-xs text-slate-600">
                        MP4 video · Recommended 1080 × 1920
                      </p>
                    </>
                  )}
                </label>
              </div>

              {/* NAME + CATEGORY */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-300">
                    Asset Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="e.g. Cyber Neon Frame"
                    className="
                      h-11 w-full rounded-xl
                      border border-[#2A405D]
                      bg-[#0B1424]
                      px-3.5
                      text-sm text-white
                      outline-none
                      placeholder:text-slate-600
                      focus:border-cyan-400/40
                      focus:ring-2 focus:ring-cyan-400/5
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-300">
                    Category
                  </label>

                  <select
                    value={category}
                    onChange={(event) =>
                      setCategory(
                        event.target.value as AssetCategory
                      )
                    }
                    className="
                      h-11 w-full rounded-xl
                      border border-[#2A405D]
                      bg-[#0B1424]
                      px-3.5
                      text-sm text-slate-300
                      outline-none
                      focus:border-cyan-400/40
                    "
                  >
                    {categories.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="mb-2 block text-xs font-medium text-slate-300">
                  Description
                </label>

                <textarea
                  value={description}
                  onChange={(event) =>
                    setDescription(event.target.value)
                  }
                  rows={4}
                  placeholder="Describe this asset..."
                  className="
                    w-full resize-none rounded-xl
                    border border-[#2A405D]
                    bg-[#0B1424]
                    px-3.5 py-3
                    text-sm text-white
                    outline-none
                    placeholder:text-slate-600
                    focus:border-cyan-400/40
                    focus:ring-2 focus:ring-cyan-400/5
                  "
                />
              </div>

              {/* THUMBNAIL + STATUS */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-300">
                    Thumbnail
                  </label>

                  <label
                    className="
                      flex h-11 cursor-pointer
                      items-center gap-2
                      rounded-xl
                      border border-[#2A405D]
                      bg-[#0B1424]
                      px-3.5
                      text-xs text-slate-500
                      transition
                      hover:border-cyan-400/30
                      hover:text-slate-300
                    "
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(event) => {
                        setThumbnailFile(
                          event.target.files?.[0] ?? null
                        );
                      }}
                    />

                    <svg
                      width="16"
                      height="16"
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
                        rx="2"
                      />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>

                    <span className="truncate">
                      {thumbnailFile
                        ? thumbnailFile.name
                        : "Choose thumbnail"}
                    </span>
                  </label>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-slate-300">
                    Status
                  </label>

                  <select
                    value={status}
                    onChange={(event) =>
                      setStatus(
                        event.target.value as AssetStatus
                      )
                    }
                    className="
                      h-11 w-full rounded-xl
                      border border-[#2A405D]
                      bg-[#0B1424]
                      px-3.5
                      text-sm text-slate-300
                      outline-none
                      focus:border-cyan-400/40
                    "
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* INFO */}
              <div className="rounded-xl border border-cyan-400/[0.08] bg-cyan-400/[0.025] p-3.5">
                <div className="flex gap-3">
                  <svg
                    className="mt-0.5 shrink-0 text-cyan-400"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5" />
                    <path d="M12 8h.01" />
                  </svg>

                  <p className="text-xs leading-5 text-slate-500">
                    Assets marked as{" "}
                    <span className="text-cyan-400">
                      Active
                    </span>{" "}
                    will be available for creators in the
                    VIDNOVA customization editor.
                  </p>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="flex flex-col-reverse gap-2 border-t border-white/[0.06] p-5 sm:flex-row sm:justify-end sm:px-6">
              <button
                type="button"
                onClick={closeModal}
                className="
                  h-10 rounded-xl
                  border border-[#2A405D]
                  bg-white/[0.02]
                  px-5
                  text-xs font-semibold
                  text-slate-400
                  transition
                  hover:bg-white/[0.05]
                  hover:text-white
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSaveAsset}
                className="
                  h-10 rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  px-5
                  text-xs font-semibold
                  text-white
                  shadow-[0_8px_25px_rgba(0,150,255,0.15)]
                  transition
                  hover:shadow-[0_10px_30px_rgba(0,180,255,0.22)]
                "
              >
                {editingAsset
                  ? "Save Changes"
                  : "Add Asset"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  label,
  value,
  description,
  icon,
  accent,
}: {
  label: string;
  value: string | number;
  description: string;
  icon: "layers" | "check" | "pause" | "video";
  accent: "cyan" | "blue" | "violet" | "amber";
}) {
  const accentClasses = {
    cyan: {
      icon: "bg-cyan-400/[0.08] text-cyan-400",
      value: "text-cyan-300",
    },
    blue: {
      icon: "bg-blue-400/[0.08] text-blue-400",
      value: "text-blue-300",
    },
    violet: {
      icon: "bg-violet-400/[0.08] text-violet-400",
      value: "text-violet-300",
    },
    amber: {
      icon: "bg-amber-400/[0.08] text-amber-400",
      value: "text-amber-300",
    },
  };

  return (
    <div
      className="
        rounded-2xl
        border border-[#263B56]
        bg-[#101D32]
        p-4
        transition duration-200
        hover:border-[#36506F]
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
            {label}
          </p>

          <p
            className={`mt-2 text-2xl font-semibold tracking-tight ${accentClasses[accent].value}`}
          >
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-600">
            {description}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClasses[accent].icon}`}
        >
          {icon === "layers" && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="m12 3 9 5-9 5-9-5 9-5Z" />
              <path d="m3 12 9 5 9-5" />
              <path d="m3 16 9 5 9-5" />
            </svg>
          )}

          {icon === "check" && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          )}

          {icon === "pause" && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              <path d="M8 5v14" />
              <path d="M16 5v14" />
            </svg>
          )}

          {icon === "video" && (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="3"
                y="5"
                width="14"
                height="14"
                rx="2"
              />
              <path d="m17 9 4-2v10l-4-2" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ASSET CARD
========================================================= */

function AssetCard({
  asset,
  onEdit,
  onDelete,
  onToggleStatus,
}: {
  asset: Asset;
  onEdit: () => void;
  onDelete: () => void;
  onToggleStatus: () => void;
}) {
  return (
    <article
      className="
        group overflow-hidden
        rounded-2xl
        border border-[#263B56]
        bg-[#101D32]
        transition duration-200
        hover:-translate-y-0.5
        hover:border-[#3A5575]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
      "
    >
      {/* VIDEO PREVIEW */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#07101E]">
        {asset.video ? (
          <video
            src={asset.video}
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0B1B31] via-[#102C4A] to-[#10152E]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.12),transparent_45%)]" />

            <div className="relative flex flex-col items-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m8 5 11 7-11 7V5Z" />
                </svg>
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
                MP4 Preview
              </span>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute left-3 top-3">
          <span
            className={`
              inline-flex items-center gap-1.5
              rounded-full
              border px-2.5 py-1
              text-[10px] font-semibold
              backdrop-blur-md
              ${
                asset.status === "Active"
                  ? "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300"
                  : "border-slate-400/15 bg-slate-900/60 text-slate-400"
              }
            `}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                asset.status === "Active"
                  ? "bg-emerald-400"
                  : "bg-slate-500"
              }`}
            />

            {asset.status}
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <span className="rounded-full border border-white/[0.08] bg-black/30 px-2.5 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-md">
            {asset.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 rounded-md bg-black/50 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md">
          {asset.duration}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">
            {asset.name}
          </h3>

          <p className="mt-1 line-clamp-2 min-h-[32px] text-xs leading-4 text-slate-500">
            {asset.description}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 border-y border-white/[0.05] py-3">
          <MetaItem
            label="Resolution"
            value={asset.resolution}
          />

          <MetaItem label="Size" value={asset.size} />

          <MetaItem
            label="Added"
            value={asset.createdAt.replace(
              " Oct 2026",
              ""
            )}
          />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={onEdit}
            className="
              flex h-9 flex-1
              items-center justify-center gap-1.5
              rounded-lg
              border border-[#2A405D]
              bg-white/[0.02]
              text-xs font-medium
              text-slate-400
              transition
              hover:border-cyan-400/20
              hover:bg-cyan-400/[0.04]
              hover:text-cyan-300
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
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>

            Edit
          </button>

          <button
            type="button"
            onClick={onToggleStatus}
            title={
              asset.status === "Active"
                ? "Deactivate asset"
                : "Activate asset"
            }
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              border border-[#2A405D]
              bg-white/[0.02]
              text-slate-500
              transition
              hover:border-violet-400/20
              hover:bg-violet-400/[0.04]
              hover:text-violet-300
            "
          >
            {asset.status === "Active" ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M8 5v14" />
                <path d="M16 5v14" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 5 11 7-11 7V5Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={onDelete}
            title="Delete asset"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              border border-[#2A405D]
              bg-white/[0.02]
              text-slate-500
              transition
              hover:border-red-400/20
              hover:bg-red-400/[0.04]
              hover:text-red-300
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
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="m19 6-1 14H6L5 6" />
              <path d="M10 11v5" />
              <path d="M14 11v5" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   META ITEM
========================================================= */

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 px-2 first:pl-0 last:pr-0">
      <p className="truncate text-[9px] uppercase tracking-[0.1em] text-slate-600">
        {label}
      </p>

      <p className="mt-1 truncate text-[10px] font-medium text-slate-400">
        {value}
      </p>
    </div>
  );
}