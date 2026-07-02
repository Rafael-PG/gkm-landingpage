"use client";

import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface PageHeroIllustrationProps {
  kicker?: string;
  title: ReactNode;
  description?: string;
  features?: string[];
  illustration: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeroIllustration({
  kicker,
  title,
  description,
  features,
  illustration,
  breadcrumbs,
}: PageHeroIllustrationProps) {
  return (
    <section className="relative bg-brand-dark overflow-hidden -mt-20 pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute top-1/4 left-1/2 w-[700px] md:w-[1000px] h-[500px] md:h-[700px] bg-brand-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: breadcrumbs ? 0.15 : 0 }}
            className="lg:col-span-6"
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
            <div className="h-[3px] w-[120px] bg-gradient-to-r from-brand-red via-brand-red to-brand-red/40 rounded-full mt-4 md:mt-5" />
            {description && (
              <p className="mt-4 md:mt-5 text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl font-light">
                {description}
              </p>
            )}
            {features && features.length > 0 && (
              <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                {features.map((feat) => (
                  <span
                    key={feat}
                    className="px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[10px] md:text-xs text-gray-300 font-medium tracking-wide"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-radial from-brand-red/8 to-transparent rounded-3xl blur-xl" />
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-3 md:p-4 shadow-2xl">
                {illustration}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
