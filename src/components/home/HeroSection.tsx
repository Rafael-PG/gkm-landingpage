"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { heroSlides } from '@/app/home-data';

export default function HeroSection() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <section
      className="relative min-h-screen bg-brand-dark flex items-center justify-center text-white -mt-20 pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute -top-20 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: idx === currentSlide ? 1 : 0 }}
          >
            <Image src={slide.image} alt="" fill className="object-cover" priority={idx === 0} />
          </div>
        ))}
        <div className="absolute inset-0 bg-brand-dark/75" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        <div
          key={currentSlide}
          className="space-y-8 animate-hero-fade-in"
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-brand-red animate-hero-slide-up" style={{ animationDelay: '0.1s' }}>
            <span>{heroSlides[currentSlide].subtitle}</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter leading-none animate-hero-slide-up" style={{ animationDelay: '0.2s' }}>
            {heroSlides[currentSlide].title.split(' ').map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-brand-red">{word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-xl font-sans font-light leading-relaxed animate-hero-slide-up" style={{ animationDelay: '0.35s' }}>
            {heroSlides[currentSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-hero-slide-up" style={{ animationDelay: '0.5s' }}>
            <button
              onClick={() => { router.push(heroSlides[currentSlide].path); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-red hover:bg-brand-red text-white font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-brand-red/30 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Ver Servicio</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </button>

            <button
              onClick={() => { router.push('/contacto'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-400 hover:border-white text-white font-semibold rounded-xl text-sm transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              Contactar un Ingeniero
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className="relative h-1.5 rounded-full transition-all duration-500 cursor-pointer overflow-hidden"
            style={{ width: idx === currentSlide ? '40px' : '12px' }}
            aria-label={`Ir al slide ${idx + 1}`}
          >
            <span className="absolute inset-0 bg-white/20 rounded-full" />
            {idx === currentSlide && (
              <span className="absolute inset-0 bg-white rounded-full origin-left animate-hero-progress" />
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-hero-fade-in" style={{ animationDelay: '1.2s' }}>
        <ChevronDown className="w-5 h-5 text-white/30 animate-hero-bounce" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-light to-transparent" />

      <style>{`
        @keyframes heroFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes heroSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes heroProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes heroBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
        .animate-hero-fade-in { animation: heroFadeIn 0.6s ease-out forwards; }
        .animate-hero-slide-up { opacity: 0; animation: heroSlideUp 0.6s ease-out forwards; }
        .animate-hero-progress { animation: heroProgress 5.5s linear forwards; }
        .animate-hero-bounce { animation: heroBounce 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
