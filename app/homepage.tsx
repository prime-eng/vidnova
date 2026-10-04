"use client";



import Link from "next/link";

import { assetPath } from "@/lib/assetPath";

import { useState } from "react";



type Product = {



  id: number;



  name: string;



  description: string;



  category: string;



  price: number;



  video: string;



  featured?: boolean;



};



const products: Product[] = [



{



  id: 1,



  name: "Cyber Neon Frame",



  description: "Futuristic neon frame for TikTok livestream.",



  category: "Frame",



  price: 79000,



  video: assetPath("/videos/cyber-neon-frame.mp4"),



  featured: true,



},



{



  id: 2,



  name: "Blue Particle Flow",



  description: "Dynamic blue particle animation overlay.",



  category: "Particle",



  price: 69000,



  video: assetPath("/videos/blue-particle-flow.mp4"),



  featured: true,



},



{



  id: 3,



  name: "Violet Energy",



  description: "Premium violet energy effect for your stream.",



  category: "Effect",



  price: 99000,



  video: assetPath("/videos/violet-energy.mp4"),



  featured: true,



},



{



  id: 4,



  name: "Dark Gradient Motion",



  description: "Clean animated dark gradient background.",



  category: "Background",



  price: 89000,



  video: assetPath("/videos/dark-gradient-motion.mp4"),



},



{



  id: 5,



  name: "Glowing Border",



  description: "Minimal glowing border animation.",



  category: "Border",



  price: 59000,



  video: assetPath("/videos/glowing-border.mp4"),



},



{



  id: 6,



  name: "Light Sweep",



  description: "Smooth light sweep animation for livestreams.",



  category: "Animation",



  price: 49000,



  video: assetPath("/videos/light-sweep.mp4"),



},



];



const categories = [



"All",



"Background",



"Frame",



"Border",



"Animation",



"Particle",



"Effect",



"Decoration",



];



function formatCurrency(value: number) {



  return new Intl.NumberFormat("id-ID", {



    style: "currency",



    currency: "IDR",



    maximumFractionDigits: 0,



  }).format(value);



}



export default function Homepage() {



  const [activeCategory, setActiveCategory] = useState("All");



  const [search, setSearch] = useState("");



  const filteredProducts = products.filter((product) => {



    const matchesCategory =



    activeCategory === "All" || product.category === activeCategory;



    const query = search.trim().toLowerCase();



    const matchesSearch =



    !query ||



    product.name.toLowerCase().includes(query) ||



    product.description.toLowerCase().includes(query);



    return matchesCategory && matchesSearch;



  });



  const featuredProducts = products.filter((product) => product.featured);



  return (



  <main className="min-h-screen overflow-hidden bg-[#070C16] text-white">



    {/* BACKGROUND */}



    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">



      <div className="absolute left-1/2 top-[-250px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[150px]" />



      <div className="absolute right-[-250px] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[150px]" />



      <div className="absolute bottom-[-250px] left-[-200px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.05] blur-[150px]" />



      <img



      src={assetPath("/images/vidnova_teks.png")}



      alt=""



      aria-hidden="true"



      className="absolute left-1/2 top-[46%] w-[850px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.035]"



      />



    </div>



    {/* NAVBAR */}



    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#070C16]/80 backdrop-blur-2xl">



      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">



        <Link href="/" className="shrink-0">



          <img



          src={assetPath("/images/vidnova_teks.png")}



          alt="VIDNOVA"



          className="h-auto w-[125px] object-contain sm:w-[145px]"



          />



        </Link>



        <nav className="hidden items-center gap-7 md:flex">



          <a



          href="#featured"



          className="text-xs font-medium text-slate-400 transition hover:text-white"



          >



          Featured



        </a>



        <a



        href="#explore"



        className="text-xs font-medium text-slate-400 transition hover:text-white"



        >



        Explore



      </a>



      <a



      href="#how-it-works"



      className="text-xs font-medium text-slate-400 transition hover:text-white"



      >



      How It Works



    </a>



  </nav>



  <div className="flex items-center gap-2">



    <Link



    href="/login"



    className="hidden rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-white/[0.04] hover:text-white sm:block"



    >



    Sign In



  </Link>



  <Link



  href="/register"



  className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(0,150,255,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,180,255,0.25)]"



  >



  Get Started



</Link>



</div>



</div>



</header>



{/* HERO */}



<section className="relative z-10 mx-auto max-w-[1400px] px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">



  <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">



    <div>



      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5">



        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />



        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">



          TikTok Livestream Overlays



        </span>



      </div>



      <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">



        Create.



        <span className="text-cyan-300"> Customize.</span>



        <br />



        Stream.



      </h1>



      <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">



        Build a livestream look that feels like yours. Choose a VIDNOVA



        overlay, customize it, and make every stream stand out.



      </p>



      <div className="mt-8 flex flex-col gap-3 sm:flex-row">



        <a



        href="#explore"



        className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(0,150,255,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,180,255,0.28)]"



        >



        Explore Overlays



      </a>



      <a



      href="#how-it-works"



      className="inline-flex h-12 items-center justify-center rounded-xl border border-[#263B56] bg-white/[0.025] px-6 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-white"



      >



      How It Works



    </a>



  </div>



  <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[11px] text-slate-500">



    <span>✓ Customizable Designs</span>



    <span>✓ MP4 Ready</span>



    <span>✓ Instant Download</span>



  </div>



