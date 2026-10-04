const overlays = [
  {
    id: "cyber-neon-frame",
    name: "Cyber Neon Frame",
  },
  {
    id: "blue-particle-flow",
    name: "Blue Particle Flow",
  },
  {
    id: "violet-energy",
    name: "Violet Energy",
  },
  {
    id: "dark-gradient-motion",
    name: "Dark Gradient Motion",
  },
  {
    id: "glowing-border",
    name: "Glowing Border",
  },
  {
    id: "light-sweep",
    name: "Light Sweep",
  },
];

export function generateStaticParams() {
  return overlays.map((overlay) => ({
    id: overlay.id,
  }));
}

export default async function CustomizePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const overlay = overlays.find((item) => item.id === id);

  return (
    <main className="min-h-screen bg-[#08090D] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-cyan-400">VIDNOVA</p>

        <h1 className="mt-3 text-4xl font-semibold">
          Customize Overlay
        </h1>

        <p className="mt-3 text-slate-400">
          {overlay?.name ?? "Overlay"}
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-slate-400">
            Editor customization sedang dalam pengembangan.
          </p>
        </div>
      </div>
    </main>
  );
}