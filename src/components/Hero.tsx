import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/spotlight";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[40rem] w-full rounded-md md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          DaiKai
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eveniet repellendus inventore obcaecati possimus, enim nam officia consectetur aut omnis voluptates in impedit vitae architecto beatae corporis. Aliquid, maxime officia!
          Nesciunt harum inventore dignissimos assumenda quam, et fugiat vero esse, enim nulla error ipsa, nihil itaque minima aspernatur ullam a deserunt quis molestiae consectetur? Sed facere deleniti reiciendis temporibus corrupti?
          
        </p>
      </div>
      {/* button */}
      <div className="flex gap-10 mt-10">
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <Link href={"/user/login"}>User Login</Link>
        </button>
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <Link href={"/club/login"}>Club Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