</div>



{/* HERO PREVIEW */}



<div className="relative mx-auto w-full max-w-[560px]">



  <div className="absolute inset-8 rounded-[35px] bg-cyan-500/[0.08] blur-[70px]" />



  <div className="relative overflow-hidden rounded-[28px] border border-[#2A405D] bg-[#101D32] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">



    <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#07101E]">



      <video



      src={assetPath("/videos/cyber-neon-frame.mp4")}



      autoPlay



      muted



      loop



      playsInline



      className="h-full w-full object-cover opacity-90"



      />



      <div className="absolute inset-0 bg-gradient-to-t from-[#050912]/80 via-transparent to-transparent" />



      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">



        <div>



          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300">



            Featured Overlay



          </p>



          <p className="mt-1 text-lg font-semibold text-white">



            Cyber Neon Frame



          </p>



        </div>



        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-medium text-slate-300 backdrop-blur-md">



          1080 × 1920



        </span>



      </div>



    </div>



  </div>



  <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-[#263B56] bg-[#101D32]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block">



    <p className="text-[9px] uppercase tracking-[0.16em] text-slate-600">



      Customize



    </p>



    <p className="mt-1 text-xs font-semibold text-white">



      Your style. Your stream.



    </p>



  </div>



</div>



</div>



</section>



{/* FEATURED */}



<section id="featured" className="relative z-10 border-y border-white/[0.05] bg-white/[0.012]">



  <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">



    <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">



      <div>



        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-400">



          Featured



        </p>



        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">



          Start With Something Bold



        </h2>



        <p className="mt-2 text-sm text-slate-500">



          Explore some of our most popular livestream overlays.



        </p>



      </div>



      <a



      href="#explore"



      className="text-xs font-semibold text-cyan-400 transition hover:text-cyan-300"



      >



      View All →



    </a>



  </div>



  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">



    {featuredProducts.map((product) => (



    <ProductCard key={product.id} product={product} />



  ))}



</div>



</div>



</section>



{/* EXPLORE */}



<section



id="explore"



className="relative z-10 mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8"



>



<div className="mb-7">



  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-400">



    Explore Library



  </p>



  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">



    Find Your Look



  </h2>



</div>



{/* SEARCH */}



<div className="mb-5 flex flex-col gap-3 md:flex-row">



  <div className="relative flex-1">



    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600">



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



  placeholder="Search overlays..."



  className="h-11 w-full rounded-xl border border-[#263B56] bg-[#101D32] pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400/35 focus:ring-2 focus:ring-cyan-400/5"



  />



</div>



</div>



{/* CATEGORIES */}



<div className="mb-7 flex gap-2 overflow-x-auto pb-1">



  {categories.map((category) => (



  <button



  key={category}



  type="button"



  onClick={() => setActiveCategory(category)}



  className={`shrink-0 rounded-xl border px-4 py-2.5 text-xs font-semibold transition ${



    activeCategory === category



    ? "border-cyan-400/25 bg-cyan-400/[0.08] text-cyan-300"



    : "border-[#263B56] bg-[#101D32] text-slate-500 hover:border-[#36506F] hover:text-slate-300"



  }`}



  >



  {category}



</button>



))}



</div>



{filteredProducts.length > 0 ? (



<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">



  {filteredProducts.map((product) => (



  <ProductCard key={product.id} product={product} />



))}



</div>



) : (



<div className="rounded-2xl border border-dashed border-[#2A405D] bg-[#101D32] px-6 py-16 text-center">



  <p className="text-sm font-semibold text-white">



    No overlays found



  </p>



  <p className="mt-1 text-xs text-slate-600">



    Try another search or category.



  </p>



</div>



)}



</section>



{/* \*\*\* HOW IT WORKS \*\*\\\\\\\\\\\\\\\*\**/}



<section



id="how-it-works"



className="relative z-10 border-y border-white/[0.05] bg-white/[0.012]"



>



<div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">



  <div className="mb-10 text-center">



    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-400">



      Simple Process



    </p>



    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">



      From Idea To Stream



    </h2>



  </div>



  <div className="grid grid-cols-1 gap-4 md:grid-cols-4">



    {[



    ["01", "Choose", "Pick an overlay from the VIDNOVA library."],



    ["02", "Customize", "Change colors, text, animations and more."],



    ["03", "Checkout", "Complete your order securely."],



    ["04", "Download", "Get your finished overlay and start streaming."],



  ].map(([number, title, description]) => (



  <div



  key={number}



  className="rounded-2xl border border-[#263B56] bg-[#101D32] p-5"



  >



  <span className="text-xs font-bold text-cyan-400">



    {number}



  </span>



  <h3 className="mt-5 text-sm font-semibold text-white">



    {title}



  </h3>



  <p className="mt-2 text-xs leading-5 text-slate-500">



    {description}



  </p>



</div>



))}



</div>



</div>



</section>



{/* \*\*\* CTA \*\*\\\\\\\\\\\\\\\*\**/}



<section className="relative z-10 mx-auto max-w-[1000px] px-4 py-20 text-center sm:px-6 lg:px-8">



  <div className="relative overflow-hidden rounded-[28px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-[#101D32] to-violet-500/[0.06] px-6 py-12 sm:px-12">



    <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[80px]" />



    <div className="relative">



      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-400">



        Ready To Stream?



      </p>



      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">



        Make Your Stream Stand Out.



      </h2>



      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">



        Choose your favorite overlay and start creating your own



        livestream identity.



      </p>



      <a



      href="#explore"



      className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(0,150,255,0.2)] transition hover:-translate-y-0.5"



      >



      Explore Overlays



    </a>



  </div>



