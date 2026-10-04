const products = [
  {
    slug: "cyber-neon-frame",
    name: "Cyber Neon Frame",
  },
  {
    slug: "blue-particle-flow",
    name: "Blue Particle Flow",
  },
  {
    slug: "violet-energy",
    name: "Violet Energy",
  },
  {
    slug: "dark-gradient-motion",
    name: "Dark Gradient Motion",
  },
  {
    slug: "glowing-border",
    name: "Glowing Border",
  },
  {
    slug: "light-sweep",
    name: "Light Sweep",
  },
];

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  return (
    <main className="min-h-screen bg-[#08090D] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-cyan-400">VIDNOVA</p>

        <h1 className="mt-3 text-4xl font-semibold">
          {product?.name ?? "Product"}
        </h1>

        <p className="mt-3 text-slate-400">
          Product detail sedang dalam pengembangan.
        </p>
      </div>
    </main>
  );
}