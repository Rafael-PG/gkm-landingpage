"use client";

import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

const BelowFold = dynamic(() => import('@/components/home/BelowFold'), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <h1 className="sr-only">GKM Technology — Servicios TI Corporativos en Perú</h1>
      <HeroSection />
      <BelowFold />
    </div>
  );
}
