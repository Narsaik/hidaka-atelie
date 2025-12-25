"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DressDrawing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");

    // Set initial state - all paths hidden
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });
    });

    // Create scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    // Animate each path with stagger
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none",
        },
        index * 0.2
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-1/4 left-10 w-32 h-32 rounded-full opacity-20"
        style={{ backgroundColor: "#8b7355", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full opacity-20"
        style={{ backgroundColor: "#b5a48c", filter: "blur(80px)" }}
      />

      {/* SVG Dress Drawing */}
      <svg
        ref={svgRef}
        viewBox="0 0 400 600"
        className="w-64 md:w-80 lg:w-96 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Elegant Evening Gown - Hand-drawn style */}
        {/* Neckline */}
        <path
          d="M160 80 C180 70, 220 70, 240 80"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Left shoulder strap */}
        <path
          d="M160 80 C155 90, 150 110, 145 130"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Right shoulder strap */}
        <path
          d="M240 80 C245 90, 250 110, 255 130"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Bodice left */}
        <path
          d="M145 130 C140 160, 145 200, 150 240"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Bodice right */}
        <path
          d="M255 130 C260 160, 255 200, 250 240"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Waistline */}
        <path
          d="M150 240 C170 235, 230 235, 250 240"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Skirt left flowing */}
        <path
          d="M150 240 C120 320, 80 420, 60 550"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Skirt right flowing */}
        <path
          d="M250 240 C280 320, 320 420, 340 550"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Skirt bottom hem */}
        <path
          d="M60 550 C120 560, 200 565, 200 560 C200 565, 280 560, 340 550"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Inner drape 1 */}
        <path
          d="M170 250 C165 330, 150 430, 140 520"
          stroke="#8b7355"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Inner drape 2 */}
        <path
          d="M230 250 C235 330, 250 430, 260 520"
          stroke="#8b7355"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Center fold */}
        <path
          d="M200 245 C200 350, 200 450, 200 540"
          stroke="#8b7355"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Detail flourish left */}
        <path
          d="M155 180 C165 175, 175 180, 180 190"
          stroke="#b5a48c"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
        {/* Detail flourish right */}
        <path
          d="M245 180 C235 175, 225 180, 220 190"
          stroke="#b5a48c"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ opacity: 0 }}
        />
      </svg>

      {/* Text overlay */}
      <div className="absolute bottom-20 left-0 right-0 text-center">
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: "#8b7355", letterSpacing: "0.3em" }}
        >
          Cada traço, uma história
        </p>
      </div>
    </div>
  );
}
