"use client";

import { motion } from 'motion/react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface PageHeroImageProps {
  kicker?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeroImage({
  kicker,
  title,
  description,
  imageSrc,
  imageAlt,
  breadcrumbs,
}: PageHeroImageProps) {
  return (
    <section className="relative bg-brand-dark overflow-hidden min-h-[45vh] md:min-h-[55vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex mb-8 text-xs font-semibold tracking-wider text-gray-400 uppercase"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center">
                {i > 0 && <span className="mx-2 text-gray-600">/</span>}
                {crumb.onClick ? (
                  <button
                    onClick={crumb.onClick}
                    className="hover:text-brand-red transition-colors cursor-pointer"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="text-brand-red">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: breadcrumbs ? 0.15 : 0 }}
          className="max-w-2xl"
        >
          {kicker && (
            <span className="inline-flex items-center gap-1.5 text-brand-red font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              {kicker}
            </span>
          )}
          <h1 className="font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 md:mt-5 text-sm md:text-base text-gray-300 leading-relaxed max-w-xl font-light">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