</div>



</section>



{/* \*\*\* FOOTER \*\*\\\\\\\\\\\\\\\*\**/}



<footer className="relative z-10 border-t border-white/[0.06]">



  <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">



    <div>



      <img



      src={assetPath("/images/vidnova_teks.png")}



      alt="VIDNOVA"



      className="w-[105px] object-contain opacity-80"



      />



      <p className="mt-2 text-[10px] text-slate-600">



        Create. Customize. Stream.



      </p>



    </div>



    <p className="text-[10px] text-slate-600">



      © 2026 VIDNOVA. All rights reserved.



    </p>



  </div>



</footer>



</main>



);



}



function ProductCard({ product }: { product: Product }) {



  return (



  <article className="group overflow-hidden rounded-2xl border border-[#263B56] bg-[#101D32] transition duration-200 hover:-translate-y-0.5 hover:border-[#3A5575] hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]">



    <div className="relative aspect-[16/10] overflow-hidden bg-[#07101E]">



      <video



      src={product.video}



      muted



      loop



      playsInline



      preload="metadata"



      className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"



      />



      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />



      <div className="absolute left-3 top-3">



        <span className="rounded-full border border-white/[0.08] bg-black/35 px-2.5 py-1 text-[10px] font-medium text-slate-300 backdrop-blur-md">



          {product.category}



        </span>



      </div>



      <div className="absolute bottom-3 left-3 right-3">



        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300">



          MP4 Overlay



        </p>



      </div>



    </div>



    <div className="p-4">



      <h3 className="truncate text-sm font-semibold text-white">



        {product.name}



      </h3>



      <p className="mt-1 min-h-[32px] text-xs leading-4 text-slate-500">



        {product.description}



      </p>



      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/[0.05] pt-4">



        <div>



          <p className="text-[9px] uppercase tracking-[0.12em] text-slate-600">



            Price



          </p>



          <p className="mt-1 text-sm font-semibold text-cyan-300">



            {formatCurrency(product.price)}



          </p>



        </div>



        <Link



        href={`/customize/${product.id}`}



        className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-[11px] font-semibold text-white transition hover:shadow-[0_8px_25px_rgba(0,160,255,0.2)]"



        >



        Customize



      </Link>



    </div>



  </div>



</article>



);



}
